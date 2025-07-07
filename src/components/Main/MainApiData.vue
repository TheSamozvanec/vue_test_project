<template>
  <div :class="props.decor + ' main'">
    <template v-for="(post, index) in posts" :key="index" >
      <div v-if="filter==='all'" class="vuz">
        {{  index+1 }} - {{ post.name }}
        <p v-for="(elem, ind) in post" :key="ind" class="tag">
          <span class="key">{{ ind }}</span> - <span class="val">{{ elem }}</span>
        </p>
      </div>
      <div v-else-if="filter==='University' && !(post.name.includes('State'))" class="vuz">
        {{  index+1 }} - {{ post.name }}
        <p v-for="(elem, ind) in post" :key="ind" class="tag">
          <span class="key">{{ ind }}</span> - <span class="val">{{ elem }}</span>
        </p>
      </div>
      <div v-else-if="filter==='State' && post.name.includes('State')" class="vuz">
        {{  index+1 }} - {{ post.name }}
        <p v-for="(elem, ind) in post" :key="ind" class="tag">
          <span class="key">{{ ind }}</span> - <span class="val">{{ elem }}</span>
        </p>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{ decor: string, filter: string}>();
const posts = ref()

// fetch('')
// fetch('')
// fetch('https://randomuser.me/api/')// сработал
// fetch('https://official-joke-api.appspot.com/random_joke') // сработал
// fetch('https://catfact.ninja/fact') // нет
// fetch('https://api.publicapis.org/entries') // нет
fetch('http://jsonplaceholder.typicode.com/todos/') // /todos /comments	/ posts / users /через раз((
// fetch ('https://www.boredapi.com/api/activity') // нет
// fetch('https://api.coindesk.com/v1/bpi/currentprice.json') // нет
// fetch('http://universities.hipolabs.com/search?country=Kazakhstan') // сработал
  .then((response) =>
  { console.log(response.headers)
    if(response.ok) {
    return response.json()
  }
    else throw new Error("error!!!")
    })
  .then((json) => posts.value=json)
  .catch((Error)=>posts.value=([{name:Error}]))
</script>

<style scoped>
  div.main{
  display: flex;
  flex-direction: column;
  height: 600px;
  overflow: auto;
  }
  div.vuz{
    user-select: text;
    border: 3px solid black;
    margin: 5px;
  }
  span.key{
    color:red
  }
  span.val{
    color:blue;
  }
</style>
