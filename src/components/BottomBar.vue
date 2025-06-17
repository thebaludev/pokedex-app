<script setup lang="ts">
import ListIcon from '../components/ListIcon.vue'
import StarIcon from '../components/StarIcon.vue'
import BaseLinkButton from '../components/BaseLinkButton.vue'
</script>

<template>
  <section class="fixed bottom-0 flex items-center justify-center gap-4 lg:gap-5 w-full p-5 shadow-2xl/60 bg-white">
    <BaseLinkButton to="/pokedex" class="px-12 lg:px-36" :active="$route.path === '/pokedex'">
      <ListIcon /> All
    </BaseLinkButton>

    <BaseLinkButton to="/favorites" class="px-6 lg:px-36" :active="$route.path === '/favorites'">
      <StarIcon color="#FFF" /> Favorites
    </BaseLinkButton>
  </section>
</template>