<script setup lang="ts">
// Runtime declaration:
const emit = defineEmits(["test"])

// Type based declaration
// const emit = defineEmits<{
//     (event: "fetched"): void;
// }>()

// This is just an example to throw an emit
function emitExample() {
  emit("test");
}
</script>

<template>
  <div class="component-example-emit">
    <ShowcaseComponent componentFile="ExampleEmit.vue" title="Emit example"
      link="https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits" logo="vue">

      <ShowcaseExample>
        <pre>
          const emit = defineEmits(["test"]);
          emit("test");
        </pre>
      </ShowcaseExample>
      <template #example>
        <ShowcaseExample class="text-center">
          <button @click="emitExample()">Emit</button>
        </ShowcaseExample>
      </template>
    </ShowcaseComponent>
  </div>
</template>

<style lang="scss" scoped>

</style>
