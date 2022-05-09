<template>
  <router-view />
</template>

<script lang="ts" setup>
import { useQuasar } from 'quasar';

const $q = useQuasar();

// Example of adding support for
// <q-icon name="app:...." />
// This includes support for all "icon" props
// of Quasar components
console.log(process.env);
console.log(import.meta.env);
$q.iconMapFn = (iconName) => {
  // iconName is the content of QIcon "name" prop

  // your custom approach, the following
  // is just an example:
  if (iconName.startsWith('ic-')) {
    return {
      cls: 'iconfont icon-' + iconName.substring(3),
    };
  }
};
</script>
