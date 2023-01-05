<template>
  <div class="component-base">
    <div class="filename">{{ componentFile }}</div>

    <slot name="image">
      <img v-if="logo === 'vue'" src="~/assets/img/Vue.js.svg" height="100" />
      <img v-else-if="logo === 'nuxt'" src="@/assets/img/full-logo-green-dark.svg" height="50" />
      <img v-else-if="logo === 'pinia'" src="@/assets/img/pinia-logo.svg" height="100" />
      <img v-else-if="logo === 'vueUse'" src="@/assets/img/composable.svg" height="100" />
      <img v-else-if="logo === 'nuxtI18n'" src="@/assets/img/nuxt-i18n-logo.svg" height="100" />
    </slot>
    <slot name="title">
      <h1> {{ title }}</h1>
    </slot>

    <slot name="default" />

    <slot name="link">
      Link: <NuxtLink :to="link" target="_blank">{{ link }}</NuxtLink>
    </slot>

    <slot name="example">
      <ShowcaseExample>
        Please define a example to show in your example component
      </ShowcaseExample>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

defineProps({
  title: {
    type: String,
    default: ""
  },
  link: {
    type: String,
    default: ""
  },
  componentFile: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  logo: {
    type: String as PropType<"vue" | "nuxt" | "pinia" | "vueUse" | "nuxtI18n">,
    default: "vue",
  }
})
</script>

<style scoped lang="scss">
.component-base {
  position: relative;
}

.filename {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: $vueGreen;
  border: 1px solid $vueDark;
  padding: 0 5px;
  color: white;
  border-radius: 20px;
  font-size: 0.9em;
}
</style>