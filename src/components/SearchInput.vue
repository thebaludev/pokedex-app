<script setup lang="ts">
  defineProps<{ modelValue: string }>()

  const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="relative shadow-md rounded-md w-full">
    <div class="absolute inset-y-0 start-0 flex items-center pl-4 pr-2.5">
      <img src="../assets/search.svg" alt="">
    </div>

    <input
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      type="search"
      id="search-input"
      class="w-full p-4 ps-11 text-lg outline-none text-poke-gray-900 placeholder:text-poke-gray-400"
      placeholder="Search"
    >
  </div>
</template>