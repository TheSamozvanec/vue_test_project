<template>
  <button :class="decor + ' button'" @:click="setDecor">
    {{ decor }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { decorations } from '../decorations';
export default defineComponent({
  data() {
    return {
      decorIndex: 0,
      decor: decorations[0],
    };
  },
  methods: {
    setDecor() {
      this.decorIndex = this.decorIndex < decorations.length - 1 ? this.decorIndex + 1 : 0;
    },
  },
  emits: ['setDecor'],
  watch: {
    decorIndex: {
      handler(val) {
        this.decor = decorations[val];
        this.$emit('setDecor', this.decor);
      },
      immediate: true,
    },
  },
});
</script>

<style scoped>
.button {
  cursor: pointer;
  width: 5em;
  height: 3em;
  background-color: green;
  width: 5em;
  height: 3em;
  border: 3px ridge red;
  box-shadow: 1px 2px 3px 3px black;
  border-radius: 25%;
}

.button.dark {
  background-color: rgb(2, 8, 29);
  color: white;
}
.button.light {
  background-color: rgb(220, 240, 240);
  color: black;
}
.button.green {
  background-color: rgb(44, 228, 2);
  color: rgb(199, 5, 5);
}
.button.yellow {
  background-color: rgb(212, 212, 0);
  color: blue;
}
.button:active {
  transform: scale(0.95);
  box-shadow: 1px 1px 1px 1px black;
}
</style>
