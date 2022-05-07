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
      <EssentialLink
        v-for="link in linksList"
        :key="link.title"
        v-bind="link"
      />
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
import EssentialLink from '../components/EssentialLink.vue';
import { useLayoutStore } from '../stores/layout';
const $s = useLayoutStore();

const linksList = [
  {
    title: 'Flex',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'flex',
  },
  {
    title: 'Style',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'style',
  },
  {
    title: 'Counter',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'counter',
  },
  {
    title: 'Option',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'option',
  },
  {
    title: 'icon',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'icon',
  },
  {
    title: 'coms',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'coms',
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev',
  },
];
</script>
