<template>
  <DesignSystemLayout>
    <div class="ds-page">
      <header class="ds-page__header">
        <p class="ds-page__category">{{ i18n.ds.common.category.components }}</p>
        <h1 class="ds-page__title">Block</h1>
        <p class="ds-page__description">
          {{ i18n.ds.block.description }}
        </p>
      </header>

      <!-- ── Variante LEFT ─────────────────────────────── -->
      <section class="ds-section">
        <h2 class="ds-section__title">{{ i18n.ds.common.sections.variants }}</h2>

        <!-- Mínimo: badge + title + subtitle -->
        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">{{ i18n.ds.block.min.name }}</p>
            <p class="ds-story__description">
              {{ i18n.ds.block.min.desc }}
            </p>
          </div>
          <div class="ds-story__canvas">
            <BaseBlock
              direction="left"
              icon="cards_stack"
              title="DESIGN SYSTEM"
              subtitle="Design System para portfólio"
            />
          </div>
          <div class="ds-story__code">
            <pre><code>{{ snippetMin }}</code></pre>
          </div>
        </div>

        <!-- Com content -->
        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">{{ i18n.ds.block.withContent.name }}</p>
            <p class="ds-story__description">
              {{ i18n.ds.block.withContent.desc }}
            </p>
          </div>
          <div class="ds-story__canvas">
            <BaseBlock
              direction="left"
              icon="cards_stack"
              title="DESIGN SYSTEM"
              subtitle="Design System para portfólio"
              content="Construção de um Design System do zero com tokens, componentes e documentação."
            />
          </div>
          <div class="ds-story__code">
            <pre><code>{{ snippetContent }}</code></pre>
          </div>
        </div>

        <!-- Completo: com content + botão -->
        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">{{ i18n.ds.block.full.name }}</p>
            <p class="ds-story__description">
              {{ i18n.ds.block.full.desc }}
            </p>
          </div>
          <div class="ds-story__canvas">
            <BaseBlock
              direction="left"
              icon="cards_stack"
              title="DESIGN SYSTEM"
              subtitle="Design System para portfólio"
              content="Construção de um Design System do zero com tokens, componentes e documentação."
              button-text="Ver Projeto"
            />
          </div>
          <div class="ds-story__code">
            <pre><code>{{ snippetFull }}</code></pre>
          </div>
        </div>
      </section>

      <!-- ── Left Hover ────────────────────────────────── -->
      <section class="ds-section">
        <h2 class="ds-section__title">{{ i18n.ds.common.sections.hoverState }}</h2>

        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">Default vs Hover</p>
            <p class="ds-story__description">
              {{ i18n.ds.block.hover.desc }}
            </p>
          </div>
          <div class="ds-story__canvas ds-story__canvas--row">
            <BaseBlock
              direction="left"
              icon="cards_stack"
              title="DESIGN SYSTEM"
              subtitle="Design System para portfólio"
              content="Construção de um Design System do zero com tokens, componentes e documentação."
              button-text="Ver Projeto"
            />
            <BaseBlock
              direction="left"
              icon="cards_stack"
              title="DESIGN SYSTEM"
              subtitle="Design System para portfólio"
              content="Construção de um Design System do zero com tokens, componentes e documentação."
              button-text="Ver Projeto"
              :hover-preview="true"
            />
          </div>
        </div>
      </section>

      <!-- ── Right / Center ────────────────────────────── -->
      <section class="ds-section">
        <h2 class="ds-section__title">Right & Center</h2>

        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">{{ i18n.ds.block.right.name }}</p>
            <p class="ds-story__description">{{ i18n.ds.block.right.desc }}</p>
          </div>
          <div class="ds-story__canvas">
            <BaseBlock
              direction="right"
              icon="search"
              title="01"
              subtitle="Pesquisa e entendimento do problema"
            />
          </div>
          <div class="ds-story__code">
            <pre><code>{{ snippetRight }}</code></pre>
          </div>
        </div>

        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">Center</p>
            <p class="ds-story__description">Badge no topo, conteúdo centralizado. Altura 204px.</p>
          </div>
          <div class="ds-story__canvas">
            <BaseBlock
              direction="center"
              icon="devices"
              title="03"
              subtitle="Prototipação e validação"
            />
          </div>
          <div class="ds-story__code">
            <pre><code>{{ snippetCenter }}</code></pre>
          </div>
        </div>
      </section>

      <!-- ── Props ─────────────────────────────────────── -->
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
                <td><code>icon</code></td>
                <td>String</td>
                <td><code>'cards_stack'</code></td>
                <td>{{ i18n.ds.block.propDesc[0] }}</td>
              </tr>
              <tr>
                <td><code>direction</code></td>
                <td>String</td>
                <td><code>'left'</code></td>
                <td>{{ i18n.ds.block.propDesc[1] }}</td>
              </tr>
              <tr>
                <td><code>title</code></td>
                <td>String</td>
                <td>—</td>
                <td>{{ i18n.ds.block.propDesc[2] }}</td>
              </tr>
              <tr>
                <td><code>subtitle</code></td>
                <td>String</td>
                <td>—</td>
                <td>{{ i18n.ds.block.propDesc[3] }}</td>
              </tr>
              <tr>
                <td><code>content</code></td>
                <td>String</td>
                <td><code>null</code></td>
                <td>{{ i18n.ds.block.propDesc[4] }}</td>
              </tr>
              <tr>
                <td><code>buttonText</code></td>
                <td>String</td>
                <td><code>null</code></td>
                <td>{{ i18n.ds.block.propDesc[5] }}</td>
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
import BaseBlock from '@/design-system/components/BaseBlock.vue'
import { useI18n } from '@/composables/useI18n'

const { i18n } = useI18n()

const snippetMin = `<BaseBlock
  direction="left"
  icon="cards_stack"
  title="DESIGN SYSTEM"
  subtitle="Design System para portfólio"
/>`

const snippetContent = `<BaseBlock
  direction="left"
  icon="cards_stack"
  title="DESIGN SYSTEM"
  subtitle="Design System para portfólio"
  content="Construção de um Design System do zero..."
/>`

const snippetFull = `<BaseBlock
  direction="left"
  icon="cards_stack"
  title="DESIGN SYSTEM"
  subtitle="Design System para portfólio"
  content="Construção de um Design System do zero..."
  button-text="Ver Projeto"
/>`

const snippetRight = `<BaseBlock
  direction="right"
  icon="search"
  title="01"
  subtitle="Pesquisa e entendimento do problema"
/>`

const snippetCenter = `<BaseBlock
  direction="center"
  icon="devices"
  title="03"
  subtitle="Prototipação e validação"
/>`
</script>

<style scoped>
.ds-story__canvas--row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-lg);
  align-items: flex-start;
}
</style>
