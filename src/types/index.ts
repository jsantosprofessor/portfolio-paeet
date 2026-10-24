export type UserRole = 'PUBLIC' | 'PAEET_ADMIN' | 'GESTAO_ESCOLAR';

export interface PAEETProfile {
  nome: string;
  cargo: string;
  unidadeEscolar: string;
  diretoriaEnsino: string;
  cidade: string;
  anoLetivo: number;
  email: string;
  avatarUrl: string;
  registroFuncional: string;
  formacao: string;
  resumoAtuacao: string;
  diretorNome?: string;
  brasaoUrl?: string;
}

export interface CursoTecnico {
  id: string;
  nome: string;
  eixoTecnologico: string;
  cargaHoraria: number;
  icone: string;
  cor: string;
  descricao: string;
}

export interface Turma {
  id: string;
  nome: string;
  cursoId: string;
  serie: string;
  periodo: 'Manhã' | 'Tarde' | 'Noite' | 'Integral';
  anoLetivo: number;
  totalAlunos: number;
}

export interface Estudante {
  id: string;
  nomeCompleto: string;
  nomeAnonimizado: string;
  ra: string;
  turmaId: string;
  cursoId: string;
  statusMatricula: 'Ativo' | 'Em Acompanhamento' | 'Risco de Evasão' | 'Transferido';
  frequenciaGeral: number; // Porcentagem (0 - 100)
  situacaoAcademica: 'Progressão' | 'Estável' | 'Regressão';
  mediaGeral: number; // 0 - 10
  estagioStatus: 'Não Iniciado' | 'Inscrito BEEM' | 'Encaminhado' | 'Inserido' | 'Aguardando';
  empresaEstagio?: string;
  bolsaValor?: number;
  telefoneContato?: string;
  email?: string;
}

export interface EmpresaParceira {
  id: string;
  nome: string;
  razaoSocial: string;
  segmento: string;
  cidade: string;
  responsavelContato: string;
  cargoContato: string;
  emailContato: string;
  telefoneContato: string;
  dataPrimeiroContato: string;
  tipoContato: 'E-mail' | 'WhatsApp' | 'Telefone' | 'Visita Presencial' | 'Reunião Online';
  statusNegociacao: 'Mapeada' | 'Em Tratativa' | 'Termo de Compromisso Aberto' | 'Parceria Ativa' | 'Sem Vagas no Momento';
  vagasOfertadas: number;
  estagiariosAtivos: number;
  estrategiaAdotada: string;
  proximaAcao: string;
  historicoTratativas: TratativaHistorico[];
}

export interface TratativaHistorico {
  id: string;
  data: string;
  tipo: 'E-mail' | 'WhatsApp' | 'Reunião' | 'Ligação' | 'Visita';
  descricao: string;
  responsavel: string;
  statusResultado: 'Positivo' | 'Em Espera' | 'Necessita Retorno' | 'Concluído';
}

export interface AcaoItinerario {
  id: string;
  data: string;
  turma: string;
  publicoAlvo: string;
  totalEstudantes: number;
  cursoApresentado: string;
  responsavel: string;
  objetivo: string;
  descricao: string;
  principaisDuvidas: string[];
  resultadosPercebidos: string;
  evidenciasIds: string[];
}

export interface RegistroBuscaAtiva {
  id: string;
  estudanteId: string;
  nomeEstudante: string;
  turma: string;
  data: string;
  situacaoIdentificada: string;
  estrategiaAdotada: string;
  responsavel: string;
  resultado: string;
  frequenciaAntes: number;
  frequenciaDepois?: number;
  status: 'Em Aberto' | 'Em Acompanhamento' | 'Superado / Regularizado';
  proximoEncaminhamento: string;
}

export interface VisitaTecnica {
  id: string;
  instituicao: string;
  cidade: string;
  dataPrevista: string;
  dataEfetiva?: string;
  responsavelInstituicao: string;
  objetivoPedagogico: string;
  turmasParticipantes: string[];
  totalEstudantes: number;
  status: 'Planejada' | 'Em Tratativa' | 'Confirmada' | 'Realizada';
  relatorioResumo?: string;
  competenciasDesenvolvidas: string[];
  linhaDoTempo: { data: string; evento: string; status: 'done' | 'pending' }[];
  fotos?: string[];
  isEspecialCAVEX?: boolean;
}

export interface NotaDisciplina {
  disciplina: string;
  b1: number;
  b2: number;
  b3: number;
  b4: number;
  media: number;
  tendencia: 'Progressão' | 'Estável' | 'Regressão';
}

export interface BoletimEstudante {
  estudanteId: string;
  nome: string;
  turma: string;
  curso: string;
  disciplinas: NotaDisciplina[];
  pontosFortes: string[];
  pontosAtencao: string[];
  intervencoesSugeridas: string;
  dataUltimaImportacao: string;
}

export interface Evidencia {
  id: string;
  titulo: string;
  descricao: string;
  categoria: 
    | 'Estágios BEEM'
    | 'Empresas Parceiras'
    | 'Itinerário Técnico'
    | 'Busca Ativa'
    | 'Visitas Técnicas'
    | 'Desempenho Acadêmico'
    | 'Dia do Profissional de TI'
    | 'Certificação'
    | 'Protagonismo Juvenil'
    | 'Geral';
  tipo: 'Imagem' | 'Documento' | 'WhatsApp' | 'E-mail' | 'Ofício';
  data: string;
  url: string;
  turmaRelacionada?: string;
  empresaRelacionada?: string;
  estudanteRelacionado?: string;
  responsavel: string;
  publicoAutorizado: boolean;
}

export interface Reconhecimento {
  id: string;
  estudanteId: string;
  nomeEstudante: string;
  turma: string;
  curso: string;
  categoria: 'Melhor Desempenho Técnico' | 'Maior Evolução Acadêmica' | 'Protagonismo e Liderança' | 'Assiduidade Exemplar' | 'Inovação e Projetos';
  criterio: string;
  data: string;
  descricao: string;
  certificadoCodigo: string;
  fotoUrl?: string;
}

export interface FiltrosGlobais {
  anoLetivo: number;
  bimestre: 'Todos' | '1º Bimestre' | '2º Bimestre' | '3º Bimestre' | '4º Bimestre';
  cursoId: string;
  turmaId: string;
}

export interface DocumentoPDF {
  id: string;
  estudanteId: string;
  nomeEstudante: string;
  turma: string;
  titulo: string;
  dataUpload: string;
  tamanhoBytes: number;
  tamanhoFormatado: string;
  bimestreReferencia: string;
  urlBlob?: string;
  observacoesPedagogicas?: string;
  statusAnalise: 'Revisado e Aprovado' | 'Pendente de Conferência';
}

export interface ImportBatch {
  id: string;
  data: string;
  arquivoOrigem: string;
  tipo: 'Excel' | 'PDF';
  totalAlunos: number;
  totalDisciplinas: number;
  emProgressao: number;
  emRegressao: number;
  status: 'Homologado no Sistema';
}

export interface AuditLog {
  id: string;
  dataHora: string;
  usuario: string;
  perfil: UserRole;
  acao: string;
  modulo: string;
  detalhes: string;
  ipOrigem: string;
}

export interface AuthUser {
  id: string;
  nome: string;
  email: string;
  perfil: UserRole;
  cargo: string;
  registroFuncional: string;
  unidadeEscolar: string;
  avatarUrl: string;
}


