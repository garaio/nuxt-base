<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div class="component-example-i18n">
    <ShowcaseComponent
      :title="`i18n: ${t('component.exampleI18n.welcome')}`"
      logo="nuxtI18n"
      component-file="ExampleI18n.vue"
    >
      <template #example>
        <ShowcaseExample>
          <div class="grid">
            <h2>Default translations</h2>
            <h3>
              Translation =
              <pre>Welcome to this example</pre>
            </h3>
            <div class="code">
              <pre>t('Welcome to this example')</pre>
            </div>
            <div class="translation">
              <p>{{ t('component.exampleI18n.defaultTranslation') }}</p>
            </div>
            <h2>Simple singular and plural usage</h2>
            <h3>
              Translation =
              <pre>car | cars</pre>
            </h3>
            <div class="code">
              <pre>t('component.exampleI18n.car', 0)</pre>
              <pre>t('component.exampleI18n.car', 1)</pre>
              <pre>t('component.exampleI18n.car', 2)</pre>
            </div>
            <div class="translation">
              <p>{{ t('component.exampleI18n.car', 0) }}</p>
              <p>{{ t('component.exampleI18n.car', 1) }}</p>
              <p>{{ t('component.exampleI18n.car', 2) }}</p>
            </div>
            <h2>{{ t('component.exampleI18n.apple', { count: ' ' }, 2) }}</h2>
            <p>Extended singular and plural usage displaying inner values like {count} or {n} etc.</p>
            <h3>
              Translation =
              <pre>no apples | one apple | {count} apples</pre>
            </h3>
            <div class="code">
              <p>t('component.exampleI18n.apple', 0)</p>
              <p>t('component.exampleI18n.apple', 1)</p>
              <p>t('component.exampleI18n.apple', 10)</p>
              <p>t('component.exampleI18n.apple', { count: 10 }, 10)</p>
            </div>
            <div class="translation">
              <p>{{ t('component.exampleI18n.apple', 0) }}</p>
              <p>{{ t('component.exampleI18n.apple', 1) }}</p>
              <p>{{ t('component.exampleI18n.apple', 10) }}</p>
              <p>{{ t('component.exampleI18n.apple', { count: 10 }, 10) }}</p>
            </div>
            <h2>{{ t('component.exampleI18n.banana', { n: ' ' }, 2) }}</h2>
            <h3>
              Translation =
              <pre>no bananas | {n} component.exampleI18n.banana | {n} bananas</pre>
            </h3>
            <div class="code">
              <p>t('component.exampleI18n.banana', 0)</p>
              <p>t('component.exampleI18n.banana', 1)</p>
              <p>t('component.exampleI18n.banana', 2)</p>
              <p>t('component.exampleI18n.banana', { n: 3 }, 3)</p>
              <p>t('component.exampleI18n.banana', { n: t('tooMany') }, 100)</p>
            </div>
            <div class="translation">
              <p>{{ t('component.exampleI18n.banana', 0) }}</p>
              <p>{{ t('component.exampleI18n.banana', 1) }}</p>
              <p>{{ t('component.exampleI18n.banana', 2) }}</p>
              <p>{{ t('component.exampleI18n.banana', { n: 3 }, 3) }}</p>
              <p>{{ t('component.exampleI18n.banana', { n: t('tooMany') }, 100) }}</p>
            </div>
          </div>
        </ShowcaseExample>
      </template>
    </ShowcaseComponent>
  </div>
</template>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-items: start;
  margin-inline: auto;
  gap: 20px;

  .translation,
  .code {
    padding: 20px;
  }

  .code {
    background-color: $vueGreen;
    justify-self: flex-end;

    p {
      text-align: right;
    }
  }

  p,
  h1,
  h2,
  h3 {
    grid-column: 1 / -1;
    text-align: center;
    width: 100%;
    margin-bottom: 0;
  }

  h3 pre {
    display: inline-block;
    background-color: $nuxtGreen;
    padding: 10px;
  }
}

pre,
p {
  font-size: 16px;

  &:first-child {
    margin: 0;
  }
}
</style>
