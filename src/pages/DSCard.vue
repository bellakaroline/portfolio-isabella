<template>
  <DesignSystemLayout>
    <div class="ds-page">
      <header class="ds-page__header">
        <p class="ds-page__category">{{ i18n.ds.common.category.components }}</p>
        <h1 class="ds-page__title">Card</h1>
        <p class="ds-page__description">
          {{ i18n.ds.card.description }}
        </p>
      </header>

      <!-- Variantes -->
      <section class="ds-section">
        <h2 class="ds-section__title">{{ i18n.ds.common.sections.variants }}</h2>

        <!-- Sem título -->
        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">{{ i18n.ds.card.noTitle.name }}</p>
            <p class="ds-story__description">
              {{ i18n.ds.card.noTitle.desc }}
            </p>
          </div>
          <div class="ds-story__canvas">
            <div class="card-preview">
              <BaseCard>
                <p class="sample-text">
                  Conteúdo livre inserido via slot. Ideal para textos descritivos e contextuais
                  dentro de cases.
                </p>
              </BaseCard>
            </div>
          </div>
          <div class="ds-story__code">
            <pre><code>{{ snippetNoTitle }}</code></pre>
          </div>
        </div>

        <!-- Com título -->
        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">{{ i18n.ds.card.withTitle.name }}</p>
            <p class="ds-story__description">
              {{ i18n.ds.card.withTitle.desc }}
            </p>
          </div>
          <div class="ds-story__canvas">
            <div class="card-preview">
              <BaseCard title="Problemas">
                <p class="sample-text">
                  Lista de problemas identificados durante a análise do produto.
                </p>
              </BaseCard>
            </div>
          </div>
          <div class="ds-story__code">
            <pre><code>{{ snippetWithTitle }}</code></pre>
          </div>
        </div>

        <!-- Grid de cards -->
        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">{{ i18n.ds.card.grid.name }}</p>
            <p class="ds-story__description">
              {{ i18n.ds.card.grid.desc }}
            </p>
          </div>
          <div class="ds-story__canvas ds-story__canvas--col">
            <div class="card-grid">
              <BaseCard title="Problemas">
                <p class="sample-text">
                  Excesso de elementos competindo por atenção na interface.
                </p>
              </BaseCard>
              <BaseCard title="Soluções">
                <p class="sample-text">
                  Reorganização das ações principais por prioridade e relevância.
                </p>
              </BaseCard>
            </div>
          </div>
          <div class="ds-story__code">
            <pre><code>{{ snippetGrid }}</code></pre>
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
                <th>{{ i18n.ds.common.table.desc }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>title</code></td>
                <td>String</td>
                <td><code>null</code></td>
                <td>{{ i18n.ds.card.propDesc[0] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Slots -->
      <section class="ds-section">
        <h2 class="ds-section__title">Slots</h2>
        <div class="ds-table-wrapper">
          <table class="ds-table">
            <thead>
              <tr>
                <th>Slot</th>
                <th>Descrição</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>default</code></td>
                <td>Conteúdo livre — texto, listas, parágrafos ou qualquer elemento.</td>
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
                <td><code>--color-primary</code></td>
                <td>#D84C7D</td>
                <td>{{ i18n.ds.card.tokenProp[0] }}</td>
              </tr>
              <tr>
                <td><code>--color-bg-primary</code></td>
                <td>rgba(216,76,125,0.05)</td>
                <td>{{ i18n.ds.card.tokenProp[1] }}</td>
              </tr>
              <tr>
                <td><code>--color-text-primary</code></td>
                <td>#F4F4F5</td>
                <td>{{ i18n.ds.card.tokenProp[3] }}</td>
              </tr>
              <tr>
                <td><code>--spacing-xl</code></td>
                <td>24px</td>
                <td>{{ i18n.ds.card.tokenProp[2] }}</td>
              </tr>
              <tr>
                <td><code>--spacing-2xl</code></td>
                <td>32px</td>
                <td>{{ i18n.ds.card.tokenProp[2] }}</td>
              </tr>
              <tr>
                <td><code>--spacing-xs</code></td>
                <td>2px</td>
                <td>border-radius (lados direitos)</td>
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
import BaseCard from '@/design-system/components/BaseCard.vue'
import { useI18n } from '@/composables/useI18n'

const { i18n } = useI18n()

const snippetNoTitle = `<BaseCard>
  <p>Conteúdo livre via slot.</p>
</BaseCard>`

const snippetWithTitle = `<BaseCard title="Problemas">
  <p>Descrição dos problemas encontrados.</p>
</BaseCard>`

const snippetGrid = `<div class="card-grid">
  <BaseCard title="Problemas">
    <p>...</p>
  </BaseCard>
  <BaseCard title="Soluções">
    <p>...</p>
  </BaseCard>
</div>`
</script>

<style scoped>
.card-preview {
  width: 100%;
  max-width: 560px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-xl);
  width: 100%;
}

.sample-text {
  font-family: var(--font-family-support);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: 1.7;
}
</style>
