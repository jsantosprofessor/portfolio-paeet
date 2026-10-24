import React, { useState } from 'react';
import {
  Settings,
  User,
  ShieldCheck,
  RotateCcw,
  Download,
  Save,
  CheckCircle2,
  Lock,
  Eye,
  GraduationCap,
  HardDrive
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Configuracoes: React.FC = () => {
  const { profile, setProfile, resetDemoData, userRole, setUserRole, showToast, auditLogs } = useApp();

  const [nome, setNome] = useState(profile.nome);
  const [cargo, setCargo] = useState(profile.cargo);
  const [unidade, setUnidade] = useState(profile.unidadeEscolar);
  const [diretoria, setDiretoria] = useState(profile.diretoriaEnsino);
  const [cidade, setCidade] = useState(profile.cidade);
  const [email, setEmail] = useState(profile.email);
  const [registro, setRegistro] = useState(profile.registroFuncional);
  const [diretorNome, setDiretorNome] = useState(profile.diretorNome || 'Direção da Unidade Escolar');
  const [formacao, setFormacao] = useState(profile.formacao || '');
  const [resumoAtuacao, setResumoAtuacao] = useState(profile.resumoAtuacao || '');

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile(prev => ({
      ...prev,
      nome,
      cargo,
      unidadeEscolar: unidade,
      diretoriaEnsino: diretoria,
      cidade,
      email,
      registroFuncional: registro,
      diretorNome,
      formacao,
      resumoAtuacao
    }));
    showToast('Dados do perfil e personalização institucional atualizados!');
  };

  const handleExportBackup = () => {
    const backupData = {
      profile,
      timestamp: new Date().toISOString(),
      version: '1.0.0-SEDUC-PAEET'
    };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `paeet_backup_${new Date().toISOString().split('T')[0]}.json`);
    dlAnchorElem.click();
    showToast('Backup completo dos dados gerado e descarregado.');
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-500/10 text-slate-300 border border-slate-700">
              Painel Administrativo & Sistema
            </span>
            <span className="text-xs text-slate-400">Controle e Customização do PAEET</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight mt-1">
            Configurações e Gestão de Dados
          </h1>
          <p className="text-xs lg:text-sm text-slate-400">
            Atualização das informações do docente, controle de privacidade LGPD, backup de banco e controle de dados simulados.
          </p>
        </div>

        <button
          onClick={handleExportBackup}
          className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
        >
          <Download className="w-4 h-4 text-blue-400" />
          <span>Fazer Backup dos Dados (JSON)</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Profile Form */}
        <div className="lg:col-span-8 glass-panel rounded-2xl p-6 lg:p-8 border border-slate-800 space-y-6">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <User className="w-4 h-4 text-blue-400" /> Identificação do Professor PAEET
          </h3>

          <form onSubmit={handleSaveProfile} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-slate-400 font-medium">Nome Completo</label>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2.5 border border-slate-700"
                />
              </div>

              <div>
                <label className="text-slate-400 font-medium">Cargo Oficial</label>
                <input
                  type="text"
                  value={cargo}
                  onChange={(e) => setCargo(e.target.value)}
                  className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2.5 border border-slate-700"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-slate-400 font-medium">Unidade Escolar (Novotec)</label>
                <input
                  type="text"
                  value={unidade}
                  onChange={(e) => setUnidade(e.target.value)}
                  className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2.5 border border-slate-700"
                />
              </div>

              <div>
                <label className="text-slate-400 font-medium">Diretoria Regional de Ensino</label>
                <input
                  type="text"
                  value={diretoria}
                  onChange={(e) => setDiretoria(e.target.value)}
                  className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2.5 border border-slate-700"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-slate-400 font-medium">Cidade / Polo</label>
                <input
                  type="text"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2.5 border border-slate-700"
                />
              </div>

              <div>
                <label className="text-slate-400 font-medium">E-mail Institucional</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2.5 border border-slate-700"
                />
              </div>

              <div>
                <label className="text-slate-400 font-medium">Registro Funcional</label>
                <input
                  type="text"
                  value={registro}
                  onChange={(e) => setRegistro(e.target.value)}
                  className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2.5 border border-slate-700"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-slate-400 font-medium">Diretor(a) da Unidade Escolar (para Relatórios e Certificados)</label>
                <input
                  type="text"
                  value={diretorNome}
                  onChange={(e) => setDiretorNome(e.target.value)}
                  placeholder="Ex: Profª. Maria Aparecida da Silva"
                  className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2.5 border border-slate-700"
                />
              </div>

              <div>
                <label className="text-slate-400 font-medium">Formação Acadêmica & Titulações</label>
                <input
                  type="text"
                  value={formacao}
                  onChange={(e) => setFormacao(e.target.value)}
                  className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2.5 border border-slate-700"
                />
              </div>
            </div>

            <div>
              <label className="text-slate-400 font-medium">Resumo de Atuação Estratégica (Biografia Docente)</label>
              <textarea
                rows={3}
                value={resumoAtuacao}
                onChange={(e) => setResumoAtuacao(e.target.value)}
                className="w-full mt-1 bg-slate-900 text-slate-200 rounded-lg p-2.5 border border-slate-700 leading-relaxed"
              />
            </div>

            <div className="flex items-center justify-end pt-3 border-t border-slate-800">
              <button
                type="submit"
                className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg transition-colors"
              >
                <Save className="w-4 h-4" />
                <span>Salvar Alterações do Perfil</span>
              </button>
            </div>
          </form>
        </div>

        {/* Right: Security & Demo controls */}
        <div className="lg:col-span-4 space-y-6">
          {/* LGPD Mode Selector */}
          <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Controle de Privacidade LGPD
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Alterne entre o modo de exibição pública (para visitas de avaliadores ou comunidade) e o modo de gestão administrativa com nomes completos e relatórios individuais.
            </p>

            <div className="space-y-2 pt-1 text-xs">
              <button
                onClick={() => {
                  setUserRole('PUBLIC');
                  showToast('Modo Público (LGPD Seguro) Ativado.');
                }}
                className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                  userRole === 'PUBLIC'
                    ? 'bg-emerald-500/15 border-emerald-500 text-white'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400'
                }`}
              >
                <div>
                  <p className="font-bold">Modo Portfólio Público</p>
                  <p className="text-[10px] text-slate-400">Anonimização de estudantes ativa</p>
                </div>
                <Eye className="w-4 h-4 text-emerald-400" />
              </button>

              <button
                onClick={() => {
                  setUserRole('PAEET_ADMIN');
                  showToast('Modo Gestão Pedagógica Ativado.');
                }}
                className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                  userRole !== 'PUBLIC'
                    ? 'bg-purple-500/15 border-purple-500 text-white'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400'
                }`}
              >
                <div>
                  <p className="font-bold">Modo Gestão Privada PAEET</p>
                  <p className="text-[10px] text-slate-400">Acesso completo a fichas e RAs</p>
                </div>
                <Lock className="w-4 h-4 text-purple-400" />
              </button>
            </div>
          </div>

          {/* Reset Demo Data */}
          <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-amber-400" /> Dados de Demonstração
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Caso queira restaurar os dados simulados originais do Novotec/SEDUC-SP ou limpar modificações de teste:
            </p>

            <button
              onClick={resetDemoData}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 font-semibold text-xs border border-slate-700 transition-colors"
            >
              Restaurar Dados Padrão de Demonstração
            </button>
          </div>
        </div>
      </div>

      {/* Trilha de Auditoria e Conformidade LGPD */}
      <div className="glass-panel rounded-2xl p-6 lg:p-8 border border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              Trilha de Auditoria & Registro de Acessos (Conformidade LGPD)
            </h3>
            <p className="text-xs text-slate-400">
              Histórico rastreável de todas as ações de importação, visualização de prontuários e alterações realizadas no sistema.
            </p>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
            {auditLogs.length} Registros Auditados
          </span>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-900/90 text-slate-400 font-semibold border-b border-slate-800">
              <tr>
                <th className="py-2.5 px-3">Data e Hora</th>
                <th className="py-2.5 px-3">Usuário</th>
                <th className="py-2.5 px-3">Perfil</th>
                <th className="py-2.5 px-3">Ação Executada</th>
                <th className="py-2.5 px-3">Módulo</th>
                <th className="py-2.5 px-3">Detalhes</th>
                <th className="py-2.5 px-3">Estação / Origem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-medium">
              {auditLogs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-2.5 px-3 font-mono text-[11px] text-slate-400">{log.dataHora}</td>
                  <td className="py-2.5 px-3 font-bold text-white">{log.usuario}</td>
                  <td className="py-2.5 px-3">
                    <span className="text-[10px] px-2 py-0.5 rounded font-bold bg-slate-800 text-slate-300">
                      {log.perfil}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-blue-400 font-semibold">{log.acao}</td>
                  <td className="py-2.5 px-3 text-slate-300">{log.modulo}</td>
                  <td className="py-2.5 px-3 text-slate-300 text-[11px] max-w-xs truncate">{log.detalhes}</td>
                  <td className="py-2.5 px-3 text-slate-400 font-mono text-[10px]">{log.ipOrigem}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
