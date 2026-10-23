import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { DemoBadge } from './components/common/DemoBadge';
import { Navbar } from './components/layout/Navbar';
import { Sidebar } from './components/layout/Sidebar';
import { PageTransition } from './components/common/PageTransition';
import { EvidenceLightbox } from './components/common/EvidenceLightbox';
import { AuthModal } from './components/common/AuthModal';

// Modules
import { HeroHome } from './components/modules/HeroHome';
import { DashboardGeral } from './components/modules/DashboardGeral';
import { EstagiosBEEM } from './components/modules/EstagiosBEEM';
import { EmpresasParceiras } from './components/modules/EmpresasParceiras';
import { ItinerarioTecnico } from './components/modules/ItinerarioTecnico';
import { BuscaAtivaFrequencia } from './components/modules/BuscaAtivaFrequencia';
import { VisitasTecnicas } from './components/modules/VisitasTecnicas';
import { DesempenhoAcademico } from './components/modules/DesempenhoAcademico';
import { DiaProfissionalTI } from './components/modules/DiaProfissionalTI';
import { CertificacaoProtagonismo } from './components/modules/CertificacaoProtagonismo';
import { BibliotecaEvidencias } from './components/modules/BibliotecaEvidencias';
import { RelatoriosExportacao } from './components/modules/RelatoriosExportacao';
import { Configuracoes } from './components/modules/Configuracoes';

const MainContent: React.FC = () => {
  const { activeModule, notification, isAuthModalOpen, setIsAuthModalOpen } = useApp();

  const renderModule = () => {
    switch (activeModule) {
      case 'hero':
        return <HeroHome />;
      case 'dashboard':
        return <DashboardGeral />;
      case 'beem':
        return <EstagiosBEEM />;
      case 'empresas':
        return <EmpresasParceiras />;
      case 'itinerario':
        return <ItinerarioTecnico />;
      case 'busca-ativa':
        return <BuscaAtivaFrequencia />;
      case 'visitas':
        return <VisitasTecnicas />;
      case 'desempenho':
        return <DesempenhoAcademico />;
      case 'ti-day':
        return <DiaProfissionalTI />;
      case 'certificacao':
        return <CertificacaoProtagonismo />;
      case 'evidencias':
        return <BibliotecaEvidencias />;
      case 'relatorios':
        return <RelatoriosExportacao />;
      case 'configuracoes':
        return <Configuracoes />;
      default:
        return <HeroHome />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-navy-950 text-slate-100 font-sans relative selection:bg-blue-600 selection:text-white">
      {/* Interactive Demo Mode Banner with LGPD Toggle */}
      <DemoBadge />

      {/* Global Navbar */}
      <Navbar />

      {/* Main Container with Sidebar + Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Collapsible Sidebar */}
        <Sidebar />

        {/* Content Viewport with Smooth Motion Transitions */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-tech-mesh">
          <div className="max-w-7xl mx-auto">
            <PageTransition pageKey={activeModule}>
              {renderModule()}
            </PageTransition>
          </div>
        </main>
      </div>

      {/* Fullscreen Evidence Lightbox Modal */}
      <EvidenceLightbox />

      {/* Security & Authentication Modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />

      {/* Global Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div className="glass-panel px-4 py-3 rounded-xl border border-blue-500/40 text-xs font-semibold text-white shadow-2xl flex items-center space-x-2 bg-slate-900/95">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span>{notification}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
