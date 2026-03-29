<template>
  <div class="case">
    <!-- ── Botão voltar ao topo (flutuante) ─────────────────── -->
    <Transition name="totop">
      <button v-show="showBackToTop" class="case__totop-btn" @click="scrollToTop">
        <span class="material-symbols-outlined">keyboard_arrow_up</span>
      </button>
    </Transition>

    <!-- ── 1. Hero ──────────────────────────────────────────── -->
    <section class="case__hero section-animate">
      <StarBackground class="case__hero-bg" />
      <div class="case__container">
        <!-- Botão voltar — inline, acima da tag -->
        <button class="case__back-btn" @click="goBack">
          <span class="material-symbols-outlined">chevron_left</span>
          <span>{{ i18n.globoo.back }}</span>
        </button>

        <p class="case__tag">{{ i18n.globoo.hero.tag }}</p>
        <h1 class="case__title">{{ i18n.globoo.hero.title }}</h1>
        <p class="case__subtitle">{{ i18n.globoo.hero.subtitle }}</p>
        <div class="case__chips">
          <BaseChip
            v-for="chip in i18n.globoo.hero.chips"
            :key="chip"
            :content="chip"
            variant="outline"
          />
        </div>
      </div>
    </section>

    <!-- ── 2. Visão Geral ───────────────────────────────────── -->
    <section class="case__section section-animate">
      <div class="case__container">
        <div class="case__chip-row">
          <BaseChip :content="i18n.globoo.overview.chip" variant="section-title" />
        </div>
        <p class="case__body--secondary">{{ i18n.globoo.overview.p1 }}</p>
        <p class="case__body--secondary">{{ i18n.globoo.overview.p2 }}</p>
        <div class="case__meta-row">
          <BaseBlock direction="left" title="SETOR" :subtitle="i18n.globoo.overview.sector" />
          <BaseBlock direction="left" title="STATUS" :subtitle="i18n.globoo.overview.status" />
        </div>
      </div>
    </section>

    <!-- ── 3. Contexto e Problema ──────────────────────────── -->
    <section class="case__section section-animate">
      <div class="case__container">
        <!-- O Problema -->
        <div class="case__chip-row">
          <BaseChip :content="i18n.globoo.problem.chip" variant="section-title" />
        </div>
        <BaseCard>
          <p class="case__body--secondary">{{ i18n.globoo.problem.p1 }}</p>
          <p class="case__body--secondary">{{ i18n.globoo.problem.p2 }}</p>
        </BaseCard>

        <!-- Decisões de Design -->
        <div class="case__chip-row case__chip-row--spaced">
          <BaseChip :content="i18n.globoo.problem.decisionsChip" variant="section-title" />
        </div>
        <p class="case__body--secondary">{{ i18n.globoo.problem.d1 }}</p>
        <p class="case__body--secondary">{{ i18n.globoo.problem.d2 }}</p>
        <div class="case__decisions">
          <BaseCard :title="i18n.globoo.problem.clarityTitle">
            <p class="case__decision-body">{{ i18n.globoo.problem.clarityBody }}</p>
          </BaseCard>
          <BaseCard :title="i18n.globoo.problem.consistencyTitle">
            <p class="case__decision-body">{{ i18n.globoo.problem.consistencyB1 }}</p>
            <p class="case__decision-body">{{ i18n.globoo.problem.consistencyB2 }}</p>
          </BaseCard>
        </div>
      </div>
    </section>

    <!-- ── 4. Meu Papel ─────────────────────────────────────── -->
    <section class="case__section section-animate">
      <div class="case__container">
        <div class="case__chip-row">
          <BaseChip :content="i18n.globoo.role.chip" variant="section-title" />
        </div>
        <p class="case__body">{{ i18n.globoo.role.body }}</p>
        <div class="case__roles-grid">
          <BaseBlock
            v-for="role in roles"
            :key="role.subtitle"
            direction="center"
            :icon="role.icon"
            :title="role.title"
            :subtitle="role.subtitle"
          />
        </div>
      </div>
    </section>

    <!-- ── 5. Solução ───────────────────────────────────────── -->
    <section class="case__section section-animate">
      <div class="case__container">
        <div class="case__chip-row">
          <BaseChip :content="i18n.globoo.solution.chip" variant="section-title" />
        </div>
        <p class="case__body">{{ i18n.globoo.solution.p1 }}</p>
        <p class="case__body">{{ i18n.globoo.solution.p2 }}</p>
        <p class="case__body">{{ i18n.globoo.solution.p3 }}</p>
        <div class="case__solution-layout">
          <video
            src="@/assets/globoo-site-1.mp4"
            class="case__video"
            controls
            autoplay
            muted
            loop
            playsinline
          />
          <div class="case__check-callouts">
            <BaseCard v-for="item in i18n.globoo.solution.checklist" :key="item">
              <p class="case__body--secondary">{{ item }}</p>
            </BaseCard>
          </div>
        </div>
      </div>
    </section>

    <!-- ── 6. Galeria ───────────────────────────────────────── -->
    <section class="case__section case__section--gallery section-animate">
      <div class="case__container case__container--center">
        <BaseChip :content="i18n.globoo.gallery.chip" variant="section-title" />
        <p class="case__subtitle">{{ i18n.globoo.gallery.subtitle }}</p>
      </div>
      <div class="case__container">
        <div class="case__gallery-grid">
          <video
            v-for="video in gallery"
            :key="video"
            :src="video"
            class="case__gallery-item"
            autoplay
            muted
            loop
            playsinline
          />
        </div>
      </div>
    </section>

    <!-- ── 7. Impacto ───────────────────────────────────────── -->
    <section class="case__section case__section--impact section-animate">
      <div class="case__container case__container--center">
        <BaseChip :content="i18n.globoo.impact.chip" variant="section-title" />
        <p class="case__body--secondary case__body--center">{{ i18n.globoo.impact.body }}</p>
      </div>
      <div class="case__container">
        <div class="case__impact-grid">
          <BaseBlock
            v-for="impact in impacts"
            :key="impact.title"
            direction="center"
            :icon="impact.icon"
            :title="impact.title"
            :subtitle="impact.subtitle"
          />
        </div>
      </div>
    </section>

    <!-- ── 8. CTA ────────────────────────────────────────────── -->
    <BaseCTA class="section-animate" :show-back="true" />

    <!-- ── Footer ───────────────────────────────────────────── -->
    <BaseFooter />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import BaseChip from '@/design-system/components/BaseChip.vue'
import BaseBlock from '@/design-system/components/BaseBlock.vue'
import BaseFooter from '@/design-system/components/BaseFooter.vue'
import BaseCTA from '@/design-system/components/BaseCTA.vue'
import StarBackground from '@/design-system/components/StarBackground.vue'
import BaseCard from '@/design-system/components/BaseCard.vue'
import { useI18n } from '@/composables/useI18n'

const router = useRouter()
const showBackToTop = ref(false)
const { i18n } = useI18n()

function goBack() {
  router.push({ path: '/', hash: '#projetos' })
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function onScroll() {
  showBackToTop.value = window.scrollY > 400
}

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

const roleIcons = ['view_quilt', 'explore', 'palette', 'deployed_code', 'engineering', 'psychology']
const roles = computed(() =>
  i18n.value.globoo.role.items.map((item, idx) => ({ ...item, icon: roleIcons[idx] })),
)

const gallery = [
  new URL('@/assets/globoo_blender.mp4', import.meta.url).href,
  new URL('@/assets/factory_blender.mp4', import.meta.url).href,
  new URL('@/assets/vault_blender.mp4', import.meta.url).href,
  new URL('@/assets/truck_blender.mp4', import.meta.url).href,
]

const impactIcons = ['circle', 'route', 'accessibility_new']
const impacts = computed(() =>
  i18n.value.globoo.impact.items.map((item, idx) => ({ ...item, icon: impactIcons[idx] })),
)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 },
  )
  document.querySelectorAll('.section-animate').forEach((el) => observer.observe(el))
  window.addEventListener('scroll', onScroll, { passive: true })
})
</script>

<style scoped>
/* ─── Botão Voltar (inline, hero) ───────────────────────── */
.case__back-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xl);
  padding: 0;
  background: none;
  border: none;
  color: var(--color-text-secondary);
  font-family: var(--font-family-support);
  font-size: var(--text-xs);
  font-weight: var(--font-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.2s ease;
}

.case__back-btn .material-symbols-outlined {
  font-size: 16px;
  line-height: 1;
  font-variation-settings:
    'FILL' 0,
    'wght' 300,
    'GRAD' 0,
    'opsz' 24;
}

.case__back-btn:hover {
  color: var(--color-primary);
}

/* ─── Botão Voltar ao Topo (flutuante) ───────────────────── */
.case__totop-btn {
  position: fixed;
  bottom: var(--spacing-2xl);
  right: var(--spacing-2xl);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background-color: var(--color-bg-surface);
  border: 1px solid var(--color-border-subtle);
  border-radius: 50%;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease;
}

.case__totop-btn .material-symbols-outlined {
  font-size: 22px;
  font-variation-settings:
    'FILL' 0,
    'wght' 300,
    'GRAD' 0,
    'opsz' 24;
}

.case__totop-btn:hover {
  color: var(--color-primary);
  border-color: var(--color-border-primary);
  background-color: var(--color-bg-primary);
}

/* Transição de fade do botão de topo */
.totop-enter-active,
.totop-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.totop-enter-from,
.totop-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

/* ─── Base ──────────────────────────────────────────────── */
.case {
  background-color: var(--color-bg-main);
  color: var(--color-text-primary);
  min-height: 100vh;
}

.case__container {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
  width: 100%;
}

.case__container--center {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--spacing-2xl);
}

/* ─── Animações ─────────────────────────────────────────── */
.section-animate {
  opacity: 0;
  transform: translateY(var(--spacing-xl));
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}

.section-animate.is-visible {
  opacity: 1;
  transform: none;
}

/* ─── Hero ──────────────────────────────────────────────── */
.case__hero {
  padding: var(--spacing-section) 0;
  position: relative;
  overflow: hidden;
}

.case__hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.case__hero .case__container {
  position: relative;
  z-index: 1;
}

.case__tag {
  font-family: var(--font-family-support);
  font-size: 11px;
  font-weight: var(--font-bold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: 20px;
}

.case__title {
  font-family: var(--font-family-base);
  font-size: clamp(32px, 5vw, 56px);
  font-weight: var(--font-regular);
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--color-text-primary);
  text-transform: uppercase;
  max-width: 800px;
  margin-bottom: 20px;
}

.case__subtitle {
  font-family: var(--font-family-support);
  font-size: var(--text-sm);
  font-weight: var(--font-regular);
  color: var(--color-text-secondary);
  line-height: 1.6;
  max-width: 80ch;
  margin-bottom: var(--spacing-2xl);
}

.case__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

/* ─── Seções ────────────────────────────────────────────── */
.case__section {
  padding: 80px 0;
  border-top: 1px solid var(--color-border-subtle);
}

/* Centraliza o chip de título de seção */
.case__chip-row {
  display: flex;
  justify-content: center;
  margin-bottom: var(--spacing-section-title);
}

.case__body {
  font-family: var(--font-family-support);
  font-size: var(--text-sm);
  font-weight: var(--font-regular);
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: var(--spacing-lg);
}

.case__body--secondary {
  font-family: var(--font-family-support);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
  line-height: 1.7;
}

/* ─── Meta (BaseBlock row) ──────────────────────────────── */
.case__meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xl);
}

/* Cada card abraça seu conteúdo — cancela o width: 632px do componente */
.case__meta-row :deep(.bloco) {
  width: auto;
  flex: 1 1 200px; /* cresce, mas não fica menor que 200px */
}

/* Chip row com espaço extra acima */
.case__chip-row--spaced {
  margin-top: var(--spacing-section);
}

/* Container das decisões empilhadas */
.case__decisions {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xl);
}

.case__decision-title {
  font-family: var(--font-family-base);
  font-size: var(--text-sm);
  font-weight: var(--font-bold);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-primary);
}

.case__decision-body {
  font-family: var(--font-family-support);
  font-size: var(--text-sm);
  font-weight: var(--font-regular);
  color: var(--color-text-secondary);
  line-height: 1.7;
}

/* ─── Papel ─────────────────────────────────────────────── */
.case__roles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xl);
}

/* Cancela o width fixo do BaseBlock */
.case__roles-grid :deep(.bloco) {
  width: 100%;
}

@media (max-width: 768px) {
  .case__roles-grid {
    grid-template-columns: 1fr;
  }
}

/* ─── Solução: vídeo em cima, callouts embaixo ──────────── */
.case__solution-layout {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl);
  margin-top: var(--spacing-2xl);
}

.case__solution-layout .case__video {
  width: 100%;
}

.case__check-callouts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
}

@media (max-width: 768px) {
  .case__check-callouts {
    grid-template-columns: 1fr;
  }
}

/* ─── Vídeo ─────────────────────────────────────────────── */
.case__video {
  width: 100%;
  border-radius: var(--spacing-md);
  border: 1px solid var(--color-border-subtle);
  display: block;
}

/* ─── Checklist ─────────────────────────────────────────── */
.case__check-callouts {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

/* ─── Galeria ───────────────────────────────────────────── */
.case__section--gallery .case__container--center {
  margin-bottom: var(--spacing-section-title);
}

.case__gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);
}

@media (max-width: 768px) {
  .case__gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.case__gallery-item {
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: var(--spacing-md);
  border: 1px solid var(--color-border-subtle);
  display: block;
}

/* ─── Impacto ───────────────────────────────────────────── */
.case__section--impact .case__container--center {
  margin-bottom: var(--spacing-section-title);
}

.case__body--center {
  text-align: center;
  max-width: 560px;
}

.case__impact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
}

.case__impact-grid :deep(.bloco) {
  width: 100%;
}

@media (max-width: 768px) {
  .case__impact-grid {
    grid-template-columns: 1fr;
  }
}

/* ─── CTA ───────────────────────────────────────────────── */
.case__cta {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 160px 24px;
  border-top: 1px solid var(--color-border-subtle);
}

.case__cta-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.case__cta-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xl);
  text-align: center;
  max-width: 720px;
  width: 100%;
}

.case__cta-title {
  font-family: var(--font-family-base);
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 400;
  text-transform: uppercase;
  color: var(--color-text-primary);
  line-height: 1;
  letter-spacing: -0.02em;
}

.case__cta-subtitle {
  font-family: var(--font-family-support);
  font-size: var(--text-md);
  font-weight: var(--font-regular);
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.case__cta-buttons {
  display: flex;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
  justify-content: center;
}

/* ─── Responsividade ────────────────────────────────────── */
@media (max-width: 768px) {
  .case__hero {
    padding: 100px 0 60px;
  }

  .case__section {
    padding: 60px 0;
  }

  .case__meta {
    margin-top: var(--spacing-2xl);
  }

  .case__check-callouts {
    margin-top: var(--spacing-xl);
  }
}
</style>
