import React from 'react';
import {
  Cpu,
  Calendar,
  Users,
  Code,
  Network,
  Award,
  Sparkles,
  CheckCircle2,
  Camera,
  ExternalLink
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { StatCard } from '../common/StatCard';
import { StorytellingCard } from '../common/StorytellingCard';

export const DiaProfissionalTI: React.FC = () => {
  const { setLightboxEvidence } = useApp();

  const projetosApresentados = [
    {
      titulo: 'Portal de Gestão de Estoques para Pequenos Comércios',
      turma: '3ª Série A - Desenvolvimento de Sistemas',
      tecnologias: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      descricao: 'Sistema web completo com emissão de relatórios, controle de validade e alertas de reposição desenvolvido pelos estudantes sob mentoria do PAEET.'
    },
    {
      titulo: 'Simulador de Roteamento de Pacotes e Firewall Local',
      turma: '2ª Série A - Redes & Desenv. de Sistemas',
      tecnologias: ['Cisco Packet Tracer', 'Python', 'Linux'],
      descricao: 'Maquete lógica demonstrando a contenção de ataques de força bruta e isolamento de VLANs em infraestruturas industriais.'
    },
    {
      titulo: 'Aplicativo de Apoio ao Estudo e Busca Ativa Escolar',
      turma: '2ª Série A - Desenvolvimento de Sistemas',
      tecnologias: ['Mobile First', 'Tailwind', 'LocalStorage'],
      descricao: 'Solução criada para os próprios colegas acompanharem faltas, horários de aulas e comunicados pedagógicos.'
    }
  ];

  const fotosEvento = [
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'
  ];

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="relative rounded-3xl overflow-hidden glass-panel p-8 lg:p-10 border border-cyan-500/30 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/30 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyan-500/20 pb-5">
          <div className="space-y-1">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>19 DE OUTUBRO • VALORIZAÇÃO PROFISSIONAL & MERCADO</span>
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight pt-2">
              Mostra Tecnológica — Dia do Profissional de TI
            </h1>
            <p className="text-xs sm:text-sm text-cyan-200/80 max-w-3xl">
              Celebração do papel transformador da tecnologia na educação, com oficinas práticas, hackathon de soluções e palestras com líderes do mercado tech.
            </p>
          </div>

          <div className="bg-slate-900/90 px-4 py-2.5 rounded-2xl border border-slate-800 text-center">
            <span className="text-[10px] text-slate-400 uppercase font-bold">Data Comemorativa</span>
            <p className="text-sm font-bold font-mono text-cyan-400">19 de Outubro de 2025</p>
          </div>
        </div>

        {/* Indicadores do Evento */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-1">
            <span className="text-slate-400 font-semibold">Alunos Mobilizados</span>
            <p className="text-2xl font-bold font-mono text-white">186</p>
            <p className="text-cyan-400 text-[10px]">Cursos DS e Redes</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-1">
            <span className="text-slate-400 font-semibold">Projetos Expostos</span>
            <p className="text-2xl font-bold font-mono text-white">14</p>
            <p className="text-emerald-400 text-[10px]">Soluções Práticas</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-1">
            <span className="text-slate-400 font-semibold">Profissionais Convidados</span>
            <p className="text-2xl font-bold font-mono text-white">6</p>
            <p className="text-purple-400 text-[10px]">Embraer, Stefanini, TOTVS</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-1">
            <span className="text-slate-400 font-semibold">Oficinas Práticas</span>
            <p className="text-2xl font-bold font-mono text-white">4</p>
            <p className="text-amber-400 text-[10px]">Código, Cloud & Redes</p>
          </div>
        </div>
      </div>

      {/* Storytelling Frame */}
      <StorytellingCard
        title="Protagonismo Juvenil e Conexão Real com o Mercado de TI"
        subtitle="Aproximando a comunidade escolar dos desafios contemporâneos da indústria de software."
        desafio="Demonstrar aos estudantes que a programação e a infraestrutura de redes não são apenas conteúdos teóricos escolares, mas carreiras de alto impacto com grande demanda regional."
        estrategia="Organização de um dia inteiro dedicado a palestras técnicas com engenheiros de software, workshops práticos 'hands-on' e banca avaliadora com empresas parceiras do BEEM."
        acoes={[
          "Palestras sobre Carreiras em Cibersegurança e Inteligência Artificial",
          "Mini-hackathon interno com desafios reais de desenvolvimento web",
          "Oficina de montagem e teste de servidores em ambiente Linux",
          "Banca com profissionais de mercado avaliando projetos dos estudantes"
        ]}
        evidenciasDescricao="Registros fotográficos, cronograma oficial do evento, atas de participação e projetos de software desenvolvidos no GitHub."
        resultados={[
          "100% de engajamento das turmas técnicas de Informação e Comunicação",
          "3 estudantes foram convidados para entrevistas de estágio BEEM após a apresentação",
          "Fortalecimento da autoeficácia e do sentimento de pertencimento dos alunos"
        ]}
        melhoriasFuturas="Abrir a mostra técnica para as turmas dos 9º anos das escolas municipais do entorno."
        tag="19 de Outubro — TI"
      />

      {/* Projetos dos Estudantes em Destaque */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Code className="w-5 h-5 text-cyan-400" />
          Projetos Técnicos Desenvolvidos e Apresentados
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projetosApresentados.map((proj, idx) => (
            <div key={idx} className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {proj.turma}
                </span>
                <h4 className="text-base font-bold text-white">{proj.titulo}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{proj.descricao}</p>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tecnologias.map((tech, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Galeria de Fotos Comprobatórias do Evento */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Camera className="w-4 h-4 text-purple-400" />
              Galeria Comprobatória — Dia do Profissional de TI
            </h3>
            <p className="text-xs text-slate-400">Clique sobre as fotografias para abrir na Biblioteca Central de Evidências.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {fotosEvento.map((url, i) => (
            <div
              key={i}
              onClick={() =>
                setLightboxEvidence({
                  id: `ti-day-foto-${i}`,
                  titulo: `Dia do Profissional de TI — Oficina Prática ${i + 1}`,
                  descricao: `Registro dos estudantes do Novotec em atividades com mentores de empresas parceiras no Dia do Profissional de TI.`,
                  categoria: 'Dia do Profissional de TI',
                  tipo: 'Imagem',
                  data: '2025-10-19',
                  url: url,
                  responsavel: 'Prof. Jefferson Santos (PAEET)',
                  publicoAutorizado: true
                })
              }
              className="group relative h-48 rounded-xl overflow-hidden cursor-pointer border border-slate-800"
            >
              <img
                src={url}
                alt={`Foto TI ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-xs font-semibold text-white">Registro Fotográfico #{i + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
