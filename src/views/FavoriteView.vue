<script setup lang="ts">
import BottomBar from '../components/BottomBar.vue'
import PokemonFavoriteList from '../components/PokemonFavoriteList.vue'
</script>

<template>
  <section class="grid content-start place-self-center mt-9 min-w-80 lg:min-w-3xl">
    <PokemonFavoriteList />
  </section>

  <BottomBar />
</template>
