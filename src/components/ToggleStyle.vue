<template>
  <button id="button" :class="decor" @:click="Toggled">
     {{decor }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Decorations } from './Decorations';

export default defineComponent({
  data(){
   return {
    decorIndex:0,
    decor:Decorations[0],
   }
  },
  methods:{
    Toggled (){
      this.decorIndex=this.decorIndex<Decorations.length-1? this.decorIndex+1:0;
      this.decor=Decorations[this.decorIndex];
     // this.decor=this.decor? '':'dark';
      this.$emit('setDecor',this.decor);
      console.log(this.decor);
      console.log(Decorations);
      console.log(Decorations.length);
      console.log(this.decorIndex);
    }
  },

  emits:['setDecor'],
})
</script>

<style scoped>
 #button {
    width: 5em;
    height: 3em;
    background-color: green;
    border: 3px ridge red;
    box-shadow: 1px 2px 3px 3px black;
    border-radius: 20%;
  }

 #button.dark {
    background-color: rgb(2, 8, 29);
    color: white;
  }
  #button.light {
    background-color: rgb(220, 240, 240);
    color: black;
  }
  #button.green {
    background-color: rgb(44, 228, 2);
    color: rgb(199, 5, 5);
  }
  #button.yellow {
    background-color: rgb(212, 212, 0);
    color: blue;
  }
  #button:active{
    transform: scale(0.95);
    box-shadow: 1px 1px 1px 1px black;
  }

</style>
