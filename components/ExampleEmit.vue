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
  <div>
    <h1>Emit "test" example</h1>
    <!-- <NuxtLink to="https://pinia.vuejs.org/" target="_blank">https://pinia.vuejs.org/</NuxtLink> -->

    <ExampleBox>
      <button @click="emitExample()">Emit</button>
    </ExampleBox>
  </div>
</template>

<style lang="scss" scoped>

</style>
