<script setup lang="ts">
import useTodos from "~/use/useTodos";
const { todoList, fetchTodoList, clear, completedTodos, numberOfTodos } = useTodos();

// Runtime declaration:
const emit = defineEmits(["fetched"])

// Type based declaration
// const emit = defineEmits<{
//     (event: "fetched"): void;
// }>()

function fetchTodos() {
    fetchTodoList().then(() => {
        emit("fetched");
    })
}

// initially fetch todo list
fetchTodos();
</script>

<template>
    <div>
        <h2>Number of todos: {{ completedTodos }} / {{ numberOfTodos }}</h2>
        <button @click="clear()">Clear list</button>
        <button @click="fetchTodos()">Fetch todo list</button>
        <!-- <pre>{{ todoList }}</pre> -->
        <ul class="todo-list">
            <li v-for="todo in todoList" :key="todo.id">
                <input type="checkbox" v-model="todo.completed" />
                {{ todo.title }} - {{ todo.completed }}
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@import "./assets/styles/main.scss";

.todo-list {
    background-color: #{$backgroundColor};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
</style>
