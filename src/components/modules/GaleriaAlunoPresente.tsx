import React, { useState } from 'react';
import {
  FileText,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  Calendar,
  Users,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Search,
  School,
  BarChart2,
  Eye,
  Info
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine,
  Cell
} from 'recharts';
import {
  evidenciasAlunoPresente,
  serieHistoricaCompleta38Semanas,
  alunosFrequenciaOficial,
  metadadosTurmaSED,
  EvidenciaAlunoPresente
} from '../../data/alunoPresenteData';

export const GaleriaAlunoPresente: React.FC = () => {
  const [modalEvidencia, setModalEvidencia] = useState<EvidenciaAlunoPresente | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [buscaAluno, setBuscaAluno] = useState('');
  const [filtroStatus, setFiltroStatus] = useState<'todos' | 'alerta' | 'regular'>('todos');
  const [abaAtiva, setAbaAtiva] = useState<'comprovantes' | 'serieHistorica' | 'relatorioNominal'>('comprovantes');

  const abrirModal = (evidencia: EvidenciaAlunoPresente) => {
    const idx = evidenciasAlunoPresente.findIndex(e => e.id === evidencia.id);
    setCurrentIndex(idx >= 0 ? idx : 0);
    setModalEvidencia(evidencia);
  };

  const proximaImagem = () => {
    const nextIdx = (currentIndex + 1) % evidenciasAlunoPresente.length;
    setCurrentIndex(nextIdx);
    setModalEvidencia(evidenciasAlunoPresente[nextIdx]);
  };

  const imagemAnterior = () => {
    const prevIdx = (currentIndex - 1 + evidenciasAlunoPresente.length) % evidenciasAlunoPresente.length;
    setCurrentIndex(prevIdx);
    setModalEvidencia(evidenciasAlunoPresente[prevIdx]);
  };

  const alunosFiltrados = alunosFrequenciaOficial.filter(aluno => {
    const matchesBusca = aluno.nome.toLowerCase().includes(buscaAluno.toLowerCase()) ||
      `${aluno.ra}-${aluno.dig}`.includes(buscaAluno);
    if (!matchesBusca) return false;
    if (filtroStatus === 'alerta') return aluno.presencaAnual < 85;
    if (filtroStatus === 'regular') return aluno.presencaAnual >= 85;
    return true;
  });

  const totalAlunos = alunosFrequenciaOficial.length;
  const totalRegular = alunosFrequenciaOficial.filter(a => a.presencaAnual >= 85).length;
  const totalAlerta = alunosFrequenciaOficial.filter(a => a.presencaAnual < 85).length;

  return (
    <div className="space-y-6">
      {/* Banner Oficial SEDUC-SP / FDE */}
      <div className="rounded-2xl p-6 bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950/40 border border-blue-500/30 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                SEDUC-SP • FDE
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Dados Oficiais Homologados
              </span>
              <span className="text-xs text-slate-400">
                Plataforma Oficial: <strong>Aluno Presente (Ano Letivo 2026)</strong>
              </span>
            </div>

            <h2 className="text-xl lg:text-2xl font-black text-white tracking-tight mt-2 flex items-center gap-2">
              <School className="w-6 h-6 text-blue-400" />
              {metadadosTurmaSED.escola}
            </h2>
            <p className="text-xs lg:text-sm text-slate-300 mt-1">
              Turma: <strong className="text-white">{metadadosTurmaSED.curso} — {metadadosTurmaSED.turma}</strong>
              <span className="mx-2 text-slate-600">|</span>
              Id Turma: <span className="font-mono text-cyan-300">{metadadosTurmaSED.idTurma}</span>
              <span className="mx-2 text-slate-600">|</span>
              Id Classe: <span className="font-mono text-cyan-300">{metadadosTurmaSED.idClasse}</span>
              <span className="mx-2 text-slate-600">|</span>
              Supervisão: <strong className="text-slate-200">{metadadosTurmaSED.supervisora}</strong>
            </p>
          </div>

          {/* Mini-Indicadores Oficiais da Turma */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lg:w-auto">
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Matrículas Ativas</span>
              <span className="text-xl font-black text-white">{metadadosTurmaSED.matriculasAtivas}</span>
              <span className="text-[10px] text-emerald-400 block font-semibold">100% da turma</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-emerald-500/30 text-center">
              <span className="text-[10px] uppercase font-bold text-emerald-400 block">% Presença Turma</span>
              <span className="text-xl font-black text-emerald-300">{metadadosTurmaSED.presencaTurma}%</span>
              <span className="text-[10px] text-emerald-400 block font-semibold">{metadadosTurmaSED.evolucaoPresenca}</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Aulas Dadas</span>
              <span className="text-xl font-black text-cyan-300">{metadadosTurmaSED.percentualAulasDadas}%</span>
              <span className="text-[10px] text-cyan-400 block font-semibold">{metadadosTurmaSED.aulasDadas} de {metadadosTurmaSED.aulasPrevistas}</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Evolução Aulas</span>
              <span className="text-xl font-black text-blue-300">{metadadosTurmaSED.evolucaoAulas}</span>
              <span className="text-[10px] text-slate-400 block">Integral 9H</span>
            </div>
          </div>
        </div>

        {/* Abas de Navegação */}
        <div className="flex flex-wrap items-center gap-2 mt-6 pt-4 border-t border-slate-800">
          <button
            onClick={() => setAbaAtiva('comprovantes')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              abaAtiva === 'comprovantes'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Comprovantes Oficiais SEDUC (5 Imagens)</span>
          </button>

          <button
            onClick={() => setAbaAtiva('serieHistorica')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              abaAtiva === 'serieHistorica'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <BarChart2 className="w-4 h-4" />
            <span>Série Histórica Semanal (38 Semanas)</span>
          </button>

          <button
            onClick={() => setAbaAtiva('relatorioNominal')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              abaAtiva === 'relatorioNominal'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Relação Nominal dos 27 Estudantes</span>
            <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] bg-blue-900/60 text-blue-200">
              {alunosFrequenciaOficial.length}
            </span>
          </button>
        </div>
      </div>

      {/* ABA 1: COMPROVANTES EM CARDS VISUAIS */}
      {abaAtiva === 'comprovantes' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Evidências e Capturas Oficiais — Plataforma Aluno Presente
              </h3>
              <p className="text-xs text-slate-400">
                Clique sobre qualquer documento para ampliar em alta definição, verificar detalhes e navegar entre as telas oficiais.
              </p>
            </div>
            <span className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 font-semibold border border-slate-700">
              5 Documentos Homologados
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {evidenciasAlunoPresente.map((evidencia, idx) => (
              <div
                key={evidencia.id}
                onClick={() => abrirModal(evidencia)}
                className="group glass-panel rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-300 cursor-pointer flex flex-col hover:shadow-2xl hover:shadow-blue-950/40"
              >
                {/* Preview da Imagem com Overlay */}
                <div className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden border-b border-slate-800/80">
                  <img
                    src={evidencia.imagemUrl}
                    alt={evidencia.titulo}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  
                  {/* Badge de Categoria */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-900/90 text-blue-300 border border-blue-500/30 backdrop-blur-md">
                      {evidencia.categoria}
                    </span>
                    {evidencia.semanas && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                        {evidencia.semanas}
                      </span>
                    )}
                  </div>

                  {/* Botão de Zoom Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="px-4 py-2 rounded-xl bg-blue-600/90 text-white text-xs font-bold flex items-center gap-2 shadow-2xl backdrop-blur-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Maximize2 className="w-4 h-4" />
                      <span>Ver em Alta Resolução</span>
                    </div>
                  </div>

                  <span className="absolute bottom-2 right-3 text-[10px] font-mono text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded">
                    Doc #{idx + 1}
                  </span>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="font-extrabold text-sm text-white group-hover:text-blue-300 transition-colors">
                      {evidencia.titulo}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {evidencia.subtitulo}
                    </p>
                    <p className="text-xs text-slate-300 mt-2.5 leading-relaxed line-clamp-3">
                      {evidencia.descricao}
                    </p>
                  </div>

                  {/* Destaques Técnicos */}
                  <div className="pt-3 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-[11px]">
                    {evidencia.destaques.slice(0, 4).map((destaque, dIdx) => (
                      <div
                        key={dIdx}
                        className={`p-2 rounded-lg ${
                          destaque.destaque
                            ? 'bg-blue-500/10 border border-blue-500/20 text-blue-200'
                            : 'bg-slate-900/60 border border-slate-800 text-slate-300'
                        }`}
                      >
                        <span className="block text-[9px] uppercase font-bold text-slate-400">
                          {destaque.label}
                        </span>
                        <strong className="text-xs font-black text-white">
                          {destaque.valor}
                        </strong>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs text-blue-400 font-semibold group-hover:underline">
                    <span>Inspecionar documento completo</span>
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ABA 2: SÉRIE HISTÓRICA COMPLETA DE 38 SEMANAS */}
      {abaAtiva === 'serieHistorica' && (
        <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                Série Histórica Completa: Índice de Presença Semanal (Ano Letivo 2026)
              </h3>
              <p className="text-xs text-slate-400">
                Acompanhamento semana a semana com marcos pedagógicos oficiais (Prova Paulista, SARESP, OMASP e Bimestres).
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                Meta Estadual: 85%
              </span>
              <span className="text-xs px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold">
                Semana 38: 91,4%
              </span>
            </div>
          </div>

          <div className="h-80 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={serieHistoricaCompleta38Semanas} margin={{ top: 20, right: 10, left: -10, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                <XAxis
                  dataKey="numero"
                  stroke="#94A3B8"
                  fontSize={10}
                  tickFormatter={(val) => `Sem ${val}`}
                  angle={-45}
                  textAnchor="end"
                />
                <YAxis domain={[50, 105]} stroke="#94A3B8" fontSize={11} unit="%" />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="p-3 bg-slate-900 border border-slate-700 rounded-xl shadow-xl text-xs space-y-1">
                          <p className="font-bold text-white">Semana {data.numero} ({data.periodo})</p>
                          {data.evento && (
                            <p className="text-amber-400 font-semibold">Marco: {data.evento}</p>
                          )}
                          <p className="text-emerald-400 font-black text-sm">
                            Presença: {data.presenca}%
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <ReferenceLine y={85} stroke="#F59E0B" strokeDasharray="4 4" label={{ value: 'Meta: 85%', fill: '#F59E0B', fontSize: 11 }} />
                <Bar dataKey="presenca" radius={[4, 4, 0, 0]}>
                  {serieHistoricaCompleta38Semanas.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.presenca >= 90 ? '#10B981' : entry.presenca >= 85 ? '#F59E0B' : '#EF4444'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Legenda de Cores do Aluno Presente */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 border-t border-slate-800 text-xs">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-slate-300">Maior ou igual a 90% (Excelente)</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="text-slate-300">Entre 85% e 89,9% (Meta Atingida)</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="text-slate-300">Menor que 85% (Foco de Busca Ativa)</span>
            </div>
          </div>
        </div>
      )}

      {/* ABA 3: RELATÓRIO NOMINAL DOS 27 ALUNOS (ALUNO PRESENTE) */}
      {abaAtiva === 'relatorioNominal' && (
        <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-400" />
                Listagem Nominal Oficial da Turma — Aluno Presente / SEDUC-SP
              </h3>
              <p className="text-xs text-slate-400">
                2ª Série C DS • Relação com RA, Dígito, Assiduidade Anual, Semana Atual e Semana Anterior.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Filtrar por nome ou RA..."
                  value={buscaAluno}
                  onChange={(e) => setBuscaAluno(e.target.value)}
                  className="pl-8 pr-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex rounded-lg bg-slate-900 p-0.5 border border-slate-800 text-xs">
                <button
                  onClick={() => setFiltroStatus('todos')}
                  className={`px-2.5 py-1 rounded-md font-semibold ${
                    filtroStatus === 'todos' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Todos ({totalAlunos})
                </button>
                <button
                  onClick={() => setFiltroStatus('regular')}
                  className={`px-2.5 py-1 rounded-md font-semibold ${
                    filtroStatus === 'regular' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  ≥ 85% ({totalRegular})
                </button>
                <button
                  onClick={() => setFiltroStatus('alerta')}
                  className={`px-2.5 py-1 rounded-md font-semibold ${
                    filtroStatus === 'alerta' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  &lt; 85% ({totalAlerta})
                </button>
              </div>
            </div>
          </div>

          {/* Tabela Oficial */}
          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950/80 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
                <tr>
                  <th className="p-3">RA</th>
                  <th className="p-3">Dígito</th>
                  <th className="p-3">Aluno(a)</th>
                  <th className="p-3 text-center">(%) Presença Anual</th>
                  <th className="p-3 text-center">(%) Semana Atual</th>
                  <th className="p-3 text-center">(%) Semana Anterior</th>
                  <th className="p-3 text-center">Status / Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 font-mono text-slate-200">
                {alunosFiltrados.map((aluno) => {
                  const isAlerta = aluno.presencaAnual < 85;
                  return (
                    <tr
                      key={aluno.ra}
                      className={`hover:bg-slate-800/50 transition-colors ${
                        isAlerta ? 'bg-amber-500/5' : ''
                      }`}
                    >
                      <td className="p-3 text-cyan-300 font-semibold">{aluno.ra}</td>
                      <td className="p-3 text-slate-400">{aluno.dig}</td>
                      <td className="p-3 font-sans font-bold text-white tracking-wide">
                        {aluno.nome}
                      </td>
                      <td className="p-3 text-center">
                        <span
                          className={`px-2 py-0.5 rounded font-bold ${
                            aluno.presencaAnual >= 90
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                              : aluno.presencaAnual >= 85
                              ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                              : 'bg-red-500/10 text-red-400 border border-red-500/20'
                          }`}
                        >
                          {aluno.presencaAnual.toFixed(1)}%
                        </span>
                      </td>
                      <td className="p-3 text-center">
                        <span className="text-slate-300 font-semibold">
                          {aluno.presencaSemanaAtual.toFixed(1)}%
                        </span>
                      </td>
                      <td className="p-3 text-center">
                        <span className="text-slate-400">
                          {aluno.presencaSemanaAnterior.toFixed(1)}%
                        </span>
                      </td>
                      <td className="p-3 text-center font-sans">
                        {isAlerta ? (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                            Acompanhamento PAEET
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400">
                            Meta Regular ✓
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* MODAL / LIGHTBOX DE VISUALIZAÇÃO EM TELA CHEIA */}
      {modalEvidencia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-6xl max-h-[95vh] rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl flex flex-col overflow-hidden">
            {/* Header do Modal */}
            <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between gap-4 bg-slate-950/80">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                    {modalEvidencia.titulo}
                    <span className="text-xs font-normal text-slate-400 font-mono">
                      ({currentIndex + 1} de {evidenciasAlunoPresente.length})
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    {modalEvidencia.subtitulo} • Extração Oficial SEDUC-SP
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={modalEvidencia.imagemUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  title="Abrir imagem original em nova guia"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setModalEvidencia(null)}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-red-500/20 hover:text-red-400 text-slate-400 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Imagem em Destaque com Botões de Navegação */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-auto p-2 sm:p-4 min-h-[300px]">
              <img
                src={modalEvidencia.imagemUrl}
                alt={modalEvidencia.titulo}
                className="max-h-[65vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
              />

              {/* Botões Próximo / Anterior */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  imagemAnterior();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white transition-all shadow-xl backdrop-blur-md"
                title="Imagem anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  proximaImagem();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white transition-all shadow-xl backdrop-blur-md"
                title="Próxima imagem"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Rodapé com Destaques e Descrição */}
            <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1 max-w-2xl">
                <span className="text-[10px] uppercase font-bold text-blue-400 tracking-wider">
                  Comprovação Documental & Metodologia
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {modalEvidencia.descricao}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {modalEvidencia.destaques.map((destaque, dIdx) => (
                  <div
                    key={dIdx}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-center"
                  >
                    <span className="block text-[9px] text-slate-400 font-semibold uppercase">
                      {destaque.label}
                    </span>
                    <span className="text-xs font-black text-white">
                      {destaque.valor}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
