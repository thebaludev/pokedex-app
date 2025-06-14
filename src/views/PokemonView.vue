<script setup lang="ts">
import SearchInput from '../components/SearchInput.vue'
import StarIcon from '../components/StarIcon.vue'
import BaseButton from '../components/BaseButton.vue'
</script>

<template>
  <section class="grid content-start place-self-center mt-9 min-w-3xl max-w-3xl">
    <SearchInput />

    <!-- NotFoundSection.vue -->
    <section class="grid place-items-center gap-4 mt-12">
      <h1 class="font-bold text-4xl text-poke-gray-900">Uh-oh!</h1>
      <h2 class="font-medium text-xl text-poke-gray-700">You look lost on your journey!</h2>

      <BaseButton content="Go back home" />
    </section>

    <!-- PokemonsList -->
    <div class="mt-10 hidden">
      <!-- PokemonItem -->
      <div class="flex items-center justify-between px-4 py-5 bg-white rounded-md">
        <span class="font-medium text-2xl text-poke-gray-900">Pikachu</span>

        <!-- FavoriteButton -->
        <button class="flex items-center justify-center w-11 h-11 rounded-full bg-poke-gray-100 cursor-pointer">
          <StarIcon />
        </button>
      </div>
    </div>
  </section>
</template>
