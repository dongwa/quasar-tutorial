<template>
  <div class="q-pa-md">
    <div>dialog:{{ dialog }}</div>
    <div>dialog2:{{ dialog2 }}</div>
    <q-btn label="Open Dialog" color="primary" @click="dialog = true" />

    <q-dialog v-model="dialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">First dialog</div>
        </q-card-section>
        <q-card-section class="row items-center q-gutter-sm">
          <q-btn label="Open dialog" color="primary" @click="dialog2 = true" />
          <q-btn label="Close" color="primary" v-close-popup />

          <q-dialog v-model="dialog2">
            <q-card>
              <q-card-section>
                <div class="text-h6">Second dialog</div>
              </q-card-section>
              <q-card-section class="row items-center q-gutter-sm">
                <q-btn
                  v-close-popup="2"
                  label="Close both dialogs"
                  color="accent"
                />
                <q-btn v-close-popup label="Close this dialog" color="accent" />
              </q-card-section>
            </q-card>
          </q-dialog>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
  <div class="q-pa-md">
    <q-btn label="Menu" color="primary">
      <q-menu>
        <q-list dense style="min-width: 100px">
          <q-item clickable>
            <q-item-section>Preferences</q-item-section>
            <q-item-section side>
              <q-icon name="keyboard_arrow_right" />
            </q-item-section>

            <q-menu anchor="top end" self="top start">
              <q-list>
                <q-item dense clickable>
                  <q-item-section>Submenu Label</q-item-section>
                  <q-item-section side>
                    <q-icon name="keyboard_arrow_right" />
                  </q-item-section>
                  <q-menu anchor="top end" self="top start">
                    <q-list>
                      <q-item
                        v-for="n in 3"
                        :key="n"
                        dense
                        clickable
                        v-close-popup
                      >
                        <q-item-section>3rd level Label</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-item>
              </q-list>
            </q-menu>
          </q-item>
          <q-separator />
          <q-item clickable v-close-popup>
            <q-item-section>Quit</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const dialog = ref(false);
const dialog2 = ref(false);

function close() {
  dialog.value = false;
}
</script>
