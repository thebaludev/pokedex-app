<script setup lang="ts">
defineProps<{ content: string }>()
</script>

<template>
  <button class="py-3 px-7 bg-poke-red font-bold text-lg text-white rounded-full cursor-pointer hover:bg-poke-red-dark">
    {{ content }}
  </button>
</template>