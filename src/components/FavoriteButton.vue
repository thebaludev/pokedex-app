<script setup lang="ts">
import { useFavoritesStore } from '../store/favoritesStore'
import StarIcon from './StarIcon.vue'

defineProps<{ name: string }>()

const favoriteStore: { toggleFavorite: Function, isFavorite: Function } = useFavoritesStore()

const toggleFavorite = (name: string) => favoriteStore.toggleFavorite(name)
</script>

<template>
  <button @click.stop="toggleFavorite(name)" class="flex items-center justify-center w-11 h-11 rounded-full bg-poke-gray-100 cursor-pointer">
    <StarIcon :color="favoriteStore.isFavorite(name) ? '#ECA539' : '#BFBFBF'" />
  </button>
</template>