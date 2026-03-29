<template>
  <footer class="footer">
    <!-- ── Corpo principal ──────────────────────────────── -->
    <div class="footer__body">
      <div class="footer__inner">
        <!-- Logo + tagline -->
        <div class="footer__brand">
          <BaseLogo />
          <p class="footer__tagline">
            {{ i18n.footer.tagline1 }}<br />{{ i18n.footer.tagline2 }}
          </p>
        </div>

        <!-- Navegação -->
        <nav class="footer__nav" aria-label="Navegação do rodapé">
          <p class="footer__nav-title">{{ i18n.footer.nav }}</p>
          <a
            v-for="link in navLinks"
            :key="link.label"
            :href="link.href"
            class="footer__link"
            @click.prevent="handleNavigation(link)"
          >
            {{ link.label }}
          </a>
        </nav>

        <!-- Contato / Redes -->
        <div class="footer__social">
          <p class="footer__nav-title">{{ i18n.footer.socials }}</p>
          <a
            v-for="social in socialLinks"
            :key="social.label"
            :href="social.href"
            class="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ social.label }}
            <span class="footer__ext" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </div>

    <!-- ── Faixa inferior ──────────────────────────────── -->
    <div class="footer__bottom">
      <div class="footer__bottom-inner">
        <p class="footer__copyright">{{ i18n.footer.copyright }}</p>
        <div class="footer__diamonds" aria-hidden="true">
          <span class="footer__diamond" />
          <span class="footer__diamond footer__diamond--sm" />
          <span class="footer__diamond" />
        </div>
        <p class="footer__made">{{ i18n.footer.made }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BaseLogo from './BaseLogo.vue'
import { useI18n } from '@/composables/useI18n'

const { i18n } = useI18n()
const route = useRoute()
const router = useRouter()

const navLinks = computed(() => [
  { label: i18n.value.nav.home, href: '#hero', section: 'hero' },
  { label: i18n.value.nav.portfolio, href: '#projetos', section: 'projetos' },
  { label: i18n.value.nav.about, href: '#sobre', section: 'sobre' },
  { label: i18n.value.nav.designSystem, href: '/design-system', section: null },
])

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/isabella-viana/' },
  { label: 'Instagram', href: 'https://www.instagram.com/isabellaksviana' },
  { label: 'GitHub', href: 'https://github.com/bellakaroline' },
]

function isRouteLink(link) {
  return link.href.startsWith('/')
}

function scrollTo(id) {
  if (route.path === '/') {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  } else {
    router.push({ path: '/', hash: `#${id}` })
  }
}

function handleNavigation(link) {
  if (isRouteLink(link)) {
    router.push(link.href)
  } else {
    scrollTo(link.section)
  }
}
</script>

<style scoped>
/* ─── Footer ────────────────────────────────────────────── */
.footer {
  width: 100%;
  background-color: var(--color-bg-surface);
  border-top: 1px solid var(--color-border-subtle);
}

/* ─── Corpo ─────────────────────────────────────────────── */
.footer__body {
  padding: 64px 0 48px;
}

.footer__inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 80px;
  align-items: flex-start;
}

/* ─── Brand ─────────────────────────────────────────────── */
.footer__brand {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer__tagline {
  font-family: var(--font-family-support);
  font-size: var(--text-sm);
  font-weight: var(--font-regular);
  color: var(--color-text-secondary);
  line-height: 1.7;
}

/* ─── Colunas de links ──────────────────────────────────── */
.footer__nav,
.footer__social {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer__nav-title {
  font-family: var(--font-family-base);
  font-size: 11px;
  font-weight: var(--font-bold);
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  margin-bottom: 4px;
}

.footer__link {
  font-family: var(--font-family-base);
  font-size: var(--text-xs);
  font-weight: var(--font-regular);
  letter-spacing: 0.5px;
  color: var(--color-text-secondary);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: color 0.2s ease;
  width: fit-content;
}

.footer__link:hover {
  color: var(--color-primary);
}

.footer__ext {
  font-size: 10px;
  opacity: 0.6;
  transition: opacity 0.2s ease;
}

.footer__link:hover .footer__ext {
  opacity: 1;
}

/* ─── Faixa inferior ────────────────────────────────────── */
.footer__bottom {
  border-top: 1px solid var(--color-border-subtle);
  padding: 20px 0;
}

.footer__bottom-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.footer__copyright,
.footer__made {
  font-family: var(--font-family-base);
  font-size: 12px;
  font-weight: var(--font-regular);
  letter-spacing: 0.5px;
  color: var(--color-text-secondary);
  white-space: nowrap;
}

/* ─── Losangos decorativos ──────────────────────────────── */
.footer__diamonds {
  display: flex;
  align-items: center;
  gap: 6px;
}

.footer__diamond {
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: var(--color-primary);
  transform: rotate(45deg);
  flex-shrink: 0;
}

.footer__diamond--sm {
  width: 4px;
  height: 4px;
  opacity: 0.5;
}

/* ─── Responsividade ────────────────────────────────────── */
@media (max-width: 768px) {
  .footer__body {
    padding: 48px 0 32px;
  }

  .footer__inner {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    padding: 0 24px;
  }

  .footer__brand {
    grid-column: 1 / -1;
  }

  .footer__bottom-inner {
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 0 24px;
    text-align: center;
  }

  .footer__copyright,
  .footer__made {
    white-space: normal;
    text-align: center;
  }
}
</style>
