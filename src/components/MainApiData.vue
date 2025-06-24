<template>
  <div :class="props.decor + ' main'">
    <template v-for="(post, index) in posts" :key="index" >
      <div v-if="filter=='all'" class="vuz">
        {{  index+1 }} - {{ post.name }}
        <p v-for="(elem, ind) in post" :key="ind" class="tag">
          <span class="key">{{ ind }}</span> - <span class="val">{{ elem }}</span>
        </p>
      </div>
      <div v-else-if="filter=='University' && !(post.name.includes('State'))" class="vuz">
        {{  index+1 }} - {{ post.name }}
        <p v-for="(elem, ind) in post" :key="ind" class="tag">
          <span class="key">{{ ind }}</span> - <span class="val">{{ elem }}</span>
        </p>
      </div>
      <div v-else-if="filter=='State' && post.name.includes('State')" class="vuz">
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
fetch('http://universities.hipolabs.com/search?country=Kazakhstan')
  .then((response) =>response.json())
  .then((json) => posts.value=json)
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
