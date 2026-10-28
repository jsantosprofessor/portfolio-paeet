import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  UserRole,
  PAEETProfile,
  CursoTecnico,
  Turma,
  Estudante,
  EmpresaParceira,
  TratativaHistorico,
  AcaoItinerario,
  RegistroBuscaAtiva,
  VisitaTecnica,
  Evidencia,
  Reconhecimento,
  FiltrosGlobais,
  BoletimEstudante,
  DocumentoPDF,
  ImportBatch,
  AuditLog,
  AuthUser
} from '../types';
import {
  initialProfile,
  initialCursos,
  initialTurmas,
  initialEstudantes,
  initialEmpresas,
  initialAcoesItinerario,
  initialBuscaAtiva,
  initialVisitasTecnicas,
  initialEvidencias,
  initialReconhecimentos,
  initialBoletins,
  initialDocumentosPDF,
  initialImportBatches,
  systemUsers,
  initialAuditLogs
} from '../data/mockData';
import { ExcelParseResult } from '../services/excelParser';
import { savePDFBlob, deletePDFBlob } from '../services/storageService';

interface AppContextType {
  activeModule: string;
  setActiveModule: (module: string) => void;
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  currentUser: AuthUser;
  setCurrentUser: React.Dispatch<React.SetStateAction<AuthUser>>;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  auditLogs: AuditLog[];
  addAuditLog: (log: Omit<AuditLog, 'id'>) => void;
  filtros: FiltrosGlobais;
  setFiltros: React.Dispatch<React.SetStateAction<FiltrosGlobais>>;
  profile: PAEETProfile;
  setProfile: React.Dispatch<React.SetStateAction<PAEETProfile>>;
  cursos: CursoTecnico[];
  turmas: Turma[];
  estudantes: Estudante[];
  empresas: EmpresaParceira[];
  acoesItinerario: AcaoItinerario[];
  buscaAtivaList: RegistroBuscaAtiva[];
  visitasList: VisitaTecnica[];
  evidenciasList: Evidencia[];
  reconhecimentosList: Reconhecimento[];
  boletins: BoletimEstudante[];
  documentosPDF: DocumentoPDF[];
  importBatches: ImportBatch[];
  lightboxEvidence: Evidencia | null;
  setLightboxEvidence: (ev: Evidencia | null) => void;
  notification: string | null;
  showToast: (msg: string) => void;
  isDemoMode: boolean;
  setIsDemoMode: (val: boolean) => void;
  resetDemoData: () => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (val: boolean) => void;
  // Mutations
  addEmpresa: (empresa: Omit<EmpresaParceira, 'id' | 'historicoTratativas' | 'estagiariosAtivos'>) => void;
  deleteEmpresa: (id: string) => void;
  addTratativa: (empresaId: string, tratativa: Omit<TratativaHistorico, 'id'>) => void;
  addBuscaAtiva: (registro: Omit<RegistroBuscaAtiva, 'id'>) => void;
  updateBuscaAtiva: (id: string, registro: Partial<RegistroBuscaAtiva>) => void;
  deleteBuscaAtiva: (id: string) => void;
  addEvidencia: (ev: Omit<Evidencia, 'id'>) => void;
  addReconhecimento: (rec: Omit<Reconhecimento, 'id' | 'certificadoCodigo'>) => void;
  importExcelBatch: (result: ExcelParseResult) => void;
  uploadStudentPDF: (
    estudanteId: string,
    file: File,
    meta: { titulo: string; turma: string; bimestre: string; observacoes?: string }
  ) => Promise<void>;
  deleteStudentPDF: (pdfId: string) => Promise<void>;
  updateObservacaoPedagogica: (estudanteId: string, obs: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeModule, setActiveModule] = useState<string>('hero');
  const [userRole, setUserRole] = useState<UserRole>('PUBLIC');
  const [currentUser, setCurrentUser] = useState<AuthUser>(systemUsers[0]);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>(() => {
    const saved = localStorage.getItem('paeet_audit_logs');
    return saved ? JSON.parse(saved) : initialAuditLogs;
  });
  const [isDemoMode, setIsDemoMode] = useState<boolean>(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [lightboxEvidence, setLightboxEvidence] = useState<Evidencia | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  const [filtros, setFiltros] = useState<FiltrosGlobais>({
    anoLetivo: 2025,
    bimestre: 'Todos',
    cursoId: 'todos',
    turmaId: 'todas'
  });

  // State entities initialized from mockData with persistence in localStorage if available
  const [profile, setProfile] = useState<PAEETProfile>(() => {
    const saved = localStorage.getItem('paeet_profile_v2');
    return saved ? JSON.parse(saved) : initialProfile;
  });

  const [cursos] = useState<CursoTecnico[]>(initialCursos);
  const [turmas] = useState<Turma[]>(initialTurmas);

  const [estudantes, setEstudantes] = useState<Estudante[]>(() => {
    const saved = localStorage.getItem('paeet_estudantes_v3');
    return saved ? JSON.parse(saved) : initialEstudantes;
  });

  const [empresas, setEmpresas] = useState<EmpresaParceira[]>(() => {
    const saved = localStorage.getItem('paeet_empresas_v2');
    return saved ? JSON.parse(saved) : initialEmpresas;
  });

  const [acoesItinerario, setAcoesItinerario] = useState<AcaoItinerario[]>(() => {
    const saved = localStorage.getItem('paeet_itinerario');
    return saved ? JSON.parse(saved) : initialAcoesItinerario;
  });

  const [buscaAtivaList, setBuscaAtivaList] = useState<RegistroBuscaAtiva[]>(() => {
    const saved = localStorage.getItem('paeet_busca_ativa_v3');
    return saved ? JSON.parse(saved) : initialBuscaAtiva;
  });

  const [visitasList, setVisitasList] = useState<VisitaTecnica[]>(() => {
    const saved = localStorage.getItem('paeet_visitas_v2');
    return saved ? JSON.parse(saved) : initialVisitasTecnicas;
  });

  const [evidenciasList, setEvidenciasList] = useState<Evidencia[]>(() => {
    const saved = localStorage.getItem('paeet_evidencias_v3');
    return saved ? JSON.parse(saved) : initialEvidencias;
  });

  const [reconhecimentosList, setReconhecimentosList] = useState<Reconhecimento[]>(() => {
    const saved = localStorage.getItem('paeet_reconhecimentos');
    return saved ? JSON.parse(saved) : initialReconhecimentos;
  });

  const [boletins, setBoletins] = useState<BoletimEstudante[]>(() => {
    const saved = localStorage.getItem('paeet_boletins_v2');
    return saved ? JSON.parse(saved) : initialBoletins;
  });

  const [documentosPDF, setDocumentosPDF] = useState<DocumentoPDF[]>(() => {
    const saved = localStorage.getItem('paeet_documentos_pdf');
    return saved ? JSON.parse(saved) : initialDocumentosPDF;
  });

  const [importBatches, setImportBatches] = useState<ImportBatch[]>(() => {
    const saved = localStorage.getItem('paeet_import_batches');
    return saved ? JSON.parse(saved) : initialImportBatches;
  });

  // Toast Helper
  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 4500);
  };

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('paeet_profile_v2', JSON.stringify(profile));
  }, [profile]);
  useEffect(() => {
    localStorage.setItem('paeet_estudantes_v3', JSON.stringify(estudantes));
  }, [estudantes]);
  useEffect(() => {
    localStorage.setItem('paeet_empresas_v2', JSON.stringify(empresas));
  }, [empresas]);
  useEffect(() => {
    localStorage.setItem('paeet_busca_ativa_v3', JSON.stringify(buscaAtivaList));
  }, [buscaAtivaList]);
  useEffect(() => {
    localStorage.setItem('paeet_visitas_v2', JSON.stringify(visitasList));
  }, [visitasList]);
  useEffect(() => {
    localStorage.setItem('paeet_evidencias_v3', JSON.stringify(evidenciasList));
  }, [evidenciasList]);
  useEffect(() => {
    localStorage.setItem('paeet_reconhecimentos', JSON.stringify(reconhecimentosList));
  }, [reconhecimentosList]);
  useEffect(() => {
    localStorage.setItem('paeet_boletins_v2', JSON.stringify(boletins));
  }, [boletins]);
  useEffect(() => {
    localStorage.setItem('paeet_documentos_pdf', JSON.stringify(documentosPDF));
  }, [documentosPDF]);
  useEffect(() => {
    localStorage.setItem('paeet_import_batches', JSON.stringify(importBatches));
  }, [importBatches]);
  useEffect(() => {
    localStorage.setItem('paeet_audit_logs', JSON.stringify(auditLogs));
  }, [auditLogs]);

  const addAuditLog = (log: Omit<AuditLog, 'id'>) => {
    const newLog: AuditLog = {
      ...log,
      id: `log-${Date.now()}`
    };
    setAuditLogs(prev => [newLog, ...prev]);
  };

  const resetDemoData = () => {
    setProfile(initialProfile);
    setEstudantes(initialEstudantes);
    setEmpresas(initialEmpresas);
    setAcoesItinerario(initialAcoesItinerario);
    setBuscaAtivaList(initialBuscaAtiva);
    setVisitasList(initialVisitasTecnicas);
    setEvidenciasList(initialEvidencias);
    setReconhecimentosList(initialReconhecimentos);
    setBoletins(initialBoletins);
    setDocumentosPDF(initialDocumentosPDF);
    setImportBatches(initialImportBatches);
    setAuditLogs(initialAuditLogs);
    setCurrentUser(systemUsers[0]);
    localStorage.clear();
    showToast('Dados de demonstração restaurados com sucesso.');
  };

  const addEmpresa = (data: Omit<EmpresaParceira, 'id' | 'historicoTratativas' | 'estagiariosAtivos'>) => {
    const nova: EmpresaParceira = {
      ...data,
      id: `emp-${Date.now()}`,
      estagiariosAtivos: 0,
      historicoTratativas: [
        {
          id: `tr-${Date.now()}`,
          data: new Date().toISOString().split('T')[0],
          tipo: data.tipoContato === 'Telefone' ? 'Ligação' : data.tipoContato === 'Visita Presencial' ? 'Visita' : data.tipoContato === 'Reunião Online' ? 'Reunião' : data.tipoContato,
          descricao: `Primeiro contato registrado: ${data.estrategiaAdotada}`,
          responsavel: profile.nome,
          statusResultado: 'Positivo'
        }
      ]
    };
    setEmpresas(prev => [nova, ...prev]);
    showToast(`Empresa "${nova.nome}" cadastrada com sucesso!`);
  };

  const deleteEmpresa = (id: string) => {
    setEmpresas(prev => prev.filter(emp => emp.id !== id));
    showToast('Empresa removida com sucesso.');
  };

  const addTratativa = (empresaId: string, tratativa: Omit<TratativaHistorico, 'id'>) => {
    const novaTratativa: TratativaHistorico = {
      ...tratativa,
      id: `tr-${Date.now()}`
    };
    setEmpresas(prev => prev.map(emp => {
      if (emp.id === empresaId) {
        return {
          ...emp,
          historicoTratativas: [novaTratativa, ...emp.historicoTratativas]
        };
      }
      return emp;
    }));
    showToast('Nova tratativa registrada no histórico da empresa.');
  };

  const addBuscaAtiva = (registro: Omit<RegistroBuscaAtiva, 'id'>) => {
    const novo: RegistroBuscaAtiva = {
      ...registro,
      id: `ba-${Date.now()}`
    };
    setBuscaAtivaList(prev => [novo, ...prev]);
    showToast('Ação de Busca Ativa registrada com sucesso.');
  };

  const updateBuscaAtiva = (id: string, registro: Partial<RegistroBuscaAtiva>) => {
    setBuscaAtivaList(prev => prev.map(item => item.id === id ? { ...item, ...registro } : item));
    showToast('Ação de Busca Ativa atualizada com sucesso.');
  };

  const deleteBuscaAtiva = (id: string) => {
    setBuscaAtivaList(prev => prev.filter(item => item.id !== id));
    showToast('Ação de Busca Ativa removida com sucesso.');
  };

  const addEvidencia = (ev: Omit<Evidencia, 'id'>) => {
    const nova: Evidencia = {
      ...ev,
      id: `ev-${Date.now()}`
    };
    setEvidenciasList(prev => [nova, ...prev]);
    showToast('Nova evidência adicionada à biblioteca com sucesso.');
  };

  const addReconhecimento = (rec: Omit<Reconhecimento, 'id' | 'certificadoCodigo'>) => {
    const ano = new Date().getFullYear();
    const count = reconhecimentosList.length + 1;
    const codigo = `SEDUC-PAEET-${ano}-${String(count).padStart(3, '0')}`;
    const novo: Reconhecimento = {
      ...rec,
      id: `rec-${Date.now()}`,
      certificadoCodigo: codigo
    };
    setReconhecimentosList(prev => [novo, ...prev]);
    showToast(`Certificado gerado com sucesso para ${rec.nomeEstudante}!`);
  };

  // Excel Grade Import Integration
  const importExcelBatch = (result: ExcelParseResult) => {
    // 1. Update/merge boletins
    const updatedBoletinsMap = new Map(boletins.map(b => [b.nome, b]));
    result.boletinsProcessados.forEach(b => {
      updatedBoletinsMap.set(b.nome, b);
    });
    setBoletins(Array.from(updatedBoletinsMap.values()));

    // 2. Update/merge estudantes
    const existingStudentMap = new Map(estudantes.map(s => [s.nomeCompleto, s]));
    result.estudantesAtualizados.forEach(partial => {
      if (partial.nomeCompleto && existingStudentMap.has(partial.nomeCompleto)) {
        const current = existingStudentMap.get(partial.nomeCompleto)!;
        existingStudentMap.set(partial.nomeCompleto, {
          ...current,
          ...partial
        });
      } else if (partial.nomeCompleto) {
        const newStudent: Estudante = {
          id: partial.id || `est-${Date.now()}`,
          nomeCompleto: partial.nomeCompleto,
          nomeAnonimizado: partial.nomeAnonimizado || 'Estudante Anonimizado',
          ra: partial.ra || 'RA-000000 SP',
          turmaId: partial.turmaId || '2a-ds',
          cursoId: partial.cursoId || 'ds',
          statusMatricula: partial.statusMatricula || 'Ativo',
          frequenciaGeral: partial.frequenciaGeral || 90,
          situacaoAcademica: partial.situacaoAcademica || 'Estável',
          mediaGeral: partial.mediaGeral || 8.0,
          estagioStatus: 'Não Iniciado'
        };
        existingStudentMap.set(partial.nomeCompleto, newStudent);
      }
    });
    setEstudantes(Array.from(existingStudentMap.values()));

    // 3. Register batch
    const newBatch: ImportBatch = {
      id: `batch-${Date.now()}`,
      data: new Date().toISOString().split('T')[0],
      arquivoOrigem: result.fileName,
      tipo: 'Excel',
      totalAlunos: result.totalAlunosUnicos,
      totalDisciplinas: result.totalLinhasLidas,
      emProgressao: result.alunosEmProgressao,
      emRegressao: result.alunosEmRegressao,
      status: 'Homologado no Sistema'
    };
    setImportBatches(prev => [newBatch, ...prev]);

    showToast(`Planilha ${result.fileName} homologada! ${result.totalAlunosUnicos} estudantes sincronizados com sucesso.`);
  };

  // Upload and persist student PDF
  const uploadStudentPDF = async (
    estudanteId: string,
    file: File,
    meta: { titulo: string; turma: string; bimestre: string; observacoes?: string }
  ) => {
    const pdfId = `pdf-${Date.now()}`;
    const estudante = estudantes.find(e => e.id === estudanteId);
    const nomeEstudante = estudante ? estudante.nomeCompleto : 'Estudante Identificado';

    // Store Blob in IndexedDB
    await savePDFBlob(pdfId, file, {
      estudanteId,
      nomeEstudante,
      titulo: meta.titulo || file.name,
      turma: meta.turma,
      bimestre: meta.bimestre
    });

    // Create an ObjectURL for direct in-memory preview
    const urlBlob = URL.createObjectURL(file);

    const doc: DocumentoPDF = {
      id: pdfId,
      estudanteId,
      nomeEstudante,
      turma: meta.turma,
      titulo: meta.titulo || file.name,
      dataUpload: new Date().toISOString().split('T')[0],
      tamanhoBytes: file.size,
      tamanhoFormatado: `${Math.round(file.size / 1024)} KB`,
      bimestreReferencia: meta.bimestre,
      urlBlob,
      observacoesPedagogicas: meta.observacoes || 'Boletim individual importado e validado perante a coordenação.',
      statusAnalise: 'Revisado e Aprovado'
    };

    setDocumentosPDF(prev => [doc, ...prev]);
    showToast(`Boletim PDF "${doc.titulo}" associado com sucesso a ${nomeEstudante}!`);
  };

  const deleteStudentPDF = async (pdfId: string) => {
    await deletePDFBlob(pdfId);
    setDocumentosPDF(prev => prev.filter(p => p.id !== pdfId));
    showToast('Documento PDF removido com sucesso.');
  };

  const updateObservacaoPedagogica = (estudanteId: string, obs: string) => {
    setBoletins(prev => prev.map(b => {
      if (b.estudanteId === estudanteId) {
        return { ...b, intervencoesSugeridas: obs };
      }
      return b;
    }));
    showToast('Anotação pedagógica salva no prontuário do aluno.');
  };

  return (
    <AppContext.Provider
      value={{
        activeModule,
        setActiveModule,
        userRole,
        setUserRole,
        currentUser,
        setCurrentUser,
        isAuthModalOpen,
        setIsAuthModalOpen,
        auditLogs,
        addAuditLog,
        filtros,
        setFiltros,
        profile,
        setProfile,
        cursos,
        turmas,
        estudantes,
        empresas,
        acoesItinerario,
        buscaAtivaList,
        visitasList,
        evidenciasList,
        reconhecimentosList,
        boletins,
        documentosPDF,
        importBatches,
        lightboxEvidence,
        setLightboxEvidence,
        notification,
        showToast,
        isDemoMode,
        setIsDemoMode,
        resetDemoData,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        addEmpresa,
        deleteEmpresa,
        addTratativa,
        addBuscaAtiva,
        updateBuscaAtiva,
        deleteBuscaAtiva,
        addEvidencia,
        addReconhecimento,
        importExcelBatch,
        uploadStudentPDF,
        deleteStudentPDF,
        updateObservacaoPedagogica
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
