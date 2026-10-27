import React, { useState } from 'react';
import {
  Cpu,
  Users,
  Award,
  Sparkles,
  CheckCircle2,
  Camera,
  Trophy,
  Gift,
  Star,
  ZoomIn,
  X,
  PartyPopper,
  GraduationCap,
  Heart
} from 'lucide-react';
import { StatCard } from '../common/StatCard';

const FOTOS = [
  {
    src: '/dia_profissional_ti/slide_feliz_dia_ti_hd.png',
    caption: 'Arte comemorativa oficial — Feliz Dia do Profissional de TI • 2ª Série C - DS',
    tag: 'Arte Oficial'
  },
  {
    src: '/dia_profissional_ti/slide_feliz_dia_ti_sala.png',
    caption: 'Projeção da arte comemorativa na sala de aula da 2ª Série C DS',
    tag: 'Celebração na Sala'
  },
  {
    src: '/dia_profissional_ti/aluno_feliz_dia_ti.jpg',
    caption: 'Aluno da 2ª Série C DS durante a celebração do Dia do Profissional de TI',
    tag: 'Registro — Aluno'
  },
  {
    src: '/dia_profissional_ti/aluno_feliz_dia_ti_2.jpg',
    caption: 'Participação ativa da turma nas comemorações com o PAEET',
    tag: 'Registro — Turma'
  },
  {
    src: '/dia_profissional_ti/certificados_grupo.jpg',
    caption: 'Entrega dos Certificados de Protagonismo Juvenil — 11 alunos com nota ≥ 9 nas disciplinas técnicas',
    tag: '🏆 Certificados'
  },
  {
    src: '/dia_profissional_ti/turma_completa.jpg',
    caption: 'Foto oficial da turma completa — 27 alunos da 2ª Série C DS comemorando junto ao PAEET',
    tag: 'Foto Oficial da Turma'
  }
];

const DESTAQUES_CERTIFICADOS = [
  'Nota ≥ 9,0 em disciplinas do itinerário técnico de Desenvolvimento de Sistemas',
  'Certificado de Protagonismo Juvenil emitido pelo PAEET Jefferson Santos',
  'Brinde/presente personalizado entregue pelo PAEET como reconhecimento',
  '11 alunos homenageados do total de 27 da 2ª Série C DS'
];

export const DiaProfissionalTI: React.FC = () => {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prevPhoto = () => setLightboxIdx(i => (i !== null ? (i - 1 + FOTOS.length) % FOTOS.length : 0));
  const nextPhoto = () => setLightboxIdx(i => (i !== null ? (i + 1) % FOTOS.length : 0));

  return (
    <div className="space-y-8 pb-16">

      {/* Hero Header */}
      <div className="relative rounded-3xl overflow-hidden glass-panel p-8 lg:p-10 border border-cyan-500/30 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/30 space-y-6">
        {/* decorative glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-cyan-500/20 pb-5 relative">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                <Cpu className="w-3.5 h-3.5" />
                19 DE OUTUBRO • DIA DO PROFISSIONAL DE TI
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                <PartyPopper className="w-3.5 h-3.5" />
                Véspera do Provão Paulista
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Celebração — Dia do Profissional de TI
            </h1>
            <p className="text-sm text-cyan-200/80 max-w-2xl leading-relaxed">
              Comemoração especial realizada exclusivamente com a turma da <strong className="text-white">2ª Série C — Desenvolvimento de Sistemas</strong>. 
              Celebração com salgadinhos, entrega de certificados de Protagonismo Juvenil e presentes do PAEET 
              para os 11 alunos destaque com nota ≥ 9 nas disciplinas técnicas.
            </p>
          </div>

          <div className="text-center px-5 py-4 rounded-2xl bg-slate-900/90 border border-cyan-500/20 shrink-0">
            <Cpu className="w-8 h-8 text-cyan-400 mx-auto mb-1" />
            <p className="text-xs font-bold font-mono text-cyan-400">19 de Outubro</p>
            <p className="text-[10px] text-slate-400 font-semibold">2ª Série C • DS</p>
          </div>
        </div>

        {/* KPIs do Evento */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center space-y-1">
            <Users className="w-5 h-5 text-cyan-400 mx-auto" />
            <p className="text-2xl font-black text-white font-mono">27</p>
            <p className="text-[10px] text-slate-400 font-semibold uppercase">Alunos Participantes</p>
            <p className="text-[9px] text-cyan-400">Turma completa 2ª C DS</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/80 border border-amber-500/20 text-center space-y-1">
            <Trophy className="w-5 h-5 text-amber-400 mx-auto" />
            <p className="text-2xl font-black text-amber-400 font-mono">11</p>
            <p className="text-[10px] text-slate-400 font-semibold uppercase">Certificados Entregues</p>
            <p className="text-[9px] text-amber-300">Nota ≥ 9 nas disciplinas técnicas</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/80 border border-emerald-500/20 text-center space-y-1">
            <Gift className="w-5 h-5 text-emerald-400 mx-auto" />
            <p className="text-2xl font-black text-emerald-400 font-mono">11</p>
            <p className="text-[10px] text-slate-400 font-semibold uppercase">Presentes do PAEET</p>
            <p className="text-[9px] text-emerald-300">Reconhecimento pelo desempenho</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/80 border border-purple-500/20 text-center space-y-1">
            <GraduationCap className="w-5 h-5 text-purple-400 mx-auto" />
            <p className="text-2xl font-black text-purple-400 font-mono">40,7%</p>
            <p className="text-[10px] text-slate-400 font-semibold uppercase">Taxa de Excelência</p>
            <p className="text-[9px] text-purple-300">11 de 27 alunos certificados</p>
          </div>
        </div>
      </div>

      {/* Narrativa do Evento */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Contexto e Estratégia */}
        <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-5">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <h3 className="text-base font-bold text-white">Como foi a Celebração</h3>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl bg-amber-500/8 border border-amber-500/20 p-4 space-y-1.5">
              <div className="text-amber-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center text-[10px] font-black">!</span>
                Contexto
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                A celebração foi realizada na véspera do <strong className="text-white">Provão Paulista</strong>, como forma de 
                motivar e reconhecer os esforços da turma antes de uma das avaliações mais importantes do ano letivo. 
                A comemoração foi realizada <strong className="text-white">exclusivamente com a 2ª Série C DS</strong>, os 27 alunos do curso técnico em Desenvolvimento de Sistemas.
              </p>
            </div>

            <div className="rounded-xl bg-blue-500/8 border border-blue-500/20 p-4 space-y-1.5">
              <div className="text-blue-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px] font-black">→</span>
                Como Foi
              </div>
              <ul className="text-slate-300 text-xs space-y-1.5 leading-relaxed">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400 mt-0.5 shrink-0" />
                  Arte comemorativa "Feliz Dia do Profissional de TI — 2ª C DS" projetada na TV da sala
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400 mt-0.5 shrink-0" />
                  Distribuição de <strong className="text-white">salgadinhos</strong> para toda a turma como celebração
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400 mt-0.5 shrink-0" />
                  Entrega de <strong className="text-white">11 certificados de Protagonismo Juvenil</strong> para os alunos com nota ≥ 9 nas disciplinas técnicas
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400 mt-0.5 shrink-0" />
                  Cada certificado acompanhado de um <strong className="text-white">presente do PAEET</strong> como reconhecimento pessoal pelo desempenho
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400 mt-0.5 shrink-0" />
                  Momento de confraternização e foto oficial com a turma completa
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-emerald-500/8 border border-emerald-500/20 p-4 space-y-1.5">
              <div className="text-emerald-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-[10px] font-black">✓</span>
                Impacto
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                A celebração fortaleceu o vínculo entre o PAEET e a turma, reforçou a identidade de futuros profissionais de TI 
                nos alunos e serviu como motivação coletiva às vésperas do Provão Paulista. Os 11 alunos certificados 
                sentiram seu esforço reconhecido de forma concreta e afetiva.
              </p>
            </div>
          </div>
        </div>

        {/* Critério dos Certificados */}
        <div className="glass-panel rounded-2xl p-6 border border-amber-500/20 bg-amber-500/5 space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Critério de Premiação</h3>
              <p className="text-xs text-slate-400">Certificados de Protagonismo Juvenil</p>
            </div>
          </div>

          <div className="space-y-3">
            {DESTAQUES_CERTIFICADOS.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <Star className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <p className="text-xs text-slate-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          {/* Counters */}
          <div className="grid grid-cols-3 gap-3 pt-2 border-t border-slate-800">
            <div className="text-center rounded-xl bg-slate-900 border border-slate-800 p-3">
              <div className="text-2xl font-black text-white">27</div>
              <div className="text-[10px] text-slate-400">alunos na turma</div>
            </div>
            <div className="text-center rounded-xl bg-amber-500/10 border border-amber-500/30 p-3">
              <div className="text-2xl font-black text-amber-400">11</div>
              <div className="text-[10px] text-slate-400">certificados</div>
            </div>
            <div className="text-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-3">
              <div className="text-2xl font-black text-emerald-400">≥ 9,0</div>
              <div className="text-[10px] text-slate-400">nota mínima</div>
            </div>
          </div>

          <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/60 border border-cyan-500/20">
            <Heart className="w-4 h-4 text-rose-400 shrink-0" />
            <p className="text-xs text-slate-300">
              Cada presente foi escolhido e custeado pessoalmente pelo <strong className="text-white">PAEET Prof. Jefferson Santos</strong> como gesto de reconhecimento ao esforço dos alunos destaque.
            </p>
          </div>
        </div>
      </div>

      {/* Galeria de Fotos */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Camera className="w-4 h-4 text-purple-400" />
            Galeria de Evidências — Celebração 19 de Outubro
          </h3>
          <span className="text-xs text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg">
            {FOTOS.length} fotos • Clique para ampliar
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FOTOS.map((foto, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden cursor-zoom-in border border-slate-800 hover:border-cyan-500/40 transition-colors"
            >
              <img
                src={foto.src}
                alt={foto.caption}
                className="w-full h-52 object-cover group-hover:scale-[1.04] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <ZoomIn className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
              </div>
              <div className="absolute top-3 left-3">
                <span className={`text-[10px] font-bold px-2 py-1 rounded-lg backdrop-blur-sm ${
                  foto.tag.includes('Certificados') || foto.tag.includes('🏆')
                    ? 'bg-amber-500/80 text-white'
                    : foto.tag.includes('Oficial')
                    ? 'bg-cyan-500/80 text-white'
                    : 'bg-slate-900/80 text-slate-200'
                }`}>
                  {foto.tag}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-xs text-slate-200 leading-relaxed line-clamp-2">{foto.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 bg-black/92 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Prev / Next */}
          <button
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10 text-white font-bold"
          >‹</button>
          <button
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10 text-white font-bold"
          >›</button>

          <img
            src={FOTOS[lightboxIdx].src}
            alt={FOTOS[lightboxIdx].caption}
            className="max-w-full max-h-[78vh] rounded-2xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="mt-4 flex flex-col items-center gap-2">
            <p className="text-sm text-slate-200 text-center max-w-xl bg-black/60 backdrop-blur-sm px-4 py-2 rounded-xl">
              {FOTOS[lightboxIdx].caption}
            </p>
            <p className="text-[10px] text-slate-500 font-mono">
              {lightboxIdx + 1} / {FOTOS.length} — 19 de Outubro • Dia do Profissional de TI • 2ª Série C DS
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
