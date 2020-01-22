<template>
  <div class="card border-secondary mb-3" style="max-width: 20rem;">
    <div class="card-header">{{note.title}}</div>
    <div class="card-body">
      <p class="card-text">{{note.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'NoteItem',
    props: ['note'],
    methods: {
        delete() {

        }
    }
};
</script>

<style>
</style>