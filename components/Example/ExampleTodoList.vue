<script setup lang="ts">
const { todoList, completedTodos, numberOfTodos, fetchTodoList, clear } = useTodos();
fetchTodoList(); // initially fetch todo list
</script>

<template>
  <div class="component-example-todo-list">
    <ShowcaseComponent
      component-file="ExampleTodoList.vue"
      title="Todo List example using composable code (useTodos)"
      link="https://vuejs.org/guide/reusability/composables.html"
      logo="vue"
    >
      <template #example>
        <ShowcaseExample>
          <h2>Number of todo's: {{ completedTodos }} / {{ numberOfTodos }}</h2>
          <button @click="clear()">
            Clear list
          </button>
          <button @click="fetchTodoList()">
            Fetch todo list
          </button>

          <ul class="todo-list">
            <li v-for="todo in todoList" :key="todo.id">
              <input v-model="todo.completed" type="checkbox">
              {{ todo.title }} - {{ todo.completed }}
            </li>
          </ul>
        </ShowcaseExample>
      </template>
    </ShowcaseComponent>
  </div>
</template>

<style lang="scss" scoped>
.todo-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: left;
  list-style-type: none;
}
</style>
