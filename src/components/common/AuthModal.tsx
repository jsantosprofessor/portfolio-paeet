import React, { useState } from 'react';
import {
  Lock,
  UserCheck,
  ShieldCheck,
  GraduationCap,
  X,
  KeyRound,
  ArrowRight,
  Sparkles,
  Building2,
  Eye
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { systemUsers } from '../../data/mockData';
import { AuthUser } from '../../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { currentUser, setCurrentUser, setUserRole, showToast, addAuditLog } = useApp();
  const [selectedUser, setSelectedUser] = useState<AuthUser>(
    systemUsers.find(u => u.perfil === 'PAEET_ADMIN') || systemUsers[0]
  );
  const [password, setPassword] = useState('••••••••');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentUser(selectedUser);
    setUserRole(selectedUser.perfil);

    addAuditLog({
      dataHora: new Date().toISOString().replace('T', ' ').substring(0, 19),
      usuario: selectedUser.nome,
      perfil: selectedUser.perfil,
      acao: 'Autenticação no Sistema PAEET',
      modulo: 'Segurança & LGPD',
      detalhes: `Sessão iniciada como ${selectedUser.cargo}.`,
      ipOrigem: '10.67.69.161 (Rede Escolar SEDUC-SP)'
    });

    showToast(`Bem-vindo(a), ${selectedUser.nome}! Perfil: ${selectedUser.cargo}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div
        className="glass-panel w-full max-w-lg rounded-3xl border border-slate-700/80 shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 p-[1.5px] flex items-center justify-center shadow-lg shadow-blue-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Lock className="w-5 h-5 text-blue-400" />
              </div>
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">
                Autenticação de Acesso — SEDUC-SP
              </h3>
              <p className="text-xs text-slate-400">
                Acesso seguro e controle de privacidade LGPD
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* User Role Selector Cards */}
        <div className="space-y-3">
          <label className="text-xs font-semibold text-slate-400 block">
            Selecione o Perfil de Atuação:
          </label>

          <div className="space-y-2">
            {systemUsers.map((user) => {
              const isSelected = selectedUser.id === user.id;
              return (
                <div
                  key={user.id}
                  onClick={() => setSelectedUser(user)}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-blue-600/15 border-blue-500 shadow-lg shadow-blue-500/10'
                      : 'bg-slate-900/60 hover:bg-slate-800/60 border-slate-800'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={user.avatarUrl}
                      alt={user.nome}
                      className="w-10 h-10 rounded-xl object-cover border border-slate-700"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-white">{user.nome}</h4>
                      <p className="text-[11px] text-blue-400 font-medium">{user.cargo}</p>
                      <p className="text-[10px] text-slate-400">{user.email}</p>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                      user.perfil === 'PAEET_ADMIN'
                        ? 'bg-purple-500/10 text-purple-300 border border-purple-500/20'
                        : user.perfil === 'GESTAO_ESCOLAR'
                        ? 'bg-blue-500/10 text-blue-300 border border-blue-500/20'
                        : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                    }`}
                  >
                    {user.perfil === 'PAEET_ADMIN'
                      ? 'Gestor Total'
                      : user.perfil === 'GESTAO_ESCOLAR'
                      ? 'Coordenação'
                      : 'Público (LGPD)'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Credentials Form */}
        <form onSubmit={handleLogin} className="space-y-4 pt-1 text-xs">
          <div>
            <label className="text-slate-400 font-medium">E-mail Institucional (@educacao.sp.gov.br)</label>
            <input
              type="text"
              readOnly
              value={selectedUser.email}
              className="w-full mt-1 bg-slate-950 text-slate-300 rounded-xl p-2.5 border border-slate-800 font-mono"
            />
          </div>

          <div>
            <label className="text-slate-400 font-medium">Senha / Chave de Acesso Digital</label>
            <div className="relative mt-1">
              <KeyRound className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-900 text-slate-200 rounded-xl pl-9 pr-3 py-2.5 border border-slate-800 focus:outline-none focus:border-blue-500"
              />
            </div>
            <p className="text-[10px] text-slate-500 mt-1">
              Autenticação integrada com os padrões de segurança institucional da SEDUC-SP.
            </p>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <span className="text-[10px] text-slate-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Criptografia Ponta a Ponta
            </span>

            <button
              type="submit"
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold shadow-lg shadow-blue-500/20 transition-all hover:scale-105"
            >
              <span>Acessar Painel</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
