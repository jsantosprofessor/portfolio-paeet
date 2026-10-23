import React from 'react';
import { Sparkles, RotateCcw, ShieldCheck, Lock, Unlock, Eye } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const DemoBadge: React.FC = () => {
  const { isDemoMode, resetDemoData, userRole, setUserRole, showToast } = useApp();

  return (
    <div className="bg-slate-900/90 border-b border-slate-800 text-xs py-1.5 px-4 sticky top-0 z-40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Left: Demo Indicator */}
        <div className="flex items-center space-x-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="font-semibold text-slate-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-blue-400 font-bold">Ambiente de Demonstração Interativo:</span> Dados simulados da Rede Estadual (SEDUC-SP)
          </span>
        </div>

        {/* Right: Controls & LGPD Toggle */}
        <div className="flex items-center space-x-3">
          {/* LGPD Mode Switcher */}
          <button
            onClick={() => {
              const newRole = userRole === 'PUBLIC' ? 'PAEET_ADMIN' : 'PUBLIC';
              setUserRole(newRole);
              showToast(
                newRole === 'PUBLIC'
                  ? 'Modo Público Ativado: Nomes anonimizados e proteção LGPD habilitada.'
                  : 'Modo Gestão Ativado: Acesso completo aos dados pedagógicos e cadastros.'
              );
            }}
            className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-md border text-[11px] font-medium transition-all ${
              userRole === 'PUBLIC'
                ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/20'
                : 'bg-purple-500/10 text-purple-300 border-purple-500/30 hover:bg-purple-500/20'
            }`}
            title="Alternar entre visualização pública anonimizada (LGPD) e painel privado de gestão do PAEET"
          >
            {userRole === 'PUBLIC' ? (
              <>
                <Eye className="w-3 h-3 text-emerald-400" />
                <span>Visualização: <strong>Pública (LGPD Safe)</strong></span>
              </>
            ) : (
              <>
                <Unlock className="w-3 h-3 text-purple-400" />
                <span>Visualização: <strong>Gestão PAEET (Privada)</strong></span>
              </>
            )}
          </button>

          {/* Reset Demo Data Button */}
          <button
            onClick={resetDemoData}
            className="flex items-center space-x-1 text-slate-400 hover:text-slate-200 transition-colors px-2 py-1 rounded hover:bg-slate-800 text-[11px]"
            title="Restaura os dados iniciais de demonstração"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Restaurar Demonstração</span>
          </button>
        </div>
      </div>
    </div>
  );
};
