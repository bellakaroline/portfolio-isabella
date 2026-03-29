<template>
  <DesignSystemLayout>
    <div class="ds-page">

      <header class="ds-page__header">
        <p class="ds-page__category">{{ i18n.ds.common.category.components }}</p>
        <h1 class="ds-page__title">Chip</h1>
        <p class="ds-page__description">
          {{ i18n.ds.chip.description }}
        </p>
      </header>

      <!-- Variantes -->
      <section class="ds-section">
        <h2 class="ds-section__title">{{ i18n.ds.common.sections.variants }}</h2>

        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">{{ i18n.ds.chip.outline.name }}</p>
            <p class="ds-story__description">
              {{ i18n.ds.chip.outline.desc }}
            </p>
          </div>
          <div class="ds-story__canvas">
            <BaseChip content="VUE.JS" variant="outline" />
            <BaseChip content="FIGMA" variant="outline" />
            <BaseChip content="UX DESIGN" variant="outline" />
          </div>
          <div class="ds-story__code">
            <pre><code>{{ snippetOutline }}</code></pre>
          </div>
        </div>

        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">{{ i18n.ds.chip.sectionTitle.name }}</p>
            <p class="ds-story__description">
              {{ i18n.ds.chip.sectionTitle.desc }}
            </p>
          </div>
          <div class="ds-story__canvas">
            <BaseChip content="PROJETOS" variant="section-title" />
          </div>
          <div class="ds-story__code">
            <pre><code>{{ snippetSectionTitle }}</code></pre>
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
                <td><code>content</code></td>
                <td>String</td>
                <td><code>'LABEL'</code></td>
                <td>—</td>
                <td>{{ i18n.ds.chip.propDesc[0] }}</td>
              </tr>
              <tr>
                <td><code>variant</code></td>
                <td>String</td>
                <td><code>'outline'</code></td>
                <td><code>'outline'</code> · <code>'section-title'</code></td>
                <td>{{ i18n.ds.chip.propDesc[1] }}</td>
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
                <td>{{ i18n.ds.chip.tokenProp[0] }}</td>
              </tr>
              <tr>
                <td><code>--color-border-subtle</code></td>
                <td>#27272A</td>
                <td>{{ i18n.ds.chip.tokenProp[1] }}</td>
              </tr>
              <tr>
                <td><code>--color-primary</code></td>
                <td>#D84C7D</td>
                <td>{{ i18n.ds.chip.tokenProp[2] }}</td>
              </tr>
              <tr>
                <td><code>--color-text-secondary</code></td>
                <td>#A1A1AA</td>
                <td>{{ i18n.ds.chip.tokenProp[3] }}</td>
              </tr>
              <tr>
                <td><code>--spacing-md</code></td>
                <td>8px</td>
                <td>{{ i18n.ds.chip.tokenProp[4] }}</td>
              </tr>
              <tr>
                <td><code>--spacing-lg</code></td>
                <td>16px</td>
                <td>{{ i18n.ds.chip.tokenProp[5] }}</td>
              </tr>
              <tr>
                <td><code>--text-sm</code></td>
                <td>16px</td>
                <td>{{ i18n.ds.chip.tokenProp[6] }}</td>
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
import BaseChip from '@/design-system/components/BaseChip.vue'
import { useI18n } from '@/composables/useI18n'

const { i18n } = useI18n()

const snippetOutline = `<BaseChip content="VUE.JS" variant="outline" />`
const snippetSectionTitle = `<BaseChip content="PROJETOS" variant="section-title" />`
</script>