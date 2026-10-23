import React, { useState } from 'react';
import {
  FolderLock,
  Search,
  Filter,
  Plus,
  Image,
  FileText,
  MessageSquare,
  ShieldCheck,
  Calendar,
  Tag,
  Eye,
  ExternalLink,
  UploadCloud
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Evidencia } from '../../types';

export const BibliotecaEvidencias: React.FC = () => {
  const { evidenciasList, addEvidencia, setLightboxEvidence, userRole, addAuditLog, currentUser } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategoria, setSelectedCategoria] = useState<string>('Todas');
  const [showUploadModal, setShowUploadModal] = useState(false);

  // Form states for new evidence
  const [novoTitulo, setNovoTitulo] = useState('');
  const [novaDescricao, setNovaDescricao] = useState('');
  const [novaCategoria, setNovaCategoria] = useState<Evidencia['categoria']>('Estágios BEEM');
  const [novoTipo, setNovoTipo] = useState<Evidencia['tipo']>('Imagem');
  const [novoVinculo, setNovoVinculo] = useState('');
  const [novaUrl, setNovaUrl] = useState('');

  const categorias = [
    'Todas',
    'Estágios BEEM',
    'Empresas Parceiras',
    'Itinerário Técnico',
    'Busca Ativa',
    'Visitas Técnicas',
    'Desempenho Acadêmico',
    'Dia do Profissional de TI',
    'Certificação',
    'Protagonismo Juvenil'
  ];

  const filteredEvidencias = evidenciasList.filter(ev => {
    const matchesSearch =
      ev.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ev.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (ev.empresaRelacionada && ev.empresaRelacionada.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategoria === 'Todas' || ev.categoria === selectedCategoria;
    return matchesSearch && matchesCategory;
  });

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!novoTitulo) return;
    addEvidencia({
      titulo: novoTitulo,
      descricao: novaDescricao,
      categoria: novaCategoria,
      tipo: novoTipo,
      data: new Date().toISOString().split('T')[0],
      url: novaUrl || 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=800&q=80',
      empresaRelacionada: novoVinculo,
      responsavel: currentUser.nome,
      publicoAutorizado: true
    });

    addAuditLog({
      dataHora: new Date().toISOString().replace('T', ' ').substring(0, 19),
      usuario: currentUser.nome,
      perfil: currentUser.perfil,
      acao: 'Upload de Nova Evidência',
      modulo: 'Biblioteca de Evidências',
      detalhes: `Evidência arquivada: "${novoTitulo}" (${novaCategoria}).`,
      ipOrigem: '10.67.69.161 (Estação PAEET)'
    });

    setShowUploadModal(false);
    setNovoTitulo('');
    setNovaDescricao('');
    setNovaUrl('');
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              Repositório Central de Provas e Comprovações
            </span>
            <span className="text-xs text-slate-400">Total: {evidenciasList.length} itens homologados</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight mt-1">
            Biblioteca Central de Evidências Pedagógicas
          </h1>
          <p className="text-xs lg:text-sm text-slate-400">
            Armazenamento seguro de capturas de tela (WhatsApp), e-mails corporativos, fotografias de visitas, ofícios e relatórios.
          </p>
        </div>

        <button
          onClick={() => setShowUploadModal(true)}
          className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-lg transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Adicionar Nova Evidência</span>
        </button>
      </div>

      {/* Filter Bar & Search */}
      <div className="glass-panel rounded-2xl p-4 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Buscar por título, empresa, turma ou palavra-chave..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-900 text-slate-200 text-xs rounded-xl pl-9 pr-4 py-2.5 border border-slate-800 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="flex items-center space-x-2 overflow-x-auto pb-1 md:pb-0 text-xs">
          <Filter className="w-4 h-4 text-slate-400 mr-1 flex-shrink-0" />
          {categorias.slice(0, 5).map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategoria(cat)}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                selectedCategoria === cat
                  ? 'bg-indigo-600 text-white font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Mosaico de Evidências */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvidencias.map((ev) => (
          <div
            key={ev.id}
            onClick={() => setLightboxEvidence(ev)}
            className="group glass-panel-interactive rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between cursor-pointer"
          >
            {/* Thumbnail */}
            <div className="relative h-48 w-full overflow-hidden bg-slate-950">
              <img
                src={ev.url}
                alt={ev.titulo}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 flex items-center space-x-2">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-900/90 text-white backdrop-blur-md border border-slate-700">
                  {ev.categoria}
                </span>
                <span className="px-2 py-0.5 rounded-md text-[10px] bg-blue-500/80 text-white font-medium">
                  {ev.tipo}
                </span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="px-3.5 py-1.5 rounded-xl bg-white/90 text-slate-950 font-bold text-xs flex items-center space-x-1.5 shadow-xl">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Visualizar em Alta Definição</span>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
              <div className="space-y-1.5">
                <h3 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors line-clamp-2">
                  {ev.titulo}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {ev.descricao}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 font-mono">
                  <Calendar className="w-3 h-3 text-slate-400" /> {ev.data}
                </span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Auditado
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal: Adicionar Evidência */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="glass-panel w-full max-w-lg rounded-2xl p-6 border border-slate-700 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <UploadCloud className="w-5 h-5 text-indigo-400" /> Adicionar Registro à Biblioteca de Evidências
            </h3>

            <form onSubmit={handleUploadSubmit} className="space-y-4 text-xs">
              <div>
                <label className="text-slate-400 font-medium">Título da Evidência *</label>
                <input
                  type="text"
                  required
                  value={novoTitulo}
                  onChange={(e) => setNovoTitulo(e.target.value)}
                  placeholder="Ex: Print WhatsApp Alinhamento com RH Stefanini"
                  className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2.5 border border-slate-700"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400 font-medium">Categoria</label>
                  <select
                    value={novaCategoria}
                    onChange={(e) => setNovaCategoria(e.target.value as any)}
                    className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2.5 border border-slate-700"
                  >
                    {categorias.filter(c => c !== 'Todas').map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-slate-400 font-medium">Tipo de Arquivo</label>
                  <select
                    value={novoTipo}
                    onChange={(e) => setNovoTipo(e.target.value as any)}
                    className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2.5 border border-slate-700"
                  >
                    <option value="Imagem">Fotografia</option>
                    <option value="WhatsApp">Captura WhatsApp</option>
                    <option value="E-mail">Comprovante E-mail</option>
                    <option value="Ofício">Ofício Formal</option>
                    <option value="Documento">Relatório / PDF</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-slate-400 font-medium">Descrição Detalhada *</label>
                <textarea
                  required
                  rows={2}
                  value={novaDescricao}
                  onChange={(e) => setNovaDescricao(e.target.value)}
                  placeholder="Explique o contexto, pessoas envolvidas e relevância pedagógica..."
                  className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2.5 border border-slate-700"
                />
              </div>

              <div>
                <label className="text-slate-400 font-medium">Arquivo de Imagem / Documento (Local ou URL)</label>
                <div className="mt-1 space-y-2">
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        const file = e.target.files[0];
                        const reader = new FileReader();
                        reader.onload = (event) => {
                          if (event.target?.result) {
                            setNovaUrl(event.target.result as string);
                          }
                        };
                        reader.readAsDataURL(file);
                        if (!novoTitulo) setNovoTitulo(file.name.replace(/\.[^/.]+$/, ""));
                      }
                    }}
                    className="w-full bg-slate-900 text-slate-300 rounded-lg p-2 border border-slate-700 file:mr-3 file:py-1 file:px-2.5 file:rounded-md file:border-0 file:text-xs file:bg-indigo-600 file:text-white cursor-pointer"
                  />
                  <input
                    type="text"
                    value={novaUrl}
                    onChange={(e) => setNovaUrl(e.target.value)}
                    placeholder="Ou cole a URL da imagem (https://...)"
                    className="w-full bg-slate-900 text-slate-200 rounded-lg p-2 border border-slate-700 text-xs"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end space-x-2 pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-800 text-slate-300 font-medium"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold"
                >
                  Cadastrar Evidência
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
