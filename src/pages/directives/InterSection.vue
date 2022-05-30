<template>
  <q-scroll-area class="box">
    <div class="empty"></div>
    <div class="example" v-intersection.once="options">被监听的Dom</div>
    <div class="empty"></div>
  </q-scroll-area>
</template>
<script setup>
const options = {
  handler: onIntersection,
  cfg: {
    threshold: [0, 0.25, 0.5, 1],
  },
};
function onIntersection(e) {
  console.log(e);
}
</script>
<style lang="scss">
.box {
  width: 100%;
  height: 300px;
  border: 1px solid gray;
}
.empty {
  height: 800px;
}
.example {
  height: 100px;
  border: 1px solid gray;
}
</style>
