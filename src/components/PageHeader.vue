<template>
  <header :class="decor">
    <ToggleStyle @set-decor="setDecor" />
    <div class="use">Content</div>
    <div>Products</div>
    <div>Blog</div>
    <div>Sponsors</div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ToggleStyle from './Buttons/ToggleStyle.vue';

export default defineComponent({
  components: {
    ToggleStyle,
  },
  data() {
    return {
      decor: 'dark',
    };
  },
  methods: {
    setDecor(decor: string) {
      this.decor = decor;
      this.$emit('setDecor', this.decor);
    },
  },
  emits: ['setDecor'],
});
</script>

<style scoped>
header {
  min-height: 3em;
  margin: 2px auto;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  user-select: none;
  transition: all 1s ease-in;
  background-color: aqua;
}
header.dark {
  background-color: rgb(24, 24, 35);
}
header.green {
  background-color: rgb(40, 147, 15);
}
header.yellow {
  background-color: yellow;
}
div {
  margin: 3px;
  padding: 5px;
  width: 200px;
  background-color: green;
  text-align: center;
  align-content: center;
  font-size: 2em;
  cursor: pointer;
}
div:hover {
  background-color: rgb(22, 239, 22);
}
div.use {
  background-color: rgb(22, 239, 22);
}
</style>
