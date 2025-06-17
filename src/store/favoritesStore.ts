import { defineStore } from "pinia"
import { ref, type Ref } from "vue"

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites: Ref<Array<string>> = ref([])

  function toggleFavorite(pokemonName: string) {
    if (favorites.value.includes(pokemonName)) {
      favorites.value = favorites.value.filter(name => name !== pokemonName)
    } else {
      favorites.value.push(pokemonName)
    }
  }

  function isFavorite(pokemonName: string) {
    return favorites.value.includes(pokemonName)
  }

  return {
    favorites,
    toggleFavorite,
    isFavorite
  }
})