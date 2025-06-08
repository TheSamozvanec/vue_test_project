<template>
  <PageHeader @set-tema="SetAll"/>
  <div>
    <PageMain :title="tema"/>
    <PageAside :title="tema"/>
  </div>
  <PageFooter/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';
import PageMain from './components/PageMain.vue';
import PageAside from './components/PageAside.vue';
export default defineComponent({
  components :{
    PageHeader,
    PageFooter,
    PageMain,
    PageAside,
  },
  data(){
    return{
      tema:true
    }
  },
  methods:{
    SetAll() {
      this.tema=!this.tema;
    },
  },

})
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
