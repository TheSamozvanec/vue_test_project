<template>
  <div :class="style['main-test']">
    Authorization<br>
    <p :class="style.text">имя </p> 
    <input v-model="authorName"/>
    <p :class="style.text">пароль </p> 
    <input v-model="authorPassword"/>
    <br/>
    <button :class="style.btn" 
      @click="postAuthor"
      :disabled="isLoading">
    авторизоваться
    </button>
    <button :class="style.btn" 
      @click="router.push({name:'composition'})"
      :disabled="!pageAuthorization">
     к приложению
    </button>
  </div>
</template>

<script setup lang="ts">
import { useAuthorizationStore } from '@/stores/authorization';
import { usePostsStore } from '@/stores/posts';
import { storeToRefs } from 'pinia';
import { useCssModule } from 'vue';
import { useRouter } from 'vue-router';

const useAuthorization = useAuthorizationStore();
const usePostStore = usePostsStore();
const {pageAuthorization, authorName, authorPassword}=storeToRefs(useAuthorization);
const {isLoading} = storeToRefs(usePostStore);
const { postAuthor} = usePostStore;
const style = useCssModule();
const router = useRouter();

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
