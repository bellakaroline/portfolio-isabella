<template>
  <div class="home">
    <!-- ── Header ────────────────────────────────────────── -->
    <BaseNavbar />

    <!-- ── Hero ─────────────────────────────────────────── -->
    <section id="hero" class="hero section-animate">
      <StarBackground class="hero__bg" />
      <div class="hero__content">
        <BaseChip content="PRODUCT UX DESIGNER" variant="section-title" />
        <h1 class="hero__name">Isabella Viana</h1>
        <p class="hero__description">{{ i18n.home.hero.description }}</p>
        <div class="hero__buttons">
          <BaseButton
            :text="i18n.home.hero.contactBtn"
            variant="primary"
            size="medium"
            :prepend="false"
            :append="false"
            @click="openWhatsApp"
          />
          <BaseButton
            :text="i18n.home.hero.exploreBtn"
            variant="outline"
            size="medium"
            :prepend="false"
            :append="false"
            @click="scrollTo('projetos')"
          />
        </div>
      </div>
    </section>

    <!-- ── Ferramentas ───────────────────────────────────── -->
    <section id="ferramentas" class="ferramentas section-animate">
      <BaseChip :content="i18n.home.tools.chip" variant="section-title" />

      <!-- Faixa 1 — esquerda → direita -->
      <div class="marquee">
        <div class="marquee__track marquee__track--forward">
          <div class="marquee__group">
            <BaseChip v-for="tool in toolsRow1" :key="tool" :content="tool" variant="outline" />
          </div>
          <div class="marquee__group" aria-hidden="true">
            <BaseChip
              v-for="tool in toolsRow1"
              :key="'a-' + tool"
              :content="tool"
              variant="outline"
            />
          </div>
        </div>
      </div>

      <!-- Faixa 2 — direita → esquerda -->
      <div class="marquee">
        <div class="marquee__track marquee__track--reverse">
          <div class="marquee__group">
            <BaseChip v-for="tool in toolsRow2" :key="tool" :content="tool" variant="outline" />
          </div>
          <div class="marquee__group" aria-hidden="true">
            <BaseChip
              v-for="tool in toolsRow2"
              :key="'b-' + tool"
              :content="tool"
              variant="outline"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- ── Projetos em destaque ──────────────────────────── -->
    <section id="projetos" class="projetos section-animate">
      <div class="projetos__header">
        <BaseChip :content="i18n.home.projects.chip" variant="section-title" />
      </div>
      <div class="projetos__stack">
        <div
          v-for="(project, index) in projects"
          :key="project.title"
          class="projetos__item"
          :style="{ top: `${152 + index * 100}px`, zIndex: index + 1 }"
        >
          <component
            :is="project.url ? 'router-link' : 'div'"
            :to="project.url || undefined"
            class="projetos__link"
          >
            <BaseBlock
              direction="left"
              :icon="project.icon"
              :title="project.tag"
              :subtitle="project.title"
              :content="project.description"
              :button-text="i18n.home.projects.viewBtn"
            />
          </component>
        </div>
        <!-- Tampa que cobre a descrição do último card empilhado -->
        <div
          class="projetos__cap"
          :style="{ top: `${152 + projects.length * 100}px`, zIndex: projects.length + 1 }"
        />
      </div>
    </section>

    <!-- ── Como trabalho ─────────────────────────────────── -->
    <section id="processo" class="processo section-animate">
      <div class="container container--wide">
        <BaseChip :content="i18n.home.process.chip" variant="section-title" />
        <div class="steps">
          <div v-for="step in steps" :key="step.number" class="steps__item">
            <span class="steps__number">{{ step.number }}</span>
            <p class="steps__label">{{ step.title }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Sobre ──────────────────────────────────────────── -->
    <section id="sobre" class="sobre section-animate">
      <div class="sobre__card">
        <!-- Foto -->
        <div class="sobre__photo">
          <img src="@/assets/about_me.webp" alt="Isabella Viana" class="sobre__img" />
          <div class="sobre__overlay" />
        </div>

        <!-- Conteúdo -->
        <div class="sobre__content">
          <div class="sobre__head">
            <p class="sobre__label">{{ i18n.home.about.label }}</p>
            <p class="sobre__name">Isabella Viana</p>
          </div>
          <div class="sobre__body">
            <p>UX Designer com background em Análise e Desenvolvimento de Sistemas.</p>
            <p>
              Trabalho na interseção entre design e engenharia, projetando produtos digitais com
              foco em clareza, fluxos eficientes e colaboração com desenvolvimento.
            </p>
            <p>
              Atualmente atuo em software jurídico, desenhando soluções para problemas complexos
              dentro de sistemas profissionais.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA ───────────────────────────────────────────── -->
    <BaseCTA id="contato" class="section-animate" :show-socials="true" />

    <!-- ── Footer ────────────────────────────────────────── -->
    <BaseFooter />
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import BaseNavbar from '@/design-system/components/BaseNavbar.vue'
import BaseFooter from '@/design-system/components/BaseFooter.vue'
import BaseButton from '@/design-system/components/BaseButton.vue'
import BaseChip from '@/design-system/components/BaseChip.vue'
import BaseBlock from '@/design-system/components/BaseBlock.vue'
import BaseCTA from '@/design-system/components/BaseCTA.vue'
import StarBackground from '@/design-system/components/StarBackground.vue'
import { useI18n } from '@/composables/useI18n'

const { i18n } = useI18n()

const toolsRow1 = [
  'Figma',
  'UX Research',
  'Design System',
  'Product Thinking',
  'JavaScript',
  'Vue.js',
  'Vuetify',
  'Git',
]
const toolsRow2 = [
  'Git',
  'Vuetify',
  'Vue.js',
  'JavaScript',
  'Product Thinking',
  'Design System',
  'UX Research',
  'Figma',
]

const projectMeta = [
  { icon: 'smartphone', url: '/portfolio/mobile' },
  { icon: 'language', url: '/portfolio/globoo' },
]

const projects = computed(() =>
  i18n.value.home.projects.items.map((item, idx) => ({
    ...item,
    ...projectMeta[idx],
  })),
)

const steps = computed(() =>
  i18n.value.home.process.steps.map((title, idx) => ({
    number: String(idx + 1).padStart(2, '0'),
    title,
  })),
)

const WHATSAPP = 'https://api.whatsapp.com/send?phone=5567991151748'
function openWhatsApp() {
  window.open(WHATSAPP, '_blank')
}

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    },
    { threshold: 0.1 },
  )
  document.querySelectorAll('.section-animate').forEach((el) => observer.observe(el))
})
</script>

<style scoped>
/* ─── Animação de entrada ───────────────────────────────── */
.section-animate {
  opacity: 0;
  transform: translateY(32px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}

.section-animate.is-visible {
  opacity: 1;
  transform: none;
}

/* ─── Página ────────────────────────────────────────────── */
.home {
  background-color: var(--color-bg-main);
  min-height: 100vh;
}

/* ─── Container ─────────────────────────────────────────── */
.container {
  max-width: 720px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-section-title);
}

.container--wide {
  max-width: 1280px;
}

/* ─── Label e título de seção ───────────────────────────── */
.section__label {
  font-family: var(--font-family-support);
  font-size: 12px;
  font-weight: var(--font-bold);
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  text-align: center;
}

/* ─── Hero ──────────────────────────────────────────────── */
.hero {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 160px 24px 120px;
  text-align: center;
}

.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  max-width: 720px;
  width: 100%;
}

.hero__name {
  font-family: var(--font-family-base);
  font-size: var(--text-3xl);
  font-weight: var(--font-regular);
  color: var(--color-text-primary);
  line-height: 1.05;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.hero__subtitle {
  font-family: var(--font-family-base);
  font-size: clamp(20px, 3vw, 28px);
  font-weight: var(--font-regular);
  color: var(--color-text-secondary);
  line-height: 1.4;
}

.hero__description {
  font-family: var(--font-family-support);
  font-size: 16px;
  font-weight: var(--font-regular);
  color: var(--color-text-secondary);
  line-height: 1.75;
  max-width: 600px;
}

.hero__buttons {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}

/* ─── Ferramentas — marquee ─────────────────────────────── */
.ferramentas {
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow: hidden;
}

/* Wrapper de cada faixa — fade nas bordas */
.marquee {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.marquee::before,
.marquee::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 160px;
  z-index: 2;
  pointer-events: none;
}

.marquee::before {
  left: 0;
  background: linear-gradient(to right, var(--color-bg-main), transparent);
}

.marquee::after {
  right: 0;
  background: linear-gradient(to left, var(--color-bg-main), transparent);
}

/* Track — contém dois grupos idênticos para loop contínuo */
.marquee__track {
  display: flex;
  width: max-content;
}

.marquee__track--forward {
  animation: marquee-right 28s linear infinite;
}

.marquee__track--reverse {
  animation: marquee-left 28s linear infinite;
}

.marquee__group {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 6px;
}

/* Pausa ao passar o mouse */
.marquee:hover .marquee__track {
  animation-play-state: paused;
}

/* Keyframes */
@keyframes marquee-right {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0%);
  }
}

@keyframes marquee-left {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-50%);
  }
}

/* ─── Projetos ──────────────────────────────────────────── */
.projetos {
  padding: 120px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-section-title);
}

.projetos__header {
  position: sticky;
  top: 100px;
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--color-bg-base);
  padding-bottom: var(--spacing-2xl);
}

.projetos__stack {
  width: 100%;
  max-width: 780px;
  padding: 0 24px;
  margin: 0 auto;
}

.projetos__item {
  position: sticky;
  margin-bottom: 24px;
}

.projetos__link {
  display: block;
  text-decoration: none;
}

/* Tampa que cobre a descrição do último card empilhado */
.projetos__cap {
  position: sticky;
  height: 220px;
  background: var(--color-bg-base);
  pointer-events: none;
}

/* Título do projeto em uppercase */
.projetos__item :deep(.bloco__subtitle) {
  text-transform: uppercase;
}

/* ─── Processo ──────────────────────────────────────────── */
.processo {
  padding: 120px 0;
}

.processo .container--wide {
  gap: var(--spacing-section-title);
}

.steps {
  display: flex;
  align-items: flex-start;
  width: 100%;
  position: relative;
}

/* Linha horizontal conectando os itens */
.steps::before {
  content: '';
  position: absolute;
  top: 20px;
  left: calc(10% + 12px);
  right: calc(10% + 12px);
  height: 1px;
  background-color: var(--color-border-subtle);
  z-index: 0;
}

.steps__item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  padding: 0 8px;
  position: relative;
  z-index: 1;
}

.steps__number {
  font-family: var(--font-family-base);
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  color: var(--color-primary);
  line-height: 1;
  background-color: var(--color-bg-main);
  padding: 0 6px;
}

.steps__label {
  font-family: var(--font-family-support);
  font-size: 13px;
  font-weight: var(--font-regular);
  color: var(--color-text-secondary);
  line-height: 1.6;
}

/* ─── Sobre ─────────────────────────────────────────────── */
.sobre {
  padding: 120px 0;
  display: flex;
  justify-content: center;
}

/* Card principal */
.sobre__card {
  display: flex;
  gap: var(--spacing-2xl); /* 32px */
  align-items: stretch;
  width: 100%;
  max-width: 1280px;
  margin: 0 24px;
  padding: var(--spacing-2xl);
  background-color: var(--color-bg-surface);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--spacing-xs);
  min-height: 398px;
}

/* Coluna da foto */
.sobre__photo {
  position: relative;
  width: 491px;
  flex-shrink: 0;
  border-radius: var(--spacing-xs);
  overflow: hidden;
  background-color: var(--color-bg-main);
}

.sobre__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

/* Overlay escuro sobre a foto */
.sobre__overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.27);
  border-radius: var(--spacing-xs);
}

/* Coluna de conteúdo */
.sobre__content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md); /* 8px */
  flex: 1;
  min-width: 0;
}

.sobre__head {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* Label "SOBRE MIM" */
.sobre__label {
  font-family: var(--font-family-base);
  font-size: var(--text-xs); /* 14px */
  font-weight: var(--font-bold);
  letter-spacing: 0.28px;
  color: var(--color-text-secondary);
  line-height: 20px;
}

/* Nome "Isabella Viana" */
.sobre__name {
  font-family: var(--font-family-base);
  font-size: var(--text-lg); /* 24px */
  font-weight: var(--font-regular);
  letter-spacing: 0.48px;
  color: var(--color-primary);
  line-height: 32px;
}

/* Parágrafos */
.sobre__body {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg); /* 16px entre parágrafos */
}

.sobre__body p {
  font-family: var(--font-family-support); /* Inter */
  font-size: var(--text-md); /* 20px */
  font-weight: var(--font-regular);
  letter-spacing: 0.4px;
  color: var(--color-text-secondary);
  line-height: 30px;
}

/* ─── CTA ───────────────────────────────────────────────── */
.contato {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 160px 24px;
  border-top: 1px solid var(--color-border-subtle);
}

.contato__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.contato__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;
  max-width: 720px;
  width: 100%;
}

.contato__title {
  font-family: var(--font-family-base);
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 400;
  text-transform: uppercase;
  color: var(--color-text-primary);
  line-height: 1;
  letter-spacing: -0.02em;
}

.contato__subtitle {
  font-family: var(--font-family-support);
  font-size: var(--text-md); /* 20px */
  font-weight: var(--font-regular);
  color: var(--color-text-secondary);
  line-height: 1.6;
}

/* Links de redes sociais — estilo BaseTextButton */
.contato__socials {
  display: flex;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
}

.contato__social {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-lg); /* 16px */
  text-decoration: none;
  padding: var(--spacing-md) var(--spacing-lg);
}

.contato__social-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: var(--color-bg-surface);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--spacing-xs);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  flex-shrink: 0;
  transition:
    background-color 0.25s ease,
    border-color 0.25s ease;
}

.contato__social-icon {
  font-size: 16px;
  color: var(--color-primary);
  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
  line-height: 1;
}

.contato__social-label {
  font-family: var(--font-family-base);
  font-size: var(--text-xs); /* 14px */
  font-weight: var(--font-bold);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--color-primary);
  white-space: nowrap;
  transition: text-shadow 0.25s ease;
}

.contato__social:hover .contato__social-badge {
  background-color: var(--color-bg-primary);
  border-color: var(--color-border-primary);
}

.contato__social:hover .contato__social-label {
  text-shadow: 0px 0px 20px rgba(216, 76, 125, 0.7);
}

/* ─── Responsividade ────────────────────────────────────── */
@media (max-width: 768px) {
  .hero {
    padding: 120px 24px 80px;
  }

  .ferramentas,
  .processo,
  .sobre {
    padding: 80px 0;
  }

  .projetos {
    padding: 80px 0;
  }

  .projetos__stack {
    padding: 0 16px;
  }

  .contato {
    padding: 80px 24px;
  }

  /* Timeline vira vertical no mobile */
  .steps {
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    padding-left: 40px;
  }

  .steps::before {
    top: 8px;
    bottom: 8px;
    left: 16px;
    right: auto;
    width: 1px;
    height: auto;
  }

  .steps__item {
    flex-direction: row;
    text-align: left;
    align-items: flex-start;
    gap: 16px;
    padding: 0;
  }

  .steps__number {
    flex-shrink: 0;
    font-size: var(--text-lg);
    padding: 0;
  }

  /* Sobre: empilha verticalmente no mobile */
  .sobre__card {
    flex-direction: column;
    margin: 0 16px;
  }

  .sobre__photo {
    width: 100%;
    height: 280px;
    flex-shrink: 0;
  }
}

.cta__title {
  font-family: var(--font-family-base);
  font-size: var(--text-3xl); /* 64px */
  font-weight: var(--font-regular);
  line-height: 72px;
  letter-spacing: 1.28px;
  text-transform: uppercase;
  color: var(--color-text-primary);
}

.cta__description {
  font-family: var(--font-family-support);
  font-size: var(--text-md);
  font-weight: var(--font-regular);
  line-height: 30px;
  color: var(--color-text-secondary);
}
</style>
