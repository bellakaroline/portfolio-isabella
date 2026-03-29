<template>
  <div class="home">
    <!-- ── Hero ─────────────────────────────────────────── -->
    <section class="hero">
      <StarBackground />

      <!-- Header: navbar + language switcher -->
      <div class="hero__header">
        <BaseNavbar />
        <div class="hero__languages">
          <img src="#" alt="English" class="hero__flag" />
          <img src="#" alt="Português" class="hero__flag" />
        </div>
      </div>

      <!-- Conteúdo central -->
      <div class="hero__content">
        <BaseChip content="PRODUCT UX DESIGNER" variant="section-title" />

        <div class="hero__text">
          <h1 class="hero__title">Isabella Viana</h1>
          <p class="hero__description">
            UX Designer com background em desenvolvimento.<br />
            Especialista em produtos digitais, fluxos complexos<br />
            e colaboração próxima com times de desenvolvimento.
          </p>
        </div>

        <div class="hero__buttons">
          <BaseButton
            text="Contate-me"
            variant="primary"
            size="large"
            :prepend="false"
            :append="false"
            @click="openWhatsApp"
          />
          <BaseButton
            text="Explorar Projetos"
            variant="outline"
            size="large"
            :prepend="false"
            append-icon="call_made"
          />
        </div>
      </div>
    </section>

    <!-- ── Stacks ────────────────────────────────────────── -->
    <section class="section stacks">
      <BaseChip
        content="Ferramentas e tecnologias que utilizo no dia a dia"
        variant="section-title"
      />
      <div class="stacks__grid">
        <BaseChip v-for="stack in stacks" :key="stack" :content="stack" variant="outline" />
      </div>
    </section>

    <!-- ── Projetos ──────────────────────────────────────── -->
    <section class="section projects">
      <BaseChip content="Projetos em destaque" variant="section-title" />
      <div class="projects__grid">
        <BaseCard
          v-for="project in projects"
          :key="project.number"
          :number="project.number"
          :title="project.title"
          :description="project.description"
          :image-label="`CASE ${project.number}`"
          :tags="project.tags"
          button-text="VER CASE"
        />
      </div>
    </section>

    <!-- ── Como trabalho ─────────────────────────────────── -->
    <section class="section work">
      <BaseChip content="Como eu trabalho" variant="section-title" />
      <div class="work__grid">
        <!-- Coluna esquerda (right direction — conteúdo alinhado à direita) -->
        <div class="work__col work__col--left">
          <BaseBlock
            direction="right"
            number="01"
            label="Pesquisa e entendimento do problema"
            icon="search"
          />
          <BaseBlock direction="right" number="03" label="Prototipação e validação" icon="layers" />
          <BaseBlock
            direction="right"
            number="05"
            label="Iteração baseada em feedback"
            icon="autorenew"
          />
        </div>

        <!-- Coluna direita (left direction — badge à esquerda) -->
        <div class="work__col work__col--right">
          <BaseBlock
            direction="left"
            number="02"
            label="Mapeamento de fluxos"
            icon="account_tree"
          />
          <BaseBlock
            direction="left"
            number="04"
            label="Documentação e handoff"
            icon="description"
          />
        </div>
      </div>
    </section>

    <!-- ── Sobre mim ─────────────────────────────────────── -->
    <section class="section about">
      <div class="about__inner">
        <div class="about__image">
          <!-- placeholder até ter a foto -->
        </div>
        <div class="about__content">
          <div class="about__head">
            <p class="about__label">ISABELLA VIANA</p>
            <h2 class="about__title">Sobre Mim</h2>
          </div>
          <p class="about__text">
            UX Designer com background em Análise e Desenvolvimento de Sistemas.
          </p>
          <p class="about__text">
            Trabalho na interseção entre design e engenharia, projetando produtos digitais com foco
            em clareza, fluxos eficientes e colaboração com desenvolvimento.
          </p>
          <p class="about__text">
            Atualmente atuo em software jurídico, desenhando soluções para problemas complexos
            dentro de sistemas profissionais.
          </p>
        </div>
      </div>
    </section>

    <!-- ── CTA ───────────────────────────────────────────── -->
    <BaseCTA />

    <!-- ── Footer ────────────────────────────────────────── -->
    <BaseFooter />
  </div>
</template>

<script setup>
import BaseChip from '@/design-system/components/BaseChip.vue'
import BaseButton from '@/design-system/components/BaseButton.vue'
import BaseCard from '@/design-system/components/BaseCard.vue'
import BaseBlock from '@/design-system/components/BaseBlock.vue'
import BaseNavbar from '@/design-system/components/BaseNavbar.vue'
import BaseFooter from '@/design-system/components/BaseFooter.vue'
import BaseCTA from '@/design-system/components/BaseCTA.vue'
import StarBackground from '@/design-system/components/StarBackground.vue'

const WHATSAPP = 'https://api.whatsapp.com/send?phone=5567993225063'
function openWhatsApp() { window.open(WHATSAPP, '_blank') }

const stacks = [
  'Figma',
  'UX Research',
  'Design System',
  'Product Thinking',
  'Javascript',
  'Vue.js',
  'Vuetify',
  'Git',
]

const projects = [
  {
    number: '01',
    title: 'Design System Escalável para portfólio',
    description:
      'Criação de um design system completo para garantir consistência visual e acelerar o desenvolvimento de novas funcionalidades.',
    tags: ['Design system', 'Product UX', 'Documentation'],
  },
  {
    number: '02',
    title: 'Redesign de app financeiro com foco em clareza',
    description:
      'Projeto desenvolvido com o objetivo de unificar wallet cripto, banco digital, Pix e exchange em uma única aplicação.',
    tags: ['Fintech', 'Fluxos Complexos', 'UX Research'],
  },
  {
    number: '03',
    title: 'Experiência web imersiva para plataforma financeira',
    description:
      'Contribuí criando elementos visuais interativos que tornam o site dinâmico, intuitivo e visualmente envolvente, garantindo alta usabilidade e identidade da marca.',
    tags: ['UX Design', 'UI Design', 'Blender', '3D'],
  },
]
</script>

<style scoped>
/* ─── Página ────────────────────────────────────────────── */
.home {
  background-color: var(--color-bg-main);
  min-height: 100vh;
}

/* ─── Seção base ────────────────────────────────────────── */
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-section-title); /* 40px */
  padding: var(--spacing-section) 0; /* 180px top/bottom */
  max-width: 1280px;
  margin: 0 auto;
}

/* ─── Hero ──────────────────────────────────────────────── */
.hero {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid var(--color-border-primary);
  overflow: hidden;
}

/* Fundo animado — imagem de estrelas */
.hero__bg {
  position: absolute;
  inset: 0;
  background-color: var(--color-bg-main);
  /* Quando tiver a imagem de fundo: */
  /* background-image: url('/bg-stars.png'); */
  /* background-size: cover; */
  z-index: 0;
}

/* Header */
.hero__header {
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 180px;
  padding: var(--spacing-xl) 0; /* 24px */
}

/* Seletor de idioma */
.hero__languages {
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
  padding: var(--spacing-lg) var(--spacing-xl);
  background-color: var(--color-bg-surface);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--spacing-xs);
  backdrop-filter: blur(30px);
}

.hero__flag {
  width: 30px;
  height: 22px;
  object-fit: cover;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s ease;
  border-radius: 2px;
}

.hero__flag:hover {
  opacity: 1;
}

/* Conteúdo central */
.hero__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-section-title); /* 40px */
  padding: 0 0 var(--spacing-section);
  max-width: 1280px;
  width: 100%;
}

.hero__text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
}

.hero__title {
  font-family: var(--font-family-base);
  font-size: var(--text-3xl); /* 64px */
  font-weight: var(--font-regular);
  line-height: 72px;
  letter-spacing: 1.28px;
  text-transform: uppercase;
  color: var(--color-text-primary);
}

.hero__description {
  font-family: var(--font-family-support); /* Inter */
  font-size: var(--text-md); /* 20px */
  font-weight: var(--font-regular);
  line-height: 30px;
  letter-spacing: 0.4px;
  color: var(--color-text-secondary);
}

.hero__buttons {
  display: flex;
  align-items: center;
  gap: var(--spacing-xl); /* 24px */
}

/* ─── Stacks ────────────────────────────────────────────── */
.stacks__grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--spacing-xl); /* 24px */
  max-width: 720px;
}

/* ─── Projetos ──────────────────────────────────────────── */
.projects__grid {
  display: flex;
  gap: var(--spacing-lg); /* 16px */
  flex-wrap: wrap;
  justify-content: center;
}

/* ─── Como trabalho ─────────────────────────────────────── */
.work__grid {
  display: flex;
  gap: var(--spacing-lg);
  align-items: flex-start;
}

.work__col {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

/* Coluna da esquerda alinha ao topo */
.work__col--left {
  padding-top: 0;
}

/* Coluna da direita é deslocada pra baixo para intercalar */
.work__col--right {
  padding-top: calc(118px + var(--spacing-lg)); /* altura de 1 bloco + gap */
}

/* ─── Sobre mim ─────────────────────────────────────────── */
.about__inner {
  display: flex;
  gap: var(--spacing-2xl); /* 32px */
  width: 1280px;
  height: 398px;
  background-color: var(--color-bg-surface);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--spacing-xs);
  overflow: hidden;
  padding: var(--spacing-2xl);
}

.about__image {
  width: 491px;
  flex-shrink: 0;
  background-color: var(--color-bg-main);
  border-radius: var(--spacing-xs);
  /* quando tiver a foto: background-image: url('/foto.jpg'); background-size: cover; */
}

.about__content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  flex: 1;
}

.about__head {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.about__label {
  font-family: var(--font-family-base);
  font-size: var(--text-xs);
  font-weight: var(--font-bold);
  letter-spacing: 0.28px;
  color: var(--color-text-secondary);
}

.about__title {
  font-family: var(--font-family-base);
  font-size: var(--text-lg); /* 24px */
  font-weight: var(--font-regular);
  letter-spacing: 0.48px;
  color: var(--color-primary);
  line-height: 32px;
}

.about__text {
  font-family: var(--font-family-support);
  font-size: var(--text-md); /* 20px */
  font-weight: var(--font-regular);
  line-height: 30px;
  letter-spacing: 0.4px;
  color: var(--color-text-secondary);
}

/* ─── CTA ───────────────────────────────────────────────── */
.cta {
  position: relative;
  width: 100%;
  height: 562px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--color-border-primary);
  overflow: hidden;
}

.cta__bg {
  position: absolute;
  inset: 0;
  background-color: var(--color-bg-main);
  z-index: 0;
}

.cta__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-section-title); /* 40px */
  text-align: center;
  max-width: 668px;
}

.cta__title {
  font-family: var(--font-family-base);
  font-size: var(--text-3xl); /* 64px */
  font-weight: var(--font-regular);
  line-height: 72px;
  letter-spacing: 1.28px;
  text-transform: uppercase;
  color: var(--color-text-primary);
}

.cta__description {
  font-family: var(--font-family-support);
  font-size: var(--text-md);
  font-weight: var(--font-regular);
  line-height: 30px;
  color: var(--color-text-secondary);
}
</style>
