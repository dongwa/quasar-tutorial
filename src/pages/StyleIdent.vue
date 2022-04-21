<template>
  <div class="q-pa-md">
    <q-btn @click="$s.toogleHead" label="click"></q-btn>
    <transition
      appear
      enter-active-class="animated rotateOutDownRight"
      leave-active-class="animated rotateOutUpRight"
    >
      <!-- Wrapping only one DOM element, defined by QBtn -->
      <q-btn v-show="show" color="secondary" icon="mail" label="Email" />
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import { useLayoutStore } from '../stores/layout';

const $s = useLayoutStore();
let date = ref('2019/02/01');
let show = ref(true);
</script>
