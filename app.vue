<script setup>
const todoList = ref([]);

const numberOfTodos = computed(() => {
  return todoList.value.length;
})

const completedTodos = computed(() => {
  return todoList.value.filter(todo => todo.completed).length;
})

function fetchTodoList() {
  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then(response => response.json())
    .then(json => {
      todoList.value = json;
    });
}
</script>

<template>
  <div :class="$style.page">
    <h1>Hello Nuxt App</h1>
    <img src="/background.jpg" width="300" />
    <h2>Number of todos: {{ completedTodos }} / {{ numberOfTodos }}</h2>
    <button @click="fetchTodoList()">Fetch todo list</button>
    <!-- <pre>{{ todoList }}</pre> -->
    <ul class="todo-list">
      <li v-for="todo in todoList" :key="todo.id">
        <input type="checkbox" v-model="todo.completed" />
        {{ todo.title }} - {{ todo.completed }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.todo-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>

<style module>
.page {
  padding: 50px;
}
</style>
