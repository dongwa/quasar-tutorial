<style scoped>
.empty {
  height: 800px;
}
.example {
  height: 100px;
  border: 1px solid gray;
}
</style>
<template>
  <q-page padding>
    <div class="empty"></div>
    <div class="example" v-scroll-fire="debounce(onScroll, 100)">
      被监听的Dom
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { debounce } from 'quasar';
function onScroll(el: HTMLElement) {
  console.log('v:', el);
}
</script>
