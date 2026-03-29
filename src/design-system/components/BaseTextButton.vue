<template>
  <button class="text-btn" :type="type" v-bind="$attrs">
    <BaseBadge :icon="icon" size="medium" />
    <span class="text-btn__label">{{ text }}</span>
  </button>
</template>

<script setup>
import BaseBadge from './BaseBadge.vue'

defineProps({
  // Texto do botão
  text: {
    type: String,
    default: 'Button',
  },
  // Ícone do Material Symbols exibido no Badge
  icon: {
    type: String,
    default: 'call_made',
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
.text-btn {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: var(--spacing-lg); /* 16px */
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  text-decoration: none;
  transition: opacity 0.25s ease;
}

/* ─── Texto ─────────────────────────────────────────────── */
.text-btn__label {
  font-family: var(--font-family-base);
  font-size: var(--text-xs);      /* 14px */
  font-weight: var(--font-bold);
  line-height: 20px;
  letter-spacing: 0.28px;
  text-transform: uppercase;
  color: var(--color-primary);
  white-space: nowrap;
  transition: text-shadow 0.25s ease;
}

/* ─── Hover ─────────────────────────────────────────────── */
/* O Badge já tem seu próprio hover (bg-primary + border-primary) */
/* Aqui a gente adiciona o glow no texto */
.text-btn:hover .text-btn__label {
  text-shadow: 0px 0px 20px rgba(216, 76, 125, 0.7);
}
</style>