<template>
  <DesignSystemLayout>
    <div class="ds-home">
      <!-- ── Hero ─────────────────────────────────────────── -->
      <section class="ds-home__hero">
        <div class="ds-home__hero-text">
          <p class="ds-home__eyebrow">Design System</p>
          <h1 class="ds-home__title">Isabella Viana</h1>
          <p class="ds-home__description">
            {{ i18n.ds.home.description }}
          </p>
        </div>

        <!-- Stats -->
        <div class="ds-home__stats">
          <div class="ds-home__stat" v-for="stat in stats" :key="stat.label">
            <p class="ds-home__stat-value">{{ stat.value }}</p>
            <p class="ds-home__stat-label">{{ stat.label }}</p>
          </div>
        </div>
      </section>

      <!-- Divider -->
      <div class="ds-home__divider" />

      <!-- ── Fundação ───────────────────────────────────────── -->
      <section class="ds-home__section">
        <div class="ds-home__section-header ds-home__section-header--center">
          <BaseChip :content="i18n.ds.home.foundation.chip" variant="section-title" />
          <p class="ds-home__section-description">
            {{ i18n.ds.home.foundation.sectionDesc }}
          </p>
        </div>

        <div class="ds-home__grid ds-home__grid--foundation">
          <RouterLink v-for="item in foundation" :key="item.to" :to="item.to" class="ds-home__link">
            <BaseBlock
              direction="left"

              :subtitle="item.name"
              :content="item.desc"
              :button-text="i18n.ds.common.explore"
            />
          </RouterLink>
        </div>
      </section>

      <!-- ── Componentes ───────────────────────────────────── -->
      <section class="ds-home__section">
        <div class="ds-home__section-header ds-home__section-header--center">
          <BaseChip :content="i18n.ds.home.components.chip" variant="section-title" />
          <p class="ds-home__section-description">
            {{ i18n.ds.home.components.sectionDesc }}
          </p>
        </div>

        <div class="ds-home__grid">
          <RouterLink v-for="item in components" :key="item.to" :to="item.to" class="ds-home__link">
            <BaseBlock
              direction="left"

              :subtitle="item.name"
              :content="item.desc"
              :button-text="i18n.ds.common.explore"
            />
          </RouterLink>
        </div>
      </section>

      <!-- ── Sobre o projeto ───────────────────────────────── -->
      <section class="ds-home__about">
        <div class="ds-home__about-content">
          <BaseChip :content="i18n.ds.home.about.chip" variant="section-title" />
          <h2 class="ds-home__about-title">{{ i18n.ds.home.about.title }}</h2>
          <p class="ds-home__about-text">
            {{ i18n.ds.home.about.text }}
          </p>
          <div class="ds-home__about-stack">
            <BaseChip content="VUE 3" variant="outline" />
            <BaseChip content="VUETIFY 3" variant="outline" />
            <BaseChip content="CSS CUSTOM PROPERTIES" variant="outline" />
            <BaseChip content="FIGMA" variant="outline" />
            <BaseChip content="MATERIAL SYMBOLS" variant="outline" />
          </div>
        </div>
      </section>
    </div>
  </DesignSystemLayout>
</template>

<script setup>
import { computed } from 'vue'
import DesignSystemLayout from '@/layouts/DesignSystemLayout.vue'
import BaseChip from '@/design-system/components/BaseChip.vue'
import BaseBlock from '@/design-system/components/BaseBlock.vue'
import { useI18n } from '@/composables/useI18n'

const { i18n } = useI18n()

const componentsMeta = [
  { icon: 'label', to: '/design-system/chip' },
  { icon: 'smart_button', to: '/design-system/button' },
  { icon: 'crop_square', to: '/design-system/badge' },
  { icon: 'id_card', to: '/design-system/card' },
  { icon: 'view_agenda', to: '/design-system/block' },
  { icon: 'menu', to: '/design-system/navbar' },
  { icon: 'bottom_panel_open', to: '/design-system/footer' },
  { icon: 'call_made', to: '/design-system/cta' },
]

const components = computed(() =>
  i18n.value.ds.home.components.items.map((item, idx) => ({
    ...item,
    tag: 'COMPONENTE',
    icon: componentsMeta[idx].icon,
    to: componentsMeta[idx].to,
  }))
)

const foundation = computed(() => [{
  tag: i18n.value.ds.sidebar.foundation.toUpperCase(),
  name: 'Tokens',
  desc: i18n.value.ds.home.foundation.tokensDesc,
  icon: 'palette',
  to: '/design-system/tokens',
}])

const stats = computed(() => [
  { value: components.value.length, label: i18n.value.ds.home.stats.components },
  { value: '16', label: i18n.value.ds.home.stats.tokens },
  { value: '2', label: i18n.value.ds.home.stats.fonts },
  { value: '2', label: i18n.value.ds.home.stats.themes },
])
</script>

<style scoped>
/* ─── Página ────────────────────────────────────────────── */
.ds-home {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xl);
  max-width: 900px;
  width: 100%;
}

/* ─── Hero ──────────────────────────────────────────────── */
.ds-home__hero {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl);
}

.ds-home__hero-text {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.ds-home__eyebrow {
  font-family: var(--font-family-base);
  font-size: var(--text-xs);
  font-weight: var(--font-bold);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--color-primary);
}

.ds-home__title {
  font-family: var(--font-family-base);
  font-size: var(--text-3xl);
  font-weight: var(--font-regular);
  color: var(--color-text-primary);
  line-height: 1.05;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.ds-home__description {
  font-family: var(--font-family-support);
  font-size: var(--text-sm);
  font-weight: var(--font-regular);
  color: var(--color-text-secondary);
  line-height: 24px;
  max-width: 560px;
}

/* Stats */
.ds-home__stats {
  display: flex;
  gap: var(--spacing-3xl);
  flex-wrap: wrap;
}

.ds-home__stat {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.ds-home__stat-value {
  font-family: var(--font-family-base);
  font-size: var(--text-2xl); /* 40px */
  font-weight: var(--font-bold);
  color: var(--color-primary);
  line-height: 1;
}

.ds-home__stat-label {
  font-family: var(--font-family-base);
  font-size: var(--text-xs);
  font-weight: var(--font-regular);
  color: var(--color-text-secondary);
  letter-spacing: 1px;
  text-transform: uppercase;
}

/* ─── Divider ───────────────────────────────────────────── */
.ds-home__divider {
  height: 0.5px;
  background-color: var(--color-border-subtle);
}

/* ─── Seção ─────────────────────────────────────────────── */
.ds-home__section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.ds-home__section-header {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.ds-home__section-header--center {
  align-items: center;
  text-align: center;
}

.ds-home__section-description {
  font-family: var(--font-family-support);
  font-size: var(--text-sm);
  font-weight: var(--font-regular);
  color: var(--color-text-secondary);
  line-height: 24px;
}

/* ─── Grid de blocos ────────────────────────────────────── */
.ds-home__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
}

.ds-home__grid--foundation {
  grid-template-columns: 1fr;
}

/* ─── Responsividade ────────────────────────────────────── */
@media (max-width: 1024px) {
  .ds-home__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .ds-home__grid {
    grid-template-columns: 1fr;
  }

  .ds-home__stats {
    gap: var(--spacing-xl);
  }

  .ds-home__about {
    padding: var(--spacing-xl);
  }
}

/* ─── Link wrapper ──────────────────────────────────────── */
.ds-home__link {
  display: block;
  text-decoration: none;
}

.ds-home__link :deep(.bloco) {
  width: 100%;
  height: 100%;
}

/* ─── Sobre o projeto ───────────────────────────────────── */
.ds-home__about {
  border: 0.5px solid var(--color-border-subtle);
  border-radius: var(--spacing-xs);
  padding: var(--spacing-2xl);
}

.ds-home__about-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.ds-home__about-title {
  font-family: var(--font-family-base);
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  color: var(--color-text-primary);
  line-height: 40px;
}

.ds-home__about-text {
  font-family: var(--font-family-support);
  font-size: var(--text-sm);
  font-weight: var(--font-regular);
  color: var(--color-text-secondary);
  line-height: 24px;
  max-width: 640px;
}

.ds-home__about-stack {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}
</style>
