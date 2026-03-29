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
        <button class="case__back-btn" @click="goBack">
          <span class="material-symbols-outlined">chevron_left</span>
          <span>{{ i18n.mobile.back }}</span>
        </button>

        <p class="case__tag">{{ i18n.mobile.hero.tag }}</p>
        <h1 class="case__title">{{ i18n.mobile.hero.title }}</h1>
        <p class="case__subtitle">{{ i18n.mobile.hero.subtitle }}</p>
        <div class="case__chips">
          <BaseChip
            v-for="chip in i18n.mobile.hero.chips"
            :key="chip"
            :content="chip"
            variant="outline"
          />
        </div>
      </div>
    </section>

    <!-- ── 2. Contexto ──────────────────────────────────────── -->
    <section class="case__section section-animate">
      <div class="case__container">
        <div class="case__chip-row">
          <BaseChip :content="i18n.mobile.context.chip" variant="section-title" />
        </div>
        <p class="case__body--secondary">{{ i18n.mobile.context.p1 }}</p>
        <p class="case__body--secondary">{{ i18n.mobile.context.p2 }}</p>
        <div class="case__meta-row">
          <BaseBlock direction="left" title="SETOR" :subtitle="i18n.mobile.context.sector" />
          <BaseBlock direction="left" title="TIPO" :subtitle="i18n.mobile.context.type" />
        </div>
      </div>
    </section>

    <!-- ── 3. Meu Papel ─────────────────────────────────────── -->
    <section class="case__section section-animate">
      <div class="case__container">
        <div class="case__chip-row">
          <BaseChip :content="i18n.mobile.role.chip" variant="section-title" />
        </div>
        <p class="case__body">{{ i18n.mobile.role.body }}</p>
        <div class="case__roles-grid">
          <BaseBlock
            v-for="role in roles"
            :key="role.title"
            direction="center"
            :icon="role.icon"
            :title="role.title"
            :subtitle="role.subtitle"
          />
        </div>
      </div>
    </section>

    <!-- ── 4. Desafios ──────────────────────────────────────── -->
    <section class="case__section section-animate">
      <div class="case__container">
        <div class="case__chip-row">
          <BaseChip :content="i18n.mobile.challenges.chip" variant="section-title" />
        </div>
        <div class="case__challenges-grid">
          <BaseCard v-for="challenge in challenges" :key="challenge.title" :title="challenge.title">
            <p class="case__body--secondary">{{ challenge.body }}</p>
          </BaseCard>
        </div>
      </div>
    </section>

    <!-- ── 5. Wallet ────────────────────────────────────────── -->
    <section class="case__section section-animate">
      <div class="case__container">
        <div class="case__chip-row">
          <BaseChip :content="i18n.mobile.wallet.chip" variant="section-title" />
        </div>
        <div class="case__prob-sol">
          <BaseCard :title="i18n.mobile.wallet.problems">
            <ul class="case__list">
              <li v-for="item in i18n.mobile.wallet.problemItems" :key="item">{{ item }}</li>
            </ul>
          </BaseCard>
          <BaseCard :title="i18n.mobile.wallet.solutions">
            <ul class="case__list">
              <li v-for="item in i18n.mobile.wallet.solutionItems" :key="item">{{ item }}</li>
            </ul>
          </BaseCard>
        </div>
        <div class="case__before-after">
          <div class="case__img-block">
            <p class="case__img-label">{{ i18n.mobile.wallet.before }}</p>
            <img src="@/assets/wallet_antes.png" alt="Wallet — Before" class="case__img" />
          </div>
          <div class="case__img-block">
            <p class="case__img-label">{{ i18n.mobile.wallet.after }}</p>
            <img src="@/assets/wallet_depois.png" alt="Wallet — After" class="case__img" />
          </div>
        </div>
      </div>
    </section>

    <!-- ── 6. Banco Digital ─────────────────────────────────── -->
    <section class="case__section section-animate">
      <div class="case__container">
        <div class="case__chip-row">
          <BaseChip :content="i18n.mobile.bank.chip" variant="section-title" />
        </div>
        <div class="case__prob-sol">
          <BaseCard :title="i18n.mobile.bank.problems">
            <ul class="case__list">
              <li v-for="item in i18n.mobile.bank.problemItems" :key="item">{{ item }}</li>
            </ul>
          </BaseCard>
          <BaseCard :title="i18n.mobile.bank.solutions">
            <ul class="case__list">
              <li v-for="item in i18n.mobile.bank.solutionItems" :key="item">{{ item }}</li>
            </ul>
          </BaseCard>
        </div>
        <div class="case__before-after">
          <div class="case__img-block">
            <p class="case__img-label">{{ i18n.mobile.bank.before }}</p>
            <img src="@/assets/bank_antes.png" alt="Digital Bank — Before" class="case__img" />
          </div>
          <div class="case__img-block">
            <p class="case__img-label">{{ i18n.mobile.bank.after }}</p>
            <img src="@/assets/bank_depois.png" alt="Digital Bank — After" class="case__img" />
          </div>
        </div>
      </div>
    </section>

    <!-- ── 7. Exchange ──────────────────────────────────────── -->
    <section class="case__section section-animate">
      <div class="case__container">
        <div class="case__chip-row">
          <BaseChip :content="i18n.mobile.exchange.chip" variant="section-title" />
        </div>
        <div class="case__prob-sol">
          <BaseCard :title="i18n.mobile.exchange.problems">
            <ul class="case__list">
              <li v-for="item in i18n.mobile.exchange.problemItems" :key="item">{{ item }}</li>
            </ul>
          </BaseCard>
          <BaseCard :title="i18n.mobile.exchange.solutions">
            <ul class="case__list">
              <li v-for="item in i18n.mobile.exchange.solutionItems" :key="item">{{ item }}</li>
            </ul>
          </BaseCard>
        </div>
        <div class="case__before-after">
          <div class="case__img-block">
            <p class="case__img-label">{{ i18n.mobile.exchange.before }}</p>
            <img src="@/assets/exchange_antes.png" alt="Exchange — Before" class="case__img" />
          </div>
          <div class="case__img-block">
            <p class="case__img-label">{{ i18n.mobile.exchange.after }}</p>
            <img src="@/assets/exchange_depois.png" alt="Exchange — After" class="case__img" />
          </div>
        </div>
      </div>
    </section>

    <!-- ── 8. Resultado ─────────────────────────────────────── -->
    <section class="case__section case__section--impact section-animate">
      <div class="case__container case__container--center">
        <BaseChip :content="i18n.mobile.result.chip" variant="section-title" />
        <p class="case__body--secondary case__body--center">{{ i18n.mobile.result.body }}</p>
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

    <!-- ── 9. CTA ────────────────────────────────────────────── -->
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
import BaseCard from '@/design-system/components/BaseCard.vue'
import BaseFooter from '@/design-system/components/BaseFooter.vue'
import BaseCTA from '@/design-system/components/BaseCTA.vue'
import StarBackground from '@/design-system/components/StarBackground.vue'
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

const roleIcons = ['account_tree', 'sync_alt', 'grid_view', 'person_search', 'design_services', 'balance']
const roles = computed(() =>
  i18n.value.mobile.role.items.map((item, idx) => ({ ...item, icon: roleIcons[idx] })),
)

const challenges = computed(() => i18n.value.mobile.challenges.items)

const impactIcons = ['visibility', 'grid_view', 'shield']
const impacts = computed(() =>
  i18n.value.mobile.result.impacts.map((item, idx) => ({ ...item, icon: impactIcons[idx] })),
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
  margin-bottom: 0;
  line-height: 1.7;
}

/* ─── Meta (BaseBlock row) ──────────────────────────────── */
.case__meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xl);
}

.case__meta-row :deep(.bloco) {
  width: auto;
  flex: 1 1 200px;
}

/* ─── Papel ─────────────────────────────────────────────── */
.case__roles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xl);
}

.case__roles-grid :deep(.bloco) {
  width: 100%;
}

@media (max-width: 768px) {
  .case__roles-grid {
    grid-template-columns: 1fr;
  }
}

/* ─── Desafios ──────────────────────────────────────────── */
.case__challenges-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-xl);
}

@media (max-width: 768px) {
  .case__challenges-grid {
    grid-template-columns: 1fr;
  }
}

/* ─── Lista (problemas / soluções) ──────────────────────── */
.case__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.case__list li {
  font-family: var(--font-family-support);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
  padding-left: var(--spacing-lg);
  position: relative;
}

.case__list li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--color-primary);
}

/* ─── Problemas / Soluções lado a lado ──────────────────── */
.case__prob-sol {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-2xl);
}

@media (max-width: 768px) {
  .case__prob-sol {
    grid-template-columns: 1fr;
  }
}

/* ─── Before / After ────────────────────────────────────── */
.case__before-after {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-xl);
}

@media (max-width: 768px) {
  .case__before-after {
    grid-template-columns: 1fr;
  }
}

.case__img-block {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.case__img-label {
  font-family: var(--font-family-support);
  font-size: 11px;
  font-weight: var(--font-bold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
}

.case__img {
  width: 100%;
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
}
</style>
