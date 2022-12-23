<script setup lang="ts">
</script>

<template>
  <h1>Normal app component, before router pages</h1>
  <NuxtLink to="/">Home</NuxtLink>
  <NuxtPage />
</template>

<style module>
.page {
  padding: 50px;
  background-color: bisque;
}
</style>

<style>
.d-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>
