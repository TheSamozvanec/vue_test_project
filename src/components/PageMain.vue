<template>
  <main :style="SetColor">
    <div> 1</div>
    <div> 2</div>
    <div> 3</div>
    <div> 4</div>
    <div> 5</div>
    <div> 6</div>
    <div> 7</div>
    <div> 8</div>
    <div> 9</div>
    <div> 10</div>
    <div> 11</div>
    <div> 12</div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: Boolean,
      required: false,
      default:true,
    }
  },
  computed:{
    SetColor() {
      return {backgroundColor:this.title?'rgb(24, 24, 35)':'beige'}
    }
  },
});
</script>

<style scoped>
  main{
    min-height: 30em;
    margin-right: 10px;
    width: 78%;
    border: 1px solid black;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    transition: all 1s ease-in;
    background-color: beige;
  }
  main.dark{
    background-color: rgb(24, 24, 35);
  }
  div{
    background-color: rgb(141, 121, 210);
    border: 1px solid black;
    box-shadow: 5px 3px 5px 6px;
    cursor: grab;
    font-size: 3em;
    transition: all 0.5s ease-in;
    text-align: center;
    align-content: center;
    min-height: 50%;
  }
  div:hover{
    box-shadow: 1px 1px 3px 3px;
    transform: scale(0.97);
  }
</style>
