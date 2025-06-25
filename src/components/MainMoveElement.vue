<template>
  <div :class="props.decor+' main'"  @mousemove="move">
    Press the button and move the display window!!!
    <div class="display" v-if="toggle"
      :style="{top: positionY+'px', left: positionX+'px'}"
      @mousedown="setDown"
      @mouseup="setUp">
      Move it with the mouse :) {{ press }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{decor:string, toggle:boolean}>();
const press=ref(false);
const positionX=ref(100);
const positionY=ref(100);
function setDown(){
  if (press.value) return;
  press.value=true;
}
function setUp(){
  press.value=false;
}
function move(ev:Event){
  if(!(press.value)) return
  positionY.value=(ev.pageY-200);
  positionX.value=(ev.pageX-50);
}
</script>

<style scoped>
 div.main{
 position: relative;
 height: 600px;
}
.display{
  position: absolute;
  /* top:100px;
  left:100px; */
  width: 300px;
  height: 200px;
  background: linear-gradient(30deg, aqua 10%, green 90%);
  border: 3px ridge red;
}
</style>
