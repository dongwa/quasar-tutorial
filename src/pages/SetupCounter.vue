<template>
  <h1>{{ count }}</h1>
  <div class="color">{{ dCount }}</div>
  <button @click="add">add</button>
  <q-btn @click="toStyle" label="to"></q-btn>
</template>
<script setup>
import { computed, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
const $router = useRouter();
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
function toStyle() {
  $router.push('/flex');
}
</script>
<style>
.color {
  color: v-bind(color);
}
</style>
