<template>
  <div class="app">
    <img alt="Vue logo" src="/assets/logo.png" />
    <h1>Welcome to VueNotes</h1>
    <button type="button" class="btn btn-primary mt-5 shadow-lg">Go to Notes</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mt-5 {
  margin-top: 5vh;
}
</style>
