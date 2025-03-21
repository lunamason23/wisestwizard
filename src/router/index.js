import { createRouter, createWebHistory } from 'vue-router'
import Mana from '../views/Mana.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mana',
      component: Mana,
    },
  ],
})

export default router
