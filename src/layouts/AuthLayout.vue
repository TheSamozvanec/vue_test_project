<template>
  <div>
    <div class="head"> Страница постов</div>
    <router-view/>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.head{
  width:100%;
  height: 100px;
  text-align: center;
  background-color: green;
  color:black;
  padding-top: 5px;
  font-size: 3em;
}
</style>