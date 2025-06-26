<template>
  <div id="bt" :class="color + ' bt'">
    <ButtonTestComposition @set-color="(color) => setColor(color)" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ButtonTestComposition from './Buttons/ButtonTestComposition.vue';
import type { ISetColorEmit } from './emitsInterface';

const color = ref('dark');
const emits = defineEmits<ISetColorEmit>();
function setColor(val: string) {
  color.value = val;
  emits('set-color', color.value);
}
</script>

<style scoped>
div.bt {
  height: 5em;
  transition: all 0.5s ease-out;
}
div.bt.dark {
  background-color: black;
}
div.bt.light {
  background-color: aqua;
}
div.bt.green {
  background-color: green;
}
div.bt.yellow {
  background-color: yellow;
}
</style>
