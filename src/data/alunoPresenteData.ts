export interface EvidenciaAlunoPresente {
  id: string;
  titulo: string;
  subtitulo: string;
  imagemUrl: string;
  semanas?: string;
  categoria: 'Visão Geral Turmas' | 'Série Histórica' | 'Frequência Nominal';
  dataExtracao: string;
  descricao: string;
  destaques: { label: string; valor: string; destaque?: boolean }[];
}

export interface FrequenciaAlunoPresente {
  ra: string;
  dig: string;
  nome: string;
  riscoReprovacao: boolean;
  presencaAnual: number;
  presencaSemanaAtual: number;
  presencaSemanaAnterior: number;
}

export interface SemanaHistorica {
  numero: number;
  periodo: string;
  evento?: string;
  presenca: number;
}

export const metadadosTurmaSED = {
  escola: 'JOÃO ALVES MONSENHOR - 14023',
  cidade: 'Taubaté - SP',
  tipoEstabelecimento: 'PEI - Programa Ensino Integral',
  regime: 'Integral 9H',
  curso: '6082 - DESENVOLVIMENTO DE SISTEMAS',
  turma: '2ª SÉRIE C INTEGRAL 9H ANUAL',
  idClasse: '300423574',
  idTurma: '41138971',
  dataInicio: '02/02/2026',
  dataFim: '18/12/2026',
  matriculasAtivas: 27,
  presencaTurma: 91.4,
  evolucaoPresenca: '+5,9% ⬆',
  aulasPrevistas: 40,
  aulasDadas: 32,
  percentualAulasDadas: 80.0,
  evolucaoAulas: '+42,5% ⬆',
  supervisora: 'IRANI AUXILIADORA ALVES DA SILVA'
};

export const evidenciasAlunoPresente: EvidenciaAlunoPresente[] = [
  {
    id: 'ev-ap-1',
    titulo: 'Painel Geral da Escola & Comparativo de Turmas',
    subtitulo: 'Plataforma Aluno Presente — E.E. Monsenhor João Alves',
    imagemUrl: '/aluno-presente/aluno-presente-semanas-16-30.png',
    categoria: 'Visão Geral Turmas',
    dataExtracao: 'Ano Letivo 2026 (Semana 38)',
    descricao: 'Comprova 27 matrículas ativas na 2ª C DS Novotec, 91,4% de presença da turma com evolução de +5,9% e 80% das aulas dadas sob supervisão de Irani Auxiliadora.',
    destaques: [
      { label: 'Matrículas Ativas', valor: '27 alunos', destaque: true },
      { label: '% Presença Geral', valor: '91,4%', destaque: true },
      { label: 'Evolução Presença', valor: '+5,9% ⬆' },
      { label: 'Aulas Dadas', valor: '32 / 40 (80,0%)' }
    ]
  },
  {
    id: 'ev-ap-2',
    titulo: 'Série Histórica Semanal — Semanas 01 a 15',
    subtitulo: '1º e 2º Bimestres Letivos — Aluno Presente FDE/SEDUC',
    imagemUrl: '/aluno-presente/aluno-presente-semanas-01-15.png',
    semanas: 'Semanas 01 a 15',
    categoria: 'Série Histórica',
    dataExtracao: 'Fevereiro a Maio/2026',
    descricao: 'Demonstra a evolução contínua da frequência da turma, iniciando em 69,3% no acolhimento de fevereiro e superando a meta estadual (atingindo até 95,7% após tratativas de busca ativa).',
    destaques: [
      { label: 'Início 1º Bimestre', valor: '69,3%' },
      { label: 'Fluência Leitora', valor: '80,5%' },
      { label: 'Mapa Classe B1', valor: '89,3%' },
      { label: 'Pico 1º Bimestre', valor: '95,7%', destaque: true }
    ]
  },
  {
    id: 'ev-ap-3',
    titulo: 'Série Histórica Semanal — Semanas 16 a 30',
    subtitulo: '2º e 3º Bimestres Letivos — Aluno Presente FDE/SEDUC',
    imagemUrl: '/aluno-presente/aluno-presente-semanas-16-30.png',
    semanas: 'Semanas 16 a 30',
    categoria: 'Série Histórica',
    dataExtracao: 'Maio a Agosto/2026',
    descricao: 'Monitoramento durante provas oficiais (OMASP, Prova Paulista e SARESP), recesso escolar e início do 3º Bimestre, com taxas de presença consistentemente entre 92% e 99,5%.',
    destaques: [
      { label: 'Prova Paulista', valor: '92,1%' },
      { label: 'SARESP', valor: '92,8%' },
      { label: 'Normalidade Junho', valor: '99,5%', destaque: true },
      { label: 'Início 3º Bimestre', valor: '100,0%', destaque: true }
    ]
  },
  {
    id: 'ev-ap-4',
    titulo: 'Série Histórica Semanal — Semanas 24 a 38',
    subtitulo: '3º e 4º Bimestres Letivos — Aluno Presente FDE/SEDUC',
    imagemUrl: '/aluno-presente/aluno-presente-semanas-24-38.png',
    semanas: 'Semanas 24 a 38',
    categoria: 'Série Histórica',
    dataExtracao: 'Julho a Outubro/2026',
    descricao: 'Série histórica que culmina na Semana 38 com 91,4% de presença, comprovando a permanência e a assiduidade estável dos alunos no último bimestre letivo.',
    destaques: [
      { label: 'Mapa Classe B3', valor: '97,1%', destaque: true },
      { label: 'Prova Paulista B3', valor: '95,4%' },
      { label: 'Início 4º Bimestre', valor: '94,7%' },
      { label: 'Semana 38 Atual', valor: '91,4%', destaque: true }
    ]
  },
  {
    id: 'ev-ap-5',
    titulo: 'Relação Nominal Oficial de Frequência — 27 Estudantes',
    subtitulo: 'Extração Oficial Aluno Presente / SEDUC-SP (Partes 1 e 2)',
    imagemUrl: '/aluno-presente/aluno-presente-nominal-parte1.png',
    categoria: 'Frequência Nominal',
    dataExtracao: 'Semana 38 (Atualizada)',
    descricao: 'Listagem nominal completa com RA e dígito, índice de Presença Anual, Presença na Semana Atual e Semana Anterior de todos os 27 alunos da 2ª Série C DS.',
    destaques: [
      { label: 'Total Estudantes', valor: '27 Alunos', destaque: true },
      { label: 'Assiduidade Anual Média', valor: '90,9%' },
      { label: 'Alunos ≥ 85% Anual', valor: '21 alunos (78%)' },
      { label: 'Alunos < 85% Anual', valor: '6 alunos (Acompanhados)' }
    ]
  }
];

export const serieHistoricaCompleta38Semanas: SemanaHistorica[] = [
  { numero: 1, periodo: '01/02 a 07/02', evento: 'Início 1º BIM', presenca: 69.3 },
  { numero: 2, periodo: '08/02 a 14/02', evento: 'Atividades', presenca: 72.4 },
  { numero: 4, periodo: '22/02 a 28/02', evento: 'Normalidade', presenca: 75.4 },
  { numero: 5, periodo: '01/03 a 07/03', evento: 'Normalidade', presenca: 77.3 },
  { numero: 6, periodo: '08/03 a 14/03', evento: 'Fluência Leitora', presenca: 80.5 },
  { numero: 7, periodo: '15/03 a 21/03', evento: 'Normalidade', presenca: 93.3 },
  { numero: 8, periodo: '22/03 a 28/03', evento: 'Normalidade', presenca: 89.9 },
  { numero: 9, periodo: '29/03 a 04/04', evento: 'Mapa Classe', presenca: 89.3 },
  { numero: 10, periodo: '05/04 a 11/04', evento: 'Normalidade', presenca: 95.7 },
  { numero: 11, periodo: '12/04 a 18/04', evento: 'Prova Paulista', presenca: 93.4 },
  { numero: 12, periodo: '19/04 a 25/04', evento: 'Início 2º BIM', presenca: 93.5 },
  { numero: 13, periodo: '26/04 a 02/05', evento: 'Feriado', presenca: 94.8 },
  { numero: 14, periodo: '03/05 a 09/05', evento: 'Normalidade', presenca: 93.5 },
  { numero: 15, periodo: '10/05 a 16/05', evento: 'Normalidade', presenca: 94.2 },
  { numero: 16, periodo: '17/05 a 23/05', evento: 'OMASP', presenca: 92.5 },
  { numero: 17, periodo: '24/05 a 30/05', evento: 'Normalidade', presenca: 94.8 },
  { numero: 18, periodo: '31/05 a 06/06', evento: 'Mapa Classe', presenca: 86.8 },
  { numero: 19, periodo: '07/06 a 13/06', evento: 'Normalidade', presenca: 93.9 },
  { numero: 20, periodo: '14/06 a 20/06', evento: 'Prova Paulista', presenca: 92.1 },
  { numero: 21, periodo: '21/06 a 27/06', evento: 'SARESP', presenca: 92.8 },
  { numero: 22, periodo: '28/06 a 04/07', evento: 'Normalidade', presenca: 99.5 },
  { numero: 23, periodo: '05/07 a 11/07', evento: 'Férias', presenca: 100.0 },
  { numero: 25, periodo: '19/07 a 25/07', evento: 'Início 3º BIM', presenca: 100.0 },
  { numero: 26, periodo: '26/07 a 01/08', evento: 'Recuperação', presenca: 92.5 },
  { numero: 27, periodo: '02/08 a 08/08', evento: 'OMASP', presenca: 96.0 },
  { numero: 28, periodo: '09/08 a 15/08', evento: 'Atividades', presenca: 96.0 },
  { numero: 29, periodo: '16/08 a 22/08', evento: 'Normalidade', presenca: 98.7 },
  { numero: 30, periodo: '23/08 a 29/08', evento: 'OLISP', presenca: 96.5 },
  { numero: 31, periodo: '30/08 a 05/09', evento: 'Normalidade', presenca: 92.9 },
  { numero: 32, periodo: '06/09 a 12/09', evento: 'Feriado', presenca: 95.0 },
  { numero: 33, periodo: '13/09 a 19/09', evento: 'Mapa Classe', presenca: 97.1 },
  { numero: 34, periodo: '20/09 a 26/09', evento: 'Prova Paulista', presenca: 95.4 },
  { numero: 35, periodo: '27/09 a 03/10', evento: 'Normalidade', presenca: 95.9 },
  { numero: 36, periodo: '04/10 a 10/10', evento: 'Início 4º BIM', presenca: 94.7 },
  { numero: 37, periodo: '11/10 a 17/10', evento: 'Feriado', presenca: 85.5 },
  { numero: 38, periodo: '18/10 a 24/10', evento: 'Semana Atual', presenca: 91.4 }
];

export const alunosFrequenciaOficial: FrequenciaAlunoPresente[] = [
  { ra: '000113020630', dig: '0', nome: 'ANGELUS MIGUEL FERREIRA CLARO', riscoReprovacao: false, presencaAnual: 98.0, presencaSemanaAtual: 88.0, presencaSemanaAnterior: 60.0 },
  { ra: '000112737863', dig: '6', nome: 'ARTHUR CLARO GALVÃO', riscoReprovacao: false, presencaAnual: 96.0, presencaSemanaAtual: 100.0, presencaSemanaAnterior: 100.0 },
  { ra: '000112731673', dig: '4', nome: 'ARTHUR HENRIQUE BASTOS', riscoReprovacao: false, presencaAnual: 87.0, presencaSemanaAtual: 75.0, presencaSemanaAnterior: 60.0 },
  { ra: '000111159378', dig: '4', nome: 'BEATRIZ MORAES PALOMARES', riscoReprovacao: false, presencaAnual: 98.0, presencaSemanaAtual: 88.0, presencaSemanaAnterior: 100.0 },
  { ra: '000113077738', dig: '8', nome: 'BETHÂNIA FÁTIMA DA COSTA', riscoReprovacao: false, presencaAnual: 98.0, presencaSemanaAtual: 100.0, presencaSemanaAnterior: 100.0 },
  { ra: '000111619938', dig: '5', nome: 'CARLOS EDUARDO CANFORA DE MELO CAMPOS', riscoReprovacao: false, presencaAnual: 87.0, presencaSemanaAtual: 88.0, presencaSemanaAnterior: 100.0 },
  { ra: '000113802314', dig: '0', nome: 'CLARA LOPES CARVALHO SILVA', riscoReprovacao: false, presencaAnual: 93.0, presencaSemanaAtual: 100.0, presencaSemanaAnterior: 100.0 },
  { ra: '000111190741', dig: '9', nome: 'DAVI LORENZO SARAIVA CHAVES', riscoReprovacao: false, presencaAnual: 87.0, presencaSemanaAtual: 75.0, presencaSemanaAnterior: 87.0 },
  { ra: '000112993406', dig: '8', nome: 'DAVI RODRIGUES DOS SANTOS', riscoReprovacao: false, presencaAnual: 91.0, presencaSemanaAtual: 88.0, presencaSemanaAnterior: 100.0 },
  { ra: '000112674082', dig: '2', nome: 'DIOGO DE CARVALHO PRAZERES', riscoReprovacao: false, presencaAnual: 94.0, presencaSemanaAtual: 88.0, presencaSemanaAnterior: 100.0 },
  { ra: '000111619581', dig: '1', nome: 'GABRIEL QUINTANILHA CLARO', riscoReprovacao: false, presencaAnual: 82.0, presencaSemanaAtual: 72.0, presencaSemanaAnterior: 73.0 },
  { ra: '000111125625', dig: '1', nome: 'GUILHERME RODRIGUES DA SILVA', riscoReprovacao: false, presencaAnual: 97.0, presencaSemanaAtual: 88.0, presencaSemanaAnterior: 47.0 },
  { ra: '000113121811', dig: '5', nome: 'HENRIQUE LUIZ AMORIM MOURA', riscoReprovacao: false, presencaAnual: 80.0, presencaSemanaAtual: 75.0, presencaSemanaAnterior: 100.0 },
  { ra: '000112673906', dig: '6', nome: 'ISADORA LETICIA BARONE DE CASTRO', riscoReprovacao: false, presencaAnual: 82.0, presencaSemanaAtual: 63.0, presencaSemanaAnterior: 33.0 },
  { ra: '000112674148', dig: '6', nome: 'ISMAEL DE ALMEIDA PEREIRA DAMIÃO', riscoReprovacao: false, presencaAnual: 88.0, presencaSemanaAtual: 88.0, presencaSemanaAnterior: 47.0 },
  { ra: '000111585822', dig: '1', nome: 'MARIA LUISA DA SILVA NASCIMENTO', riscoReprovacao: false, presencaAnual: 84.0, presencaSemanaAtual: 75.0, presencaSemanaAnterior: 47.0 },
  { ra: '000110943847', dig: '3', nome: 'MATEUS GABRIEL DA SILVA RICO', riscoReprovacao: false, presencaAnual: 91.0, presencaSemanaAtual: 87.0, presencaSemanaAnterior: 73.0 },
  { ra: '000113346861', dig: '5', nome: 'MATHEUS DE ASSIS OLIVEIRA', riscoReprovacao: false, presencaAnual: 95.0, presencaSemanaAtual: 100.0, presencaSemanaAnterior: 73.0 },
  { ra: '000112179684', dig: '9', nome: 'MATHEUS LUAN MONTEIRO', riscoReprovacao: false, presencaAnual: 97.0, presencaSemanaAtual: 88.0, presencaSemanaAnterior: 73.0 },
  { ra: '000111181779', dig: '0', nome: 'NAYARA VITÓRIA DOS SANTOS BARROS', riscoReprovacao: false, presencaAnual: 96.0, presencaSemanaAtual: 88.0, presencaSemanaAnterior: 87.0 },
  { ra: '000113546941', dig: '6', nome: 'NÍCOLAS GABRIEL DE SOUZA BENTO', riscoReprovacao: false, presencaAnual: 82.0, presencaSemanaAtual: 88.0, presencaSemanaAnterior: 100.0 },
  { ra: '000111722282', dig: '2', nome: 'NYCOLLAS HENRIQUE DA SILVA PAULINO', riscoReprovacao: false, presencaAnual: 89.0, presencaSemanaAtual: 94.0, presencaSemanaAnterior: 73.0 },
  { ra: '000112399083', dig: '9', nome: 'PEDRO HENRIQUE JARDIM DE JESUS', riscoReprovacao: false, presencaAnual: 93.0, presencaSemanaAtual: 97.0, presencaSemanaAnterior: 100.0 },
  { ra: '000113457886', dig: '6', nome: 'RAFAEL CÉSAR BURI NESPOLI', riscoReprovacao: false, presencaAnual: 85.0, presencaSemanaAtual: 75.0, presencaSemanaAnterior: 100.0 },
  { ra: '000109980451', dig: '6', nome: 'SAYMON MARCONDES DE CASTRO ALVES', riscoReprovacao: false, presencaAnual: 93.0, presencaSemanaAtual: 97.0, presencaSemanaAnterior: 47.0 },
  { ra: '000111585883', dig: 'X', nome: 'SOFIA ALMEIDA DA CUNHA', riscoReprovacao: false, presencaAnual: 95.0, presencaSemanaAtual: 88.0, presencaSemanaAnterior: 100.0 },
  { ra: '000111592204', dig: 'X', nome: 'VITOR SANTOS PINTO', riscoReprovacao: false, presencaAnual: 84.0, presencaSemanaAtual: 84.0, presencaSemanaAnterior: 73.0 }
];
