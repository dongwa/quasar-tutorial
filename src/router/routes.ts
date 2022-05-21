import { RouteRecordRaw } from 'vue-router';

export interface Menus {
  path: string;
  title: string;
  icon: string;
}
type RoutesOrMenus<T> = T extends 'routes' ? RouteRecordRaw : Menus;
export function generateRoutesOrMenus<T extends 'routes' | 'menus'>(type: T) {
  const modules = import.meta.glob('../pages/*.vue');
  return Object.keys(modules).map((key) => {
    const fileNameWithExt = key.split('/').pop() as string;
    const fileName = fileNameWithExt.substring(0, fileNameWithExt.length - 4);
    return (type === 'routes'
      ? {
          path: fileName,
          component: modules[key],
        }
      : {
          path: fileName,
          title: fileName,
          icon: 'school',
        }) as unknown as RoutesOrMenus<T>;
  });
}
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: generateRoutesOrMenus('routes'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
