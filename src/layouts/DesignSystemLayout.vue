<template>
  <div class="ds-layout" :style="{ '--sidebar-w': sidebarOpen ? '240px' : '56px' }">

    <!-- ── Sidebar ────────────────────────────────────────── -->
    <aside class="ds-sidebar" :class="{ 'ds-sidebar--collapsed': !sidebarOpen }">

      <!-- Logo -->
      <div class="ds-sidebar__logo">
        <RouterLink to="/" class="ds-sidebar__logo-link" title="Voltar ao portfólio">
          <span class="ds-sidebar__logo-bold">ISABELLA</span>
          <span class="ds-sidebar__logo-regular">VIANA</span>
        </RouterLink>
      </div>

      <div class="ds-sidebar__divider" />

      <!-- Nav -->
      <nav class="ds-sidebar__nav">

        <p class="ds-sidebar__nav-label">{{ i18n.ds.sidebar.general }}</p>
        <RouterLink class="ds-sidebar__nav-item" to="/design-system/home">
          <span class="material-symbols-outlined ds-sidebar__nav-icon">home</span>
          <span class="ds-sidebar__nav-text">{{ i18n.ds.sidebar.overview }}</span>
        </RouterLink>

        <p class="ds-sidebar__nav-label">{{ i18n.ds.sidebar.foundation }}</p>
        <RouterLink class="ds-sidebar__nav-item" to="/design-system/tokens">
          <span class="material-symbols-outlined ds-sidebar__nav-icon">palette</span>
          <span class="ds-sidebar__nav-text">Tokens</span>
        </RouterLink>

        <p class="ds-sidebar__nav-label">{{ i18n.ds.sidebar.components }}</p>
        <RouterLink class="ds-sidebar__nav-item" to="/design-system/chip">
          <span class="material-symbols-outlined ds-sidebar__nav-icon">label</span>
          <span class="ds-sidebar__nav-text">Chip</span>
        </RouterLink>
        <RouterLink class="ds-sidebar__nav-item" to="/design-system/button">
          <span class="material-symbols-outlined ds-sidebar__nav-icon">smart_button</span>
          <span class="ds-sidebar__nav-text">Button</span>
        </RouterLink>
        <RouterLink class="ds-sidebar__nav-item" to="/design-system/badge">
          <span class="material-symbols-outlined ds-sidebar__nav-icon">military_tech</span>
          <span class="ds-sidebar__nav-text">Badge</span>
        </RouterLink>
        <RouterLink class="ds-sidebar__nav-item" to="/design-system/card">
          <span class="material-symbols-outlined ds-sidebar__nav-icon">article</span>
          <span class="ds-sidebar__nav-text">Card</span>
        </RouterLink>
        <RouterLink class="ds-sidebar__nav-item" to="/design-system/block">
          <span class="material-symbols-outlined ds-sidebar__nav-icon">view_agenda</span>
          <span class="ds-sidebar__nav-text">Block</span>
        </RouterLink>
        <RouterLink class="ds-sidebar__nav-item" to="/design-system/navbar">
          <span class="material-symbols-outlined ds-sidebar__nav-icon">toolbar</span>
          <span class="ds-sidebar__nav-text">Navbar</span>
        </RouterLink>
        <RouterLink class="ds-sidebar__nav-item" to="/design-system/footer">
          <span class="material-symbols-outlined ds-sidebar__nav-icon">dock_to_bottom</span>
          <span class="ds-sidebar__nav-text">Footer</span>
        </RouterLink>
        <RouterLink class="ds-sidebar__nav-item" to="/design-system/cta">
          <span class="material-symbols-outlined ds-sidebar__nav-icon">call_made</span>
          <span class="ds-sidebar__nav-text">CTA</span>
        </RouterLink>

      </nav>
    </aside>

    <!-- ── Toggle ─────────────────────────────────────────── -->
    <button
      class="ds-sidebar__toggle"
      :class="{ 'ds-sidebar__toggle--collapsed': !sidebarOpen }"
      :aria-label="sidebarOpen ? 'Fechar menu' : 'Abrir menu'"
      @click="sidebarOpen = !sidebarOpen"
    >
      <span class="material-symbols-outlined ds-sidebar__toggle-icon">
        {{ sidebarOpen ? 'chevron_left' : 'chevron_right' }}
      </span>
    </button>

    <!-- ── Backdrop mobile ────────────────────────────────── -->
    <div
      v-if="sidebarOpen"
      class="ds-sidebar__backdrop"
      @click="sidebarOpen = false"
    />

    <!-- ── Coluna principal ───────────────────────────────── -->
    <div class="ds-main" :class="{ 'ds-main--collapsed': !sidebarOpen }">

      <!-- Navbar sticky -->
      <div class="ds-main__navbar">
        <BaseNavbar :hide-logo="sidebarOpen" />
      </div>

      <!-- Conteúdo -->
      <main class="ds-content">
        <slot />
      </main>

      <!-- Footer -->
      <BaseFooter />
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import '@/assets/ds-storybook.css'
import BaseNavbar from '@/design-system/components/BaseNavbar.vue'
import BaseFooter from '@/design-system/components/BaseFooter.vue'
import { useI18n } from '@/composables/useI18n'

const { i18n } = useI18n()
const sidebarOpen = ref(window.innerWidth > 768)
</script>

<style scoped>
/* ─── Layout base ───────────────────────────────────────── */
.ds-layout {
  display: flex;
  min-height: 100vh;
  background-color: var(--color-bg-main);
}

/* ─── Sidebar ───────────────────────────────────────────── */
.ds-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 240px;
  background-color: var(--color-bg-surface);
  border-right: 0.5px solid var(--color-border-subtle);
  padding: var(--spacing-xl) 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  overflow: hidden;
  z-index: 90;
  transition: width 0.3s ease;
}

.ds-sidebar--collapsed {
  width: 56px;
}

/* ─── Logo ──────────────────────────────────────────────── */
.ds-sidebar__logo {
  padding: 0 var(--spacing-xl);
  transition: opacity 0.2s ease;
}

.ds-sidebar--collapsed .ds-sidebar__logo {
  opacity: 0;
  pointer-events: none;
}

.ds-sidebar__logo-link {
  text-decoration: none;
  display: inline-flex;
  gap: 4px;
  align-items: baseline;
}

.ds-sidebar__logo-bold,
.ds-sidebar__logo-regular {
  font-family: var(--font-family-base);
  font-size: var(--text-xs);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--color-text-primary);
  line-height: 1;
  white-space: nowrap;
}

.ds-sidebar__logo-bold  { font-weight: var(--font-bold); }
.ds-sidebar__logo-regular { font-weight: var(--font-regular); }

/* ─── Divider ───────────────────────────────────────────── */
.ds-sidebar__divider {
  height: 0.5px;
  background-color: var(--color-border-subtle);
  margin: 0 var(--spacing-xl);
  flex-shrink: 0;
  transition: margin 0.3s ease;
}

.ds-sidebar--collapsed .ds-sidebar__divider {
  margin: 0 8px;
}

/* ─── Nav ───────────────────────────────────────────────── */
.ds-sidebar__nav {
  display: flex;
  flex-direction: column;
  padding: 0 var(--spacing-xl);
  gap: var(--spacing-sm);
  overflow-y: auto;
  overflow-x: hidden;
  transition: padding 0.3s ease;
}

.ds-sidebar--collapsed .ds-sidebar__nav {
  padding: 0 8px;
}

/* Section labels */
.ds-sidebar__nav-label {
  font-family: var(--font-family-base);
  font-size: var(--text-xs);
  font-weight: var(--font-bold);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  margin-top: var(--spacing-lg);
  margin-bottom: var(--spacing-sm);
  white-space: nowrap;
  opacity: 1;
  max-height: 40px;
  overflow: hidden;
  transition:
    opacity 0.2s ease,
    max-height 0.3s ease,
    margin 0.3s ease;
}

.ds-sidebar--collapsed .ds-sidebar__nav-label {
  opacity: 0;
  max-height: 0;
  margin-top: 4px;
  margin-bottom: 0;
}

/* Nav items */
.ds-sidebar__nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-family-base);
  font-size: var(--text-xs);
  font-weight: var(--font-regular);
  color: var(--color-text-secondary);
  text-decoration: none;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--spacing-xs);
  white-space: nowrap;
  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    padding 0.3s ease,
    justify-content 0.3s ease;
}

.ds-sidebar--collapsed .ds-sidebar__nav-item {
  justify-content: center;
  padding: var(--spacing-sm);
}

.ds-sidebar__nav-item:hover {
  color: var(--color-text-primary);
  background-color: var(--color-bg-primary);
}

.ds-sidebar__nav-item.router-link-active {
  color: var(--color-primary);
  background-color: var(--color-bg-primary);
  border-left: 2px solid var(--color-primary);
  padding-left: calc(var(--spacing-md) - 2px);
}

.ds-sidebar--collapsed .ds-sidebar__nav-item.router-link-active {
  border-left: none;
  padding-left: var(--spacing-sm);
  border-bottom: 2px solid var(--color-primary);
}

/* Ícone do item */
.ds-sidebar__nav-icon {
  font-size: 18px;
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
  flex-shrink: 0;
  line-height: 1;
}

.ds-sidebar__nav-item.router-link-active .ds-sidebar__nav-icon {
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

/* Texto do item — some ao colapsar */
.ds-sidebar__nav-text {
  opacity: 1;
  max-width: 160px;
  overflow: hidden;
  transition:
    opacity 0.15s ease,
    max-width 0.3s ease;
}

.ds-sidebar--collapsed .ds-sidebar__nav-text {
  opacity: 0;
  max-width: 0;
}

/* ─── Toggle ────────────────────────────────────────────── */
.ds-sidebar__toggle {
  position: fixed;
  top: 20px;
  left: 226px; /* 240 - 28/2 - 0.5 = 225.5 ≈ 226 */
  z-index: 100;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: var(--color-bg-surface);
  border: 0.5px solid var(--color-border-subtle);
  color: var(--color-text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    left 0.3s ease,
    color 0.2s ease,
    border-color 0.2s ease;
}

.ds-sidebar__toggle--collapsed {
  left: 42px; /* 56 - 28/2 = 42 */
}

.ds-sidebar__toggle:hover {
  color: var(--color-primary);
  border-color: var(--color-border-primary);
}

.ds-sidebar__toggle-icon {
  font-size: 16px;
  line-height: 1;
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}

/* ─── Coluna principal ──────────────────────────────────── */
.ds-main {
  margin-left: 240px;
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  transition: margin-left 0.3s ease;
}

.ds-main--collapsed {
  margin-left: 56px;
}

/* ─── Navbar ────────────────────────────────────────────── */
.ds-main__navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  padding: var(--spacing-xl) 0;
}

/* Header começa após a sidebar */
.ds-main__navbar :deep(.header) {
  left: var(--sidebar-w, 0px);
  transition:
    left 0.3s ease,
    background-color 0.3s ease,
    border-color 0.3s ease;
}

/* Nav sempre centralizada no espaço disponível */
.ds-main__navbar :deep(.header__inner) {
  position: relative;
}

.ds-main__navbar :deep(.header__nav) {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

/* Grupo direito sempre fica na direita mesmo sem logo no fluxo */
.ds-main__navbar :deep(.header__right) {
  margin-left: auto;
}

/* ─── Conteúdo ──────────────────────────────────────────── */
.ds-content {
  flex: 1;
  padding: var(--spacing-3xl);
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* ─── Backdrop mobile ───────────────────────────────────── */
.ds-sidebar__backdrop {
  display: none;
}

/* ─── Responsividade ────────────────────────────────────── */
@media (max-width: 768px) {
  /* Sidebar vira drawer — entra por baixo como overlay */
  .ds-sidebar {
    transform: translateX(-100%);
    transition: transform 0.3s ease, width 0.3s ease;
    z-index: 200;
  }

  .ds-sidebar:not(.ds-sidebar--collapsed) {
    transform: translateX(0);
    width: 240px;
    box-shadow: 4px 0 32px rgba(0, 0, 0, 0.5);
  }

  /* Main ocupa tela toda — sem margem da sidebar */
  .ds-main,
  .ds-main--collapsed {
    margin-left: 0 !important;
  }

  /* Toggle fica no canto esquerdo quando sidebar fechada */
  .ds-sidebar__toggle--collapsed {
    left: 16px;
  }

  /* Reduz padding do conteúdo */
  .ds-content {
    padding: var(--spacing-xl) var(--spacing-lg);
  }

  /* Backdrop escurece o fundo quando sidebar aberta */
  .ds-sidebar__backdrop {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 190;
  }
}
</style>
