<template>
  <aside :class="decor">
    <h1>Welcome!!!</h1>
    <p><a href="/Composition"> Composition</a></p>
    <p><a href="./">Options</a></p>
    <p><a href="#">text text text 3</a></p>
    <p><a href="#">text text text 4</a></p>
    <p><a href="#">text text text 5</a></p>
    <p><a href="#">text text text 6</a></p>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    decor: {
      type: String,
      required: false,
      default:'dark',
    }
  },
});
</script>

<style scoped>
aside {
  background-color: aqua;
  padding: 3px;
  width: 30%;
  min-height: 30em;
  text-align: center;
  transition: all 1s ease-in;
}
aside.dark {
  background-color: rgb(24, 24, 35);
}
aside.green {
  background-color: rgb(101, 240, 70);;
}
aside.yellow {
  background-color: rgb(179, 250, 48);
}
p {
  background-color: rgba(255, 255, 255, 0);
  text-align: justify;
}
</style>
