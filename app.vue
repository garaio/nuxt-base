<script>
import { defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  created() {
    this.fetchTodoList();
  },
  data: () => ({
    todoList : []
  }),
  computed: {
    numberOfTodos() {
      return this.todoList.length;
    },
    completedTodos() {
      return this.todoList.filter(todo => todo.completed).length;
    }
  },
  methods: {
    fetchTodoList() {
      fetch("https://jsonplaceholder.typicode.com/todos/")
        .then(response => response.json())
        .then(json => {
          this.todoList = json;
        });
    }
  }
})
</script>

<template>
  <div>
    <h1>Hello Nuxt App</h1>
    <img src="/background.jpg" width="300"/> 
    <h2>Number of todos: {{ completedTodos }} / {{ numberOfTodos }}</h2>
    <button @click="fetchTodoList()">Fetch todo list</button>
    <!-- <pre>{{ todoList }}</pre> -->
    <ul>
      <li v-for="todo in todoList" :key="todo.id">
        <input type="checkbox" v-model="todo.completed" />
        {{ todo.title }} - {{ todo.completed }}
      </li>
    </ul>
  </div>
</template>
