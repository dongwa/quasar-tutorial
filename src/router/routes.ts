import { RouteRecordRaw } from 'vue-router';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/StyleIdent.vue') },
      { path: 'flex', component: () => import('pages/FlexBox.vue') },
      { path: 'counter', component: () => import('pages/SetupCounter.vue') },
      { path: 'style', component: () => import('pages/StyleIdent.vue') },
      { path: 'option', component: () => import('pages/OptionCom.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
