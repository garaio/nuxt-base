<script lang="ts" setup></script>

<template>
  <nav>
    <ul class="navigation">
      <li>
        <NuxtLink to="/">GARAIO Nuxt base</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/nuxt-page">Nuxt Welcome Page</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/empty-page">Empty page</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
nav {
  height: 40px;
}

.navigation {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: $nuxtGreen;
  display: flex;
  justify-content: center;
  gap: 50px;
  font-weight: bold;
  padding: 10px;
  margin: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: $nuxtDark;

  &:hover {
    color: white;
  }
}
</style>