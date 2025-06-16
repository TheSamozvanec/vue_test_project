<template>
  <div class="main">
    <div id="zero" :class="props.color">dark</div>
    <div id="one" :class="props.color"> light</div>
    <div id="two" :class="props.color"> green</div>
    <div id="three" :class="props.color"> yellow</div>
  </div>
</template>

<script setup lang="ts">

const props=defineProps<{color:string}>();

</script>

<style scoped>
div.main{
    min-height: 30em;
    margin-right: 10px;
    width: 78%;
    border: 1px solid black;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    transition: all 1s ease-in;
    background-color: beige;
  }
  .main div{
    background-color: rgb(141, 121, 210);
    border: 1px solid black;
    box-shadow: 5px 3px 5px 6px black;
    cursor: grab;
    font-size: 3em;
    transition: all 0.5s ease-in;
    text-align: center;
    align-content: center;
    min-height: 50%;
  }
 .main div:hover{
    box-shadow: 1px 1px 3px 3px black;
    transform: scale(0.97);
  }
  #zero.dark{
    background-color: black;
    color:white;
  }
   #zero{
    background-color: black;
    color:black;
  }
   #one.light{
    background-color: aqua;
    color:red;
  }
   #one{
    background-color: aqua;
    color:aqua;
  }
  #two.green{
    background-color: green;
    color:red;
  }
   #two{
    background-color: green;
    color:green;
  }
   #three.yellow{
    background-color: yellow;
    color:blue;
  }
   #three{
    background-color: yellow;
    color:yellow;
  }
</style>