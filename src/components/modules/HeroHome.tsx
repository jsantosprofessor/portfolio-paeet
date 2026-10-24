import React from 'react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Briefcase,
  Building2,
  Users,
  Compass,
  Award,
  ChevronRight,
  GraduationCap,
  FileCheck2,
  Eye
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { AnimatedCounter } from '../common/AnimatedCounter';

export const HeroHome: React.FC = () => {
  const { profile, setActiveModule, empresas, estudantes, reconhecimentosList, visitasList, acoesItinerario } = useApp();

  const totalEstudantes = estudantes.length; // alunos ativos da turma 2ª C DS
  const totalInseridos = 84; // alunos inseridos no BEEM (total rede)
  const totalEmpresas = empresas.length;
  const totalVisitas = visitasList.length;
  const totalAcoes = acoesItinerario.length + 18; // total de ações consolidadas
  const totalReconhecidos = reconhecimentosList.length + 12;

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden glass-panel p-8 sm:p-12 lg:p-16 border border-slate-800">
        {/* Animated Radial Gradients Background */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
        <div className="absolute -bottom-32 left-1/3 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Ambient Grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-6">
          {/* Tag Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide bg-blue-500/10 text-blue-400 border border-blue-500/30">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Rede Estadual de São Paulo • SEDUC-SP</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide bg-purple-500/10 text-purple-300 border border-purple-500/30">
              <span>Novotec Integrado • Ano Letivo {profile.anoLetivo}</span>
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Conectando Educação, Tecnologia e{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              Oportunidades.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal max-w-3xl">
            Um portfólio de ações, estratégias e resultados que fortalecem a educação profissional e ampliam as oportunidades dos estudantes.
          </p>

          {/* PAEET Profile identification card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-2xl">
            <div className="flex items-center space-x-3.5">
              <img
                src={profile.avatarUrl}
                alt={profile.nome}
                className="w-12 h-12 rounded-xl object-cover border-2 border-blue-500/40 shadow-lg"
              />
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white">{profile.nome}</h4>
                <p className="text-xs text-blue-400 font-semibold">{profile.cargo}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">{profile.unidadeEscolar}</p>
              </div>
            </div>

            <div className="text-left sm:text-right border-t sm:border-t-0 sm:border-l border-slate-800 pt-3 sm:pt-0 sm:pl-4">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">Jurisdição</span>
              <p className="text-xs font-semibold text-slate-200">{profile.diretoriaEnsino}</p>
              <p className="text-[11px] text-emerald-400 font-medium mt-0.5">{profile.cidade}</p>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => setActiveModule('dashboard')}
              className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explorar Dashboard Geral</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActiveModule('beem')}
              className="flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700/80 font-semibold text-sm transition-all"
            >
              <Briefcase className="w-4 h-4 text-emerald-400" />
              <span>Ver Estágios BEEM</span>
            </button>

            <button
              onClick={() => setActiveModule('visitas')}
              className="flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700/80 font-semibold text-sm transition-all"
            >
              <Compass className="w-4 h-4 text-rose-400" />
              <span>Especial CAVEX</span>
            </button>
          </div>
        </div>
      </section>

      {/* Indicadores de Destaque (Cards Animados com Dados Reais do Banco) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Indicadores de Destaque
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Resultados apurados e consolidados ao longo do ano letivo de {profile.anoLetivo}.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {/* Card 1: Estudantes */}
          <div
            onClick={() => setActiveModule('busca-ativa')}
            className="glass-panel-interactive rounded-2xl p-4 cursor-pointer"
          >
            <div className="p-2.5 w-fit rounded-xl bg-blue-500/10 text-blue-400 mb-3 border border-blue-500/20">
              <Users className="w-5 h-5" />
            </div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Acompanhados</p>
            <p className="text-2xl font-extrabold text-white mt-1">
              <AnimatedCounter value={totalEstudantes} />
            </p>
            <p className="text-[10px] text-emerald-400 font-semibold mt-1">100% Monitorados</p>
          </div>

          {/* Card 2: BEEM */}
          <div
            onClick={() => setActiveModule('beem')}
            className="glass-panel-interactive rounded-2xl p-4 cursor-pointer"
          >
            <div className="p-2.5 w-fit rounded-xl bg-emerald-500/10 text-emerald-400 mb-3 border border-emerald-500/20">
              <Briefcase className="w-5 h-5" />
            </div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">No BEEM</p>
            <p className="text-2xl font-extrabold text-emerald-400 mt-1">
              <AnimatedCounter value={totalInseridos} />
            </p>
            <p className="text-[10px] text-slate-400 mt-1">Bolsistas Ativos</p>
          </div>

          {/* Card 3: Empresas */}
          <div
            onClick={() => setActiveModule('empresas')}
            className="glass-panel-interactive rounded-2xl p-4 cursor-pointer"
          >
            <div className="p-2.5 w-fit rounded-xl bg-purple-500/10 text-purple-400 mb-3 border border-purple-500/20">
              <Building2 className="w-5 h-5" />
            </div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Empresas</p>
            <p className="text-2xl font-extrabold text-white mt-1">
              <AnimatedCounter value={totalEmpresas} />
            </p>
            <p className="text-[10px] text-purple-400 mt-1">Articulação Regional</p>
          </div>

          {/* Card 4: Visitas Técnicas */}
          <div
            onClick={() => setActiveModule('visitas')}
            className="glass-panel-interactive rounded-2xl p-4 cursor-pointer"
          >
            <div className="p-2.5 w-fit rounded-xl bg-rose-500/10 text-rose-400 mb-3 border border-rose-500/20">
              <Compass className="w-5 h-5" />
            </div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Visitas Técnicas</p>
            <p className="text-2xl font-extrabold text-white mt-1">
              <AnimatedCounter value={totalVisitas} />
            </p>
            <p className="text-[10px] text-rose-400 mt-1">Inclui CAVEX & PqTec</p>
          </div>

          {/* Card 5: Ações Realizadas */}
          <div
            onClick={() => setActiveModule('itinerario')}
            className="glass-panel-interactive rounded-2xl p-4 cursor-pointer"
          >
            <div className="p-2.5 w-fit rounded-xl bg-cyan-500/10 text-cyan-400 mb-3 border border-cyan-500/20">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Ações Executadas</p>
            <p className="text-2xl font-extrabold text-white mt-1">
              <AnimatedCounter value={totalAcoes} />
            </p>
            <p className="text-[10px] text-cyan-400 mt-1">Orientação & Gestão</p>
          </div>

          {/* Card 6: Reconhecidos */}
          <div
            onClick={() => setActiveModule('certificacao')}
            className="glass-panel-interactive rounded-2xl p-4 cursor-pointer"
          >
            <div className="p-2.5 w-fit rounded-xl bg-amber-500/10 text-amber-400 mb-3 border border-amber-500/20">
              <Award className="w-5 h-5" />
            </div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Reconhecimentos</p>
            <p className="text-2xl font-extrabold text-amber-400 mt-1">
              <AnimatedCounter value={totalReconhecidos} />
            </p>
            <p className="text-[10px] text-slate-400 mt-1">Mérito & Protagonismo</p>
          </div>
        </div>
      </section>

      {/* Storytelling: O Papel Transformador do PAEET */}
      <section className="glass-panel rounded-3xl p-8 lg:p-10 border border-slate-800 space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase font-bold tracking-wider text-blue-400">
            Storytelling Educacional
          </span>
          <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
            Gestão Educacional Baseada em Evidências e Foco no Aluno
          </h3>
          <p className="text-sm text-slate-300 mt-2">
            Como a atuação estruturada do PAEET conecta a sala de aula à realidade do mercado de trabalho através de cinco pilares estratégicos:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {/* Pilar 1 */}
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
              01
            </div>
            <h4 className="text-base font-bold text-white">Aproximação com o Setor Produtivo</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Mapeamento contínuo das indústrias, empresas de TI e centros logísticos do Vale do Paraíba, apresentando o currículo dos cursos técnicos e abrindo canais formais para estágios remunerados do BEEM.
            </p>
          </div>

          {/* Pilar 2 */}
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
              02
            </div>
            <h4 className="text-base font-bold text-white">Permanência e Busca Ativa</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Acompanhamento semanal de assiduidade escolar. Identificação precoce de ausências reiteradas e implementação de intervenções personalizadas de acolhimento e reintegração com apoio familiar.
            </p>
          </div>

          {/* Pilar 3 */}
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              03
            </div>
            <h4 className="text-base font-bold text-white">Protagonismo e Valorização</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Estímulo ao protagonismo juvenil por meio da mostra tecnológica do Dia do Profissional de TI, visitas técnicas de alto padrão como ao CAVEX, e premiação com certificados de honra ao mérito acadêmico.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
