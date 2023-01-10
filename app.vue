<template>
  <Html lang="en">
    <Head>
      <Title>GARAIO NUXT BASE</Title>
      <Link
        href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=DM+Serif+Display:ital@0;1&display=swap"
        rel="stylesheet"
      />
    </Head>
  </Html>

  <div class="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
@import "@/scss/main.scss";

body {
  margin: 0;
  padding: 0;
}
</style>

<style lang="scss" scoped>
.app {
  color: $nuxtDark;
  font-family: DM Sans;
}
</style>
