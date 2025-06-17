<script setup lang="ts">
import { computed } from 'vue'
import BaseButton from './BaseButton.vue'
import FavoriteButton from './FavoriteButton.vue'
import CloseIcon from './CloseIcon.vue'
import { PokemonDetail } from '../types/pokemon'

const props = defineProps<{ pokemon: PokemonDetail }>()

const emit = defineEmits(['close'])

const pokemonName = computed<string>(() => {
  return props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1)
})

const pokemonImage = computed<string>(() => {
  return props.pokemon.sprites.other['official-artwork'].front_default
})

const pokemonTypes = computed<string>(() => {
  return props.pokemon.types.map(type => type.type.name).join(', ')
})

const capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

const getShareText = computed(() => {
  return `${pokemonName.value}, Weight: ${props.pokemon.weight}, Height: ${props.pokemon.height}, Types: ${pokemonTypes.value}`
})

const sharePokemon = async () => {
  const pokemonInfo = getShareText.value

  try {
    await navigator.clipboard.writeText(pokemonInfo)
    console.log('Texto copiado');
    
  } catch (error) {
    console.log('Error copiando', error)
    
  }
}
</script>

<template>
  <div @click.self="emit('close')" class="fixed flex items-center justify-center inset-0 bg-black/60 z-10">
    <div class="relative bg-white rounded-md max-w-80 lg:max-w-3xl w-full">
      <button class="absolute right-0 m-4 cursor-pointer rounded-full" @click="emit('close')">
        <CloseIcon />
      </button>

      <header class="flex items-center justify-center bg-[url(./assets/modal-bg.png)] bg-center bg-cover rounded-t-md">
        <img class="w-52 py-4" :src="pokemonImage" :alt="pokemon.name">
      </header>

      <div class="p-8">
        <ol class="grid gap-2.5">
          <li class="font-bold text-xl text-poke-gray-700">
            Name: <span class="font-medium">{{ pokemonName }}</span>
          </li>

          <li class="h-[1px] bg-poke-gray-200"></li>

          <li class="font-bold text-xl text-poke-gray-700">
            Weight: <span class="font-medium">{{ pokemon.weight }}</span>
          </li>

          <li class="h-[1px] bg-poke-gray-200"></li>

          <li class="font-bold text-xl text-poke-gray-700">
            Height: <span class="font-medium">{{ pokemon.height }}</span>
          </li>

          <li class="h-[1px] bg-poke-gray-200"></li>

          <li class="font-bold text-xl text-poke-gray-700">
            Types: <span class="font-medium">{{ pokemonTypes }}</span>
          </li>

          <li class="h-[1px] bg-poke-gray-200"></li>
        </ol>
      </div>

      <footer class="flex items-center justify-between px-8 pb-8">
        <BaseButton @click="sharePokemon">Share to my friends</BaseButton>

        <FavoriteButton :name="pokemon.name" />
      </footer>
    </div>
  </div>
</template>