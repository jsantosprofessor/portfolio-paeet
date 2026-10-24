import * as XLSX from 'xlsx';
import { BoletimEstudante, NotaDisciplina, Estudante } from '../types';

export interface ParsedStudentRow {
  ra: string;
  nome: string;
  turma: string;
  curso: string;
  disciplina: string;
  b1?: number | null;
  b2?: number | null;
  b3?: number | null;
  b4?: number | null;
  media: number;
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
  return String(header)
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

/**
 * Converte valor de célula para nota (0 a 10).
 * Retorna null se a célula estiver em branco, '-' ou não preenchida (ex: 4º bimestre ainda não lançado).
 */
function parseGrade(val: any): number | null {
  if (val === undefined || val === null) return null;
  const str = String(val).trim().replace(',', '.');
  if (str === '' || str === '-' || str.toLowerCase() === 'nd' || str.toLowerCase() === 'nc' || str.toLowerCase() === 'sem nota') {
    return null;
  }
  const num = parseFloat(str);
  if (isNaN(num)) return null;
  return Math.max(0, Math.min(10, num));
}

function parseFrequencia(val: any): number {
  if (val === undefined || val === null || val === '') return 90;
  if (typeof val === 'number') {
    // Se estiver no formato decimal (ex: 0.92 = 92%)
    if (val > 0 && val <= 1) return Math.round(val * 100);
    return Math.max(0, Math.min(100, val));
  }
  const str = String(val).replace('%', '').replace(',', '.').trim();
  const num = parseFloat(str);
  if (isNaN(num)) return 90;
  if (num > 0 && num <= 1) return Math.round(num * 100);
  return Math.max(0, Math.min(100, num));
}

export async function parseExcelOrCSV(file: File): Promise<ExcelParseResult> {
  const buffer = await file.arrayBuffer();
  const workbook = XLSX.read(buffer, { type: 'array' });

  const parsedRows: ParsedStudentRow[] = [];

  // Itera sobre todas as abas da planilha (ex: turmas ou bimestres separados)
  for (const sheetName of workbook.SheetNames) {
    const worksheet = workbook.Sheets[sheetName];
    if (!worksheet) continue;

    const rawJson: any[] = XLSX.utils.sheet_to_json(worksheet, { defval: '' });
    if (!rawJson || rawJson.length === 0) continue;

    for (const row of rawJson) {
      let ra = '';
      let nome = '';
      let turma = '';
      let curso = '';
      let disciplina = '';
      let b1: number | null = null;
      let b2: number | null = null;
      let b3: number | null = null;
      let b4: number | null = null;
      let frequencia = 90;

      for (const [key, val] of Object.entries(row)) {
        const normKey = normalizeHeader(key);

        if (normKey.includes('ra') || normKey.includes('matricula')) {
          ra = String(val).trim();
        } else if (normKey.includes('nome') || normKey.includes('aluno') || normKey.includes('estudante')) {
          nome = String(val).trim();
        } else if (normKey.includes('turma') || normKey.includes('serie') || normKey.includes('classe')) {
          turma = String(val).trim();
        } else if (normKey.includes('curso') || normKey.includes('habilitacao') || normKey.includes('itinerario')) {
          curso = String(val).trim();
        } else if (normKey.includes('disciplina') || normKey.includes('componente') || normKey.includes('materia')) {
          disciplina = String(val).trim();
        } else if (
          normKey.includes('1') &&
          (normKey.includes('bim') || normKey.includes('b1') || normKey.includes('nota') || normKey.includes('n1'))
        ) {
          b1 = parseGrade(val);
        } else if (
          normKey.includes('2') &&
          (normKey.includes('bim') || normKey.includes('b2') || normKey.includes('nota') || normKey.includes('n2'))
        ) {
          b2 = parseGrade(val);
        } else if (
          normKey.includes('3') &&
          (normKey.includes('bim') || normKey.includes('b3') || normKey.includes('nota') || normKey.includes('n3'))
        ) {
          b3 = parseGrade(val);
        } else if (
          normKey.includes('4') &&
          (normKey.includes('bim') || normKey.includes('b4') || normKey.includes('nota') || normKey.includes('n4'))
        ) {
          b4 = parseGrade(val);
        } else if (
          normKey.includes('freq') ||
          normKey.includes('presen') ||
          normKey.includes('assid') ||
          normKey.includes('% pres')
        ) {
          frequencia = parseFrequencia(val);
        }
      }

      // Se achou aluno válido
      if (nome || ra) {
        // Se a turma não veio explícita, usa o nome da aba se parecer uma turma
        if (!turma && (sheetName.includes('º') || sheetName.includes('ª') || sheetName.includes('EM') || sheetName.includes('DS') || sheetName.includes('ADM'))) {
          turma = sheetName;
        }

        // Calcula média apenas com os bimestres que foram efetivamente lançados
        const notasPresentes: number[] = [];
        if (b1 !== null) notasPresentes.push(b1);
        if (b2 !== null) notasPresentes.push(b2);
        if (b3 !== null) notasPresentes.push(b3);
        if (b4 !== null) notasPresentes.push(b4);

        const media = notasPresentes.length > 0
          ? Number((notasPresentes.reduce((acc, n) => acc + n, 0) / notasPresentes.length).toFixed(1))
          : 0;

        const warnings: string[] = [];
        if (notasPresentes.length > 0 && media < 7.0) {
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
          media,
          frequencia,
          warnings
        });
      }
    }
  }

  // Agrupa linhas por Estudante (RA ou Nome)
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
      // Tendência personalizada para quem tem 1º, 2º e 3º bimestres:
      let tendencia: 'Progressão' | 'Estável' | 'Regressão' = 'Estável';

      if (typeof r.b1 === 'number' && typeof r.b2 === 'number' && typeof r.b3 === 'number' && typeof r.b4 === 'number') {
        // Ano completo (4 bimestres)
        const m1 = (r.b1 + r.b2) / 2;
        const m2 = (r.b3 + r.b4) / 2;
        if (m2 - m1 >= 0.6) tendencia = 'Progressão';
        else if (m1 - m2 >= 0.6) tendencia = 'Regressão';
      } else if (typeof r.b1 === 'number' && typeof r.b2 === 'number' && typeof r.b3 === 'number') {
        // Exatamente 1º, 2º e 3º bimestres (caso clássico de mapão até o momento)
        const m1 = (r.b1 + r.b2) / 2;
        if (r.b3 - m1 >= 0.6) tendencia = 'Progressão';
        else if (m1 - r.b3 >= 0.6) tendencia = 'Regressão';
      } else if (typeof r.b1 === 'number' && typeof r.b2 === 'number') {
        // 1º e 2º bimestres
        if (r.b2 - r.b1 >= 0.6) tendencia = 'Progressão';
        else if (r.b1 - r.b2 >= 0.6) tendencia = 'Regressão';
      }

      return {
        disciplina: r.disciplina,
        b1: r.b1 ?? 0,
        b2: r.b2 ?? 0,
        b3: r.b3 ?? 0,
        b4: r.b4 ?? 0,
        media: r.media,
        tendencia
      };
    });

    // Calcula tendência global do estudante
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
