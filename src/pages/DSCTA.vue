<template>
  <DesignSystemLayout>
    <div class="ds-page">
      <header class="ds-page__header">
        <p class="ds-page__category">{{ i18n.ds.common.category.components }}</p>
        <h1 class="ds-page__title">CTA</h1>
        <p class="ds-page__description">
          {{ i18n.ds.cta.description }}
        </p>
      </header>

      <!-- Variantes -->
      <section class="ds-section">
        <h2 class="ds-section__title">{{ i18n.ds.common.sections.variants }}</h2>

        <!-- Padrão -->
        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">{{ i18n.ds.cta.default.name }}</p>
            <p class="ds-story__description">
              {{ i18n.ds.cta.default.desc }}
            </p>
          </div>
          <div class="ds-story__canvas ds-story__canvas--dark">
            <BaseCTA />
          </div>
          <div class="ds-story__code">
            <pre><code>{{ snippetDefault }}</code></pre>
          </div>
        </div>

        <!-- Com redes sociais -->
        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">{{ i18n.ds.cta.withSocials.name }}</p>
            <p class="ds-story__description">
              {{ i18n.ds.cta.withSocials.desc }}
            </p>
          </div>
          <div class="ds-story__canvas ds-story__canvas--dark">
            <BaseCTA :show-socials="true" />
          </div>
          <div class="ds-story__code">
            <pre><code>{{ snippetSocials }}</code></pre>
          </div>
        </div>

        <!-- Com botão de retorno -->
        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">{{ i18n.ds.cta.withBack.name }}</p>
            <p class="ds-story__description">
              {{ i18n.ds.cta.withBack.desc }}
            </p>
          </div>
          <div class="ds-story__canvas ds-story__canvas--dark">
            <BaseCTA :show-back="true" />
          </div>
          <div class="ds-story__code">
            <pre><code>{{ snippetBack }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Props -->
      <section class="ds-section">
        <h2 class="ds-section__title">{{ i18n.ds.common.sections.props }}</h2>
        <table class="ds-table">
          <thead>
            <tr>
              <th>{{ i18n.ds.common.table.prop }}</th>
              <th>{{ i18n.ds.common.table.type }}</th>
              <th>{{ i18n.ds.common.table.default }}</th>
              <th>{{ i18n.ds.common.table.desc }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>id</code></td>
              <td>String</td>
              <td><code>null</code></td>
              <td>{{ i18n.ds.cta.propDesc[0] }}</td>
            </tr>
            <tr>
              <td><code>show-socials</code></td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td>{{ i18n.ds.cta.propDesc[1] }}</td>
            </tr>
            <tr>
              <td><code>show-back</code></td>
              <td>Boolean</td>
              <td><code>false</code></td>
              <td>{{ i18n.ds.cta.propDesc[2] }}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </DesignSystemLayout>
</template>

<script setup>
import DesignSystemLayout from '@/layouts/DesignSystemLayout.vue'
import BaseCTA from '@/design-system/components/BaseCTA.vue'
import { useI18n } from '@/composables/useI18n'

const { i18n } = useI18n()

const snippetDefault = `<BaseCTA />`

const snippetSocials = `<!-- Home — #contact section -->
<BaseCTA id="contato" :show-socials="true" />`

const snippetBack = `<!-- Portfolio cases -->
<BaseCTA :show-back="true" />`
</script>

<style scoped>
.ds-story__canvas--dark {
  background: var(--color-bg-base);
  border-radius: var(--spacing-sm);
  overflow: hidden;
  padding: 0;
}
</style>
