import { AsyncData } from "#app";
import { Ref } from "vue";

type Todos = {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}

export default function useTodos() {
    const todoList: Ref<Todos[]> = ref([]);

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
            todoList.value = response.data.value.slice(0, 6);
        }
    }

    return { todoList, fetchTodoList, clear, completedTodos, numberOfTodos}
}