<script setup lang="ts">
import BaseLinkButton from '../components/BaseLinkButton.vue'
</script>

<template>
  <section class="grid place-items-center min-h-screen">
    <div class="grid justify-items-center gap-14">
      <img src="../assets/pikachu.svg" alt="Pikachu greeting">

      <div class="grid justify-items-center gap-8">
        <h1 class="font-bold text-2xl text-poke-gray-900">Welcome to Pokédex</h1>
        <p class="font-medium text-lg text-poke-gray-700 text-center">The digital encyclopedia created by Professor Oak
          is
          an invaluable tool <br> to Trainers in the Pokémon world.</p>
      </div>

      <BaseLinkButton to="/loading" :active="$route.path === '/'">Get started</BaseLinkButton>
    </div>
  </section>
</template>
