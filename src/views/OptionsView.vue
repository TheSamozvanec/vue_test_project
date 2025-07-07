
<template>

  <div v-if="authorization">
    <PageMain :decor="decor" />
    <PageAside :decor="decor" />
  </div>

</template>


<script lang="ts">

import { defineComponent } from 'vue';

import PageMain from '@/components/Main/PageMain.vue';
import PageAside from '@/components/PageAside.vue';
import { useDecor } from '@/composables/useDecor';
import { useAuthorization } from '@/composables/useAuthorization';
import { useRouter } from 'vue-router';


export default defineComponent({
 
  components: {
    PageMain,
    PageAside,
  },
  
  computed:{
    decor(){
      return useDecor.value
    },
    authorization(){
      return useAuthorization.value
    }
  },
  
  beforeCreate(){
    console.log('mounted');
    const router = useRouter();
    if (!useAuthorization.value) {
      alert('Авторизуйтесь!')
      router.push('/')
    };
  }
  // methods: {
  //   SetDecor(decor: string) {
  //     this.decor = decor;
  //   },
  // },
});
</script>

<style scoped>
div {
  min-height: 30em;
  margin: 2px auto;
  border: 1px solid black;
  display: flex;
  justify-content: left;
  user-select: none;
  background-color: rgb(72, 47, 210);
}
</style>
