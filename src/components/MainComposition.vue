<template>
  <div class="main">
    <div :class="props.color+' zero'" @click="cond1=!cond1">dark<br>
      <span v-if="cond1">Push! working of the "v-if" directive</span>
      <span v-else-if="cond2">'v-else-if'</span>
      <span v-else>'v-else'</span>
    </div>
    <div :class="props.color+' one'" @click="cond2=!cond2"> light<br>
      <span v-show="cond2">Push! working of the "v-show" directive</span>
    </div>
    <div :class="props.color+' two'"> green
      <ul>
        <li v-for="user in userList" :key="user.id">{{ user.name }}</li>
      </ul>
    </div>
    <div :class="props.color+' three'"> yellow
      <ul>
        <template v-for="(user, num) in userList" :key="user.id">
          <li v-if="user.visible">{{ (num+1)+': '+user.name }}</li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { userList } from './mock/userList';

const cond1=ref(true);
const cond2=ref(true);
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
  div.zero.dark{
    background-color: black;
    color:white;
  }
  div.zero{
    background-color: black;
    color:black;
  }
  div.one.light{
    background-color: aqua;
    color:red;
  }
  div.one{
    background-color: aqua;
    color:aqua;
  }
  div.two.green{
    background-color: green;
    color:red;
  }
  div.two{
    background-color: green;
    color:green;
  }
  div.three.yellow{
    background-color: yellow;
    color:blue;
  }
  div.three{
    background-color: yellow;
    color:yellow;
  }
  span, li{
    font-size: 16px;
  }
  ul{
    width:80%;
    margin-left:1em;
    list-style-type: none;
  }

</style>
