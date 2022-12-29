<script lang="ts" setup>
const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>

<template>
  <div>
    <img src="@/assets/img/full-logo-green-dark.svg" height="100" />
    <h1>UseState Counter component</h1>
    <NuxtLink to="https://nuxt.com/docs/getting-started/state-management" target="_blank">
      https://nuxt.com/docs/getting-started/state-management</NuxtLink>

    <ExampleBox>
      <div>Counter: {{ counter }}</div>
      <div>Double counter: {{ counter * 2 }}</div>
      <div>
        <button @click="counter++">+</button>
        <button @click="counter--">-</button>
      </div>
    </ExampleBox>
  </div>

</template>