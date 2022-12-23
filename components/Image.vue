<script setup lang="ts">
defineProps({
    src: {
        type: String,
        required: true,
    },
    width: {
        type: String,
        default: "300px",
    }
})
</script>

<template>
    <slot />
    <img :src="src" :width="width" />
</template>