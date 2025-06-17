import { defineStore } from "pinia"
import { ref, type Ref } from "vue"
import { getPokemonList } from "../services/pokemonService"
import type { PokemonBasic } from "../types/pokemon"

export const usePokemonStore = defineStore('pokemon', () => {
  // States
  const pokemons: Ref<PokemonBasic[]> = ref([])
  const isLoading: Ref<boolean> = ref(false)
  const error: Ref<string | null> = ref(null)

  // Actions
  async function loadPokemons() {
    isLoading.value = true
    error.value = null

    try {
      const { results } = await getPokemonList()
      pokemons.value = results
    } catch (err: any) {
      error.value = err.message || 'Unknown error'
    } finally {
      isLoading.value = false
    }
  }

  return {
    pokemons,
    isLoading,
    loadPokemons
  }
})