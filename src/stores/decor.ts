import { decorations } from '@/components/differentData/decorations';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useDecorStore = defineStore('decor', () => {
  const decorIndex = ref(0);
  const decor = computed(() => decorations[decorIndex.value]);
  function setDecor() {
    decorIndex.value = decorIndex.value < decorations.length - 1 ? decorIndex.value + 1 : 0;
  }
  return { decorIndex, decor, setDecor };
});
