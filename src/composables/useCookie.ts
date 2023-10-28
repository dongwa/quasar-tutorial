import { Cookies, useQuasar } from 'quasar';

export function useCookies() {
  if (!process.env.SERVER) return Cookies;
  const $q = useQuasar();
  return $q.cookies;
}
