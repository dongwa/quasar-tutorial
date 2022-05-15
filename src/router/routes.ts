import { RouteRecordRaw } from 'vue-router';

export interface Menus {
  path: string;
  title: string;
  icon: string;
}

export function generateRoutesOrMenus(type: 'routes' | 'menus') {
  const modules = import.meta.glob('../pages/*.vue');
  return Object.keys(modules).map((key) => {
    const fileNameWithExt = key.split('/').pop() as string;
    const fileName = fileNameWithExt.substring(0, fileNameWithExt.length - 4);
    return type === 'routes'
      ? ({
          path: fileName,
          component: modules[key],
        } as RouteRecordRaw)
      : ({
          path: fileName,
          title: fileName,
          icon: 'school',
        } as Menus);
  });
}
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: generateRoutesOrMenus('routes') as RouteRecordRaw[],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
