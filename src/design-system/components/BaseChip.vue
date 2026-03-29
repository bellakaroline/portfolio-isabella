<template>
  <div :class="['chip', `chip--${variant}`]">
    <span v-if="variant === 'section-title'" class="chip__diamond" aria-hidden="true" />
    <p class="chip__label">{{ content }}</p>
    <span v-if="variant === 'section-title'" class="chip__diamond" aria-hidden="true" />
  </div>
</template>

<script setup>
defineProps({
  content: {
    type: String,
    default: 'LABEL',
  },
  // 'outline'       → fundo surface + borda sutil (stacks, tags)
  // 'section-title' → sem borda, losangos pink (títulos de seção)
  variant: {
    type: String,
    default: 'outline',
    validator: (value) => ['outline', 'section-title'].includes(value),
  },
})
</script>

<style scoped>
.chip {
  display: inline-flex;
  width: fit-content; /* hug contents */
  align-items: center;
  justify-content: center;
  padding: var(--spacing-md) var(--spacing-lg); /* 8px 16px */
  border-radius: var(--spacing-xs);             /* 2px */
  gap: var(--spacing-section-title);            /* 40px */
}

.chip--outline {
  background-color: var(--color-bg-surface);
  border: 0.5px solid var(--color-border-subtle);
}

.chip--section-title {
  background-color: transparent;
  border: none;
}

.chip__label {
  font-family: var(--font-family-base);
  font-size: var(--text-sm);
  font-weight: var(--font-bold);
  line-height: 1.6;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  white-space: nowrap;
}

.chip__diamond {
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: var(--color-primary);
  transform: rotate(45deg);
  flex-shrink: 0;
}
</style>