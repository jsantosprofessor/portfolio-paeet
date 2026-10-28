import {
  PAEETProfile,
  CursoTecnico,
  Turma,
  Estudante,
  EmpresaParceira,
  AcaoItinerario,
  RegistroBuscaAtiva,
  VisitaTecnica,
  BoletimEstudante,
  Evidencia,
  Reconhecimento,
  DocumentoPDF,
  ImportBatch,
  AuditLog,
  AuthUser
} from '../types';
import { alunosAtivosMonsenhor, boletinsAtivosMonsenhor, turmaMonsenhor2C } from './alunosReaisMapao';

export const initialProfile: PAEETProfile = {
  nome: 'Prof. Jefferson Santos',
  cargo: 'Professor de Apoio ao Estudante do Ensino Técnico (PAEET)',
  unidadeEscolar: 'E.E. Monsenhor João Alves (Novotec Integrado)',
  diretoriaEnsino: 'Diretoria Regional de Ensino — Região de Taubaté / SEDUC-SP',
  cidade: 'Taubaté - SP',
  anoLetivo: 2026,
  diretorNome: 'GUSTAVO NASSER VARGAS DE OLIVEIRA',
  email: 'paeet.ensinatecnico@educacao.sp.gov.br',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  registroFuncional: 'RG 34.892.110-X / SEDUC-SP',
  formacao: 'Tecnólogo em Análise e Desenvolvimento de Sistemas | Licenciatura Plena em Computação | Esp. em Gestão Educacional',
  resumoAtuacao: 'Atuação estratégica no fortalecimento do ensino técnico estadual, articulação ativa com o setor produtivo regional, inserção de estudantes no programa BEEM, redução dos índices de evasão escolar e desenvolvimento de competências socioemocionais e técnicas orientadas ao mercado.'
};

export const initialCursos: CursoTecnico[] = [
  {
    id: 'ds',
    nome: 'Desenvolvimento de Sistemas',
    eixoTecnologico: 'Informação e Comunicação',
    cargaHoraria: 1200,
    icone: 'Code',
    cor: '#3B82F6',
    descricao: 'Formação em lógica de programação, arquitetura de software, desenvolvimento web, mobile e banco de dados.'
  },
  {
    id: 'adm',
    nome: 'Administração',
    eixoTecnologico: 'Gestão e Negócios',
    cargaHoraria: 1000,
    icone: 'Briefcase',
    cor: '#8B5CF6',
    descricao: 'Capacitação em processos organizacionais, finanças, recursos humanos, logística empresarial e planejamento estratégico.'
  },
  {
    id: 'log',
    nome: 'Logística',
    eixoTecnologico: 'Gestão e Negócios',
    cargaHoraria: 1000,
    icone: 'Truck',
    cor: '#10B981',
    descricao: 'Gestão de suprimentos, armazenagem, modais de transporte, centros de distribuição e controle de estoques.'
  },
  {
    id: 'redes',
    nome: 'Redes de Computadores',
    eixoTecnologico: 'Informação e Comunicação',
    cargaHoraria: 1200,
    icone: 'Network',
    cor: '#06B6D4',
    descricao: 'Infraestrutura de redes, cabeamento estruturado, roteamento, segurança de sistemas e computação em nuvem.'
  }
];

export const initialTurmas: Turma[] = [
  turmaMonsenhor2C,
  { id: '1a-ds', nome: '1ª Série A - Desenv. de Sistemas', cursoId: 'ds', serie: '1ª Série', periodo: 'Integral', anoLetivo: 2026, totalAlunos: 36 },
  { id: '2a-ds', nome: '2ª Série A - Desenv. de Sistemas', cursoId: 'ds', serie: '2ª Série', periodo: 'Integral', anoLetivo: 2026, totalAlunos: 34 },
  { id: '3a-ds', nome: '3ª Série A - Desenv. de Sistemas', cursoId: 'ds', serie: '3ª Série', periodo: 'Integral', anoLetivo: 2026, totalAlunos: 31 },
  { id: '2a-adm', nome: '2ª Série B - Administração', cursoId: 'adm', serie: '2ª Série', periodo: 'Tarde', anoLetivo: 2026, totalAlunos: 38 },
  { id: '2a-log', nome: '2ª Série C - Logística', cursoId: 'log', serie: '2ª Série', periodo: 'Manhã', anoLetivo: 2026, totalAlunos: 35 }
];

export const initialEstudantes: Estudante[] = alunosAtivosMonsenhor.map(aluno => ({
  ...aluno,
  estagioStatus: aluno.frequenciaGeral >= 85 ? 'Elegível (Aguardando Vaga)' : 'Não Elegível (<85%)',
  empresaEstagio: undefined,
  bolsaValor: undefined
}));

export const initialEmpresas: EmpresaParceira[] = [
  {
    id: 'emp-1',
    nome: 'CIEE — Centro de Integração Empresa-Escola',
    razaoSocial: 'Centro de Integração Empresa-Escola - CIEE',
    segmento: 'Agente de Integração de Estágio',
    cidade: 'Taubaté - SP',
    responsavelContato: 'Equipe de Atendimento e Relacionamento Institucional',
    cargoContato: 'Consultor de Parcerias Escolares',
    emailContato: 'atendimento@ciee.org.br',
    telefoneContato: '(12) 3632-0000 / 0800 771 2433',
    dataPrimeiroContato: '2026-02-10',
    tipoContato: 'Reunião Online',
    statusNegociacao: 'Parceria Ativa',
    vagasOfertadas: 0,
    estagiariosAtivos: 0,
    estrategiaAdotada: 'Cadastro institucional da escola e dos alunos na plataforma CIEE. Articulação contínua para identificação de vagas de estágio compatíveis com a jornada de 9 horas diárias da PEI ou oportunidades de jovem aprendiz aos finais de semana / contra-turno flexível.',
    proximaAcao: 'Acompanhar publicação de novos editais de estágio público e privado com jornada compatível.',
    historicoTratativas: [
      { id: 'tr-ciee-1', data: '2026-02-10', tipo: 'Reunião', descricao: 'Credenciamento da unidade escolar e alinhamento do perfil dos alunos do curso de Desenvolvimento de Sistemas.', responsavel: 'Prof. Jefferson Santos (PAEET)', statusResultado: 'Concluído' },
      { id: 'tr-ciee-2', data: '2026-04-15', tipo: 'E-mail', descricao: 'Consulta de compatibilidade de jornada de estágio com o regime de tempo integral (PEI 9h).', responsavel: 'Prof. Jefferson Santos (PAEET)', statusResultado: 'Positivo' },
      { id: 'tr-ciee-3', data: '2026-08-20', tipo: 'Reunião', descricao: 'Alinhamento semestral de vagas e verificação de cadastros dos 27 estudantes da turma de DS.', responsavel: 'Prof. Jefferson Santos (PAEET)', statusResultado: 'Concluído' }
    ]
  },
  {
    id: 'emp-2',
    nome: 'EVORH — Gestão de Pessoas',
    razaoSocial: 'EVORH Soluções em Recursos Humanos Ltda.',
    segmento: 'Consultoria de RH & Recrutamento',
    cidade: 'Taubaté - SP',
    responsavelContato: 'Coordenação de Recrutamento & Seleção',
    cargoContato: 'Especialista em Captação de Talentos',
    emailContato: 'contato@evorh.com.br',
    telefoneContato: '(12) 3631-5500',
    dataPrimeiroContato: '2026-05-08',
    tipoContato: 'WhatsApp',
    statusNegociacao: 'Em Tratativa',
    vagasOfertadas: 0,
    estagiariosAtivos: 0,
    estrategiaAdotada: 'Apresentação da grade curricular do curso Técnico em Desenvolvimento de Sistemas e envio de perfil de competências da turma de DS Novotec para o banco de talentos da consultoria.',
    proximaAcao: 'Mapeamento de empresas clientes da EVORH na região do Vale do Paraíba com interesse em talentos juniores de tecnologia.',
    historicoTratativas: [
      { id: 'tr-evorh-1', data: '2026-05-08', tipo: 'WhatsApp', descricao: 'Primeiro contato com o RH da EVORH apresentando o programa PAEET e as competências dos estudantes de DS.', responsavel: 'Prof. Jefferson Santos (PAEET)', statusResultado: 'Positivo' },
      { id: 'tr-evorh-2', data: '2026-06-12', tipo: 'E-mail', descricao: 'Envio da relação de competências técnicas dos alunos (Lógica, Programação Web, Banco de Dados, Metodologias Ágeis).', responsavel: 'Prof. Jefferson Santos (PAEET)', statusResultado: 'Em Espera' }
    ]
  },
  {
    id: 'emp-3',
    nome: 'Central do Estágio',
    razaoSocial: 'Central do Estágio Agenciamento e Integração Ltda.',
    segmento: 'Agente de Integração de Estágio',
    cidade: 'Taubaté - SP',
    responsavelContato: 'Setor de Convênios Escolares',
    cargoContato: 'Analista de Parcerias Educacionais',
    emailContato: 'convenios@centraldoestagio.com.br',
    telefoneContato: '(12) 3622-4400',
    dataPrimeiroContato: '2026-09-10',
    tipoContato: 'WhatsApp',
    statusNegociacao: 'Em Tratativa',
    vagasOfertadas: 0,
    estagiariosAtivos: 0,
    estrategiaAdotada: 'Contato para abertura de canal de comunicação e análise de convênios para oportunidades de estágio e inserção profissional de jovens no ensino técnico.',
    proximaAcao: 'Reunião virtual para apresentação das diretrizes de estágio supervisionado do Novo Ensino Médio Paulista.',
    historicoTratativas: [
      { id: 'tr-cde-1', data: '2026-09-10', tipo: 'WhatsApp', descricao: 'Contato inicial com a Central do Estágio apresentando a unidade escolar e o curso técnico de Desenvolvimento de Sistemas.', responsavel: 'Prof. Jefferson Santos (PAEET)', statusResultado: 'Positivo' },
      { id: 'tr-cde-2', data: '2026-10-05', tipo: 'E-mail', descricao: 'Envio de documentação institucional da escola para análise de minuta de convênio.', responsavel: 'Prof. Jefferson Santos (PAEET)', statusResultado: 'Em Espera' }
    ]
  }
];

export const initialAcoesItinerario: AcaoItinerario[] = [
  {
    id: 'it-1',
    data: '2025-03-10',
    turma: '1º Ano A - Ensino Médio Regular',
    publicoAlvo: 'Estudantes do 1º ano em fase de escolha de itinerário formativo',
    totalEstudantes: 40,
    cursoApresentado: 'Técnico em Desenvolvimento de Sistemas',
    responsavel: 'Prof. Jefferson Santos (PAEET)',
    objetivo: 'Desmistificar a área de programação, demonstrar projetos práticos criados por alunos veteranos e esclarecer oportunidades de mercado e BEEM.',
    descricao: 'Apresentação interativa com demonstração de aplicativos web desenvolvidos pelos estudantes da 2ª série, explicação da grade curricular do Novotec e simulação de remuneração de estágio.',
    principaisDuvidas: [
      'É necessário saber matemática avançada para programar?',
      'O estágio BEEM é remunerado desde o primeiro ano?',
      'Como funciona a compatibilidade de horário com o Ensino Médio?',
      'O certificado técnico é válido para concursos e faculdades?'
    ],
    resultadosPercebidos: '82% dos alunos presentes manifestaram interesse em cursar o itinerário técnico na sondagem inicial de intenções.',
    evidenciasIds: ['ev-it-1', 'ev-it-2']
  },
  {
    id: 'it-2',
    data: '2025-03-12',
    turma: '1º Ano B - Ensino Médio Regular',
    publicoAlvo: 'Estudantes do 1º ano matutino',
    totalEstudantes: 38,
    cursoApresentado: 'Técnico em Administração & Logística',
    responsavel: 'Prof. Jefferson Santos (PAEET)',
    objetivo: 'Apresentar a atuação do profissional de Gestão e Logística no Vale do Paraíba, destacando a forte demanda por empresas farmacêuticas e aeroespaciais.',
    descricao: 'Roda de conversa com dinâmica sobre a cadeia de suprimentos de um smartphone, demonstrando o papel do técnico em logística e administração em cada etapa.',
    principaisDuvidas: [
      'Qual a diferença de atuação entre Administração e Logística?',
      'Existe estágio em grandes empresas da região para quem faz Administração?',
      'Quais são os softwares utilizados nas aulas práticas?'
    ],
    resultadosPercebidos: 'Aumento expressivo do interesse pelas turmas de Administração vespertino e Logística.',
    evidenciasIds: ['ev-it-3']
  }
];

export const initialBuscaAtiva: RegistroBuscaAtiva[] = [
  {
    id: 'ba-1',
    estudanteId: 'est-real-13',
    nomeEstudante: 'HENRIQUE LUIZ AMORIM MOURA',
    turma: '2ª Série C - Desenv. de Sistemas (Integral 9H)',
    data: '2025-04-05',
    situacaoIdentificada: 'Queda de assiduidade e rendimento nas disciplinas de lógica e redes de computadores. Risco de perda de vínculo pedagógico.',
    estrategiaAdotada: 'Conversa individual de escuta ativa e tutoria de reforço com o Prof. Jefferson Santos (PAEET). Inclusão no plano de recomposição pedagógica e alinhamento com a família.',
    responsavel: 'Prof. Jefferson Santos (PAEET)',
    resultado: 'Aluno retornou às aulas com assiduidade recuperada (87%) e maior engajamento nos projetos práticos.',
    frequenciaAntes: 72.0,
    frequenciaDepois: 87.0,
    status: 'Superado / Regularizado',
    proximoEncaminhamento: 'Acompanhamento semanal de assiduidade e desempenho nas matérias técnicas.'
  },
  {
    id: 'ba-2',
    estudanteId: 'est-real-21',
    nomeEstudante: 'NÍCOLAS GABRIEL DE SOUZA BENTO',
    turma: '2ª Série C - Desenv. de Sistemas (Integral 9H)',
    data: '2025-03-25',
    situacaoIdentificada: 'Dificuldade de conciliação de horários no contraturno e atrasos recorrentes no primeiro horário das aulas técnicas.',
    estrategiaAdotada: 'Reorganização do cronograma de estudos com a coordenação pedagógica e inserção de monitoria de desenvolvimento de software.',
    responsavel: 'Prof. Jefferson Santos (PAEET)',
    resultado: 'Frequência estabilizada em 86% e recuperação das atividades práticas de programação.',
    frequenciaAntes: 75.0,
    frequenciaDepois: 86.0,
    status: 'Superado / Regularizado',
    proximoEncaminhamento: 'Acompanhamento quinzenal do itinerário formativo.'
  },
  {
    id: 'ba-3',
    estudanteId: 'est-real-6',
    nomeEstudante: 'CARLOS EDUARDO CANFORA DE MELO CAMPOS',
    turma: '2ª Série C - Desenv. de Sistemas (Integral 9H)',
    data: '2025-04-18',
    situacaoIdentificada: 'Oscilações pontuais de frequência em períodos de avaliações práticas no laboratório.',
    estrategiaAdotada: 'Apoio pedagógico orientado pelo PAEET e inclusão em grupo de desenvolvimento ágil com metodologia Scrum.',
    responsavel: 'Prof. Jefferson Santos (PAEET)',
    resultado: 'Em acompanhamento. Estudante demonstrou frequência de 92% e maior participação nos projetos de software.',
    frequenciaAntes: 78.0,
    frequenciaDepois: 92.0,
    status: 'Em Acompanhamento',
    proximoEncaminhamento: 'Feedback quinzenal com os professores das disciplinas técnicas.'
  }
];

export const initialVisitasTecnicas: VisitaTecnica[] = [
  {
    id: 'vt-cavex',
    instituicao: 'Comando de Aviação do Exército (CAVEX)',
    cidade: 'Taubaté - SP',
    dataPrevista: '2025-05-15',
    dataEfetiva: '2025-05-15',
    responsavelInstituicao: 'Capitão Brandão / Seção de Comunicação Social e Engenharia de Manutenção',
    objetivoPedagogico: 'Imersão prática nas áreas de aviônica militar, sistemas digitais embarcados, redes seguras de comunicação militar, sensores ópticos e simuladores de voo de asa rotativa (Helicópteros Pantera e Jaguar). Relação direta com os cursos de Desenvolvimento de Sistemas e Redes.',
    turmasParticipantes: ['2ª Série A DS', '3ª Série A DS', '2ª Série C Logística'],
    totalEstudantes: 68,
    status: 'Realizada',
    relatorioResumo: 'A visita proporcionou aos estudantes a visualização concreta da aplicação da programação e das redes em ambiente de missão crítica de defesa nacional. Os alunos conheceram o hangar do Centro de Instrução de Aviação do Exército (CIAvEx), o simulador de voo sintético e os procedimentos rígidos de segurança da informação e gestão logística de peças de reposição.',
    competenciasDesenvolvidas: [
      'Sistemas embarcados em tempo real',
      'Protocolos de segurança e redundância em redes de computadores',
      'Gestão de estoques e logística de manutenção aeronáutica',
      'Disciplina operacional e trabalho em equipe sob normas militares rígidas'
    ],
    linhaDoTempo: [
      { data: '2025-02-28', evento: 'Envio do primeiro ofício de tratativa protocolado junto ao Comando Geral do CAVEX', status: 'done' },
      { data: '2025-03-15', evento: 'Reunião de alinhamento de segurança e confirmação das turmas autorizadas', status: 'done' },
      { data: '2025-04-10', evento: 'Coleta de autorizações dos responsáveis e termos de conformidade de segurança', status: 'done' },
      { data: '2025-05-15', evento: 'Execução da visita técnica com 68 estudantes e 4 professores acompanhantes', status: 'done' },
      { data: '2025-05-22', evento: 'Entrega do relatório pedagógico à Diretoria de Ensino e ofício de agradecimento', status: 'done' }
    ],
    fotos: [
      '/cavex/cavex_fachada_oficial_23_abril_2026.jpg',
      '/cavex/cavex_auditorio_palestra_institucional.jpg',
      '/cavex/cavex_divisao_de_simulacao.jpg',
      '/cavex/cavex_hangar_helicoptero_militar.jpg',
      '/cavex/cavex_oficina_turbina_safran.jpg'
    ],
    isEspecialCAVEX: true
  },
  {
    id: 'vt-pctec',
    instituicao: 'Parque Tecnológico de São José dos Campos (PqTec)',
    cidade: 'São José dos Campos - SP',
    dataPrevista: '2025-06-20',
    dataEfetiva: '2025-06-20',
    responsavelInstituicao: 'Coordenação de Inovação Aberta do Nexus PqTec',
    objetivoPedagogico: 'Apresentar aos estudantes o ecossistema de startups, centros de pesquisa e laboratórios de manufatura aditiva (FabLab), estimulando o protagonismo juvenil e o empreendedorismo.',
    turmasParticipantes: ['2ª Série A DS', '2ª Série B ADM'],
    totalEstudantes: 52,
    status: 'Realizada',
    relatorioResumo: 'Estudantes participaram de painel sobre carreiras em TI e visitaram empresas incubadas que trabalham com inteligência artificial e ERPs corporativos.',
    competenciasDesenvolvidas: ['Empreendedorismo e Inovação', 'Inteligência Artificial', 'Pitch de Projetos'],
    linhaDoTempo: [
      { data: '2025-04-15', evento: 'Tratativa com o time de relações corporativas do Parque Tecnológico', status: 'done' },
      { data: '2025-05-02', evento: 'Homologação e reserva dos laboratórios do FabLab', status: 'done' },
      { data: '2025-06-20', evento: 'Realização da visita técnica e dinâmica de ideação', status: 'done' }
    ]
  }
];

export const initialBoletins: BoletimEstudante[] = [
  ...boletinsAtivosMonsenhor
];

export const initialDocumentosPDF: DocumentoPDF[] = [
  {
    id: 'pdf-doc-1',
    estudanteId: 'est-1',
    nomeEstudante: 'Gabriel Mendonça de Oliveira',
    turma: '2ª Série A - DS',
    titulo: 'Boletim_Individual_2Bim_Gabriel_Mendonca.pdf',
    dataUpload: '2025-07-02',
    tamanhoBytes: 245760,
    tamanhoFormatado: '240 KB',
    bimestreReferencia: '2º Bimestre',
    statusAnalise: 'Revisado e Aprovado',
    observacoesPedagogicas: 'Desempenho acadêmico consistente com progressão notável em Programação Web e Banco de Dados. Aprovado para continuidade no BEEM Stefanini.'
  },
  {
    id: 'pdf-doc-2',
    estudanteId: 'est-5',
    nomeEstudante: 'Matheus Rodrigues Nogueira',
    turma: '2ª Série C - LOG',
    titulo: 'Relatorio_Desempenho_Recuperacao_Matheus_Nogueira.pdf',
    dataUpload: '2025-08-15',
    tamanhoBytes: 312400,
    tamanhoFormatado: '305 KB',
    bimestreReferencia: '2º Bimestre',
    statusAnalise: 'Revisado e Aprovado',
    observacoesPedagogicas: 'Apresenta evolução nas notas práticas após intervenção da Busca Ativa. Necessita manter reforço em Custos Logísticos.'
  },
  {
    id: 'pdf-doc-3',
    estudanteId: 'est-2',
    nomeEstudante: 'Beatriz Vasconcelos Ribeiro',
    turma: '3ª Série A - DS',
    titulo: 'Boletim_SEDUC_Consolidado_Beatriz_Vasconcelos.pdf',
    dataUpload: '2025-09-30',
    tamanhoBytes: 289100,
    tamanhoFormatado: '282 KB',
    bimestreReferencia: '3º Bimestre',
    statusAnalise: 'Revisado e Aprovado',
    observacoesPedagogicas: 'Aluna com média 9.8 e assiduidade 98%. Perfil de excelência com liderança em projetos e indicação ao Prêmio Mérito Técnico.'
  }
];

export const initialImportBatches: ImportBatch[] = [
  {
    id: 'batch-001',
    data: '2026-03-30',
    arquivoOrigem: 'Mapao_Novotec_2C_DS_Monsenhor.xlsx',
    tipo: 'Excel',
    totalAlunos: 27,
    totalDisciplinas: 22,
    emProgressao: 14,
    emRegressao: 10,
    status: 'Homologado no Sistema'
  },
  {
    id: 'batch-002',
    data: '2025-11-28',
    arquivoOrigem: 'Historico_Frequencia_2CDS_2025.csv',
    tipo: 'Excel',
    totalAlunos: 27,
    totalDisciplinas: 22,
    emProgressao: 15,
    emRegressao: 9,
    status: 'Homologado no Sistema'
  }
];


export const initialEvidencias: Evidencia[] = [
  {
    id: 'ev-beem-ciee-painel',
    titulo: 'Painel Institucional CIEE / BEEM — Gestão Escolar (Prof. Jefferson Santos)',
    descricao: 'Acesso autenticado do Prof. Jefferson (PAEET/14023-NEWTON CAMARA LEAL BARROS / EE MONSENHOR) à Vitrine de Vagas do BEEM. Diagnóstico: apenas 1 código de vaga cadastrado no município de Taubaté (Infinito Distribuidora de Auto Peças), comprovando a carência crítica de empresas do setor de tecnologia conveniadas.',
    categoria: 'Estágios BEEM',
    tipo: 'Imagem',
    data: '2026-10-27',
    url: '/evidencias_estagio/ciee_beem_painel_gestao_escolar.png',
    turmaRelacionada: '2ª Série C DS',
    empresaRelacionada: 'CIEE / SEDUC-SP',
    responsavel: 'Prof. Jefferson Santos (PAEET)',
    publicoAutorizado: true
  },
  {
    id: 'ev-beem-ciee-horarios',
    titulo: 'Portal Estudante BEEM CIEE — Incompatibilidade de Horário com a Jornada PEI 9h',
    descricao: 'Comprovação das jornadas das vagas de estágio disponíveis em Taubaté (Faculdade Pitágoras: 07h às 11h ou 17h às 21h; Group CF Saúde: 14h às 18h). A escola funciona no modelo PEI de 9 horas (07h30 às 16h30), inviabilizando que os estudantes assumam estágios em horário comercial.',
    categoria: 'Estágios BEEM',
    tipo: 'Imagem',
    data: '2026-10-27',
    url: '/evidencias_estagio/beem_ciee_vagas_conflito_horario.png',
    turmaRelacionada: '2ª Série C DS',
    empresaRelacionada: 'CIEE / BEEM',
    responsavel: 'Prof. Jefferson Santos (PAEET)',
    publicoAutorizado: true
  },
  {
    id: 'ev-beem-nube',
    titulo: 'Portal NUBE — Mapeamento e Escassez de Vagas no Eixo de Tecnologia',
    descricao: 'Filtragem e monitoramento ativo de vagas de estágio e aprendizagem na plataforma Nube. Constatação de carência de vagas voltadas a Desenvolvimento de Sistemas e predominância de oportunidades em varejo e serviços (Outback, Blue Fit, Kidstok, Forvia).',
    categoria: 'Estágios BEEM',
    tipo: 'Imagem',
    data: '2026-10-27',
    url: '/evidencias_estagio/nube_pesquisa_vagas_estagio.png',
    turmaRelacionada: '2ª Série C DS',
    empresaRelacionada: 'Nube',
    responsavel: 'Prof. Jefferson Santos (PAEET)',
    publicoAutorizado: true
  },
  {
    id: 'ev-beem-aci',
    titulo: 'Edital ACI Taubaté — Requisitos Excludentes para Alunos de Escola Integral',
    descricao: 'Mapeamento de vagas da Associação Comercial e Industrial de Taubaté (Semijoias e Clínica Veterinária). Os requisitos estipulam expressamente: "Estar matriculado no período matutino" ou "no período noturno", gerando um bloqueio normativo para estudantes do PEI de 9 horas.',
    categoria: 'Estágios BEEM',
    tipo: 'Imagem',
    data: '2026-10-27',
    url: '/evidencias_estagio/aci_taubate_vagas_incompatibilidade_pei.png',
    turmaRelacionada: '2ª Série C DS',
    empresaRelacionada: 'ACI Taubaté',
    responsavel: 'Prof. Jefferson Santos (PAEET)',
    publicoAutorizado: true
  },
  {
    id: 'ev-beem-whatsapp-prospeccao',
    titulo: 'Tratativa WhatsApp CentralEstagio.com — Prospecção Ativa de Novas Parcerias',
    descricao: 'Registro do diálogo direto do Prof. Jefferson Santos com a agência de recrutamento CentralEstagio.com. A agência ofertou vaga de Auxiliar de Comércio das 12h35 às 18h. Evidência comprobatória da busca contínua do professor por empresas de TI com formatos flexíveis e compatíveis com a permanência escolar.',
    categoria: 'Empresas Parceiras',
    tipo: 'WhatsApp',
    data: '2026-10-27',
    url: '/evidencias_estagio/whatsapp_prospeccao_centralestagio.png',
    turmaRelacionada: '2ª Série C DS',
    empresaRelacionada: 'CentralEstagio.com',
    responsavel: 'Prof. Jefferson Santos (PAEET)',
    publicoAutorizado: true
  },
  {
    id: 'ev-3',
    titulo: 'Apresentação dos Itinerários aos 1º Anos no Auditório',
    descricao: 'Registro fotográfico dos estudantes do 1º ano do Ensino Médio assistindo à palestra de orientação técnica sobre Desenvolvimento de Sistemas.',
    categoria: 'Itinerário Técnico',
    tipo: 'Imagem',
    data: '2025-03-10',
    url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    turmaRelacionada: '1º Ano A e B',
    responsavel: 'Prof. Jefferson Santos (PAEET)',
    publicoAutorizado: true
  },
  {
    id: 'ev-4',
    titulo: 'Ofício nº 42/2025 — Autorização Especial de Visita ao CAVEX',
    descricao: 'Documento oficial do Comando de Aviação do Exército deferindo a realização da visita pedagógica das turmas de TI.',
    categoria: 'Visitas Técnicas',
    tipo: 'Ofício',
    data: '2025-04-12',
    url: 'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=800&q=80',
    empresaRelacionada: 'CAVEX',
    responsavel: 'Prof. Jefferson Santos (PAEET)',
    publicoAutorizado: true
  },
  {
    id: 'ev-5',
    titulo: 'Comitiva Oficial em Frente ao Comando de Aviação do Exército (CAVEX)',
    descricao: 'Fotografia oficial de toda a delegação escolar de estudantes e professores no portão principal de acesso ao CAvEx em Taubaté/SP.',
    categoria: 'Visitas Técnicas',
    tipo: 'Imagem',
    data: '2025-05-15',
    url: '/cavex/cavex_fachada_oficial_23_abril_2026.jpg',
    turmaRelacionada: '2ª Série C DS e turmas Novotec',
    responsavel: 'Prof. Jefferson Santos (PAEET)',
    publicoAutorizado: true
  },
  {
    id: 'ev-5b',
    titulo: 'Demonstração Técnica no Hangar do CAVEX — Helicóptero Militar',
    descricao: 'Fotografia dos estudantes durante a demonstração técnica dos sistemas do helicóptero Jaguar e aviônica de bordo.',
    categoria: 'Visitas Técnicas',
    tipo: 'Imagem',
    data: '2025-05-15',
    url: '/cavex/cavex_hangar_helicoptero_militar.jpg',
    turmaRelacionada: '2ª Série C DS',
    responsavel: 'Prof. Jefferson Santos (PAEET)',
    publicoAutorizado: true
  },
  {
    id: 'ev-5c',
    titulo: 'Divisão de Simulação — Centro de Instrução de Aviação (CIAvEx)',
    descricao: 'Imersão no centro de simuladores de voo de asa rotativa e estações de treinamento sintético militar.',
    categoria: 'Visitas Técnicas',
    tipo: 'Imagem',
    data: '2025-05-15',
    url: '/cavex/cavex_divisao_de_simulacao.jpg',
    turmaRelacionada: '2ª Série C DS',
    responsavel: 'Prof. Jefferson Santos (PAEET)',
    publicoAutorizado: true
  },
  {
    id: 'ev-5d',
    titulo: 'Oficina de Manutenção de Motores e Turbinas Safran',
    descricao: 'Aula prática de manutenção aeronáutica com engenheiros militares e técnicos de propulsão.',
    categoria: 'Visitas Técnicas',
    tipo: 'Imagem',
    data: '2025-05-15',
    url: '/cavex/cavex_oficina_turbina_safran.jpg',
    turmaRelacionada: '2ª Série C DS',
    responsavel: 'Prof. Jefferson Santos (PAEET)',
    publicoAutorizado: true
  },
  {
    id: 'ev-5e',
    titulo: 'Auditório — Recepção e Palestra Institucional do Comando',
    descricao: 'Abertura oficial da visita pedagógica com apresentação da história, missões e tecnologia das Forças Armadas.',
    categoria: 'Visitas Técnicas',
    tipo: 'Imagem',
    data: '2025-05-15',
    url: '/cavex/cavex_auditorio_palestra_institucional.jpg',
    turmaRelacionada: '2ª Série C DS',
    responsavel: 'Prof. Jefferson Santos (PAEET)',
    publicoAutorizado: true
  },
  {
    id: 'ev-6',
    titulo: 'Oficina Prática — Dia do Profissional de TI (19 de Outubro)',
    descricao: 'Estudantes realizando oficina prática de montagem de redes de computadores e lógica com placas de prototipagem rápida.',
    categoria: 'Dia do Profissional de TI',
    tipo: 'Imagem',
    data: '2025-10-19',
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    turmaRelacionada: 'Todas as turmas de TI',
    responsavel: 'Prof. Jefferson Santos (PAEET)',
    publicoAutorizado: true
  },
  {
    id: 'ev-7',
    titulo: 'Termo de Intervenção Pedagógica e Reintegração — Busca Ativa',
    descricao: 'Ata de atendimento individual e alinhamento de compromisso assinado pelo estudante e coordenação pedagógica (dados pessoais resguardados pela LGPD).',
    categoria: 'Busca Ativa',
    tipo: 'Documento',
    data: '2025-04-06',
    responsavel: 'Prof. Jefferson Santos (PAEET)',
    publicoAutorizado: false,
    url: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80'
  }
];

export const initialReconhecimentos: Reconhecimento[] = [
  {
    id: 'rec-1',
    estudanteId: 'est-2',
    nomeEstudante: 'Beatriz Vasconcelos Ribeiro',
    turma: '3ª Série A - Desenv. de Sistemas',
    curso: 'Desenvolvimento de Sistemas',
    categoria: 'Melhor Desempenho Técnico',
    criterio: 'Média global 9.6 no ano letivo, liderança exemplar no projeto de conclusão de curso e desempenho de excelência no estágio Embraer.',
    data: '2025-11-20',
    descricao: 'Concessão do Certificado de Mérito Acadêmico e Honra ao Protagonismo Juvenil em solenidade escolar.',
    certificadoCodigo: 'SEDUC-PAEET-2025-001',
    fotoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'rec-2',
    estudanteId: 'est-1',
    nomeEstudante: 'Gabriel Mendonça de Oliveira',
    turma: '2ª Série A - Desenv. de Sistemas',
    curso: 'Desenvolvimento de Sistemas',
    categoria: 'Inovação e Projetos',
    criterio: 'Desenvolvimento do portal de apoio comunitário e mentoria voluntária aos novos alunos da 1ª série.',
    data: '2025-11-20',
    descricao: 'Destaque em Inovação Tecnológica com impacto social escolar.',
    certificadoCodigo: 'SEDUC-PAEET-2025-002',
    fotoUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'rec-3',
    estudanteId: 'est-5',
    nomeEstudante: 'Matheus Rodrigues Nogueira',
    turma: '2ª Série C - Logística',
    curso: 'Logística',
    categoria: 'Maior Evolução Acadêmica',
    criterio: 'Superação exemplar de desafios de assiduidade através da Busca Ativa, elevando a frequência de 68% para 88% e média positiva.',
    data: '2025-11-20',
    descricao: 'Certificado de Resiliência, Dedicação aos Estudos e Superação.',
    certificadoCodigo: 'SEDUC-PAEET-2025-003',
    fotoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  }
];

// Dados consolidados para os 7 gráficos do Dashboard Geral (2ª Série C DS - 27 estudantes)
export const dashboardChartData = {
  estagiosPorMes: [
    { mes: 'Fev', inscritos: 27, encaminhados: 16, elegiveis: 16, inseridos: 0 },
    { mes: 'Mar', inscritos: 27, encaminhados: 17, elegiveis: 17, inseridos: 0 },
    { mes: 'Abr', inscritos: 27, encaminhados: 18, elegiveis: 18, inseridos: 0 },
    { mes: 'Mai', inscritos: 27, encaminhados: 19, elegiveis: 19, inseridos: 0 },
    { mes: 'Jun', inscritos: 27, encaminhados: 20, elegiveis: 20, inseridos: 0 },
    { mes: 'Ago', inscritos: 27, encaminhados: 20, elegiveis: 20, inseridos: 0 },
    { mes: 'Set', inscritos: 27, encaminhados: 21, elegiveis: 21, inseridos: 0 },
    { mes: 'Out', inscritos: 27, encaminhados: 21, elegiveis: 21, inseridos: 0 }
  ],
  frequenciaMensal: [
    { mes: 'Fev', frequencia: 88.5, meta: 85.0 },
    { mes: 'Mar', frequencia: 89.8, meta: 85.0 },
    { mes: 'Abr', frequencia: 87.2, meta: 85.0 },
    { mes: 'Mai', frequencia: 91.4, meta: 85.0 },
    { mes: 'Jun', frequencia: 92.1, meta: 85.0 },
    { mes: 'Ago', frequencia: 90.7, meta: 85.0 },
    { mes: 'Set', frequencia: 93.2, meta: 85.0 },
    { mes: 'Out', frequencia: 92.6, meta: 85.0 }
  ],
  distribuicaoSituacao: [
    { name: 'Progressão Notória', value: 168, color: '#10B981' },
    { name: 'Desempenho Estável', value: 84, color: '#3B82F6' },
    { name: 'Em Acompanhamento / Atenção', value: 24, color: '#F59E0B' },
    { name: 'Regressão Crítica', value: 8, color: '#EF4444' }
  ],
    empresasPorSegmento: [
    { segmento: 'Agentes de Integração', total: 2, ativas: 1 },
    { segmento: 'Consultoria de RH', total: 1, ativas: 0 }
  ],
  comparativoMetas: [
    { indicador: 'Alunos no BEEM (Inseridos)', meta: 5, alcancado: 0 },
    { indicador: 'Empresas Parceiras / Em Tratativa', meta: 5, alcancado: 3 },
    { indicador: 'Visitas Técnicas Realizadas', meta: 2, alcancado: 1 },
    { indicador: 'Alunos Busca Ativa Regularizados', meta: 6, alcancado: 3 },
    { indicador: 'Certificados Concedidos', meta: 11, alcancado: 11 }
  ]
};

export const systemUsers: AuthUser[] = [
  {
    id: 'user-paeet',
    nome: 'Prof. Jefferson Santos',
    email: 'paeet.ensinatecnico@educacao.sp.gov.br',
    perfil: 'PAEET_ADMIN',
    cargo: 'Professor de Apoio ao Estudante do Ensino Técnico (PAEET)',
    registroFuncional: 'RG 34.892.110-X / SEDUC-SP',
    unidadeEscolar: 'E.E. Prof. Geraldo Prestes de Albuquerque (Novotec)',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'user-gestao',
    nome: 'Profª Dra. Maria Luiza Fontes',
    email: 'diretoria.geraldo@educacao.sp.gov.br',
    perfil: 'GESTAO_ESCOLAR',
    cargo: 'Diretora Escolar & Coordenação Pedagógica',
    registroFuncional: 'RG 22.145.890-1 / SEDUC-SP',
    unidadeEscolar: 'E.E. Prof. Geraldo Prestes de Albuquerque',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'user-publico',
    nome: 'Visitante / Comunidade Escolar',
    email: 'acesso.publico@educacao.sp.gov.br',
    perfil: 'PUBLIC',
    cargo: 'Avaliador Externo / Comunidade',
    registroFuncional: 'N/A (Visualização Protegida LGPD)',
    unidadeEscolar: 'Rede Estadual SEDUC-SP',
    avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80'
  }
];

export const initialAuditLogs: AuditLog[] = [
  {
    id: 'log-001',
    dataHora: '2025-09-30 16:42:10',
    usuario: 'Prof. Jefferson Santos',
    perfil: 'PAEET_ADMIN',
    acao: 'Sincronização de Planilha Excel',
    modulo: 'Desempenho Acadêmico',
    detalhes: 'Homologação do lote Mapao_Novotec_2C_DS_Monsenhor.xlsx (27 alunos).',
    ipOrigem: '10.67.69.161 (Rede Escolar SEDUC)'
  },
  {
    id: 'log-002',
    dataHora: '2025-09-30 14:15:30',
    usuario: 'Prof. Jefferson Santos',
    perfil: 'PAEET_ADMIN',
    acao: 'Emissão de Certificado',
    modulo: 'Certificação & Protagonismo',
    detalhes: 'Geração do Certificado Oficial SEDUC-PAEET-2025-001 (Beatriz Vasconcelos).',
    ipOrigem: '10.67.69.161 (Rede Escolar SEDUC)'
  },
  {
    id: 'log-003',
    dataHora: '2025-09-29 11:05:18',
    usuario: 'Profª Dra. Maria Luiza Fontes',
    perfil: 'GESTAO_ESCOLAR',
    acao: 'Consulta Confidencial de Frequência',
    modulo: 'Busca Ativa',
    detalhes: 'Acesso ao prontuário de assiduidade do estudante Matheus R. Nogueira.',
    ipOrigem: '10.67.69.102 (Direção Escolar)'
  },
  {
    id: 'log-004',
    dataHora: '2025-09-28 09:30:45',
    usuario: 'Prof. Jefferson Santos',
    perfil: 'PAEET_ADMIN',
    acao: 'Registro de Tratativa Comercial',
    modulo: 'Empresas Parceiras',
    detalhes: 'Registro de alinhamento com a Embraer para ampliação de vagas BEEM.',
    ipOrigem: '10.67.69.161 (Rede Escolar SEDUC)'
  }
];

