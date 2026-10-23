import React, { useState } from 'react';
import {
  Search,
  Bell,
  GraduationCap,
  Menu,
  X
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Navbar: React.FC = () => {
  const {
    profile,
    currentUser,
    setIsAuthModalOpen,
    setActiveModule,
    showToast,
    isMobileMenuOpen,
    setIsMobileMenuOpen
  } = useApp();
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <header className="h-16 border-b border-slate-800 bg-navy-900/80 backdrop-blur-xl sticky top-0 z-40 px-4 lg:px-8 flex items-center justify-between">
      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors mr-2"
        aria-label="Abrir menu"
      >
        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Brand & PAEET identity */}
      <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveModule('hero')}>
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-[1.5px] flex items-center justify-center shadow-lg shadow-blue-500/20">
          <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-blue-400" />
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-2">
            <span className="font-extrabold text-sm lg:text-base text-white tracking-tight">
              PAEET <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">DIGITAL</span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
              SEDUC-SP
            </span>
          </div>
          <p className="text-[11px] text-slate-400 font-medium hidden sm:block truncate max-w-[280px]">
            {profile.unidadeEscolar}
          </p>
        </div>
      </div>

      {/* Center: Search / Quick Nav */}
      <div className="hidden md:flex items-center relative max-w-xs w-full mx-4">
        <Search className="w-4 h-4 text-slate-400 absolute left-3" />
        <input
          type="text"
          placeholder="Buscar estudantes, empresas, ações..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-slate-900/80 border border-slate-800 rounded-lg pl-9 pr-4 py-1.5 text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && searchTerm) {
              setActiveModule('evidencias');
              showToast(`Buscando por: "${searchTerm}" na biblioteca de evidências...`);
            }
          }}
        />
      </div>

      {/* Right Action Icons & Profile Card */}
      <div className="flex items-center space-x-2 lg:space-x-3 ml-auto">
        {/* Quick link to Certificate generator */}
        <button
          onClick={() => setActiveModule('certificacao')}
          className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 transition-all"
        >
          <span>Emitir Certificado</span>
        </button>

        {/* Global Notifications Indicator */}
        <button
          onClick={() => showToast('Sistema sincronizado com as diretrizes do Novotec / SEDUC-SP 2025.')}
          className="relative p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
          title="Notificações do Sistema"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-blue-500" />
        </button>

        {/* Auth / Profile Pill */}
        <div
          onClick={() => setIsAuthModalOpen(true)}
          className="flex items-center space-x-2 pl-2 pr-3 py-1 rounded-xl bg-slate-800/70 hover:bg-slate-800 border border-slate-700/80 cursor-pointer transition-colors group"
          title="Clique para alternar o usuário ou autenticar credencial SEDUC-SP"
        >
          <img
            src={currentUser.avatarUrl}
            alt={currentUser.nome}
            className="w-7 h-7 rounded-lg object-cover border border-blue-500/40"
          />
          <div className="text-left hidden lg:block">
            <p className="text-xs font-semibold text-slate-200 leading-none group-hover:text-blue-400 transition-colors">
              {currentUser.nome.split(' ')[0]} {currentUser.nome.split(' ')[1] || ''}
            </p>
            <p className="text-[10px] text-slate-400 leading-tight mt-0.5">
              {currentUser.perfil === 'PAEET_ADMIN' ? 'PAEET Titular' : currentUser.perfil === 'GESTAO_ESCOLAR' ? 'Coordenação' : 'Modo Público'}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
