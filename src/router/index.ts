import { createWebHistory, createRouter } from 'vue-router'

import WelcomeView from '../views/WelcomeView.vue'
import PokemonView from '../views/PokemonView.vue'

const routes = [
  { path: '/', component: WelcomeView },
  { path: '/pokedex', component: PokemonView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
