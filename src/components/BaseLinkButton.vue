<script setup lang="ts">
withDefaults(defineProps<{ to: string, active?: boolean }>(), {
  active: false
})
</script>

<template>
  <RouterLink
    :to="to"
    :class="active ? 'bg-poke-red focus:bg-poke-red-dark' : 'bg-poke-gray-400'"
    class="flex items-center justify-center gap-2.5 py-3 px-4 font-bold text-lg text-white rounded-full cursor-pointer"
  >
    <slot />
  </RouterLink>
</template>