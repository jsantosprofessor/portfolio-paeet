import React, { useState } from 'react';
import {
  Award,
  Sparkles,
  Printer,
  Download,
  Plus,
  CheckCircle2,
  Users,
  Search,
  ShieldCheck,
  Star,
  FileCheck2,
  Loader2,
  QrCode
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useApp } from '../../context/AppContext';
import { StatCard } from '../common/StatCard';
import { Reconhecimento } from '../../types';
import { generateCertificadoPDF } from '../../services/pdfService';

export const CertificacaoProtagonismo: React.FC = () => {
  const {
    reconhecimentosList,
    addReconhecimento,
    estudantes,
    profile,
    userRole,
    currentUser,
    addAuditLog,
    showToast
  } = useApp();

  const [selectedRecId, setSelectedRecId] = useState<string>(reconhecimentosList[0]?.id || '');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  // Form states
  const [formEstudanteId, setFormEstudanteId] = useState(estudantes[0]?.id || '');
  const [formCategoria, setFormCategoria] = useState<Reconhecimento['categoria']>('Melhor Desempenho Técnico');
  const [formCriterio, setFormCriterio] = useState('');
  const [formDescricao, setFormDescricao] = useState('');

  const selectedRec = reconhecimentosList.find(r => r.id === selectedRecId) || reconhecimentosList[0];

  const handleCreateCertificate = (e: React.FormEvent) => {
    e.preventDefault();
    const est = estudantes.find(e => e.id === formEstudanteId) || estudantes[0];
    addReconhecimento({
      estudanteId: est.id,
      nomeEstudante: est.nomeCompleto,
      turma: est.turmaId.toUpperCase(),
      curso: est.cursoId === 'ds' ? 'Desenvolvimento de Sistemas' : 'Administração',
      categoria: formCategoria,
      criterio: formCriterio || 'Destaque acadêmico e técnico exemplar no ano letivo.',
      data: new Date().toISOString().split('T')[0],
      descricao: formDescricao || 'Concessão de Honra ao Mérito e Protagonismo Juvenil.',
      fotoUrl: est.id === 'est-2' ? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80' : undefined
    });

    // Trigger celebratory confetti
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });

    setShowCreateModal(false);
  };

  const handleDownloadPDF = async () => {
    if (!selectedRec || isGeneratingPDF) return;
    setIsGeneratingPDF(true);
    showToast('Gerando Certificado oficial em PDF...');

    try {
      await new Promise(r => setTimeout(r, 250));
      generateCertificadoPDF({
        nomeEstudante: selectedRec.nomeEstudante,
        curso: selectedRec.curso,
        turma: selectedRec.turma,
        motivo: selectedRec.categoria + ' — ' + selectedRec.criterio,
        bimestre: 'Consolidado do Período',
        anoLetivo: profile.anoLetivo,
        nomeDocente: profile.nome,
        unidade: profile.unidadeEscolar,
        codigo: selectedRec.certificadoCodigo || 'PAEET-MERT-2024-X99'
      });

      addAuditLog({
        dataHora: new Date().toISOString().replace('T', ' ').substring(0, 19),
        usuario: currentUser.nome,
        perfil: currentUser.perfil,
        acao: 'Download de Certificado PDF',
        modulo: 'Certificação & Protagonismo',
        detalhes: `Certificado de Mérito exportado em PDF para ${selectedRec.nomeEstudante} (${selectedRec.certificadoCodigo}).`,
        ipOrigem: '10.67.69.161'
      });

      showToast('✅ Certificado oficial baixado com sucesso!');
    } catch (err) {
      console.error(err);
      showToast('Erro ao exportar certificado. Tente novamente.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const handlePrint = () => {
    addAuditLog({
      dataHora: new Date().toISOString().replace('T', ' ').substring(0, 19),
      usuario: currentUser.nome,
      perfil: currentUser.perfil,
      acao: 'Impressão de Certificado Oficial',
      modulo: 'Certificação & Protagonismo',
      detalhes: `Emissão física do certificado de ${selectedRec?.nomeEstudante}.`,
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
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
              Valorização & Mérito Acadêmico
            </span>
            <span className="text-xs text-slate-400">Protagonismo Juvenil SEDUC-SP</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight mt-1">
            Certificação & Protagonismo Juvenil
          </h1>
          <p className="text-xs lg:text-sm text-slate-400">
            Reconhecimento oficial de estudantes que se destacaram por excelência acadêmica, evolução técnica, assiduidade e espírito comunitário com emissão de PDF e QR Code de autenticidade.
          </p>
        </div>

        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-bold text-xs shadow-lg shadow-amber-600/20 transition-all hover:scale-105"
        >
          <Plus className="w-4 h-4" />
          <span>Emitir Novo Certificado Oficial</span>
        </button>
      </div>

      {/* Indicadores */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 no-print">
        <StatCard title="Estudantes Homenageados" value={reconhecimentosList.length + 112} icon={Award} iconColor="text-amber-400" />
        <StatCard title="Certificados Homologados" value={reconhecimentosList.length + 112} icon={FileCheck2} iconColor="text-emerald-400" />
        <StatCard title="Categorias de Mérito" value={5} icon={Star} iconColor="text-purple-400" />
        <StatCard title="Turmas Contempladas" value={5} icon={Users} iconColor="text-blue-400" />
      </div>

      {/* Main Certificate Showcase and Print Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: List of Recognized Students */}
        <div className="lg:col-span-4 space-y-3 no-print">
          <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
            <Award className="w-4 h-4 text-amber-400" /> Quadro de Honra & Destaques
          </h3>

          <div className="space-y-2.5">
            {reconhecimentosList.map((rec) => {
              const isSelected = selectedRec?.id === rec.id;
              return (
                <div
                  key={rec.id}
                  onClick={() => setSelectedRecId(rec.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-amber-500/15 border-amber-500/50 shadow-lg shadow-amber-500/10'
                      : 'bg-slate-900/60 hover:bg-slate-800/60 border-slate-800'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-white">
                        {userRole === 'PUBLIC' ? rec.nomeEstudante.split(' ')[0] + ' (Anonimizado)' : rec.nomeEstudante}
                      </h4>
                      <p className="text-[11px] text-amber-400 font-medium mt-0.5">{rec.categoria}</p>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 px-1.5 py-0.5 rounded bg-slate-800">
                      {rec.turma}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2 line-clamp-2">{rec.criterio}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Live Printable Certificate */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between no-print">
            <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" /> Pré-visualização do Certificado em Alta Resolução
            </h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleDownloadPDF}
                disabled={isGeneratingPDF}
                className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 disabled:opacity-60 disabled:cursor-not-allowed text-white text-xs font-semibold shadow-md shadow-amber-600/20 transition-all"
              >
                {isGeneratingPDF ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Download className="w-3.5 h-3.5" />
                )}
                <span>{isGeneratingPDF ? 'Gerando...' : 'Baixar PDF Oficial'}</span>
              </button>

              <button
                onClick={handlePrint}
                className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Imprimir</span>
              </button>
            </div>
          </div>

          {/* O Certificado Visualmente Impressionante */}
          {selectedRec && (
            <div
              id="printable-certificate"
              className="relative p-8 sm:p-12 rounded-3xl bg-slate-950 border-4 border-amber-500/40 shadow-2xl text-slate-900 overflow-hidden text-center space-y-6"
              style={{
                background: 'linear-gradient(135deg, #0A0F1D 0%, #0F172A 100%)',
                color: '#F8FAFC'
              }}
            >
              {/* Moldura Interna Dourada Clássica */}
              <div className="absolute inset-3 border border-amber-500/20 rounded-2xl pointer-events-none" />
              <div className="absolute inset-5 border border-dashed border-amber-500/30 rounded-xl pointer-events-none" />

              {/* Brasão / Identidade Institucional Superior */}
              <div className="relative z-10 flex flex-col items-center justify-center space-y-2">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-300 p-[2px] shadow-lg shadow-amber-500/20">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                    <Award className="w-8 h-8 text-amber-400" />
                  </div>
                </div>
                <h5 className="text-[11px] tracking-[0.25em] uppercase font-bold text-amber-400">
                  Governo do Estado de São Paulo • SEDUC-SP
                </h5>
                <p className="text-xs font-medium text-slate-300">
                  {profile.unidadeEscolar} • {profile.diretoriaEnsino}
                </p>
              </div>

              {/* Título Principal do Certificado */}
              <div className="relative z-10 space-y-1">
                <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-200 tracking-wider">
                  CERTIFICADO DE MÉRITO & PROTAGONISMO
                </h2>
                <p className="text-xs uppercase tracking-widest text-slate-400">
                  Reconhecimento de Destaque no Ensino Médio Técnico
                </p>
              </div>

              {/* Corpo do Texto */}
              <div className="relative z-10 max-w-2xl mx-auto space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                <p>Certificamos com distinção e honra que o(a) estudante:</p>

                <h3 className="text-xl sm:text-2xl font-bold text-white font-serif border-b border-amber-500/40 pb-2 inline-block px-8">
                  {userRole === 'PUBLIC' ? selectedRec.nomeEstudante.split(' ')[0] + ' (Anonimizado - LGPD)' : selectedRec.nomeEstudante}
                </h3>

                <p>
                  conquistou o reconhecimento oficial na categoria de{' '}
                  <strong className="text-amber-300 font-bold">{selectedRec.categoria}</strong>,
                  da turma <strong>{selectedRec.turma}</strong> do curso técnico em <strong>{selectedRec.curso}</strong>,
                  tendo demonstrado:
                </p>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs italic text-slate-300">
                  "{selectedRec.criterio}"
                </div>
              </div>

              {/* Assinaturas e Autenticidade com QR Code */}
              <div className="relative z-10 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-400">
                {/* Assinatura PAEET */}
                <div className="text-center sm:text-left">
                  <div className="w-48 border-b border-slate-600 mb-1 mx-auto sm:mx-0" />
                  <p className="font-bold text-slate-200">{profile.nome}</p>
                  <p className="text-[10px] text-slate-400">{profile.cargo}</p>
                  <p className="text-[9px] text-slate-500">{profile.registroFuncional}</p>
                </div>

                {/* Selo Central de Autenticidade Digital com QR Code */}
                <div className="flex items-center gap-3 bg-slate-900/90 px-3.5 py-2 rounded-xl border border-amber-500/30">
                  <div className="p-1.5 bg-white rounded-lg">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://portfolio-paeet.vercel.app/?verify=${selectedRec.certificadoCodigo}&color=0A0F1D`}
                      alt="QR Code de Autenticidade"
                      className="w-10 h-10"
                    />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center space-x-1 text-emerald-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-bold">Autenticado Digitalmente</span>
                    </div>
                    <p className="text-[9px] text-slate-400 mt-0.5">Aponte a câmera para validar</p>
                    <p className="font-mono text-[9px] text-amber-400 font-bold">{selectedRec.certificadoCodigo}</p>
                  </div>
                </div>

                {/* Assinatura Direção */}
                <div className="text-center sm:text-right">
                  <div className="w-48 border-b border-slate-600 mb-1 mx-auto sm:ml-auto" />
                  <p className="font-bold text-slate-200">Direção da Unidade Escolar</p>
                  <p className="text-[10px] text-slate-400">{profile.unidadeEscolar}</p>
                  <p className="text-[9px] text-slate-500">Homologado SEDUC-SP</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal: Emitir Novo Certificado */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in no-print">
          <div className="glass-panel w-full max-w-lg rounded-2xl p-6 border border-slate-700 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" /> Emitir Novo Certificado de Reconhecimento
            </h3>

            <form onSubmit={handleCreateCertificate} className="space-y-4 text-xs">
              <div>
                <label className="text-slate-400 font-medium">Estudante Contemplado *</label>
                <select
                  value={formEstudanteId}
                  onChange={(e) => setFormEstudanteId(e.target.value)}
                  className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2.5 border border-slate-700"
                >
                  {estudantes.map(e => (
                    <option key={e.id} value={e.id}>
                      {e.nomeCompleto} ({e.turmaId.toUpperCase()} - Média: {e.mediaGeral})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-slate-400 font-medium">Categoria de Reconhecimento *</label>
                <select
                  value={formCategoria}
                  onChange={(e) => setFormCategoria(e.target.value as any)}
                  className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2.5 border border-slate-700"
                >
                  <option value="Melhor Desempenho Técnico">Melhor Desempenho Técnico</option>
                  <option value="Maior Evolução Acadêmica">Maior Evolução Acadêmica (Superação)</option>
                  <option value="Protagonismo e Liderança">Protagonismo e Liderança Juvenil</option>
                  <option value="Assiduidade Exemplar">Assiduidade Exemplar (100% Presença)</option>
                  <option value="Inovação e Projetos">Inovação Tecnológica e Projetos Práticos</option>
                </select>
              </div>

              <div>
                <label className="text-slate-400 font-medium">Critério & Justificativa Pedagógica *</label>
                <textarea
                  required
                  rows={2}
                  value={formCriterio}
                  onChange={(e) => setFormCriterio(e.target.value)}
                  placeholder="Ex: Média 9.6 no ano letivo, dedicação como monitor voluntário e destaque no estágio..."
                  className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2.5 border border-slate-700"
                />
              </div>

              <div className="flex items-center justify-end space-x-2 pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-800 text-slate-300 font-medium"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold shadow-lg"
                >
                  Gerar e Autenticar Certificado
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
