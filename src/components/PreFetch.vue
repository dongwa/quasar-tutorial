<template>
  <q-page padding>
    <q-card class="article-card">
      <q-card-section>
        <div class="text-h6">
          {{ articleStore.article?.title }}
        </div>
      </q-card-section>
      <q-card-section>
        <div>
          {{ articleStore.article?.body }}
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script lang="ts" setup>
import { useArticle } from 'src/stores/article';

console.log('on setup');

const articleStore = useArticle();

defineOptions({
  async preFetch() {
    console.log('on preFetch');
    const articleStore = useArticle();
    await articleStore.getArticle();
  },
});
</script>

<style lang="scss">
.article-card {
  width: 100%;
  min-height: 100px;
}
</style>
