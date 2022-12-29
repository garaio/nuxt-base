<script setup lang="ts">
const { todoList, completedTodos, numberOfTodos, fetchTodoList, clear } = useTodos();
fetchTodoList(); // initially fetch todo list
</script>

<template>
  <div>
    <img src="@/assets/img/composable.svg" width="200" height="200" />
    <h1>Todo List example using composable code (useTodos)</h1>
    <NuxtLink to="https://vuejs.org/guide/reusability/composables.html" target="_blank">
      https://vuejs.org/guide/reusability/composables.html</NuxtLink>

    <ExampleBox>
      <h2>Number of todo's: {{ completedTodos }} / {{ numberOfTodos }}</h2>
      <button @click="clear()">Clear list</button>
      <button @click="fetchTodoList()">Fetch todo list</button>

      <ul class="todo-list">
        <li v-for="todo in todoList" :key="todo.id">
          <input type="checkbox" v-model="todo.completed" />
          {{ todo.title }} - {{ todo.completed }}
        </li>
      </ul>
    </ExampleBox>
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
