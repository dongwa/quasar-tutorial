<template>
  <h1>{{ count }}</h1>
  <div class="color">{{ dCount }}</div>
  <button @click="add">add</button>
</template>
<script setup>
import { computed, ref, watch } from 'vue';

let count = ref(0);
let color = ref('red');
function add() {
  count.value++;
}
let dCount = computed(() => {
  return count.value * 2;
});
watch(count, () => {
  if (count.value % 2 === 0) color.value = 'red';
  else color.value = 'green';
});
</script>
<style>
.color {
  color: v-bind(color);
}
</style>
