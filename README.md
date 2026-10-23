# PORTFÓLIO DIGITAL PAEET — GESTÃO EDUCACIONAL, TECNOLOGIA E RESULTADOS
### Secretaria da Educação do Estado de São Paulo — SEDUC-SP
**Programa Novotec / Ensino Médio com Itinerário de Formação Técnica e Profissional**

---

## 1. Visão Geral do Projeto

O **Portfólio Digital PAEET** é uma plataforma web moderna, visualmente cinematográfica e orientada a dados para documentação, monitoramento e prestação de contas das ações do **Professor de Apoio ao Estudante do Ensino Técnico (PAEET)** na rede estadual de ensino de São Paulo (SEDUC-SP).

A plataforma combina **storytelling executivo** (Desafio ➔ Estratégia ➔ Ações ➔ Evidências ➔ Resultados ➔ Próximos Passos) com um **Business Intelligence (BI) Educacional interativo**, sistema de gestão de estágios (**Bolsa Estágio / BEEM**), CRM de parcerias empresariais, acompanhamento individual de aprendizagem (alimentado por **Excel e boletins PDF**), emissor oficial de certificados com validação de autenticidade e conformidade estrita com a **Lei Geral de Proteção de Dados (LGPD)**.

---

## 2. Pilares Arquiteturais & Tecnologias

- **Framework Web:** [React 19](https://react.dev/) + [Vite 8](https://vite.dev/) com TypeScript 5.8
- **Estilização & Design System:** [Tailwind CSS](https://tailwindcss.com/) com paleta Deep Navy (`#070A12`/`#0A0F1D`), Tech Blue (`#3B82F6`), Neon Violet (`#8B5CF6`), Emerald (`#10B981`) e Amber (`#F59E0B`), com efeito glassmorphism e micro-interações.
- **Visualização de Dados & BI:** [Recharts](https://recharts.org/) (gráficos de área com gradientes, funil de conversão, barras empilhadas, radares de competência e mapa de calor de vulnerabilidade).
- **Motion Design:** [Framer Motion](https://www.framer.com/motion/) para transições de páginas, expansão de cards e modais acessíveis.
- **Motor de Ingestão de Dados Acadêmicos:**
  - **Planilhas Excel (`.xlsx`, `.xls`, `.csv`):** Processadas no cliente com [SheetJS / xlsx](https://sheetjs.com/), com mapeamento dinâmico de colunas e tela de validação humana pré-gravação.
  - **Boletins e Laudos em PDF:** Armazenamento seguro de binários no navegador via **IndexedDB** (`PAEET_STORAGE_DB`) com visualizador embutido e download com 1 clique.
- **Reconhecimento & Protagonismo:** Emissor de certificados dinâmicos com borda dourada, código hash de autenticação, impressão A4 profissional e micro-animações de partículas via `canvas-confetti`.
- **Segurança da Informação e LGPD:**
  - Alternância de 3 perfis de acesso: `PAEET_ADMIN` (gestão total), `GESTAO_ESCOLAR` (coordenação/direção) e `PUBLIC` (modo demonstrativo com nomes e RAs 100% anonimizados via asteriscos).
  - Trilha de Auditoria em tempo real gravando data, hora, IP simulado, ação executada e entidade afetada.
  - Backup e restauração completa da base em formato JSON, com botão de restauração dos dados demonstrativos da SEDUC-SP.

---

## 3. Os 12 Módulos Especializados

| # | Módulo | Funcionalidades Principais |
|---|---|---|
| **01** | **Hero & Apresentação Institucional** | Apresentação executiva do PAEET, credenciais acadêmicas, 6 KPIs dinâmicos, resumo do plano de gestão e matriz de storytelling. |
| **02** | **Dashboard Geral de BI** | 10 StatCards com KPIs vitais, 7 gráficos interativos (taxa de colocação, evolução bimestral, frequência média, vulnerabilidade, funil BEEM) e filtros multidimensionais por ano, curso e bimestre. |
| **03** | **Estágios & Bolsa BEEM** | Funil de conversão (Elegíveis ➔ Inscritos ➔ Encaminhados ➔ Contratados - 80,8% de aproveitamento), diretório de estudantes com mascaramento LGPD e acompanhamento de contratos. |
| **04** | **Empresas Parceiras & Prospecção** | CRM corporativo (Embraer, Stefanini, TOTVS, Kenvue, Gerdau, Marelli), linha do tempo de tratativas, status de convênio e modal para registro de novas empresas e contatos. |
| **05** | **Sensibilização e Itinerário Técnico** | Ações de orientação profissional com turmas da 1ª série do Ensino Médio, pesquisa de interesse vocacional, índice de conversão de 82,5% e FAQ explicativo. |
| **06** | **Busca Ativa & Frequência Escolar** | Monitoramento de frequência por turma com comparativo visual "Antes x Depois da Intervenção PAEET", identificação de estudantes em risco e plano de ação individual confidencial. |
| **07** | **Visitas Técnicas Pedagógicas** | Destaque especial para a visita militar/tecnológica ao **CAVEX** (Comando de Aviação do Exército / Taubaté) com 68 estudantes de TI, cronograma oficial de segurança e galeria multimídia. |
| **08** | **Desempenho Acadêmico (Excel + PDF)** | Curvas de progressão e regressão bimestral, importador de planilhas Excel/CSV com preview e download de modelo SEDUC, repositório IndexedDB de boletins individuais em PDF com leitor integrado. |
| **09** | **Dia do Profissional de TI (19/Out)** | Mostra tecnológica com projetos práticos desenvolvidos pelos estudantes (React, Node, IoT, Linux), palestras com egressos e mesa redonda com profissionais do mercado. |
| **10** | **Certificação e Protagonismo** | Mural dos destaques bimestrais e emissor instantâneo de certificados oficiais de honra ao mérito com código hash de autenticidade e layout pronto para impressão A4. |
| **11** | **Biblioteca Digital de Evidências** | Repositório categorizado de atas de reunião, portarias, convocações, termos de parceria e fotos com leitor Lightbox fullscreen e upload de arquivos locais. |
| **12** | **Relatórios Executivos SEDUC-SP** | Gerador automático de prestação de contas bimestrais/anuais nos moldes exigidos pelas Diretorias de Ensino, com exportação para CSV e impressão limpa com cabeçalho oficial. |

---

## 4. Como Executar o Projeto Localmente

### Pré-requisitos
- **Node.js:** versão 18+ ou 20+ instalada
- **NPM:** versão 9+

### Instalação e Execução

```bash
# 1. Navegue até a pasta do projeto
cd scratch/paeet-digital

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev -- --port 5173 --host

# 4. Acesse a aplicação no seu navegador:
# http://localhost:5173/
```

### Validação de Build de Produção

```bash
npm run build
```

---

## 5. Legislação e Diretrizes de Referência

- **Constituição Federal de 1988** e **LDB (Lei nº 9.394/1996)** — Educação Profissional Técnica de Nível Médio.
- **Lei Federal nº 11.788/2008** — Lei do Estágio.
- **Lei Federal nº 13.709/2018 (LGPD)** — Proteção de dados pessoais de estudantes e responsáveis.
- **Resoluções e Portarias da SEDUC-SP** — Atribuição e diretrizes do Professor de Apoio ao Estudante do Ensino Técnico (PAEET) e Programa Novotec Integrado / Expresso.
- **Bolsa Estágio Ensino Médio (BEEM / SEDUC-SP)** — Incentivo à permanência e inserção no mercado profissional formal.

---

**Desenvolvido com excelência técnica para valorização da Educação Pública Paulista.**
