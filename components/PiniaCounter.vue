<script lang="ts" setup>
import { useCounterStore } from "@/stores/CounterStore";
const useCounter = useCounterStore();
</script>

<template>
  <div>
    <img src="@/assets/img/pinia-logo.svg" width="200" height="200" />
    <h1>Pinia Counter component</h1>
    <NuxtLink to="https://pinia.vuejs.org/" target="_blank">https://pinia.vuejs.org/</NuxtLink>

    <ExampleBox>
      <div>Counter: {{ useCounter.counter }}</div>
      <div>Double counter: {{ useCounter.doubleCounter }}</div>
      <div>
        <button @click="useCounter.incrementCounter()">+</button>
        <button @click="useCounter.decrementCounter()">-</button>
      </div>
    </ExampleBox>
  </div>
</template>

<style lang="scss" scoped>

</style>