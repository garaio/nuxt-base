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
  <div class="example-props">
    <ShowcaseComponent
      component-file="ExampleProps.vue"
      title="Props"
      link="https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits"
    >
      <template #example>
        <ShowcaseExample>
          <pre>
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
            })
          </pre>
        </ShowcaseExample>
      </template>
    </ShowcaseComponent>
  </div>
</template>

<style scoped lang="scss">
.component-example {
  position: relative;
  padding: 20px;
  margin-top: 20px;
  background-color: v-bind('backgroundColor');
  border-radius: 10px;
  border: 3px solid v-bind('borderColor');
  color: v-bind('textColor');
}
</style>
