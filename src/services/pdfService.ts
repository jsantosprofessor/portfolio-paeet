/**
 * pdfService.ts
 * Serviço de geração de PDF usando jsPDF + html2canvas.
 * Exporta relatórios SEDUC-SP e certificados institucionais.
 */
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export interface PDFExportOptions {
  filename: string;
  orientation?: 'portrait' | 'landscape';
  /** Título exibido no toast de progresso */
  progressLabel?: string;
  /** Escala de renderização (padrão 2 = retina) */
  scale?: number;
}

/**
 * Captura um elemento DOM e salva como PDF.
 * O elemento não precisa estar visível em tela — use um elemento renderizado fora do fluxo.
 */
export async function exportElementToPDF(
  elementId: string,
  options: PDFExportOptions
): Promise<void> {
  const element = document.getElementById(elementId);
  if (!element) throw new Error(`Elemento #${elementId} não encontrado no DOM.`);

  const scale = options.scale ?? 2;

  const canvas = await html2canvas(element, {
    scale,
    useCORS: true,
    backgroundColor: '#ffffff',
    logging: false,
  });

  const imgData = canvas.toDataURL('image/png', 1.0);
  const orientation = options.orientation ?? 'portrait';

  const pdf = new jsPDF({
    orientation,
    unit: 'mm',
    format: 'a4',
    compress: true,
  });

  const pageW = pdf.internal.pageSize.getWidth();
  const pageH = pdf.internal.pageSize.getHeight();

  const imgW = canvas.width;
  const imgH = canvas.height;
  const ratio = Math.min(pageW / imgW, pageH / imgH);

  const scaledW = imgW * ratio;
  const scaledH = imgH * ratio;
  const offsetX = (pageW - scaledW) / 2;
  const offsetY = (pageH - scaledH) / 2;

  pdf.addImage(imgData, 'PNG', offsetX, offsetY, scaledW, scaledH);
  pdf.save(options.filename);
}

/**
 * Gera PDF puramente em jsPDF (sem captura de tela).
 * Mais leve e rápido para relatórios tabulares padronizados.
 */
export function generateRelatorioExecutivoPDF(data: {
  nomeDocente: string;
  cargo: string;
  registro: string;
  unidade: string;
  diretoria: string;
  cidade: string;
  anoLetivo: number;
  bimestre: string;
  estudantes: number;
  beem: number;
  empresas: number;
  frequencia: string;
  buscaAtiva: number;
  visitas: number;
  reconhecimentos: number;
}): void {
  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4', compress: true });

  const L = 20;  // left margin
  const R = 190; // right boundary
  const W = R - L;

  // ── Cabeçalho institucional ─────────────────────────────────
  pdf.setFillColor(7, 10, 18);      // #070A12 Deep Navy
  pdf.rect(0, 0, 210, 36, 'F');

  // Linha de destaque azul
  pdf.setFillColor(59, 130, 246);   // #3B82F6 Tech Blue
  pdf.rect(0, 33, 210, 3, 'F');

  pdf.setTextColor(255, 255, 255);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(7);
  pdf.text('SECRETARIA DA EDUCAÇÃO DO ESTADO DE SÃO PAULO — SEDUC-SP', L, 10);
  pdf.text('PROGRAMA NOVOTEC / ITINERÁRIO DE FORMAÇÃO TÉCNICA E PROFISSIONAL', L, 16);

  pdf.setFontSize(13);
  pdf.text('RELATÓRIO CONSOLIDADO DE ATUAÇÃO E RESULTADOS DO PAEET', L, 26);

  // ── Dados da unidade ────────────────────────────────────────
  let y = 46;
  pdf.setTextColor(30, 30, 30);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(9);

  const infoLeft = [
    ['Docente Responsável:', data.nomeDocente],
    ['Cargo:', data.cargo],
    ['Registro Funcional:', data.registro],
  ];
  const infoRight = [
    ['Unidade Escolar:', data.unidade],
    ['Diretoria de Ensino:', data.diretoria],
    ['Ano Letivo / Período:', `${data.anoLetivo} — ${data.bimestre}`],
  ];

  infoLeft.forEach(([label, value], i) => {
    pdf.setFont('helvetica', 'bold');
    pdf.text(label, L, y + i * 7);
    pdf.setFont('helvetica', 'normal');
    pdf.text(value, L + 48, y + i * 7);
  });
  infoRight.forEach(([label, value], i) => {
    pdf.setFont('helvetica', 'bold');
    pdf.text(label, 112, y + i * 7);
    pdf.setFont('helvetica', 'normal');
    pdf.text(value, 112 + 38, y + i * 7);
  });

  // ── Linha divisória ─────────────────────────────────────────
  y += 28;
  pdf.setDrawColor(200, 200, 200);
  pdf.setLineWidth(0.3);
  pdf.line(L, y, R, y);
  y += 8;

  // ── 1. Resumo Executivo ─────────────────────────────────────
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(10);
  pdf.setTextColor(16, 185, 129);  // Emerald
  pdf.text('1. RESUMO EXECUTIVO DAS AÇÕES DESENVOLVIDAS', L, y);
  y += 7;
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(8.5);
  pdf.setTextColor(40, 40, 40);

  const resumo =
    `O presente documento consolida os registros pedagógicos, ações de articulação com o setor produtivo, ` +
    `indicadores de frequência escolar e o acompanhamento do rendimento dos estudantes matriculados nos cursos técnicos ` +
    `da unidade escolar ao longo do ano letivo de ${data.anoLetivo}. As estratégias adotadas pelo PAEET tiveram como ` +
    `foco a redução da infrequência escolar, a ampliação dos contratos de estágio via Programa BEEM e a promoção do protagonismo juvenil.`;

  const linhas = pdf.splitTextToSize(resumo, W);
  pdf.text(linhas, L, y);
  y += linhas.length * 5 + 6;

  // ── 2. Indicadores Quantitativos ────────────────────────────
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(10);
  pdf.setTextColor(16, 185, 129);
  pdf.text('2. MATRIZ DE INDICADORES QUANTITATIVOS E METAS', L, y);
  y += 7;

  // Cabeçalho da tabela
  pdf.setFillColor(15, 23, 42);     // Slate-900
  pdf.rect(L, y - 4, W, 8, 'F');
  pdf.setTextColor(148, 163, 184);  // Slate-400
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(8);
  pdf.text('Indicador de Gestão', L + 2, y + 1);
  pdf.text('Meta', L + 100, y + 1);
  pdf.text('Realizado', L + 120, y + 1);
  pdf.text('Status', L + 148, y + 1);
  y += 8;

  const indicadores = [
    ['Estudantes Acompanhados', '300', `${data.estudantes}`, 'Superada'],
    ['Estudantes no BEEM (Bolsa Estágio)', '70', `${data.beem}`, 'Superada (+20%)'],
    ['Empresas Parceiras Mapeadas', '25', `${data.empresas}`, 'Superada'],
    ['Frequência Média Geral', '85,0%', data.frequencia, 'Meta Mantida'],
    ['Atendimentos Busca Ativa', '50', `${data.buscaAtiva}`, '100% Protocolados'],
    ['Visitas Técnicas Homologadas', '8', `${data.visitas} (incl. CAVEX)`, 'Superada'],
    ['Certificados de Protagonismo Emitidos', '20', `${data.reconhecimentos}`, 'Superada'],
  ];

  indicadores.forEach(([ind, meta, result, status], i) => {
    const rowY = y + i * 8;
    if (i % 2 === 0) {
      pdf.setFillColor(248, 250, 252);
      pdf.rect(L, rowY - 4, W, 8, 'F');
    }
    pdf.setTextColor(30, 30, 30);
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(8);
    pdf.text(ind, L + 2, rowY + 1);
    pdf.text(meta, L + 100, rowY + 1);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(16, 185, 129);
    pdf.text(result, L + 120, rowY + 1);
    pdf.setTextColor(16, 185, 129);
    pdf.text(status, L + 148, rowY + 1);
  });

  y += indicadores.length * 8 + 10;
  pdf.setDrawColor(200, 200, 200);
  pdf.line(L, y, R, y);
  y += 8;

  // ── 3. Observações e encaminhamentos ───────────────────────
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(10);
  pdf.setTextColor(16, 185, 129);
  pdf.text('3. OBSERVAÇÕES E ENCAMINHAMENTOS', L, y);
  y += 7;
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(8.5);
  pdf.setTextColor(40, 40, 40);
  const obs =
    'Recomenda-se a continuidade das ações de busca ativa, o fortalecimento dos convênios com empresas parceiras e ' +
    'a implementação de novos itinerários técnicos para ampliar a oferta de vagas de estágio no próximo ano letivo.';
  const obsLines = pdf.splitTextToSize(obs, W);
  pdf.text(obsLines, L, y);
  y += obsLines.length * 5 + 16;

  // ── Rodapé: assinaturas ─────────────────────────────────────
  const assinY = 265;
  pdf.setDrawColor(150, 150, 150);
  pdf.line(L, assinY, L + 70, assinY);
  pdf.line(R - 70, assinY, R, assinY);

  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(8);
  pdf.setTextColor(30, 30, 30);
  pdf.text(data.nomeDocente, L, assinY + 5);
  pdf.setFont('helvetica', 'normal');
  pdf.text(data.cargo, L, assinY + 10);
  pdf.text(data.registro, L, assinY + 15);

  pdf.setFont('helvetica', 'bold');
  pdf.text('Direção da Unidade Escolar', R - 70, assinY + 5);
  pdf.setFont('helvetica', 'normal');
  pdf.text(data.unidade, R - 70, assinY + 10);
  pdf.text('Homologado perante a SEDUC-SP', R - 70, assinY + 15);

  // Data de emissão
  pdf.setFontSize(7);
  pdf.setTextColor(120, 120, 120);
  pdf.text(
    `Documento gerado em ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR')} — Sistema PAEET Digital v1.0 | SEDUC-SP`,
    105,
    285,
    { align: 'center' }
  );

  pdf.save(`relatorio_paeet_${data.bimestre.replace(/\s/g, '_')}_${data.anoLetivo}.pdf`);
}

/**
 * Gera PDF do certificado de reconhecimento / honra ao mérito.
 */
export function generateCertificadoPDF(data: {
  nomeEstudante: string;
  curso: string;
  turma: string;
  motivo: string;
  bimestre: string;
  anoLetivo: number;
  nomeDocente: string;
  unidade: string;
  codigo: string;
}): void {
  const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4', compress: true });
  const pw = pdf.internal.pageSize.getWidth();   // 297
  const ph = pdf.internal.pageSize.getHeight();  // 210

  // ── Fundo escuro ────────────────────────────────────────────
  pdf.setFillColor(7, 10, 18);
  pdf.rect(0, 0, pw, ph, 'F');

  // ── Borda dupla dourada ─────────────────────────────────────
  pdf.setDrawColor(245, 158, 11);   // Amber
  pdf.setLineWidth(2);
  pdf.rect(8, 8, pw - 16, ph - 16, 'S');
  pdf.setLineWidth(0.5);
  pdf.rect(12, 12, pw - 24, ph - 24, 'S');

  // ── Gradiente decorativo topo (simulado com retângulos) ─────
  pdf.setFillColor(59, 130, 246, 0.15);
  pdf.rect(12, 12, pw - 24, 6, 'F');

  // ── Cabeçalho ───────────────────────────────────────────────
  pdf.setTextColor(245, 158, 11);   // Amber/Gold
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(8);
  pdf.text('SECRETARIA DA EDUCAÇÃO DO ESTADO DE SÃO PAULO — SEDUC-SP', pw / 2, 26, { align: 'center' });
  pdf.text('PROGRAMA NOVOTEC / EDUCAÇÃO PROFISSIONAL E TECNOLÓGICA', pw / 2, 32, { align: 'center' });

  // ── Título "CERTIFICADO" ─────────────────────────────────────
  pdf.setTextColor(255, 255, 255);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(30);
  pdf.text('CERTIFICADO', pw / 2, 52, { align: 'center' });

  pdf.setFontSize(11);
  pdf.setTextColor(245, 158, 11);
  pdf.text('HONRA AO MÉRITO — PROTAGONISMO ESTUDANTIL', pw / 2, 61, { align: 'center' });

  // ── Linha dourada central ───────────────────────────────────
  pdf.setDrawColor(245, 158, 11);
  pdf.setLineWidth(0.8);
  pdf.line(40, 66, pw - 40, 66);

  // ── Corpo ───────────────────────────────────────────────────
  pdf.setTextColor(200, 210, 230);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(10);
  pdf.text('Certificamos que o(a) estudante', pw / 2, 78, { align: 'center' });

  pdf.setTextColor(255, 255, 255);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(22);
  pdf.text(data.nomeEstudante.toUpperCase(), pw / 2, 93, { align: 'center' });

  pdf.setTextColor(200, 210, 230);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(10);
  pdf.text(`do curso técnico em ${data.curso} — Turma ${data.turma}`, pw / 2, 103, { align: 'center' });

  pdf.setFontSize(9);
  pdf.text('foi reconhecido(a) com honra ao mérito pelo desempenho excepcional em:', pw / 2, 112, { align: 'center' });

  pdf.setTextColor(245, 158, 11);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(13);
  pdf.text(`"${data.motivo}"`, pw / 2, 122, { align: 'center' });

  pdf.setTextColor(200, 210, 230);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(9);
  pdf.text(`${data.bimestre} — Ano Letivo ${data.anoLetivo}`, pw / 2, 131, { align: 'center' });

  // ── Linha dourada inferior ──────────────────────────────────
  pdf.setDrawColor(245, 158, 11);
  pdf.setLineWidth(0.8);
  pdf.line(40, 140, pw - 40, 140);

  // ── Assinaturas ─────────────────────────────────────────────
  const assinY = 158;

  // PAEET
  pdf.setDrawColor(150, 150, 150);
  pdf.setLineWidth(0.3);
  pdf.line(50, assinY, 130, assinY);
  pdf.setTextColor(255, 255, 255);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(8.5);
  pdf.text(data.nomeDocente, 90, assinY + 6, { align: 'center' });
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(7.5);
  pdf.setTextColor(200, 210, 230);
  pdf.text('Professor de Apoio ao Estudante do Ensino Técnico', 90, assinY + 12, { align: 'center' });
  pdf.text('PAEET — SEDUC-SP', 90, assinY + 17, { align: 'center' });

  // Direção
  pdf.setDrawColor(150, 150, 150);
  pdf.line(167, assinY, 247, assinY);
  pdf.setTextColor(255, 255, 255);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(8.5);
  pdf.text('Direção da Unidade Escolar', 207, assinY + 6, { align: 'center' });
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(7.5);
  pdf.setTextColor(200, 210, 230);
  pdf.text(data.unidade, 207, assinY + 12, { align: 'center' });

  // ── Código de autenticidade ─────────────────────────────────
  pdf.setTextColor(100, 120, 150);
  pdf.setFontSize(6.5);
  pdf.text(
    `Código de Autenticidade: ${data.codigo} | Emitido em: ${new Date().toLocaleDateString('pt-BR')} | Verificação: portfolio-paeet.vercel.app`,
    pw / 2,
    196,
    { align: 'center' }
  );

  pdf.save(`certificado_${data.nomeEstudante.replace(/\s/g, '_')}_${data.codigo}.pdf`);
}
