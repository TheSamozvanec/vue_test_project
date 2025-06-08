<template>
  <button id="button" :style="btStile" @:click="Toggled">
      <span class="on">on</span><br/>
      <span class="off">off</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data(){
   return {
    tema:true
   }
  },
  methods:{
    Toggled (){
      this.tema=!this.tema
      this.$emit('setTema')
    }
  },
  computed:{
    btStile(){
      return {backgroundColor:this.tema? 'red':'green'}
    }

  },
  emits:['setTema'],
})
</script>

<style scoped>
 #button {
    width: 3em;
   /* background-color: green;*/
    border: 3px ridge red;
    box-shadow: 1px 2px 3px 3px;
    border-radius: 20%;
  }
 /* #button.dark {
    background-color: red;
  }*/
  #button:active{
    transform: scale(0.95);
    box-shadow: 1px 1px 1px 1px;
  }
  span.on{
    color:green;
  }
  span.off{
    color: red;
  }
</style>
