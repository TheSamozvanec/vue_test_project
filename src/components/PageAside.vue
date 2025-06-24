<template>
  <aside :class="decor">
    <h1>Welcome!!!</h1>
    <p><a href="/Composition"> Composition</a></p>
    <p><a href="./">Options</a></p>
    <slot name="push1" />
    <slot name="push2" />
    <slot name="push3" />
    <slot name="push4" />
    <slot name="push5" />
    <slot name="push6" />
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
