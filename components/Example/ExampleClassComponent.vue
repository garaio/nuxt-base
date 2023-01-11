<script lang="ts">
import { Component, Prop, Vue } from "vue-facing-decorator";

// Define the component in class-style
@Component
export default class Counter extends Vue {
  @Prop({ type: Number }) readonly start!: number;

  count = 0;

  created(): void {
    this.count = this.start ?? 0;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
</script>

<template>
  <div class="component-example-class-component">
    <ShowcaseComponent
      component-file="ExampleClassComponent.vue"
      title="Class Component example"
      link="https://facing-dev.github.io/vue-facing-decorator"
      logo="vue"
    >
      <template #example>
        <ShowcaseExample class="text-center">
          <div>
            <button @click="decrement">
              -
            </button>
            {{ count }}
            <button @click="increment">
              +
            </button>
          </div>
        </ShowcaseExample>
      </template>
    </ShowcaseComponent>
  </div>
</template>
