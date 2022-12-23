<script setup>
const todoList = ref([]);

const emit = defineEmits(["fetched"])

const numberOfTodos = computed(() => {
    return todoList.value.length;
})

const completedTodos = computed(() => {
    return todoList.value.filter(todo => todo.completed).length;
})


function clear() {
    todoList.value = [];
}

// onMounted, beforeCreated etc. do exist, but the earliest is just calling it within the setup function here
fetchTodoList();

function fetchTodoList() {
    useAsyncData("todos", () => {
        // Client/Server fetch working
        $fetch("https://jsonplaceholder.typicode.com/todos/")
            // The response is already JSON now
            .then(json => {
                todoList.value = json;
                emit("fetched");
            })
    });
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
