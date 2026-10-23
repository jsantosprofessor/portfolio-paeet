import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  LayoutDashboard,
  Briefcase,
  Building2,
  Compass,
  UserCheck,
  Plane,
  LineChart,
  Cpu,
  Award,
  FolderLock,
  FileSpreadsheet,
  Settings,
  ChevronLeft,
  ChevronRight,
  ShieldAlert,
  X
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Sidebar: React.FC = () => {
  const {
    activeModule,
    setActiveModule,
    empresas,
    buscaAtivaList,
    reconhecimentosList,
    isMobileMenuOpen,
    setIsMobileMenuOpen
  } = useApp();
  const [collapsed, setCollapsed] = useState(false);

  // Close mobile drawer on module change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [activeModule]);

  const navItems = [
    {
      id: 'hero',
      label: 'Início & Apresentação',
      shortLabel: 'Início',
      icon: Sparkles,
      color: 'text-blue-400',
      badge: null
    },
    {
      id: 'dashboard',
      label: 'Dashboard Geral',
      shortLabel: 'Geral',
      icon: LayoutDashboard,
      color: 'text-indigo-400',
      badge: 'Consolidado'
    },
    {
      id: 'beem',
      label: 'Estágios BEEM',
      shortLabel: 'BEEM',
      icon: Briefcase,
      color: 'text-emerald-400',
      badge: '84 Inseridos'
    },
    {
      id: 'empresas',
      label: 'Empresas Parceiras',
      shortLabel: 'Empresas',
      icon: Building2,
      color: 'text-blue-400',
      badge: `${empresas.length}`
    },
    {
      id: 'itinerario',
      label: 'Itinerário Técnico (1ºs Anos)',
      shortLabel: 'Itinerário',
      icon: Compass,
      color: 'text-cyan-400',
      badge: null
    },
    {
      id: 'busca-ativa',
      label: 'Busca Ativa & Frequência',
      shortLabel: 'Frequência',
      icon: UserCheck,
      color: 'text-amber-400',
      badge: `${buscaAtivaList.length}`
    },
    {
      id: 'visitas',
      label: 'Visitas Técnicas & CAVEX',
      shortLabel: 'Visitas',
      icon: Plane,
      color: 'text-rose-400',
      badge: 'CAVEX'
    },
    {
      id: 'desempenho',
      label: 'Desempenho Acadêmico',
      shortLabel: 'Notas',
      icon: LineChart,
      color: 'text-purple-400',
      badge: 'Boletins'
    },
    {
      id: 'ti-day',
      label: 'Dia do Profissional de TI',
      shortLabel: 'TI Day',
      icon: Cpu,
      color: 'text-cyan-400',
      badge: '19 Out'
    },
    {
      id: 'certificacao',
      label: 'Certificação & Protagonismo',
      shortLabel: 'Mérito',
      icon: Award,
      color: 'text-amber-400',
      badge: `${reconhecimentosList.length}`
    },
    {
      id: 'evidencias',
      label: 'Biblioteca de Evidências',
      shortLabel: 'Evidências',
      icon: FolderLock,
      color: 'text-indigo-400',
      badge: 'LGPD'
    },
    {
      id: 'relatorios',
      label: 'Relatórios & Exportação',
      shortLabel: 'Relatórios',
      icon: FileSpreadsheet,
      color: 'text-emerald-400',
      badge: 'PDF/CSV'
    },
    {
      id: 'configuracoes',
      label: 'Configurações do PAEET',
      shortLabel: 'Ajustes',
      icon: Settings,
      color: 'text-slate-400',
      badge: null
    }
  ];

  const NavList = () => (
    <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeModule === item.id;

        return (
          <button
            key={item.id}
            onClick={() => setActiveModule(item.id)}
            className={`w-full flex items-center rounded-xl px-3 py-2.5 text-xs font-semibold transition-all relative group ${
              isActive
                ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white border border-blue-500/40 shadow-lg shadow-blue-500/10'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-transparent'
            }`}
            title={collapsed ? item.label : undefined}
          >
            {/* Active left indicator */}
            {isActive && (
              <div className="absolute left-0 top-2 bottom-2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-r-full" />
            )}

            <div className={`flex items-center justify-center ${collapsed ? 'mx-auto' : 'mr-3'}`}>
              <Icon
                className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                  isActive ? item.color : 'text-slate-400 group-hover:text-slate-200'
                }`}
              />
            </div>

            {!collapsed && (
              <div className="flex-1 flex items-center justify-between text-left truncate">
                <span className="truncate">{item.label}</span>
                {item.badge && (
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ml-2 shrink-0 ${
                      isActive
                        ? 'bg-blue-500/30 text-blue-300 border border-blue-400/30'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </div>
            )}
          </button>
        );
      })}
    </div>
  );

  const BottomInfo = () => (
    <div className="p-3 m-3 rounded-xl bg-slate-900/80 border border-slate-800/80 text-[11px] text-slate-400">
      <div className="flex items-center space-x-1.5 text-slate-300 font-semibold mb-1">
        <ShieldAlert className="w-3.5 h-3.5 text-blue-400" />
        <span>Diretrizes SEDUC-SP</span>
      </div>
      <p className="leading-tight text-[10px] text-slate-400">
        Resolução SEDUC — Educação Profissional e Acompanhamento do PAEET.
      </p>
    </div>
  );

  return (
    <>
      {/* ── Desktop Sidebar ─────────────────────────────────────── */}
      <aside
        className={`relative hidden lg:flex transition-all duration-300 ease-in-out border-r border-slate-800 bg-navy-950/70 backdrop-blur-xl flex-col z-20 ${
          collapsed ? 'w-20' : 'w-72'
        }`}
      >
        {/* Collapse Button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-6 w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-colors z-30 shadow-md"
          title={collapsed ? 'Expandir Menu' : 'Recolher Menu'}
        >
          {collapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
        </button>

        <NavList />

        {!collapsed && <BottomInfo />}
      </aside>

      {/* ── Mobile Drawer Overlay ────────────────────────────────── */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Fechar menu"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Drawer Panel */}
          <aside
            className="absolute left-0 top-0 bottom-0 w-72 bg-navy-950 border-r border-slate-800 flex flex-col shadow-2xl shadow-black/60"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800">
              <span className="font-extrabold text-sm text-white tracking-tight">
                PAEET <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">DIGITAL</span>
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <NavList />
            <BottomInfo />
          </aside>
        </div>
      )}
    </>
  );
};
