<template>
  <div class="component-example-runtime-config">
    <ShowcaseComponent componentFile="ExampleRuntimeConfig.vue" title="RuntimeConfig"
      link="https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits">

      <template #example>
        <ShowcaseExample>
          <pre>{{ runtimeConfig.public.environment }}</pre>
        </ShowcaseExample>
      </template>
    </ShowcaseComponent>
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
</script>

<style scoped lang="scss">

</style>