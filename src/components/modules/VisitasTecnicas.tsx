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
  Camera
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { StorytellingCard } from '../common/StorytellingCard';
import { VisitaTecnica } from '../../types';

export const VisitasTecnicas: React.FC = () => {
  const { visitasList, setLightboxEvidence, evidenciasList } = useApp();
  const [selectedVisitaId, setSelectedVisitaId] = useState<string>('vt-cavex');

  const selectedVisita = visitasList.find(v => v.id === selectedVisitaId) || visitasList[0];

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20">
              Imersão Prática & Extensão Pedagógica
            </span>
            <span className="text-xs text-slate-400">Vivência no Setor Produtivo e de Defesa</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight mt-1">
            Visitas Técnicas & Articulação Institucional
          </h1>
          <p className="text-xs lg:text-sm text-slate-400">
            Planejamento, homologação de ofícios, autorizações e registros de visitas a centros de tecnologia e defesa nacional.
          </p>
        </div>

        {/* Tab switch between visits */}
        <div className="flex items-center gap-2">
          {visitasList.map(v => (
            <button
              key={v.id}
              onClick={() => setSelectedVisitaId(v.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 border ${
                selectedVisitaId === v.id
                  ? 'bg-rose-600 text-white border-rose-500 shadow-lg shadow-rose-600/20'
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
              }`}
            >
              <Plane className="w-3.5 h-3.5" />
              <span>{v.instituicao}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Special Highlight Banner if CAVEX is selected */}
      {selectedVisita.isEspecialCAVEX && (
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
                <p className="text-xl font-bold font-mono text-white">{selectedVisita.totalEstudantes} Alunos</p>
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
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-rose-400">
              Objetivos Pedagógicos & Relação com os Cursos Técnicos
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {selectedVisita.objetivoPedagogico}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-800 pt-3">
              {selectedVisita.relatorioResumo}
            </p>
          </div>

          {/* Competências Desenvolvidas */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Competências Técnicas e Comportamentais Trabalhadas
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {selectedVisita.competenciasDesenvolvidas.map((comp, idx) => (
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

          {/* Linha do Tempo desde o 1º Contato até a Visita */}
          <div className="space-y-4 pt-2">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-purple-400" />
              Linha do Tempo das Tratativas até a Realização
            </h4>

            <div className="relative pl-6 border-l border-slate-800 space-y-4">
              {selectedVisita.linhaDoTempo.map((evt, idx) => (
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
                Registros Fotográficos Comprobatórios — Visita CAVEX
              </h4>
              <span className="text-xs text-slate-400">Clique para ampliar</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {selectedVisita.fotos?.map((fotoUrl, i) => (
                <div
                  key={i}
                  onClick={() =>
                    setLightboxEvidence({
                      id: `cavex-foto-${i}`,
                      titulo: `Visita Técnica CAVEX — Registro ${i + 1}`,
                      descricao: `Estudantes dos cursos técnicos do Novotec no Comando de Aviação do Exército em Taubaté. Demonstração de aviônica e simuladores.`,
                      categoria: 'Visitas Técnicas',
                      tipo: 'Imagem',
                      data: '2025-05-15',
                      url: fotoUrl,
                      responsavel: 'Prof. Jefferson Santos (PAEET)',
                      publicoAutorizado: true
                    })
                  }
                  className="group relative h-48 rounded-xl overflow-hidden cursor-pointer border border-slate-800"
                >
                  <img
                    src={fotoUrl}
                    alt={`Foto CAVEX ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[11px] font-semibold text-white">
                      Registro Comprobatório #{i + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Other Technical Visits */}
      {!selectedVisita.isEspecialCAVEX && (
        <div className="glass-panel rounded-2xl p-8 border border-slate-800 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-400">
                {selectedVisita.cidade}
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">{selectedVisita.instituicao}</h2>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              {selectedVisita.status}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs">
            <span className="text-slate-400 font-semibold">Objetivo Pedagógico:</span>
            <p className="text-slate-200 leading-relaxed">{selectedVisita.objetivoPedagogico}</p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase">Linha do Tempo</h4>
            <div className="pl-4 border-l border-slate-800 space-y-3 text-xs">
              {selectedVisita.linhaDoTempo.map((evt, idx) => (
                <div key={idx} className="flex items-center justify-between text-slate-300">
                  <span>{evt.evento}</span>
                  <span className="font-mono text-slate-400">{evt.data}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
