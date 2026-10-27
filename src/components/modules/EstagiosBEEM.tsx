import React, { useState } from 'react';
import {
  Briefcase,
  Users,
  CheckCircle2,
  Clock,
  TrendingUp,
  Building2,
  Search,
  Filter,
  AlertTriangle,
  ExternalLink,
  ShieldAlert,
  Sparkles,
  Camera,
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { useApp } from '../../context/AppContext';
import { StatCard } from '../common/StatCard';
import { StorytellingCard } from '../common/StorytellingCard';

interface EvidenciaEstagioItem {
  id: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  tag: string;
  tipo: 'Imagem' | 'WhatsApp' | 'Documento';
  url: string;
  destaque?: boolean;
}

const EVIDENCIAS_ESTAGIO: EvidenciaEstagioItem[] = [
  {
    id: 'ev-beem-ciee-painel',
    titulo: 'Painel Institucional CIEE / BEEM — Gestão Escolar',
    subtitulo: 'Acesso autenticado do Prof. Jefferson Santos (PAEET)',
    descricao: 'Diagnóstico da Vitrine de Vagas do BEEM em Taubaté: apenas 1 código de vaga cadastrado (setor de autopeças), evidenciando a escassez crítica de empresas de tecnologia conveniadas no município.',
    tag: 'CIEE / BEEM Oficial',
    tipo: 'Imagem',
    url: '/evidencias_estagio/ciee_beem_painel_gestao_escolar.png',
    destaque: true
  },
  {
    id: 'ev-beem-ciee-horarios',
    titulo: 'Portal Estudante BEEM — Incompatibilidade de Horários com o PEI 9h',
    subtitulo: 'Jornadas matutinas e vespertinas conflitantes',
    descricao: 'As vagas disponíveis em Taubaté exigem 07h-11h, 14h-18h ou 17h-21h. Como a E.E. Monsenhor opera em regime PEI de 9 horas (07h30 às 16h30), os estudantes não podem assumir vagas em horário comercial sem abandonar as aulas.',
    tag: 'Gargalo de Horário',
    tipo: 'Imagem',
    url: '/evidencias_estagio/beem_ciee_vagas_conflito_horario.png',
    destaque: true
  },
  {
    id: 'ev-beem-aci',
    titulo: 'Edital ACI Taubaté — Requisitos Excludentes para Alunos de Escola Integral',
    subtitulo: 'Exigência de matrícula em turno matutino ou noturno',
    descricao: 'Oportunidades mapeadas na Associação Comercial exigem expressamente que o estudante curse no período matutino ou noturno regular, criando um bloqueio normativo para estudantes do Ensino Integral de 9h.',
    tag: 'Barreira Editalícia',
    tipo: 'Imagem',
    url: '/evidencias_estagio/aci_taubate_vagas_incompatibilidade_pei.png'
  },
  {
    id: 'ev-beem-nube',
    titulo: 'Portal NUBE — Mapeamento e Escassez de Oportunidades em Tecnologia',
    subtitulo: 'Monitoramento ativo em agentes integradores',
    descricao: 'Filtragem de vagas de estágio e aprendizagem comprovando ausência de vagas no eixo tecnológico (Desenvolvimento de Sistemas) e predomínio de varejo e serviços (Outback, Blue Fit, Kidstok, Forvia).',
    tag: 'Agente Integrador Nube',
    tipo: 'Imagem',
    url: '/evidencias_estagio/nube_pesquisa_vagas_estagio.png'
  },
  {
    id: 'ev-beem-whatsapp-prospeccao',
    titulo: 'Articulação WhatsApp com Recrutamento — Prospecção Ativa',
    subtitulo: 'Diálogo direto com CentralEstagio.com',
    descricao: 'Registro do contato direto do Prof. Jefferson buscando alternativas de mercado. A vaga ofertada (Auxiliar de Comércio, 12h35 às 18h) reforça a necessidade de buscar empresas de TI com modelos flexíveis.',
    tag: 'Prospecção Ativa',
    tipo: 'WhatsApp',
    url: '/evidencias_estagio/whatsapp_prospeccao_centralestagio.png'
  }
];

export const EstagiosBEEM: React.FC = () => {
  const { estudantes, empresas, userRole, setActiveModule, setLightboxEvidence } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [filtroElegibilidade, setFiltroElegibilidade] = useState<'todos' | 'elegiveis' | 'abaixo85'>('todos');

  // Cálculos precisos com base na turma oficial (27 alunos da 2ª Série C DS)
  const totalCadastrados = estudantes.length; // 27
  const elegiveis = estudantes.filter(est => est.frequenciaGeral >= 85); // Frequência >= 85%
  const abaixo85 = estudantes.filter(est => est.frequenciaGeral < 85); // Frequência < 85%
  const totalInseridos = 0; // Nenhum aluno conseguiu vaga ainda devido ao horário do PEI 9h

  // Filtragem dos estudantes na tabela
  const filteredEstudantes = estudantes.filter(est => {
    const matchesSearch =
      est.nomeCompleto.toLowerCase().includes(searchTerm.toLowerCase()) ||
      est.nomeAnonimizado.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filtroElegibilidade === 'elegiveis') {
      return matchesSearch && est.frequenciaGeral >= 85;
    }
    if (filtroElegibilidade === 'abaixo85') {
      return matchesSearch && est.frequenciaGeral < 85;
    }
    return matchesSearch;
  });

  // Funil do BEEM adaptado à realidade factual documentada
  const funnelData = [
    { etapa: 'Cadastrados no Programa', qtd: totalCadastrados, fill: '#6366F1' },
    { etapa: 'Elegíveis (Freq. ≥ 85%)', qtd: elegiveis.length, fill: '#10B981' },
    { etapa: 'Vagas Compatíveis PEI 9h', qtd: 0, fill: '#F59E0B' },
    { etapa: 'Estágios Efetivados', qtd: totalInseridos, fill: '#EF4444' }
  ];

  const situacaoRosca = [
    { name: 'Elegíveis (Freq. ≥ 85%)', value: elegiveis.length, color: '#10B981' },
    { name: 'Em Busca Ativa (< 85%)', value: abaixo85.length, color: '#F59E0B' }
  ];

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Programa BEEM — Bolsa Estágio Ensino Médio
            </span>
            <span className="text-xs text-slate-400">Turma 2ª Série C DS • E.E. Monsenhor João Alves</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight mt-1">
            Gestão, Elegibilidade e Inserção Profissional
          </h1>
          <p className="text-xs lg:text-sm text-slate-400">
            Acompanhamento de elegibilidade normativa (frequência ≥ 85%), diagnóstico de compatibilidade da jornada PEI 9h e prospecção de empresas de tecnologia.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveModule('empresas')}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-lg transition-colors"
          >
            <Building2 className="w-4 h-4" />
            <span>Gerenciar Prospecção de Empresas</span>
          </button>
        </div>
      </div>

      {/* ALERTA DIAGNÓSTICO DO PAEET — Gargalo PEI 9H */}
      <div className="relative overflow-hidden rounded-2xl p-6 border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-slate-900/90 to-rose-500/5 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-3 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                  Diagnóstico Situacional & Gargalo de Carga Horária
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  Desafio da Escola Integral (PEI 9h)
                </span>
              </div>
              <h2 className="text-lg lg:text-xl font-bold text-white">
                27 Estudantes Cadastrados • 21 Elegíveis (≥ 85%) • 0 Estágios Concluídos
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed max-w-4xl">
                Apesar de <strong>{elegiveis.length} dos 27 estudantes ({((elegiveis.length / totalCadastrados) * 100).toFixed(0)}%)</strong> cumprirem com excelência o critério de assiduidade regulamentar do programa (frequência igual ou superior a 85%), nenhum aluno ainda conseguiu contratação formal devido à <strong>incompatibilidade estrutural da jornada de 9 horas da escola PEI (07h30 às 16h30)</strong> com os turnos comerciais exigidos pelas empresas (07h-11h ou 12h-18h).
              </p>
            </div>
          </div>

          <div className="flex flex-wrap lg:flex-col gap-2 shrink-0 text-xs">
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center justify-between gap-4">
              <span className="text-slate-400">Critério Elegibilidade:</span>
              <span className="font-bold text-emerald-400">Frequência ≥ 85%</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center justify-between gap-4">
              <span className="text-slate-400">Jornada Escolar:</span>
              <span className="font-bold text-rose-400">PEI 9 Horas Diárias</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center justify-between gap-4">
              <span className="text-slate-400">Empresas de TI:</span>
              <span className="font-bold text-amber-400">Em Prospecção Ativa</span>
            </div>
          </div>
        </div>

        {/* 3 Pilares do Plano de Ação */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 pt-4 border-t border-amber-500/20 text-xs">
          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
            <span className="font-bold text-amber-300 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> 1. Conflito de Horários
            </span>
            <p className="text-[11px] text-slate-400 leading-snug">
              Vagas ofertadas pelo CIEE e agências exigem presença entre 07h e 18h ou exigem em edital matrícula em período matutino/noturno regular.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
            <span className="font-bold text-rose-300 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5" /> 2. Escassez de Empresas de TI
            </span>
            <p className="text-[11px] text-slate-400 leading-snug">
              A Vitrine regional de Taubaté conta prioritariamente com autopeças, clínicas e comércio em geral, sem empresas do polo tecnológico.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
            <span className="font-bold text-emerald-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> 3. Ação Proativa do PAEET
            </span>
            <p className="text-[11px] text-slate-400 leading-snug">
              O Prof. Jefferson está prospectando ativamente novas empresas de TI para modelos flexíveis (remoto, híbrido ou contraturno estendido).
            </p>
          </div>
        </div>
      </div>

      {/* KPIs do BEEM adaptados aos dados reais */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        <StatCard
          title="Total Cadastrados"
          value={totalCadastrados}
          icon={Users}
          iconColor="text-indigo-400"
        />
        <StatCard
          title="Elegíveis (≥ 85%)"
          value={elegiveis.length}
          icon={CheckCircle2}
          iconColor="text-emerald-400"
          trend={{ value: `${((elegiveis.length / totalCadastrados) * 100).toFixed(0)}%`, positive: true, label: "Assíduos" }}
        />
        <StatCard
          title="Busca Ativa (< 85%)"
          value={abaixo85.length}
          icon={Clock}
          iconColor="text-amber-400"
          trend={{ value: "Recomposição", positive: false, label: "Em acompanhamento" }}
        />
        <StatCard
          title="Vagas Compatíveis PEI"
          value={0}
          icon={Briefcase}
          iconColor="text-rose-400"
          trend={{ value: "Gargalo 9h", positive: false, label: "Zero vagas" }}
        />
        <StatCard
          title="Estágios Inseridos"
          value={totalInseridos}
          icon={CheckCircle2}
          iconColor="text-slate-400"
          trend={{ value: "0%", positive: false, label: "Aguardando TI" }}
        />
        <StatCard
          title="Empresas em Mapeamento"
          value={empresas.length}
          icon={Building2}
          iconColor="text-cyan-400"
          trend={{ value: "Prospecção", positive: true, label: "TI Regional" }}
        />
      </div>

      {/* DOSSIÊ FOTOGRÁFICO COMPROBATÓRIO DE ESTÁGIO & PROSPECÇÃO */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center space-x-2">
              <Camera className="w-4 h-4 text-cyan-400" />
              <h3 className="text-base font-bold text-white">
                Dossiê Comprobatório: Evidências do Desafio de Estágio & Prospecção
              </h3>
            </div>
            <p className="text-xs text-slate-400">
              Registros fotográficos e capturas de tela comprovando o acesso aos portais de vagas, as barreiras de horários e a atuação proativa do PAEET.
            </p>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            {EVIDENCIAS_ESTAGIO.length} Evidências Documentadas
          </span>
        </div>

        {/* Grid de Evidências */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {EVIDENCIAS_ESTAGIO.map((ev, idx) => (
            <div
              key={ev.id}
              onClick={() =>
                setLightboxEvidence({
                  id: ev.id,
                  titulo: ev.titulo,
                  descricao: ev.descricao,
                  categoria: 'Estágios BEEM',
                  tipo: ev.tipo,
                  data: '2026-10-27',
                  url: ev.url,
                  turmaRelacionada: '2ª Série C DS',
                  responsavel: 'Prof. Jefferson Santos (PAEET)',
                  publicoAutorizado: true
                })
              }
              className={`group relative rounded-xl overflow-hidden cursor-pointer border border-slate-800 bg-slate-900/60 shadow-lg hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between ${
                ev.destaque ? 'h-72' : 'h-72'
              }`}
            >
              <div className="relative h-44 overflow-hidden bg-slate-950">
                <img
                  src={ev.url}
                  alt={ev.titulo}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                    {ev.tag}
                  </span>
                </div>
                <div className="absolute top-2.5 right-2.5">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/60 text-slate-300 backdrop-blur-md">
                    #{idx + 1}
                  </span>
                </div>
              </div>

              <div className="p-3.5 space-y-1.5 flex-1 flex flex-col justify-between bg-slate-900/90">
                <div>
                  <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {ev.titulo}
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed mt-0.5">
                    {ev.descricao}
                  </p>
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800/60">
                  <span>Clique para ampliar em HD</span>
                  <span className="text-cyan-400 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Visualizar <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual Funnel and Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Funil do BEEM */}
        <div className="lg:col-span-2 glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white">Funil de Elegibilidade & Conversão BEEM</h3>
              <p className="text-xs text-slate-400">
                Demonstração da alta taxa de elegibilidade acadêmica ({elegiveis.length} de {totalCadastrados} alunos) versus a retenção no gargalo da jornada PEI 9h.
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
              Gargalo: PEI 9 Horas
            </span>
          </div>

          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={funnelData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                <XAxis type="number" stroke="#94A3B8" fontSize={11} domain={[0, 27]} />
                <YAxis dataKey="etapa" type="category" stroke="#94A3B8" fontSize={11} width={150} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0F172A', borderColor: '#334155', borderRadius: '12px' }}
                />
                <Bar dataKey="qtd" name="Estudantes" radius={[0, 6, 6, 0]}>
                  {funnelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Distribuição de Elegibilidade */}
        <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
          <div>
            <h3 className="text-base font-bold text-white">Elegibilidade por Frequência</h3>
            <p className="text-xs text-slate-400">Critério oficial SEDUC/BEEM: Frequência ≥ 85%.</p>
          </div>

          <div className="h-44 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={situacaoRosca}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={65}
                  paddingAngle={5}
                >
                  {situacaoRosca.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#0F172A', borderColor: '#334155', borderRadius: '12px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-2 text-xs">
            {situacaoRosca.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-slate-300 p-2 rounded-lg bg-slate-900/60 border border-slate-800/80">
                <span className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span>{item.name}</span>
                </span>
                <span className="font-bold font-mono text-white">
                  {item.value} ({((item.value / totalCadastrados) * 100).toFixed(1)}%)
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Storytelling Frame do BEEM Atualizado com a Realidade do PAEET */}
      <StorytellingCard
        title="Articulação com o Setor Produtivo: O Desafio do Horário PEI 9h & Prospecção de TI"
        subtitle="Como o PAEET atua para construir pontes entre o modelo de ensino integral e o mercado corporativo de tecnologia."
        desafio="Incompatibilidade de horários entre o Ensino Integral de 9 horas (07h30 às 16h30) e as vagas convencionais dos agentes de estágio (CIEE, Nube, ACI), somada à escassez de empresas de tecnologia cadastradas em Taubaté."
        estrategia="Mapeamento ativo de empresas de base tecnológica, visitas institucionais e prospecção direta de formatos inovadores: estágios semipresenciais/remotos, contraturno estendido e acordos de capacitação técnica corporativa."
        acoes={[
          "Mapeamento detalhado dos 27 estudantes da 2ª Série C DS com 21 alunos elegíveis (frequência ≥ 85%)",
          "Acompanhamento da Vitrine CIEE/BEEM e diagnóstico da ausência de vagas no segmento de software",
          "Prospecção ativa via WhatsApp corporativo e telefone com agências de recrutamento e empresas locais de TI",
          "Interlocução com a gestão escolar para viabilizar saídas técnicas e modelos de estágio flexíveis"
        ]}
        evidenciasDescricao="Capturas de tela das vitrines CIEE/BEEM, Nube, editais da ACI Taubaté com restrição de turno, e registros de conversas de prospecção via WhatsApp com agências."
        resultados={[
          "21 estudantes (77.8%) qualificados e plenamente elegíveis ao programa de estágio por assiduidade",
          "Dossiê técnico elaborado para subsidiar diálogo com a Diretoria Regional de Ensino e SEDUC",
          "Abertura de canal de comunicação com agências para formatação de vagas compatíveis com a jornada PEI"
        ]}
        melhoriasFuturas="Formalizar convênios diretos com software houses locais e empresas do Parque Tecnológico com modelos de estágio remoto e de férias."
        tag="Relatório Estratégico PAEET"
      />

      {/* Tabela de Estudantes (os 27 alunos reais da 2ª Série C DS) */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-400" />
              Relação Oficial dos 27 Estudantes Cadastrados (2ª Série C DS)
            </h3>
            <p className="text-xs text-slate-400">
              {userRole === 'PUBLIC'
                ? 'Modo Público: Nomes protegidos por anonimização em conformidade com a LGPD.'
                : 'Modo Gestão: Visualização confidencial com RA e nomes completos.'}
            </p>
          </div>

          {/* Filtros da Tabela */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
              <input
                type="text"
                placeholder="Filtrar estudante..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-slate-900 text-slate-200 text-xs rounded-lg pl-8 pr-3 py-1.5 border border-slate-700 focus:outline-none focus:border-blue-500 w-44 sm:w-56"
              />
            </div>

            <select
              value={filtroElegibilidade}
              onChange={(e) => setFiltroElegibilidade(e.target.value as any)}
              className="bg-slate-900 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 border border-slate-700 focus:outline-none focus:border-blue-500"
            >
              <option value="todos">Todos (27)</option>
              <option value="elegiveis">Elegíveis ≥ 85% ({elegiveis.length})</option>
              <option value="abaixo85">Abaixo de 85% ({abaixo85.length})</option>
            </select>
          </div>
        </div>

        {/* Tabela */}
        <div className="overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-900/90 text-slate-400 font-semibold border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Estudante</th>
                <th className="py-3 px-4">Turma / Carga</th>
                <th className="py-3 px-4">Frequência Geral</th>
                <th className="py-3 px-4">Média Geral</th>
                <th className="py-3 px-4">Elegibilidade BEEM</th>
                <th className="py-3 px-4">Situação / Diagnóstico de Vaga</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 bg-slate-950/40 font-medium">
              {filteredEstudantes.map((est, idx) => {
                const isElegivel = est.frequenciaGeral >= 85;

                return (
                  <tr key={est.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3 px-4 text-slate-500 font-mono text-[11px]">{idx + 1}</td>
                    <td className="py-3 px-4">
                      <div className="font-bold text-white">
                        {userRole === 'PUBLIC' ? est.nomeAnonimizado : est.nomeCompleto}
                      </div>
                      {userRole !== 'PUBLIC' && (
                        <span className="text-[10px] text-slate-400 font-mono">RA: {est.ra}</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-slate-300">
                      <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 text-[11px] font-mono border border-blue-500/20">
                        2ª C DS (PEI 9h)
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-mono font-bold text-xs ${
                            isElegivel ? 'text-emerald-400' : 'text-amber-400'
                          }`}
                        >
                          {est.frequenciaGeral}%
                        </span>
                        <span
                          className={`text-[9px] font-bold px-1.5 py-0.2 rounded ${
                            isElegivel
                              ? 'bg-emerald-500/10 text-emerald-400'
                              : 'bg-amber-500/10 text-amber-400'
                          }`}
                        >
                          {isElegivel ? '≥ 85%' : '< 85%'}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4 font-mono font-bold text-white">
                      {est.mediaGeral ? est.mediaGeral.toFixed(1) : '-'}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[10px] font-bold inline-flex items-center gap-1 ${
                          isElegivel
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        }`}
                      >
                        {isElegivel ? (
                          <>
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            Elegível ao BEEM
                          </>
                        ) : (
                          <>
                            <Clock className="w-3 h-3 text-amber-400" />
                            Busca Ativa (Recomposição)
                          </>
                        )}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-[11px] text-slate-300">
                        {isElegivel ? (
                          <span className="text-amber-300/90 font-medium">
                            Aguardando Vaga Compatível (Gargalo PEI 9h)
                          </span>
                        ) : (
                          <span className="text-slate-400 italic">
                            Necessita atingir 85% de frequência
                          </span>
                        )}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
