<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-lg">
      <a class="navbar-brand" href="#">VueNotes</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/notes">Notes</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/todo">Todo</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="route-container">
      <router-view />
    </div>
    <div class="author">
      <p class="lead">Made by Fatih Babacan with ☕ and ❤</p>
    </div>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.route-container {
  margin-top: 5vh;
  width: 100vw;
}
.author {
  margin-top: 2vh;
  display: flex;
  justify-content: center;
  width: 100vw;
}
</style>
