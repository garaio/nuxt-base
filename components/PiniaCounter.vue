<script lang="ts" setup>
const useCounter = useCounterStore();

// The following is an optional addition, to access the state and getters directly, not over the useCounter-store.
const { counter, doubleCounter } = storeToRefs(useCounter);
</script>

<template>
  <div>
    <img src="@/assets/img/pinia-logo.svg" width="200" height="200" />
    <h1>Pinia Counter component</h1>
    <NuxtLink to="https://pinia.vuejs.org/" target="_blank">https://pinia.vuejs.org/</NuxtLink>

    <ExampleBox>
      <div>Counter: {{ counter }}</div>
      <div>Double counter: {{ doubleCounter }}</div>
      <div>
        <button @click="useCounter.incrementCounter()">+</button>
        <button @click="useCounter.decrementCounter()">-</button>
      </div>
    </ExampleBox>
  </div>
</template>

<style lang="scss" scoped>

</style>