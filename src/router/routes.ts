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

interface IPersion<T> {
  alias?: string[];
  age: number;
  name: string;
  a: T;
  hello?: (msg: string) => string;
}

// let a: IPersion = {
//   age: 12,
//   name: 'zs',
//   hello(msg) {
//     return this.name + msg;
//   },
// };

// interface IP extends IPersion {

// }

// let b:IP={

// }

// type P = IPersion & {
//   title:string
// }

// let d:P = {

// }
// T  number | string
// function func<T>(
//   options: IPersion<T>
// ): T extends number ? '一键三连' : '点赞关注' {
//   return options.a;
// }

// func({
//   name: 'zs',
//   age: 11,
//   a: 777,
// });

// func()

// function test(arg:string | number){
// /...
// (<string>arg).substring()
// }
