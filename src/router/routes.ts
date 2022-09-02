import { RouteRecordRaw } from 'vue-router';

export function generateRoutes() {
  const modules = import.meta.glob('../pages/**/*');
  const INGORED = ['ErrorNotFound.vue'];
  return Object.keys(modules)
    .filter((item) => !INGORED.includes(item.split('/').pop() as string))
    .map((key) => {
      const fileNameWithExt = key.split('/').pop() as string;
      const fileName = fileNameWithExt.substring(0, fileNameWithExt.length - 4);

      const path = key
        .replace('../pages', '')
        .replace(/\.vue|tsx/, '')
        .toLocaleLowerCase();
      return {
        path,
        title: fileName,
        component: modules[key],
      };
    });
}
export interface Menu {
  path: string;
  title: string;
  icon: string;
  children?: Menu[];
}

export function generateMenus() {
  const routes = generateRoutes();
  // console.log(routes);
  let menus: Menu[] = [];
  for (const { path, title } of routes) {
    const pathArr = path.split('/');
    pathArr.shift();
    if (pathArr.length === 1) {
      menus.push({
        path,
        title,
        icon: 'school',
      });
    } else {
      let parentNode = menus;
      pathArr.forEach((key, index) => {
        let isExist = parentNode.find((item) => item.path === '/' + key);
        if (isExist) {
          parentNode = isExist.children as Menu[];
        } else {
          const node =
            index === pathArr.length - 1
              ? {
                  path,
                  title: title,
                  icon: 'school',
                }
              : {
                  path: '/' + key,
                  title: key,
                  children: [],
                  icon: 'school',
                };
          parentNode.push(node);
          parentNode = node.children as Menu[];
        }
      });
    }
  }
  return menus;
}
const menus = generateMenus();
// console.log('menus', menus);
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: generateRoutes(),
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
