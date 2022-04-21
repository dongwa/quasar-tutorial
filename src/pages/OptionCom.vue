<template>
  <q-page padding>
    <q-btn label="click me" @click="toFlex"></q-btn>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    toFlex() {
      this.$router.push('flex');
    },
  },
});
</script>
