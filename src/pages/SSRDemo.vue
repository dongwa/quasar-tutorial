<template>
  <q-page padding>ssr demo</q-page>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';

onMounted(() => {
  window.localStorage.getItem('点赞');
});
</script>
