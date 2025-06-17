<script setup lang="ts">
import { computed, ref, type Ref } from 'vue'
import SearchInput from './SearchInput.vue'
import PokemonItem from './PokemonItem.vue'
import PokemonDetailModal from './PokemonDetailModal.vue'
import { usePokemonStore } from '../store/pokemonStore'
import { useFavoritesStore } from '../store/favoritesStore'
import { getPokemonDetail } from '../services/pokemonService'
import type { PokemonBasic, PokemonDetail } from '../types/pokemon'

const store = usePokemonStore()
const favoriteStore = useFavoritesStore()
const search: Ref<string> = ref('')
const showModal: Ref<boolean> = ref(false)
const selectedPokemon: Ref<PokemonDetail | null> = ref(null)

const favoriteList = computed(() => {
  return store.pokemons.filter(pokemon => favoriteStore.isFavorite(pokemon.name))
})

const filteredFavoriteList = computed(() => {
  return favoriteList.value.filter(pokemon => pokemon.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()))
})

async function openDetail(pokemon: PokemonBasic) {
  try {
    const detail = await getPokemonDetail(pokemon.url)
    selectedPokemon.value = detail
    showModal.value = true
    
  } catch (error) {
    //
  }
}
</script>

<template>
  <SearchInput v-model="search" />

  <section v-if="filteredFavoriteList.length" class="grid gap-2.5 mt-10">
    <PokemonItem 
      v-for="pokemon in filteredFavoriteList"
      :key="pokemon.name"
      :pokemon="pokemon"
      @view-detail="openDetail"
    />
  </section>

  <section v-else class="grid place-items-center gap-4 mt-12">
    <h1 class="font-bold text-4xl text-poke-gray-900">Uh-oh!</h1>
    <h2 class="font-medium text-xl text-poke-gray-700">You still have no favorite pokemon</h2>
  </section>

  <PokemonDetailModal
    v-if="showModal && selectedPokemon"
    :pokemon="selectedPokemon"
    @close="showModal = false"
  />
</template>