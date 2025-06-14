<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    router.push('/pokedex')
  }, 1500)
})
</script>

<template>
  <section class="grid place-items-center min-h-screen">
    <img src="../assets/pokeball.svg" class="animate-bounce" alt="Pokeball icon">
  </section>
</template>