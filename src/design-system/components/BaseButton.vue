<template>
  <button
    :class="[
      'btn',
      `btn--${variant}`,
      `btn--${size}`,
    ]"
    :type="type"
    v-bind="$attrs"
  >
    <!-- Ícone prepend -->
    <span
      v-if="prepend"
      class="btn__icon material-symbols-outlined"
      aria-hidden="true"
    >
      {{ prependIcon }}
    </span>

    <!-- Texto -->
    <span class="btn__label">{{ text }}</span>

    <!-- Ícone append -->
    <span
      v-if="append"
      class="btn__icon material-symbols-outlined"
      aria-hidden="true"
    >
      {{ appendIcon }}
    </span>
  </button>
</template>

<script setup>
defineProps({
  // Texto do botão
  text: {
    type: String,
    default: 'Button',
  },
  // 'primary' → fundo pink
  // 'outline' → sem fundo, com borda
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'outline'].includes(v),
  },
  // 'large'  → padding 16px 32px, font 16px
  // 'medium' → padding 12px 24px, font 14px
  size: {
    type: String,
    default: 'large',
    validator: (v) => ['large', 'medium'].includes(v),
  },
  // Ícone antes do texto (nome do Material Symbol)
  prependIcon: {
    type: String,
    default: 'call_made',
  },
  prepend: {
    type: Boolean,
    default: true,
  },
  // Ícone depois do texto (nome do Material Symbol)
  appendIcon: {
    type: String,
    default: 'call_made',
  },
  append: {
    type: Boolean,
    default: true,
  },
  // Tipo nativo do button
  type: {
    type: String,
    default: 'button',
  },
})
</script>

<style scoped>
/* ─── Base ─────────────────────────────────────────────── */
.btn {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: var(--spacing-xs); /* 2px */
  border: 1px solid transparent;
  cursor: pointer;
  text-decoration: none;
  transition:
    box-shadow 0.25s ease,
    border-color 0.25s ease,
    color 0.25s ease,
    text-shadow 0.25s ease;
}

/* ─── Tamanhos ──────────────────────────────────────────── */
.btn--large {
  padding: var(--spacing-lg) var(--spacing-2xl); /* 16px 32px */
}

.btn--medium {
  padding: 12px 24px;
}

/* ─── Texto ─────────────────────────────────────────────── */
.btn__label {
  font-family: var(--font-family-base);
  font-weight: var(--font-bold);
  letter-spacing: 0.32px;
  text-transform: uppercase;
  white-space: nowrap;
  line-height: 1;
}

.btn--large .btn__label {
  font-size: var(--text-sm);   /* 16px */
  line-height: 24px;
  letter-spacing: 0.32px;
}

.btn--medium .btn__label {
  font-size: var(--text-xs);   /* 14px */
  line-height: 20px;
  letter-spacing: 0.28px;
}

/* ─── Ícone ─────────────────────────────────────────────── */
.btn__icon {
  font-size: 24px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Material Symbols — filled, sem ligatures extras */
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  line-height: 1;
  flex-shrink: 0;
}

/* ─── Variante: Primary ─────────────────────────────────── */
.btn--primary {
  background-color: var(--color-primary);
  border-color: transparent;
  color: var(--color-text-on-primary);
}

.btn--primary:hover {
  box-shadow: 0px 0px 20px 0px rgba(216, 76, 125, 0.7);
}

/* ─── Variante: Outline ─────────────────────────────────── */
.btn--outline {
  background-color: transparent;
  border-color: var(--color-border-subtle); /* #27272A */
  color: var(--color-text-secondary);       /* #A1A1AA */
}

.btn--outline:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
  box-shadow: 0px 0px 20px 0px rgba(216, 76, 125, 0.7);
  text-shadow: 0px 0px 20px rgba(216, 76, 125, 0.7);
}

/* Ícone acompanha a cor do texto no outline */
.btn--outline .btn__icon {
  transition: color 0.25s ease;
}
</style>