import React, { useState } from 'react';
import {
  LineChart as LineChartIcon,
  TrendingUp,
  TrendingDown,
  UploadCloud,
  FileText,
  Search,
  CheckCircle2,
  AlertTriangle,
  FileCheck2,
  Lock,
  Layers,
  ChevronRight,
  Sparkles,
  Download,
  FileSpreadsheet,
  Eye,
  Trash2,
  Calendar,
  Save,
  HelpCircle,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend
} from 'recharts';
import { useApp } from '../../context/AppContext';
import { StatCard } from '../common/StatCard';
import { parseExcelOrCSV, ExcelParseResult } from '../../services/excelParser';
import { generateSampleExcelBlob, downloadBlob, getPDFBlob } from '../../services/storageService';
import { DocumentoPDF } from '../../types';

export const DesempenhoAcademico: React.FC = () => {
  const {
    estudantes,
    boletins,
    documentosPDF,
    importBatches,
    importExcelBatch,
    uploadStudentPDF,
    deleteStudentPDF,
    updateObservacaoPedagogica,
    userRole,
    showToast
  } = useApp();

  const [selectedBoletimId, setSelectedBoletimId] = useState<string>(
    boletins[0]?.estudanteId || 'est-1'
  );
  const [activeSubTab, setActiveSubTab] = useState<'boletim' | 'importador' | 'documentos-pdf'>('boletim');
  const [searchTerm, setSearchTerm] = useState('');

  // Excel Import state
  const [excelResult, setExcelResult] = useState<ExcelParseResult | null>(null);
  const [isParsingExcel, setIsParsingExcel] = useState(false);

  // PDF Upload modal state
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pdfStudentId, setPdfStudentId] = useState<string>(estudantes[0]?.id || '');
  const [pdfBimestre, setPdfBimestre] = useState('3º Bimestre');
  const [pdfTitulo, setPdfTitulo] = useState('');
  const [pdfObservacoes, setPdfObservacoes] = useState('');

  // PDF Preview modal
  const [viewingPdf, setViewingPdf] = useState<DocumentoPDF | null>(null);
  const [previewPdfUrl, setPreviewPdfUrl] = useState<string | null>(null);

  // Observações editor state
  const selectedBoletim = boletins.find(b => b.estudanteId === selectedBoletimId) || boletins[0];
  const [editingObs, setEditingObs] = useState<string>(selectedBoletim?.intervencoesSugeridas || '');

  // Update editingObs when selected student changes
  React.useEffect(() => {
    if (selectedBoletim) {
      setEditingObs(selectedBoletim.intervencoesSugeridas);
    }
  }, [selectedBoletimId]);

  // Filter students in directory
  const filteredBoletins = boletins.filter(b =>
    b.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.turma.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.curso.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // PDFs for currently selected student
  const studentPDFs = documentosPDF.filter(
    p => p.estudanteId === selectedBoletim?.estudanteId || p.nomeEstudante === selectedBoletim?.nome
  );

  // Médias por disciplina na turma
  const mediasDisciplinas = [
    { disciplina: 'Programação Web', media: 8.8, meta: 7.0 },
    { disciplina: 'Banco de Dados', media: 8.4, meta: 7.0 },
    { disciplina: 'Análise de Sistemas', media: 8.2, meta: 7.0 },
    { disciplina: 'Técnicas de Programação', media: 8.9, meta: 7.0 },
    { disciplina: 'Redes & Infra', media: 7.9, meta: 7.0 }
  ];

  // Handle Excel upload
  const handleExcelFileUpload = async (file: File) => {
    setIsParsingExcel(true);
    try {
      const parsed = await parseExcelOrCSV(file);
      setExcelResult(parsed);
      showToast(`Arquivo ${file.name} processado! Verifique a prévia antes de homologar.`);
    } catch (err) {
      console.error(err);
      showToast('Erro ao processar planilha Excel/CSV. Verifique o formato do arquivo.');
    } finally {
      setIsParsingExcel(false);
    }
  };

  // Test with generated SEDUC-SP sample
  const handleLoadSampleExcel = async () => {
    setIsParsingExcel(true);
    try {
      const sampleBlob = generateSampleExcelBlob();
      const sampleFile = new File([sampleBlob], 'Planilha_Modelo_SEDUC_Novotec_2025.xlsx', {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });
      const parsed = await parseExcelOrCSV(sampleFile);
      setExcelResult(parsed);
      setActiveSubTab('importador');
      showToast('Planilha oficial modelo SEDUC-SP carregada na pré-visualização!');
    } catch (err) {
      console.error(err);
    } finally {
      setIsParsingExcel(false);
    }
  };

  const handleDownloadTemplate = () => {
    const blob = generateSampleExcelBlob();
    downloadBlob(blob, 'Planilha_Modelo_SEDUC_Notas_PAEET.xlsx');
    showToast('Planilha modelo oficial baixada com sucesso (.xlsx)');
  };

  const handleConfirmExcelImport = () => {
    if (!excelResult) return;
    importExcelBatch(excelResult);
    setExcelResult(null);
    setActiveSubTab('boletim');
  };

  // Handle PDF upload
  const handlePdfSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pdfFile || !pdfStudentId) return;

    const est = estudantes.find(e => e.id === pdfStudentId);
    await uploadStudentPDF(pdfStudentId, pdfFile, {
      titulo: pdfTitulo || pdfFile.name,
      turma: est ? est.turmaId.toUpperCase() : '2ª Série A DS',
      bimestre: pdfBimestre,
      observacoes: pdfObservacoes
    });

    setShowPdfModal(false);
    setPdfFile(null);
    setPdfTitulo('');
    setPdfObservacoes('');
  };

  // Open PDF viewer
  const handleOpenPdfViewer = async (doc: DocumentoPDF) => {
    setViewingPdf(doc);
    if (doc.urlBlob) {
      setPreviewPdfUrl(doc.urlBlob);
    } else {
      const blob = await getPDFBlob(doc.id);
      if (blob) {
        setPreviewPdfUrl(URL.createObjectURL(blob));
      } else {
        // Fallback placeholder preview
        setPreviewPdfUrl(null);
      }
    }
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20">
              Gestão Curricular & Integração de Notas
            </span>
            <span className="text-xs text-slate-400">Abastecido via Excel (.xlsx/.csv) e Boletins PDF</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight mt-1">
            Desempenho Acadêmico dos Cursos Técnicos
          </h1>
          <p className="text-xs lg:text-sm text-slate-400">
            Acompanhamento bimestral de notas por disciplina, identificação de progressão/regressão e importador de planilhas e relatórios PDF com validação humana.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => setActiveSubTab('importador')}
            className={`flex items-center space-x-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
              activeSubTab === 'importador'
                ? 'bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-600/20'
                : 'bg-slate-900 text-slate-200 border-slate-700 hover:bg-slate-800'
            }`}
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
            <span>Central de Importação (Excel / PDF)</span>
          </button>

          <button
            onClick={() => setShowPdfModal(true)}
            className="flex items-center space-x-2 px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
          >
            <UploadCloud className="w-4 h-4 text-purple-400" />
            <span>Anexar Boletim PDF</span>
          </button>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center space-x-3 border-b border-slate-800 pb-2 text-xs">
        <button
          onClick={() => setActiveSubTab('boletim')}
          className={`px-4 py-2 rounded-xl font-bold transition-all ${
            activeSubTab === 'boletim'
              ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Consulta Individual e Curvas de Progressão
        </button>

        <button
          onClick={() => setActiveSubTab('importador')}
          className={`px-4 py-2 rounded-xl font-bold transition-all flex items-center space-x-1.5 ${
            activeSubTab === 'importador'
              ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <span>Sincronizador Excel & Lotes</span>
          {importBatches.length > 0 && (
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-emerald-500/20 text-emerald-300 font-mono">
              {importBatches.length} lotes
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveSubTab('documentos-pdf')}
          className={`px-4 py-2 rounded-xl font-bold transition-all flex items-center space-x-1.5 ${
            activeSubTab === 'documentos-pdf'
              ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <span>Repositório de Relatórios PDF</span>
          <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-purple-500/20 text-purple-300 font-mono">
            {documentosPDF.length}
          </span>
        </button>
      </div>

      {/* Indicadores Globais */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <StatCard title="Média Geral dos Cursos" value={8.5} decimals={1} icon={LineChartIcon} iconColor="text-blue-400" />
        <StatCard title="Alunos em Progressão" value={168} icon={TrendingUp} iconColor="text-emerald-400" trend={{ value: "+18%", positive: true, label: "Evolução" }} />
        <StatCard title="Desempenho Estável" value={84} icon={FileText} iconColor="text-blue-400" />
        <StatCard title="Em Regressão / Apoio" value={24} icon={TrendingDown} iconColor="text-amber-400" trend={{ value: "Monitoria Ativa", positive: false }} />
        <StatCard title="Boletins Sincronizados" value={boletins.length + 340} icon={FileCheck2} iconColor="text-purple-400" />
      </div>

      {/* TAB 1: CONSULTA INDIVIDUAL E CURVAS */}
      {activeSubTab === 'boletim' && (
        <div className="space-y-6">
          {/* Gráfico Geral de Médias por Disciplina */}
          <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white">Médias Gerais por Disciplina Técnica</h3>
                <p className="text-xs text-slate-400">Comparativo das notas com a média mínima de aprovação SEDUC (7.0).</p>
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Média do Eixo: 8.4
              </span>
            </div>

            <div className="h-64 w-full pt-2">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mediasDisciplinas}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                  <XAxis dataKey="disciplina" stroke="#94A3B8" fontSize={11} />
                  <YAxis domain={[0, 10]} stroke="#94A3B8" fontSize={11} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0F172A', borderColor: '#334155', borderRadius: '12px' }}
                  />
                  <Legend wrapperStyle={{ fontSize: '11px', color: '#94A3B8' }} />
                  <Bar dataKey="media" name="Média Apurada" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="meta" name="Média Mínima SEDUC (7.0)" fill="#475569" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Diretório de Alunos & Boletim Detalhado */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Lista de Estudantes */}
            <div className="lg:col-span-4 space-y-3">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Filtrar por aluno, turma ou curso..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-900 text-slate-200 text-xs rounded-xl pl-9 pr-4 py-2.5 border border-slate-800 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
                {filteredBoletins.map(bol => {
                  const isSelected = selectedBoletim?.estudanteId === bol.estudanteId;
                  return (
                    <div
                      key={bol.estudanteId}
                      onClick={() => setSelectedBoletimId(bol.estudanteId)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-purple-600/20 border-purple-500/50 shadow-lg shadow-purple-500/10'
                          : 'bg-slate-900/60 hover:bg-slate-800/60 border-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white text-xs">
                          {userRole === 'PUBLIC' ? bol.nome.split(' ')[0] + ' (Anonimizado - LGPD)' : bol.nome}
                        </span>
                        <span className="text-[10px] text-purple-300 bg-purple-500/20 px-1.5 py-0.5 rounded">
                          {bol.turma.split(' - ')[0]}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1">{bol.curso}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Ficha Individual do Estudante */}
            <div className="lg:col-span-8">
              {selectedBoletim ? (
                <div className="glass-panel rounded-2xl p-6 lg:p-8 border border-slate-800 space-y-6">
                  {/* Cabeçalho */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                    <div>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
                        {selectedBoletim.curso}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1">
                        {userRole === 'PUBLIC'
                          ? selectedBoletim.nome.split(' ')[0] + ' (Anonimizado em conformidade com a LGPD)'
                          : selectedBoletim.nome}
                      </h3>
                      <p className="text-xs text-slate-400">{selectedBoletim.turma}</p>
                    </div>

                    <div className="text-left sm:text-right">
                      <span className="text-[10px] uppercase font-bold text-slate-400">Última Atualização</span>
                      <p className="text-xs font-mono font-bold text-emerald-400">
                        {selectedBoletim.dataUltimaImportacao}
                      </p>
                    </div>
                  </div>

                  {/* Tabela de Notas por Disciplina Técnica */}
                  <div className="overflow-x-auto rounded-xl border border-slate-800">
                    <table className="w-full text-left text-xs text-slate-300">
                      <thead className="bg-slate-900/90 text-slate-400 font-semibold border-b border-slate-800">
                        <tr>
                          <th className="py-2.5 px-3">Disciplina Técnica</th>
                          <th className="py-2.5 px-3">1º Bim</th>
                          <th className="py-2.5 px-3">2º Bim</th>
                          <th className="py-2.5 px-3">3º Bim</th>
                          <th className="py-2.5 px-3">4º Bim</th>
                          <th className="py-2.5 px-3">Média</th>
                          <th className="py-2.5 px-3">Situação</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 font-mono">
                        {selectedBoletim.disciplinas.map((disc, idx) => (
                          <tr key={idx} className="hover:bg-slate-800/30">
                            <td className="py-2.5 px-3 font-sans font-medium text-white">{disc.disciplina}</td>
                            <td className="py-2.5 px-3">{disc.b1.toFixed(1)}</td>
                            <td className="py-2.5 px-3">{disc.b2.toFixed(1)}</td>
                            <td className="py-2.5 px-3">{disc.b3.toFixed(1)}</td>
                            <td className="py-2.5 px-3">{disc.b4.toFixed(1)}</td>
                            <td className="py-2.5 px-3 font-bold text-emerald-400">{disc.media.toFixed(1)}</td>
                            <td className="py-2.5 px-3">
                              <span
                                className={`px-2 py-0.5 rounded text-[10px] font-sans font-bold ${
                                  disc.tendencia === 'Progressão'
                                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                    : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                                }`}
                              >
                                {disc.tendencia}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Relatórios PDF Anexados ao Aluno */}
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                        <FileText className="w-4 h-4 text-purple-400" /> Relatórios / Boletins PDF Vinculados ({studentPDFs.length})
                      </span>
                      <button
                        onClick={() => {
                          setPdfStudentId(selectedBoletim.estudanteId);
                          setShowPdfModal(true);
                        }}
                        className="text-xs text-purple-400 hover:text-purple-300 font-medium"
                      >
                        + Anexar Novo PDF
                      </button>
                    </div>

                    {studentPDFs.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        {studentPDFs.map(doc => (
                          <div
                            key={doc.id}
                            className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between text-xs hover:border-purple-500/40 transition-colors"
                          >
                            <div className="space-y-0.5 truncate max-w-[190px]">
                              <p className="font-semibold text-white truncate">{doc.titulo}</p>
                              <p className="text-[10px] text-slate-400">
                                {doc.bimestreReferencia} • {doc.tamanhoFormatado}
                              </p>
                            </div>
                            <button
                              onClick={() => handleOpenPdfViewer(doc)}
                              className="p-1.5 rounded-lg bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 transition-colors"
                              title="Visualizar PDF"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs text-slate-500 italic">
                        Nenhum boletim PDF individual anexado a este estudante ainda.
                      </p>
                    )}
                  </div>

                  {/* Pontos Fortes e Observações Pedagógicas Editáveis */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                      <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Pontos Fortes & Competências:
                      </span>
                      <ul className="text-slate-300 space-y-1 list-disc list-inside">
                        {selectedBoletim.pontosFortes.map((p, i) => (
                          <li key={i}>{p}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-purple-400 font-bold flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" /> Observações Pedagógicas (PAEET):
                        </span>
                        <button
                          onClick={() => updateObservacaoPedagogica(selectedBoletim.estudanteId, editingObs)}
                          className="flex items-center space-x-1 px-2 py-0.5 rounded bg-purple-600/30 hover:bg-purple-600 text-purple-200 text-[10px] font-semibold transition-colors"
                        >
                          <Save className="w-3 h-3" />
                          <span>Salvar</span>
                        </button>
                      </div>
                      <textarea
                        rows={3}
                        value={editingObs}
                        onChange={(e) => setEditingObs(e.target.value)}
                        className="w-full bg-slate-950 text-slate-200 text-xs rounded-lg p-2.5 border border-slate-800 focus:outline-none focus:border-purple-500 resize-none leading-relaxed"
                        placeholder="Registre observações pedagógicas, encaminhamentos ou alinhamento com a família..."
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="glass-panel rounded-2xl p-12 text-center text-slate-400">
                  Selecione um estudante à esquerda para consultar seu prontuário acadêmico.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: CENTRAL DE IMPORTAÇÃO EXCEL & LOTES */}
      {activeSubTab === 'importador' && (
        <div className="space-y-6">
          {/* Card de Importação em Lote via Excel */}
          <div className="glass-panel rounded-2xl p-6 lg:p-8 border border-slate-800 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-emerald-400" />
                  Sincronização em Lote via Planilhas Excel (.xlsx / .csv)
                </h3>
                <p className="text-xs text-slate-400">
                  Importe as notas bimestrais e frequências do seu sistema escolar para atualizar automaticamente os dashboards.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={handleDownloadTemplate}
                  className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-blue-400" />
                  <span>Baixar Planilha Modelo (.xlsx)</span>
                </button>

                <button
                  onClick={handleLoadSampleExcel}
                  className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 text-xs font-semibold border border-emerald-500/30 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Testar com Arquivo Exemplo</span>
                </button>
              </div>
            </div>

            {/* Drop Zone */}
            <div className="p-8 border-2 border-dashed border-slate-700 rounded-2xl text-center space-y-4 hover:border-emerald-500 transition-colors bg-slate-950/40">
              <UploadCloud className="w-12 h-12 text-emerald-400 mx-auto" />
              <div>
                <p className="text-sm font-semibold text-white">
                  Arraste e solte o arquivo da planilha ou clique para navegar
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Formatos aceitos: Microsoft Excel (.xlsx, .xls) ou Valores Separados por Vírgula (.csv)
                </p>
              </div>

              <input
                type="file"
                accept=".xlsx,.xls,.csv"
                id="excel-file-input"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    handleExcelFileUpload(e.target.files[0]);
                  }
                }}
              />
              <label
                htmlFor="excel-file-input"
                className="inline-block px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs cursor-pointer shadow-lg shadow-emerald-600/20 transition-all hover:scale-105"
              >
                {isParsingExcel ? 'Processando Planilha...' : 'Selecionar Arquivo Excel'}
              </label>
            </div>

            {/* Tabela de Validação Humana Antes de Homologar */}
            {excelResult && (
              <div className="p-6 rounded-2xl bg-slate-900 border border-emerald-500/40 space-y-5 animate-fade-in">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                      Conferência Humana Obrigatória
                    </span>
                    <h4 className="text-base font-bold text-white mt-1">
                      Pré-visualização dos Dados Extraídos: {excelResult.fileName}
                    </h4>
                    <p className="text-xs text-slate-400">
                      Revise os dados antes de consolidar as notas no banco de dados.
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setExcelResult(null)}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-medium hover:bg-slate-700"
                    >
                      Descartar
                    </button>
                    <button
                      onClick={handleConfirmExcelImport}
                      className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Homologar e Salvar no Sistema</span>
                    </button>
                  </div>
                </div>

                {/* Métricas do Lote */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                    <span className="text-slate-400">Estudantes Únicos</span>
                    <p className="text-lg font-bold font-mono text-white mt-0.5">{excelResult.totalAlunosUnicos}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                    <span className="text-slate-400">Linhas / Disciplinas</span>
                    <p className="text-lg font-bold font-mono text-white mt-0.5">{excelResult.totalLinhasLidas}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                    <span className="text-emerald-400 font-semibold">Em Progressão</span>
                    <p className="text-lg font-bold font-mono text-emerald-400 mt-0.5">{excelResult.alunosEmProgressao}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                    <span className="text-amber-400 font-semibold">Em Regressão</span>
                    <p className="text-lg font-bold font-mono text-amber-400 mt-0.5">{excelResult.alunosEmRegressao}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                    <span className="text-rose-400 font-semibold">Pontos de Atenção</span>
                    <p className="text-lg font-bold font-mono text-rose-400 mt-0.5">{excelResult.alertasIdentificados}</p>
                  </div>
                </div>

                {/* Amostra das Linhas Processadas */}
                <div className="overflow-x-auto rounded-xl border border-slate-800 max-h-72">
                  <table className="w-full text-left text-xs text-slate-300">
                    <thead className="bg-slate-950 text-slate-400 font-semibold sticky top-0">
                      <tr>
                        <th className="py-2 px-3">RA</th>
                        <th className="py-2 px-3">Estudante</th>
                        <th className="py-2 px-3">Turma</th>
                        <th className="py-2 px-3">Disciplina</th>
                        <th className="py-2 px-3">B1</th>
                        <th className="py-2 px-3">B2</th>
                        <th className="py-2 px-3">B3</th>
                        <th className="py-2 px-3">B4</th>
                        <th className="py-2 px-3">Freq %</th>
                        <th className="py-2 px-3">Alertas</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 font-mono text-[11px]">
                      {excelResult.rawRows.slice(0, 15).map((row, i) => (
                        <tr key={i} className="hover:bg-slate-800/40">
                          <td className="py-2 px-3 text-slate-400">{row.ra}</td>
                          <td className="py-2 px-3 font-sans font-semibold text-white">{row.nome}</td>
                          <td className="py-2 px-3 text-slate-300">{row.turma}</td>
                          <td className="py-2 px-3 font-sans">{row.disciplina}</td>
                          <td className="py-2 px-3">{row.b1.toFixed(1)}</td>
                          <td className="py-2 px-3">{row.b2.toFixed(1)}</td>
                          <td className="py-2 px-3">{row.b3.toFixed(1)}</td>
                          <td className="py-2 px-3">{row.b4.toFixed(1)}</td>
                          <td className="py-2 px-3 text-emerald-400">{row.frequencia}%</td>
                          <td className="py-2 px-3">
                            {row.warnings.length > 0 ? (
                              <span className="text-[10px] text-amber-400 font-sans flex items-center gap-1">
                                <AlertTriangle className="w-3 h-3" /> {row.warnings.length} alerta(s)
                              </span>
                            ) : (
                              <span className="text-emerald-400 text-[10px] font-sans">Regular</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Histórico de Lotes Importados */}
          <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Calendar className="w-4 h-4 text-purple-400" />
              Histórico de Sincronizações e Lotes Homologados
            </h3>

            <div className="space-y-2">
              {importBatches.map(batch => (
                <div
                  key={batch.id}
                  className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <FileSpreadsheet className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-white">{batch.arquivoOrigem}</p>
                      <p className="text-[11px] text-slate-400 font-mono">
                        Data: {batch.data} • {batch.totalAlunos} estudantes • {batch.totalDisciplinas} registros
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="text-emerald-400 font-semibold font-mono">
                      {batch.emProgressao} em progressão
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {batch.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: REPOSITÓRIO DE RELATÓRIOS PDF */}
      {activeSubTab === 'documentos-pdf' && (
        <div className="space-y-6">
          <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <FileText className="w-4 h-4 text-purple-400" />
                  Boletins e Relatórios Individuais em PDF
                </h3>
                <p className="text-xs text-slate-400">
                  Consulte os relatórios oficiais arquivados por estudante ou anexe novos documentos.
                </p>
              </div>

              <button
                onClick={() => setShowPdfModal(true)}
                className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-lg transition-colors self-start sm:self-auto"
              >
                <UploadCloud className="w-4 h-4" />
                <span>Upload de Relatório PDF</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {documentosPDF.map(doc => (
                <div
                  key={doc.id}
                  className="glass-panel-interactive rounded-xl p-5 border border-slate-800 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                        <FileText className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        {doc.bimestreReferencia}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold text-white line-clamp-1">{doc.titulo}</h4>
                    <p className="text-xs text-purple-300 font-medium">
                      {userRole === 'PUBLIC' ? doc.nomeEstudante.split(' ')[0] + ' (Anonimizado)' : doc.nomeEstudante}
                    </p>
                    <p className="text-[10px] text-slate-400 line-clamp-2 italic">
                      "{doc.observacoesPedagogicas}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span>{doc.tamanhoFormatado}</span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleOpenPdfViewer(doc)}
                        className="px-2.5 py-1 rounded bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 font-semibold text-[10px] flex items-center space-x-1 transition-colors"
                      >
                        <Eye className="w-3 h-3" />
                        <span>Visualizar</span>
                      </button>
                      <button
                        onClick={() => deleteStudentPDF(doc.id)}
                        className="p-1 rounded text-slate-500 hover:text-rose-400 transition-colors"
                        title="Excluir PDF"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MODAL: UPLOAD DE RELATÓRIO PDF INDIVIDUAL */}
      {showPdfModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="glass-panel w-full max-w-lg rounded-2xl p-6 border border-slate-700 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <UploadCloud className="w-5 h-5 text-purple-400" />
              Anexar Boletim / Relatório Individual PDF
            </h3>

            <form onSubmit={handlePdfSubmit} className="space-y-4 text-xs">
              <div>
                <label className="text-slate-400 font-medium">Estudante *</label>
                <select
                  value={pdfStudentId}
                  onChange={(e) => setPdfStudentId(e.target.value)}
                  className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2.5 border border-slate-700"
                >
                  {estudantes.map(est => (
                    <option key={est.id} value={est.id}>
                      {est.nomeCompleto} ({est.turmaId.toUpperCase()})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400 font-medium">Bimestre de Referência</label>
                  <select
                    value={pdfBimestre}
                    onChange={(e) => setPdfBimestre(e.target.value)}
                    className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2.5 border border-slate-700"
                  >
                    <option value="1º Bimestre">1º Bimestre</option>
                    <option value="2º Bimestre">2º Bimestre</option>
                    <option value="3º Bimestre">3º Bimestre</option>
                    <option value="4º Bimestre">4º Bimestre</option>
                    <option value="Anual / Consolidado">Anual / Consolidado</option>
                  </select>
                </div>

                <div>
                  <label className="text-slate-400 font-medium">Título do Arquivo</label>
                  <input
                    type="text"
                    value={pdfTitulo}
                    onChange={(e) => setPdfTitulo(e.target.value)}
                    placeholder="Ex: Boletim_3Bim_Oficial.pdf"
                    className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2.5 border border-slate-700"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-400 font-medium">Arquivo PDF do Boletim *</label>
                <input
                  type="file"
                  required
                  accept=".pdf"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setPdfFile(e.target.files[0]);
                      if (!pdfTitulo) setPdfTitulo(e.target.files[0].name);
                    }
                  }}
                  className="w-full mt-1 bg-slate-900 text-slate-300 rounded-lg p-2 border border-slate-700 file:mr-3 file:py-1 file:px-2.5 file:rounded-md file:border-0 file:text-xs file:bg-purple-600 file:text-white"
                />
              </div>

              <div>
                <label className="text-slate-400 font-medium">Observações Pedagógicas (PAEET)</label>
                <textarea
                  rows={2}
                  value={pdfObservacoes}
                  onChange={(e) => setPdfObservacoes(e.target.value)}
                  placeholder="Justificativa da progressão/regressão ou encaminhamento..."
                  className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2.5 border border-slate-700"
                />
              </div>

              <div className="flex items-center justify-end space-x-2 pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowPdfModal(false)}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-800 text-slate-300 font-medium"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold"
                >
                  Armazenar Relatório PDF
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: VISUALIZADOR DE PDF INTEGRADO */}
      {viewingPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="glass-panel w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-purple-400" />
                <div>
                  <h3 className="text-sm font-bold text-white">{viewingPdf.titulo}</h3>
                  <p className="text-[11px] text-slate-400">
                    Estudante: {viewingPdf.nomeEstudante} ({viewingPdf.turma}) • {viewingPdf.bimestreReferencia}
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setViewingPdf(null);
                  setPreviewPdfUrl(null);
                }}
                className="text-slate-400 hover:text-white text-xs px-2 py-1 rounded bg-slate-800"
              >
                Fechar Visualizador
              </button>
            </div>

            <div className="flex-1 p-6 overflow-y-auto space-y-4">
              {previewPdfUrl ? (
                <div className="w-full h-[500px] rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
                  <iframe
                    src={previewPdfUrl}
                    className="w-full h-full"
                    title={viewingPdf.titulo}
                  />
                </div>
              ) : (
                <div className="p-12 text-center rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                  <FileText className="w-12 h-12 text-purple-400 mx-auto" />
                  <p className="text-sm font-bold text-white">Visualização do Documento PDF Homologado</p>
                  <p className="text-xs text-slate-400 max-w-md mx-auto">
                    Documento oficial arquivado no prontuário digital do estudante com verificação de integridade e auditoria da SEDUC-SP.
                  </p>
                  <p className="text-xs text-emerald-400 font-semibold">
                    Observação Pedagógica: "{viewingPdf.observacoesPedagogicas}"
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
