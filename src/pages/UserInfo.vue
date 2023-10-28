<template>
  <q-page padding>
    <div>
      {{ userInfo }}
    </div>
    <div>
      <q-input v-model="userName" />
      <q-btn label="login" @click="handleLogin" />
    </div>
  </q-page>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { login, getUserInfo } from '../composables/useUser';

const userName = ref('');
const userInfo = getUserInfo();
console.log('userInfo', userInfo);
function handleLogin() {
  login(userName.value);
}
</script>
