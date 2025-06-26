<!--html код и созданные компоненты-->
<template>
  <PageHeader @set-decor="SetDecor" />
  <div>
    <PageMain :decor="decor" />
    <PageAside :decor="decor" />
  </div>
  <PageFooter />
</template>

<!-- script подключение модулей и скрипт-код компонента-->
<script lang="ts">
// модули (в т.ч. компоненты)
import { defineComponent } from 'vue';
import PageHeader from '@/components/PageHeader.vue';
import PageFooter from '@/components/PageFooter.vue';
import PageMain from '@/components/Main/PageMain.vue';
import PageAside from '@/components/PageAside.vue';

// скрипт-код компонента
export default defineComponent({
  // компоненты
  components: {
    PageHeader,
    PageFooter,
    PageMain,
    PageAside,
  },
  // реактивные переменные
  data() {
    return {
      decor: 'dark',
    };
  },
  // методы управления реактивными переменными
  methods: {
    SetDecor(decor: string) {
      this.decor = decor;
    },
  },
});
</script>

<style scoped>
div {
  min-height: 30em;
  margin: 2px auto;
  border: 1px solid black;
  display: flex;
  justify-content: left;
  user-select: none;
  background-color: rgb(72, 47, 210);
}
</style>
