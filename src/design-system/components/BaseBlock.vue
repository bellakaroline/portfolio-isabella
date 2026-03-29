<template>
  <div
    :class="[
      'bloco',
      `bloco--${direction}`,
      { 'bloco--hover-preview': hoverPreview },
    ]"
  >

    <!-- ── LEFT ──────────────────────────────────────────── -->
    <template v-if="direction === 'left'">

      <!-- Linha superior: badge + conteúdo de texto -->
      <div class="bloco__row">
        <BaseBadge v-if="icon" :icon="icon" size="large" />

        <div class="bloco__body">
          <p v-if="title" class="bloco__title">{{ title }}</p>
          <p class="bloco__subtitle">{{ subtitle }}</p>
          <p v-if="content" class="bloco__content">{{ content }}</p>
        </div>
      </div>

      <!-- Botão — opcional -->
      <div v-if="buttonText" class="bloco__textbtn">
        <div class="bloco__textbtn-badge">
          <span class="bloco__textbtn-icon material-symbols-outlined" aria-hidden="true">
            {{ buttonIcon }}
          </span>
        </div>
        <span class="bloco__textbtn-label">{{ buttonText }}</span>
      </div>

    </template>

    <!-- ── RIGHT ─────────────────────────────────────────── -->
    <template v-else-if="direction === 'right'">
      <div class="bloco__content bloco__content--right">
        <p class="bloco__number">{{ title }}</p>
        <p class="bloco__label">{{ subtitle }}</p>
      </div>
      <BaseBadge :icon="icon" size="large" />
    </template>

    <!-- ── CENTER ────────────────────────────────────────── -->
    <template v-else>
      <BaseBadge :icon="icon" size="large" />
      <div class="bloco__content bloco__content--center">
        <p class="bloco__number">{{ title }}</p>
        <p class="bloco__label">{{ subtitle }}</p>
      </div>
    </template>

  </div>
</template>

<script setup>
import BaseBadge from './BaseBadge.vue'

defineProps({
  // Ícone exibido no Badge (Material Symbols). Se null, badge não é renderizado.
  icon: {
    type: String,
    default: null,
  },
  // Texto em destaque — rosa. Se null, não é renderizado.
  title: {
    type: String,
    default: null,
  },
  // Label principal — uppercase bold, sempre visível
  subtitle: {
    type: String,
    default: 'SUBTÍTULO DO BLOCO',
  },
  // Descrição — opcional (só na variante left)
  content: {
    type: String,
    default: null,
  },
  // Texto do botão — opcional; se null, botão não aparece
  buttonText: {
    type: String,
    default: null,
  },
  // Ícone do botão
  buttonIcon: {
    type: String,
    default: 'call_made',
  },
  // Layout do bloco
  direction: {
    type: String,
    default: 'left',
    validator: (v) => ['left', 'right', 'center'].includes(v),
  },
  // Força estado hover (útil no Design System / storybook)
  hoverPreview: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
/* ─── Base ──────────────────────────────────────────────── */
.bloco {
  display: flex;
  gap: var(--spacing-2xl); /* 32px */
  padding: var(--spacing-2xl);
  background-color: var(--color-bg-surface);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--spacing-xs);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition:
    background-color 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
  width: 100%;
}

/* ─── Hover geral ───────────────────────────────────────── */
.bloco:hover,
.bloco--hover-preview {
  background-color: var(--color-bg-primary);
  border-color: var(--color-border-primary);
  box-shadow: 0px 0px 36px 0px rgba(216, 76, 125, 0.15);
}

/* Cascateia hover para o BaseBadge e para o badge do botão */
.bloco:hover :deep(.badge),
.bloco--hover-preview :deep(.badge) {
  background-color: var(--color-bg-primary);
  border-color: var(--color-border-primary);
}

.bloco:hover .bloco__textbtn-badge,
.bloco--hover-preview .bloco__textbtn-badge {
  background-color: var(--color-bg-primary);
  border-color: var(--color-border-primary);
}

/* ─── LEFT ──────────────────────────────────────────────── */
.bloco--left {
  flex-direction: column;
  align-items: flex-end;
}

.bloco__row {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-2xl);
  width: 100%;
}

.bloco__body {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md); /* 8px */
  flex: 1;
  min-width: 0;
}

/* Título — rosa, xs, bold, uppercase */
.bloco__title {
  font-family: var(--font-family-base);
  font-size: var(--text-xs); /* 14px */
  font-weight: var(--font-bold);
  letter-spacing: 0.28px;
  color: var(--color-primary);
  line-height: 20px;
  text-transform: uppercase;
  white-space: normal;
}

/* Subtítulo — secondary, sm, bold, uppercase */
.bloco__subtitle {
  font-family: var(--font-family-base);
  font-size: var(--text-sm); /* 16px */
  font-weight: var(--font-bold);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

/* Conteúdo — Inter, secondary, regular */
.bloco__content {
  font-family: var(--font-family-support); /* Inter */
  font-size: var(--text-sm); /* 16px */
  font-weight: var(--font-regular);
  letter-spacing: 0.32px;
  color: var(--color-text-secondary);
  line-height: 24px;
}

/* Botão inline ─────────────────────────────────────────── */
.bloco__textbtn {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-lg); /* 16px */
  padding: var(--spacing-md) var(--spacing-lg);
  cursor: pointer;
}

.bloco__textbtn-badge {
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

.bloco__textbtn-icon {
  font-size: 16px;
  color: var(--color-primary);
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  line-height: 1;
}

.bloco__textbtn-label {
  font-family: var(--font-family-base);
  font-size: var(--text-sm); /* 16px */
  font-weight: var(--font-bold);
  letter-spacing: 0.32px;
  text-transform: uppercase;
  color: var(--color-primary);
  white-space: nowrap;
  line-height: 24px;
  transition: text-shadow 0.25s ease;
}

.bloco:hover .bloco__textbtn-label,
.bloco--hover-preview .bloco__textbtn-label {
  text-shadow: 0px 0px 20px rgba(216, 76, 125, 0.7);
}

/* ─── RIGHT ─────────────────────────────────────────────── */
.bloco--right {
  justify-content: flex-end;
  align-items: center;
  min-height: 118px;
}

/* ─── CENTER ────────────────────────────────────────────── */
.bloco--center {
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  min-height: 204px;
}

/* ─── Conteúdo right / center (legado) ─────────────────── */
.bloco__content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.bloco__content--right {
  align-items: flex-end;
  width: 374px;
}

.bloco__content--center {
  align-items: center;
  text-align: center;
  width: 100%;
}

.bloco__number {
  font-family: var(--font-family-base);
  font-size: var(--text-xs);
  font-weight: var(--font-bold);
  letter-spacing: 0.28px;
  color: var(--color-primary);
  line-height: 20px;
  text-transform: uppercase;
  white-space: normal;
}

.bloco__label {
  font-family: var(--font-family-base);
  font-size: var(--text-sm);
  font-weight: var(--font-bold);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.bloco__content--left .bloco__label,
.bloco__content--right .bloco__label {
  text-align: inherit;
  white-space: nowrap;
}
</style>
