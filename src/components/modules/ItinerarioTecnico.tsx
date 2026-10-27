import React, { useState } from 'react';
import {
  Compass,
  Users,
  BookOpen,
  HelpCircle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Monitor,
  Building2,
  Heart,
  Pill,
  ZoomIn,
  X,
  BarChart3,
  GraduationCap
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { StatCard } from '../common/StatCard';

const ITINERARIO_FOTOS = [
  {
    src: '/itinerario_fotos/visita_sala_01.png',
    caption: '1ª Série A — Apresentação do Curso Técnico em DS pelo PAEET e alunos veteranos'
  },
  {
    src: '/itinerario_fotos/visita_sala_02.png',
    caption: '1ª Série B — Roda de conversa com alunos da 2ª Série respondendo dúvidas'
  },
  {
    src: '/itinerario_fotos/visita_sala_03.png',
    caption: '1ª Série C — Equipe de estudantes-embaixadores do Técnico em DS'
  },
  {
    src: '/itinerario_fotos/visita_sala_04.png',
    caption: '1ª Série D — Interação direta: alunos veteranos com calouros do 1º ano'
  }
];

const DISTRIBUICAO = [
  { label: 'Técnico em Administração', valor: 54, total: 98, cor: 'bg-blue-500', corBarra: 'from-blue-600 to-blue-400', icon: Building2, cor_icon: 'text-blue-400' },
  { label: 'Técnico em Desenvolvimento de Sistemas', valor: 40, total: 98, cor: 'bg-cyan-500', corBarra: 'from-cyan-600 to-cyan-400', icon: Monitor, cor_icon: 'text-cyan-400' },
  { label: 'Técnico em Farmácia', valor: 2, total: 98, cor: 'bg-emerald-500', corBarra: 'from-emerald-600 to-emerald-400', icon: Pill, cor_icon: 'text-emerald-400' },
  { label: 'Técnico em Enfermagem', valor: 1, total: 98, cor: 'bg-rose-500', corBarra: 'from-rose-600 to-rose-400', icon: Heart, cor_icon: 'text-rose-400' },
  { label: 'Técnico em Agronegócio', valor: 1, total: 98, cor: 'bg-amber-500', corBarra: 'from-amber-600 to-amber-400', icon: Layers, cor_icon: 'text-amber-400' },
];

const TURMAS_VISITADAS = [
  {
    turma: '1ª Série A',
    data: '27/10/2026',
    estudantes: 30,
    fotoIdx: 0,
    duvidas: [
      'O curso de DS tem muita matemática?',
      'Dá para fazer estágio enquanto estuda?',
      'O certificado técnico vale para a faculdade?',
      'Como funciona o horário do PEI com o técnico?'
    ]
  },
  {
    turma: '1ª Série B',
    data: '27/10/2026',
    estudantes: 28,
    fotoIdx: 1,
    duvidas: [
      'Precisa ter computador em casa para o curso?',
      'Vocês ganham bolsa estágio?',
      'Qual é a diferença entre Administração e DS?',
      'Os projetos são reais ou só exercícios?'
    ]
  },
  {
    turma: '1ª Série C',
    data: '27/10/2026',
    estudantes: 25,
    fotoIdx: 2,
    duvidas: [
      'Dá para trabalhar na área de jogos com DS?',
      'O curso tem laboratório?',
      'Como é a seleção de vagas de estágio?',
      'Quais empresas contratam quem faz o curso?'
    ]
  },
  {
    turma: '1ª Série D',
    data: '27/10/2026',
    estudantes: 27,
    fotoIdx: 3,
    duvidas: [
      'Tem muito conteúdo de programação?',
      'Posso trocar de curso depois?',
      'O PAEET acompanha a turma durante os 3 anos?',
      'Vocês constroem aplicativos de verdade?'
    ]
  }
];

export const ItinerarioTecnico: React.FC = () => {
  const { acoesItinerario } = useApp();
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxCaption, setLightboxCaption] = useState<string>('');

  const openLightbox = (src: string, caption: string) => {
    setLightboxSrc(src);
    setLightboxCaption(caption);
  };

  return (
    <div className="space-y-8 pb-16">

      {/* Header */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              Novotec Integrado • 1ºs Anos EM
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
              Ano Letivo 2026
            </span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight mt-2">
            Escolha do Itinerário Formativo Técnico
          </h1>
          <p className="text-xs lg:text-sm text-slate-400 mt-1 max-w-2xl">
            O PAEET de Desenvolvimento de Sistemas visitou presencialmente as 4 turmas de 1ª Série (A, B, C e D) 
            levando alunos veteranos para responder dúvidas, apresentar projetos reais e inspirar a escolha consciente do itinerário técnico.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <div className="text-center px-4 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
            <div className="text-2xl font-black text-cyan-400">98</div>
            <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wide">alunos escolheram<br/>itinerário técnico</div>
          </div>
          <div className="text-center px-4 py-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
            <div className="text-2xl font-black text-blue-400">4</div>
            <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wide">salas<br/>visitadas</div>
          </div>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="Salas Visitadas" value={4} icon={Layers} iconColor="text-blue-400" />
        <StatCard title="Alunos Alcançados" value={110} icon={Users} iconColor="text-cyan-400" />
        <StatCard title="Escolheram Itinerário Técnico" value={98} icon={GraduationCap} iconColor="text-emerald-400" />
        <StatCard
          title="Taxa de Adesão"
          value={89.1}
          suffix="%"
          decimals={1}
          icon={CheckCircle2}
          iconColor="text-emerald-400"
          trend={{ value: 'Alta adesão', positive: true }}
        />
      </div>

      {/* Distribuição dos Itinerários + Dashboard CONVIVA */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Distribuição */}
        <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-5">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-cyan-400" />
            <h3 className="text-base font-bold text-white">Distribuição por Itinerário Técnico</h3>
          </div>
          <p className="text-xs text-slate-400">Total de <span className="text-cyan-400 font-bold">98 alunos</span> da E.E. Monsenhor João Alves — Dados via CONVIVA / SEDUC-SP</p>

          <div className="space-y-4">
            {DISTRIBUICAO.map((item) => {
              const pct = ((item.valor / item.total) * 100).toFixed(1);
              const Icon = item.icon;
              return (
                <div key={item.label} className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className={`w-3.5 h-3.5 ${item.cor_icon}`} />
                      <span className="text-xs text-slate-300 font-medium">{item.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white">{item.valor}</span>
                      <span className="text-[10px] text-slate-500">({pct}%)</span>
                    </div>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${item.corBarra} transition-all duration-700`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-3 text-center">
            <div className="rounded-xl bg-cyan-500/10 border border-cyan-500/20 p-3">
              <div className="text-xl font-black text-cyan-400">40</div>
              <div className="text-[10px] text-slate-400 font-semibold mt-0.5">Desenvolvimento<br/>de Sistemas</div>
            </div>
            <div className="rounded-xl bg-blue-500/10 border border-blue-500/20 p-3">
              <div className="text-xl font-black text-blue-400">54</div>
              <div className="text-[10px] text-slate-400 font-semibold mt-0.5">Técnico em<br/>Administração</div>
            </div>
          </div>
        </div>

        {/* Dashboard CONVIVA */}
        <div className="glass-panel rounded-2xl p-4 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <h3 className="text-base font-bold text-white">Evidência — Painel CONVIVA / SEDUC-SP</h3>
          </div>
          <p className="text-xs text-slate-400">
            Dados oficiais da plataforma estadual CONVIVA confirmando a distribuição de escolhas dos 117 alunos elegíveis, com 93,16% já tendo registrado o itinerário.
          </p>
          <div
            className="relative group cursor-zoom-in rounded-xl overflow-hidden border border-slate-700"
            onClick={() => openLightbox('/itinerario_fotos/conviva_itinerario_dashboard.png', 'Dashboard CONVIVA — Distribuição oficial dos Itinerários Técnicos')}
          >
            <img
              src="/itinerario_fotos/conviva_itinerario_dashboard.png"
              alt="Dashboard CONVIVA com distribuição dos itinerários técnicos"
              className="w-full object-cover rounded-xl group-hover:scale-[1.02] transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="rounded-lg bg-slate-900 p-2 border border-slate-800">
              <div className="text-sm font-bold text-white">117</div>
              <div className="text-[10px] text-slate-400">elegíveis</div>
            </div>
            <div className="rounded-lg bg-emerald-500/10 p-2 border border-emerald-500/20">
              <div className="text-sm font-bold text-emerald-400">93,16%</div>
              <div className="text-[10px] text-slate-400">escolheram</div>
            </div>
            <div className="rounded-lg bg-amber-500/10 p-2 border border-amber-500/20">
              <div className="text-sm font-bold text-amber-400">6,84%</div>
              <div className="text-[10px] text-slate-400">pendentes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Narrativa estratégica */}
      <div className="glass-panel rounded-2xl p-6 lg:p-8 border border-cyan-500/20 bg-cyan-500/5 space-y-5">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/15 flex items-center justify-center shrink-0 mt-1">
            <Compass className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Orientação Vocacional com Metodologia Peer-to-Peer</h3>
            <p className="text-xs text-slate-400 mt-1">Como o PAEET conduziu as visitas de escolha consciente de itinerário</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-4 space-y-2">
            <div className="text-amber-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-amber-500/15 flex items-center justify-center text-[10px] font-black">!</span>
              Desafio
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              Muitos estudantes do 1º ano desconheciam as possibilidades reais do ensino técnico estadual e tinham dúvidas 
              sobre conciliação com o PEI de 9 horas e requisitos de mercado.
            </p>
          </div>
          <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-4 space-y-2">
            <div className="text-blue-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-blue-500/15 flex items-center justify-center text-[10px] font-black">→</span>
              Estratégia
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              O PAEET Jefferson Santos organizou visitas presenciais às 4 turmas de 1ª Série (A, B, C e D), levando 
              alunos veteranos do Técnico em DS para falar sobre o curso de forma horizontal e autêntica.
            </p>
          </div>
          <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-4 space-y-2">
            <div className="text-emerald-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center text-[10px] font-black">✓</span>
              Resultado
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              98 dos 117 alunos elegíveis escolheram um itinerário técnico — <strong>taxa de 93,16%</strong>. 
              40 escolheram Desenvolvimento de Sistemas e 54 Administração.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-4">
          <p className="text-xs text-slate-400 font-semibold mb-2 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
            Ações Realizadas nas Salas:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5 text-xs text-slate-300">
            {[
              'Apresentação do PAEET e equipe de estudantes-embaixadores do DS',
              'Demonstração de projetos reais desenvolvidos pelos veteranos',
              'Esclarecimento sobre a Bolsa Estágio BEEM e oportunidades de mercado',
              'Roda de perguntas e respostas direta entre calouros e veteranos',
              'Apresentação da grade curricular e laboratórios do Novotec Integrado',
              'Distribuição de informações sobre prazo e processo de escolha via CONVIVA'
            ].map((acao, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <ArrowRight className="w-3 h-3 text-cyan-400 mt-0.5 shrink-0" />
                {acao}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Galeria de Fotos das Visitas */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-cyan-400" />
          Galeria de Evidências — Visitas às Salas de 1ª Série
        </h3>
        <p className="text-xs text-slate-400">
          Registros fotográficos das visitas realizadas pelo PAEET Jefferson Santos com alunos veteranos da 2ª Série C DS às quatro turmas de 1ª Série. Clique para ampliar.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TURMAS_VISITADAS.map((turma, idx) => (
            <div key={idx} className="glass-panel rounded-2xl border border-slate-800 overflow-hidden">
              {/* Foto */}
              <div
                className="relative group cursor-zoom-in"
                onClick={() => openLightbox(ITINERARIO_FOTOS[turma.fotoIdx].src, ITINERARIO_FOTOS[turma.fotoIdx].caption)}
              >
                <img
                  src={ITINERARIO_FOTOS[turma.fotoIdx].src}
                  alt={ITINERARIO_FOTOS[turma.fotoIdx].caption}
                  className="w-full h-52 object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                  <ZoomIn className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                </div>
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-white bg-black/50 backdrop-blur-sm px-2 py-1 rounded-lg">
                    {turma.turma}
                  </span>
                  <span className="text-[10px] text-slate-300 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-lg font-mono">
                    {turma.data}
                  </span>
                </div>
              </div>

              {/* Detalhes */}
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-400 italic leading-relaxed">{ITINERARIO_FOTOS[turma.fotoIdx].caption}</p>
                  <span className="shrink-0 ml-3 px-2 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    ~{turma.estudantes} alunos
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5 text-xs">
                  <span className="text-slate-400 font-semibold flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                    Principais Dúvidas Respondidas pelos Veteranos:
                  </span>
                  <ul className="text-slate-300 space-y-1 list-disc list-inside">
                    {turma.duvidas.map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                  PAEET Jefferson Santos + Alunos Veteranos da 2ª Série C DS
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4"
          onClick={() => setLightboxSrc(null)}
        >
          <button
            onClick={() => setLightboxSrc(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          <img
            src={lightboxSrc}
            alt={lightboxCaption}
            className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          {lightboxCaption && (
            <p className="mt-4 text-sm text-slate-300 text-center max-w-xl bg-black/50 backdrop-blur-sm px-4 py-2 rounded-xl">
              {lightboxCaption}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
