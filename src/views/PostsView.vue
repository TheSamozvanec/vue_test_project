<template>
  <div :class="style['main-test']">
    The Posts!!!<br>
    <button :class="style.btn" 
      @click="router.push({name:'home'})">
     к приложению
    </button>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="{name:'post', params:{post:post.id}}">
        <h1>{{ post.title }}</h1>
        </router-link>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
//import { useAuthorizationStore } from '@/stores/authorization';
import { usePostsStore } from '@/stores/posts';
import { storeToRefs } from 'pinia';
import { useCssModule } from 'vue';
import { useRouter } from 'vue-router';

//const useAuthorization = useAuthorizationStore();
const usePostStore = usePostsStore();
//const {pageAuthorization, authorName, authorPassword}=storeToRefs(useAuthorization);
const {posts, /*isLoading*/} = storeToRefs(usePostStore);
const {getData, /*postAuthor*/} = usePostStore;
const style = useCssModule();
const router = useRouter();
getData('/posts');

</script>

<style module lang="scss">
.main-test{
  width:95%;
  height: 800px;
  background-color: brown;
  color: aliceblue;
  font-size: 5em;
  margin: 1em auto;
  overflow: auto;
  text-align: left;
  padding-left:10px;
}
.btn{
  padding: 3px;
  margin-right: 5px;
}
.text{font-size: 0.5em;}
ul{
  font-size: 0.2em;
  h1{color:blue}
}
</style>
