import { useCookies } from './useCookie';

export interface User {
  name: string;
  age: number;
}

export let userInfo: User | null = null;

export function login(name: string) {
  userInfo = {
    name,
    age: Math.round(Math.random()),
  };
  const Cookies = useCookies();
  Cookies.set('user', JSON.stringify(userInfo));
}

export function getUserInfo() {
  if (userInfo) return userInfo;
  const Cookies = useCookies();
  const chacheUser = Cookies.get<User>('user');
  if (chacheUser && Object.keys(chacheUser).length > 0) {
    userInfo = chacheUser;
  }
  return userInfo;
}
