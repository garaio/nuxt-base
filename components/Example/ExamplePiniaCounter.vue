<script lang="ts" setup>
const useCounter = useCounterStore();

// The following is an optional addition, to access the state and getters directly, not over the useCounter-store.
const { counter, doubleCounter } = storeToRefs(useCounter);
</script>

<template>
  <div class="component-pinia-counter">
    <ShowcaseComponent
      component-file="ExamplePiniaCounter.vue"
      title="State mgmt: Pinia Counter component"
      link="https://pinia.vuejs.org/"
    >
      <template #image>
        <img src="@/assets/img/pinia-logo.svg" height="100">
      </template>

      <template #example>
        <ShowcaseExample background-color="#ffd859" border-color="#f7d336" text-color="black" class="text-center">
          <div>Counter: {{ counter }}</div>
          <div>Double counter: {{ doubleCounter }}</div>
          <div>
            <button @click="useCounter.incrementCounter()">
              +
            </button>
            <button @click="useCounter.decrementCounter()">
              -
            </button>
          </div>
        </ShowcaseExample>
      </template>
    </ShowcaseComponent>
  </div>
</template>
