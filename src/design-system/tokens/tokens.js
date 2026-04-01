// ============================================================
// tokens.js — Design Tokens do Portfólio Isabella Viana
// Stack: Vue 3 + Vuetify 3
// ============================================================

// ------------------------------------------------------------
// CORES
// ------------------------------------------------------------
export const colors = {
  // Fundos
  'bg-main': '#0B0B0D', // fundo geral da página
  'bg-surface': '#1A1A1E', // cards, painéis, superfícies elevadas

  // Bordas
  'border-subtle': '#27272A', // divisores sutis
  'border-primary': 'rgba(216,76,125,0.15)', // borda com cor primária (15%)

  // Texto
  'text-primary': '#F4F4F5', // texto principal
  'text-secondary': '#A1A1AA', // texto de suporte, labels, captions

  // Marca
  primary: '#D84C7D', // cor de destaque (pink)
  'bg-primary': 'rgba(216,76,125,0.05)', // fundo sutil com cor primária (5%)

  // Utilitários
  white: '#FFFFFF',
}

// ------------------------------------------------------------
// TIPOGRAFIA
//
// Dois eixos independentes:
//   Tamanho → text-xs até text-3xl  (font-size + line-height)
//   Peso    → font-regular / font-bold
//
// O componente combina os dois. Exemplo:
//   font-size:   var(--text-xs);    → 14px
//   font-weight: var(--font-bold);  → 700
//
// Famílias:
//   Space Grotesk → fonte principal (headings, body, UI)
//   Inter         → fonte de suporte (H5 / elementos UI de leitura)
// ------------------------------------------------------------
export const typography = {
  // Famílias
  'font-family-base': "'Space Grotesk', sans-serif",
  'font-family-support': "'Inter', sans-serif",

  // Escala de tamanhos
  // { size, lineHeight, family } — family só aparece nas exceções
  'text-xs': { size: '14px', lineHeight: '20px' }, // caption · nav · btn-small
  'text-sm': { size: '16px', lineHeight: '24px' }, // body · btn-large · section-label
  'text-md': { size: '20px', lineHeight: '30px', family: "'Inter', sans-serif" }, // H5 (Inter)
  'text-lg': { size: '24px', lineHeight: '32px' }, // H4
  'text-xl': { size: '32px', lineHeight: '40px' }, // H3
  'text-2xl': { size: '40px', lineHeight: '48px' }, // H2
  'text-3xl': { size: '64px', lineHeight: '72px' }, // H1

  // Pesos
  'font-regular': 400,
  'font-bold': 700,
}

// Referência de uso por elemento:
//
// Elemento         | Tamanho    | Peso         | Família
// ---------------------------------------------------------
// H1               | text-3xl   | font-bold    | base
// H2               | text-2xl   | font-bold    | base
// H3               | text-xl    | font-bold    | base
// H4               | text-lg    | font-bold    | base
// H5               | text-md    | font-regular | support (Inter)
// Body / <p>       | text-sm    | font-regular | base
// Caption          | text-xs    | font-regular | base
// Section label    | text-sm    | font-bold    | base
// Navbar           | text-xs    | font-bold    | base
// Botão large      | text-sm    | font-bold    | base
// Botão small      | text-xs    | font-bold    | base

// ------------------------------------------------------------
// ESPAÇAMENTO
// ------------------------------------------------------------
export const spacing = {
  // Escala base
  'spacing-xs': '2px',
  'spacing-sm': '4px',
  'spacing-md': '8px',
  'spacing-lg': '16px',
  'spacing-xl': '24px',
  'spacing-2xl': '32px',
  'spacing-3xl': '64px',

  // Tokens de layout semânticos
  'spacing-section': '180px', // espaço entre seções da página
  'spacing-section-title': '40px', // espaço entre título da seção e conteúdo
}

// ------------------------------------------------------------
// TEMA VUETIFY 3
// Exporta no formato que o createVuetify() espera
// ------------------------------------------------------------
export const vuetifyTheme = {
  defaultTheme: 'dark',
  themes: {
    dark: {
      dark: true,
      colors: {
        background: '#0B0B0D',
        surface: '#1A1A1E',
        primary: '#D84C7D',
        'on-primary': '#FFFFFF',
        'on-background': '#F4F4F5',
        'on-surface': '#F4F4F5',
      },
    },
  },
}

// ------------------------------------------------------------
// CSS CUSTOM PROPERTIES
// ✅ Já aplicado em src/main.css — não precisa copiar novamente.
// Fonte da verdade: o :root abaixo reflete todos os tokens acima.
// ------------------------------------------------------------
// :root {
//   /* Cores */
//   --color-bg-main:        #0B0B0D;
//   --color-bg-surface:     #1A1A1E;
//   --color-border-subtle:  #27272A;
//   --color-border-primary: rgba(216, 76, 125, 0.15);
//   --color-text-primary:   #F4F4F5;
//   --color-text-secondary: #A1A1AA;
//   --color-primary:        #D84C7D;
//   --color-bg-primary:     rgba(216, 76, 125, 0.05);
//   --color-white:          #FFFFFF;
//
//   /* Famílias */
//   --font-family-base:    'Space Grotesk', sans-serif;
//   --font-family-support: 'Inter', sans-serif;
//
//   /* Tamanhos de texto */
//   --text-xs:  14px;
//   --text-sm:  16px;
//   --text-md:  20px;
//   --text-lg:  24px;
//   --text-xl:  32px;
//   --text-2xl: 40px;
//   --text-3xl: 64px;
//
//   /* Pesos */
//   --font-regular: 400;
//   --font-bold:    700;
//
//   /* Espaçamentos */
//   --spacing-xs:  2px;
//   --spacing-sm:  4px;
//   --spacing-md:  8px;
//   --spacing-lg:  16px;
//   --spacing-xl:  24px;
//   --spacing-2xl: 32px;
//   --spacing-3xl: 64px;
//
//   --spacing-section:       180px;
//   --spacing-section-title: 40px;
// }
