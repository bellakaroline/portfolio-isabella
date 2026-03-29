<template>
  <div class="star-bg" aria-hidden="true">
    <!-- Estrelas estáticas pequenas (pontos) -->
    <div
      v-for="star in staticStars"
      :key="star.id"
      class="star-bg__dot"
      :style="{
        left: star.x + '%',
        top: star.y + '%',
        width: star.size + 'px',
        height: star.size + 'px',
        animationDelay: star.delay + 's',
        animationDuration: star.duration + 's',
      }"
    />

    <!-- Estrelas com rastro (moving stars) -->
    <div
      v-for="star in movingStars"
      :key="'m' + star.id"
      class="star-bg__moving"
      :style="{
        left: star.x + '%',
        top: star.y + '%',
        animationDelay: star.delay + 's',
        animationDuration: star.duration + 's',
      }"
    >
      <div class="star-bg__trail" />
    </div>
  </div>
</template>

<script setup>
// Gera estrelas com posições determinísticas baseadas no índice
// (evita re-render com valores diferentes a cada mount)
const staticStars = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  x: ((i * 127.3) % 100).toFixed(2),
  y: ((i * 83.7) % 100).toFixed(2),
  size: (i % 3) + 1, // 1, 2 ou 3px
  delay: -((i * 1.7) % 8), // delay negativo = já animando
  duration: 3 + ((i * 0.7) % 4), // 3s a 7s
}))

const movingStars = Array.from({ length: 5 }, (_, i) => ({
  id: i,
  x: [28, 87, 68, 45, 15][i],
  y: [45, 52, 35, 72, 25][i],
  delay: -(i * 2.3),
  duration: 2 + i * 0.5,
}))
</script>

<style scoped>
/* ─── Container ─────────────────────────────────────────── */
.star-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

/* ─── Estrela ponto ─────────────────────────────────────── */
.star-bg__dot {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
  animation: star-twinkle linear infinite;
}

@keyframes star-twinkle {
  0%,
  100% {
    opacity: 0.1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.3);
  }
}

/* ─── Estrela com rastro ────────────────────────────────── */
.star-bg__moving {
  position: absolute;
  width: 69px;
  height: 69px;
  overflow: hidden;
  animation: star-move linear infinite;
}

/* Linha diagonal com gradiente — fiel ao Figma */
.star-bg__trail {
  position: absolute;
  width: 1.4px;
  height: 96px;
  border-radius: 55px;
  background: linear-gradient(-1.7deg, rgb(18, 18, 23) 12%, rgb(255, 255, 255) 100%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
}

@keyframes star-move {
  0% {
    opacity: 0;
    transform: translate(0, 0);
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(-30px, 30px);
  }
}
</style>
