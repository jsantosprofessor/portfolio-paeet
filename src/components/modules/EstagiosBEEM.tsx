import React, { useState } from 'react';
import {
  Briefcase,
  Users,
  CheckCircle2,
  Clock,
  TrendingUp,
  Building2,
  Plus,
  Search,
  Filter,
  DollarSign,
  ShieldCheck,
  FileText
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

export const EstagiosBEEM: React.FC = () => {
  const { estudantes, empresas, userRole, setActiveModule } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [filtroStatus, setFiltroStatus] = useState<string>('todos');

  // Filter students based on role and search
  const filteredEstudantes = estudantes.filter(est => {
    const matchesSearch =
      est.nomeCompleto.toLowerCase().includes(searchTerm.toLowerCase()) ||
      est.nomeAnonimizado.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (est.empresaEstagio && est.empresaEstagio.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = filtroStatus === 'todos' || est.estagioStatus === filtroStatus;
    return matchesSearch && matchesStatus;
  });

  const funnelData = [
    { etapa: 'Elegíveis', qtd: 104, fill: '#8B5CF6' },
    { etapa: 'Inscritos', qtd: 98, fill: '#6366F1' },
    { etapa: 'Encaminhados', qtd: 94, fill: '#3B82F6' },
    { etapa: 'Inseridos', qtd: 84, fill: '#10B981' }
  ];

  const situacaoRosca = [
    { name: 'Inseridos com Bolsa', value: 84, color: '#10B981' },
    { name: 'Encaminhados / Entrevistas', value: 10, color: '#3B82F6' },
    { name: 'Aguardando Nova Vaga', value: 10, color: '#F59E0B' }
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
            <span className="text-xs text-slate-400">SEDUC-SP / CIEE</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight mt-1">
            Gestão e Acompanhamento dos Estágios BEEM
          </h1>
          <p className="text-xs lg:text-sm text-slate-400">
            Articulação de vagas remuneradas, encaminhamento técnico e monitoramento de desempenho dos bolsistas.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveModule('empresas')}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-lg transition-colors"
          >
            <Building2 className="w-4 h-4" />
            <span>Gerenciar Empresas Parceiras</span>
          </button>
        </div>
      </div>

      {/* KPIs do BEEM */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
        <StatCard title="Elegíveis" value={104} icon={Users} iconColor="text-purple-400" />
        <StatCard title="Inscritos" value={98} icon={FileText} iconColor="text-indigo-400" />
        <StatCard title="Encaminhados" value={94} icon={Clock} iconColor="text-blue-400" />
        <StatCard title="Inseridos" value={84} icon={CheckCircle2} iconColor="text-emerald-400" />
        <StatCard title="Aguardando" value={10} icon={Clock} iconColor="text-amber-400" />
        <StatCard title="Empresas" value={empresas.length} icon={Building2} iconColor="text-cyan-400" />
        <StatCard
          title="Taxa Inserção"
          value={80.8}
          suffix="%"
          decimals={1}
          icon={TrendingUp}
          iconColor="text-emerald-400"
          trend={{ value: "Alta", positive: true }}
        />
      </div>

      {/* Visual Funnel and Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Funil de Conversão */}
        <div className="lg:col-span-2 glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white">Funil de Conversão do Estágio BEEM</h3>
              <p className="text-xs text-slate-400">Fluxo desde a elegibilidade até a contratação formal.</p>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
              Conversão: 80.8%
            </span>
          </div>

          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={funnelData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                <XAxis type="number" stroke="#94A3B8" fontSize={11} />
                <YAxis dataKey="etapa" type="category" stroke="#94A3B8" fontSize={11} width={90} />
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

        {/* Distribuição da Situação */}
        <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
          <div>
            <h3 className="text-base font-bold text-white">Status dos Estudantes</h3>
            <p className="text-xs text-slate-400">Situação atual no programa de estágio.</p>
          </div>

          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={situacaoRosca}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={70}
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

          <div className="space-y-1.5 text-xs">
            {situacaoRosca.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-slate-300">
                <span className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span>{item.name}</span>
                </span>
                <span className="font-bold font-mono text-white">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Storytelling Frame do BEEM */}
      <StorytellingCard
        title="Estratégias de Articulação com o Setor Produtivo & BEEM"
        subtitle="Como a prospecção ativa de empresas transformou a taxa de empregabilidade da escola pública."
        desafio="Resistência inicial de empresas regionais em contratar estagiários do Ensino Médio Técnico por desconhecimento da matriz curricular prática do Novotec."
        estrategia="Visitas corporativas presenciais com portfólio de projetos dos estudantes e demonstração de compatibilidade técnica com as demandas de TI e Logística."
        acoes={[
          "Mapeamento de 45 indústrias e empresas de TI no Vale do Paraíba",
          "Realização de reuniões técnicas com gestores de engenharia e RH",
          "Envio de ementas curriculares e competências desenvolvidas",
          "Acompanhamento da contratação via CIEE e plataforma SEDUC"
        ]}
        evidenciasDescricao="Registros em ata, trocas formais de e-mails, prints de alinhamento via WhatsApp corporativo e termos de compromisso assinados."
        resultados={[
          "84 estudantes inseridos com bolsa-auxílio de até R$ 1.350,00",
          "Taxa de evasão zero entre os estudantes que conquistaram estágio",
          "Feedback positivo com 100% de renovação de contratos com a Embraer e Stefanini"
        ]}
        melhoriasFuturas="Expandir as vagas em empresas de Redes e Cibersegurança para o próximo ano letivo."
        tag="Caso de Sucesso BEEM"
      />

      {/* Tabela de Estudantes (com controle LGPD) */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-400" />
              Relação de Estudantes Acompanhados
            </h3>
            <p className="text-xs text-slate-400">
              {userRole === 'PUBLIC'
                ? 'Modo Público: Nomes e dados sensíveis protegidos por anonimização em conformidade com a LGPD.'
                : 'Modo Gestão: Visualização confidencial com RA, nomes completos e contatos.'}
            </p>
          </div>

          {/* Filtros da Tabela */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
              <input
                type="text"
                placeholder="Filtrar estudante ou empresa..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-slate-900 text-slate-200 text-xs rounded-lg pl-8 pr-3 py-1.5 border border-slate-700 focus:outline-none focus:border-blue-500 w-48 sm:w-60"
              />
            </div>

            <select
              value={filtroStatus}
              onChange={(e) => setFiltroStatus(e.target.value)}
              className="bg-slate-900 text-slate-200 text-xs rounded-lg px-2 py-1.5 border border-slate-700 focus:outline-none focus:border-blue-500"
            >
              <option value="todos">Todos Status</option>
              <option value="Inserido">Inseridos</option>
              <option value="Encaminhado">Encaminhados</option>
              <option value="Aguardando">Aguardando</option>
            </select>
          </div>
        </div>

        {/* Tabela */}
        <div className="overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-900/90 text-slate-400 font-semibold border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">Estudante</th>
                <th className="py-3 px-4">Turma</th>
                <th className="py-3 px-4">Frequência</th>
                <th className="py-3 px-4">Média Geral</th>
                <th className="py-3 px-4">Status BEEM</th>
                <th className="py-3 px-4">Empresa / Bolsa</th>
                {userRole !== 'PUBLIC' && <th className="py-3 px-4">Contato</th>}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 bg-slate-950/40 font-medium">
              {filteredEstudantes.map((est) => (
                <tr key={est.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3 px-4">
                    <div className="font-bold text-white">
                      {userRole === 'PUBLIC' ? est.nomeAnonimizado : est.nomeCompleto}
                    </div>
                    {userRole !== 'PUBLIC' && (
                      <span className="text-[10px] text-slate-400 font-mono">RA: {est.ra}</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-slate-300">{est.turmaId.toUpperCase()}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`font-mono font-bold ${
                        est.frequenciaGeral >= 85 ? 'text-emerald-400' : 'text-amber-400'
                      }`}
                    >
                      {est.frequenciaGeral}%
                    </span>
                  </td>
                  <td className="py-3 px-4 font-mono font-bold text-white">{est.mediaGeral.toFixed(1)}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        est.estagioStatus === 'Inserido'
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : est.estagioStatus === 'Encaminhado'
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                      }`}
                    >
                      {est.estagioStatus}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    {est.empresaEstagio ? (
                      <div>
                        <span className="font-semibold text-slate-200">{est.empresaEstagio}</span>
                        {est.bolsaValor && (
                          <p className="text-[10px] text-emerald-400 font-mono">
                            R$ {est.bolsaValor.toLocaleString('pt-BR')}/mês
                          </p>
                        )}
                      </div>
                    ) : (
                      <span className="text-slate-400 italic">Em prospecção</span>
                    )}
                  </td>
                  {userRole !== 'PUBLIC' && (
                    <td className="py-3 px-4 text-[11px] text-slate-300 font-mono">
                      {est.telefoneContato || 'Não informado'}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
