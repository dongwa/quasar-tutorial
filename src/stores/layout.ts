import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    leftDrawerOpen: true,
    headOpen: true,
  }),

  actions: {
    toogleLeftDraw() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
    toogleHead() {
      this.headOpen = !this.headOpen;
    },
  },
});
