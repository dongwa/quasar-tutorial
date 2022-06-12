<template>
  <q-page padding>
    <div v-mutation="handle">
      <div v-for="id in 5" :key="id">{{ id }}</div>
    </div>
  </q-page>
</template>
<script lang="ts" setup>
function handle(mutationList: MutationRecord[]) {
  mutationList.forEach((record) => {
    console.log(record);
  });
}
</script>
<style lang="scss"></style>
