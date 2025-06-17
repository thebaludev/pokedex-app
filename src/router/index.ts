import { createWebHistory, createRouter } from 'vue-router'

import WelcomeView from '../views/WelcomeView.vue'
import LoadingView from '../views/LoadingView.vue'
import PokemonView from '../views/PokemonView.vue'
import FavoriteView from '../views/FavoriteView.vue'

const routes = [
  { path: '/', component: WelcomeView },
  { path: '/loading', component: LoadingView },
  { path: '/pokedex', component: PokemonView },
  { path: '/favorites', component: FavoriteView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
