<template>
  <q-list>
    <q-item
      clickable
      tag="a"
      v-for="(menu, index) in menus"
      :key="index"
      :to="menu.path"
    >
      <q-item-section v-if="menu.icon" avatar>
        <q-icon :name="menu.icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ menu.title }}</q-item-label>
      </q-item-section>
    </q-item></q-list
  >
</template>

<script lang="ts" setup>
import { generateRoutesOrMenus } from '../router/routes';
const menus = generateRoutesOrMenus('menus');
</script>
