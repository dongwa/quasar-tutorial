<template>
  <q-layout view="hHh lpR fff">
    <q-header
      bordered
      v-model="$s.headOpen"
      class="bg-primary text-white"
      height-hint="98"
    >
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="$s.toogleLeftDraw" />
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="$s.toogleLeftDraw" />
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs>
    </q-header>

    <q-drawer
      show-if-above
      v-model="$s.leftDrawerOpen"
      side="left"
      behavior="desktop"
      bordered
    >
      <q-scroll-area class="fit">
        <MenusDrawer :menus="menus" />
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { useLayoutStore } from '../stores/layout';
import MenusDrawer from '../components/MenusDrawer.vue';
import { generateMenus } from '../router/routes';
const $s = useLayoutStore();
const menus = generateMenus();
</script>
