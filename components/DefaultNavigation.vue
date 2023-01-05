<script lang="ts" setup>
const { locale, locales, setLocale } = useI18n();
const localePath = useLocalePath();

const availableLocales = computed(() => {
  return ((locales.value) as any).filter((i: any) => i.code !== locale.value)
})
</script>

<template>
  <nav>
    <ul class="navigation">
      <li>
        <NuxtLink :to="localePath('/')">GARAIO Nuxt base</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localePath('nuxt-page')">Nuxt Welcome Page</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localePath('empty-page')">Empty page</NuxtLink>
      </li>
      <li class="spacer"></li>
      <li v-for="locale in availableLocales" :key="locale.code">
        <a href="#" @click.prevent.stop="setLocale(locale.code)">
          {{ locale.name }}
        </a>
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

.spacer {
  flex: 1;
}
</style>