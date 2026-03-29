<template>
  <div :class="['badge', `badge--${size}`]">
    <span
      class="badge__icon material-symbols-outlined"
      aria-hidden="true"
    >
      {{ icon }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  // Nome do ícone do Material Symbols
  icon: {
    type: String,
    default: 'call_made',
  },
  // 'small'  → 32x32, ícone 16px
  // 'medium' → 40x40, ícone 20px
  // 'large'  → 54x54, ícone 24px
  size: {
    type: String,
    default: 'medium',
    validator: (v) => ['small', 'medium', 'large'].includes(v),
  },
})
</script>

<style scoped>
/* ─── Base ─────────────────────────────────────────────── */
.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
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

/* ─── Hover ─────────────────────────────────────────────── */
.badge:hover {
  background-color: var(--color-bg-primary);   /* rgba(216,76,125,0.05) */
  border-color: var(--color-border-primary);   /* rgba(216,76,125,0.15) */
}

/* ─── Tamanhos ──────────────────────────────────────────── */
.badge--small  { width: 32px; height: 32px; }
.badge--medium { width: 40px; height: 40px; }
.badge--large  { width: 54px; height: 54px; }

/* ─── Ícone ─────────────────────────────────────────────── */
.badge__icon {
  color: var(--color-primary);
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  line-height: 1;
}

.badge--small  .badge__icon { font-size: 16px; }
.badge--medium .badge__icon { font-size: 20px; }
.badge--large  .badge__icon { font-size: 24px; }
</style>