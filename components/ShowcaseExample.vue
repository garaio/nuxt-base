<script setup lang="ts">
defineProps({
  backgroundColor: {
    type: String,
    default: "#2c3e50",
  },
  borderColor: {
    type: String,
    default: "#42b983",
  },
  textColor: {
    type: String,
    default: "#fff",
  },

});
</script>

<template>
  <div class="component-showcase-example text-left">
    <span class="title">Example:</span>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.component-showcase-example {
  position: relative;
  padding: 20px;
  margin-top: 20px;
  background-color: v-bind('backgroundColor');
  border-radius: 10px;
  border: 3px solid v-bind('borderColor');
  color: v-bind('textColor');
}

.title {
  position: absolute;
  top: 5px;
  left: 5px;
  font-size: 0.8rem;
}
</style>
