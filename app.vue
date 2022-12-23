<script setup lang="ts">

const hasFetched = ref(false);

function fetched() {
  hasFetched.value = true;
}
</script>

<template>
  <div :class="$style.page" class="d-grid">
    <div>
      <h1>Hello Nuxt App</h1>
      <Image src="/background.jpg" width="700px">
        <h3>Image title</h3>
      </Image>
    </div>
    <div>
      <pre>hasFetched ? {{ hasFetched }}</pre>
      <TodoList @fetched="fetched" />
    </div>
  </div>
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
