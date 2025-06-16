<template>
  <div id="bt" :class="color">
    <ButtonTestComposition @set-color="(color) => setColor(color)" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ButtonTestComposition from './ButtonTestComposition.vue';
import type { IEmits } from './emitsInterface';


const color = ref('dark');
const emits = defineEmits<IEmits>()
function setColor(val: string) {
 color.value = val;
 emits('set-color',color.value)
}
</script>

<style scoped>
#bt {
  height: 5em;
  transition: all 0.5s ease-out;
}
#bt.dark{
  background-color: black;
}
#bt.light{
  background-color: aqua;
}
#bt.green{
  background-color:green;
}
#bt.yellow{
  background-color:yellow;
}
</style>

