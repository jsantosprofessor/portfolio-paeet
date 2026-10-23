import React, { useState } from 'react';
import {
  FileSpreadsheet,
  Download,
  Printer,
  FileText,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  Building2,
  Briefcase,
  Users
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const RelatoriosExportacao: React.FC = () => {
  const {
    profile,
    empresas,
    estudantes,
    buscaAtivaList,
    visitasList,
    reconhecimentosList,
    addAuditLog,
    currentUser,
    showToast
  } = useApp();
  const [selectedTipo, setSelectedTipo] = useState<string>('geral');
  const [bimestreRelatorio, setBimestreRelatorio] = useState<string>('3º Bimestre');

  const relatoriosDisponiveis = [
    { id: 'geral', titulo: 'Relatório Executivo Consolidado PAEET (SEDUC-SP)', icon: Layers, desc: 'Visão integral de estágios, frequência, empresas e visitas.' },
    { id: 'beem', titulo: 'Relatório de Estágios BEEM e Bolsistas Ativos', icon: Briefcase, desc: 'Detalhamento de inscritos, encaminhados e empresas concedentes.' },
    { id: 'empresas', titulo: 'Dossiê de Empresas Parceiras e Tratativas', icon: Building2, desc: 'Histórico de contatos corporativos e convênios abertos.' },
    { id: 'busca-ativa', titulo: 'Relatório de Busca Ativa e Reintegração Escolar', icon: Users, desc: 'Registros de atendimento e recuperação da assiduidade.' }
  ];

  const handleExportCSV = (tipo: string) => {
    let csvContent = "data:text/csv;charset=utf-8,";
    if (tipo === 'empresas') {
      csvContent += "ID,Empresa,Segmento,Cidade,Status,Vagas,Estagiários Ativos\n";
      empresas.forEach(e => {
        csvContent += `"${e.id}","${e.nome}","${e.segmento}","${e.cidade}","${e.statusNegociacao}",${e.vagasOfertadas},${e.estagiariosAtivos}\n`;
      });
    } else {
      csvContent += "Indicador,Valor,Referência\n";
      csvContent += `"Estudantes Acompanhados",342,"Total Geral"\n`;
      csvContent += `"Estudantes no BEEM",84,"Bolsas Ativas"\n`;
      csvContent += `"Empresas Parceiras",${empresas.length},"Conveniadas"\n`;
      csvContent += `"Frequência Média Geral","91.8%","Meta 85%"\n`;
      csvContent += `"Casos Busca Ativa",${buscaAtivaList.length},"Atendimentos"\n`;
    }

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `relatorio_paeet_${tipo}_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    addAuditLog({
      dataHora: new Date().toISOString().replace('T', ' ').substring(0, 19),
      usuario: currentUser.nome,
      perfil: currentUser.perfil,
      acao: 'Exportação de Planilha CSV',
      modulo: 'Relatórios & Exportação',
      detalhes: `Exportação de dados no formato CSV (${tipo}).`,
      ipOrigem: '10.67.69.161'
    });

    showToast(`Relatório CSV gerado e exportado com sucesso!`);
  };

  const handlePrintReport = () => {
    addAuditLog({
      dataHora: new Date().toISOString().replace('T', ' ').substring(0, 19),
      usuario: currentUser.nome,
      perfil: currentUser.perfil,
      acao: 'Impressão de Relatório Oficial SEDUC-SP',
      modulo: 'Relatórios & Exportação',
      detalhes: `Emissão do relatório executivo referente a ${bimestreRelatorio}.`,
      ipOrigem: '10.67.69.161'
    });
    window.print();
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-4 no-print">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Prestação de Contas & Auditoria Pedagógica
            </span>
            <span className="text-xs text-slate-400">Padrão Oficial SEDUC-SP</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight mt-1">
            Relatórios Executivos & Exportação de Dados
          </h1>
          <p className="text-xs lg:text-sm text-slate-400">
            Geração instantânea de relatórios consolidados em formato PDF para impressão e planilhas CSV para acompanhamento da Diretoria de Ensino.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <select
            value={bimestreRelatorio}
            onChange={(e) => setBimestreRelatorio(e.target.value)}
            className="bg-slate-900 text-slate-200 text-xs rounded-xl px-3 py-2 border border-slate-700 font-semibold focus:outline-none focus:border-emerald-500"
          >
            <option value="1º Bimestre">Período: 1º Bimestre</option>
            <option value="2º Bimestre">Período: 2º Bimestre</option>
            <option value="3º Bimestre">Período: 3º Bimestre</option>
            <option value="4º Bimestre">Período: 4º Bimestre</option>
            <option value="Consolidado Anual">Período: Consolidado Anual</option>
          </select>

          <button
            onClick={() => handleExportCSV(selectedTipo)}
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
          >
            <Download className="w-4 h-4 text-emerald-400" />
            <span>Exportar CSV</span>
          </button>

          <button
            onClick={handlePrintReport}
            className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-lg transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimir Relatório Oficial</span>
          </button>
        </div>
      </div>

      {/* Relatórios Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 no-print">
        {relatoriosDisponiveis.map(rel => {
          const Icon = rel.icon;
          const isSelected = selectedTipo === rel.id;
          return (
            <div
              key={rel.id}
              onClick={() => setSelectedTipo(rel.id)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                isSelected
                  ? 'bg-emerald-600/15 border-emerald-500/50 shadow-lg shadow-emerald-500/10'
                  : 'bg-slate-900/60 hover:bg-slate-800/60 border-slate-800'
              }`}
            >
              <div className="p-2 w-fit rounded-lg bg-emerald-500/10 text-emerald-400 mb-2">
                <Icon className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-white">{rel.titulo}</h4>
              <p className="text-[11px] text-slate-400 mt-1">{rel.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Pré-visualização do Relatório Executivo Oficial */}
      <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 space-y-8 bg-slate-950/90 text-slate-100 print:text-black print:bg-white">
        {/* Cabeçalho Oficial do Relatório */}
        <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] tracking-widest uppercase font-bold text-emerald-400">
              SECRETARIA DA EDUCAÇÃO DO ESTADO DE SÃO PAULO — SEDUC-SP
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              RELATÓRIO CONSOLIDADO DE ATUAÇÃO E RESULTADOS DO PAEET
            </h2>
            <p className="text-xs text-slate-300">
              {profile.unidadeEscolar} • {profile.diretoriaEnsino}
            </p>
          </div>

          <div className="text-left sm:text-right text-xs text-slate-400 space-y-0.5">
            <p className="font-mono text-slate-200 font-bold">Ano Letivo: {profile.anoLetivo}</p>
            <p>Emissão: {new Date().toLocaleDateString('pt-BR')}</p>
            <p className="text-emerald-400 font-semibold">Responsável: {profile.nome}</p>
          </div>
        </div>

        {/* Resumo Executivo */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400">
            1. Resumo Executivo das Ações Desenvolvidas
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed text-justify">
            O presente documento consolida os registros pedagógicos, as ações de articulação com o setor produtivo, os indicadores de frequência escolar e o acompanhamento do rendimento dos estudantes matriculados nos cursos técnicos da unidade escolar ao longo do ano letivo de {profile.anoLetivo}. As estratégias adotadas pelo PAEET tiveram como foco primordial a redução da infrequência escolar, a ampliação dos contratos de estágio remunerado via Programa BEEM e a promoção do protagonismo juvenil.
          </p>
        </div>

        {/* Tabela de Indicadores Gerais */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400">
            2. Matriz de Indicadores Quantitativos e Metas
          </h3>

          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-900 text-slate-400 font-semibold border-b border-slate-800">
                <tr>
                  <th className="py-2.5 px-4">Indicador de Gestão</th>
                  <th className="py-2.5 px-4">Meta Estipulada</th>
                  <th className="py-2.5 px-4">Resultado Atingido</th>
                  <th className="py-2.5 px-4">Status de Cumprimento</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono">
                <tr>
                  <td className="py-2.5 px-4 font-sans text-white">Estudantes Inseridos no BEEM</td>
                  <td className="py-2.5 px-4">70 Alunos</td>
                  <td className="py-2.5 px-4 font-bold text-emerald-400">84 Alunos</td>
                  <td className="py-2.5 px-4 font-sans text-emerald-400 font-bold">Superada (+20%)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-sans text-white">Empresas Parceiras Mapeadas</td>
                  <td className="py-2.5 px-4">25 Empresas</td>
                  <td className="py-2.5 px-4 font-bold text-emerald-400">{empresas.length} Empresas</td>
                  <td className="py-2.5 px-4 font-sans text-emerald-400 font-bold">Superada</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-sans text-white">Percentual Médio de Frequência</td>
                  <td className="py-2.5 px-4">85.0%</td>
                  <td className="py-2.5 px-4 font-bold text-cyan-400">91.8%</td>
                  <td className="py-2.5 px-4 font-sans text-emerald-400 font-bold">Meta Mantida</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-sans text-white">Ações de Busca Ativa Regularizadas</td>
                  <td className="py-2.5 px-4">50 Casos</td>
                  <td className="py-2.5 px-4 font-bold text-amber-400">{buscaAtivaList.length} Atendimentos</td>
                  <td className="py-2.5 px-4 font-sans text-emerald-400 font-bold">100% Protocolados</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-sans text-white">Visitas Técnicas Homologadas</td>
                  <td className="py-2.5 px-4">8 Visitas</td>
                  <td className="py-2.5 px-4 font-bold text-rose-400">12 Visitas (Inclui CAVEX)</td>
                  <td className="py-2.5 px-4 font-sans text-emerald-400 font-bold">Superada</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Assinaturas Formais de Prestação de Contas */}
        <div className="pt-12 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-around gap-8 text-center text-xs">
          <div className="space-y-1">
            <div className="w-56 border-b border-slate-600 mb-2 mx-auto" />
            <p className="font-bold text-white">{profile.nome}</p>
            <p className="text-slate-400">{profile.cargo}</p>
            <p className="text-[10px] text-slate-400">{profile.registroFuncional}</p>
          </div>

          <div className="space-y-1">
            <div className="w-56 border-b border-slate-600 mb-2 mx-auto" />
            <p className="font-bold text-white">Direção da Unidade Escolar</p>
            <p className="text-slate-400">{profile.unidadeEscolar}</p>
            <p className="text-[10px] text-slate-400">Homologado perante a SEDUC-SP</p>
          </div>
        </div>
      </div>
    </div>
  );
};
