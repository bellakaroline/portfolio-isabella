<template>
  <DesignSystemLayout>
    <div class="ds-page">
      <header class="ds-page__header">
        <p class="ds-page__category">{{ i18n.ds.common.category.foundation }}</p>
        <h1 class="ds-page__title">Tokens</h1>
        <p class="ds-page__description">
          {{ i18n.ds.tokens.description }}
        </p>
      </header>

      <!-- ── Colors ─────────────────────────────────────── -->
      <section class="ds-section">
        <h2 class="ds-section__title">Colors</h2>

        <!-- Backgrounds -->
        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">Backgrounds</p>
          </div>
          <div class="ds-story__canvas ds-story__canvas--col">
            <div class="token-color-list">
              <div class="token-color" v-for="color in backgroundColors" :key="color.token">
                <div
                  class="token-color__swatch"
                  :style="{ background: color.value, border: color.border }"
                />
                <div class="token-color__info">
                  <p class="token-color__token">{{ color.token }}</p>
                  <p class="token-color__value">{{ color.value }}</p>
                  <p class="token-color__desc">{{ color.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Borders -->
        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">Borders</p>
          </div>
          <div class="ds-story__canvas ds-story__canvas--col">
            <div class="token-color-list">
              <div class="token-color" v-for="color in borderColors" :key="color.token">
                <div
                  class="token-color__swatch"
                  :style="{ background: color.value, border: '1px solid #27272A' }"
                />
                <div class="token-color__info">
                  <p class="token-color__token">{{ color.token }}</p>
                  <p class="token-color__value">{{ color.value }}</p>
                  <p class="token-color__desc">{{ color.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Text -->
        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">Text</p>
          </div>
          <div class="ds-story__canvas ds-story__canvas--col">
            <div class="token-color-list">
              <div class="token-color" v-for="color in textColors" :key="color.token">
                <div
                  class="token-color__swatch"
                  :style="{ background: color.value, border: '1px solid #27272A' }"
                />
                <div class="token-color__info">
                  <p class="token-color__token">{{ color.token }}</p>
                  <p class="token-color__value">{{ color.value }}</p>
                  <p class="token-color__desc">{{ color.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Brand -->
        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">Brand</p>
          </div>
          <div class="ds-story__canvas ds-story__canvas--col">
            <div class="token-color-list">
              <div class="token-color" v-for="color in brandColors" :key="color.token">
                <div class="token-color__swatch" :style="{ background: color.value }" />
                <div class="token-color__info">
                  <p class="token-color__token">{{ color.token }}</p>
                  <p class="token-color__value">{{ color.value }}</p>
                  <p class="token-color__desc">{{ color.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── Light Theme ───────────────────────────────────── -->
      <section class="ds-section">
        <h2 class="ds-section__title">{{ i18n.ds.tokens.lightTheme }}</h2>

        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">{{ i18n.ds.tokens.lightColors }}</p>
            <p class="ds-story__description">
              {{ i18n.ds.tokens.lightDesc }}
            </p>
          </div>
          <div class="ds-story__canvas ds-story__canvas--col" style="background: #F7F8FA;">
            <div class="token-color-list">
              <div class="token-color" v-for="color in lightColors" :key="color.token">
                <div
                  class="token-color__swatch"
                  :style="{ background: color.value, border: '1px solid #E6E9ED' }"
                />
                <div class="token-color__info" style="color: #0F172A;">
                  <p class="token-color__token" style="color: #D84C7D;">{{ color.token }}</p>
                  <p class="token-color__value" style="color: #64748B;">{{ color.value }}</p>
                  <p class="token-color__desc" style="color: #64748B;">{{ color.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── Typography ──────────────────────────────────── -->
      <section class="ds-section">
        <h2 class="ds-section__title">Typography</h2>

        <!-- Famílias -->
        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">{{ i18n.ds.tokens.families }}</p>
            <p class="ds-story__description">
              {{ i18n.ds.tokens.familiesDesc }}
            </p>
          </div>
          <div class="ds-story__canvas ds-story__canvas--col" style="align-items: flex-start">
            <div class="token-family">
              <p class="token-family__name">Space Grotesk</p>
              <p class="token-family__sample token-family__sample--base">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                abcdefghijklmnopqrstuvwxyz<br />
                0123456789
              </p>
              <p class="token-family__token">--font-family-base</p>
            </div>
            <div class="token-family">
              <p class="token-family__name">Inter</p>
              <p class="token-family__sample token-family__sample--support">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                abcdefghijklmnopqrstuvwxyz<br />
                0123456789
              </p>
              <p class="token-family__token">--font-family-support</p>
            </div>
          </div>
        </div>

        <!-- Escala de tamanhos -->
        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">{{ i18n.ds.tokens.typeScale }}</p>
            <p class="ds-story__description">
              {{ i18n.ds.tokens.typeScaleDesc }}
            </p>
          </div>
          <div
            class="ds-story__canvas ds-story__canvas--col"
            style="align-items: flex-start; gap: 32px"
          >
            <div class="token-type" v-for="type in typeScale" :key="type.token">
              <div class="token-type__meta">
                <code class="token-type__token">{{ type.token }}</code>
                <span class="token-type__spec"
                  >{{ type.size }} / {{ type.lineHeight }} · {{ type.family }}</span
                >
              </div>
              <p
                class="token-type__sample"
                :style="{
                  fontFamily:
                    type.family === 'Inter' ? 'Inter, sans-serif' : 'Space Grotesk, sans-serif',
                  fontSize: type.size,
                  lineHeight: type.lineHeight,
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                }"
              >
                Isabella Viana — UX Designer
              </p>
            </div>
          </div>
        </div>

        <!-- Pesos -->
        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">{{ i18n.ds.tokens.weights }}</p>
          </div>
          <div class="ds-story__canvas ds-story__canvas--row">
            <div class="token-weight">
              <p class="token-weight__sample" style="font-weight: 400">Isabella Viana</p>
              <code class="token-weight__token">--font-regular → 400</code>
            </div>
            <div class="token-weight">
              <p class="token-weight__sample" style="font-weight: 700">Isabella Viana</p>
              <code class="token-weight__token">--font-bold → 700</code>
            </div>
          </div>
        </div>
      </section>

      <!-- ── Shadows ────────────────────────────────────── -->
      <section class="ds-section">
        <h2 class="ds-section__title">Shadows</h2>
        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">{{ i18n.ds.tokens.elevation }}</p>
            <p class="ds-story__description">
              {{ i18n.ds.tokens.elevationDesc }}
            </p>
          </div>
          <div class="ds-story__canvas ds-story__canvas--col" style="align-items: flex-start">
            <div v-for="s in shadowTokens" :key="s.token" class="token-shadow">
              <div class="token-shadow__preview" :style="{ boxShadow: s.valueDark }">
                <span class="token-shadow__label">dark</span>
              </div>
              <div
                class="token-shadow__preview token-shadow__preview--light"
                :style="{ boxShadow: s.valueLight }"
              >
                <span class="token-shadow__label token-shadow__label--light">light</span>
              </div>
              <div class="token-shadow__info">
                <code class="token-shadow__token">{{ s.token }}</code>
                <p class="token-shadow__desc">{{ s.desc }}</p>
                <p class="token-shadow__value">dark: {{ s.valueDark }}</p>
                <p class="token-shadow__value">light: {{ s.valueLight }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── Spacing ─────────────────────────────────────── -->
      <section class="ds-section">
        <h2 class="ds-section__title">Spacing</h2>

        <!-- Escala base -->
        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">{{ i18n.ds.tokens.baseScale }}</p>
            <p class="ds-story__description">
              {{ i18n.ds.tokens.baseScaleDesc }}
            </p>
          </div>
          <div class="ds-story__canvas ds-story__canvas--col" style="align-items: flex-start">
            <div class="token-spacing" v-for="s in spacingScale" :key="s.token">
              <code class="token-spacing__token">{{ s.token }}</code>
              <div
                class="token-spacing__bar"
                :style="{
                  width: s.value,
                  height: '24px',
                  backgroundColor: 'var(--color-primary)',
                  borderRadius: '2px',
                  opacity: 0.7,
                }"
              />
              <span class="token-spacing__value">{{ s.value }}</span>
            </div>
          </div>
        </div>

        <!-- Layout semântico -->
        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">{{ i18n.ds.tokens.semanticLayout }}</p>
            <p class="ds-story__description">
              {{ i18n.ds.tokens.semanticLayoutDesc }}
            </p>
          </div>
          <div class="ds-story__canvas ds-story__canvas--col" style="align-items: flex-start">
            <div class="token-spacing" v-for="s in spacingLayout" :key="s.token">
              <code class="token-spacing__token">{{ s.token }}</code>
              <div
                class="token-spacing__bar"
                :style="{
                  width: s.displayWidth,
                  height: '24px',
                  backgroundColor: 'var(--color-primary)',
                  borderRadius: '2px',
                  opacity: 0.7,
                }"
              />
              <span class="token-spacing__value">{{ s.value }} — {{ s.desc }}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </DesignSystemLayout>
</template>

<script setup>
import { computed } from 'vue'
import DesignSystemLayout from '@/layouts/DesignSystemLayout.vue'
import { useI18n } from '@/composables/useI18n'

const { i18n } = useI18n()

// ── Colors ──────────────────────────────────────────────────
const backgroundColors = computed(() => [
  {
    token: '--color-bg-main',
    value: '#0B0B0D',
    desc: i18n.value.ds.tokens.bgMain,
    border: '1px solid #27272A',
  },
  {
    token: '--color-bg-surface',
    value: '#1A1A1E',
    desc: i18n.value.ds.tokens.bgSurface,
    border: '1px solid #27272A',
  },
  {
    token: '--color-bg-primary',
    value: 'rgba(216, 76, 125, 0.05)',
    desc: i18n.value.ds.tokens.bgPrimary,
    border: '1px solid #27272A',
  },
])

const borderColors = computed(() => [
  { token: '--color-border-subtle', value: '#27272A', desc: i18n.value.ds.tokens.borderSubtle },
  {
    token: '--color-border-primary',
    value: 'rgba(216, 76, 125, 0.15)',
    desc: i18n.value.ds.tokens.borderPrimary,
  },
])

const textColors = computed(() => [
  { token: '--color-text-primary', value: '#F4F4F5', desc: i18n.value.ds.tokens.textPrimary },
  { token: '--color-text-secondary', value: '#A1A1AA', desc: i18n.value.ds.tokens.textSecondary },
  { token: '--color-text-on-primary', value: '#FFFFFF', desc: i18n.value.ds.tokens.textOnPrimary },
  { token: '--color-white', value: '#FFFFFF', desc: i18n.value.ds.tokens.colorWhite },
])

const brandColors = computed(() => [
  {
    token: '--color-primary',
    value: '#D84C7D',
    desc: i18n.value.ds.tokens.colorPrimary,
  },
])

const lightColors = computed(() => [
  { token: '--color-bg-main',        value: '#F7F8FA',                    desc: i18n.value.ds.tokens.bgMain },
  { token: '--color-bg-surface',     value: '#FFFFFF',                    desc: i18n.value.ds.tokens.bgSurface },
  { token: '--color-bg-primary',     value: 'rgba(216, 76, 125, 0.08)',   desc: i18n.value.ds.tokens.bgPrimaryLight },
  { token: '--color-bg-header',      value: 'rgba(247, 248, 250, 0.90)', desc: i18n.value.ds.tokens.bgHeader },
  { token: '--color-bg-mobile',      value: 'rgba(247, 248, 250, 0.98)', desc: i18n.value.ds.tokens.bgMobile },
  { token: '--color-border-subtle',  value: '#E6E9ED',                    desc: i18n.value.ds.tokens.borderSubtle },
  { token: '--color-border-primary', value: 'rgba(216, 76, 125, 0.15)',   desc: i18n.value.ds.tokens.borderPrimaryLight },
  { token: '--color-text-primary',   value: '#0F172A',                    desc: i18n.value.ds.tokens.textPrimaryLight },
  { token: '--color-text-secondary', value: '#64748B',                    desc: i18n.value.ds.tokens.textSecondary },
  { token: '--color-primary',        value: '#D84C7D',                    desc: i18n.value.ds.tokens.colorPrimaryLight },
  { token: '--color-text-on-primary', value: '#FFFFFF',                   desc: i18n.value.ds.tokens.textOnPrimaryLight },
  { token: '--color-white',          value: '#FFFFFF',                    desc: i18n.value.ds.tokens.colorWhite },
  { token: '--shadow-card-stack',    value: '0 -4px 24px rgba(0,0,0,.08)', desc: i18n.value.ds.tokens.shadowCardStackLight },
])

// ── Shadows ──────────────────────────────────────────────────
const shadowTokens = computed(() => [
  {
    token: '--shadow-card-stack',
    valueDark: '0 -4px 24px rgba(0, 0, 0, 0.4)',
    valueLight: '0 -4px 24px rgba(0, 0, 0, 0.08)',
    desc: i18n.value.ds.tokens.shadowCardStack,
  },
])

// ── Typography ───────────────────────────────────────────────
const typeScale = [
  { token: '--text-3xl', size: '64px', lineHeight: '72px', family: 'Space Grotesk', use: 'H1' },
  { token: '--text-2xl', size: '40px', lineHeight: '48px', family: 'Space Grotesk', use: 'H2' },
  { token: '--text-xl', size: '32px', lineHeight: '40px', family: 'Space Grotesk', use: 'H3' },
  { token: '--text-lg', size: '24px', lineHeight: '32px', family: 'Space Grotesk', use: 'H4' },
  { token: '--text-md', size: '20px', lineHeight: '30px', family: 'Inter', use: 'H5' },
  { token: '--text-sm', size: '16px', lineHeight: '24px', family: 'Space Grotesk', use: 'Body' },
  {
    token: '--text-xs',
    size: '14px',
    lineHeight: '20px',
    family: 'Space Grotesk',
    use: 'Caption / Nav / Buttons',
  },
]

// ── Spacing ──────────────────────────────────────────────────
const spacingScale = [
  { token: '--spacing-xs', value: '2px' },
  { token: '--spacing-sm', value: '4px' },
  { token: '--spacing-md', value: '8px' },
  { token: '--spacing-lg', value: '16px' },
  { token: '--spacing-xl', value: '24px' },
  { token: '--spacing-2xl', value: '32px' },
  { token: '--spacing-3xl', value: '64px' },
]

const spacingLayout = computed(() => [
  {
    token: '--spacing-section',
    value: '180px',
    displayWidth: '180px',
    desc: i18n.value.ds.tokens.spacingSection,
  },
  {
    token: '--spacing-section-title',
    value: '40px',
    displayWidth: '40px',
    desc: i18n.value.ds.tokens.spacingSectionTitle,
  },
])
</script>

<style scoped>
/* ── Color swatches ─────────────────────────────────────── */
.token-color-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  width: 100%;
}

.token-color {
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
}

.token-color__swatch {
  width: 64px;
  height: 64px;
  border-radius: var(--spacing-xs);
  flex-shrink: 0;
}

.token-color__info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.token-color__token {
  font-family: 'Fira Code', 'Courier New', monospace;
  font-size: var(--text-xs);
  color: var(--color-primary);
}

.token-color__value {
  font-family: var(--font-family-base);
  font-size: var(--text-xs);
  color: var(--color-text-primary);
  font-weight: var(--font-bold);
}

.token-color__desc {
  font-family: var(--font-family-support);
  font-size: var(--text-xs);
  color: var(--color-text-secondary);
}

/* ── Typography ─────────────────────────────────────────── */
.token-family {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  padding: var(--spacing-xl);
  border: 0.5px solid var(--color-border-subtle);
  border-radius: var(--spacing-xs);
  width: 100%;
}

.token-family__name {
  font-family: var(--font-family-base);
  font-size: var(--text-xs);
  font-weight: var(--font-bold);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--color-text-secondary);
}

.token-family__sample--base {
  font-family: var(--font-family-base);
  font-size: var(--text-lg);
  color: var(--color-text-primary);
  line-height: 1.6;
}

.token-family__sample--support {
  font-family: var(--font-family-support);
  font-size: var(--text-lg);
  color: var(--color-text-primary);
  line-height: 1.6;
}

.token-family__token {
  font-family: 'Fira Code', 'Courier New', monospace;
  font-size: var(--text-xs);
  color: var(--color-primary);
}

/* Escala tipográfica */
.token-type {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  width: 100%;
  padding-bottom: var(--spacing-xl);
  border-bottom: 0.5px solid var(--color-border-subtle);
}

.token-type:last-child {
  border-bottom: none;
}

.token-type__meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
}

.token-type__token {
  font-family: 'Fira Code', 'Courier New', monospace;
  font-size: 12px;
  color: var(--color-primary);
  background-color: var(--color-bg-primary);
  padding: 2px 6px;
  border-radius: 2px;
}

.token-type__spec {
  font-family: var(--font-family-base);
  font-size: var(--text-xs);
  color: var(--color-text-secondary);
}

.token-type__sample {
  margin: 0;
}

/* Pesos */
.token-weight {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  align-items: center;
}

.token-weight__sample {
  font-family: var(--font-family-base);
  font-size: var(--text-xl);
  color: var(--color-text-primary);
  line-height: 1;
}

.token-weight__token {
  font-family: 'Fira Code', 'Courier New', monospace;
  font-size: 12px;
  color: var(--color-primary);
  background-color: var(--color-bg-primary);
  padding: 2px 6px;
  border-radius: 2px;
}

/* ── Shadows ────────────────────────────────────────────── */
.token-shadow {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-xl);
  width: 100%;
  padding-bottom: var(--spacing-xl);
  border-bottom: 0.5px solid var(--color-border-subtle);
}

.token-shadow:last-child {
  border-bottom: none;
}

.token-shadow__preview {
  width: 80px;
  height: 80px;
  border-radius: var(--spacing-xs);
  background-color: var(--color-bg-surface);
  border: 0.5px solid var(--color-border-subtle);
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: var(--spacing-sm);
}

.token-shadow__preview--light {
  background-color: #ffffff;
}

.token-shadow__label {
  font-family: var(--font-family-base);
  font-size: 11px;
  font-weight: var(--font-bold);
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--color-text-secondary);
}

.token-shadow__label--light {
  color: #64748b;
}

.token-shadow__info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.token-shadow__token {
  font-family: 'Fira Code', 'Courier New', monospace;
  font-size: 12px;
  color: var(--color-primary);
  background-color: var(--color-bg-primary);
  padding: 2px 6px;
  border-radius: 2px;
  width: fit-content;
}

.token-shadow__desc {
  font-family: var(--font-family-support);
  font-size: var(--text-xs);
  color: var(--color-text-secondary);
}

.token-shadow__value {
  font-family: 'Fira Code', 'Courier New', monospace;
  font-size: 11px;
  color: var(--color-text-secondary);
}

/* ── Spacing ────────────────────────────────────────────── */
.token-spacing {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
}

.token-spacing__token {
  font-family: 'Fira Code', 'Courier New', monospace;
  font-size: 12px;
  color: var(--color-primary);
  background-color: var(--color-bg-primary);
  padding: 2px 6px;
  border-radius: 2px;
  min-width: 160px;
}

.token-spacing__value {
  font-family: var(--font-family-base);
  font-size: var(--text-xs);
  color: var(--color-text-secondary);
  white-space: nowrap;
}
</style>
