<template>
  <q-page padding>
    <q-btn @click="start">开始变形</q-btn>
    <div id="one" :class="{ invisible: show }"></div>
    <div id="two" :class="{ invisible: !show }"></div>
  </q-page>
</template>

<script lang="ts" setup>
import { morph } from 'quasar';
import { ref } from 'vue';
let show = ref(false);

function start() {
  morph({
    to: show.value ? '#one' : '#two',
    from: show.value ? '#two' : '#one',
    onToggle: () => {
      show.value = !show.value;
    },
    duration: 1000,
  });
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
