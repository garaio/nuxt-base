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


<style lang="scss" scoped>
@import "./assets/styles/main.scss";

.app {
  background-color: #{$backgroundColor};
}
</style>
