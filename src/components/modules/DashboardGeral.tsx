import React, { useState } from 'react';
import {
  Users,
  Briefcase,
  Building2,
  Compass,
  CheckCircle2,
  TrendingUp,
  Award,
  AlertTriangle,
  UserCheck,
  FileCheck2,
  Filter,
  Layers,
  Calendar,
  Sparkles
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  CartesianGrid
} from 'recharts';
import { useApp } from '../../context/AppContext';
import { StatCard } from '../common/StatCard';
import { dashboardChartData } from '../../data/mockData';

// Matérias exclusivas do Técnico de DS Novotec
const TECH_SUBJECT_KEYS = [
  'LOGICA E LINGUAGENS DE PROGRAMACAO',
  'PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE E METODOLOGIAS AGEIS',
  'REDES DE COMPUTADORES E SEGURANÇA DA INFORMAÇAO NA NUVEM',
  'CARREIRA E COMPETENCIAS PARA O MERCADO DE TRABALHO'
];
const isTechSubject = (nome: string) => TECH_SUBJECT_KEYS.some(k => nome.toUpperCase().includes(k));

export const DashboardGeral: React.FC = () => {
  const { filtros, setFiltros, cursos, turmas, setActiveModule, estudantes, boletins } = useApp();

  // ── Estatísticas calculadas dos alunos/boletins reais ──
  const totalAlunos = estudantes.length;
  const alunosProgressao = estudantes.filter(e => e.situacaoAcademica === 'Progressão').length;
  const alunosEstaveis = estudantes.filter(e => e.situacaoAcademica === 'Estável').length;
  const alunosRegressao = estudantes.filter(e => e.situacaoAcademica === 'Regressão').length;
  const boletinsSincronizados = boletins.length;

  // Frequência média real dos alunos
  const freqMedia = totalAlunos > 0
    ? Number((estudantes.reduce((s, e) => s + (e.frequenciaGeral || 0), 0) / totalAlunos).toFixed(1))
    : 91.8;

  // Média das matérias técnicas calculada dos boletins reais
  let techSum = 0, techCount = 0;
  boletins.forEach(b => {
    b.disciplinas.forEach(d => {
      if (isTechSubject(d.disciplina) && d.media > 0) {
        techSum += d.media;
        techCount++;
      }
    });
  });
  const mediaGeralTecnica = techCount > 0 ? Number((techSum / techCount).toFixed(1)) : 7.5;

  // Distribuição situação acadêmica real (para o gráfico de pizza)
  const distribuicaoSituacaoReal = [
    { name: 'Progressão', value: alunosProgressao, color: '#10B981' },
    { name: 'Desempenho Estável', value: alunosEstaveis, color: '#3B82F6' },
    { name: 'Em Regressão / Apoio', value: alunosRegressao, color: '#F59E0B' }
  ].filter(d => d.value > 0);

  // Custom Tooltip for dark mode charts
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 border border-slate-700/80 p-3 rounded-xl shadow-2xl text-xs space-y-1">
          <p className="font-bold text-white mb-1">{label}</p>
          {payload.map((entry: any, index: number) => (
            <div key={`item-${index}`} className="flex items-center justify-between space-x-3">
              <span className="flex items-center space-x-1.5" style={{ color: entry.color }}>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
                <span>{entry.name}:</span>
              </span>
              <span className="font-mono font-bold text-white">{entry.value}</span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Module Title & Filters Bar */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              Painel Executivo
            </span>
            <span className="text-xs text-slate-400">Atualizado com dados de frequência e BEEM</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight mt-1">
            Dashboard Geral de Resultados
          </h1>
          <p className="text-xs lg:text-sm text-slate-400">
            Consolidação das ações, metas atingidas e evolução dos estudantes acompanhados pelo PAEET.
          </p>
        </div>

        {/* Global Filter Bar */}
        <div className="flex flex-wrap items-center gap-2.5 bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
          <div className="flex items-center space-x-1 text-slate-400 text-xs px-1 font-semibold">
            <Filter className="w-3.5 h-3.5 text-blue-400" />
            <span>Filtros:</span>
          </div>

          {/* Ano Letivo */}
          <select
            value={filtros.anoLetivo}
            onChange={(e) => setFiltros(prev => ({ ...prev, anoLetivo: Number(e.target.value) }))}
            className="bg-slate-800 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 border border-slate-700 focus:outline-none focus:border-blue-500"
          >
            <option value={2025}>Ano Letivo: 2025</option>
            <option value={2026}>Ano Letivo: 2026</option>
          </select>

          {/* Bimestre */}
          <select
            value={filtros.bimestre}
            onChange={(e) => setFiltros(prev => ({ ...prev, bimestre: e.target.value as any }))}
            className="bg-slate-800 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 border border-slate-700 focus:outline-none focus:border-blue-500"
          >
            <option value="Todos">Bimestre: Todos</option>
            <option value="1º Bimestre">1º Bimestre</option>
            <option value="2º Bimestre">2º Bimestre</option>
            <option value="3º Bimestre">3º Bimestre</option>
            <option value="4º Bimestre">4º Bimestre</option>
          </select>

          {/* Cursos */}
          <select
            value={filtros.cursoId}
            onChange={(e) => setFiltros(prev => ({ ...prev, cursoId: e.target.value }))}
            className="bg-slate-800 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 border border-slate-700 focus:outline-none focus:border-blue-500"
          >
            <option value="todos">Todos os Cursos</option>
            {cursos.map(c => (
              <option key={c.id} value={c.id}>{c.nome}</option>
            ))}
          </select>

          {/* Turmas */}
          <select
            value={filtros.turmaId}
            onChange={(e) => setFiltros(prev => ({ ...prev, turmaId: e.target.value }))}
            className="bg-slate-800 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 border border-slate-700 focus:outline-none focus:border-blue-500"
          >
            <option value="todas">Todas as Turmas</option>
            {turmas.map(t => (
              <option key={t.id} value={t.id}>{t.nome}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid de Indicadores Estratégicos — dados reais dos alunos */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <StatCard
          title="Média Geral (Matérias Técnicas)"
          value={mediaGeralTecnica}
          decimals={1}
          icon={TrendingUp}
          iconColor="text-blue-400"
          glowColor="from-blue-500/20 to-transparent"
          trend={{ value: `Meta SEDUC: 7.0`, positive: mediaGeralTecnica >= 7, label: 'Matérias do Técnico' }}
          onClick={() => setActiveModule('desempenho')}
        />
        <StatCard
          title="Alunos em Progressão"
          value={alunosProgressao}
          icon={TrendingUp}
          iconColor="text-emerald-400"
          glowColor="from-emerald-500/20 to-transparent"
          trend={{ value: `+${Math.round((alunosProgressao / Math.max(totalAlunos,1)) * 100)}% da turma`, positive: true, label: 'Evolução no 3º Bim' }}
          onClick={() => setActiveModule('desempenho')}
        />
        <StatCard
          title="Desempenho Estável"
          value={alunosEstaveis}
          icon={FileCheck2}
          iconColor="text-blue-400"
          glowColor="from-blue-500/20 to-transparent"
          trend={{ value: `${Math.round((alunosEstaveis / Math.max(totalAlunos,1)) * 100)}% da turma`, positive: true, label: 'Mantendo Desempenho' }}
          onClick={() => setActiveModule('desempenho')}
        />
        <StatCard
          title="Em Regressão / Apoio"
          value={alunosRegressao}
          icon={AlertTriangle}
          iconColor="text-amber-400"
          glowColor="from-amber-500/20 to-transparent"
          trend={{ value: `${alunosRegressao} alunos`, positive: false, label: 'Monitoria Ativa' }}
          onClick={() => setActiveModule('desempenho')}
        />
        <StatCard
          title="Boletins Sincronizados"
          value={boletinsSincronizados}
          icon={Layers}
          iconColor="text-purple-400"
          glowColor="from-purple-500/20 to-transparent"
          trend={{ value: `${totalAlunos} alunos ativos`, positive: true, label: '2ª Série C DS' }}
          onClick={() => setActiveModule('desempenho')}
        />
        <StatCard
          title="Frequência Geral da Turma"
          value={freqMedia}
          suffix="%"
          decimals={1}
          icon={UserCheck}
          iconColor="text-cyan-400"
          glowColor="from-cyan-500/20 to-transparent"
          trend={{ value: 'Meta: 85%', positive: freqMedia >= 85, label: freqMedia >= 85 ? 'Superada ✓' : 'Atenção!' }}
          onClick={() => setActiveModule('busca-ativa')}
        />
        <StatCard
          title="Inseridos no BEEM"
          value={84}
          icon={Briefcase}
          iconColor="text-emerald-400"
          glowColor="from-emerald-500/20 to-transparent"
          trend={{ value: "+20%", positive: true, label: "Acima da Meta SEDUC" }}
          onClick={() => setActiveModule('beem')}
        />
        <StatCard
          title="Empresas Parceiras"
          value={38}
          icon={Building2}
          iconColor="text-purple-400"
          glowColor="from-purple-500/20 to-transparent"
          trend={{ value: "+13", positive: true, label: "Novos convênios" }}
          onClick={() => setActiveModule('empresas')}
        />
        <StatCard
          title="Visitas Técnicas"
          value={12}
          icon={Compass}
          iconColor="text-rose-400"
          glowColor="from-rose-500/20 to-transparent"
          trend={{ value: "CAVEX / PqTec", positive: true, label: "100% Executadas" }}
          onClick={() => setActiveModule('visitas')}
        />
        <StatCard
          title="Certificados Emitidos"
          value={115}
          icon={Award}
          iconColor="text-amber-300"
          glowColor="from-amber-500/20 to-transparent"
          trend={{ value: "Mérito Técnico", positive: true, label: "Solenidade 2025" }}
          onClick={() => setActiveModule('certificacao')}
        />
      </div>

      {/* Gráficos Interativos Linha 1: Evolução BEEM e Frequência */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfico 1: Evolução dos Estágios BEEM por Mês */}
        <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-emerald-400" />
                Evolução dos Estágios BEEM (Mês a Mês)
              </h3>
              <p className="text-xs text-slate-400">
                Inscritos, encaminhados a entrevistas e inseridos com bolsa ativa.
              </p>
            </div>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Taxa Inserção: 80.8%
            </span>
          </div>

          <div className="h-72 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dashboardChartData.estagiosPorMes}>
                <defs>
                  <linearGradient id="colorInseridos" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.6}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorEncaminhados" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                <XAxis dataKey="mes" stroke="#94A3B8" fontSize={11} />
                <YAxis stroke="#94A3B8" fontSize={11} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: '11px', color: '#94A3B8' }} />
                <Area type="monotone" dataKey="inscritos" name="Total Inscritos" stroke="#8B5CF6" fillOpacity={0.1} fill="#8B5CF6" />
                <Area type="monotone" dataKey="encaminhados" name="Encaminhados" stroke="#3B82F6" fillOpacity={1} fill="url(#colorEncaminhados)" />
                <Area type="monotone" dataKey="inseridos" name="Estagiários Inseridos" stroke="#10B981" strokeWidth={2} fillOpacity={1} fill="url(#colorInseridos)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráfico 2: Evolução da Frequência Escolar x Meta SEDUC */}
        <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-cyan-400" />
                Frequência Escolar Mensal x Meta SEDUC (85%)
              </h3>
              <p className="text-xs text-slate-400">
                Acompanhamento da assiduidade e impacto direto das intervenções de busca ativa.
              </p>
            </div>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              Média Atual: 91.8%
            </span>
          </div>

          <div className="h-72 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dashboardChartData.frequenciaMensal}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                <XAxis dataKey="mes" stroke="#94A3B8" fontSize={11} />
                <YAxis domain={[75, 100]} stroke="#94A3B8" fontSize={11} unit="%" />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: '11px', color: '#94A3B8' }} />
                <Line type="monotone" dataKey="frequencia" name="Frequência Real" stroke="#06B6D4" strokeWidth={3} dot={{ r: 4, fill: '#06B6D4' }} />
                <Line type="monotone" dataKey="meta" name="Meta Mínima SEDUC (85%)" stroke="#EF4444" strokeWidth={2} strokeDasharray="5 5" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Gráficos Interativos Linha 2: Distribuição Acadêmica, Segmentos de Empresas e Metas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Gráfico 3: Situação Acadêmica */}
        <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
          <div>
            <h3 className="text-base font-bold text-white">Distribuição da Situação Acadêmica</h3>
            <p className="text-xs text-slate-400">Classificação dos estudantes por curva de rendimento.</p>
          </div>

          <div className="h-60 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={distribuicaoSituacaoReal}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={5}
                  label={({ name, value }) => `${value}`}
                >
                  {distribuicaoSituacaoReal.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-1.5 text-xs">
            {distribuicaoSituacaoReal.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-slate-300">
                <span className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span>{item.name}</span>
                </span>
                <span className="font-bold font-mono text-white">{item.value} alunos</span>
              </div>
            ))}
            <div className="flex items-center justify-between text-slate-400 border-t border-slate-800 pt-1.5">
              <span className="font-semibold">Total Turma</span>
              <span className="font-bold font-mono text-white">{totalAlunos} alunos</span>
            </div>
          </div>
        </div>

        {/* Gráfico 4: Empresas por Segmento */}
        <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
          <div>
            <h3 className="text-base font-bold text-white">Empresas por Segmento Econômico</h3>
            <p className="text-xs text-slate-400">Total de parceiras prospectadas vs com estagiários ativos.</p>
          </div>

          <div className="h-72 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dashboardChartData.empresasPorSegmento} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                <XAxis type="number" stroke="#94A3B8" fontSize={11} />
                <YAxis dataKey="segmento" type="category" stroke="#94A3B8" fontSize={10} width={100} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: '11px', color: '#94A3B8' }} />
                <Bar dataKey="total" name="Mapeadas" fill="#475569" radius={[0, 4, 4, 0]} />
                <Bar dataKey="ativas" name="Com Estágio Ativo" fill="#3B82F6" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráfico 5: Comparativo Metas SEDUC x Realizado */}
        <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
          <div>
            <h3 className="text-base font-bold text-white">Comparativo Metas SEDUC x Atingido</h3>
            <p className="text-xs text-slate-400">Indicadores estipulados no plano de trabalho anual.</p>
          </div>

          <div className="space-y-4 pt-2">
            {dashboardChartData.comparativoMetas.map((m, idx) => {
              const perc = Math.round((m.alcancado / m.meta) * 100);
              return (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-semibold">{m.indicador}</span>
                    <span className="text-emerald-400 font-bold font-mono">
                      {m.alcancado} / {m.meta} ({perc}%)
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${Math.min(perc, 100)}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Seção Destaque: Resultados que Transformam a Educação Técnica */}
      <div className="glass-panel rounded-3xl p-8 border border-blue-500/30 bg-gradient-to-br from-slate-900/90 via-navy-900/90 to-blue-950/40 space-y-4">
        <div className="flex items-center space-x-2 text-blue-400">
          <Sparkles className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider">Impacto Real Demonstrado</span>
        </div>
        <h2 className="text-2xl font-extrabold text-white tracking-tight">
          Resultados que Transformam a Educação Técnica
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
          Através da articulação sistemática entre a escola estadual e grandes empregadores de tecnologia e indústria (como Embraer, Stefanini, TOTVS, Kenvue e Gerdau), superamos em <strong>20%</strong> a meta de inserção do BEEM, estabilizamos a frequência escolar acima de <strong>91%</strong> e promovemos visitas técnicas pedagógicas inéditas, como ao <strong>CAVEX</strong> (Comando de Aviação do Exército).
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => setActiveModule('relatorios')}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-lg transition-colors"
          >
            Emitir Relatório Executivo Oficial
          </button>
          <button
            onClick={() => setActiveModule('evidencias')}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors"
          >
            Acessar Arquivo de Evidências Comprobatórias
          </button>
        </div>
      </div>
    </div>
  );
};
