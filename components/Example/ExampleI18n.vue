<template>
  <div class="component-example-i18n">
    <h1>{{ t("welcome") }}</h1>
    <h2>Car:</h2>
    <p>{{ t('car', 1) }}</p>
    <p>{{ t('car', 2) }}</p>
    <h2>Apple:</h2>
    <p>{{ t('apple', 0) }}</p>
    <p>{{ t('apple', 1) }}</p>
    <p>{{ t('apple', { count: 10 }, 10) }}</p>
    <p>{{ t('apple', 10) }}</p>
    <h2>Banana:</h2>
    <p>{{ t('banana', 0) }}</p>
    <p>{{ t('banana', { n: 1 }, 1) }}</p>
    <p>{{ t('banana', 2) }}</p>
    <p>{{ t('banana', { n: t('tooMany') }, 100) }}</p>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<style scoped lang="scss">

</style>