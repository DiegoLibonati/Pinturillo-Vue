<script setup lang="ts">
const props = defineProps<{
  click: () => void;
}>();
</script>

<template>
  <button
    type="button"
    class="h-full w-full bg-tertiary rounded-lg text-4xl p-2 text-white font-semibold cursor-pointer transition-all hover:bg-opacity-75 active:scale-90"
    @click="props.click"
  >
    <slot></slot>
  </button>
</template>
