<template>
  <div :class="props.decor + ' main'">
    <template v-for="massage in chat" :key="massage.id">
      <div class="list" v-if="filter == 'all' || getStatus(massage.idUser) == filter">
        <p>{{ getName(massage.idUser) }} / {{ getStatus(massage.idUser) }}</p>
        <p class="massage">{{ massage.massage }}</p>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import bigUserList from '../mock/BigUserList';
import chat from '../mock/chat';

const props = defineProps<{ decor: string; filter: string }>();
function getName(idUser: string) {
  return bigUserList.find((user) => user.id == idUser)?.name;
}
function getStatus(idUser: string) {
  return bigUserList.find((user) => user.id == idUser)?.status;
}
</script>

<style scoped>
div.main {
  display: flex;
  flex-direction: column;
  height: 600px;
  overflow: auto;
}
div.main .list {
  margin: 1em;
  color: rgb(255, 0, 0);
  border: 1px solid black;
}
div.main .list p.massage {
  color: blue;
}
</style>
