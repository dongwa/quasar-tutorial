<style scoped>
.empty {
  height: 800px;
}
.example {
  height: 100px;
  border: 1px solid gray;
}
.example2 {
  margin-left: 900px;
  height: 100px;
  border: 1px solid gray;
}
.e2 {
  width: 1600px;
}
</style>
<template>
  <q-page padding>
    <div class="empty"></div>
    <div class="example" v-scroll="debounce(onScroll, 100)">被监听的Dom</div>
    <div class="example2" v-scroll="debounce(onScroll, 100)">被监听的Dom</div>
  </q-page>
</template>

<script lang="ts" setup>
import { debounce } from 'quasar';
function onScroll(v: number, h: number) {
  console.log('v:', v, 'h', h);
}
</script>
