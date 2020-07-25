<template>
  <div class="todo-item-card m-3 p-1 shadow-sm">
      <p class="lead d-inline m-2 text-dark">{{todo.text}}</p>
      <button @click="$emit('deleteTodo')" class="btn btn-danger btn-sm delete-button">Delete</button>
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
    background-color: white;
    border-radius: 35px;
    min-height: 3rem;
    vertical-align: middle;
    align-items: center;
}

.delete-button {
    margin-right: 15px;
    float: right;
}
</style>