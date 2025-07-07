<template>
  <div>
    <PageHeader />
    <router-view />
    <PageFooter />
  </div>
</template>

<script setup lang="ts">
import PageFooter from '@/components/PageFooter.vue';
import PageHeader from '@/components/PageHeader.vue';

</script>

<style scoped>

</style>