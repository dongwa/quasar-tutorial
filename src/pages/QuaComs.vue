<template>
  <q-page padding>
    <div class="q-pa-md q-gutter-sm">
      <q-btn
        to="/flex"
        target="_blank"
        dense
        push
        color="white"
        text-color="black"
      >
        one
      </q-btn>
      <q-btn loading outline flat color="primary" label="Primary">
        aslkdj
        <template #loading>
          <q-spinner-audio color="primary" size="2em" />
        </template>
      </q-btn>

      <q-btn outline rounded color="secondary" label="Secondary" />
      <q-btn size="17px" color="pink-6" round glossy label="Amber" />
      <q-btn
        :loading="isLaading"
        :percentage="percent"
        color="brown-5"
        label="Brown 5"
      />
      <q-btn
        ref="myBtn"
        @click="handleClick"
        color="deep-orange"
        glossy
        label="Deep Orange"
      />
      <q-btn color="purple" label="Purple" />
      <q-btn @click="hClick" color="black" label="Black" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { QBtn } from 'quasar';
import { ref } from 'vue';

let myBtn = ref<QBtn>();

let isLaading = ref(false);
let percent = ref(0);
function handleClick() {
  isLaading.value = !isLaading.value;
  setInterval(() => {
    percent.value += 10;
  }, 200);
}
function hClick() {
  console.log('click', myBtn.value);
  myBtn.value?.click();
  // if (myBtn.value) myBtn.value.click();
}
</script>

<!-- <script setup>
import { ref } from 'vue';

let myBtn = ref();

let isLaading = ref(false);
let percent = ref(0);
function handleClick() {
  isLaading.value = !isLaading.value;
  setInterval(() => {
    percent.value += 10;
  }, 200);
}
function hClick() {
  console.log('click', myBtn.value);
  myBtn.value?.click();
}
</script> -->

<!-- <script>
// options APi
import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    // handleClick() {
    //   isLaading.value = !isLaading.value;
    //   setInterval(() => {
    //     percent.value += 10;
    //   }, 200);
    // },
    hClick() {
      const dom = this.$refs.myBtn;
      dom.click();
    },
  },
});
</script> -->
