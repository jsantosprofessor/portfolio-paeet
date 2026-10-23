import * as XLSX from 'xlsx';
import { BoletimEstudante, NotaDisciplina, Estudante } from '../types';

export interface ParsedStudentRow {
  ra: string;
  nome: string;
  turma: string;
  curso: string;
  disciplina: string;
  b1: number;
  b2: number;
  b3: number;
  b4: number;
  frequencia: number;
  situacao?: string;
  warnings: string[];
}

export interface ExcelParseResult {
  fileName: string;
  totalLinhasLidas: number;
  totalAlunosUnicos: number;
  alunosEmProgressao: number;
  alunosEmRegressao: number;
  alunosEstaveis: number;
  alertasIdentificados: number;
  boletinsProcessados: BoletimEstudante[];
  estudantesAtualizados: Partial<Estudante>[];
  rawRows: ParsedStudentRow[];
}

function normalizeHeader(header: string): string {
  return header
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function parseNumber(val: any, defaultVal = 0): number {
  if (val === undefined || val === null || val === '') return defaultVal;
  if (typeof val === 'number') return Math.max(0, Math.min(10, val));
  const str = String(val).replace(',', '.').trim();
  const num = parseFloat(str);
  return isNaN(num) ? defaultVal : Math.max(0, Math.min(10, num));
}

function parseFrequencia(val: any): number {
  if (val === undefined || val === null || val === '') return 90;
  if (typeof val === 'number') return Math.max(0, Math.min(100, val));
  const str = String(val).replace('%', '').replace(',', '.').trim();
  const num = parseFloat(str);
  return isNaN(num) ? 90 : Math.max(0, Math.min(100, num));
}

export async function parseExcelOrCSV(file: File): Promise<ExcelParseResult> {
  const buffer = await file.arrayBuffer();
  const workbook = XLSX.read(buffer, { type: 'array' });

  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];

  // Convert to array of objects
  const rawJson: any[] = XLSX.utils.sheet_to_json(worksheet, { defval: '' });

  const parsedRows: ParsedStudentRow[] = [];

  for (const row of rawJson) {
    // Find keys matching flexible column headers
    let ra = '';
    let nome = '';
    let turma = '';
    let curso = '';
    let disciplina = '';
    let b1 = 0;
    let b2 = 0;
    let b3 = 0;
    let b4 = 0;
    let frequencia = 90;

    for (const [key, val] of Object.entries(row)) {
      const normKey = normalizeHeader(key);

      if (normKey.includes('ra') || normKey.includes('matricula')) {
        ra = String(val).trim();
      } else if (normKey.includes('nome') || normKey.includes('aluno') || normKey.includes('estudante')) {
        nome = String(val).trim();
      } else if (normKey.includes('turma') || normKey.includes('serie')) {
        turma = String(val).trim();
      } else if (normKey.includes('curso') || normKey.includes('habilitacao')) {
        curso = String(val).trim();
      } else if (normKey.includes('disciplina') || normKey.includes('componente') || normKey.includes('materia')) {
        disciplina = String(val).trim();
      } else if (normKey.includes('1') && (normKey.includes('bim') || normKey.includes('b1') || normKey.includes('nota'))) {
        b1 = parseNumber(val);
      } else if (normKey.includes('2') && (normKey.includes('bim') || normKey.includes('b2') || normKey.includes('nota'))) {
        b2 = parseNumber(val);
      } else if (normKey.includes('3') && (normKey.includes('bim') || normKey.includes('b3') || normKey.includes('nota'))) {
        b3 = parseNumber(val);
      } else if (normKey.includes('4') && (normKey.includes('bim') || normKey.includes('b4') || normKey.includes('nota'))) {
        b4 = parseNumber(val);
      } else if (normKey.includes('freq') || normKey.includes('presenca')) {
        frequencia = parseFrequencia(val);
      }
    }

    if (nome || ra) {
      const warnings: string[] = [];
      const media = (b1 + b2 + b3 + b4) / 4;

      if (media < 7.0) {
        warnings.push(`Média baixa (${media.toFixed(1)}) — Necessita apoio pedagógico`);
      }
      if (frequencia < 85) {
        warnings.push(`Frequência em risco (${frequencia.toFixed(1)}%) — Alerta de Busca Ativa`);
      }

      parsedRows.push({
        ra: ra || `RA-${Math.floor(100000 + Math.random() * 900000)} SP`,
        nome: nome || 'Estudante Sem Nome',
        turma: turma || '2ª Série A - DS',
        curso: curso || 'Desenvolvimento de Sistemas',
        disciplina: disciplina || 'Tecnologia Aplicada',
        b1,
        b2,
        b3,
        b4,
        frequencia,
        warnings
      });
    }
  }

  // Group rows by student name/RA
  const studentMap = new Map<string, ParsedStudentRow[]>();
  for (const r of parsedRows) {
    const key = r.ra || r.nome;
    if (!studentMap.has(key)) {
      studentMap.set(key, []);
    }
    studentMap.get(key)!.push(r);
  }

  const boletinsProcessados: BoletimEstudante[] = [];
  const estudantesAtualizados: Partial<Estudante>[] = [];

  let emProgressaoCount = 0;
  let emRegressaoCount = 0;
  let estaveisCount = 0;
  let totalAlertas = 0;

  studentMap.forEach((rows, key) => {
    const first = rows[0];
    const studentId = `est-import-${key.replace(/[^a-zA-Z0-9]/g, '')}`;

    const disciplinas: NotaDisciplina[] = rows.map(r => {
      const media = Number(((r.b1 + r.b2 + r.b3 + r.b4) / 4).toFixed(1));
      let tendencia: 'Progressão' | 'Estável' | 'Regressão' = 'Estável';
      const media1Semestre = (r.b1 + r.b2) / 2;
      const media2Semestre = (r.b3 + r.b4) / 2;

      if (media2Semestre - media1Semestre >= 0.7) {
        tendencia = 'Progressão';
      } else if (media1Semestre - media2Semestre >= 0.7) {
        tendencia = 'Regressão';
      }

      return {
        disciplina: r.disciplina,
        b1: r.b1,
        b2: r.b2,
        b3: r.b3,
        b4: r.b4,
        media,
        tendencia
      };
    });

    // Calculate student global trend
    const progressaoItems = disciplinas.filter(d => d.tendencia === 'Progressão').length;
    const regressaoItems = disciplinas.filter(d => d.tendencia === 'Regressão').length;

    let situacaoAcademica: 'Progressão' | 'Estável' | 'Regressão' = 'Estável';
    if (progressaoItems > regressaoItems) {
      situacaoAcademica = 'Progressão';
      emProgressaoCount++;
    } else if (regressaoItems > progressaoItems) {
      situacaoAcademica = 'Regressão';
      emRegressaoCount++;
    } else {
      estaveisCount++;
    }

    const mediaGlobal = Number(
      (disciplinas.reduce((acc, d) => acc + d.media, 0) / (disciplinas.length || 1)).toFixed(1)
    );

    const pontosFortes: string[] = [];
    const pontosAtencao: string[] = [];

    disciplinas.forEach(d => {
      if (d.media >= 8.5) {
        pontosFortes.push(`Desempenho destacado em ${d.disciplina} (Média ${d.media})`);
      } else if (d.media < 7.0) {
        pontosAtencao.push(`Reforço recomendado em ${d.disciplina} (Média ${d.media})`);
        totalAlertas++;
      }
    });

    if (first.frequencia < 85) {
      pontosAtencao.push(`Frequência escolar crítica (${first.frequencia.toFixed(1)}%)`);
      totalAlertas++;
    }

    if (pontosFortes.length === 0) {
      pontosFortes.push('Assiduidade mantida nas aulas práticas de laboratório.');
    }

    boletinsProcessados.push({
      estudanteId: studentId,
      nome: first.nome,
      turma: first.turma,
      curso: first.curso,
      disciplinas,
      pontosFortes: pontosFortes.slice(0, 3),
      pontosAtencao: pontosAtencao.slice(0, 3),
      intervencoesSugeridas:
        situacaoAcademica === 'Regressão'
          ? 'Encaminhado para tutoria individual com monitores e alinhamento com a família.'
          : situacaoAcademica === 'Progressão'
          ? 'Elegível para indicação prioritária ao programa de estágio BEEM e bolsa mérito.'
          : 'Manter acompanhamento regular de frequência e notas bimestrais.',
      dataUltimaImportacao: new Date().toISOString().split('T')[0]
    });

    estudantesAtualizados.push({
      id: studentId,
      nomeCompleto: first.nome,
      nomeAnonimizado: `Estudante ${first.nome.split(' ').map(n => n[0]).join('.')}. (${first.turma.split(' ')[0]})`,
      ra: first.ra,
      turmaId: first.turma.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      cursoId: first.curso.toLowerCase().includes('adm') ? 'adm' : first.curso.toLowerCase().includes('log') ? 'log' : 'ds',
      mediaGeral: mediaGlobal,
      frequenciaGeral: first.frequencia,
      situacaoAcademica,
      statusMatricula: first.frequencia < 80 ? 'Risco de Evasão' : 'Ativo'
    });
  });

  return {
    fileName: file.name,
    totalLinhasLidas: parsedRows.length,
    totalAlunosUnicos: studentMap.size,
    alunosEmProgressao: emProgressaoCount,
    alunosEmRegressao: emRegressaoCount,
    alunosEstaveis: estaveisCount,
    alertasIdentificados: totalAlertas,
    boletinsProcessados,
    estudantesAtualizados,
    rawRows: parsedRows
  };
}
