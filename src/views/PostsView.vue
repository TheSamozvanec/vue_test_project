<template>
  <div :class="style['main-test']">
    The Posts!!!<br>
    <p :class="style.text">имя <input v-model="name"/></p>
    <p :class="style.text">пароль <input v-model="password"/></p>
    <button :class="style.btn" 
      @click="authorization"
      :disabled="loader">
    авторизоваться
    </button>
    <button :class="style.btn" 
      @click="goUp"
      :disabled="!useAuthorization">
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
import { $api } from '@/components/api';
import type { IPost } from '@/components/mock/types';
import { useAuthorization } from '@/composables/useAuthorization';
import { ref, useCssModule } from 'vue';
import { /*useRoute,*/ useRouter } from 'vue-router';

const style = useCssModule();
const router = useRouter();
const name = ref('Oleg');
const password = ref('qwert');
const posts = ref<IPost[]>([]);
const loader =ref(false);

const fetchPosts = async () => {
  
  try{
    const {data} = await $api.get('/posts');
    posts.value=data;
  } catch (err) {
    console.error(err)
  } finally {
    
  }
}
fetchPosts();
async function authorization(){
  if (name.value.length<3 || password.value.length<3){
    alert('Авторизуйтесь!');
    return;
  }
  loader.value=true;
  //useAuthorization.value=true;
  try{
    const {data} = await $api.post('/users');
    useAuthorization.value=true;
    console.log(data)
  } catch(err) {
    alert(err)
  } finally{
    loader.value=false
    
  }
}
function goUp(){if (useAuthorization.value)router.push({name:'composition'})}
//________________ первый вариант (путь перехода)
// function onClick(){
//   router.push('/')
// }
//________________ второй вариант (по имени в роутере)
// function onClick(){
//   router.push({name:'home'})
// }
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
