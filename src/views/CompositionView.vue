<template>
    <PageHeader @set-decor="(val:string)=>setDecor(val)"/>
      <DivBeforeMain @set-color="(val:string)=>setColor(val)"/>
    <div id="content" >
      <MainComposition :color="color"/>
      <PageAside :decor="decor"/> 
    </div>
    <PageFooter/>
</template>

<script setup lang="ts">
import DivBeforeMain from '@/components/DivBeforeMain.vue';
import MainComposition from '@/components/MainComposition.vue';
import PageAside from '@/components/PageAside.vue';
import PageFooter from '@/components/PageFooter.vue';
import PageHeader from '@/components/PageHeader.vue';
import { ref } from 'vue';

const decor=ref('dark');
const color=ref('dark');
function setDecor(val:string){
  decor.value=val;
}
function setColor(val:string){
  color.value=val;
}

</script>

<style scoped>
#content {
  min-height: 30em;
  margin: 2px auto;
  border: 1px solid black;
  display: flex;
  justify-content: left;
  user-select: none;
  background-color: rgb(16, 12, 37);
}

</style>
