<template>
  <DesignSystemLayout>
    <div class="ds-page">

      <header class="ds-page__header">
        <p class="ds-page__category">{{ i18n.ds.common.category.components }}</p>
        <h1 class="ds-page__title">Button</h1>
        <p class="ds-page__description">
          {{ i18n.ds.buttons.description }}
        </p>
      </header>

      <!-- ── BaseButton ──────────────────────────────────────── -->
      <section class="ds-section">
        <h2 class="ds-section__title">BaseButton</h2>

        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">{{ i18n.ds.buttons.primary.name }}</p>
            <p class="ds-story__description">
              {{ i18n.ds.buttons.primary.desc }}
            </p>
          </div>
          <div class="ds-story__canvas ds-story__canvas--row">
            <div class="ds-story__group">
              <p class="ds-story__size-label">Large</p>
              <BaseButton text="Ver projetos" variant="primary" size="large" />
            </div>
            <div class="ds-story__group">
              <p class="ds-story__size-label">Medium</p>
              <BaseButton text="Ver projetos" variant="primary" size="medium" />
            </div>
            <div class="ds-story__group">
              <p class="ds-story__size-label">{{ i18n.ds.buttons.primary.noIcons }}</p>
              <BaseButton
                text="Ver projetos"
                variant="primary"
                size="large"
                :prepend="false"
                :append="false"
              />
            </div>
          </div>
          <div class="ds-story__code">
            <pre><code>{{ snippetPrimary }}</code></pre>
          </div>
        </div>

        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">{{ i18n.ds.buttons.outline.name }}</p>
            <p class="ds-story__description">
              {{ i18n.ds.buttons.outline.desc }}
            </p>
          </div>
          <div class="ds-story__canvas ds-story__canvas--row">
            <div class="ds-story__group">
              <p class="ds-story__size-label">Large</p>
              <BaseButton text="Download CV" variant="outline" size="large" />
            </div>
            <div class="ds-story__group">
              <p class="ds-story__size-label">Medium</p>
              <BaseButton text="Download CV" variant="outline" size="medium" />
            </div>
          </div>
          <div class="ds-story__code">
            <pre><code>{{ snippetOutline }}</code></pre>
          </div>
        </div>

        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">{{ i18n.ds.buttons.customIcons.name }}</p>
            <p class="ds-story__description">
              {{ i18n.ds.buttons.customIcons.desc }}
            </p>
          </div>
          <div class="ds-story__canvas ds-story__canvas--row">
            <BaseButton text="Contato"     variant="primary" size="large" prepend-icon="mail"     :append="false" />
            <BaseButton text="GitHub"      variant="outline" size="large" prepend-icon="code"     :append="false" />
            <BaseButton text="Download CV" variant="outline" size="large" :prepend="false"        append-icon="download" />
          </div>
          <div class="ds-story__code">
            <pre><code>{{ snippetIcons }}</code></pre>
          </div>
        </div>
      </section>

      <!-- ── BaseTextButton ──────────────────────────────────── -->
      <section class="ds-section">
        <h2 class="ds-section__title">BaseTextButton</h2>

        <div class="ds-story">
          <div class="ds-story__header">
            <p class="ds-story__name">{{ i18n.ds.buttons.textButton.name }}</p>
            <p class="ds-story__description">
              {{ i18n.ds.buttons.textButton.desc }}
            </p>
          </div>
          <div class="ds-story__canvas ds-story__canvas--row">
            <BaseTextButton text="LinkedIn"  icon="open_in_new" />
            <BaseTextButton text="GitHub"    icon="code" />
            <BaseTextButton text="Ver mais"  icon="arrow_forward" />
          </div>
          <div class="ds-story__code">
            <pre><code>{{ snippetTextButton }}</code></pre>
          </div>
        </div>
      </section>

      <!-- ── Props: BaseButton ───────────────────────────────── -->
      <section class="ds-section">
        <h2 class="ds-section__title">Props — BaseButton</h2>
        <div class="ds-table-wrapper">
          <table class="ds-table">
            <thead>
              <tr>
                <th>{{ i18n.ds.common.table.prop }}</th><th>{{ i18n.ds.common.table.type }}</th><th>{{ i18n.ds.common.table.default }}</th><th>{{ i18n.ds.common.table.options }}</th><th>{{ i18n.ds.common.table.desc }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>text</code></td><td>String</td><td><code>'Button'</code></td>
                <td>—</td><td>{{ i18n.ds.buttons.baseButtonPropDesc[0] }}</td>
              </tr>
              <tr>
                <td><code>variant</code></td><td>String</td><td><code>'primary'</code></td>
                <td><code>'primary'</code> · <code>'outline'</code></td>
                <td>{{ i18n.ds.buttons.baseButtonPropDesc[1] }}</td>
              </tr>
              <tr>
                <td><code>size</code></td><td>String</td><td><code>'large'</code></td>
                <td><code>'large'</code> · <code>'medium'</code></td>
                <td>{{ i18n.ds.buttons.baseButtonPropDesc[2] }}</td>
              </tr>
              <tr>
                <td><code>prepend</code></td><td>Boolean</td><td><code>true</code></td>
                <td>—</td><td>{{ i18n.ds.buttons.baseButtonPropDesc[3] }}</td>
              </tr>
              <tr>
                <td><code>prepend-icon</code></td><td>String</td><td><code>'call_made'</code></td>
                <td>Material Symbols</td><td>{{ i18n.ds.buttons.baseButtonPropDesc[4] }}</td>
              </tr>
              <tr>
                <td><code>append</code></td><td>Boolean</td><td><code>true</code></td>
                <td>—</td><td>{{ i18n.ds.buttons.baseButtonPropDesc[5] }}</td>
              </tr>
              <tr>
                <td><code>append-icon</code></td><td>String</td><td><code>'call_made'</code></td>
                <td>Material Symbols</td><td>{{ i18n.ds.buttons.baseButtonPropDesc[6] }}</td>
              </tr>
              <tr>
                <td><code>type</code></td><td>String</td><td><code>'button'</code></td>
                <td><code>'button'</code> · <code>'submit'</code> · <code>'reset'</code></td>
                <td>{{ i18n.ds.buttons.baseButtonPropDesc[7] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- ── Props: BaseTextButton ───────────────────────────── -->
      <section class="ds-section">
        <h2 class="ds-section__title">Props — BaseTextButton</h2>
        <div class="ds-table-wrapper">
          <table class="ds-table">
            <thead>
              <tr>
                <th>{{ i18n.ds.common.table.prop }}</th><th>{{ i18n.ds.common.table.type }}</th><th>{{ i18n.ds.common.table.default }}</th><th>{{ i18n.ds.common.table.options }}</th><th>{{ i18n.ds.common.table.desc }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>text</code></td><td>String</td><td><code>'Button'</code></td>
                <td>—</td><td>{{ i18n.ds.buttons.textButtonPropDesc[0] }}</td>
              </tr>
              <tr>
                <td><code>icon</code></td><td>String</td><td><code>'call_made'</code></td>
                <td>Material Symbols</td><td>{{ i18n.ds.buttons.textButtonPropDesc[1] }}</td>
              </tr>
              <tr>
                <td><code>type</code></td><td>String</td><td><code>'button'</code></td>
                <td><code>'button'</code> · <code>'submit'</code> · <code>'reset'</code></td>
                <td>{{ i18n.ds.buttons.textButtonPropDesc[2] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- ── Tokens ──────────────────────────────────────────── -->
      <section class="ds-section">
        <h2 class="ds-section__title">{{ i18n.ds.common.sections.tokensUsed }}</h2>
        <div class="ds-table-wrapper">
          <table class="ds-table">
            <thead>
              <tr><th>{{ i18n.ds.common.table.token }}</th><th>{{ i18n.ds.common.table.value }}</th><th>{{ i18n.ds.common.table.property }}</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><code>--color-primary</code></td><td>#D84C7D</td>
                <td>background (primary) · border hover (outline) · texto (text-button)</td>
              </tr>
              <tr>
                <td><code>--color-border-subtle</code></td><td>#27272A</td>
                <td>border default (outline)</td>
              </tr>
              <tr>
                <td><code>--color-text-primary</code></td><td>#F4F4F5</td>
                <td>texto (primary)</td>
              </tr>
              <tr>
                <td><code>--color-text-secondary</code></td><td>#A1A1AA</td>
                <td>texto default (outline)</td>
              </tr>
              <tr>
                <td><code>--spacing-lg</code></td><td>16px</td>
                <td>padding vertical (large) · gap (text-button)</td>
              </tr>
              <tr>
                <td><code>--spacing-2xl</code></td><td>32px</td>
                <td>padding horizontal (large)</td>
              </tr>
              <tr>
                <td><code>--text-sm</code></td><td>16px</td>
                <td>font-size (large)</td>
              </tr>
              <tr>
                <td><code>--text-xs</code></td><td>14px</td>
                <td>font-size (medium · text-button)</td>
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
import BaseButton from '@/design-system/components/BaseButton.vue'
import BaseTextButton from '@/design-system/components/BaseTextButton.vue'
import { useI18n } from '@/composables/useI18n'

const { i18n } = useI18n()

const snippetPrimary = `<BaseButton text="Ver projetos" variant="primary" size="large" />
<BaseButton text="Ver projetos" variant="primary" size="medium" />

<!-- Sem ícones -->
<BaseButton text="Ver projetos" variant="primary" :prepend="false" :append="false" />`

const snippetOutline = `<BaseButton text="Download CV" variant="outline" size="large" />
<BaseButton text="Download CV" variant="outline" size="medium" />`

const snippetIcons = `<BaseButton text="Contato"     variant="primary" prepend-icon="mail"  :append="false" />
<BaseButton text="GitHub"      variant="outline" prepend-icon="code"  :append="false" />
<BaseButton text="Download CV" variant="outline" :prepend="false"     append-icon="download" />`

const snippetTextButton = `<BaseTextButton text="LinkedIn" icon="open_in_new" />
<BaseTextButton text="GitHub"   icon="code" />
<BaseTextButton text="Ver mais" icon="arrow_forward" />`
</script>