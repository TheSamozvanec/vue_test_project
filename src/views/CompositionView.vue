<template>
  <div v-if="useAuthorization">
    <DivBeforeMain @set-color="(val: string) => setColor(val)">
      <ButtonPanelMock
        v-if="asideInsert > 0 && asideInsert < 3"
        @set-filter="(val: string) => setFilter(val)"/>
      <ButtonPanelAPI v-if="asideInsert === 3" @set-filter="(val: string) => setFilter(val)" />
      <ButtonMoveElement v-if="asideInsert === 4" @set-toggle="(val: boolean) => setToggle(val)" />
    </DivBeforeMain>
    <div class="content">
      <MainComposition :color="color" v-if="asideInsert === 0" />
      <MainUserData :decor="useDecor" :filter="filter" v-if="asideInsert === 1" />
      <MainMockChat :decor="useDecor" :filter="filter" v-if="asideInsert === 2" />
      <MainApiData :decor="useDecor" :filter="filter" v-if="asideInsert === 3" />
      <MainMoveElement :decor="useDecor" :toggle="toggle" v-if="asideInsert === 4" />
      <PageAside :decor="useDecor">
        <template #push1>
          <p @click="asideInsert = 0" :class="asideInsert === 0 ? 'insert' : ''">Color illustration</p>
        </template>
        <template #push2>
          <p @click="asideInsert = 1" :class="asideInsert === 1 ? 'insert' : ''">Mock user data</p>
        </template>
        <template #push3>
          <p @click="asideInsert = 2" :class="asideInsert === 2 ? 'insert' : ''">Mock chat</p>
        </template>
        <template #push4>
          <p @click="asideInsert = 3" :class="asideInsert === 3 ? 'insert' : ''">test API data</p>
        </template>
        <template #push5>
          <p @click="asideInsert = 4" :class="asideInsert === 4 ? 'insert' : ''">Personal data test</p>
        </template>
      </PageAside>
    </div>
  </div>
</template>

<script setup lang="ts">
import DivBeforeMain from '@/components/DivBeforeMain.vue';
import MainComposition from '@/components/Main/MainComposition.vue';
import MainMockChat from '@/components/Main/MainMockChat.vue';
import MainUserData from '@/components/Main/MainUserData.vue';
import PageAside from '@/components/PageAside.vue';
//import PageFooter from '@/components/PageFooter.vue';
//import PageHeader from '@/components/PageHeader.vue';
import { /*onMounted, onUpdated, */ ref } from 'vue';
import MainApiData from '../components/Main/MainApiData.vue';
import ButtonPanelMock from '@/components/Buttons/ButtonPanelMock.vue';
import ButtonPanelAPI from '@/components/Buttons/ButtonPanelAPI.vue';
import ButtonMoveElement from '@/components/Buttons/ButtonMoveElement.vue';
import MainMoveElement from '@/components/Main/MainPersonalData.vue';
import { useDecor } from '@/composables/useDecor';
import { useAuthorization } from '@/composables/useAuthorization';
import { useRouter } from 'vue-router';

const asideInsert = ref(0);
const color = ref('dark');
const filter = ref('');
const toggle = ref(false);
const router = useRouter()

//function setDecor(val: string) {
// decor.value = val;
//}
function setColor(val: string) {
  color.value = val;
}
function setFilter(val: string) {
  filter.value = val;
}
function setToggle(val: boolean) {
  toggle.value = val;
}
// onMounted(() => console.log('mounted'));
// onUpdated(() => console.log('update'));
if (!useAuthorization.value) {
  alert('Авторизуйтесь!');
  router.push('/');
  }
</script>

<style scoped>
div.content {
  min-height: 30em;
  margin: 2px auto;
  border: 1px solid black;
  display: flex;
  justify-content: left;
  user-select: none;
  background-color: rgb(16, 12, 37);
}
aside p {
  text-align: left;
  color: rgb(148, 8, 8);
  cursor: pointer;
}
aside p:hover,
aside p.insert {
  color: red;
}
div.main {
  width: 80%;
  min-height: 600px;
}
div.main.dark {
  background-color: rgb(36, 16, 54);
}
div.main.light {
  background-color: rgb(194, 249, 249);
}
div.main.green {
  background-color: rgb(94, 252, 94);
}
div.main.yellow {
  background-color: rgb(241, 241, 115);
}
</style>
