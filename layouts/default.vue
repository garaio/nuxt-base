<template>
  <div class="default-layout">
    <header>
      <DefaultNavigation />
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <NuxtLink to="https://www.garaio.com" target="_blank">@GARAIO LABS</NuxtLink>
    </footer>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
main {
  padding-top: 50px;
}
</style>