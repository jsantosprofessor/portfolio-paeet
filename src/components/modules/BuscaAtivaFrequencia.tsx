import React, { useState } from 'react';
import {
  UserCheck,
  AlertTriangle,
  Users,
  TrendingUp,
  Search,
  Plus,
  Lock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Clock,
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
  Legend,
  LineChart,
  Line
} from 'recharts';
import { useApp } from '../../context/AppContext';
import { StatCard } from '../common/StatCard';
import { RegistroBuscaAtiva } from '../../types';

export const BuscaAtivaFrequencia: React.FC = () => {
  const { buscaAtivaList, addBuscaAtiva, estudantes, userRole, showToast } = useApp();
  const [selectedEstudanteId, setSelectedEstudanteId] = useState<string>(estudantes[4]?.id || estudantes[0]?.id);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  // Form states for new Busca Ativa
  const [formEstudanteNome, setFormEstudanteNome] = useState('');
  const [formTurma, setFormTurma] = useState('2ª Série A - Desenv. de Sistemas');
  const [formSituacao, setFormSituacao] = useState('');
  const [formEstrategia, setFormEstrategia] = useState('');
  const [formFreqAntes, setFormFreqAntes] = useState(70);
  const [formStatus, setFormStatus] = useState<'Em Aberto' | 'Em Acompanhamento' | 'Superado / Regularizado'>('Em Acompanhamento');

  const selectedEstudante = estudantes.find(e => e.id === selectedEstudanteId);

  // Turmas Frequencia Data
  const turmasFreqData = [
    { turma: '1ª A DS', presenca: 93.4, faltas: 6.6 },
    { turma: '2ª A DS', presenca: 94.1, faltas: 5.9 },
    { turma: '3ª A DS', presenca: 95.8, faltas: 4.2 },
    { turma: '2ª B ADM', presenca: 89.5, faltas: 10.5 },
    { turma: '2ª C LOG', presenca: 86.2, faltas: 13.8 }
  ];

  // Comparativo Antes x Depois Intervenção Busca Ativa
  const intervencoesData = buscaAtivaList.map(ba => ({
    aluno: userRole === 'PUBLIC' ? ba.nomeEstudante.split(' ')[0] + ' (Anon)' : ba.nomeEstudante.split(' ')[0],
    antes: ba.frequenciaAntes,
    depois: ba.frequenciaDepois || ba.frequenciaAntes + 12
  }));

  const handleCreateBuscaAtiva = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formEstudanteNome || !formSituacao) return;
    addBuscaAtiva({
      estudanteId: `est-new-${Date.now()}`,
      nomeEstudante: formEstudanteNome,
      turma: formTurma,
      data: new Date().toISOString().split('T')[0],
      situacaoIdentificada: formSituacao,
      estrategiaAdotada: formEstrategia,
      responsavel: 'Prof. Jefferson Santos (PAEET)',
      resultado: 'Intervenção protocolada e em acompanhamento quinzenal.',
      frequenciaAntes: Number(formFreqAntes),
      frequenciaDepois: Number(formFreqAntes) + 10,
      status: formStatus,
      proximoEncaminhamento: 'Contato de retorno com os responsáveis.'
    });
    setShowAddModal(false);
    setFormEstudanteNome('');
    setFormSituacao('');
    setFormEstrategia('');
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
              Gestão da Assiduidade & Permanência Escolar
            </span>
            <span className="text-xs text-slate-400">Diretrizes SEDUC-SP</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight mt-1">
            Busca Ativa & Monitoramento da Frequência
          </h1>
          <p className="text-xs lg:text-sm text-slate-400">
            Acompanhamento individualizado e intervenções pedagógicas para prevenção da evasão e garantia do vínculo escolar.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs shadow-lg transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Registrar Intervenção de Busca Ativa</span>
        </button>
      </div>

      {/* KPIs da Frequência */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
        <StatCard title="Matriculados" value={342} icon={Users} iconColor="text-blue-400" />
        <StatCard title="Freq. Regular (>85%)" value={310} icon={UserCheck} iconColor="text-emerald-400" />
        <StatCard title="Baixa Frequência" value={24} icon={AlertTriangle} iconColor="text-amber-400" />
        <StatCard title="Em Acompanhamento" value={buscaAtivaList.length} icon={Clock} iconColor="text-purple-400" />
        <StatCard title="% Presença Geral" value={91.8} suffix="%" decimals={1} icon={TrendingUp} iconColor="text-cyan-400" />
        <StatCard title="% Faltas Médias" value={8.2} suffix="%" decimals={1} icon={AlertTriangle} iconColor="text-slate-400" />
        <StatCard title="Casos Resolvidos" value={64} icon={CheckCircle2} iconColor="text-emerald-400" />
      </div>

      {/* Gráficos: Turmas e Comparativo Antes/Depois */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfico 1: Presenças e Faltas por Turma */}
        <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white">Percentual de Frequência por Turma</h3>
              <p className="text-xs text-slate-400">Média apurada no bimestre letivo corrente.</p>
            </div>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Meta: 85%
            </span>
          </div>

          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={turmasFreqData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                <XAxis dataKey="turma" stroke="#94A3B8" fontSize={11} />
                <YAxis domain={[70, 100]} stroke="#94A3B8" fontSize={11} unit="%" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0F172A', borderColor: '#334155', borderRadius: '12px' }}
                />
                <Legend wrapperStyle={{ fontSize: '11px', color: '#94A3B8' }} />
                <Bar dataKey="presenca" name="% Presença" fill="#10B981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="faltas" name="% Ausências" fill="#EF4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráfico 2: Impacto Antes x Depois da Intervenção */}
        <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
          <div>
            <h3 className="text-base font-bold text-white">Impacto da Busca Ativa (Antes x Depois)</h3>
            <p className="text-xs text-slate-400">
              Recuperação da frequência dos estudantes após as tratativas do PAEET.
            </p>
          </div>

          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={intervencoesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                <XAxis dataKey="aluno" stroke="#94A3B8" fontSize={11} />
                <YAxis domain={[50, 100]} stroke="#94A3B8" fontSize={11} unit="%" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0F172A', borderColor: '#334155', borderRadius: '12px' }}
                />
                <Legend wrapperStyle={{ fontSize: '11px', color: '#94A3B8' }} />
                <Bar dataKey="antes" name="Frequência Inicial" fill="#F59E0B" radius={[4, 4, 0, 0]} />
                <Bar dataKey="depois" name="Frequência Pós-Ação" fill="#10B981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Histórico das Intervenções de Busca Ativa */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-amber-400" />
              Histórico de Intervenções e Protocolos Realizados
            </h3>
            <p className="text-xs text-slate-400">
              {userRole === 'PUBLIC'
                ? 'Em modo público, os nomes e dados sensíveis dos estudantes são resguardados pela LGPD.'
                : 'Modo Gestão PAEET: Acesso completo aos relatórios confidenciais de atendimento.'}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {buscaAtivaList.map((ba) => (
            <div
              key={ba.id}
              className="p-5 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-3 hover:border-amber-500/30 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                <div className="flex items-center space-x-3">
                  <span className="font-bold text-sm text-white">
                    {userRole === 'PUBLIC' ? ba.nomeEstudante.split(' ')[0] + ' (Anonimizado)' : ba.nomeEstudante}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    {ba.turma}
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-xs">
                  <span className="text-slate-400 font-mono">{ba.data}</span>
                  <span
                    className={`font-semibold px-2 py-0.5 rounded text-[11px] ${
                      ba.status === 'Superado / Regularizado'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    }`}
                  >
                    {ba.status}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 font-semibold block mb-1">Causa / Situação Identificada:</span>
                  <p className="text-slate-300 leading-relaxed">{ba.situacaoIdentificada}</p>
                </div>
                <div>
                  <span className="text-slate-400 font-semibold block mb-1">Estratégia Adotada pelo PAEET:</span>
                  <p className="text-slate-300 leading-relaxed">{ba.estrategiaAdotada}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                <div className="flex items-center space-x-4">
                  <span>
                    Frequência Prévia: <strong className="text-amber-400">{ba.frequenciaAntes}%</strong>
                  </span>
                  {ba.frequenciaDepois && (
                    <span>
                      Frequência Pós: <strong className="text-emerald-400">{ba.frequenciaDepois}%</strong>
                    </span>
                  )}
                </div>
                <span className="italic text-slate-400">Próximo encaminhamento: {ba.proximoEncaminhamento}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal: Adicionar Busca Ativa */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="glass-panel w-full max-w-lg rounded-2xl p-6 border border-slate-700 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-white">Registrar Ação de Busca Ativa</h3>
            <form onSubmit={handleCreateBuscaAtiva} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400 font-medium">Nome do Estudante *</label>
                  <input
                    type="text"
                    required
                    value={formEstudanteNome}
                    onChange={(e) => setFormEstudanteNome(e.target.value)}
                    placeholder="Nome completo do aluno"
                    className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2 border border-slate-700"
                  />
                </div>
                <div>
                  <label className="text-slate-400 font-medium">Turma</label>
                  <select
                    value={formTurma}
                    onChange={(e) => setFormTurma(e.target.value)}
                    className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2 border border-slate-700"
                  >
                    <option value="1ª Série A - Desenv. de Sistemas">1ª Série A - DS</option>
                    <option value="2ª Série A - Desenv. de Sistemas">2ª Série A - DS</option>
                    <option value="3ª Série A - Desenv. de Sistemas">3ª Série A - DS</option>
                    <option value="2ª Série B - Administração">2ª Série B - ADM</option>
                    <option value="2ª Série C - Logística">2ª Série C - LOG</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-slate-400 font-medium">Situação / Causa Identificada *</label>
                <textarea
                  required
                  rows={2}
                  value={formSituacao}
                  onChange={(e) => setFormSituacao(e.target.value)}
                  placeholder="Ex: Ausências recorrentes às sextas-feiras; conciliação com trabalho informal..."
                  className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2 border border-slate-700"
                />
              </div>

              <div>
                <label className="text-slate-400 font-medium">Estratégia Adotada *</label>
                <textarea
                  required
                  rows={2}
                  value={formEstrategia}
                  onChange={(e) => setFormEstrategia(e.target.value)}
                  placeholder="Ex: Contato com responsáveis, encaixe no programa BEEM, monitoria pedagógica..."
                  className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2 border border-slate-700"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400 font-medium">Frequência Prévia (%)</label>
                  <input
                    type="number"
                    value={formFreqAntes}
                    onChange={(e) => setFormFreqAntes(Number(e.target.value))}
                    className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2 border border-slate-700"
                  />
                </div>
                <div>
                  <label className="text-slate-400 font-medium">Status do Caso</label>
                  <select
                    value={formStatus}
                    onChange={(e) => setFormStatus(e.target.value as any)}
                    className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2 border border-slate-700"
                  >
                    <option value="Em Acompanhamento">Em Acompanhamento</option>
                    <option value="Superado / Regularizado">Superado / Regularizado</option>
                    <option value="Em Aberto">Em Aberto</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end space-x-2 pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-semibold"
                >
                  Registrar Caso
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
