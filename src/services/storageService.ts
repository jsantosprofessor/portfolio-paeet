import * as XLSX from 'xlsx';

const DB_NAME = 'PAEET_STORAGE_DB';
const DB_VERSION = 1;
const STORE_PDFS = 'student_pdfs';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_PDFS)) {
        db.createObjectStore(STORE_PDFS, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function savePDFBlob(id: string, file: Blob, metadata: Record<string, any>): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_PDFS, 'readwrite');
    const store = transaction.objectStore(STORE_PDFS);
    const item = {
      id,
      blob: file,
      ...metadata,
      savedAt: new Date().toISOString()
    };
    const req = store.put(item);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

export async function getPDFBlob(id: string): Promise<Blob | null> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_PDFS, 'readonly');
      const store = transaction.objectStore(STORE_PDFS);
      const req = store.get(id);
      req.onsuccess = () => {
        if (req.result && req.result.blob) {
          resolve(req.result.blob);
        } else {
          resolve(null);
        }
      };
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.error('Error fetching PDF from IndexedDB:', err);
    return null;
  }
}

export async function deletePDFBlob(id: string): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_PDFS, 'readwrite');
    const store = transaction.objectStore(STORE_PDFS);
    const req = store.delete(id);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

/**
 * Generates an official-looking SEDUC-SP Excel spreadsheet (.xlsx) with sample students and grades.
 */
export function generateSampleExcelBlob(): Blob {
  const sampleData = [
    {
      'RA': '112.443.901-2 SP',
      'Nome do Estudante': 'Gabriel Mendonça de Oliveira',
      'Turma': '2ª Série A - DS',
      'Curso': 'Desenvolvimento de Sistemas',
      'Disciplina': 'Programação Web I',
      '1º Bimestre': 9.0,
      '2º Bimestre': 9.5,
      '3º Bimestre': 10.0,
      '4º Bimestre': 9.5,
      'Frequência (%)': 96.5,
      'Situação': 'Aprovado'
    },
    {
      'RA': '110.887.321-4 SP',
      'Nome do Estudante': 'Beatriz Vasconcelos Ribeiro',
      'Turma': '3ª Série A - DS',
      'Curso': 'Desenvolvimento de Sistemas',
      'Disciplina': 'Técnicas de Programação',
      '1º Bimestre': 9.5,
      '2º Bimestre': 9.5,
      '3º Bimestre': 10.0,
      '4º Bimestre': 10.0,
      'Frequência (%)': 98.0,
      'Situação': 'Aprovado'
    },
    {
      'RA': '114.772.109-8 SP',
      'Nome do Estudante': 'Lucas Henrique de Souza',
      'Turma': '2ª Série A - DS',
      'Curso': 'Desenvolvimento de Sistemas',
      'Disciplina': 'Banco de Dados',
      '1º Bimestre': 7.0,
      '2º Bimestre': 7.5,
      '3º Bimestre': 8.5,
      '4º Bimestre': 8.0,
      'Frequência (%)': 88.5,
      'Situação': 'Aprovado'
    },
    {
      'RA': '113.551.487-1 SP',
      'Nome do Estudante': 'Camila Fernandes Silveira',
      'Turma': '2ª Série B - ADM',
      'Curso': 'Administração',
      'Disciplina': 'Gestão Organizacional',
      '1º Bimestre': 8.5,
      '2º Bimestre': 9.0,
      '3º Bimestre': 9.0,
      '4º Bimestre': 9.5,
      'Frequência (%)': 94.0,
      'Situação': 'Aprovado'
    },
    {
      'RA': '115.334.908-0 SP',
      'Nome do Estudante': 'Matheus Rodrigues Nogueira',
      'Turma': '2ª Série C - LOG',
      'Curso': 'Logística',
      'Disciplina': 'Cadeia de Suprimentos',
      '1º Bimestre': 5.5,
      '2º Bimestre': 5.0,
      '3º Bimestre': 7.0,
      '4º Bimestre': 7.5,
      'Frequência (%)': 87.5,
      'Situação': 'Recuperação / Progressão'
    },
    {
      'RA': '112.909.112-7 SP',
      'Nome do Estudante': 'Isabela Cristina Prado',
      'Turma': '2ª Série A - DS',
      'Curso': 'Desenvolvimento de Sistemas',
      'Disciplina': 'Análise e Projeto de Sistemas',
      '1º Bimestre': 8.0,
      '2º Bimestre': 8.5,
      '3º Bimestre': 9.0,
      '4º Bimestre': 8.5,
      'Frequência (%)': 92.4,
      'Situação': 'Aprovado'
    },
    {
      'RA': '116.220.841-9 SP',
      'Nome do Estudante': 'Rodrigo Alvarenga Ramos',
      'Turma': '1ª Série A - DS',
      'Curso': 'Desenvolvimento de Sistemas',
      'Disciplina': 'Lógica de Programação',
      '1º Bimestre': 6.0,
      '2º Bimestre': 5.5,
      '3º Bimestre': 6.0,
      '4º Bimestre': 5.0,
      'Frequência (%)': 78.0,
      'Situação': 'Atenção / Busca Ativa'
    },
    {
      'RA': '111.450.998-3 SP',
      'Nome do Estudante': 'Felipe Augusto Barreto',
      'Turma': '3ª Série A - DS',
      'Curso': 'Desenvolvimento de Sistemas',
      'Disciplina': 'Redes e Cibersegurança',
      '1º Bimestre': 9.0,
      '2º Bimestre': 9.0,
      '3º Bimestre': 9.5,
      '4º Bimestre': 9.5,
      'Frequência (%)': 95.8,
      'Situação': 'Aprovado'
    }
  ];

  const worksheet = XLSX.utils.json_to_sheet(sampleData);
  // Column widths
  worksheet['!cols'] = [
    { wch: 18 }, // RA
    { wch: 32 }, // Nome
    { wch: 18 }, // Turma
    { wch: 28 }, // Curso
    { wch: 30 }, // Disciplina
    { wch: 12 }, // B1
    { wch: 12 }, // B2
    { wch: 12 }, // B3
    { wch: 12 }, // B4
    { wch: 16 }, // Frequência
    { wch: 24 }  // Situação
  ];

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Boletim_Novotec_SEDUC');

  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  return new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
}

export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
