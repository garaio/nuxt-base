<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
</script>

<template>
  <div class="component-example-runtime-config">
    <ShowcaseComponent
      component-file="ExampleRuntimeConfig.vue"
      title="RuntimeConfig"
      link="https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits"
    >
      <template #example>
        <ShowcaseExample>
          <pre>{{ runtimeConfig.public.environment }}</pre>
        </ShowcaseExample>
      </template>
    </ShowcaseComponent>
  </div>
</template>

<style scoped lang="scss">

</style>
