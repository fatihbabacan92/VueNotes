<template>
  <div class="d-inline float-left m-2">
    <div class="card border-secondary mb-3 note">
      <div class="card-header">{{note.title}}</div>
      <div class="card-body">
        <p class="card-text">{{note.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoteItem",
  props: ["note"],
  methods: {
    delete() {}
  }
};
</script>

<style>
.note {
  min-width: 20rem;
}
</style>