<template>
  <div>
    <div>
      <p>Title</p>
      <input v-model="newNote.title" />
      <p>Text</p>
      <input v-model="newNote.text" />
      <button @click="addNote">Save Note</button>
    </div>
    <div>
      <NoteItem v-for="n in notes" v-bind:note="n" v-bind:key="n.id" />
    </div>
  </div>
</template>

<script>
import NoteItem from "@/components/NoteItem.vue";

export default {
  name: "Note",
  components: {
    NoteItem
  },
  data() {
    return {
      notes: [],
      newNote: []
    };
  },
  mounted() {
    if (localStorage.getItem("notes")) {
      this.notes = JSON.parse(localStorage.getItem("notes"))
    }
  },
  methods: {
    addNote() {
        //Check if not null
        if (!this.newNote) {
            return
        }
        this.notes.push(this.newNote)
        this.newNote = []
        this.saveNotes()
    },
    saveNotes() {
        //Saves to local storage
        const parsed = JSON.stringify(this.notes);
        localStorage.setItem('notes', parsed)
    }
  }
};
</script>

<style>
</style>