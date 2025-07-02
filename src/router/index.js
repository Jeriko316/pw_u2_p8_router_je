import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PokemonView from '@/views/PokemonView.vue'
import ResponsivoView from '@/views/ResponsivoView.vue'
import ApiMatriculaView from '@/views/ApiMatriculaView.vue'
import BuscarEstudianteView from '@/views/BuscarEstudianteView.vue'


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
  },
   {
    path: '/apiMatricula',           // 👈 NUEVA RUTA
    name: 'apiMatricula',
    component: ApiMatriculaView
  },
   {
    path: '/buscar-estudiante',
    name: 'buscar-estudiante',
    component: BuscarEstudianteView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
