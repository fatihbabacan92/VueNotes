<template>
  <div class="todo-card mx-auto shadow-lg">
    <input v-model="newTodo.text" type="text" placeholder="Write down your todo..." class="form-control m-2 w-50" />
    <button @click="addTodo" class="btn btn-primary shadow-lg m-2">Add Todo</button>
    <TodoItem @deleteTodo="deleteTodo(todo)" v-for="t in todos" v-bind:todo="t" v-bind:key="t.id" />
    <button @click="clearAll" class="btn btn-warning btn-sm d-block mx-auto">Clear All</button>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue"

export default {
    name: 'Todo',
    components: {
      TodoItem
    },
    data(){
      return {
        todos: [],
        newTodo: []
      }
    },
    mounted() {
      if (localStorage.getItem("todos")) {
        localStorage.clear()
      }
    },
    methods: {
      addTodo() {
        if (!this.newTodo.text) {
          return
        }
        this.newTodo.id = this.todos.length
        this.todos.push(this.newTodo)
        this.newTodo = []
        this.saveTodos()
      },
      saveTodos() {
        const parsed = JSON.stringify(this.todos)
        localStorage.setItem("todos", parsed)
      },
      deleteTodo(todo) {
        this.todos.splice(this.todos.indexOf(todo), 1)
        this.saveTodos()
      },
      clearAll() {
        this.todos = []
      }
    }
}
</script>

<style>
.todo-card {
  width: 75vw;
  height: 75vh;
  overflow: auto;
  color: white;
  border-radius: 35px;
  padding: 2vw;
}
</style>