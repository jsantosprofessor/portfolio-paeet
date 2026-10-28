import React, { useState } from 'react';
import {
  Plane,
  Compass,
  Calendar,
  MapPin,
  Users,
  CheckCircle2,
  Clock,
  Shield,
  FileCheck2,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Camera,
  AlertTriangle,
  XCircle,
  Search,
  Building2,
  Filter,
  Info,
  FileSpreadsheet,
  HelpCircle,
  ArrowUpRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ProspeccaoVisitaTecnica } from '../../types';

const CAVEX_PHOTO_METADATA: Record<string, { titulo: string; legenda: string; desc: string }> = {
  '/cavex/cavex_fachada_oficial_23_abril_2026.jpg': {
    titulo: 'Comitiva Oficial na Fachada Principal do CAvEx',
    legenda: 'Delegação Escolar na Entrada Principal',
    desc: 'Estudantes da 2ª Série C DS e turmas técnicas Novotec reunidos com professores em frente ao pórtico e monumento histórico do Comando de Aviação do Exército em Taubaté/SP.'
  },
  '/cavex/cavex_auditorio_palestra_institucional.jpg': {
    titulo: 'Recepção Institucional e Palestra no Auditório',
    legenda: 'Auditório de Instrução Militar',
    desc: 'Abertura oficial com oficiais do CAvEx abordando a história da aviação do Exército, missões táticas e carreiras de tecnologia em defesa nacional.'
  },
  '/cavex/cavex_divisao_de_simulacao.jpg': {
    titulo: 'Divisão de Simulação — Centro de Instrução de Aviação (CIAvEx)',
    legenda: 'Simuladores de Voo Sintético',
    desc: 'Demonstração dos simuladores de voo de asa rotativa de alta fidelidade e infraestrutura de redes computacionais para treinamento tático.'
  },
  '/cavex/cavex_hangar_helicoptero_militar.jpg': {
    titulo: 'Hangar de Manutenção — Helicóptero Militar e Aviônica',
    legenda: 'Hangar de Aeronaves e Aviônica',
    desc: 'Imersão técnica com helicópteros militares (Jaguar / Pantera), inspeção detalhada de painéis digitais de bordo, sensores e aviônica de combate.'
  },
  '/cavex/cavex_oficina_turbina_safran.jpg': {
    titulo: 'Oficina de Manutenção de Turbinas e Motores (Safran Turbomeca)',
    legenda: 'Oficina de Propulsão Aeronáutica',
    desc: 'Visita às bancadas de teste e manutenção de turbinas turboeixo de alta tecnologia Safran, integrando controle mecânico e automação.'
  }
};

export const VisitasTecnicas: React.FC = () => {
  const { visitasList, prospeccoesVisitas, setLightboxEvidence } = useApp();
  const [activeTab, setActiveTab] = useState<'cavex' | 'prospeccoes'>('cavex');
  const [filtroCategoria, setFiltroCategoria] = useState<string>('todos');
  const [buscaTermo, setBuscaTermo] = useState<string>('');

  const cavexVisita = visitasList.find(v => v.isEspecialCAVEX) || visitasList[0];

  // Filtros das prospecções
  const prospeccoesFiltradas = (prospeccoesVisitas || []).filter(item => {
    const matchBusca = item.local.toLowerCase().includes(buscaTermo.toLowerCase()) ||
      item.informacoes.toLowerCase().includes(buscaTermo.toLowerCase());
    
    if (!matchBusca) return false;

    if (filtroCategoria === 'todos') return true;
    if (filtroCategoria === 'retorno-sim') return item.retorno === 'Sim';
    if (filtroCategoria === 'canceladas') return item.categoriaStatus === 'Cancelada - Motivo Logístico';
    if (filtroCategoria === 'tratativa') return item.categoriaStatus === 'Em Tratativa';
    if (filtroCategoria === 'aguardando') return item.categoriaStatus === 'Aguardando Retorno';
    if (filtroCategoria === 'indisponivel') return item.categoriaStatus === 'Não Disponível Institucionalmente';
    return true;
  });

  const totalComRetorno = (prospeccoesVisitas || []).filter(p => p.retorno === 'Sim').length;
  const totalCanceladas = (prospeccoesVisitas || []).filter(p => p.categoriaStatus === 'Cancelada - Motivo Logístico').length;

  return (
    <div className="space-y-8 pb-16">
      {/* Header Executivo */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20">
              Imersão Prática & Extensão Pedagógica
            </span>
            <span className="text-xs text-slate-400">Vivência no Setor Produtivo, Tecnológico e de Defesa</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight mt-1">
            Visitas Técnicas & Articulação Institucional
          </h1>
          <p className="text-xs lg:text-sm text-slate-400 max-w-3xl">
            Planejamento pedagógico, prospecção junto a centros de pesquisa e corporações, registros da imersão no CAvEx e controle de tratativas oficiais do PAEET.
          </p>
        </div>

        {/* Alternância de Abas Superiores */}
        <div className="flex items-center gap-2 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800">
          <button
            onClick={() => setActiveTab('cavex')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
              activeTab === 'cavex'
                ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Shield className="w-3.5 h-3.5 text-rose-300" />
            <span>Visita Realizada (CAvEx)</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-rose-950/80 text-rose-200 border border-rose-500/30">
              1 Concluída
            </span>
          </button>

          <button
            onClick={() => setActiveTab('prospeccoes')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
              activeTab === 'prospeccoes'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <FileSpreadsheet className="w-3.5 h-3.5 text-blue-300" />
            <span>Prospecção & Agendamentos</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-blue-950/80 text-blue-200 border border-blue-500/30">
              10 Locais
            </span>
          </button>
        </div>
      </div>

      {/* Cards de Métricas e Indicadores de Articulação */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-panel p-5 rounded-2xl border border-emerald-500/30 bg-emerald-950/10 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">Visitas Executadas</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
          <p className="text-2xl font-black text-white font-mono">1 Visita</p>
          <p className="text-xs text-slate-300 font-medium">CAvEx • 68 estudantes certificados</p>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-blue-500/30 bg-blue-950/10 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">Instituições Prospectadas</span>
            <Building2 className="w-4 h-4 text-blue-400" />
          </div>
          <p className="text-2xl font-black text-white font-mono">10 Locais</p>
          <p className="text-xs text-slate-300 font-medium">Centros tecnológicos, multinacionais e universidades</p>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-cyan-500/30 bg-cyan-950/10 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">Retornos Positivos</span>
            <Sparkles className="w-4 h-4 text-cyan-400" />
          </div>
          <p className="text-2xl font-black text-white font-mono">{totalComRetorno} Instituições</p>
          <p className="text-xs text-slate-300 font-medium">INPE, EMBRAER, IBM e Sto. André</p>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-amber-500/30 bg-amber-950/10 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">Desafios Logísticos</span>
            <AlertTriangle className="w-4 h-4 text-amber-400" />
          </div>
          <p className="text-2xl font-black text-white font-mono">{totalCanceladas} Canceladas</p>
          <p className="text-xs text-slate-300 font-medium">Provão Paulista / EFAPE & Falta de Verba URE</p>
        </div>
      </div>

      {/* ABA 1: VISITA TÉCNICA OFICIAL REALIZADA (CAVEX) */}
      {activeTab === 'cavex' && cavexVisita && (
        <div className="space-y-6">
          <div className="relative rounded-3xl overflow-hidden glass-panel border border-rose-500/30 p-8 lg:p-10 bg-gradient-to-br from-slate-950 via-slate-900 to-rose-950/30 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-rose-500/20 pb-5">
              <div className="space-y-1">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  <Shield className="w-3.5 h-3.5 text-rose-400" />
                  <span>SEÇÃO ESPECIAL DE DESTAQUE: DEFESA NACIONAL & TECNOLOGIA</span>
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight pt-2">
                  Visita Técnica ao CAVEX — Comando de Aviação do Exército
                </h2>
                <p className="text-xs text-rose-200/80 font-medium">
                  Base de Aviação de Taubaté - SP | Alinhamento com Desenvolvimento de Sistemas, Redes e Logística
                </p>
              </div>

              <div className="flex items-center space-x-4 bg-slate-900/80 px-4 py-2.5 rounded-2xl border border-slate-800">
                <div className="text-center">
                  <p className="text-[10px] text-slate-400 uppercase font-semibold">Participantes</p>
                  <p className="text-xl font-bold font-mono text-white">{cavexVisita.totalEstudantes} Alunos</p>
                </div>
                <div className="w-[1px] h-8 bg-slate-800" />
                <div className="text-center">
                  <p className="text-[10px] text-slate-400 uppercase font-semibold">Data da Missão</p>
                  <p className="text-xs font-bold font-mono text-emerald-400">15 de Maio de 2025</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-1.5">
                <span className="text-slate-400 font-semibold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" /> Local da Imersão
                </span>
                <p className="font-bold text-white">Comando de Aviação do Exército (CAVEX)</p>
                <p className="text-slate-400">Taubaté - SP (Forte Ricardo Kirk)</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-1.5">
                <span className="text-slate-400 font-semibold flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-blue-400" /> Turmas Autorizadas
                </span>
                <p className="font-bold text-white">2ª A DS, 3ª A DS e 2ª C Logística</p>
                <p className="text-slate-400">4 Professores e Coordenação PAEET</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-1.5">
                <span className="text-slate-400 font-semibold flex items-center gap-1.5">
                  <FileCheck2 className="w-3.5 h-3.5 text-purple-400" /> Responsável Militar
                </span>
                <p className="font-bold text-white">Capitão Brandão</p>
                <p className="text-slate-400">Engenharia de Manutenção e CIAvEx</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-1.5">
                <span className="text-slate-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Status do Ofício
                </span>
                <p className="font-bold text-emerald-400">Homologado e Concluído</p>
                <p className="text-slate-400">Ofício nº 42/2025 - SEDUC</p>
              </div>
            </div>

            {/* Relatório Pedagógico */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-rose-400 flex items-center gap-2">
                <Info className="w-4 h-4 text-rose-400" />
                Objetivos Pedagógicos & Relação com os Cursos Técnicos
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {cavexVisita.objetivoPedagogico}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-800 pt-3">
                {cavexVisita.relatorioResumo}
              </p>
            </div>

            {/* Competências Desenvolvidas */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Competências Técnicas e Comportamentais Trabalhadas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {cavexVisita.competenciasDesenvolvidas.map((comp, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs space-y-1">
                    <div className="flex items-center space-x-1.5 text-emerald-400 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Competência {idx + 1}</span>
                    </div>
                    <p className="text-slate-200 font-medium">{comp}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Linha do Tempo */}
            <div className="space-y-4 pt-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-400" />
                Linha do Tempo das Tratativas até a Realização
              </h4>

              <div className="relative pl-6 border-l border-slate-800 space-y-4">
                {cavexVisita.linhaDoTempo.map((evt, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-rose-500" />
                    <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="font-semibold text-white">{evt.evento}</span>
                      <span className="font-mono text-slate-400 text-[11px]">{evt.data}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Galeria de Fotos CAVEX */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Camera className="w-4 h-4 text-cyan-400" />
                  Registros Fotográficos Comprobatórios — Visita CAVEX ({cavexVisita.fotos?.length || 0} fotos)
                </h4>
                <span className="text-xs text-slate-400">Clique em qualquer foto para ampliar</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cavexVisita.fotos?.map((fotoUrl, i) => {
                  const info = CAVEX_PHOTO_METADATA[fotoUrl] || {
                    titulo: `Visita Técnica CAVEX — Registro ${i + 1}`,
                    legenda: `Registro Comprobatório #${i + 1}`,
                    desc: `Estudantes dos cursos técnicos do Novotec no Comando de Aviação do Exército em Taubaté.`
                  };
                  const isHighlight = i === 0;

                  return (
                    <div
                      key={i}
                      onClick={() =>
                        setLightboxEvidence({
                          id: `cavex-foto-${i}`,
                          titulo: info.titulo,
                          descricao: info.desc,
                          categoria: 'Visitas Técnicas',
                          tipo: 'Imagem',
                          data: cavexVisita.dataEfetiva || '2025-05-15',
                          url: fotoUrl,
                          responsavel: 'Prof. Jefferson Santos (PAEET)',
                          publicoAutorizado: true
                        })
                      }
                      className={`group relative rounded-xl overflow-hidden cursor-pointer border border-slate-800 bg-slate-900/60 shadow-lg hover:border-cyan-500/50 transition-all duration-300 ${
                        isHighlight ? 'sm:col-span-2 lg:col-span-2 h-72' : 'h-72'
                      }`}
                    >
                      <img
                        src={fotoUrl}
                        alt={info.titulo}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-4">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                            {info.legenda}
                          </span>
                          <span className="text-[10px] text-slate-300 flex items-center gap-1 font-mono">
                            <Camera className="w-3 h-3 text-cyan-400" /> #{i + 1}
                          </span>
                        </div>
                        <h5 className="text-xs sm:text-sm font-bold text-white drop-shadow">
                          {info.titulo}
                        </h5>
                        <p className="text-[11px] text-slate-300 line-clamp-2 mt-0.5 leading-relaxed">
                          {info.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ABA 2: PAINEL DE PROSPECÇÃO, TRATATIVAS E AGENDAMENTOS (Planilha Oficial) */}
      {activeTab === 'prospeccoes' && (
        <div className="space-y-6">
          {/* Banner Institucional da Planilha */}
          <div className="glass-panel rounded-2xl p-6 border border-blue-500/30 bg-gradient-to-r from-blue-950/30 via-slate-900 to-indigo-950/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  Transparência de Gestão PAEET
                </span>
                <span className="text-xs text-slate-400">Controle Sistemático de Prospecção</span>
              </div>
              <h2 className="text-xl font-bold text-white">
                Mapeamento de Locais, Retornos e Tratativas de Agendamento
              </h2>
              <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                Registro detalhado de todos os 10 contatos realizados com polos de inovação, indústrias e universidades, evidenciando as datas de contato, confirmações obtidas e as justificativas técnicas e institucionais que impactaram cada agendamento.
              </p>
            </div>

            {/* Botão de Ver Evidência da Planilha */}
            <button
              onClick={() =>
                setLightboxEvidence({
                  id: 'planilha-visitas-evidencia',
                  titulo: 'Planilha Oficial de Controle de Visitas Técnicas — PAEET',
                  descricao: 'Mapeamento completo com locais contatados (INPE, IBM, Univap, EMBRAER, CEBRACE, HITT, TOTVS, Sto. André, CENAPAD/Unicamp, CI&T), datas, retornos e justificativas.',
                  categoria: 'Visitas Técnicas',
                  tipo: 'Documento',
                  data: '2026-10-27',
                  url: '/visitas/planilha_tratativas_visitas_tecnicas.png',
                  responsavel: 'Prof. Jefferson Santos (PAEET)',
                  publicoAutorizado: true
                })
              }
              className="px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center space-x-2 transition-all shadow-lg shadow-blue-600/30 border border-blue-400/30 whitespace-nowrap"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Ver Planilha Original (Evidência)</span>
            </button>
          </div>

          {/* Filtros e Barra de Busca */}
          <div className="glass-panel p-4 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { id: 'todos', label: 'Todas as Tratativas (10)' },
                { id: 'retorno-sim', label: 'Com Retorno (4)' },
                { id: 'canceladas', label: 'Canceladas por Logística (2)' },
                { id: 'tratativa', label: 'Em Tratativa (2)' },
                { id: 'indisponivel', label: 'Não Disponíveis (2)' },
                { id: 'aguardando', label: 'Aguardando Retorno (4)' }
              ].map(filtro => (
                <button
                  key={filtro.id}
                  onClick={() => setFiltroCategoria(filtro.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    filtroCategoria === filtro.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {filtro.label}
                </button>
              ))}
            </div>

            <div className="relative min-w-[220px]">
              <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar local ou informação..."
                value={buscaTermo}
                onChange={e => setBuscaTermo(e.target.value)}
                className="w-full bg-slate-950/80 border border-slate-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Tabela Interativa de Tratativas */}
          <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-900/90 text-slate-400 border-b border-slate-800 uppercase font-semibold text-[11px] tracking-wider">
                    <th className="py-3.5 px-4">Local / Instituição</th>
                    <th className="py-3.5 px-3 text-center">Data Contato</th>
                    <th className="py-3.5 px-3 text-center">Retorno</th>
                    <th className="py-3.5 px-3 text-center">Agendamento</th>
                    <th className="py-3.5 px-4">Informações & Justificativa do PAEET</th>
                    <th className="py-3.5 px-4 text-center">Status / Encaminhamento</th>
                    <th className="py-3.5 px-3 text-center">Link Oficial</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {prospeccoesFiltradas.map((item: ProspeccaoVisitaTecnica) => {
                    const hasLink = Boolean(item.link);
                    const isCancelada = item.categoriaStatus === 'Cancelada - Motivo Logístico';
                    const isNegativo = item.categoriaStatus === 'Não Disponível Institucionalmente';
                    const isTratativa = item.categoriaStatus === 'Em Tratativa';

                    return (
                      <tr
                        key={item.id}
                        className={`hover:bg-slate-900/50 transition-colors ${
                          isCancelada ? 'bg-amber-950/5' : ''
                        }`}
                      >
                        {/* Local */}
                        <td className="py-4 px-4 font-bold text-white">
                          <div className="flex items-center space-x-2">
                            <div className="w-7 h-7 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shrink-0">
                              <Building2 className="w-3.5 h-3.5 text-blue-400" />
                            </div>
                            <span>{item.local}</span>
                          </div>
                        </td>

                        {/* Data Contato */}
                        <td className="py-4 px-3 text-center font-mono text-slate-300">
                          {item.dataContato || '—'}
                        </td>

                        {/* Retorno */}
                        <td className="py-4 px-3 text-center">
                          {item.retorno === 'Sim' ? (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                              Sim
                            </span>
                          ) : item.retorno === 'Em Análise' ? (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                              Em Análise
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-slate-400 border border-slate-700">
                              Não
                            </span>
                          )}
                        </td>

                        {/* Agendamento */}
                        <td className="py-4 px-3 text-center">
                          {item.agendamento ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                              {item.agendamento}
                            </span>
                          ) : (
                            <span className="text-slate-500 font-mono">—</span>
                          )}
                        </td>

                        {/* Informações */}
                        <td className="py-4 px-4 text-slate-300 leading-relaxed max-w-md">
                          {item.informacoes ? (
                            <div className="space-y-1">
                              <p className="text-xs text-slate-200">{item.informacoes}</p>
                              {isCancelada && (
                                <p className="text-[10px] text-amber-400/90 font-semibold flex items-center gap-1">
                                  <AlertTriangle className="w-3 h-3 shrink-0" />
                                  Imprevisto de calendário ou logística externa à escola
                                </p>
                              )}
                            </div>
                          ) : (
                            <span className="text-slate-500 italic">Em prospecção / aguardando retorno</span>
                          )}
                        </td>

                        {/* Status / Categoria */}
                        <td className="py-4 px-4 text-center">
                          <span
                            className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold border ${
                              isCancelada
                                ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                                : isNegativo
                                ? 'bg-slate-800 text-slate-300 border-slate-700'
                                : isTratativa
                                ? 'bg-blue-500/10 text-blue-300 border-blue-500/30'
                                : 'bg-slate-900 text-slate-400 border-slate-800'
                            }`}
                          >
                            {item.categoriaStatus}
                          </span>
                        </td>

                        {/* Link Oficial */}
                        <td className="py-4 px-3 text-center">
                          {hasLink ? (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white transition-all border border-blue-500/30 text-[11px] font-semibold"
                              title="Acessar página oficial da instituição"
                            >
                              <span>Acessar</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </a>
                          ) : (
                            <span className="text-slate-600 font-mono text-[11px]">—</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {prospeccoesFiltradas.length === 0 && (
              <div className="p-8 text-center text-slate-400 text-xs">
                Nenhuma tratativa encontrada com os filtros selecionados.
              </div>
            )}
          </div>

          {/* Destaque Explicativo das Condições Logísticas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-2">
              <div className="flex items-center space-x-2 text-amber-400">
                <AlertTriangle className="w-4 h-4" />
                <h4 className="text-xs font-bold uppercase tracking-wider">
                  Caso INPE (24/09) — Conflito de Calendário Oficial SEDUC
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                A visita ao INPE foi formalmente agendada para 24/09, porém o calendário escolar estadual impôs a realização simultânea do <strong>Provão Paulista</strong> e uma convocação presencial do professor PAEET na <strong>EFAPE em São Paulo</strong>, inviabilizando o deslocamento dos alunos com segurança pedagógica.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-2">
              <div className="flex items-center space-x-2 text-rose-400">
                <XCircle className="w-4 h-4" />
                <h4 className="text-xs font-bold uppercase tracking-wider">
                  Caso PqTec Santo André (03/11) — Restrição Orçamentária de Ônibus
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Com data confirmada para 03/11 e homologação do formulário, o deslocamento precisou ser cancelado pela indisponibilidade de verba para contratação de transporte intermunicipal pela <strong>Unidade Regional de Ensino (URE / Diretoria)</strong> no período.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
