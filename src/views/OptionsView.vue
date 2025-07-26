
<template>

  <div>
    <PageMain :decor="decorStore.decor" />
    <PageAside :decor="decorStore.decor" />
  </div>

</template>



<script lang="ts">

import { defineComponent } from 'vue';

import PageMain from '@/components/Main/PageMain.vue';
import PageAside from '@/components/PageAside.vue';
import { mapStores } from 'pinia';
import { useDecorStore } from '@/stores/decor';

export default defineComponent({
 
  components: {
    PageMain,
    PageAside,
  },
  
  computed:{
    ...mapStores(useDecorStore)
  },
  
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
