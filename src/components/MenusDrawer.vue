<template>
  <q-list>
    <template v-for="menu in props.menus" :key="menu.path">
      <q-item v-if="!menu.children" clickable :to="menu.path">
        <q-item-section avatar>
          <q-icon :name="menu.icon"></q-icon>
        </q-item-section>
        <q-item-section>{{ menu.title }}</q-item-section>
      </q-item>
      <q-expansion-item :label="menu.title" :icon="menu.icon" v-else>
        <MenusDrawer :menus="menu.children"></MenusDrawer>
      </q-expansion-item>
    </template>
  </q-list>
</template>

<script lang="ts" setup>
import { Menu } from '../router/routes';
const props = defineProps<{
  menus: Menu[];
}>();
</script>
