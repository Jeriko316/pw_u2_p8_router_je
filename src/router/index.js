import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PokemonView from '@/views/PokemonView.vue'
import ResponsivoView from '@/views/ResponsivoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pokemon',
    name: 'pokemon',
    component: PokemonView
  },
  {
    path: '/responsivo',
    name: 'responsivo',
    component: ResponsivoView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
