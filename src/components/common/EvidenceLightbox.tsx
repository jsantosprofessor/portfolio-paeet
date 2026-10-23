import React from 'react';
import { X, Calendar, User, Tag, Download, ExternalLink, ShieldCheck } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const EvidenceLightbox: React.FC = () => {
  const { lightboxEvidence, setLightboxEvidence, userRole } = useApp();

  if (!lightboxEvidence) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl glass-panel border border-slate-700/80 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center space-x-3">
            <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30">
              {lightboxEvidence.categoria}
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300">
              {lightboxEvidence.tipo}
            </span>
            {userRole === 'PUBLIC' && !lightboxEvidence.publicoAutorizado && (
              <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> LGPD: Anonimizado
              </span>
            )}
          </div>
          <button
            onClick={() => setLightboxEvidence(null)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="relative w-full max-h-[500px] overflow-hidden rounded-xl bg-slate-950 flex items-center justify-center border border-slate-800">
            <img
              src={lightboxEvidence.url}
              alt={lightboxEvidence.titulo}
              className="max-h-[480px] w-auto object-contain rounded-lg"
            />
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">
              {lightboxEvidence.titulo}
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {lightboxEvidence.descricao}
            </p>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs">
            <div className="space-y-1">
              <span className="text-slate-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-blue-400" /> Data de Registro
              </span>
              <p className="font-semibold text-slate-200">{lightboxEvidence.data}</p>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-purple-400" /> Responsável
              </span>
              <p className="font-semibold text-slate-200">{lightboxEvidence.responsavel}</p>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 flex items-center gap-1">
                <Tag className="w-3.5 h-3.5 text-emerald-400" /> Vínculo
              </span>
              <p className="font-semibold text-slate-200">
                {lightboxEvidence.empresaRelacionada || lightboxEvidence.turmaRelacionada || 'Ação Geral'}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> Auditoria
              </span>
              <p className="font-semibold text-emerald-400">Homologado</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-slate-800 bg-slate-900/90 text-xs text-slate-400">
          <span>Identificador de Evidência: #{lightboxEvidence.id}</span>
          <div className="flex items-center space-x-2">
            <a
              href={lightboxEvidence.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Abrir Original</span>
            </a>
            <button
              onClick={() => alert('Download do documento oficial registrado no log de auditoria.')}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Exportar Arquivo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
