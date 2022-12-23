<template>
    <div class="padded">
        <h1>Padded Layout</h1>

        <slot />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.padded {
    padding: 100px;
    background-color: silver;
}
</style>