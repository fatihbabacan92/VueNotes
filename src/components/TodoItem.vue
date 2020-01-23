<template>
  <div class="todo-item-card m-2 p-1">
      <p class="lead d-inline m-2 text-dark">{{todo.text}}</p>
      <button @click="$emit('deleteTodo')" class="btn btn-danger btn-sm d-inline m-2 float-right">Delete</button>
  </div>
</template>

<script>
export default {
    name: 'TodoItem',
    props: ["todo"]
}
</script>

<style>
.todo-item-card {
    background-color: aliceblue;
    border-radius: 35px;
    min-height: 3rem;
}
</style>