<template>
  <header class="header" :class="{ 'header--scrolled': scrolled }">
    <div class="header__inner">
      <!-- Logo -->
      <BaseLogo v-if="!hideLogo" />

      <!-- Links — desktop -->
      <nav class="header__nav" aria-label="Navegação principal">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          class="header__link"
          :class="{ 'header__link--active': isActiveLink(link) }"
          @click.prevent="handleNavigation(link)"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- Grupo direito: toggles + CTA -->
      <div class="header__right">
        <button
          class="header__toggle-btn"
          :aria-label="locale === 'pt' ? 'Switch to English' : 'Mudar para Português'"
          @click="toggleLocale"
        >
          {{ locale === 'pt' ? 'EN' : 'BR' }}
        </button>

        <button
          class="header__toggle-btn header__toggle-btn--theme"
          :class="`header__toggle-btn--${theme}`"
          :aria-label="theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'"
          @click="toggleTheme"
        >
          <span class="material-symbols-outlined">{{
            theme === 'dark' ? 'dark_mode' : 'light_mode'
          }}</span>
        </button>

        <BaseButton
          class="header__cta"
          :text="i18n.nav.cta"
          variant="primary"
          size="medium"
          :prepend="false"
          :append="false"
          @click="openWhatsApp"
        />
      </div>

      <!-- Botão hambúrguer — mobile -->
      <button
        class="header__hamburger"
        :class="{ 'header__hamburger--open': menuOpen }"
        aria-label="Abrir menu"
        @click="menuOpen = !menuOpen"
      >
        <span class="header__bar" />
        <span class="header__bar" />
        <span class="header__bar" />
      </button>
    </div>

    <!-- Menu mobile -->
    <Transition name="menu">
      <div v-if="menuOpen" class="header__mobile">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          class="header__mobile-link"
          :class="{ 'header__mobile-link--active': isActiveLink(link) }"
          @click.prevent="handleNavigation(link, true)"
        >
          {{ link.label }}
        </a>
        <BaseButton
          :text="i18n.nav.cta"
          variant="primary"
          size="medium"
          :prepend="false"
          :append="false"
          @click="openWhatsApp"
        />
        <div class="header__mobile-toggles">
          <button class="header__toggle-btn header__toggle-btn--mobile" @click="toggleLocale">
            <span class="material-symbols-outlined">language</span>
            <span>{{ locale === 'pt' ? 'English' : 'Português' }}</span>
          </button>
          <button
            class="header__toggle-btn header__toggle-btn--mobile header__toggle-btn--theme"
            :class="`header__toggle-btn--${theme}`"
            @click="toggleTheme"
          >
            <span class="material-symbols-outlined">{{
              theme === 'dark' ? 'dark_mode' : 'light_mode'
            }}</span>
            <span>{{ theme === 'dark' ? 'Modo escuro' : 'Modo claro' }}</span>
          </button>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTheme } from '@/composables/useTheme'
import { useLocale } from '@/composables/useLocale'
import { useI18n } from '@/composables/useI18n'
import BaseLogo from './BaseLogo.vue'
import BaseButton from './BaseButton.vue'

defineProps({
  hideLogo: {
    type: Boolean,
    default: false,
  },
})

const { theme, toggle: toggleTheme } = useTheme()
const { locale, toggle: toggleLocale } = useLocale()
const { i18n } = useI18n()

const links = computed(() => [
  { label: i18n.value.nav.home, href: '#hero', section: 'hero' },
  { label: i18n.value.nav.portfolio, href: '#projetos', section: 'projetos' },
  { label: i18n.value.nav.about, href: '#sobre', section: 'sobre' },
  { label: i18n.value.nav.designSystem, href: '/design-system', section: null },
])

const route = useRoute()
const router = useRouter()

const menuOpen = ref(false)
const scrolled = ref(false)
const activeSection = ref('hero')

const WHATSAPP = 'https://api.whatsapp.com/send?phone=5567991151748'
function openWhatsApp() {
  window.open(WHATSAPP, '_blank')
}

function isRouteLink(link) {
  return link.href.startsWith('/')
}

function isActiveLink(link) {
  if (isRouteLink(link)) {
    return route.path === link.href || route.path.startsWith(`${link.href}/`)
  }

  return route.path === '/' && activeSection.value === link.section
}

function scrollTo(id) {
  if (route.path === '/') {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  } else {
    router.push({ path: '/', hash: `#${id}` })
  }
}

function handleNavigation(link, closeMenu = false) {
  if (isRouteLink(link)) {
    router.push(link.href)
  } else {
    scrollTo(link.section)
  }

  if (closeMenu) {
    menuOpen.value = false
  }
}

function onScroll() {
  scrolled.value = window.scrollY > 24

  const ids = ['hero', 'projetos', 'sobre', 'contato']
  let current = 'hero'
  for (const id of ids) {
    const el = document.getElementById(id)
    if (el && window.scrollY >= el.offsetTop - 100) {
      current = id
    }
  }
  activeSection.value = current
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
/* ─── Header ────────────────────────────────────────────── */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: transparent;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}

.header--scrolled {
  background-color: var(--color-bg-header);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--color-border-subtle);
}

/* ─── Linha interna ─────────────────────────────────────── */
.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px 40px;
  position: relative;
}

/* ─── Nav links — centralizada absolutamente ─────────────── */
.header__nav {
  display: flex;
  align-items: center;
  gap: 40px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.header__link {
  font-family: var(--font-family-base);
  font-size: var(--text-xs);
  font-weight: var(--font-bold);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  text-decoration: none;
  padding: 4px 0;
  position: relative;
  transition: color 0.2s ease;
}

/* Underline animado */
.header__link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background-color: var(--color-primary);
  transition: width 0.25s ease;
}

.header__link:hover {
  color: var(--color-text-primary);
}

.header__link:hover::after,
.header__link--active::after {
  width: 100%;
}

.header__link--active {
  color: var(--color-text-primary);
}

/* ─── Grupo direito ─────────────────────────────────────── */
.header__right {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-left: auto;
}

/* ─── Botão de toggle (tema / idioma) ───────────────────── */
.header__toggle-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
  padding: 0 var(--spacing-md);
  background: none;
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--spacing-xs);
  color: #a1a1aa; /* fixo — não muda com o tema */
  font-family: var(--font-family-base);
  font-size: var(--text-xs);
  font-weight: var(--font-bold);
  letter-spacing: 0.5px;
  cursor: pointer;
  transition:
    color 0.2s ease,
    border-color 0.2s ease;
}

.header__toggle-btn:hover {
  color: var(--color-primary);
  border-color: var(--color-border-primary);
}

.header__toggle-btn--theme {
  color: var(--color-primary);
  border-color: var(--color-border-primary);
}

.header__toggle-btn .material-symbols-outlined {
  font-size: 18px;
  font-variation-settings:
    'FILL' 0,
    'wght' 300,
    'GRAD' 0,
    'opsz' 24;
  line-height: 1;
}

.header__toggle-btn--theme .material-symbols-outlined {
  font-variation-settings:
    'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
}

/* Versão mobile — com label */
.header__mobile-toggles {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.header__toggle-btn--mobile {
  width: 100%;
  justify-content: flex-start;
  gap: var(--spacing-md);
  height: auto;
  padding: var(--spacing-md) var(--spacing-lg);
  text-transform: uppercase;
}

.header__hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 28px;
  height: 28px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
}

.header__bar {
  display: block;
  width: 100%;
  height: 1.5px;
  background-color: var(--color-text-primary);
  border-radius: 1px;
  transition:
    transform 0.25s ease,
    opacity 0.25s ease;
}

/* Animação X quando aberto */
.header__hamburger--open .header__bar:nth-child(1) {
  transform: translateY(6.5px) rotate(45deg);
}
.header__hamburger--open .header__bar:nth-child(2) {
  opacity: 0;
}
.header__hamburger--open .header__bar:nth-child(3) {
  transform: translateY(-6.5px) rotate(-45deg);
}

/* ─── Menu mobile ───────────────────────────────────────── */
.header__mobile {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  padding: 16px 40px 24px;
  background-color: var(--color-bg-mobile);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--color-border-subtle);
}

.header__mobile-link {
  font-family: var(--font-family-base);
  font-size: var(--text-sm);
  font-weight: var(--font-bold);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  text-decoration: none;
  padding: 12px 0;
  width: 100%;
  border-bottom: 1px solid var(--color-border-subtle);
  transition: color 0.2s ease;
}

.header__mobile-link:last-of-type {
  border-bottom: none;
  margin-bottom: 8px;
}

.header__mobile-link:hover,
.header__mobile-link--active {
  color: var(--color-primary);
}

/* ─── Transição do menu mobile ──────────────────────────── */
.menu-enter-active,
.menu-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* ─── Responsividade ────────────────────────────────────── */
@media (max-width: 768px) {
  .header__inner {
    padding: 16px 24px;
    gap: 0;
  }

  .header__nav,
  .header__right {
    display: none;
  }

  .header__hamburger {
    display: flex;
  }

  .header__mobile {
    padding: 12px 24px 20px;
  }
}
</style>
