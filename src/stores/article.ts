import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export interface Article {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const useArticle = defineStore('article', () => {
  const article = ref<Article | null>(null);

  async function getArticle() {
    const res = await axios.get<Article>(
      'https://jsonplaceholder.typicode.com/posts/4'
    );
    article.value = res.data;
  }

  return {
    article,
    getArticle,
  };
});
