<template>
  <q-page padding>
    <q-btn round size="xl" @click="handleClick" ref="btn_1">p </q-btn>
    <q-btn round size="xl" @click="handleClick1">p </q-btn>

    <q-form class="q-gutter-md" ref="myForm">
      <q-input
        filled
        v-model="name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        type="number"
        v-model="age"
        label="Your age *"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Please type your age',
          (val) => (val > 0 && val < 100) || 'Please type a real age',
        ]"
      />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          @click="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>

    <!-- <div class="box row q-gutter-md q-col-gutter-md">
      <div class="one col-2 offset-md-4 offset-sm-1">ssss</div>
      <div class="two col-sm-8 col-md-2">ssss</div>
      <div class="three col-2">ss</div>
    </div> -->
  </q-page>
</template>
<script setup lang="ts">
import { QBtn, QForm } from 'quasar';
import { ref } from 'vue';
const name = ref(null);
const age = ref(null);
const accept = ref(false);
const btn_1 = ref<QBtn | null>(null);
const myForm = ref<QForm | null>(null);
function handleClick() {
  alert('click ');
}
function handleClick1() {
  btn_1.value?.click();
}
function reset() {
  myForm.value?.reset();
}
</script>
<!-- <script>
import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    handleClick() {
      alert('click ');
    },
    handleClick1() {
      this.$refs.btn_1.click();
    },
  },
});
</script> -->
<style>
.box {
  width: 800px;
  height: 800px;
  border: 1px solid red;
}
.one {
  /* width: 100px; */
  height: 100px;
  border: 1px solid green;
}
.two {
  /* width: 900px; */
  height: 300px;
  border: 1px solid yellow;
}
.three {
  /* width: 150px; */
  height: 200px;
  border: 1px solid blue;
}
</style>
