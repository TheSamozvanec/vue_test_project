<template>
  <button :class="'button2 '+(toggle? 'insert':'')" @click="toggle=!toggle">
   Show display
  </button>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { ISetToggleEmit } from './emitsInterface';

  const toggle=ref(false);
  const emits=defineEmits<ISetToggleEmit>();
  watch(toggle,(newToggle)=>{
    emits('set-toggle',newToggle);
  },
  {
    immediate: true
  })
</script>

<style scoped>
.button2{
  margin: 1em;
  padding: 1em;
  /* background-color: aquamarine; */
  background:radial-gradient(ellipse, aquamarine 40%, white 90%) ;
  box-shadow: 2px 5px 5px 3px black;
  border-radius: 10%;
  transition: all 100ms ease-out;
}
.button2:active{
  transform: scale(0.95);
  box-shadow: 1px 2px 2px 1px black;
  /* color: white; */
}
.button2.insert{
   background:radial-gradient(ellipse, rgb(226, 14, 14) 60%, white 95%);
   color: white;
}

</style>
