import { createRouter, createWebHistory } from 'vue-router'
import MainApp from '../App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: MainApp,
    },
  ],
})

export default router
