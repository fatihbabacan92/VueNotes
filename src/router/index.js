import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Note from '@/components/Note.vue'
import Todo from '@/components/Todo.vue'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
        path: '/notes',
        name: 'Note',
        component: Note
    },
    {
        path: '/todo',
        name: 'Todo',
        component: Todo
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
