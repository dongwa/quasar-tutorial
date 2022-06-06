<script setup>
let count = $ref(0)

console.log(count)

function increment() {
  count++
}
</script>

<template>
  <q-page padding>
    <div>本页面开启了响应式语法糖，开启方式见quasar.config.js文件中的build中的:
      <br />
      <code>
    /** 开启响应式语法糖 */
    <br/>
      viteVuePluginOptions: {<br/>
        &nbsp;reactivityTransform: true<br/>
      },<br/>
  </code>
  <br/>
    <div class="text-h6 text-accent">注意需要： vue@^3.2.25</div>
    <br/>
    </div>
    <button @click="increment">{{ count }}</button>

  </q-page>
</template>
