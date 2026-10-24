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

export const initialEstudantes: Estudante[] = [
  ...alunosAtivosMonsenhor
];

export const initialEmpresas: EmpresaParceira[] = [
  {
    id: 'emp-1',
    nome: 'Embraer S.A.',
    razaoSocial: 'Embraer S.A. Indústria Aeronáutica',
    segmento: 'Aeroespacial & Tecnologia',
    cidade: 'São José dos Campos - SP',
    responsavelContato: 'Mariana Duarte',
    cargoContato: 'Gerente de Talent Acquisition & ESG',
    emailContato: 'estagios.vale@embraer.com.br',
    telefoneContato: '(12) 3927-1000',
    dataPrimeiroContato: '2025-02-14',
    tipoContato: 'Visita Presencial',
    statusNegociacao: 'Parceria Ativa',
    vagasOfertadas: 8,
    estagiariosAtivos: 6,
    estrategiaAdotada: 'Reunião de alinhamento com RH e diretoria técnica para apresentar a matriz curricular do curso de Desenvolvimento de Sistemas e competências dos alunos.',
    proximaAcao: 'Ampliação de vagas do BEEM para a turma de Redes de Computadores no próximo semestre.',
    historicoTratativas: [
      { id: 'tr-1', data: '2025-02-14', tipo: 'Visita', descricao: 'Reunião presencial na sede da Embraer em SJC. Apresentação do programa Novotec/BEEM.', responsavel: 'Prof. Jefferson Santos', statusResultado: 'Positivo' },
      { id: 'tr-2', data: '2025-03-02', tipo: 'E-mail', descricao: 'Envio formal da ementa das disciplinas de Banco de Dados e Programação Web.', responsavel: 'Prof. Jefferson Santos', statusResultado: 'Concluído' },
      { id: 'tr-3', data: '2025-03-20', tipo: 'Reunião', descricao: 'Homologação do convênio com a SEDUC e agendamento dos testes técnicos com os estudantes.', responsavel: 'Prof. Jefferson Santos', statusResultado: 'Concluído' }
    ]
  },
  {
    id: 'emp-2',
    nome: 'Stefanini IT Solutions',
    razaoSocial: 'Stefanini Consultoria e Assessoria em Informática S.A.',
    segmento: 'Tecnologia da Informação & Software',
    cidade: 'São José dos Campos - SP',
    responsavelContato: 'Rodrigo Pires da Silva',
    cargoContato: 'Líder Técnico de Operações',
    emailContato: 'rodrigo.pires@stefanini.com',
    telefoneContato: '(12) 99182-4433',
    dataPrimeiroContato: '2025-02-22',
    tipoContato: 'Reunião Online',
    statusNegociacao: 'Parceria Ativa',
    vagasOfertadas: 10,
    estagiariosAtivos: 8,
    estrategiaAdotada: 'Articulação direta com gestores de projetos de software para alocar estudantes no suporte à sustentação de sistemas e automação.',
    proximaAcao: 'Acompanhamento bimestral de desempenho com os tutores corporativos da Stefanini.',
    historicoTratativas: [
      { id: 'tr-4', data: '2025-02-22', tipo: 'Reunião', descricao: 'Alinhamento virtual sobre o perfil dos estudantes do 2º e 3º ano de Desenvolvimento de Sistemas.', responsavel: 'Prof. Jefferson Santos', statusResultado: 'Positivo' },
      { id: 'tr-5', data: '2025-03-11', tipo: 'WhatsApp', descricao: 'Confirmação do processo seletivo simplificado para 10 bolsas BEEM.', responsavel: 'Prof. Jefferson Santos', statusResultado: 'Concluído' }
    ]
  },
  {
    id: 'emp-3',
    nome: 'TOTVS Vale do Paraíba',
    razaoSocial: 'TOTVS S.A. Polo Regional Tecnológico',
    segmento: 'Sistemas de Gestão ERP & Cloud',
    cidade: 'São José dos Campos - SP',
    responsavelContato: 'Aline Menezes Castro',
    cargoContato: 'Coordenadora de Parcerias Educacionais',
    emailContato: 'aline.menezes@totvs.com.br',
    telefoneContato: '(12) 3901-8800',
    dataPrimeiroContato: '2025-03-05',
    tipoContato: 'E-mail',
    statusNegociacao: 'Termo de Compromisso Aberto',
    vagasOfertadas: 6,
    estagiariosAtivos: 4,
    estrategiaAdotada: 'Envio de portfólio digital dos estudantes e articulação de workshop com os alunos.',
    proximaAcao: 'Coleta de assinaturas dos termos de compromisso de estágio BEEM via CIEE/SEDUC.',
    historicoTratativas: [
      { id: 'tr-6', data: '2025-03-05', tipo: 'E-mail', descricao: 'Contato inicial propondo abertura de vagas de estágio para as turmas técnicas.', responsavel: 'Prof. Jefferson Santos', statusResultado: 'Positivo' },
      { id: 'tr-7', data: '2025-03-18', tipo: 'WhatsApp', descricao: 'Envio da relação de alunos pré-selecionados com melhor assiduidade e notas.', responsavel: 'Prof. Jefferson Santos', statusResultado: 'Positivo' }
    ]
  },
  {
    id: 'emp-4',
    nome: 'Johnson & Johnson / Kenvue',
    razaoSocial: 'Kenvue Brasil Ltda.',
    segmento: 'Indústria Farmacêutica & Supply Chain',
    cidade: 'São José dos Campos - SP',
    responsavelContato: 'Carlos Eduardo Ramos',
    cargoContato: 'Supervisor de Logística e RH',
    emailContato: 'carlos.ramos@kenvue.com',
    telefoneContato: '(12) 3932-5000',
    dataPrimeiroContato: '2025-03-15',
    tipoContato: 'Visita Presencial',
    statusNegociacao: 'Parceria Ativa',
    vagasOfertadas: 6,
    estagiariosAtivos: 5,
    estrategiaAdotada: 'Foco na inserção de alunos dos cursos de Logística e Administração no controle de fluxos de insumos hospitalares.',
    proximaAcao: 'Visita dos gestores da empresa à feira técnica escolar.',
    historicoTratativas: [
      { id: 'tr-8', data: '2025-03-15', tipo: 'Visita', descricao: 'Encontro com o time de Supply Chain para alinhar requisitos de estágio.', responsavel: 'Prof. Jefferson Santos', statusResultado: 'Positivo' }
    ]
  },
  {
    id: 'emp-5',
    nome: 'Gerdau — Unidade Pindamonhangaba',
    razaoSocial: 'Gerdau Aços Longos S.A.',
    segmento: 'Siderurgia & Automação Industrial',
    cidade: 'Pindamonhangaba - SP',
    responsavelContato: 'Juliana Barbosa',
    cargoContato: 'Especialista em Desenvolvimento Comunitário',
    emailContato: 'juliana.barbosa@gerdau.com.br',
    telefoneContato: '(12) 3644-9000',
    dataPrimeiroContato: '2025-04-02',
    tipoContato: 'Reunião Online',
    statusNegociacao: 'Parceria Ativa',
    vagasOfertadas: 5,
    estagiariosAtivos: 4,
    estrategiaAdotada: 'Abertura de vagas para manutenção de redes e automação de processos internos.',
    proximaAcao: 'Supervisão do primeiro mês de estágio dos estudantes inseridos.',
    historicoTratativas: [
      { id: 'tr-9', data: '2025-04-02', tipo: 'Reunião', descricao: 'Definição do cronograma de integração dos estudantes.', responsavel: 'Prof. Jefferson Santos', statusResultado: 'Concluído' }
    ]
  },
  {
    id: 'emp-6',
    nome: 'Magneti Marelli Brasil',
    razaoSocial: 'Marelli Sistemas Automotivos Indústria e Comércio',
    segmento: 'Autopeças & Engenharia Automotiva',
    cidade: 'Taubaté - SP',
    responsavelContato: 'Fábio Antunes',
    cargoContato: 'Coordenador de TI & Fábrica Inteligente',
    emailContato: 'fabio.antunes@marelli.com',
    telefoneContato: '(12) 3625-1100',
    dataPrimeiroContato: '2025-04-10',
    tipoContato: 'Telefone',
    statusNegociacao: 'Em Tratativa',
    vagasOfertadas: 4,
    estagiariosAtivos: 2,
    estrategiaAdotada: 'Apresentação das competências em IoT e programação dos alunos para o projeto de Indústria 4.0 da empresa.',
    proximaAcao: 'Receber feedback das entrevistas com os candidatos enviados.',
    historicoTratativas: [
      { id: 'tr-10', data: '2025-04-10', tipo: 'Ligação', descricao: 'Alinhamento com a engenharia da Marelli sobre perfil de estagiários.', responsavel: 'Prof. Jefferson Santos', statusResultado: 'Em Espera' }
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
    estudanteId: 'est-5',
    nomeEstudante: 'Matheus Rodrigues Nogueira',
    turma: '2ª Série C - Logística',
    data: '2025-04-05',
    situacaoIdentificada: 'Ausências consecutivas às quintas e sextas-feiras. Risco de perda de vínculo e rendimento abaixo da média nas disciplinas técnicas.',
    estrategiaAdotada: 'Conversa individual de escuta ativa. Aluno relatou necessidade de ajudar a família em serviços autônomos. Articulação com a coordenação para encaminhamento prioritário ao BEEM, permitindo renda com vínculo de estágio regular.',
    responsavel: 'Prof. Jefferson Santos (PAEET)',
    resultado: 'Aluno retornou às aulas regulares. Inserido no cadastro de reserva prioritária do BEEM na Gerdau.',
    frequenciaAntes: 68.0,
    frequenciaDepois: 87.5,
    status: 'Superado / Regularizado',
    proximoEncaminhamento: 'Acompanhamento semanal de assiduidade com a equipe gestora.'
  },
  {
    id: 'ba-2',
    estudanteId: 'est-3',
    nomeEstudante: 'Lucas Henrique de Souza',
    turma: '2ª Série A - Desenv. de Sistemas',
    data: '2025-03-25',
    situacaoIdentificada: 'Desmotivação e atrasos recorrentes no primeiro horário da aula técnica de Banco de Dados.',
    estrategiaAdotada: 'Identificada dificuldade com transporte público interbairros. Solicitada readequação de itinerário escolar junto à secretaria e inserção de monitoria pedagógica com a aluna Beatriz (3ª série).',
    responsavel: 'Prof. Jefferson Santos (PAEET)',
    resultado: 'Frequência estabilizada acima de 85% e melhoria sensível nas notas práticas.',
    frequenciaAntes: 76.0,
    frequenciaDepois: 91.0,
    status: 'Superado / Regularizado',
    proximoEncaminhamento: 'Supervisão do estágio na TOTVS.'
  },
  {
    id: 'ba-3',
    estudanteId: 'est-x1',
    nomeEstudante: 'Renan Augusto dos Santos (Anonimizado R.A.S.)',
    turma: '1ª Série A - Desenv. de Sistemas',
    data: '2025-04-18',
    situacaoIdentificada: 'Dificuldade de adaptação ao raciocínio lógico e isolamento nas aulas em grupo no laboratório de informática.',
    estrategiaAdotada: 'Reunião com os responsáveis para alinhamento pedagógico e integração do estudante em equipe de projetos colaborativos com metodologia ágil (Scrum).',
    responsavel: 'Prof. Jefferson Santos (PAEET)',
    resultado: 'Em acompanhamento. Estudante demonstrou maior participação nos trabalhos práticos.',
    frequenciaAntes: 72.0,
    frequenciaDepois: 82.0,
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
      'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
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
    data: '2025-09-30',
    arquivoOrigem: 'Boletim_SEDUC_Novotec_2025_B3.xlsx',
    tipo: 'Excel',
    totalAlunos: 342,
    totalDisciplinas: 18,
    emProgressao: 168,
    emRegressao: 24,
    status: 'Homologado no Sistema'
  },
  {
    id: 'batch-002',
    data: '2025-07-05',
    arquivoOrigem: 'Relatorio_Notas_Frequencia_Semestre1.csv',
    tipo: 'Excel',
    totalAlunos: 340,
    totalDisciplinas: 18,
    emProgressao: 152,
    emRegressao: 31,
    status: 'Homologado no Sistema'
  }
];


export const initialEvidencias: Evidencia[] = [
  {
    id: 'ev-1',
    titulo: 'Tratativa WhatsApp RH Embraer — Homologação de Vagas BEEM',
    descricao: 'Captura de tela comprobatória do diálogo com a supervisão de RH da Embraer definindo datas para o envio de currículos de alunos do Novotec.',
    categoria: 'Estágios BEEM',
    tipo: 'WhatsApp',
    data: '2025-03-12',
    url: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=800&q=80',
    empresaRelacionada: 'Embraer S.A.',
    responsavel: 'Prof. Jefferson Santos (PAEET)',
    publicoAutorizado: true
  },
  {
    id: 'ev-2',
    titulo: 'E-mail de Confirmação do Convênio de Estágio — Stefanini',
    descricao: 'Comprovante do envio de documentos e aprovação das 8 primeiras bolsas de estágio do programa BEEM.',
    categoria: 'Empresas Parceiras',
    tipo: 'E-mail',
    data: '2025-03-24',
    url: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=800&q=80',
    empresaRelacionada: 'Stefanini IT Solutions',
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
    titulo: 'Estudantes no Hangar do CIAvEx — Simulação e Aviônica',
    descricao: 'Fotografia dos estudantes durante a demonstração técnica dos sistemas do helicóptero Jaguar no CAVEX Taubaté.',
    categoria: 'Visitas Técnicas',
    tipo: 'Imagem',
    data: '2025-05-15',
    url: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80',
    turmaRelacionada: '2ª A DS e 3ª A DS',
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

// Dados consolidados para os 7 gráficos do Dashboard Geral
export const dashboardChartData = {
  estagiosPorMes: [
    { mes: 'Fev', inscritos: 18, encaminhados: 12, inseridos: 6 },
    { mes: 'Mar', inscritos: 35, encaminhados: 26, inseridos: 18 },
    { mes: 'Abr', inscritos: 48, encaminhados: 40, inseridos: 32 },
    { mes: 'Mai', inscritos: 62, encaminhados: 54, inseridos: 46 },
    { mes: 'Jun', inscritos: 75, encaminhados: 66, inseridos: 58 },
    { mes: 'Ago', inscritos: 88, encaminhados: 78, inseridos: 70 },
    { mes: 'Set', inscritos: 98, encaminhados: 89, inseridos: 81 },
    { mes: 'Out', inscritos: 104, encaminhados: 94, inseridos: 84 }
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
    { segmento: 'TI & Software', total: 14, ativas: 11 },
    { segmento: 'Aeroespacial & Defesa', total: 6, ativas: 5 },
    { segmento: 'Logística & Supply Chain', total: 8, ativas: 6 },
    { segmento: 'Indústria & Automação', total: 7, ativas: 5 },
    { segmento: 'Serviços & Finanças', total: 5, ativas: 3 }
  ],
  comparativoMetas: [
    { indicador: 'Estudantes no BEEM', meta: 70, alcancado: 84 },
    { indicador: 'Empresas Conveniadas', meta: 25, alcancado: 38 },
    { indicador: 'Visitas Técnicas', meta: 8, alcancado: 12 },
    { indicador: 'Alunos Busca Ativa Regularizados', meta: 50, alcancado: 64 },
    { indicador: 'Certificados Concedidos', meta: 80, alcancado: 115 }
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
    detalhes: 'Homologação do lote Boletim_SEDUC_Novotec_2025_B3.xlsx (342 alunos).',
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

