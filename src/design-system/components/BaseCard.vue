<template>
  <div class="card">
    <p v-if="title" class="card__title">{{ title }}</p>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: null },
})
</script>

<style scoped>
.card {
  border-left: 2px solid var(--color-primary);
  background: var(--color-bg-primary);
  padding: var(--spacing-xl) var(--spacing-2xl);
  border-radius: 0 var(--spacing-xs) var(--spacing-xs) 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.card__title {
  font-family: var(--font-family-base);
  font-size: var(--text-sm);
  font-weight: var(--font-bold);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-primary);
}
</style>
