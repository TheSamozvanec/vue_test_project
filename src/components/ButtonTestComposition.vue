<template>
  <button class="button1" @click="setColor">
    {{ color }}
  </button>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { decorations } from './decorations'
import type { ISetColorEmit } from './emitsInterface';

const colorIndex = ref(0);
const color = ref<string>('dark');
const emits = defineEmits<ISetColorEmit>();
function setColor() {
  colorIndex.value = colorIndex.value < decorations.length - 1 ? colorIndex.value + 1 : 0;
}
watch(
  colorIndex,
  (newVal) => {
    color.value = decorations[newVal];
    emits('set-color', color.value);
  },
  { immediate: true },
);
</script>

<style scoped>
.button1 {
  margin-left: 10em;
  cursor: pointer;
  font-size: 1em;
  padding: 1em;
  border-radius: 50%;
  box-shadow: 1px 2px 3px 3px black;
}
.button1:active {
  transform: scale(0.95);
  box-shadow: 1px 1px 1px 1px black;
}
</style>
