<script setup lang="ts">
import BaseLinkButton from './BaseLinkButton.vue'
</script>

<template>
  <section class="grid place-items-center gap-4 mt-12">
    <h1 class="font-bold text-4xl text-poke-gray-900">Uh-oh!</h1>
    <h2 class="font-medium text-xl text-poke-gray-700">You look lost on your journey!</h2>

    <BaseLinkButton to="/">Go back home</BaseLinkButton>
  </section>
</template>