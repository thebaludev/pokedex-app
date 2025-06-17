<script setup lang="ts">
import { computed, onMounted, ref, type Ref } from 'vue'
import PokemonItem from './PokemonItem.vue'
import SearchInput from './SearchInput.vue'
import NotFoundSection from '../components/NotFoundSection.vue'
import PokemonDetailModal from './PokemonDetailModal.vue'
import { getPokemonDetail } from '../services/pokemonService'
import { usePokemonStore } from '../store/pokemonStore'
import type { PokemonDetail } from '../types/pokemon'

const store = usePokemonStore()
const search: Ref<string> = ref('')
const showModal: Ref<boolean> = ref(false)
const selectedPokemon: Ref<PokemonDetail | null> = ref(null)

onMounted(() => store.loadPokemons())

const filteredList = computed(() => {
  return store.pokemons.filter(
    pokemon => pokemon.name.toLowerCase().includes(search.value.toLocaleLowerCase())
  )
})

async function openDetail(pokemon) {
  const detail = await getPokemonDetail(pokemon.url)
  selectedPokemon.value = detail
  showModal.value = true
}
</script>

<template>
  <SearchInput v-model="search" />

  <section v-if="!store.isLoading && filteredList.length" class="grid gap-2.5 mt-10 mb-32">
    <PokemonItem 
      v-for="pokemon in filteredList"
      :key="pokemon.name"
      :pokemon="pokemon"
      @view-detail="openDetail"
    />
  </section>

  <NotFoundSection v-else-if="!store.isLoading && !filteredList.length" />

  <PokemonDetailModal
    v-if="showModal && selectedPokemon"
    :pokemon="selectedPokemon"
    @close="showModal = false"
  />
</template>