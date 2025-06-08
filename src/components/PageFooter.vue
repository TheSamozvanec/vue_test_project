<template>
  <footer>
    <div>
      Adres: <br />
      г.Город ул.Улица, д. Деревянный
    </div>
    <div>
      email: <br />
      <a href="#">....</a>
    </div>
    <div>
      phone: <br />
      (999)99-99-99
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style scoped>
footer {
  min-height: 1em;
  margin: 2px auto;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  user-select: none;
  background-color: black;
}
div {
  margin: 3px;
  padding: 5px;
  width: 200px;
  background-color: rgb(6, 1, 57);
  text-align: center;
  align-content: center;
  font-size: 0.5em;
  color: wheat;
}
</style>
