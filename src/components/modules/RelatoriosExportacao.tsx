import React, { useState } from 'react';
import {
  FileSpreadsheet,
  Download,
  Printer,
  FileText,
  CheckCircle2,
  Layers,
  Sparkles,
  Building2,
  Briefcase,
  Users,
  Loader2
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { generateRelatorioExecutivoPDF } from '../../services/pdfService';

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
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

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
      csvContent += `"Estudantes Acompanhados",${estudantes.length},"Total Geral"\n`;
      csvContent += `"Estudantes no BEEM",84,"Bolsas Ativas"\n`;
      csvContent += `"Empresas Parceiras",${empresas.length},"Conveniadas"\n`;
      csvContent += `"Frequência Média Geral","91.8%","Meta 85%"\n`;
      csvContent += `"Casos Busca Ativa",${buscaAtivaList.length},"Atendimentos"\n`;
      csvContent += `"Visitas Técnicas",${visitasList.length},"Homologadas"\n`;
      csvContent += `"Certificados Emitidos",${reconhecimentosList.length},"Protagonismo"\n`;
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

    showToast(`Planilha CSV exportada com sucesso!`);
  };

  const handleExportPDF = async () => {
    if (isGeneratingPDF) return;
    setIsGeneratingPDF(true);
    showToast('Gerando PDF oficial SEDUC-SP... aguarde.');

    try {
      await new Promise(r => setTimeout(r, 300)); // deixar o toast aparecer
      generateRelatorioExecutivoPDF({
        nomeDocente: profile.nome,
        cargo: profile.cargo,
        registro: profile.registroFuncional,
        unidade: profile.unidadeEscolar,
        diretoria: profile.diretoriaEnsino,
        cidade: profile.cidade,
        anoLetivo: profile.anoLetivo,
        bimestre: bimestreRelatorio,
        estudantes: estudantes.length,
        beem: 84,
        empresas: empresas.length,
        frequencia: '91,8%',
        buscaAtiva: buscaAtivaList.length,
        visitas: visitasList.length,
        reconhecimentos: reconhecimentosList.length
      });

      addAuditLog({
        dataHora: new Date().toISOString().replace('T', ' ').substring(0, 19),
        usuario: currentUser.nome,
        perfil: currentUser.perfil,
        acao: 'Exportação de Relatório PDF Oficial',
        modulo: 'Relatórios & Exportação',
        detalhes: `PDF do relatório executivo SEDUC-SP gerado (${bimestreRelatorio} / ${profile.anoLetivo}).`,
        ipOrigem: '10.67.69.161'
      });

      showToast('✅ PDF oficial gerado e salvo com sucesso!');
    } catch (err) {
      showToast('Erro ao gerar PDF. Tente novamente.');
      console.error(err);
    } finally {
      setIsGeneratingPDF(false);
    }
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
            Geração de relatórios em <strong className="text-emerald-400">PDF oficial</strong> (jsPDF) e planilhas CSV para acompanhamento da Diretoria de Ensino.
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

          {/* ── NOVO: Botão PDF oficial ────────────────────────── */}
          <button
            onClick={handleExportPDF}
            disabled={isGeneratingPDF}
            className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition-all"
          >
            {isGeneratingPDF
              ? <Loader2 className="w-4 h-4 animate-spin" />
              : <FileText className="w-4 h-4" />
            }
            <span>{isGeneratingPDF ? 'Gerando PDF...' : 'Baixar PDF Oficial'}</span>
          </button>

          <button
            onClick={handlePrintReport}
            className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-lg transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimir</span>
          </button>
        </div>
      </div>

      {/* PDF Export Notice */}
      <div className="flex items-start space-x-3 p-4 rounded-xl bg-blue-500/5 border border-blue-500/20 no-print">
        <Sparkles className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
        <div>
          <p className="text-xs font-semibold text-blue-300">Exportação PDF com jsPDF — Layout Oficial SEDUC-SP</p>
          <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
            Clique em <strong className="text-blue-400">Baixar PDF Oficial</strong> para gerar o arquivo <code className="text-blue-300">.pdf</code> completo com cabeçalho institucional, tabela de indicadores, resumo executivo e campos de assinatura — pronto para protocolar na Diretoria de Ensino. Os dados são preenchidos automaticamente com as informações do seu perfil PAEET.
          </p>
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
              {isSelected && (
                <div className="flex items-center space-x-1 mt-2 text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" />
                  <span className="text-[10px] font-semibold">Selecionado para exportação</span>
                </div>
              )}
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
            <p>Período: <span className="text-emerald-400 font-semibold">{bimestreRelatorio}</span></p>
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
                  <th className="py-2.5 px-4">Meta</th>
                  <th className="py-2.5 px-4">Realizado</th>
                  <th className="py-2.5 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono">
                {[
                  ['Estudantes Acompanhados', '300', `${estudantes.length}`, 'Superada'],
                  ['Estudantes no BEEM (Bolsa Estágio)', '70', '84', 'Superada (+20%)'],
                  ['Empresas Parceiras Mapeadas', '25', `${empresas.length}`, 'Superada'],
                  ['Frequência Média Geral', '85,0%', '91,8%', 'Meta Mantida'],
                  ['Atendimentos Busca Ativa', '50', `${buscaAtivaList.length}`, '100% Protocolados'],
                  ['Visitas Técnicas Homologadas', '8', `${visitasList.length} (incl. CAVEX)`, 'Superada'],
                  ['Certificados de Protagonismo Emitidos', '20', `${reconhecimentosList.length}`, 'Superada'],
                ].map(([ind, meta, result, status], i) => (
                  <tr key={i} className="hover:bg-slate-900/40">
                    <td className="py-2.5 px-4 font-sans text-white">{ind}</td>
                    <td className="py-2.5 px-4">{meta}</td>
                    <td className="py-2.5 px-4 font-bold text-emerald-400">{result}</td>
                    <td className="py-2.5 px-4 font-sans text-emerald-400 font-bold">{status}</td>
                  </tr>
                ))}
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

        <p className="text-center text-[10px] text-slate-500 font-mono">
          Documento gerado pelo Sistema PAEET Digital v1.0 | portfolio-paeet.vercel.app
        </p>
      </div>
    </div>
  );
};
