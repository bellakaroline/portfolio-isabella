<template>
  <DesignSystemLayout>
    <div class="ds-page">

      <header class="ds-page__header">
        <p class="ds-page__category">{{ i18n.ds.common.category.components }}</p>
        <h1 class="ds-page__title">Badge</h1>
        <p class="ds-page__description">
          {{ i18n.ds.badge.description }}
        </p>
      </header>

      <!-- Tamanhos -->
      <section class="ds-section">
        <h2 class="ds-section__title">{{ i18n.ds.common.sections.sizes }}</h2>

        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">{{ i18n.ds.badge.sizes.name }}</p>
            <p class="ds-story__description">
              {{ i18n.ds.badge.sizes.desc }}
            </p>
          </div>
          <div class="ds-story__canvas ds-story__canvas--row">
            <div class="ds-story__group">
              <p class="ds-story__size-label">Small — 32px</p>
              <BaseBadge size="small" />
            </div>
            <div class="ds-story__group">
              <p class="ds-story__size-label">Medium — 40px</p>
              <BaseBadge size="medium" />
            </div>
            <div class="ds-story__group">
              <p class="ds-story__size-label">Large — 54px</p>
              <BaseBadge size="large" />
            </div>
          </div>
          <div class="ds-story__code">
            <pre><code>{{ snippetSizes }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Ícones customizados -->
      <section class="ds-section">
        <h2 class="ds-section__title">{{ i18n.ds.common.sections.customIcons }}</h2>

        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">{{ i18n.ds.badge.icons.name }}</p>
            <p class="ds-story__description">
              {{ i18n.ds.badge.icons.desc }}
            </p>
          </div>
          <div class="ds-story__canvas ds-story__canvas--row">
            <div class="ds-story__group">
              <p class="ds-story__size-label">call_made</p>
              <BaseBadge size="large" icon="call_made" />
            </div>
            <div class="ds-story__group">
              <p class="ds-story__size-label">mail</p>
              <BaseBadge size="large" icon="mail" />
            </div>
            <div class="ds-story__group">
              <p class="ds-story__size-label">code</p>
              <BaseBadge size="large" icon="code" />
            </div>
            <div class="ds-story__group">
              <p class="ds-story__size-label">arrow_forward</p>
              <BaseBadge size="large" icon="arrow_forward" />
            </div>
            <div class="ds-story__group">
              <p class="ds-story__size-label">open_in_new</p>
              <BaseBadge size="large" icon="open_in_new" />
            </div>
          </div>
          <div class="ds-story__code">
            <pre><code>{{ snippetIcons }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Hover -->
      <section class="ds-section">
        <h2 class="ds-section__title">{{ i18n.ds.common.sections.hoverState }}</h2>

        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">{{ i18n.ds.badge.hover.name }}</p>
            <p class="ds-story__description">
              {{ i18n.ds.badge.hover.desc }}
            </p>
          </div>
          <div class="ds-story__canvas ds-story__canvas--row">
            <BaseBadge size="small" />
            <BaseBadge size="medium" />
            <BaseBadge size="large" />
          </div>
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
                <th>{{ i18n.ds.common.table.options }}</th>
                <th>{{ i18n.ds.common.table.desc }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>icon</code></td>
                <td>String</td>
                <td><code>'call_made'</code></td>
                <td>Material Symbols</td>
                <td>{{ i18n.ds.badge.propDesc[0] }}</td>
              </tr>
              <tr>
                <td><code>size</code></td>
                <td>String</td>
                <td><code>'medium'</code></td>
                <td><code>'small'</code> · <code>'medium'</code> · <code>'large'</code></td>
                <td>{{ i18n.ds.badge.propDesc[1] }}</td>
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
                <td>{{ i18n.ds.badge.tokenProp[0] }}</td>
              </tr>
              <tr>
                <td><code>--color-bg-primary</code></td>
                <td>rgba(216,76,125,0.05)</td>
                <td>{{ i18n.ds.badge.tokenProp[1] }}</td>
              </tr>
              <tr>
                <td><code>--color-border-subtle</code></td>
                <td>#27272A</td>
                <td>{{ i18n.ds.badge.tokenProp[2] }}</td>
              </tr>
              <tr>
                <td><code>--color-border-primary</code></td>
                <td>rgba(216,76,125,0.15)</td>
                <td>{{ i18n.ds.badge.tokenProp[3] }}</td>
              </tr>
              <tr>
                <td><code>--color-primary</code></td>
                <td>#D84C7D</td>
                <td>{{ i18n.ds.badge.tokenProp[4] }}</td>
              </tr>
              <tr>
                <td><code>--spacing-xs</code></td>
                <td>2px</td>
                <td>{{ i18n.ds.badge.tokenProp[5] }}</td>
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
import BaseBadge from '@/design-system/components/BaseBadge.vue'
import { useI18n } from '@/composables/useI18n'

const { i18n } = useI18n()

const snippetSizes = `<BaseBadge size="small" />
<BaseBadge size="medium" />
<BaseBadge size="large" />`

const snippetIcons = `<BaseBadge size="large" icon="call_made" />
<BaseBadge size="large" icon="mail" />
<BaseBadge size="large" icon="code" />
<BaseBadge size="large" icon="arrow_forward" />
<BaseBadge size="large" icon="open_in_new" />`
</script>