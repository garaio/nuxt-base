<script setup lang="ts">
import { AsyncData } from '#app';
import { Ref } from 'vue';

type Todos = {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}
const todoList: Ref<Todos[]> = ref([]);

// Runtime declaration:
const emit = defineEmits(["fetched"])

// Type based declaration
// const emit = defineEmits<{
//     (event: "fetched"): void;
// }>()

fetchTodoList()

const numberOfTodos = computed(() => {
    return todoList.value.length;
})

const completedTodos = computed(() => {
    return todoList.value.filter(todo => todo.completed).length;
})


function clear() {
    todoList.value = [];
}

async function fetchTodoList() {
    // Client/Server fetch working
    const response = await useFetch("https://jsonplaceholder.typicode.com/todos/") as AsyncData<Todos[], Error>;
    // The response is already JSON now
    if (response.data.value !== null) {
        todoList.value = response.data.value;
        emit("fetched");
    }
}
</script>

<template>
    <div>
        <h2>Number of todos: {{ completedTodos }} / {{ numberOfTodos }}</h2>
        <button @click="clear()">Clear list</button>
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

<style lang="scss" scoped>
@import "./assets/styles/main.scss";

.todo-list {
    background-color: #{$backgroundColor};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
</style>
