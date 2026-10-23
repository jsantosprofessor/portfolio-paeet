import React, { useState } from 'react';
import {
  Compass,
  Users,
  BookOpen,
  HelpCircle,
  CheckCircle2,
  Image,
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { StatCard } from '../common/StatCard';
import { StorytellingCard } from '../common/StorytellingCard';

export const ItinerarioTecnico: React.FC = () => {
  const { acoesItinerario, cursos, setLightboxEvidence, evidenciasList } = useApp();
  const [selectedCurso, setSelectedCurso] = useState<string>('todos');

  // Filter actions
  const filteredAcoes = acoesItinerario.filter(
    a => selectedCurso === 'todos' || a.cursoApresentado.toLowerCase().includes(selectedCurso.toLowerCase())
  );

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              Novotec Integrado • 1ºs Anos EM
            </span>
            <span className="text-xs text-slate-400">Orientação Vocacional & Escolha Consciente</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight mt-1">
            Escolha do Itinerário Formativo Técnico
          </h1>
          <p className="text-xs lg:text-sm text-slate-400">
            Ações de acolhimento e apresentação dos cursos técnicos SEDUC-SP aos estudantes do 1º ano do Ensino Médio regular.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {cursos.map(c => (
            <button
              key={c.id}
              onClick={() => setSelectedCurso(selectedCurso === c.id ? 'todos' : c.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                selectedCurso === c.id
                  ? 'bg-blue-600 text-white border-blue-500'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              {c.nome}
            </button>
          ))}
        </div>
      </div>

      {/* Indicadores Estratégicos */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <StatCard title="Turmas Visitadas" value={8} icon={Layers} iconColor="text-blue-400" />
        <StatCard title="Alunos Alcançados" value={284} icon={Users} iconColor="text-cyan-400" />
        <StatCard title="Apresentações" value={12} icon={Compass} iconColor="text-purple-400" />
        <StatCard title="Cursos Apresentados" value={4} icon={BookOpen} iconColor="text-emerald-400" />
        <StatCard
          title="Taxa de Interesse"
          value={82.5}
          suffix="%"
          decimals={1}
          icon={CheckCircle2}
          iconColor="text-emerald-400"
          trend={{ value: "Alta Procura", positive: true }}
        />
      </div>

      {/* Storytelling: Orientação Profissional e Escolha Consciente */}
      <StorytellingCard
        title="Orientação Profissional e Escolha Consciente"
        subtitle="Apoiando estudantes na transição do 1º ano para a formação técnica de nível médio."
        desafio="Muitos estudantes do 1º ano desconheciam as possibilidades reais do ensino técnico estadual, alimentando mitos sobre a dificuldade de conciliação de horários e exigências do mercado."
        estrategia="Visitas pedagógicas presenciais nas salas de 1º ano com participação de estudantes veteranos como monitores voluntários, apresentando projetos reais e respondendo a dúvidas de forma horizontal."
        acoes={[
          "Mapeamento e visita a todas as 8 salas de 1º ano da unidade escolar",
          "Apresentação interativa dos eixos de Desenvolvimento de Sistemas, Administração e Logística",
          "Demonstração prática de softwares e aplicativos desenvolvidos pelos veteranos",
          "Esclarecimento minucioso sobre os benefícios e remuneração da Bolsa Estágio Ensino Médio (BEEM)"
        ]}
        evidenciasDescricao="Registros fotográficos das palestras no auditório, apresentações de slides arquivadas e formulários de sondagem de interesse pré-matrícula."
        resultados={[
          "284 estudantes participaram ativamente das rodas de conversa",
          "Adesão recorde às opções de formação técnica no Novotec Integrado para o próximo ciclo",
          "Redução de 90% das dúvidas relatadas sobre compatibilidade de horário com o ensino regular"
        ]}
        melhoriasFuturas="Organizar a Feira de Profissões e Itinerários no primeiro bimestre letivo."
        tag="Itinerários SEDUC-SP"
      />

      {/* Cards de Ações Realizadas */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-cyan-400" />
          Registros das Apresentações nas Turmas
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAcoes.map((acao) => (
            <div key={acao.id} className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {acao.turma}
                  </span>
                  <h4 className="text-base font-bold text-white mt-2">{acao.cursoApresentado}</h4>
                </div>
                <span className="text-xs text-slate-400 font-mono">{acao.data}</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">{acao.descricao}</p>

              {/* Dúvidas Frequentes Esclarecidas */}
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs">
                <span className="text-slate-400 font-semibold flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-amber-400" /> Principais Dúvidas Esclarecidas:
                </span>
                <ul className="text-slate-300 space-y-1 list-disc list-inside">
                  {acao.principaisDuvidas.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-emerald-400 font-semibold">
                  Alcançados: {acao.totalEstudantes} estudantes
                </span>
                <span className="text-slate-400 italic">Resp: {acao.responsavel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
