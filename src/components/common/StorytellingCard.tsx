import React from 'react';
import { Target, Lightbulb, Rocket, CheckCircle2, TrendingUp, HelpCircle } from 'lucide-react';

interface StorytellingCardProps {
  title: string;
  subtitle?: string;
  desafio: string;
  estrategia: string;
  acoes: string[];
  evidenciasDescricao: string;
  resultados: string[];
  melhoriasFuturas?: string;
  tag?: string;
}

export const StorytellingCard: React.FC<StorytellingCardProps> = ({
  title,
  subtitle,
  desafio,
  estrategia,
  acoes,
  evidenciasDescricao,
  resultados,
  melhoriasFuturas,
  tag
}) => {
  return (
    <div className="glass-panel rounded-2xl p-6 lg:p-8 relative overflow-hidden border border-slate-800">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {tag && (
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
          {tag}
        </span>
      )}

      <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 tracking-tight">
        {title}
      </h3>
      {subtitle && <p className="text-sm text-slate-400 mb-6">{subtitle}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
        {/* Desafio */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-2">
          <div className="flex items-center space-x-2 text-amber-400 font-semibold text-sm">
            <Target className="w-4 h-4" />
            <span>1. O Desafio Identificado</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">{desafio}</p>
        </div>

        {/* Estratégia */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-2">
          <div className="flex items-center space-x-2 text-purple-400 font-semibold text-sm">
            <Lightbulb className="w-4 h-4" />
            <span>2. Estratégia Adotada</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">{estrategia}</p>
        </div>

        {/* Ações */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-2">
          <div className="flex items-center space-x-2 text-blue-400 font-semibold text-sm">
            <Rocket className="w-4 h-4" />
            <span>3. Ações Realizadas</span>
          </div>
          <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
            {acoes.map((item, idx) => (
              <li key={idx} className="leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>

        {/* Evidências */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-2">
          <div className="flex items-center space-x-2 text-cyan-400 font-semibold text-sm">
            <CheckCircle2 className="w-4 h-4" />
            <span>4. Evidências Comprobatórias</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">{evidenciasDescricao}</p>
        </div>

        {/* Resultados */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-emerald-500/20 bg-emerald-950/20 space-y-2">
          <div className="flex items-center space-x-2 text-emerald-400 font-semibold text-sm">
            <TrendingUp className="w-4 h-4" />
            <span>5. Resultados Alcançados</span>
          </div>
          <ul className="text-xs text-emerald-200/90 space-y-1 list-disc list-inside">
            {resultados.map((item, idx) => (
              <li key={idx} className="leading-relaxed">{item}</li>
            ))}
          </ul>
        </div>

        {/* Melhorias */}
        {melhoriasFuturas && (
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-2">
            <div className="flex items-center space-x-2 text-indigo-400 font-semibold text-sm">
              <HelpCircle className="w-4 h-4" />
              <span>6. Próximos Passos & Melhorias</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">{melhoriasFuturas}</p>
          </div>
        )}
      </div>
    </div>
  );
};
