<template>
  <DesignSystemLayout>
    <div class="ds-page">
      <header class="ds-page__header">
        <p class="ds-page__category">{{ i18n.ds.common.category.components }}</p>
        <h1 class="ds-page__title">Navbar</h1>
        <p class="ds-page__description">
          {{ i18n.ds.navbar.description }}
        </p>
      </header>

      <!-- Default -->
      <section class="ds-section">
        <h2 class="ds-section__title">{{ i18n.ds.common.sections.variants }}</h2>

        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">{{ i18n.ds.navbar.default.name }}</p>
            <p class="ds-story__description">
              {{ i18n.ds.navbar.default.desc }}
            </p>
          </div>
          <div class="ds-story__canvas ds-story__canvas--note">
            <span class="material-symbols-outlined ds-story__note-icon">info</span>
            <p class="ds-story__note-text">
              {{ i18n.ds.navbar.fixedNote }}
            </p>
          </div>
          <div class="ds-story__code">
            <pre><code>{{ snippetDefault }}</code></pre>
          </div>
        </div>

        <!-- Links customizados -->
        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">{{ i18n.ds.navbar.customLinks.name }}</p>
            <p class="ds-story__description">
              {{ i18n.ds.navbar.customLinks.desc }}
            </p>
          </div>
          <div class="ds-story__canvas ds-story__canvas--note">
            <span class="material-symbols-outlined ds-story__note-icon">info</span>
            <p class="ds-story__note-text">
              {{ i18n.ds.navbar.fixedNote2 }}
            </p>
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
              <tr v-for="(row, idx) in i18n.ds.navbar.compRows" :key="idx">
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
                <td><code>hideLogo</code></td>
                <td>Boolean</td>
                <td><code>false</code></td>
                <td>{{ i18n.ds.navbar.propDesc[0] }}</td>
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
                <td>border</td>
              </tr>
              <tr>
                <td><code>--color-primary</code></td>
                <td>#D84C7D</td>
                <td>diamond · active link · link hover</td>
              </tr>
              <tr>
                <td><code>--color-text-primary</code></td>
                <td>#F4F4F5</td>
                <td>links · logo</td>
              </tr>
              <tr>
                <td><code>--spacing-lg</code></td>
                <td>16px</td>
                <td>padding vertical</td>
              </tr>
              <tr>
                <td><code>--spacing-xl</code></td>
                <td>24px</td>
                <td>padding horizontal</td>
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
import BaseNavbar from '@/design-system/components/BaseNavbar.vue'
import { useI18n } from '@/composables/useI18n'

const { i18n } = useI18n()

const snippetDefault = `<BaseNavbar />`

const snippetCustom = `<BaseNavbar
  :links="[
    { label: 'Home',          to: '/' },
    { label: 'Projects',      to: '#projetos' },
    { label: 'About',         to: '#sobre' },
    { label: 'Design System', to: '/design-system' },
  ]"
  cta-text="Contact me"
/>`
</script>
