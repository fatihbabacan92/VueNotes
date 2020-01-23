<template>
  <div class="d-inline float-left m-2">
    <div class="card border-secondary mb-3 note">
      <div class="card-header">{{note.title}}</div>
      <div class="card-body">
        <p class="card-text">{{note.text}}</p>
      </div>
      <div class="mx-auto mb-2">
        <button @click="$emit('deleteNote')" class="btn btn-danger btn-sm shadow-lg">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoteItem",
  props: ["note"]
}
</script>

<style>
.note {
  min-width: 20rem;
}
</style>