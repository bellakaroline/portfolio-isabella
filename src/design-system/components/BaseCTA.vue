<template>
  <section :id="id" class="cta">
    <StarBackground class="cta__bg" />
    <div class="cta__content">
      <h2 class="cta__title">{{ i18n.cta.title }}</h2>
      <p class="cta__subtitle">{{ i18n.cta.subtitle }}</p>

      <div class="cta__buttons">
        <BaseButton
          :text="i18n.cta.contactBtn"
          variant="primary"
          size="large"
          :prepend="false"
          :append="true"
          append-icon="call_made"
          @click="openWhatsApp"
        />
        <BaseButton
          v-if="showBack"
          :text="i18n.cta.backBtn"
          variant="outline"
          size="large"
          :prepend="false"
          :append="false"
          @click="router.push('/#projetos')"
        />
      </div>

      <div v-if="showSocials" class="cta__socials">
        <a
          href="https://www.linkedin.com/in/isabella-viana/"
          target="_blank"
          rel="noopener noreferrer"
          class="cta__social"
        >
          <div class="cta__social-badge">
            <span class="material-symbols-outlined cta__social-icon">call_made</span>
          </div>
          <span class="cta__social-label">LinkedIn</span>
        </a>
        <a
          href="https://www.instagram.com/isabellaksviana"
          target="_blank"
          rel="noopener noreferrer"
          class="cta__social"
        >
          <div class="cta__social-badge">
            <span class="material-symbols-outlined cta__social-icon">call_made</span>
          </div>
          <span class="cta__social-label">Instagram</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import StarBackground from './StarBackground.vue'
import BaseButton from './BaseButton.vue'
import { useI18n } from '@/composables/useI18n'

defineProps({
  id: { type: String, default: null },
  showSocials: { type: Boolean, default: false },
  showBack: { type: Boolean, default: false },
})

const router = useRouter()
const { i18n } = useI18n()

const WHATSAPP = 'https://api.whatsapp.com/send?phone=5567993225063'
function openWhatsApp() { window.open(WHATSAPP, '_blank') }
</script>

<style scoped>
.cta {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 160px 24px;
  border-top: 1px solid var(--color-border-subtle);
}

.cta__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.cta__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;
  max-width: 720px;
  width: 100%;
}

.cta__title {
  font-family: var(--font-family-base);
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 400;
  text-transform: uppercase;
  color: var(--color-text-primary);
  line-height: 1;
  letter-spacing: -0.02em;
}

.cta__subtitle {
  font-family: var(--font-family-support);
  font-size: var(--text-md);
  font-weight: var(--font-regular);
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.cta__buttons {
  display: flex;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
  justify-content: center;
}

/* ── Redes sociais ───────────────────────────────────────── */
.cta__socials {
  display: flex;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
}

.cta__social {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-lg);
  text-decoration: none;
  padding: var(--spacing-md) var(--spacing-lg);
}

.cta__social-badge {
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
  transition: background-color 0.25s ease, border-color 0.25s ease;
}

.cta__social-icon {
  font-size: 16px;
  color: var(--color-primary);
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  line-height: 1;
}

.cta__social-label {
  font-family: var(--font-family-base);
  font-size: var(--text-xs);
  font-weight: var(--font-bold);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--color-primary);
  white-space: nowrap;
  transition: text-shadow 0.25s ease;
}

.cta__social:hover .cta__social-badge {
  background-color: var(--color-bg-primary);
  border-color: var(--color-border-primary);
}

.cta__social:hover .cta__social-label {
  text-shadow: 0px 0px 20px rgba(216, 76, 125, 0.7);
}
</style>
