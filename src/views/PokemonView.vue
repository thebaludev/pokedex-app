<script setup lang="ts">
import BottomBar from '../components/BottomBar.vue'
import PokemonList from '../components/PokemonList.vue'
</script>

<template>
  <section class="grid content-start place-self-center mt-9 min-w-80 lg:min-w-3xl">
    <PokemonList />
  </section>

  <BottomBar />
</template>
