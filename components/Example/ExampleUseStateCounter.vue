<script lang="ts" setup>
const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>

<template>
  <div class="component-example-use-state-counter">
    <ShowcaseComponent componentFile="ExampleUseStateCounter.vue" title="UseState Counter component"
      link="https://nuxt.com/docs/getting-started/state-management" logo="nuxt">
      useState is the Nuxt implementation of ref(), including support for SSR

      <template #example>
        <ShowcaseExample class="text-center">
          <div>Counter: {{ counter }}</div>
          <div>Double counter: {{ counter * 2 }}</div>
          <div>
            <button @click="counter++">+</button>
            <button @click="counter--">-</button>
          </div>
        </ShowcaseExample>
      </template>
    </ShowcaseComponent>
  </div>

</template>