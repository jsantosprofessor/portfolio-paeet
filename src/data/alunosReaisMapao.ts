import { Estudante, BoletimEstudante, Turma, PAEETProfile } from '../types';

export const escolaMonsenhorProfile: Partial<PAEETProfile> = {
  unidadeEscolar: 'E.E. Monsenhor João Alves (Novotec Integrado)',
  diretoriaEnsino: 'Diretoria Regional de Ensino — Região de Taubaté / SEDUC-SP',
  cidade: 'Taubaté - SP',
  anoLetivo: 2026,
  diretorNome: 'GUSTAVO NASSER VARGAS DE OLIVEIRA'
};

export const turmaMonsenhor2C: Turma = {
  id: '2c-ds',
  nome: '2ª Série C - Desenv. de Sistemas (Integral 9H)',
  cursoId: 'ds',
  serie: '2ª Série',
  periodo: 'Integral',
  anoLetivo: 2026,
  totalAlunos: 27
};

export const alunosAtivosMonsenhor: Estudante[] = [
{
    "id": "est-real-1",
    "nomeCompleto": "ANGELUS MIGUEL FERREIRA CLARO",
    "nomeAnonimizado": "Estudante A.M.F.C (2ª C DS)",
    "ra": "000113020630-0 SP",
    "turmaId": "2c-ds",
    "cursoId": "ds",
    "statusMatricula": "Ativo",
    "frequenciaGeral": 98,
    "situacaoAcademica": "Estável",
    "mediaGeral": 6.7,
    "estagioStatus": "Não Iniciado",
    "email": "angelus.miguel.ferreira.claro@aluno.educacao.sp.gov.br",
    "raDigito": "0",
    "presencaAnual": 98,
    "presencaSemanaAtual": 88,
    "presencaSemanaAnterior": 60
  },
  {
    "id": "est-real-2",
    "nomeCompleto": "ARTHUR CLARO GALVAO",
    "nomeAnonimizado": "Estudante A.C.G (2ª C DS)",
    "ra": "000112737863-6 SP",
    "turmaId": "2c-ds",
    "cursoId": "ds",
    "statusMatricula": "Ativo",
    "frequenciaGeral": 96,
    "situacaoAcademica": "Progressão",
    "mediaGeral": 8,
    "estagioStatus": "Não Iniciado",
    "email": "arthur.claro.galvao@aluno.educacao.sp.gov.br",
    "raDigito": "6",
    "presencaAnual": 96,
    "presencaSemanaAtual": 100,
    "presencaSemanaAnterior": 100
  },
  {
    "id": "est-real-3",
    "nomeCompleto": "ARTHUR HENRIQUE BASTOS",
    "nomeAnonimizado": "Estudante A.H.B (2ª C DS)",
    "ra": "000112731673-4 SP",
    "turmaId": "2c-ds",
    "cursoId": "ds",
    "statusMatricula": "Ativo",
    "frequenciaGeral": 87,
    "situacaoAcademica": "Progressão",
    "mediaGeral": 6.5,
    "estagioStatus": "Não Iniciado",
    "email": "arthur.henrique.bastos@aluno.educacao.sp.gov.br",
    "raDigito": "4",
    "presencaAnual": 87,
    "presencaSemanaAtual": 75,
    "presencaSemanaAnterior": 60
  },
  {
    "id": "est-real-4",
    "nomeCompleto": "BEATRIZ MORAES PALOMARES",
    "nomeAnonimizado": "Estudante B.M.P (2ª C DS)",
    "ra": "000111159378-4 SP",
    "turmaId": "2c-ds",
    "cursoId": "ds",
    "statusMatricula": "Ativo",
    "frequenciaGeral": 98,
    "situacaoAcademica": "Progressão",
    "mediaGeral": 7.4,
    "estagioStatus": "Não Iniciado",
    "email": "beatriz.moraes.palomares@aluno.educacao.sp.gov.br",
    "raDigito": "4",
    "presencaAnual": 98,
    "presencaSemanaAtual": 88,
    "presencaSemanaAnterior": 100
  },
  {
    "id": "est-real-5",
    "nomeCompleto": "BETHANIA FATIMA DA COSTA",
    "nomeAnonimizado": "Estudante B.F.D.C (2ª C DS)",
    "ra": "000113077738-8 SP",
    "turmaId": "2c-ds",
    "cursoId": "ds",
    "statusMatricula": "Ativo",
    "frequenciaGeral": 98,
    "situacaoAcademica": "Regressão",
    "mediaGeral": 6.4,
    "estagioStatus": "Não Iniciado",
    "email": "bethania.fatima.da.costa@aluno.educacao.sp.gov.br",
    "raDigito": "8",
    "presencaAnual": 98,
    "presencaSemanaAtual": 100,
    "presencaSemanaAnterior": 100
  },
  {
    "id": "est-real-6",
    "nomeCompleto": "CARLOS EDUARDO CANFORA DE MELO CAMPOS",
    "nomeAnonimizado": "Estudante C.E.C.D.M.C (2ª C DS)",
    "ra": "000111619938-5 SP",
    "turmaId": "2c-ds",
    "cursoId": "ds",
    "statusMatricula": "Ativo",
    "frequenciaGeral": 87,
    "situacaoAcademica": "Regressão",
    "mediaGeral": 6.5,
    "estagioStatus": "Não Iniciado",
    "email": "carlos.eduardo.canfora.de.melo.campos@aluno.educacao.sp.gov.br",
    "raDigito": "5",
    "presencaAnual": 87,
    "presencaSemanaAtual": 88,
    "presencaSemanaAnterior": 100
  },
  {
    "id": "est-real-7",
    "nomeCompleto": "CLARA LOPES CARVALHO SILVA",
    "nomeAnonimizado": "Estudante C.L.C.S (2ª C DS)",
    "ra": "000113802314-0 SP",
    "turmaId": "2c-ds",
    "cursoId": "ds",
    "statusMatricula": "Ativo",
    "frequenciaGeral": 93,
    "situacaoAcademica": "Progressão",
    "mediaGeral": 7,
    "estagioStatus": "Não Iniciado",
    "email": "clara.lopes.carvalho.silva@aluno.educacao.sp.gov.br",
    "raDigito": "0",
    "presencaAnual": 93,
    "presencaSemanaAtual": 100,
    "presencaSemanaAnterior": 100
  },
  {
    "id": "est-real-8",
    "nomeCompleto": "DAVI LORENZO SARAIVA CHAVES",
    "nomeAnonimizado": "Estudante D.L.S.C (2ª C DS)",
    "ra": "000111190741-9 SP",
    "turmaId": "2c-ds",
    "cursoId": "ds",
    "statusMatricula": "Ativo",
    "frequenciaGeral": 87,
    "situacaoAcademica": "Regressão",
    "mediaGeral": 6.9,
    "estagioStatus": "Não Iniciado",
    "email": "davi.lorenzo.saraiva.chaves@aluno.educacao.sp.gov.br",
    "raDigito": "9",
    "presencaAnual": 87,
    "presencaSemanaAtual": 75,
    "presencaSemanaAnterior": 87
  },
  {
    "id": "est-real-9",
    "nomeCompleto": "DAVI RODRIGUES DOS SANTOS",
    "nomeAnonimizado": "Estudante D.R.D.S (2ª C DS)",
    "ra": "000112993406-8 SP",
    "turmaId": "2c-ds",
    "cursoId": "ds",
    "statusMatricula": "Ativo",
    "frequenciaGeral": 91,
    "situacaoAcademica": "Regressão",
    "mediaGeral": 5.6,
    "estagioStatus": "Não Iniciado",
    "email": "davi.rodrigues.dos.santos@aluno.educacao.sp.gov.br",
    "raDigito": "8",
    "presencaAnual": 91,
    "presencaSemanaAtual": 88,
    "presencaSemanaAnterior": 100
  },
  {
    "id": "est-real-10",
    "nomeCompleto": "DIOGO DE CARVALHO PRAZERES",
    "nomeAnonimizado": "Estudante D.D.C.P (2ª C DS)",
    "ra": "000112674082-2 SP",
    "turmaId": "2c-ds",
    "cursoId": "ds",
    "statusMatricula": "Ativo",
    "frequenciaGeral": 94,
    "situacaoAcademica": "Progressão",
    "mediaGeral": 7.7,
    "estagioStatus": "Não Iniciado",
    "email": "diogo.de.carvalho.prazeres@aluno.educacao.sp.gov.br",
    "raDigito": "2",
    "presencaAnual": 94,
    "presencaSemanaAtual": 88,
    "presencaSemanaAnterior": 100
  },
  {
    "id": "est-real-11",
    "nomeCompleto": "GABRIEL QUINTANILHA CLARO",
    "nomeAnonimizado": "Estudante G.Q.C (2ª C DS)",
    "ra": "000111619581-1 SP",
    "turmaId": "2c-ds",
    "cursoId": "ds",
    "statusMatricula": "Ativo",
    "frequenciaGeral": 82,
    "situacaoAcademica": "Progressão",
    "mediaGeral": 6.8,
    "estagioStatus": "Não Iniciado",
    "email": "gabriel.quintanilha.claro@aluno.educacao.sp.gov.br",
    "raDigito": "1",
    "presencaAnual": 82,
    "presencaSemanaAtual": 72,
    "presencaSemanaAnterior": 73
  },
  {
    "id": "est-real-12",
    "nomeCompleto": "GUILHERME RODRIGUES DA SILVA",
    "nomeAnonimizado": "Estudante G.R.D.S (2ª C DS)",
    "ra": "000111125625-1 SP",
    "turmaId": "2c-ds",
    "cursoId": "ds",
    "statusMatricula": "Ativo",
    "frequenciaGeral": 97,
    "situacaoAcademica": "Regressão",
    "mediaGeral": 6.3,
    "estagioStatus": "Não Iniciado",
    "email": "guilherme.rodrigues.da.silva@aluno.educacao.sp.gov.br",
    "raDigito": "1",
    "presencaAnual": 97,
    "presencaSemanaAtual": 88,
    "presencaSemanaAnterior": 47
  },
  {
    "id": "est-real-13",
    "nomeCompleto": "HENRIQUE LUIZ AMORIM MOURA",
    "nomeAnonimizado": "Estudante H.L.A.M (2ª C DS)",
    "ra": "000113121811-5 SP",
    "turmaId": "2c-ds",
    "cursoId": "ds",
    "statusMatricula": "Ativo",
    "frequenciaGeral": 80,
    "situacaoAcademica": "Regressão",
    "mediaGeral": 4.8,
    "estagioStatus": "Não Iniciado",
    "email": "henrique.luiz.amorim.moura@aluno.educacao.sp.gov.br",
    "raDigito": "5",
    "presencaAnual": 80,
    "presencaSemanaAtual": 75,
    "presencaSemanaAnterior": 100
  },
  {
    "id": "est-real-14",
    "nomeCompleto": "ISADORA LETICIA BARONE DE CASTRO",
    "nomeAnonimizado": "Estudante I.L.B.D.C (2ª C DS)",
    "ra": "000112673906-6 SP",
    "turmaId": "2c-ds",
    "cursoId": "ds",
    "statusMatricula": "Ativo",
    "frequenciaGeral": 82,
    "situacaoAcademica": "Progressão",
    "mediaGeral": 6.5,
    "estagioStatus": "Não Iniciado",
    "email": "isadora.leticia.barone.de.castro@aluno.educacao.sp.gov.br",
    "raDigito": "6",
    "presencaAnual": 82,
    "presencaSemanaAtual": 63,
    "presencaSemanaAnterior": 33
  },
  {
    "id": "est-real-15",
    "nomeCompleto": "ISMAEL DE ALMEIDA PEREIRA DAMIAO",
    "nomeAnonimizado": "Estudante I.D.A.P.D (2ª C DS)",
    "ra": "000112674148-6 SP",
    "turmaId": "2c-ds",
    "cursoId": "ds",
    "statusMatricula": "Ativo",
    "frequenciaGeral": 88,
    "situacaoAcademica": "Regressão",
    "mediaGeral": 6.3,
    "estagioStatus": "Não Iniciado",
    "email": "ismael.de.almeida.pereira.damiao@aluno.educacao.sp.gov.br",
    "raDigito": "6",
    "presencaAnual": 88,
    "presencaSemanaAtual": 88,
    "presencaSemanaAnterior": 47
  },
  {
    "id": "est-real-16",
    "nomeCompleto": "MARIA LUISA DA SILVA NASCIMENTO",
    "nomeAnonimizado": "Estudante M.L.D.S.N (2ª C DS)",
    "ra": "000111585822-1 SP",
    "turmaId": "2c-ds",
    "cursoId": "ds",
    "statusMatricula": "Ativo",
    "frequenciaGeral": 84,
    "situacaoAcademica": "Regressão",
    "mediaGeral": 5.3,
    "estagioStatus": "Não Iniciado",
    "email": "maria.luisa.da.silva.nascimento@aluno.educacao.sp.gov.br",
    "raDigito": "1",
    "presencaAnual": 84,
    "presencaSemanaAtual": 75,
    "presencaSemanaAnterior": 47
  },
  {
    "id": "est-real-17",
    "nomeCompleto": "MATEUS GABRIEL DA SILVA RICO",
    "nomeAnonimizado": "Estudante M.G.D.S.R (2ª C DS)",
    "ra": "000110943847-3 SP",
    "turmaId": "2c-ds",
    "cursoId": "ds",
    "statusMatricula": "Ativo",
    "frequenciaGeral": 91,
    "situacaoAcademica": "Progressão",
    "mediaGeral": 6,
    "estagioStatus": "Não Iniciado",
    "email": "mateus.gabriel.da.silva.rico@aluno.educacao.sp.gov.br",
    "raDigito": "3",
    "presencaAnual": 91,
    "presencaSemanaAtual": 87,
    "presencaSemanaAnterior": 73
  },
  {
    "id": "est-real-18",
    "nomeCompleto": "MATHEUS DE ASSIS OLIVEIRA",
    "nomeAnonimizado": "Estudante M.D.A.O (2ª C DS)",
    "ra": "000113346861-5 SP",
    "turmaId": "2c-ds",
    "cursoId": "ds",
    "statusMatricula": "Ativo",
    "frequenciaGeral": 95,
    "situacaoAcademica": "Progressão",
    "mediaGeral": 7.3,
    "estagioStatus": "Não Iniciado",
    "email": "matheus.de.assis.oliveira@aluno.educacao.sp.gov.br",
    "raDigito": "5",
    "presencaAnual": 95,
    "presencaSemanaAtual": 100,
    "presencaSemanaAnterior": 73
  },
  {
    "id": "est-real-19",
    "nomeCompleto": "MATHEUS LUAN MONTEIRO",
    "nomeAnonimizado": "Estudante M.L.M (2ª C DS)",
    "ra": "000112179684-9 SP",
    "turmaId": "2c-ds",
    "cursoId": "ds",
    "statusMatricula": "Ativo",
    "frequenciaGeral": 97,
    "situacaoAcademica": "Estável",
    "mediaGeral": 7.7,
    "estagioStatus": "Não Iniciado",
    "email": "matheus.luan.monteiro@aluno.educacao.sp.gov.br",
    "raDigito": "9",
    "presencaAnual": 97,
    "presencaSemanaAtual": 88,
    "presencaSemanaAnterior": 73
  },
  {
    "id": "est-real-20",
    "nomeCompleto": "NAYARA VITORIA DOS SANTOS BARROS",
    "nomeAnonimizado": "Estudante N.V.D.S.B (2ª C DS)",
    "ra": "000111181779-0 SP",
    "turmaId": "2c-ds",
    "cursoId": "ds",
    "statusMatricula": "Ativo",
    "frequenciaGeral": 96,
    "situacaoAcademica": "Estável",
    "mediaGeral": 5.9,
    "estagioStatus": "Não Iniciado",
    "email": "nayara.vitoria.dos.santos.barros@aluno.educacao.sp.gov.br",
    "raDigito": "0",
    "presencaAnual": 96,
    "presencaSemanaAtual": 88,
    "presencaSemanaAnterior": 87
  },
  {
    "id": "est-real-21",
    "nomeCompleto": "NÍCOLAS GABRIEL DE SOUZA BENTO",
    "nomeAnonimizado": "Estudante N.G.D.S.B (2ª C DS)",
    "ra": "000113546941-6 SP",
    "turmaId": "2c-ds",
    "cursoId": "ds",
    "statusMatricula": "Ativo",
    "frequenciaGeral": 82,
    "situacaoAcademica": "Regressão",
    "mediaGeral": 5,
    "estagioStatus": "Não Iniciado",
    "email": "n.colas.gabriel.de.souza.bento@aluno.educacao.sp.gov.br",
    "raDigito": "6",
    "presencaAnual": 82,
    "presencaSemanaAtual": 88,
    "presencaSemanaAnterior": 100
  },
  {
    "id": "est-real-22",
    "nomeCompleto": "NYCOLLAS HENRIQUE DA SILVA PAULINO",
    "nomeAnonimizado": "Estudante N.H.D.S.P (2ª C DS)",
    "ra": "000111722282-2 SP",
    "turmaId": "2c-ds",
    "cursoId": "ds",
    "statusMatricula": "Ativo",
    "frequenciaGeral": 89,
    "situacaoAcademica": "Regressão",
    "mediaGeral": 5.4,
    "estagioStatus": "Não Iniciado",
    "email": "nycollas.henrique.da.silva.paulino@aluno.educacao.sp.gov.br",
    "raDigito": "2",
    "presencaAnual": 89,
    "presencaSemanaAtual": 94,
    "presencaSemanaAnterior": 73
  },
  {
    "id": "est-real-23",
    "nomeCompleto": "PEDRO HENRIQUE JARDIM DE JESUS",
    "nomeAnonimizado": "Estudante P.H.J.D.J (2ª C DS)",
    "ra": "000112399083-9 SP",
    "turmaId": "2c-ds",
    "cursoId": "ds",
    "statusMatricula": "Ativo",
    "frequenciaGeral": 93,
    "situacaoAcademica": "Progressão",
    "mediaGeral": 7.4,
    "estagioStatus": "Não Iniciado",
    "email": "pedro.henrique.jardim.de.jesus@aluno.educacao.sp.gov.br",
    "raDigito": "9",
    "presencaAnual": 93,
    "presencaSemanaAtual": 97,
    "presencaSemanaAnterior": 100
  },
  {
    "id": "est-real-24",
    "nomeCompleto": "RAFAEL CÉSAR BURI NESPOLI",
    "nomeAnonimizado": "Estudante R.C.B.N (2ª C DS)",
    "ra": "000113457886-6 SP",
    "turmaId": "2c-ds",
    "cursoId": "ds",
    "statusMatricula": "Ativo",
    "frequenciaGeral": 85,
    "situacaoAcademica": "Progressão",
    "mediaGeral": 5.5,
    "estagioStatus": "Não Iniciado",
    "email": "rafael.c.sar.buri.nespoli@aluno.educacao.sp.gov.br",
    "raDigito": "6",
    "presencaAnual": 85,
    "presencaSemanaAtual": 75,
    "presencaSemanaAnterior": 100
  },
  {
    "id": "est-real-25",
    "nomeCompleto": "SAYMON MARCONDES DE CASTRO ALVES",
    "nomeAnonimizado": "Estudante S.M.D.C.A (2ª C DS)",
    "ra": "000109980451-6 SP",
    "turmaId": "2c-ds",
    "cursoId": "ds",
    "statusMatricula": "Ativo",
    "frequenciaGeral": 93,
    "situacaoAcademica": "Progressão",
    "mediaGeral": 8.2,
    "estagioStatus": "Não Iniciado",
    "email": "saymon.marcondes.de.castro.alves@aluno.educacao.sp.gov.br",
    "raDigito": "6",
    "presencaAnual": 93,
    "presencaSemanaAtual": 97,
    "presencaSemanaAnterior": 47
  },
  {
    "id": "est-real-26",
    "nomeCompleto": "SOFIA ALMEIDA DA CUNHA",
    "nomeAnonimizado": "Estudante S.A.D.C (2ª C DS)",
    "ra": "000111585883-X SP",
    "turmaId": "2c-ds",
    "cursoId": "ds",
    "statusMatricula": "Ativo",
    "frequenciaGeral": 95,
    "situacaoAcademica": "Progressão",
    "mediaGeral": 7.2,
    "estagioStatus": "Não Iniciado",
    "email": "sofia.almeida.da.cunha@aluno.educacao.sp.gov.br",
    "raDigito": "X",
    "presencaAnual": 95,
    "presencaSemanaAtual": 88,
    "presencaSemanaAnterior": 100
  },
  {
    "id": "est-real-27",
    "nomeCompleto": "VITOR SANTOS PINTO",
    "nomeAnonimizado": "Estudante V.S.P (2ª C DS)",
    "ra": "000111592204-X SP",
    "turmaId": "2c-ds",
    "cursoId": "ds",
    "statusMatricula": "Ativo",
    "frequenciaGeral": 84,
    "situacaoAcademica": "Progressão",
    "mediaGeral": 5.6,
    "estagioStatus": "Não Iniciado",
    "email": "vitor.santos.pinto@aluno.educacao.sp.gov.br",
    "raDigito": "X",
    "presencaAnual": 84,
    "presencaSemanaAtual": 84,
    "presencaSemanaAnterior": 73
  }
];

export const boletinsAtivosMonsenhor: BoletimEstudante[] = [
  {
    "estudanteId": "est-real-1",
    "nome": "ANGELUS MIGUEL FERREIRA CLARO",
    "turma": "2ª Série C - DS (Integral 9H)",
    "curso": "Desenvolvimento de Sistemas",
    "disciplinas": [
      {
        "disciplina": "BIOLOGIA",
        "b1": 7,
        "b2": 5,
        "b3": 9,
        "b4": 0,
        "media": 7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO",
        "b1": 8,
        "b2": 9,
        "b3": 7,
        "b4": 0,
        "media": 8,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "Educaçao Financeira",
        "b1": 7,
        "b2": 5,
        "b3": 6,
        "b4": 0,
        "media": 6,
        "tendencia": "Estável"
      },
      {
        "disciplina": "EDUCACAO FISICA",
        "b1": 7,
        "b2": 8,
        "b3": 8,
        "b4": 0,
        "media": 7.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "FISICA",
        "b1": 5,
        "b2": 5,
        "b3": 5,
        "b4": 0,
        "media": 5,
        "tendencia": "Estável"
      },
      {
        "disciplina": "GEOGRAFIA",
        "b1": 6,
        "b2": 6,
        "b3": 7,
        "b4": 0,
        "media": 6.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "HISTORIA",
        "b1": 5,
        "b2": 9,
        "b3": 5,
        "b4": 0,
        "media": 6.3,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "LINGUA INGLESA",
        "b1": 6,
        "b2": 6,
        "b3": 7,
        "b4": 0,
        "media": 6.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "LINGUA PORTUGUESA",
        "b1": 6,
        "b2": 9,
        "b3": 7,
        "b4": 0,
        "media": 7.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "LOGICA E LINGUAGENS DE PROGRAMACAO",
        "b1": 8,
        "b2": 8,
        "b3": 6,
        "b4": 0,
        "media": 7.3,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "MATEMATICA",
        "b1": 6,
        "b2": 4,
        "b3": 7,
        "b4": 0,
        "media": 5.7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE E METODOLOGIAS AGEIS",
        "b1": 8,
        "b2": 7,
        "b3": 9,
        "b4": 0,
        "media": 8,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "QUIMICA",
        "b1": 6,
        "b2": 6,
        "b3": 6,
        "b4": 0,
        "media": 6,
        "tendencia": "Estável"
      },
      {
        "disciplina": "REDAÇAO E LEITURA",
        "b1": 7,
        "b2": 7,
        "b3": 5,
        "b4": 0,
        "media": 6.3,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "REDES DE COMPUTADORES E SEGURANÇA DA INFORMAÇAO NA NUVEM",
        "b1": 8,
        "b2": 9,
        "b3": 7,
        "b4": 0,
        "media": 8,
        "tendencia": "Regressão"
      }
    ],
    "pontosFortes": [
      "Destaque em CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO (Média 8)",
      "Destaque em PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE E METODOLOGIAS AGEIS (Média 8)",
      "Destaque em REDES DE COMPUTADORES E SEGURANÇA DA INFORMAÇAO NA NUVEM (Média 8)"
    ],
    "pontosAtencao": [
      "Atenção em FISICA (Média 5)",
      "Atenção em MATEMATICA (Média 5.7)"
    ],
    "intervencoesSugeridas": "Rendimento estável. Manter acompanhamento pedagógico regular.",
    "dataUltimaImportacao": "2026-10-24"
  },
  {
    "estudanteId": "est-real-2",
    "nome": "ARTHUR CLARO GALVAO",
    "turma": "2ª Série C - DS (Integral 9H)",
    "curso": "Desenvolvimento de Sistemas",
    "disciplinas": [
      {
        "disciplina": "BIOLOGIA",
        "b1": 8,
        "b2": 9,
        "b3": 8,
        "b4": 0,
        "media": 8.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO",
        "b1": 9,
        "b2": 10,
        "b3": 8,
        "b4": 0,
        "media": 9,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "Educaçao Financeira",
        "b1": 7,
        "b2": 6,
        "b3": 9,
        "b4": 0,
        "media": 7.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "EDUCACAO FISICA",
        "b1": 8,
        "b2": 9,
        "b3": 9,
        "b4": 0,
        "media": 8.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "FISICA",
        "b1": 3,
        "b2": 6,
        "b3": 8,
        "b4": 0,
        "media": 5.7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "GEOGRAFIA",
        "b1": 6,
        "b2": 8,
        "b3": 7,
        "b4": 0,
        "media": 7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "HISTORIA",
        "b1": 9,
        "b2": 6,
        "b3": 10,
        "b4": 0,
        "media": 8.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "LINGUA INGLESA",
        "b1": 8,
        "b2": 9,
        "b3": 10,
        "b4": 0,
        "media": 9,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "LINGUA PORTUGUESA",
        "b1": 6,
        "b2": 9,
        "b3": 8,
        "b4": 0,
        "media": 7.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "LOGICA E LINGUAGENS DE PROGRAMACAO",
        "b1": 9,
        "b2": 10,
        "b3": 9,
        "b4": 0,
        "media": 9.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "MATEMATICA",
        "b1": 6,
        "b2": 6,
        "b3": 8,
        "b4": 0,
        "media": 6.7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE E METODOLOGIAS AGEIS",
        "b1": 10,
        "b2": 10,
        "b3": 10,
        "b4": 0,
        "media": 10,
        "tendencia": "Estável"
      },
      {
        "disciplina": "QUIMICA",
        "b1": 6,
        "b2": 6,
        "b3": 8,
        "b4": 0,
        "media": 6.7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "REDAÇAO E LEITURA",
        "b1": 8,
        "b2": 8,
        "b3": 6,
        "b4": 0,
        "media": 7.3,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "REDES DE COMPUTADORES E SEGURANÇA DA INFORMAÇAO NA NUVEM",
        "b1": 7,
        "b2": 10,
        "b3": 8,
        "b4": 0,
        "media": 8.3,
        "tendencia": "Estável"
      }
    ],
    "pontosFortes": [
      "Destaque em BIOLOGIA (Média 8.3)",
      "Destaque em CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO (Média 9)",
      "Destaque em EDUCACAO FISICA (Média 8.7)"
    ],
    "pontosAtencao": [
      "Atenção em FISICA (Média 5.7)"
    ],
    "intervencoesSugeridas": "Desempenho em ascensão no 3º bimestre. Indicado para o BEEM e monitoria voluntária.",
    "dataUltimaImportacao": "2026-10-24"
  },
  {
    "estudanteId": "est-real-3",
    "nome": "ARTHUR HENRIQUE BASTOS",
    "turma": "2ª Série C - DS (Integral 9H)",
    "curso": "Desenvolvimento de Sistemas",
    "disciplinas": [
      {
        "disciplina": "BIOLOGIA",
        "b1": 7,
        "b2": 8,
        "b3": 8,
        "b4": 0,
        "media": 7.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO",
        "b1": 5,
        "b2": 9,
        "b3": 7,
        "b4": 0,
        "media": 7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "Educaçao Financeira",
        "b1": 5,
        "b2": 5,
        "b3": 7,
        "b4": 0,
        "media": 5.7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "EDUCACAO FISICA",
        "b1": 8,
        "b2": 8,
        "b3": 9,
        "b4": 0,
        "media": 8.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "FISICA",
        "b1": 5,
        "b2": 4,
        "b3": 7,
        "b4": 0,
        "media": 5.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "GEOGRAFIA",
        "b1": 6,
        "b2": 7,
        "b3": 7,
        "b4": 0,
        "media": 6.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "HISTORIA",
        "b1": 4,
        "b2": 6,
        "b3": 7,
        "b4": 0,
        "media": 5.7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "LINGUA INGLESA",
        "b1": 6,
        "b2": 8,
        "b3": 8,
        "b4": 0,
        "media": 7.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "LINGUA PORTUGUESA",
        "b1": 8,
        "b2": 6,
        "b3": 7,
        "b4": 0,
        "media": 7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "LOGICA E LINGUAGENS DE PROGRAMACAO",
        "b1": 6,
        "b2": 8,
        "b3": 5,
        "b4": 0,
        "media": 6.3,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "MATEMATICA",
        "b1": 4,
        "b2": 4,
        "b3": 8,
        "b4": 0,
        "media": 5.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE E METODOLOGIAS AGEIS",
        "b1": 4,
        "b2": 6,
        "b3": 6,
        "b4": 0,
        "media": 5.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "QUIMICA",
        "b1": 5,
        "b2": 6,
        "b3": 8,
        "b4": 0,
        "media": 6.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "REDAÇAO E LEITURA",
        "b1": 5,
        "b2": 6,
        "b3": 8,
        "b4": 0,
        "media": 6.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "REDES DE COMPUTADORES E SEGURANÇA DA INFORMAÇAO NA NUVEM",
        "b1": 5,
        "b2": 8,
        "b3": 7,
        "b4": 0,
        "media": 6.7,
        "tendencia": "Estável"
      }
    ],
    "pontosFortes": [
      "Destaque em EDUCACAO FISICA (Média 8.3)"
    ],
    "pontosAtencao": [
      "Atenção em Educaçao Financeira (Média 5.7)",
      "Atenção em FISICA (Média 5.3)",
      "Atenção em HISTORIA (Média 5.7)"
    ],
    "intervencoesSugeridas": "Desempenho em ascensão no 3º bimestre. Indicado para o BEEM e monitoria voluntária.",
    "dataUltimaImportacao": "2026-10-24"
  },
  {
    "estudanteId": "est-real-4",
    "nome": "BEATRIZ MORAES PALOMARES",
    "turma": "2ª Série C - DS (Integral 9H)",
    "curso": "Desenvolvimento de Sistemas",
    "disciplinas": [
      {
        "disciplina": "BIOLOGIA",
        "b1": 7,
        "b2": 8,
        "b3": 7,
        "b4": 0,
        "media": 7.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO",
        "b1": 8,
        "b2": 10,
        "b3": 8,
        "b4": 0,
        "media": 8.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "Educaçao Financeira",
        "b1": 7,
        "b2": 5,
        "b3": 6,
        "b4": 0,
        "media": 6,
        "tendencia": "Estável"
      },
      {
        "disciplina": "EDUCACAO FISICA",
        "b1": 8,
        "b2": 8,
        "b3": 8,
        "b4": 0,
        "media": 8,
        "tendencia": "Estável"
      },
      {
        "disciplina": "FISICA",
        "b1": 5,
        "b2": 5,
        "b3": 7,
        "b4": 0,
        "media": 5.7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "GEOGRAFIA",
        "b1": 5,
        "b2": 8,
        "b3": 8,
        "b4": 0,
        "media": 7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "HISTORIA",
        "b1": 5,
        "b2": 6,
        "b3": 7,
        "b4": 0,
        "media": 6,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "LINGUA INGLESA",
        "b1": 6,
        "b2": 7,
        "b3": 8,
        "b4": 0,
        "media": 7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "LINGUA PORTUGUESA",
        "b1": 7,
        "b2": 9,
        "b3": 8,
        "b4": 0,
        "media": 8,
        "tendencia": "Estável"
      },
      {
        "disciplina": "LOGICA E LINGUAGENS DE PROGRAMACAO",
        "b1": 7,
        "b2": 9,
        "b3": 8,
        "b4": 0,
        "media": 8,
        "tendencia": "Estável"
      },
      {
        "disciplina": "MATEMATICA",
        "b1": 6,
        "b2": 6,
        "b3": 9,
        "b4": 0,
        "media": 7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE E METODOLOGIAS AGEIS",
        "b1": 8,
        "b2": 10,
        "b3": 9,
        "b4": 0,
        "media": 9,
        "tendencia": "Estável"
      },
      {
        "disciplina": "QUIMICA",
        "b1": 5,
        "b2": 8,
        "b3": 5,
        "b4": 0,
        "media": 6,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "REDAÇAO E LEITURA",
        "b1": 9,
        "b2": 10,
        "b3": 9,
        "b4": 0,
        "media": 9.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "REDES DE COMPUTADORES E SEGURANÇA DA INFORMAÇAO NA NUVEM",
        "b1": 8,
        "b2": 10,
        "b3": 8,
        "b4": 0,
        "media": 8.7,
        "tendencia": "Regressão"
      }
    ],
    "pontosFortes": [
      "Destaque em CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO (Média 8.7)",
      "Destaque em EDUCACAO FISICA (Média 8)",
      "Destaque em LINGUA PORTUGUESA (Média 8)"
    ],
    "pontosAtencao": [
      "Atenção em FISICA (Média 5.7)"
    ],
    "intervencoesSugeridas": "Desempenho em ascensão no 3º bimestre. Indicado para o BEEM e monitoria voluntária.",
    "dataUltimaImportacao": "2026-10-24"
  },
  {
    "estudanteId": "est-real-5",
    "nome": "BETHANIA FATIMA DA COSTA",
    "turma": "2ª Série C - DS (Integral 9H)",
    "curso": "Desenvolvimento de Sistemas",
    "disciplinas": [
      {
        "disciplina": "BIOLOGIA",
        "b1": 5,
        "b2": 7,
        "b3": 8,
        "b4": 0,
        "media": 6.7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO",
        "b1": 8,
        "b2": 9,
        "b3": 7,
        "b4": 0,
        "media": 8,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "Educaçao Financeira",
        "b1": 5,
        "b2": 5,
        "b3": 6,
        "b4": 0,
        "media": 5.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "EDUCACAO FISICA",
        "b1": 7,
        "b2": 8,
        "b3": 8,
        "b4": 0,
        "media": 7.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "FISICA",
        "b1": 4,
        "b2": 5,
        "b3": 6,
        "b4": 0,
        "media": 5,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "GEOGRAFIA",
        "b1": 4,
        "b2": 6,
        "b3": 6,
        "b4": 0,
        "media": 5.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "HISTORIA",
        "b1": 6,
        "b2": 5,
        "b3": 5,
        "b4": 0,
        "media": 5.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "LINGUA INGLESA",
        "b1": 5,
        "b2": 5,
        "b3": 6,
        "b4": 0,
        "media": 5.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "LINGUA PORTUGUESA",
        "b1": 10,
        "b2": 9,
        "b3": 7,
        "b4": 0,
        "media": 8.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "LOGICA E LINGUAGENS DE PROGRAMACAO",
        "b1": 7,
        "b2": 8,
        "b3": 7,
        "b4": 0,
        "media": 7.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "MATEMATICA",
        "b1": 4,
        "b2": 5,
        "b3": 4,
        "b4": 0,
        "media": 4.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE E METODOLOGIAS AGEIS",
        "b1": 7,
        "b2": 7,
        "b3": 6,
        "b4": 0,
        "media": 6.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "QUIMICA",
        "b1": 7,
        "b2": 5,
        "b3": 5,
        "b4": 0,
        "media": 5.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "REDAÇAO E LEITURA",
        "b1": 8,
        "b2": 8,
        "b3": 4,
        "b4": 0,
        "media": 6.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "REDES DE COMPUTADORES E SEGURANÇA DA INFORMAÇAO NA NUVEM",
        "b1": 8,
        "b2": 8,
        "b3": 7,
        "b4": 0,
        "media": 7.7,
        "tendencia": "Regressão"
      }
    ],
    "pontosFortes": [
      "Destaque em CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO (Média 8)",
      "Destaque em LINGUA PORTUGUESA (Média 8.7)"
    ],
    "pontosAtencao": [
      "Atenção em Educaçao Financeira (Média 5.3)",
      "Atenção em FISICA (Média 5)",
      "Atenção em GEOGRAFIA (Média 5.3)"
    ],
    "intervencoesSugeridas": "Queda de rendimento observada no 3º bimestre. Encaminhado para plantão de dúvidas e alinhamento com a família.",
    "dataUltimaImportacao": "2026-10-24"
  },
  {
    "estudanteId": "est-real-6",
    "nome": "CARLOS EDUARDO CANFORA DE MELO CAMPOS",
    "turma": "2ª Série C - DS (Integral 9H)",
    "curso": "Desenvolvimento de Sistemas",
    "disciplinas": [
      {
        "disciplina": "BIOLOGIA",
        "b1": 7,
        "b2": 7,
        "b3": 7,
        "b4": 0,
        "media": 7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO",
        "b1": 7,
        "b2": 8,
        "b3": 6,
        "b4": 0,
        "media": 7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "Educaçao Financeira",
        "b1": 7,
        "b2": 5,
        "b3": 6,
        "b4": 0,
        "media": 6,
        "tendencia": "Estável"
      },
      {
        "disciplina": "EDUCACAO FISICA",
        "b1": 8,
        "b2": 9,
        "b3": 9,
        "b4": 0,
        "media": 8.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "FISICA",
        "b1": 5,
        "b2": 5,
        "b3": 5,
        "b4": 0,
        "media": 5,
        "tendencia": "Estável"
      },
      {
        "disciplina": "GEOGRAFIA",
        "b1": 5,
        "b2": 4,
        "b3": 6,
        "b4": 0,
        "media": 5,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "HISTORIA",
        "b1": 8,
        "b2": 5,
        "b3": 6,
        "b4": 0,
        "media": 6.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "LINGUA INGLESA",
        "b1": 5,
        "b2": 5,
        "b3": 5,
        "b4": 0,
        "media": 5,
        "tendencia": "Estável"
      },
      {
        "disciplina": "LINGUA PORTUGUESA",
        "b1": 9,
        "b2": 5,
        "b3": 6,
        "b4": 0,
        "media": 6.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "LOGICA E LINGUAGENS DE PROGRAMACAO",
        "b1": 6,
        "b2": 7,
        "b3": 6,
        "b4": 0,
        "media": 6.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "MATEMATICA",
        "b1": 5,
        "b2": 6,
        "b3": 7,
        "b4": 0,
        "media": 6,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE E METODOLOGIAS AGEIS",
        "b1": 7,
        "b2": 8,
        "b3": 6,
        "b4": 0,
        "media": 7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "QUIMICA",
        "b1": 5,
        "b2": 7,
        "b3": 5,
        "b4": 0,
        "media": 5.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "REDAÇAO E LEITURA",
        "b1": 8,
        "b2": 8,
        "b3": 7,
        "b4": 0,
        "media": 7.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "REDES DE COMPUTADORES E SEGURANÇA DA INFORMAÇAO NA NUVEM",
        "b1": 7,
        "b2": 9,
        "b3": 7,
        "b4": 0,
        "media": 7.7,
        "tendencia": "Regressão"
      }
    ],
    "pontosFortes": [
      "Destaque em EDUCACAO FISICA (Média 8.7)"
    ],
    "pontosAtencao": [
      "Atenção em FISICA (Média 5)",
      "Atenção em GEOGRAFIA (Média 5)",
      "Atenção em LINGUA INGLESA (Média 5)"
    ],
    "intervencoesSugeridas": "Queda de rendimento observada no 3º bimestre. Encaminhado para plantão de dúvidas e alinhamento com a família.",
    "dataUltimaImportacao": "2026-10-24"
  },
  {
    "estudanteId": "est-real-7",
    "nome": "CLARA LOPES CARVALHO SILVA",
    "turma": "2ª Série C - DS (Integral 9H)",
    "curso": "Desenvolvimento de Sistemas",
    "disciplinas": [
      {
        "disciplina": "BIOLOGIA",
        "b1": 7,
        "b2": 8,
        "b3": 8,
        "b4": 0,
        "media": 7.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO",
        "b1": 6,
        "b2": 9,
        "b3": 8,
        "b4": 0,
        "media": 7.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "Educaçao Financeira",
        "b1": 5,
        "b2": 6,
        "b3": 6,
        "b4": 0,
        "media": 5.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "EDUCACAO FISICA",
        "b1": 8,
        "b2": 9,
        "b3": 8,
        "b4": 0,
        "media": 8.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "FISICA",
        "b1": 4,
        "b2": 5,
        "b3": 5,
        "b4": 0,
        "media": 4.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "GEOGRAFIA",
        "b1": 6,
        "b2": 7,
        "b3": 6,
        "b4": 0,
        "media": 6.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "HISTORIA",
        "b1": 5,
        "b2": 6,
        "b3": 6,
        "b4": 0,
        "media": 5.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "LINGUA INGLESA",
        "b1": 8,
        "b2": 8,
        "b3": 8,
        "b4": 0,
        "media": 8,
        "tendencia": "Estável"
      },
      {
        "disciplina": "LINGUA PORTUGUESA",
        "b1": 6,
        "b2": 8,
        "b3": 7,
        "b4": 0,
        "media": 7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "LOGICA E LINGUAGENS DE PROGRAMACAO",
        "b1": 6,
        "b2": 8,
        "b3": 8,
        "b4": 0,
        "media": 7.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "MATEMATICA",
        "b1": 5,
        "b2": 5,
        "b3": 7,
        "b4": 0,
        "media": 5.7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE E METODOLOGIAS AGEIS",
        "b1": 8,
        "b2": 9,
        "b3": 10,
        "b4": 0,
        "media": 9,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "QUIMICA",
        "b1": 5,
        "b2": 7,
        "b3": 6,
        "b4": 0,
        "media": 6,
        "tendencia": "Estável"
      },
      {
        "disciplina": "REDAÇAO E LEITURA",
        "b1": 8,
        "b2": 7,
        "b3": 8,
        "b4": 0,
        "media": 7.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "REDES DE COMPUTADORES E SEGURANÇA DA INFORMAÇAO NA NUVEM",
        "b1": 7,
        "b2": 10,
        "b3": 8,
        "b4": 0,
        "media": 8.3,
        "tendencia": "Estável"
      }
    ],
    "pontosFortes": [
      "Destaque em EDUCACAO FISICA (Média 8.3)",
      "Destaque em LINGUA INGLESA (Média 8)",
      "Destaque em PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE E METODOLOGIAS AGEIS (Média 9)"
    ],
    "pontosAtencao": [
      "Atenção em Educaçao Financeira (Média 5.7)",
      "Atenção em FISICA (Média 4.7)",
      "Atenção em HISTORIA (Média 5.7)"
    ],
    "intervencoesSugeridas": "Desempenho em ascensão no 3º bimestre. Indicado para o BEEM e monitoria voluntária.",
    "dataUltimaImportacao": "2026-10-24"
  },
  {
    "estudanteId": "est-real-8",
    "nome": "DAVI LORENZO SARAIVA CHAVES",
    "turma": "2ª Série C - DS (Integral 9H)",
    "curso": "Desenvolvimento de Sistemas",
    "disciplinas": [
      {
        "disciplina": "BIOLOGIA",
        "b1": 6,
        "b2": 7,
        "b3": 7,
        "b4": 0,
        "media": 6.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO",
        "b1": 8,
        "b2": 8,
        "b3": 6,
        "b4": 0,
        "media": 7.3,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "Educaçao Financeira",
        "b1": 7,
        "b2": 6,
        "b3": 7,
        "b4": 0,
        "media": 6.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "EDUCACAO FISICA",
        "b1": 8,
        "b2": 9,
        "b3": 8,
        "b4": 0,
        "media": 8.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "FISICA",
        "b1": 6,
        "b2": 6,
        "b3": 7,
        "b4": 0,
        "media": 6.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "GEOGRAFIA",
        "b1": 5,
        "b2": 7,
        "b3": 7,
        "b4": 0,
        "media": 6.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "HISTORIA",
        "b1": 4,
        "b2": 5,
        "b3": 7,
        "b4": 0,
        "media": 5.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "LINGUA INGLESA",
        "b1": 5,
        "b2": 8,
        "b3": 7,
        "b4": 0,
        "media": 6.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "LINGUA PORTUGUESA",
        "b1": 9,
        "b2": 6,
        "b3": 7,
        "b4": 0,
        "media": 7.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "LOGICA E LINGUAGENS DE PROGRAMACAO",
        "b1": 8,
        "b2": 8,
        "b3": 4,
        "b4": 0,
        "media": 6.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "MATEMATICA",
        "b1": 5,
        "b2": 6,
        "b3": 6,
        "b4": 0,
        "media": 5.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE E METODOLOGIAS AGEIS",
        "b1": 7,
        "b2": 8,
        "b3": 8,
        "b4": 0,
        "media": 7.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "QUIMICA",
        "b1": 5,
        "b2": 8,
        "b3": 5,
        "b4": 0,
        "media": 6,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "REDAÇAO E LEITURA",
        "b1": 8,
        "b2": 9,
        "b3": 6,
        "b4": 0,
        "media": 7.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "REDES DE COMPUTADORES E SEGURANÇA DA INFORMAÇAO NA NUVEM",
        "b1": 9,
        "b2": 10,
        "b3": 7,
        "b4": 0,
        "media": 8.7,
        "tendencia": "Regressão"
      }
    ],
    "pontosFortes": [
      "Destaque em EDUCACAO FISICA (Média 8.3)",
      "Destaque em REDES DE COMPUTADORES E SEGURANÇA DA INFORMAÇAO NA NUVEM (Média 8.7)"
    ],
    "pontosAtencao": [
      "Atenção em HISTORIA (Média 5.3)",
      "Atenção em MATEMATICA (Média 5.7)"
    ],
    "intervencoesSugeridas": "Queda de rendimento observada no 3º bimestre. Encaminhado para plantão de dúvidas e alinhamento com a família.",
    "dataUltimaImportacao": "2026-10-24"
  },
  {
    "estudanteId": "est-real-9",
    "nome": "DAVI RODRIGUES DOS SANTOS",
    "turma": "2ª Série C - DS (Integral 9H)",
    "curso": "Desenvolvimento de Sistemas",
    "disciplinas": [
      {
        "disciplina": "BIOLOGIA",
        "b1": 6,
        "b2": 5,
        "b3": 6,
        "b4": 0,
        "media": 5.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO",
        "b1": 7,
        "b2": 10,
        "b3": 6,
        "b4": 0,
        "media": 7.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "Educaçao Financeira",
        "b1": 7,
        "b2": 3,
        "b3": 5,
        "b4": 0,
        "media": 5,
        "tendencia": "Estável"
      },
      {
        "disciplina": "EDUCACAO FISICA",
        "b1": 8,
        "b2": 8,
        "b3": 8,
        "b4": 0,
        "media": 8,
        "tendencia": "Estável"
      },
      {
        "disciplina": "FISICA",
        "b1": 3,
        "b2": 4,
        "b3": 3,
        "b4": 0,
        "media": 3.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "GEOGRAFIA",
        "b1": 5,
        "b2": 8,
        "b3": 5,
        "b4": 0,
        "media": 6,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "HISTORIA",
        "b1": 3,
        "b2": 5,
        "b3": 3,
        "b4": 0,
        "media": 3.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "LINGUA INGLESA",
        "b1": 3,
        "b2": 5,
        "b3": 3,
        "b4": 0,
        "media": 3.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "LINGUA PORTUGUESA",
        "b1": 5,
        "b2": 6,
        "b3": 5,
        "b4": 0,
        "media": 5.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "LOGICA E LINGUAGENS DE PROGRAMACAO",
        "b1": 8,
        "b2": 10,
        "b3": 6,
        "b4": 0,
        "media": 8,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "MATEMATICA",
        "b1": 3,
        "b2": 5,
        "b3": 5,
        "b4": 0,
        "media": 4.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE E METODOLOGIAS AGEIS",
        "b1": 6,
        "b2": 9,
        "b3": 6,
        "b4": 0,
        "media": 7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "QUIMICA",
        "b1": 5,
        "b2": 4,
        "b3": 5,
        "b4": 0,
        "media": 4.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "REDAÇAO E LEITURA",
        "b1": 5,
        "b2": 5,
        "b3": 4,
        "b4": 0,
        "media": 4.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "REDES DE COMPUTADORES E SEGURANÇA DA INFORMAÇAO NA NUVEM",
        "b1": 5,
        "b2": 9,
        "b3": 7,
        "b4": 0,
        "media": 7,
        "tendencia": "Estável"
      }
    ],
    "pontosFortes": [
      "Destaque em EDUCACAO FISICA (Média 8)",
      "Destaque em LOGICA E LINGUAGENS DE PROGRAMACAO (Média 8)"
    ],
    "pontosAtencao": [
      "Atenção em BIOLOGIA (Média 5.7)",
      "Atenção em Educaçao Financeira (Média 5)",
      "Atenção em FISICA (Média 3.3)"
    ],
    "intervencoesSugeridas": "Queda de rendimento observada no 3º bimestre. Encaminhado para plantão de dúvidas e alinhamento com a família.",
    "dataUltimaImportacao": "2026-10-24"
  },
  {
    "estudanteId": "est-real-10",
    "nome": "DIOGO DE CARVALHO PRAZERES",
    "turma": "2ª Série C - DS (Integral 9H)",
    "curso": "Desenvolvimento de Sistemas",
    "disciplinas": [
      {
        "disciplina": "BIOLOGIA",
        "b1": 7,
        "b2": 10,
        "b3": 10,
        "b4": 0,
        "media": 9,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO",
        "b1": 8,
        "b2": 9,
        "b3": 8,
        "b4": 0,
        "media": 8.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "Educaçao Financeira",
        "b1": 5,
        "b2": 7,
        "b3": 8,
        "b4": 0,
        "media": 6.7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "EDUCACAO FISICA",
        "b1": 8,
        "b2": 8,
        "b3": 8,
        "b4": 0,
        "media": 8,
        "tendencia": "Estável"
      },
      {
        "disciplina": "FISICA",
        "b1": 4,
        "b2": 6,
        "b3": 6,
        "b4": 0,
        "media": 5.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "GEOGRAFIA",
        "b1": 6,
        "b2": 8,
        "b3": 8,
        "b4": 0,
        "media": 7.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "HISTORIA",
        "b1": 5,
        "b2": 7,
        "b3": 9,
        "b4": 0,
        "media": 7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "LINGUA INGLESA",
        "b1": 6,
        "b2": 9,
        "b3": 10,
        "b4": 0,
        "media": 8.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "LINGUA PORTUGUESA",
        "b1": 6,
        "b2": 7,
        "b3": 8,
        "b4": 0,
        "media": 7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "LOGICA E LINGUAGENS DE PROGRAMACAO",
        "b1": 9,
        "b2": 9,
        "b3": 10,
        "b4": 0,
        "media": 9.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "MATEMATICA",
        "b1": 6,
        "b2": 6,
        "b3": 8,
        "b4": 0,
        "media": 6.7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE E METODOLOGIAS AGEIS",
        "b1": 9,
        "b2": 7,
        "b3": 10,
        "b4": 0,
        "media": 8.7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "QUIMICA",
        "b1": 6,
        "b2": 7,
        "b3": 7,
        "b4": 0,
        "media": 6.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "REDAÇAO E LEITURA",
        "b1": 8,
        "b2": 9,
        "b3": 9,
        "b4": 0,
        "media": 8.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "REDES DE COMPUTADORES E SEGURANÇA DA INFORMAÇAO NA NUVEM",
        "b1": 8,
        "b2": 9,
        "b3": 8,
        "b4": 0,
        "media": 8.3,
        "tendencia": "Estável"
      }
    ],
    "pontosFortes": [
      "Destaque em BIOLOGIA (Média 9)",
      "Destaque em CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO (Média 8.3)",
      "Destaque em EDUCACAO FISICA (Média 8)"
    ],
    "pontosAtencao": [
      "Atenção em FISICA (Média 5.3)"
    ],
    "intervencoesSugeridas": "Desempenho em ascensão no 3º bimestre. Indicado para o BEEM e monitoria voluntária.",
    "dataUltimaImportacao": "2026-10-24"
  },
  {
    "estudanteId": "est-real-11",
    "nome": "GABRIEL QUINTANILHA CLARO",
    "turma": "2ª Série C - DS (Integral 9H)",
    "curso": "Desenvolvimento de Sistemas",
    "disciplinas": [
      {
        "disciplina": "BIOLOGIA",
        "b1": 7,
        "b2": 6,
        "b3": 9,
        "b4": 0,
        "media": 7.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO",
        "b1": 8,
        "b2": 9,
        "b3": 7,
        "b4": 0,
        "media": 8,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "Educaçao Financeira",
        "b1": 8,
        "b2": 6,
        "b3": 8,
        "b4": 0,
        "media": 7.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "EDUCACAO FISICA",
        "b1": 7,
        "b2": 8,
        "b3": 8,
        "b4": 0,
        "media": 7.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "FISICA",
        "b1": 5,
        "b2": 5,
        "b3": 6,
        "b4": 0,
        "media": 5.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "GEOGRAFIA",
        "b1": 5,
        "b2": 7,
        "b3": 7,
        "b4": 0,
        "media": 6.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "HISTORIA",
        "b1": 5,
        "b2": 7,
        "b3": 6,
        "b4": 0,
        "media": 6,
        "tendencia": "Estável"
      },
      {
        "disciplina": "LINGUA INGLESA",
        "b1": 9,
        "b2": 5,
        "b3": 6,
        "b4": 0,
        "media": 6.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "LINGUA PORTUGUESA",
        "b1": 7,
        "b2": 8,
        "b3": 8,
        "b4": 0,
        "media": 7.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "LOGICA E LINGUAGENS DE PROGRAMACAO",
        "b1": 7,
        "b2": 7,
        "b3": 7,
        "b4": 0,
        "media": 7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "MATEMATICA",
        "b1": 5,
        "b2": 5,
        "b3": 6,
        "b4": 0,
        "media": 5.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE E METODOLOGIAS AGEIS",
        "b1": 5,
        "b2": 7,
        "b3": 9,
        "b4": 0,
        "media": 7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "QUIMICA",
        "b1": 5,
        "b2": 6,
        "b3": 6,
        "b4": 0,
        "media": 5.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "REDAÇAO E LEITURA",
        "b1": 8,
        "b2": 7,
        "b3": 5,
        "b4": 0,
        "media": 6.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "REDES DE COMPUTADORES E SEGURANÇA DA INFORMAÇAO NA NUVEM",
        "b1": 7,
        "b2": 8,
        "b3": 8,
        "b4": 0,
        "media": 7.7,
        "tendencia": "Estável"
      }
    ],
    "pontosFortes": [
      "Destaque em CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO (Média 8)"
    ],
    "pontosAtencao": [
      "Atenção em FISICA (Média 5.3)",
      "Atenção em MATEMATICA (Média 5.3)",
      "Atenção em QUIMICA (Média 5.7)"
    ],
    "intervencoesSugeridas": "Desempenho em ascensão no 3º bimestre. Indicado para o BEEM e monitoria voluntária.",
    "dataUltimaImportacao": "2026-10-24"
  },
  {
    "estudanteId": "est-real-12",
    "nome": "GUILHERME RODRIGUES DA SILVA",
    "turma": "2ª Série C - DS (Integral 9H)",
    "curso": "Desenvolvimento de Sistemas",
    "disciplinas": [
      {
        "disciplina": "BIOLOGIA",
        "b1": 5,
        "b2": 6,
        "b3": 7,
        "b4": 0,
        "media": 6,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO",
        "b1": 8,
        "b2": 9,
        "b3": 7,
        "b4": 0,
        "media": 8,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "Educaçao Financeira",
        "b1": 6,
        "b2": 5,
        "b3": 6,
        "b4": 0,
        "media": 5.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "EDUCACAO FISICA",
        "b1": 8,
        "b2": 8,
        "b3": 8,
        "b4": 0,
        "media": 8,
        "tendencia": "Estável"
      },
      {
        "disciplina": "FISICA",
        "b1": 3,
        "b2": 5,
        "b3": 5,
        "b4": 0,
        "media": 4.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "GEOGRAFIA",
        "b1": 5,
        "b2": 6,
        "b3": 6,
        "b4": 0,
        "media": 5.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "HISTORIA",
        "b1": 5,
        "b2": 5,
        "b3": 6,
        "b4": 0,
        "media": 5.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "LINGUA INGLESA",
        "b1": 5,
        "b2": 7,
        "b3": 6,
        "b4": 0,
        "media": 6,
        "tendencia": "Estável"
      },
      {
        "disciplina": "LINGUA PORTUGUESA",
        "b1": 5,
        "b2": 6,
        "b3": 6,
        "b4": 0,
        "media": 5.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "LOGICA E LINGUAGENS DE PROGRAMACAO",
        "b1": 8,
        "b2": 8,
        "b3": 7,
        "b4": 0,
        "media": 7.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "MATEMATICA",
        "b1": 5,
        "b2": 5,
        "b3": 5,
        "b4": 0,
        "media": 5,
        "tendencia": "Estável"
      },
      {
        "disciplina": "PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE E METODOLOGIAS AGEIS",
        "b1": 7,
        "b2": 10,
        "b3": 7,
        "b4": 0,
        "media": 8,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "QUIMICA",
        "b1": 4,
        "b2": 6,
        "b3": 5,
        "b4": 0,
        "media": 5,
        "tendencia": "Estável"
      },
      {
        "disciplina": "REDAÇAO E LEITURA",
        "b1": 8,
        "b2": 7,
        "b3": 5,
        "b4": 0,
        "media": 6.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "REDES DE COMPUTADORES E SEGURANÇA DA INFORMAÇAO NA NUVEM",
        "b1": 7,
        "b2": 10,
        "b3": 7,
        "b4": 0,
        "media": 8,
        "tendencia": "Regressão"
      }
    ],
    "pontosFortes": [
      "Destaque em CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO (Média 8)",
      "Destaque em EDUCACAO FISICA (Média 8)",
      "Destaque em PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE E METODOLOGIAS AGEIS (Média 8)"
    ],
    "pontosAtencao": [
      "Atenção em Educaçao Financeira (Média 5.7)",
      "Atenção em FISICA (Média 4.3)",
      "Atenção em GEOGRAFIA (Média 5.7)"
    ],
    "intervencoesSugeridas": "Queda de rendimento observada no 3º bimestre. Encaminhado para plantão de dúvidas e alinhamento com a família.",
    "dataUltimaImportacao": "2026-10-24"
  },
  {
    "estudanteId": "est-real-13",
    "nome": "HENRIQUE LUIZ AMORIM MOURA",
    "turma": "2ª Série C - DS (Integral 9H)",
    "curso": "Desenvolvimento de Sistemas",
    "disciplinas": [
      {
        "disciplina": "BIOLOGIA",
        "b1": 6,
        "b2": 5,
        "b3": 7,
        "b4": 0,
        "media": 6,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO",
        "b1": 4,
        "b2": 7,
        "b3": 5,
        "b4": 0,
        "media": 5.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "Educaçao Financeira",
        "b1": 6,
        "b2": 3,
        "b3": 4,
        "b4": 0,
        "media": 4.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "EDUCACAO FISICA",
        "b1": 8,
        "b2": 8,
        "b3": 8,
        "b4": 0,
        "media": 8,
        "tendencia": "Estável"
      },
      {
        "disciplina": "FISICA",
        "b1": 5,
        "b2": 3,
        "b3": 3,
        "b4": 0,
        "media": 3.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "GEOGRAFIA",
        "b1": 4,
        "b2": 2,
        "b3": 4,
        "b4": 0,
        "media": 3.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "HISTORIA",
        "b1": 4,
        "b2": 4,
        "b3": 4,
        "b4": 0,
        "media": 4,
        "tendencia": "Estável"
      },
      {
        "disciplina": "LINGUA INGLESA",
        "b1": 5,
        "b2": 4,
        "b3": 3,
        "b4": 0,
        "media": 4,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "LINGUA PORTUGUESA",
        "b1": 6,
        "b2": 5,
        "b3": 4,
        "b4": 0,
        "media": 5,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "LOGICA E LINGUAGENS DE PROGRAMACAO",
        "b1": 5,
        "b2": 5,
        "b3": 4,
        "b4": 0,
        "media": 4.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "MATEMATICA",
        "b1": 4,
        "b2": 3,
        "b3": 4,
        "b4": 0,
        "media": 3.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE E METODOLOGIAS AGEIS",
        "b1": 4,
        "b2": 6,
        "b3": 3,
        "b4": 0,
        "media": 4.3,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "QUIMICA",
        "b1": 4,
        "b2": 3,
        "b3": 5,
        "b4": 0,
        "media": 4,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "REDAÇAO E LEITURA",
        "b1": 5,
        "b2": 5,
        "b3": 4,
        "b4": 0,
        "media": 4.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "REDES DE COMPUTADORES E SEGURANÇA DA INFORMAÇAO NA NUVEM",
        "b1": 7,
        "b2": 7,
        "b3": 5,
        "b4": 0,
        "media": 6.3,
        "tendencia": "Regressão"
      }
    ],
    "pontosFortes": [
      "Destaque em EDUCACAO FISICA (Média 8)"
    ],
    "pontosAtencao": [
      "Atenção em CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO (Média 5.3)",
      "Atenção em Educaçao Financeira (Média 4.3)",
      "Atenção em FISICA (Média 3.7)"
    ],
    "intervencoesSugeridas": "Queda de rendimento observada no 3º bimestre. Encaminhado para plantão de dúvidas e alinhamento com a família.",
    "dataUltimaImportacao": "2026-10-24"
  },
  {
    "estudanteId": "est-real-14",
    "nome": "ISADORA LETICIA BARONE DE CASTRO",
    "turma": "2ª Série C - DS (Integral 9H)",
    "curso": "Desenvolvimento de Sistemas",
    "disciplinas": [
      {
        "disciplina": "BIOLOGIA",
        "b1": 7,
        "b2": 7,
        "b3": 8,
        "b4": 0,
        "media": 7.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO",
        "b1": 10,
        "b2": 10,
        "b3": 5,
        "b4": 0,
        "media": 8.3,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "Educaçao Financeira",
        "b1": 7,
        "b2": 4,
        "b3": 5,
        "b4": 0,
        "media": 5.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "EDUCACAO FISICA",
        "b1": 8,
        "b2": 8,
        "b3": 8,
        "b4": 0,
        "media": 8,
        "tendencia": "Estável"
      },
      {
        "disciplina": "FISICA",
        "b1": 4,
        "b2": 3,
        "b3": 6,
        "b4": 0,
        "media": 4.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "GEOGRAFIA",
        "b1": 6,
        "b2": 4,
        "b3": 5,
        "b4": 0,
        "media": 5,
        "tendencia": "Estável"
      },
      {
        "disciplina": "HISTORIA",
        "b1": 5,
        "b2": 5,
        "b3": 6,
        "b4": 0,
        "media": 5.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "LINGUA INGLESA",
        "b1": 5,
        "b2": 7,
        "b3": 5,
        "b4": 0,
        "media": 5.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "LINGUA PORTUGUESA",
        "b1": 5,
        "b2": 7,
        "b3": 8,
        "b4": 0,
        "media": 6.7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "LOGICA E LINGUAGENS DE PROGRAMACAO",
        "b1": 6,
        "b2": 7,
        "b3": 7,
        "b4": 0,
        "media": 6.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "MATEMATICA",
        "b1": 4,
        "b2": 4,
        "b3": 6,
        "b4": 0,
        "media": 4.7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE E METODOLOGIAS AGEIS",
        "b1": 8,
        "b2": 10,
        "b3": 8,
        "b4": 0,
        "media": 8.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "QUIMICA",
        "b1": 5,
        "b2": 7,
        "b3": 7,
        "b4": 0,
        "media": 6.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "REDAÇAO E LEITURA",
        "b1": 7,
        "b2": 8,
        "b3": 7,
        "b4": 0,
        "media": 7.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "REDES DE COMPUTADORES E SEGURANÇA DA INFORMAÇAO NA NUVEM",
        "b1": 5,
        "b2": 10,
        "b3": 7,
        "b4": 0,
        "media": 7.3,
        "tendencia": "Estável"
      }
    ],
    "pontosFortes": [
      "Destaque em CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO (Média 8.3)",
      "Destaque em EDUCACAO FISICA (Média 8)",
      "Destaque em PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE E METODOLOGIAS AGEIS (Média 8.7)"
    ],
    "pontosAtencao": [
      "Atenção em Educaçao Financeira (Média 5.3)",
      "Atenção em FISICA (Média 4.3)",
      "Atenção em GEOGRAFIA (Média 5)"
    ],
    "intervencoesSugeridas": "Desempenho em ascensão no 3º bimestre. Indicado para o BEEM e monitoria voluntária.",
    "dataUltimaImportacao": "2026-10-24"
  },
  {
    "estudanteId": "est-real-15",
    "nome": "ISMAEL DE ALMEIDA PEREIRA DAMIAO",
    "turma": "2ª Série C - DS (Integral 9H)",
    "curso": "Desenvolvimento de Sistemas",
    "disciplinas": [
      {
        "disciplina": "BIOLOGIA",
        "b1": 5,
        "b2": 5,
        "b3": 7,
        "b4": 0,
        "media": 5.7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO",
        "b1": 8,
        "b2": 8,
        "b3": 5,
        "b4": 0,
        "media": 7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "Educaçao Financeira",
        "b1": 5,
        "b2": 5,
        "b3": 7,
        "b4": 0,
        "media": 5.7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "EDUCACAO FISICA",
        "b1": 7,
        "b2": 8,
        "b3": 8,
        "b4": 0,
        "media": 7.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "FISICA",
        "b1": 4,
        "b2": 5,
        "b3": 4,
        "b4": 0,
        "media": 4.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "GEOGRAFIA",
        "b1": 7,
        "b2": 7,
        "b3": 6,
        "b4": 0,
        "media": 6.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "HISTORIA",
        "b1": 4,
        "b2": 6,
        "b3": 7,
        "b4": 0,
        "media": 5.7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "LINGUA INGLESA",
        "b1": 6,
        "b2": 7,
        "b3": 5,
        "b4": 0,
        "media": 6,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "LINGUA PORTUGUESA",
        "b1": 6,
        "b2": 6,
        "b3": 7,
        "b4": 0,
        "media": 6.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "LOGICA E LINGUAGENS DE PROGRAMACAO",
        "b1": 7,
        "b2": 7,
        "b3": 5,
        "b4": 0,
        "media": 6.3,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "MATEMATICA",
        "b1": 4,
        "b2": 5,
        "b3": 8,
        "b4": 0,
        "media": 5.7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE E METODOLOGIAS AGEIS",
        "b1": 6,
        "b2": 8,
        "b3": 6,
        "b4": 0,
        "media": 6.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "QUIMICA",
        "b1": 7,
        "b2": 5,
        "b3": 7,
        "b4": 0,
        "media": 6.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "REDAÇAO E LEITURA",
        "b1": 7,
        "b2": 7,
        "b3": 6,
        "b4": 0,
        "media": 6.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "REDES DE COMPUTADORES E SEGURANÇA DA INFORMAÇAO NA NUVEM",
        "b1": 9,
        "b2": 8,
        "b3": 7,
        "b4": 0,
        "media": 8,
        "tendencia": "Regressão"
      }
    ],
    "pontosFortes": [
      "Destaque em REDES DE COMPUTADORES E SEGURANÇA DA INFORMAÇAO NA NUVEM (Média 8)"
    ],
    "pontosAtencao": [
      "Atenção em BIOLOGIA (Média 5.7)",
      "Atenção em Educaçao Financeira (Média 5.7)",
      "Atenção em FISICA (Média 4.3)"
    ],
    "intervencoesSugeridas": "Queda de rendimento observada no 3º bimestre. Encaminhado para plantão de dúvidas e alinhamento com a família.",
    "dataUltimaImportacao": "2026-10-24"
  },
  {
    "estudanteId": "est-real-16",
    "nome": "MARIA LUISA DA SILVA NASCIMENTO",
    "turma": "2ª Série C - DS (Integral 9H)",
    "curso": "Desenvolvimento de Sistemas",
    "disciplinas": [
      {
        "disciplina": "BIOLOGIA",
        "b1": 5,
        "b2": 7,
        "b3": 5,
        "b4": 0,
        "media": 5.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO",
        "b1": 7,
        "b2": 8,
        "b3": 5,
        "b4": 0,
        "media": 6.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "Educaçao Financeira",
        "b1": 4,
        "b2": 5,
        "b3": 3,
        "b4": 0,
        "media": 4,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "EDUCACAO FISICA",
        "b1": 8,
        "b2": 8,
        "b3": 8,
        "b4": 0,
        "media": 8,
        "tendencia": "Estável"
      },
      {
        "disciplina": "FISICA",
        "b1": 3,
        "b2": 2,
        "b3": 4,
        "b4": 0,
        "media": 3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "GEOGRAFIA",
        "b1": 4,
        "b2": 6,
        "b3": 5,
        "b4": 0,
        "media": 5,
        "tendencia": "Estável"
      },
      {
        "disciplina": "HISTORIA",
        "b1": 3,
        "b2": 6,
        "b3": 3,
        "b4": 0,
        "media": 4,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "LINGUA INGLESA",
        "b1": 5,
        "b2": 4,
        "b3": 5,
        "b4": 0,
        "media": 4.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "LINGUA PORTUGUESA",
        "b1": 4,
        "b2": 7,
        "b3": 6,
        "b4": 0,
        "media": 5.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "LOGICA E LINGUAGENS DE PROGRAMACAO",
        "b1": 7,
        "b2": 8,
        "b3": 3,
        "b4": 0,
        "media": 6,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "MATEMATICA",
        "b1": 3,
        "b2": 5,
        "b3": 4,
        "b4": 0,
        "media": 4,
        "tendencia": "Estável"
      },
      {
        "disciplina": "PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE E METODOLOGIAS AGEIS",
        "b1": 6,
        "b2": 5,
        "b3": 2,
        "b4": 0,
        "media": 4.3,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "QUIMICA",
        "b1": 5,
        "b2": 4,
        "b3": 5,
        "b4": 0,
        "media": 4.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "REDAÇAO E LEITURA",
        "b1": 9,
        "b2": 8,
        "b3": 5,
        "b4": 0,
        "media": 7.3,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "REDES DE COMPUTADORES E SEGURANÇA DA INFORMAÇAO NA NUVEM",
        "b1": 7,
        "b2": 8,
        "b3": 5,
        "b4": 0,
        "media": 6.7,
        "tendencia": "Regressão"
      }
    ],
    "pontosFortes": [
      "Destaque em EDUCACAO FISICA (Média 8)"
    ],
    "pontosAtencao": [
      "Atenção em BIOLOGIA (Média 5.7)",
      "Atenção em Educaçao Financeira (Média 4)",
      "Atenção em FISICA (Média 3)"
    ],
    "intervencoesSugeridas": "Queda de rendimento observada no 3º bimestre. Encaminhado para plantão de dúvidas e alinhamento com a família.",
    "dataUltimaImportacao": "2026-10-24"
  },
  {
    "estudanteId": "est-real-17",
    "nome": "MATEUS GABRIEL DA SILVA RICO",
    "turma": "2ª Série C - DS (Integral 9H)",
    "curso": "Desenvolvimento de Sistemas",
    "disciplinas": [
      {
        "disciplina": "BIOLOGIA",
        "b1": 5,
        "b2": 5,
        "b3": 7,
        "b4": 0,
        "media": 5.7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO",
        "b1": 7,
        "b2": 9,
        "b3": 5,
        "b4": 0,
        "media": 7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "Educaçao Financeira",
        "b1": 4,
        "b2": 5,
        "b3": 8,
        "b4": 0,
        "media": 5.7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "EDUCACAO FISICA",
        "b1": 8,
        "b2": 8,
        "b3": 8,
        "b4": 0,
        "media": 8,
        "tendencia": "Estável"
      },
      {
        "disciplina": "FISICA",
        "b1": 3,
        "b2": 5,
        "b3": 5,
        "b4": 0,
        "media": 4.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "GEOGRAFIA",
        "b1": 4,
        "b2": 4,
        "b3": 6,
        "b4": 0,
        "media": 4.7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "HISTORIA",
        "b1": 2,
        "b2": 5,
        "b3": 6,
        "b4": 0,
        "media": 4.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "LINGUA INGLESA",
        "b1": 4,
        "b2": 8,
        "b3": 5,
        "b4": 0,
        "media": 5.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "LINGUA PORTUGUESA",
        "b1": 5,
        "b2": 6,
        "b3": 7,
        "b4": 0,
        "media": 6,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "LOGICA E LINGUAGENS DE PROGRAMACAO",
        "b1": 6,
        "b2": 8,
        "b3": 5,
        "b4": 0,
        "media": 6.3,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "MATEMATICA",
        "b1": 5,
        "b2": 6,
        "b3": 8,
        "b4": 0,
        "media": 6.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE E METODOLOGIAS AGEIS",
        "b1": 8,
        "b2": 8,
        "b3": 6,
        "b4": 0,
        "media": 7.3,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "QUIMICA",
        "b1": 6,
        "b2": 5,
        "b3": 7,
        "b4": 0,
        "media": 6,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "REDAÇAO E LEITURA",
        "b1": 7,
        "b2": 4,
        "b3": 5,
        "b4": 0,
        "media": 5.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "REDES DE COMPUTADORES E SEGURANÇA DA INFORMAÇAO NA NUVEM",
        "b1": 7,
        "b2": 8,
        "b3": 6,
        "b4": 0,
        "media": 7,
        "tendencia": "Regressão"
      }
    ],
    "pontosFortes": [
      "Destaque em EDUCACAO FISICA (Média 8)"
    ],
    "pontosAtencao": [
      "Atenção em BIOLOGIA (Média 5.7)",
      "Atenção em Educaçao Financeira (Média 5.7)",
      "Atenção em FISICA (Média 4.3)"
    ],
    "intervencoesSugeridas": "Desempenho em ascensão no 3º bimestre. Indicado para o BEEM e monitoria voluntária.",
    "dataUltimaImportacao": "2026-10-24"
  },
  {
    "estudanteId": "est-real-18",
    "nome": "MATHEUS DE ASSIS OLIVEIRA",
    "turma": "2ª Série C - DS (Integral 9H)",
    "curso": "Desenvolvimento de Sistemas",
    "disciplinas": [
      {
        "disciplina": "BIOLOGIA",
        "b1": 8,
        "b2": 10,
        "b3": 10,
        "b4": 0,
        "media": 9.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO",
        "b1": 9,
        "b2": 8,
        "b3": 6,
        "b4": 0,
        "media": 7.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "Educaçao Financeira",
        "b1": 8,
        "b2": 7,
        "b3": 8,
        "b4": 0,
        "media": 7.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "EDUCACAO FISICA",
        "b1": 7,
        "b2": 8,
        "b3": 9,
        "b4": 0,
        "media": 8,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "FISICA",
        "b1": 4,
        "b2": 5,
        "b3": 7,
        "b4": 0,
        "media": 5.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "GEOGRAFIA",
        "b1": 8,
        "b2": 5,
        "b3": 7,
        "b4": 0,
        "media": 6.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "HISTORIA",
        "b1": 5,
        "b2": 9,
        "b3": 7,
        "b4": 0,
        "media": 7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "LINGUA INGLESA",
        "b1": 9,
        "b2": 7,
        "b3": 8,
        "b4": 0,
        "media": 8,
        "tendencia": "Estável"
      },
      {
        "disciplina": "LINGUA PORTUGUESA",
        "b1": 6,
        "b2": 7,
        "b3": 8,
        "b4": 0,
        "media": 7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "LOGICA E LINGUAGENS DE PROGRAMACAO",
        "b1": 6,
        "b2": 8,
        "b3": 8,
        "b4": 0,
        "media": 7.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "MATEMATICA",
        "b1": 6,
        "b2": 6,
        "b3": 9,
        "b4": 0,
        "media": 7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE E METODOLOGIAS AGEIS",
        "b1": 8,
        "b2": 8,
        "b3": 9,
        "b4": 0,
        "media": 8.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "QUIMICA",
        "b1": 6,
        "b2": 5,
        "b3": 7,
        "b4": 0,
        "media": 6,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "REDAÇAO E LEITURA",
        "b1": 7,
        "b2": 8,
        "b3": 6,
        "b4": 0,
        "media": 7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "REDES DE COMPUTADORES E SEGURANÇA DA INFORMAÇAO NA NUVEM",
        "b1": 8,
        "b2": 8,
        "b3": 7,
        "b4": 0,
        "media": 7.7,
        "tendencia": "Regressão"
      }
    ],
    "pontosFortes": [
      "Destaque em BIOLOGIA (Média 9.3)",
      "Destaque em EDUCACAO FISICA (Média 8)",
      "Destaque em LINGUA INGLESA (Média 8)"
    ],
    "pontosAtencao": [
      "Atenção em FISICA (Média 5.3)"
    ],
    "intervencoesSugeridas": "Desempenho em ascensão no 3º bimestre. Indicado para o BEEM e monitoria voluntária.",
    "dataUltimaImportacao": "2026-10-24"
  },
  {
    "estudanteId": "est-real-19",
    "nome": "MATHEUS LUAN MONTEIRO",
    "turma": "2ª Série C - DS (Integral 9H)",
    "curso": "Desenvolvimento de Sistemas",
    "disciplinas": [
      {
        "disciplina": "BIOLOGIA",
        "b1": 9,
        "b2": 8,
        "b3": 8,
        "b4": 0,
        "media": 8.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO",
        "b1": 9,
        "b2": 9,
        "b3": 8,
        "b4": 0,
        "media": 8.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "Educaçao Financeira",
        "b1": 7,
        "b2": 7,
        "b3": 7,
        "b4": 0,
        "media": 7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "EDUCACAO FISICA",
        "b1": 8,
        "b2": 9,
        "b3": 8,
        "b4": 0,
        "media": 8.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "FISICA",
        "b1": 6,
        "b2": 7,
        "b3": 8,
        "b4": 0,
        "media": 7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "GEOGRAFIA",
        "b1": 7,
        "b2": 7,
        "b3": 8,
        "b4": 0,
        "media": 7.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "HISTORIA",
        "b1": 6,
        "b2": 7,
        "b3": 5,
        "b4": 0,
        "media": 6,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "LINGUA INGLESA",
        "b1": 5,
        "b2": 8,
        "b3": 8,
        "b4": 0,
        "media": 7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "LINGUA PORTUGUESA",
        "b1": 6,
        "b2": 8,
        "b3": 7,
        "b4": 0,
        "media": 7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "LOGICA E LINGUAGENS DE PROGRAMACAO",
        "b1": 9,
        "b2": 10,
        "b3": 7,
        "b4": 0,
        "media": 8.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "MATEMATICA",
        "b1": 6,
        "b2": 7,
        "b3": 10,
        "b4": 0,
        "media": 7.7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE E METODOLOGIAS AGEIS",
        "b1": 9,
        "b2": 8,
        "b3": 9,
        "b4": 0,
        "media": 8.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "QUIMICA",
        "b1": 7,
        "b2": 7,
        "b3": 6,
        "b4": 0,
        "media": 6.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "REDAÇAO E LEITURA",
        "b1": 8,
        "b2": 9,
        "b3": 9,
        "b4": 0,
        "media": 8.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "REDES DE COMPUTADORES E SEGURANÇA DA INFORMAÇAO NA NUVEM",
        "b1": 8,
        "b2": 10,
        "b3": 9,
        "b4": 0,
        "media": 9,
        "tendencia": "Estável"
      }
    ],
    "pontosFortes": [
      "Destaque em BIOLOGIA (Média 8.3)",
      "Destaque em CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO (Média 8.7)",
      "Destaque em EDUCACAO FISICA (Média 8.3)"
    ],
    "pontosAtencao": [],
    "intervencoesSugeridas": "Rendimento estável. Manter acompanhamento pedagógico regular.",
    "dataUltimaImportacao": "2026-10-24"
  },
  {
    "estudanteId": "est-real-20",
    "nome": "NAYARA VITORIA DOS SANTOS BARROS",
    "turma": "2ª Série C - DS (Integral 9H)",
    "curso": "Desenvolvimento de Sistemas",
    "disciplinas": [
      {
        "disciplina": "BIOLOGIA",
        "b1": 5,
        "b2": 7,
        "b3": 7,
        "b4": 0,
        "media": 6.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO",
        "b1": 7,
        "b2": 10,
        "b3": 8,
        "b4": 0,
        "media": 8.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "Educaçao Financeira",
        "b1": 6,
        "b2": 4,
        "b3": 5,
        "b4": 0,
        "media": 5,
        "tendencia": "Estável"
      },
      {
        "disciplina": "EDUCACAO FISICA",
        "b1": 8,
        "b2": 8,
        "b3": 8,
        "b4": 0,
        "media": 8,
        "tendencia": "Estável"
      },
      {
        "disciplina": "FISICA",
        "b1": 5,
        "b2": 5,
        "b3": 5,
        "b4": 0,
        "media": 5,
        "tendencia": "Estável"
      },
      {
        "disciplina": "GEOGRAFIA",
        "b1": 4,
        "b2": 5,
        "b3": 5,
        "b4": 0,
        "media": 4.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "HISTORIA",
        "b1": 4,
        "b2": 5,
        "b3": 4,
        "b4": 0,
        "media": 4.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "LINGUA INGLESA",
        "b1": 4,
        "b2": 6,
        "b3": 4,
        "b4": 0,
        "media": 4.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "LINGUA PORTUGUESA",
        "b1": 4,
        "b2": 6,
        "b3": 5,
        "b4": 0,
        "media": 5,
        "tendencia": "Estável"
      },
      {
        "disciplina": "LOGICA E LINGUAGENS DE PROGRAMACAO",
        "b1": 5,
        "b2": 8,
        "b3": 6,
        "b4": 0,
        "media": 6.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "MATEMATICA",
        "b1": 3,
        "b2": 6,
        "b3": 6,
        "b4": 0,
        "media": 5,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE E METODOLOGIAS AGEIS",
        "b1": 6,
        "b2": 9,
        "b3": 8,
        "b4": 0,
        "media": 7.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "QUIMICA",
        "b1": 3,
        "b2": 6,
        "b3": 5,
        "b4": 0,
        "media": 4.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "REDAÇAO E LEITURA",
        "b1": 8,
        "b2": 8,
        "b3": 6,
        "b4": 0,
        "media": 7.3,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "REDES DE COMPUTADORES E SEGURANÇA DA INFORMAÇAO NA NUVEM",
        "b1": 4,
        "b2": 9,
        "b3": 7,
        "b4": 0,
        "media": 6.7,
        "tendencia": "Estável"
      }
    ],
    "pontosFortes": [
      "Destaque em CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO (Média 8.3)",
      "Destaque em EDUCACAO FISICA (Média 8)"
    ],
    "pontosAtencao": [
      "Atenção em Educaçao Financeira (Média 5)",
      "Atenção em FISICA (Média 5)",
      "Atenção em GEOGRAFIA (Média 4.7)"
    ],
    "intervencoesSugeridas": "Rendimento estável. Manter acompanhamento pedagógico regular.",
    "dataUltimaImportacao": "2026-10-24"
  },
  {
    "estudanteId": "est-real-21",
    "nome": "NÍCOLAS GABRIEL DE SOUZA BENTO",
    "turma": "2ª Série C - DS (Integral 9H)",
    "curso": "Desenvolvimento de Sistemas",
    "disciplinas": [
      {
        "disciplina": "BIOLOGIA",
        "b1": 4,
        "b2": 5,
        "b3": 7,
        "b4": 0,
        "media": 5.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO",
        "b1": 5,
        "b2": 6,
        "b3": 5,
        "b4": 0,
        "media": 5.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "Educaçao Financeira",
        "b1": 4,
        "b2": 2,
        "b3": 5,
        "b4": 0,
        "media": 3.7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "EDUCACAO FISICA",
        "b1": 8,
        "b2": 9,
        "b3": 7,
        "b4": 0,
        "media": 8,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "FISICA",
        "b1": 4,
        "b2": 3,
        "b3": 3,
        "b4": 0,
        "media": 3.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "GEOGRAFIA",
        "b1": 5,
        "b2": 3,
        "b3": 4,
        "b4": 0,
        "media": 4,
        "tendencia": "Estável"
      },
      {
        "disciplina": "HISTORIA",
        "b1": 2,
        "b2": 4,
        "b3": 4,
        "b4": 0,
        "media": 3.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "LINGUA INGLESA",
        "b1": 4,
        "b2": 4,
        "b3": 3,
        "b4": 0,
        "media": 3.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "LINGUA PORTUGUESA",
        "b1": 4,
        "b2": 5,
        "b3": 6,
        "b4": 0,
        "media": 5,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "LOGICA E LINGUAGENS DE PROGRAMACAO",
        "b1": 6,
        "b2": 7,
        "b3": 4,
        "b4": 0,
        "media": 5.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "MATEMATICA",
        "b1": 2,
        "b2": 5,
        "b3": 4,
        "b4": 0,
        "media": 3.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE E METODOLOGIAS AGEIS",
        "b1": 8,
        "b2": 9,
        "b3": 6,
        "b4": 0,
        "media": 7.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "QUIMICA",
        "b1": 3,
        "b2": 5,
        "b3": 3,
        "b4": 0,
        "media": 3.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "REDAÇAO E LEITURA",
        "b1": 7,
        "b2": 7,
        "b3": 4,
        "b4": 0,
        "media": 6,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "REDES DE COMPUTADORES E SEGURANÇA DA INFORMAÇAO NA NUVEM",
        "b1": 6,
        "b2": 8,
        "b3": 5,
        "b4": 0,
        "media": 6.3,
        "tendencia": "Regressão"
      }
    ],
    "pontosFortes": [
      "Destaque em EDUCACAO FISICA (Média 8)"
    ],
    "pontosAtencao": [
      "Atenção em BIOLOGIA (Média 5.3)",
      "Atenção em CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO (Média 5.3)",
      "Atenção em Educaçao Financeira (Média 3.7)"
    ],
    "intervencoesSugeridas": "Queda de rendimento observada no 3º bimestre. Encaminhado para plantão de dúvidas e alinhamento com a família.",
    "dataUltimaImportacao": "2026-10-24"
  },
  {
    "estudanteId": "est-real-22",
    "nome": "NYCOLLAS HENRIQUE DA SILVA PAULINO",
    "turma": "2ª Série C - DS (Integral 9H)",
    "curso": "Desenvolvimento de Sistemas",
    "disciplinas": [
      {
        "disciplina": "BIOLOGIA",
        "b1": 5,
        "b2": 5,
        "b3": 6,
        "b4": 0,
        "media": 5.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO",
        "b1": 8,
        "b2": 8,
        "b3": 5,
        "b4": 0,
        "media": 7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "Educaçao Financeira",
        "b1": 5,
        "b2": 4,
        "b3": 3,
        "b4": 0,
        "media": 4,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "EDUCACAO FISICA",
        "b1": 7,
        "b2": 9,
        "b3": 7,
        "b4": 0,
        "media": 7.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "FISICA",
        "b1": 2,
        "b2": 5,
        "b3": 4,
        "b4": 0,
        "media": 3.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "GEOGRAFIA",
        "b1": 4,
        "b2": 6,
        "b3": 4,
        "b4": 0,
        "media": 4.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "HISTORIA",
        "b1": 5,
        "b2": 5,
        "b3": 5,
        "b4": 0,
        "media": 5,
        "tendencia": "Estável"
      },
      {
        "disciplina": "LINGUA INGLESA",
        "b1": 4,
        "b2": 5,
        "b3": 5,
        "b4": 0,
        "media": 4.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "LINGUA PORTUGUESA",
        "b1": 5,
        "b2": 5,
        "b3": 6,
        "b4": 0,
        "media": 5.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "LOGICA E LINGUAGENS DE PROGRAMACAO",
        "b1": 9,
        "b2": 8,
        "b3": 5,
        "b4": 0,
        "media": 7.3,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "MATEMATICA",
        "b1": 3,
        "b2": 5,
        "b3": 3,
        "b4": 0,
        "media": 3.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE E METODOLOGIAS AGEIS",
        "b1": 7,
        "b2": 6,
        "b3": 6,
        "b4": 0,
        "media": 6.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "QUIMICA",
        "b1": 5,
        "b2": 4,
        "b3": 3,
        "b4": 0,
        "media": 4,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "REDAÇAO E LEITURA",
        "b1": 4,
        "b2": 4,
        "b3": 6,
        "b4": 0,
        "media": 4.7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "REDES DE COMPUTADORES E SEGURANÇA DA INFORMAÇAO NA NUVEM",
        "b1": 9,
        "b2": 8,
        "b3": 7,
        "b4": 0,
        "media": 8,
        "tendencia": "Regressão"
      }
    ],
    "pontosFortes": [
      "Destaque em REDES DE COMPUTADORES E SEGURANÇA DA INFORMAÇAO NA NUVEM (Média 8)"
    ],
    "pontosAtencao": [
      "Atenção em BIOLOGIA (Média 5.3)",
      "Atenção em Educaçao Financeira (Média 4)",
      "Atenção em FISICA (Média 3.7)"
    ],
    "intervencoesSugeridas": "Queda de rendimento observada no 3º bimestre. Encaminhado para plantão de dúvidas e alinhamento com a família.",
    "dataUltimaImportacao": "2026-10-24"
  },
  {
    "estudanteId": "est-real-23",
    "nome": "PEDRO HENRIQUE JARDIM DE JESUS",
    "turma": "2ª Série C - DS (Integral 9H)",
    "curso": "Desenvolvimento de Sistemas",
    "disciplinas": [
      {
        "disciplina": "BIOLOGIA",
        "b1": 7,
        "b2": 8,
        "b3": 9,
        "b4": 0,
        "media": 8,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO",
        "b1": 9,
        "b2": 9,
        "b3": 8,
        "b4": 0,
        "media": 8.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "Educaçao Financeira",
        "b1": 5,
        "b2": 6,
        "b3": 7,
        "b4": 0,
        "media": 6,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "EDUCACAO FISICA",
        "b1": 7,
        "b2": 8,
        "b3": 8,
        "b4": 0,
        "media": 7.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "FISICA",
        "b1": 5,
        "b2": 5,
        "b3": 7,
        "b4": 0,
        "media": 5.7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "GEOGRAFIA",
        "b1": 6,
        "b2": 7,
        "b3": 7,
        "b4": 0,
        "media": 6.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "HISTORIA",
        "b1": 5,
        "b2": 7,
        "b3": 9,
        "b4": 0,
        "media": 7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "LINGUA INGLESA",
        "b1": 5,
        "b2": 9,
        "b3": 7,
        "b4": 0,
        "media": 7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "LINGUA PORTUGUESA",
        "b1": 8,
        "b2": 7,
        "b3": 8,
        "b4": 0,
        "media": 7.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "LOGICA E LINGUAGENS DE PROGRAMACAO",
        "b1": 8,
        "b2": 10,
        "b3": 7,
        "b4": 0,
        "media": 8.3,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "MATEMATICA",
        "b1": 7,
        "b2": 7,
        "b3": 9,
        "b4": 0,
        "media": 7.7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE E METODOLOGIAS AGEIS",
        "b1": 8,
        "b2": 9,
        "b3": 10,
        "b4": 0,
        "media": 9,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "QUIMICA",
        "b1": 5,
        "b2": 6,
        "b3": 7,
        "b4": 0,
        "media": 6,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "REDAÇAO E LEITURA",
        "b1": 8,
        "b2": 8,
        "b3": 6,
        "b4": 0,
        "media": 7.3,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "REDES DE COMPUTADORES E SEGURANÇA DA INFORMAÇAO NA NUVEM",
        "b1": 8,
        "b2": 10,
        "b3": 8,
        "b4": 0,
        "media": 8.7,
        "tendencia": "Regressão"
      }
    ],
    "pontosFortes": [
      "Destaque em BIOLOGIA (Média 8)",
      "Destaque em CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO (Média 8.7)",
      "Destaque em LOGICA E LINGUAGENS DE PROGRAMACAO (Média 8.3)"
    ],
    "pontosAtencao": [
      "Atenção em FISICA (Média 5.7)"
    ],
    "intervencoesSugeridas": "Desempenho em ascensão no 3º bimestre. Indicado para o BEEM e monitoria voluntária.",
    "dataUltimaImportacao": "2026-10-24"
  },
  {
    "estudanteId": "est-real-24",
    "nome": "RAFAEL CÉSAR BURI NESPOLI",
    "turma": "2ª Série C - DS (Integral 9H)",
    "curso": "Desenvolvimento de Sistemas",
    "disciplinas": [
      {
        "disciplina": "BIOLOGIA",
        "b1": 6,
        "b2": 6,
        "b3": 6,
        "b4": 0,
        "media": 6,
        "tendencia": "Estável"
      },
      {
        "disciplina": "CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO",
        "b1": 5,
        "b2": 6,
        "b3": 5,
        "b4": 0,
        "media": 5.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "Educaçao Financeira",
        "b1": 6,
        "b2": 5,
        "b3": 6,
        "b4": 0,
        "media": 5.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "EDUCACAO FISICA",
        "b1": 7,
        "b2": 8,
        "b3": 8,
        "b4": 0,
        "media": 7.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "FISICA",
        "b1": 3,
        "b2": 5,
        "b3": 5,
        "b4": 0,
        "media": 4.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "GEOGRAFIA",
        "b1": 5,
        "b2": 6,
        "b3": 5,
        "b4": 0,
        "media": 5.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "HISTORIA",
        "b1": 3,
        "b2": 5,
        "b3": 4,
        "b4": 0,
        "media": 4,
        "tendencia": "Estável"
      },
      {
        "disciplina": "LINGUA INGLESA",
        "b1": 5,
        "b2": 6,
        "b3": 7,
        "b4": 0,
        "media": 6,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "LINGUA PORTUGUESA",
        "b1": 5,
        "b2": 5,
        "b3": 6,
        "b4": 0,
        "media": 5.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "LOGICA E LINGUAGENS DE PROGRAMACAO",
        "b1": 8,
        "b2": 6,
        "b3": 7,
        "b4": 0,
        "media": 7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "MATEMATICA",
        "b1": 3,
        "b2": 3,
        "b3": 5,
        "b4": 0,
        "media": 3.7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE E METODOLOGIAS AGEIS",
        "b1": 4,
        "b2": 5,
        "b3": 7,
        "b4": 0,
        "media": 5.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "QUIMICA",
        "b1": 3,
        "b2": 7,
        "b3": 5,
        "b4": 0,
        "media": 5,
        "tendencia": "Estável"
      },
      {
        "disciplina": "REDAÇAO E LEITURA",
        "b1": 7,
        "b2": 7,
        "b3": 6,
        "b4": 0,
        "media": 6.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "REDES DE COMPUTADORES E SEGURANÇA DA INFORMAÇAO NA NUVEM",
        "b1": 5,
        "b2": 5,
        "b3": 7,
        "b4": 0,
        "media": 5.7,
        "tendencia": "Progressão"
      }
    ],
    "pontosFortes": [],
    "pontosAtencao": [
      "Atenção em CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO (Média 5.3)",
      "Atenção em Educaçao Financeira (Média 5.7)",
      "Atenção em FISICA (Média 4.3)"
    ],
    "intervencoesSugeridas": "Desempenho em ascensão no 3º bimestre. Indicado para o BEEM e monitoria voluntária.",
    "dataUltimaImportacao": "2026-10-24"
  },
  {
    "estudanteId": "est-real-25",
    "nome": "SAYMON MARCONDES DE CASTRO ALVES",
    "turma": "2ª Série C - DS (Integral 9H)",
    "curso": "Desenvolvimento de Sistemas",
    "disciplinas": [
      {
        "disciplina": "BIOLOGIA",
        "b1": 10,
        "b2": 10,
        "b3": 10,
        "b4": 0,
        "media": 10,
        "tendencia": "Estável"
      },
      {
        "disciplina": "CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO",
        "b1": 9,
        "b2": 10,
        "b3": 8,
        "b4": 0,
        "media": 9,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "Educaçao Financeira",
        "b1": 5,
        "b2": 5,
        "b3": 8,
        "b4": 0,
        "media": 6,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "EDUCACAO FISICA",
        "b1": 8,
        "b2": 9,
        "b3": 8,
        "b4": 0,
        "media": 8.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "FISICA",
        "b1": 5,
        "b2": 5,
        "b3": 7,
        "b4": 0,
        "media": 5.7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "GEOGRAFIA",
        "b1": 7,
        "b2": 10,
        "b3": 9,
        "b4": 0,
        "media": 8.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "HISTORIA",
        "b1": 6,
        "b2": 7,
        "b3": 9,
        "b4": 0,
        "media": 7.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "LINGUA INGLESA",
        "b1": 7,
        "b2": 9,
        "b3": 9,
        "b4": 0,
        "media": 8.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "LINGUA PORTUGUESA",
        "b1": 9,
        "b2": 9,
        "b3": 9,
        "b4": 0,
        "media": 9,
        "tendencia": "Estável"
      },
      {
        "disciplina": "LOGICA E LINGUAGENS DE PROGRAMACAO",
        "b1": 9,
        "b2": 10,
        "b3": 8,
        "b4": 0,
        "media": 9,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "MATEMATICA",
        "b1": 7,
        "b2": 7,
        "b3": 9,
        "b4": 0,
        "media": 7.7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE E METODOLOGIAS AGEIS",
        "b1": 8,
        "b2": 10,
        "b3": 10,
        "b4": 0,
        "media": 9.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "QUIMICA",
        "b1": 5,
        "b2": 6,
        "b3": 7,
        "b4": 0,
        "media": 6,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "REDAÇAO E LEITURA",
        "b1": 8,
        "b2": 9,
        "b3": 9,
        "b4": 0,
        "media": 8.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "REDES DE COMPUTADORES E SEGURANÇA DA INFORMAÇAO NA NUVEM",
        "b1": 8,
        "b2": 10,
        "b3": 10,
        "b4": 0,
        "media": 9.3,
        "tendencia": "Progressão"
      }
    ],
    "pontosFortes": [
      "Destaque em BIOLOGIA (Média 10)",
      "Destaque em CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO (Média 9)",
      "Destaque em EDUCACAO FISICA (Média 8.3)"
    ],
    "pontosAtencao": [
      "Atenção em FISICA (Média 5.7)"
    ],
    "intervencoesSugeridas": "Desempenho em ascensão no 3º bimestre. Indicado para o BEEM e monitoria voluntária.",
    "dataUltimaImportacao": "2026-10-24"
  },
  {
    "estudanteId": "est-real-26",
    "nome": "SOFIA ALMEIDA DA CUNHA",
    "turma": "2ª Série C - DS (Integral 9H)",
    "curso": "Desenvolvimento de Sistemas",
    "disciplinas": [
      {
        "disciplina": "BIOLOGIA",
        "b1": 6,
        "b2": 8,
        "b3": 8,
        "b4": 0,
        "media": 7.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO",
        "b1": 8,
        "b2": 10,
        "b3": 9,
        "b4": 0,
        "media": 9,
        "tendencia": "Estável"
      },
      {
        "disciplina": "Educaçao Financeira",
        "b1": 5,
        "b2": 6,
        "b3": 5,
        "b4": 0,
        "media": 5.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "EDUCACAO FISICA",
        "b1": 8,
        "b2": 9,
        "b3": 9,
        "b4": 0,
        "media": 8.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "FISICA",
        "b1": 6,
        "b2": 5,
        "b3": 5,
        "b4": 0,
        "media": 5.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "GEOGRAFIA",
        "b1": 6,
        "b2": 6,
        "b3": 6,
        "b4": 0,
        "media": 6,
        "tendencia": "Estável"
      },
      {
        "disciplina": "HISTORIA",
        "b1": 5,
        "b2": 5,
        "b3": 6,
        "b4": 0,
        "media": 5.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "LINGUA INGLESA",
        "b1": 5,
        "b2": 7,
        "b3": 8,
        "b4": 0,
        "media": 6.7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "LINGUA PORTUGUESA",
        "b1": 6,
        "b2": 10,
        "b3": 7,
        "b4": 0,
        "media": 7.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "LOGICA E LINGUAGENS DE PROGRAMACAO",
        "b1": 8,
        "b2": 9,
        "b3": 8,
        "b4": 0,
        "media": 8.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "MATEMATICA",
        "b1": 4,
        "b2": 5,
        "b3": 8,
        "b4": 0,
        "media": 5.7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE E METODOLOGIAS AGEIS",
        "b1": 8,
        "b2": 10,
        "b3": 9,
        "b4": 0,
        "media": 9,
        "tendencia": "Estável"
      },
      {
        "disciplina": "QUIMICA",
        "b1": 5,
        "b2": 6,
        "b3": 6,
        "b4": 0,
        "media": 5.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "REDAÇAO E LEITURA",
        "b1": 8,
        "b2": 9,
        "b3": 8,
        "b4": 0,
        "media": 8.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "REDES DE COMPUTADORES E SEGURANÇA DA INFORMAÇAO NA NUVEM",
        "b1": 8,
        "b2": 10,
        "b3": 9,
        "b4": 0,
        "media": 9,
        "tendencia": "Estável"
      }
    ],
    "pontosFortes": [
      "Destaque em CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO (Média 9)",
      "Destaque em EDUCACAO FISICA (Média 8.7)",
      "Destaque em LOGICA E LINGUAGENS DE PROGRAMACAO (Média 8.3)"
    ],
    "pontosAtencao": [
      "Atenção em Educaçao Financeira (Média 5.3)",
      "Atenção em FISICA (Média 5.3)",
      "Atenção em HISTORIA (Média 5.3)"
    ],
    "intervencoesSugeridas": "Desempenho em ascensão no 3º bimestre. Indicado para o BEEM e monitoria voluntária.",
    "dataUltimaImportacao": "2026-10-24"
  },
  {
    "estudanteId": "est-real-27",
    "nome": "VITOR SANTOS PINTO",
    "turma": "2ª Série C - DS (Integral 9H)",
    "curso": "Desenvolvimento de Sistemas",
    "disciplinas": [
      {
        "disciplina": "BIOLOGIA",
        "b1": 5,
        "b2": 5,
        "b3": 6,
        "b4": 0,
        "media": 5.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO",
        "b1": 8,
        "b2": 6,
        "b3": 6,
        "b4": 0,
        "media": 6.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "Educaçao Financeira",
        "b1": 5,
        "b2": 3,
        "b3": 5,
        "b4": 0,
        "media": 4.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "EDUCACAO FISICA",
        "b1": 8,
        "b2": 9,
        "b3": 9,
        "b4": 0,
        "media": 8.7,
        "tendencia": "Estável"
      },
      {
        "disciplina": "FISICA",
        "b1": 3,
        "b2": 5,
        "b3": 5,
        "b4": 0,
        "media": 4.3,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "GEOGRAFIA",
        "b1": 5,
        "b2": 4,
        "b3": 6,
        "b4": 0,
        "media": 5,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "HISTORIA",
        "b1": 4,
        "b2": 7,
        "b3": 5,
        "b4": 0,
        "media": 5.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "LINGUA INGLESA",
        "b1": 4,
        "b2": 4,
        "b3": 4,
        "b4": 0,
        "media": 4,
        "tendencia": "Estável"
      },
      {
        "disciplina": "LINGUA PORTUGUESA",
        "b1": 7,
        "b2": 5,
        "b3": 6,
        "b4": 0,
        "media": 6,
        "tendencia": "Estável"
      },
      {
        "disciplina": "LOGICA E LINGUAGENS DE PROGRAMACAO",
        "b1": 7,
        "b2": 7,
        "b3": 6,
        "b4": 0,
        "media": 6.7,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "MATEMATICA",
        "b1": 4,
        "b2": 4,
        "b3": 6,
        "b4": 0,
        "media": 4.7,
        "tendencia": "Progressão"
      },
      {
        "disciplina": "PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE E METODOLOGIAS AGEIS",
        "b1": 6,
        "b2": 6,
        "b3": 3,
        "b4": 0,
        "media": 5,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "QUIMICA",
        "b1": 5,
        "b2": 6,
        "b3": 4,
        "b4": 0,
        "media": 5,
        "tendencia": "Regressão"
      },
      {
        "disciplina": "REDAÇAO E LEITURA",
        "b1": 6,
        "b2": 5,
        "b3": 5,
        "b4": 0,
        "media": 5.3,
        "tendencia": "Estável"
      },
      {
        "disciplina": "REDES DE COMPUTADORES E SEGURANÇA DA INFORMAÇAO NA NUVEM",
        "b1": 8,
        "b2": 7,
        "b3": 7,
        "b4": 0,
        "media": 7.3,
        "tendencia": "Estável"
      }
    ],
    "pontosFortes": [
      "Destaque em EDUCACAO FISICA (Média 8.7)"
    ],
    "pontosAtencao": [
      "Atenção em BIOLOGIA (Média 5.3)",
      "Atenção em Educaçao Financeira (Média 4.3)",
      "Atenção em FISICA (Média 4.3)"
    ],
    "intervencoesSugeridas": "Desempenho em ascensão no 3º bimestre. Indicado para o BEEM e monitoria voluntária.",
    "dataUltimaImportacao": "2026-10-24"
  }
];
