<template>
  <div :class="props.decor + ' main'">
    <template v-for="(user, num) in bigUserList" :key="user.id">
      <div v-if="filter=='all' || user.status==filter" class="list">
        {{ num+1 }}
        <p>Name: {{ user.name }}</p>
        <p>{{ user.status }}</p>
        <button
        :class="'usr-button '+(toggle==1 && insertID==user.id? 'insert':'')"
        :key="user.id"
        @click="setAll(user.id)">
        All massages
        </button>
        <button
        :class="'usr-button '+(toggle==2 && insertID==user.id? 'insert':'')"
        :key="user.id"
        @click="setFirst(user.id)">
        the first 10 in the chat
        </button>
        <template v-for="(massage, index ) in chat" :key="massage.id">
          <template v-if="massage.idUser==user.id && user.id==insertID">
            <p v-if="toggle==1" class="massage">{{ massage.massage }}</p>
            <p v-else-if="toggle==2 && index<10" class="massage">{{ massage.massage }}</p>
          </template>
        </template>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import bigUserList from './mock/BigUserList';
import chat from './mock/chat';

const props = defineProps<{ decor: string, filter:string }>();
const toggle = ref(1);
const insertID= ref('');
function setAll(id:string){
  toggle.value = toggle.value==1 && insertID.value==id? 0:1;
  insertID.value=id;
}
function setFirst(id:string){
  toggle.value = toggle.value==2 && insertID.value==id? 0:2;
  insertID.value=id;
}
</script>

<style scoped>
 div.main{
 display: flex;
 flex-direction: column;
 height: 600px;
 overflow: auto;
}
div.main .list{
  margin: 1em;
  color:rgb(255, 0, 0);
  border: 1px solid black;
}
.usr-button{
 margin-left:1em;
 padding:2px;
}
.usr-button.insert{
 margin-left:1em;
 padding:2px;
 background-color: red;
}
div.main .list p.massage{
  color:blue;
}
</style>
