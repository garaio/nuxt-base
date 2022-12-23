<template>
    <div>
        <h3>This is item id: {{ route.params.id }}</h3>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style scoped>

</style>