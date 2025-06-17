<script setup lang="ts">
import { computed } from 'vue';
import FavoriteButton from './FavoriteButton.vue';
import type { PokemonBasic } from '../types/pokemon';

const props = defineProps<{ pokemon: PokemonBasic }>()

const emit = defineEmits(['viewDetail'])

const pokemonName = computed(() => props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1))
</script>

<template>
  <div @click="emit('viewDetail', pokemon)" class="flex items-center justify-between px-4 py-5 bg-white rounded-md cursor-pointer">
    <span class="font-medium text-2xl text-poke-gray-900">{{ pokemonName }}</span>

    <FavoriteButton :name="pokemon.name" />
  </div>
</template>