<template>
  <DesignSystemLayout>
    <div class="ds-page">
      <header class="ds-page__header">
        <p class="ds-page__category">{{ i18n.ds.common.category.components }}</p>
        <h1 class="ds-page__title">Footer</h1>
        <p class="ds-page__description">
          {{ i18n.ds.footer.description }}
        </p>
      </header>

      <!-- Preview -->
      <section class="ds-section">
        <h2 class="ds-section__title">{{ i18n.ds.common.sections.preview }}</h2>

        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">{{ i18n.ds.footer.default.name }}</p>
            <p class="ds-story__description">
              {{ i18n.ds.footer.default.desc }}
            </p>
          </div>
          <!-- Canvas sem padding lateral pra simular largura total -->
          <div class="ds-story__canvas ds-story__canvas--full">
            <BaseFooter />
          </div>
          <div class="ds-story__code">
            <pre><code>{{ snippetDefault }}</code></pre>
          </div>
        </div>

        <!-- Links customizados -->
        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">{{ i18n.ds.footer.custom.name }}</p>
            <p class="ds-story__description">
              {{ i18n.ds.footer.custom.desc }}
            </p>
          </div>
          <div class="ds-story__canvas ds-story__canvas--full">
            <BaseFooter
              :links="[
                { label: 'Home', to: '/' },
                { label: 'Projects', to: '#projetos' },
                { label: 'Design System', to: '/design-system' },
              ]"
              copyright="© 2026 Isabella Viana."
            />
          </div>
          <div class="ds-story__code">
            <pre><code>{{ snippetCustom }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Composição -->
      <section class="ds-section">
        <h2 class="ds-section__title">{{ i18n.ds.common.sections.composition }}</h2>
        <div class="ds-table-wrapper">
          <table class="ds-table">
            <thead>
              <tr>
                <th>{{ i18n.ds.common.table.component }}</th>
                <th>{{ i18n.ds.common.table.whereItAppears }}</th>
                <th>{{ i18n.ds.common.table.notes }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, idx) in i18n.ds.footer.compRows" :key="idx">
                <td><code>{{ row.component }}</code></td>
                <td>{{ row.where }}</td>
                <td>{{ row.note }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Props -->
      <section class="ds-section">
        <h2 class="ds-section__title">{{ i18n.ds.common.sections.props }}</h2>
        <div class="ds-table-wrapper">
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
                <td><code>links</code></td>
                <td>Array</td>
                <td>—</td>
                <td>{{ i18n.ds.footer.propDesc[0] }}</td>
              </tr>
              <tr>
                <td><code>copyright</code></td>
                <td>String</td>
                <td>—</td>
                <td>{{ i18n.ds.footer.propDesc[1] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Tokens -->
      <section class="ds-section">
        <h2 class="ds-section__title">{{ i18n.ds.common.sections.tokensUsed }}</h2>
        <div class="ds-table-wrapper">
          <table class="ds-table">
            <thead>
              <tr>
                <th>{{ i18n.ds.common.table.token }}</th>
                <th>{{ i18n.ds.common.table.value }}</th>
                <th>{{ i18n.ds.common.table.property }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>--color-bg-surface</code></td>
                <td>#1A1A1E</td>
                <td>background</td>
              </tr>
              <tr>
                <td><code>--color-border-subtle</code></td>
                <td>#27272A</td>
                <td>{{ i18n.ds.footer.tokenProp[1] }}</td>
              </tr>
              <tr>
                <td><code>--color-primary</code></td>
                <td>#D84C7D</td>
                <td>{{ i18n.ds.footer.tokenProp[3] }}</td>
              </tr>
              <tr>
                <td><code>--color-text-primary</code></td>
                <td>#F4F4F5</td>
                <td>{{ i18n.ds.footer.tokenProp[2] }}</td>
              </tr>
              <tr>
                <td><code>--text-xs</code></td>
                <td>14px</td>
                <td>font-size</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </DesignSystemLayout>
</template>

<script setup>
import DesignSystemLayout from '@/layouts/DesignSystemLayout.vue'
import BaseFooter from '@/design-system/components/BaseFooter.vue'
import { useI18n } from '@/composables/useI18n'

const { i18n } = useI18n()

const snippetDefault = `<BaseFooter />`

const snippetCustom = `<BaseFooter
  :links="[
    { label: 'Home',          to: '/' },
    { label: 'Projects',      to: '#projetos' },
    { label: 'Design System', to: '/design-system' },
  ]"
  copyright="© 2026 Isabella Viana."
/>`
</script>

<style scoped>
/* Canvas sem padding lateral pra simular o footer em largura total */
.ds-story__canvas--full {
  padding: 0 !important;
  display: block !important;
}
</style>
