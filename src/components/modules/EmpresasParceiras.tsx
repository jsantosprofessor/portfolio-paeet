import React, { useState } from 'react';
import {
  Building2,
  Plus,
  Search,
  Phone,
  Mail,
  MapPin,
  Calendar,
  MessageSquare,
  Users,
  CheckCircle2,
  Clock,
  ArrowRight,
  ExternalLink,
  Briefcase
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { EmpresaParceira, TratativaHistorico } from '../../types';

export const EmpresasParceiras: React.FC = () => {
  const { empresas, addEmpresa, addTratativa, showToast, setLightboxEvidence, evidenciasList } = useApp();
  const [selectedEmpresa, setSelectedEmpresa] = useState<EmpresaParceira | null>(empresas[0] || null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showTratativaModal, setShowTratativaModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Form states for new Empresa
  const [novoNome, setNovoNome] = useState('');
  const [novaRazao, setNovaRazao] = useState('');
  const [novoSegmento, setNovoSegmento] = useState('Tecnologia da Informação');
  const [novaCidade, setNovaCidade] = useState('São José dos Campos - SP');
  const [novoContato, setNovoContato] = useState('');
  const [novoCargo, setNovoCargo] = useState('Recursos Humanos');
  const [novoEmail, setNovoEmail] = useState('');
  const [novoTelefone, setNovoTelefone] = useState('');
  const [novoTipoContato, setNovoTipoContato] = useState<'E-mail' | 'WhatsApp' | 'Telefone' | 'Visita Presencial' | 'Reunião Online'>('Visita Presencial');
  const [novaEstrategia, setNovaEstrategia] = useState('');
  const [novaProximaAcao, setNovaProximaAcao] = useState('');
  const [vagas, setVagas] = useState(4);

  // Form state for new Tratativa
  const [tratativaTipo, setTratativaTipo] = useState<'E-mail' | 'WhatsApp' | 'Reunião' | 'Ligação' | 'Visita'>('Reunião');
  const [tratativaDescricao, setTratativaDescricao] = useState('');
  const [tratativaResultado, setTratativaResultado] = useState<'Positivo' | 'Em Espera' | 'Necessita Retorno' | 'Concluído'>('Positivo');

  const filteredEmpresas = empresas.filter(e =>
    e.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.segmento.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.cidade.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateEmpresa = (e: React.FormEvent) => {
    e.preventDefault();
    if (!novoNome) return;
    addEmpresa({
      nome: novoNome,
      razaoSocial: novaRazao || novoNome,
      segmento: novoSegmento,
      cidade: novaCidade,
      responsavelContato: novoContato,
      cargoContato: novoCargo,
      emailContato: novoEmail,
      telefoneContato: novoTelefone,
      dataPrimeiroContato: new Date().toISOString().split('T')[0],
      tipoContato: novoTipoContato,
      statusNegociacao: 'Mapeada',
      vagasOfertadas: Number(vagas),
      estrategiaAdotada: novaEstrategia,
      proximaAcao: novaProximaAcao
    });
    setShowAddModal(false);
    // Reset
    setNovoNome('');
    setNovoContato('');
    setNovoEmail('');
  };

  const handleCreateTratativa = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEmpresa || !tratativaDescricao) return;
    addTratativa(selectedEmpresa.id, {
      data: new Date().toISOString().split('T')[0],
      tipo: tratativaTipo,
      descricao: tratativaDescricao,
      responsavel: 'Prof. Jefferson Santos (PAEET)',
      statusResultado: tratativaResultado
    });
    setShowTratativaModal(false);
    setTratativaDescricao('');
    // refresh selected company
    const updated = empresas.find(emp => emp.id === selectedEmpresa.id);
    if (updated) setSelectedEmpresa(updated);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
              Articulação com o Setor Produtivo
            </span>
            <span className="text-xs text-slate-400">CRM Educacional PAEET</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight mt-1">
            Empresas Parceiras & Tratativas Comerciais
          </h1>
          <p className="text-xs lg:text-sm text-slate-400">
            Registro detalhado do mapeamento, histórico de contatos, convênios de estágio e prospecção de mercado.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-lg transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Cadastrar Nova Empresa</span>
        </button>
      </div>

      {/* Main CRM Grid: Left List / Right Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Companies Directory */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Buscar por empresa, segmento ou cidade..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900 text-slate-200 text-xs rounded-xl pl-9 pr-4 py-2.5 border border-slate-800 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="space-y-3 max-h-[700px] overflow-y-auto pr-1">
            {filteredEmpresas.map((emp) => {
              const isSelected = selectedEmpresa?.id === emp.id;
              return (
                <div
                  key={emp.id}
                  onClick={() => setSelectedEmpresa(emp)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-blue-600/15 border-blue-500/50 shadow-lg shadow-blue-500/10'
                      : 'bg-slate-900/60 hover:bg-slate-800/60 border-slate-800'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white">{emp.nome}</h4>
                      <p className="text-xs text-blue-400">{emp.segmento}</p>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        emp.statusNegociacao === 'Parceria Ativa'
                          ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                          : emp.statusNegociacao === 'Termo de Compromisso Aberto'
                          ? 'bg-blue-500/15 text-blue-400 border border-blue-500/30'
                          : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                      }`}
                    >
                      {emp.statusNegociacao}
                    </span>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/60 pt-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {emp.cidade.split(' - ')[0]}
                    </span>
                    <span className="text-slate-300 font-semibold font-mono">
                      {emp.estagiariosAtivos} estagiários ativos
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Selected Company Detail & Timeline */}
        <div className="lg:col-span-7">
          {selectedEmpresa ? (
            <div className="glass-panel rounded-2xl p-6 lg:p-8 border border-slate-800 space-y-6">
              {/* Header of selected */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {selectedEmpresa.segmento}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {selectedEmpresa.cidade}
                    </span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-white mt-1">
                    {selectedEmpresa.nome}
                  </h2>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Razão Social: {selectedEmpresa.razaoSocial}
                  </p>
                </div>

                <button
                  onClick={() => setShowTratativaModal(true)}
                  className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs shadow-lg transition-colors self-start sm:self-auto"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Nova Tratativa</span>
                </button>
              </div>

              {/* Contact and Strategy Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Contato Principal */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs">
                  <span className="text-slate-400 font-semibold flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-blue-400" /> Responsável na Empresa
                  </span>
                  <p className="text-sm font-bold text-white">{selectedEmpresa.responsavelContato}</p>
                  <p className="text-slate-400">{selectedEmpresa.cargoContato}</p>
                  <div className="pt-2 border-t border-slate-800/80 space-y-1 text-slate-300">
                    <p className="flex items-center gap-1.5">
                      <Mail className="w-3 h-3 text-purple-400" /> {selectedEmpresa.emailContato}
                    </p>
                    <p className="flex items-center gap-1.5 font-mono">
                      <Phone className="w-3 h-3 text-emerald-400" /> {selectedEmpresa.telefoneContato}
                    </p>
                  </div>
                </div>

                {/* Estratégia Adotada */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs">
                  <span className="text-slate-400 font-semibold flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-emerald-400" /> Estratégia de Articulação
                  </span>
                  <p className="text-slate-300 leading-relaxed">{selectedEmpresa.estrategiaAdotada}</p>
                  <div className="pt-2 border-t border-slate-800/80">
                    <span className="text-slate-400 font-semibold">Próxima Ação:</span>
                    <p className="text-emerald-400 font-medium mt-0.5">{selectedEmpresa.proximaAcao}</p>
                  </div>
                </div>
              </div>

              {/* Timeline das Tratativas */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-400" />
                  Linha do Tempo das Tratativas & Negociações
                </h3>

                <div className="relative pl-6 border-l border-slate-800 space-y-5">
                  {selectedEmpresa.historicoTratativas.map((trat, idx) => (
                    <div key={trat.id} className="relative group">
                      {/* Timeline dot */}
                      <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-blue-500 group-hover:scale-125 transition-transform" />

                      <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center space-x-2">
                            <span className="font-bold text-white">{trat.tipo}</span>
                            <span className="text-slate-400 font-mono text-[11px]">{trat.data}</span>
                          </div>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                              trat.statusResultado === 'Positivo' || trat.statusResultado === 'Concluído'
                                ? 'bg-emerald-500/10 text-emerald-400'
                                : 'bg-amber-500/10 text-amber-400'
                            }`}
                          >
                            {trat.statusResultado}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">{trat.descricao}</p>
                        <p className="text-[10px] text-slate-400 italic">Registrado por: {trat.responsavel}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="glass-panel rounded-2xl p-12 text-center text-slate-400">
              Selecione uma empresa à esquerda para ver suas tratativas e histórico.
            </div>
          )}
        </div>
      </div>

      {/* Modal: Cadastrar Nova Empresa */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="glass-panel w-full max-w-xl rounded-2xl p-6 border border-slate-700 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-white">Cadastrar Nova Empresa Parceira</h3>
            <form onSubmit={handleCreateEmpresa} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400 font-medium">Nome Fantasia *</label>
                  <input
                    type="text"
                    required
                    value={novoNome}
                    onChange={(e) => setNovoNome(e.target.value)}
                    placeholder="Ex: Huber+Suhner Brasil"
                    className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2 border border-slate-700"
                  />
                </div>
                <div>
                  <label className="text-slate-400 font-medium">Segmento *</label>
                  <input
                    type="text"
                    required
                    value={novoSegmento}
                    onChange={(e) => setNovoSegmento(e.target.value)}
                    placeholder="Ex: Telecomunicações"
                    className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2 border border-slate-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400 font-medium">Responsável Contato *</label>
                  <input
                    type="text"
                    required
                    value={novoContato}
                    onChange={(e) => setNovoContato(e.target.value)}
                    placeholder="Nome do RH ou Gestor"
                    className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2 border border-slate-700"
                  />
                </div>
                <div>
                  <label className="text-slate-400 font-medium">E-mail Corporativo *</label>
                  <input
                    type="email"
                    required
                    value={novoEmail}
                    onChange={(e) => setNovoEmail(e.target.value)}
                    placeholder="contato@empresa.com"
                    className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2 border border-slate-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-slate-400 font-medium">Telefone / WhatsApp</label>
                  <input
                    type="text"
                    value={novoTelefone}
                    onChange={(e) => setNovoTelefone(e.target.value)}
                    placeholder="(12) 99999-9999"
                    className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2 border border-slate-700"
                  />
                </div>
                <div>
                  <label className="text-slate-400 font-medium">Cidade</label>
                  <input
                    type="text"
                    value={novaCidade}
                    onChange={(e) => setNovaCidade(e.target.value)}
                    className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2 border border-slate-700"
                  />
                </div>
                <div>
                  <label className="text-slate-400 font-medium">Vagas Estimadas</label>
                  <input
                    type="number"
                    value={vagas}
                    onChange={(e) => setVagas(Number(e.target.value))}
                    className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2 border border-slate-700"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-400 font-medium">Estratégia Adotada</label>
                <textarea
                  rows={2}
                  value={novaEstrategia}
                  onChange={(e) => setNovaEstrategia(e.target.value)}
                  placeholder="Descreva a abordagem inicial com a empresa..."
                  className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2 border border-slate-700"
                />
              </div>

              <div className="flex items-center justify-end space-x-2 pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold"
                >
                  Salvar Empresa
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Adicionar Tratativa */}
      {showTratativaModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="glass-panel w-full max-w-lg rounded-2xl p-6 border border-slate-700 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-white">
              Nova Tratativa — {selectedEmpresa?.nome}
            </h3>
            <form onSubmit={handleCreateTratativa} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400 font-medium">Canal de Contato</label>
                  <select
                    value={tratativaTipo}
                    onChange={(e) => setTratativaTipo(e.target.value as any)}
                    className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2 border border-slate-700"
                  >
                    <option value="Reunião">Reunião Presencial/Online</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="E-mail">E-mail</option>
                    <option value="Ligação">Ligação Telefônica</option>
                    <option value="Visita">Visita Técnica</option>
                  </select>
                </div>

                <div>
                  <label className="text-slate-400 font-medium">Status do Retorno</label>
                  <select
                    value={tratativaResultado}
                    onChange={(e) => setTratativaResultado(e.target.value as any)}
                    className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2 border border-slate-700"
                  >
                    <option value="Positivo">Positivo</option>
                    <option value="Em Espera">Em Espera</option>
                    <option value="Necessita Retorno">Necessita Retorno</option>
                    <option value="Concluído">Concluído</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-slate-400 font-medium">Resumo do Contato / Pauta Tratada *</label>
                <textarea
                  required
                  rows={3}
                  value={tratativaDescricao}
                  onChange={(e) => setTratativaDescricao(e.target.value)}
                  placeholder="Ex: Apresentada a grade de Desenvolvimento de Sistemas; agendado envio dos currículos..."
                  className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2 border border-slate-700"
                />
              </div>

              <div className="flex items-center justify-end space-x-2 pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowTratativaModal(false)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold"
                >
                  Registrar no Histórico
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
