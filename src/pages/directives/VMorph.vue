<template>
  <q-page padding>
    <q-btn @click="start">开始变形</q-btn>
    <div v-morph:one:arr:1000="model" id="one"></div>
    <div v-morph:two:arr:1000="model" id="two"></div>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
let model = ref('one');
let arr: any = {
  one: 'two',
  two: 'one',
};
function start() {
  model.value = arr[model.value];
}
</script>
<style scoped lang="scss">
#one {
  width: 100px;
  height: 100px;
  background: blue;
}
#two {
  width: 200px;
  height: 150px;
  background: yellow;
}
</style>
