<template>
  <div class="d-block">
    <div class="m-2">
        <input v-model="newNote.title" type="text" placeholder="Title" class="form-control m-2 w-50" />
        <textarea
          v-model="newNote.text"
          type="text"
          placeholder="Write your note..."
          class="form-control m-2 w-50"
        />
    </div>
          <button @click="addNote" class="btn btn-primary shadow-lg m-2">Save Note</button>
    <div class="m-5">
      <NoteItem @deleteNote="deleteNote(note)" v-for="n in notes" v-bind:note="n" v-bind:key="n.id" />
    </div>
  </div>
</template>

<script>
import NoteItem from "@/components/NoteItem.vue"

export default {
  name: "Note",
  components: {
    NoteItem
  },
  data() {
    return {
      notes: [],
      newNote: []
    }
  },
  mounted() {
    if (localStorage.getItem("notes")) {
      localStorage.clear()
    }
  },
  methods: {
    addNote() {
      //Check if not null
      if (!this.newNote) {
        return;
      }
      this.newNote.id = this.notes.length
      this.notes.push(this.newNote)
      this.newNote = []
      this.saveNotes()
    },
    saveNotes() {
      //Saves to local storage
      const parsed = JSON.stringify(this.notes)
      localStorage.setItem("notes", parsed)
    },
    deleteNote(note) {
      this.notes.splice(this.notes.indexOf(note), 1)
      this.saveNotes()
    }
  }
}
</script>

<style>
.form-control {
    display: inline-block;
}
</style>