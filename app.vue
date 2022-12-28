<template>
  <Html lang="en">

  <Head>
    <Title>GARAIO NUXT BASE</Title>
    <!-- Here you can add more meta data on the APP level -->
  </Head>

  </Html>

  <div class="app">
    <NuxtPage />
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>

<style lang="scss" scoped>
.app {
  background-color: #{$backgroundColor};
}
</style>
