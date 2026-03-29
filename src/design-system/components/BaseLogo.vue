<template>
  <RouterLink :to="to" class="logo" :aria-label="'Ir para ' + to">
    <span class="logo__bold">ISABELLA</span>
    <span class="logo__regular">VIANA</span>
  </RouterLink>
</template>

<script setup>
defineProps({
  // Destino do link — padrão é a home
  to: {
    type: String,
    default: '/',
  },
})
</script>

<style scoped>
.logo {
  display: inline-flex;
  gap: 4px;
  align-items: baseline;
  text-decoration: none;
  flex-shrink: 0;
}

.logo__bold,
.logo__regular {
  font-family: var(--font-family-base);
  font-size: var(--text-xs); /* 14px */
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--color-text-primary);
  line-height: 1;
  transition: color 0.2s ease;
}

.logo__bold {
  font-weight: var(--font-bold);
}
.logo__regular {
  font-weight: var(--font-regular);
}

.logo:hover .logo__bold,
.logo:hover .logo__regular {
  color: var(--color-primary);
}
</style>
