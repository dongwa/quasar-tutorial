<template>
  <q-page padding>
    <q-card class="article-card">
      <q-card-section>
        <div class="text-h6">
          {{ article?.title }}
        </div>
      </q-card-section>
      <q-card-section>
        <div>
          {{ article?.body }}
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script lang="ts" setup>
import { onServerPrefetch, ref } from 'vue';
import axios from 'axios';

export interface Article {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const article = ref<Article | null>(null);

async function getArticle() {
  const res = await axios.get<Article>(
    'https://jsonplaceholder.typicode.com/posts/4'
  );
  article.value = res.data;
}

onServerPrefetch(async () => {
  await getArticle();
});
</script>

<style lang="scss">
.article-card {
  width: 100%;
  min-height: 100px;
}
</style>
