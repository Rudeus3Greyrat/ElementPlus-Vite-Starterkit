<template>
  <div class="drawer-container">
    <div>
      <h3 class="drawer-title">Page style setting</h3>

      <div class="drawer-item">
        <span>Theme Color</span>
        <theme-picker
          style="float: right; height: 26px; margin: -3px 8px 0 0"
          @change="themeChange"
        />
      </div>

      <div class="drawer-item">
        <span>Open Tags-View</span>
        <el-switch v-model="tagsView" class="drawer-switch" />
      </div>

      <div class="drawer-item">
        <span>Fixed Header</span>
        <el-switch v-model="fixedHeader" class="drawer-switch" />
      </div>

      <div class="drawer-item">
        <span>Sidebar Logo</span>
        <el-switch v-model="sidebarLogo" class="drawer-switch" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from '@vue/runtime-core';
import ThemePicker from '../../../../src/components/ThemePicker.vue';
import store from '../../../store';

const themeChange = (val) => {
  store.dispatch('settings/changeSetting', {
    key: 'theme',
    value: val,
  });
};
const fixedHeader = computed({
  get() {
    return store.state.settings.fixedHeader;
  },
  set(val) {
    store.dispatch('settings/changeSetting', {
      key: 'fixedHeader',
      value: val,
    });
  },
});

const tagsView = computed({
  get() {
    return store.state.settings.tagsView;
  },
  set(val) {
    store.dispatch('settings/changeSetting', {
      key: 'tagsView',
      value: val,
    });
  },
});

const sidebarLogo = computed({
  get() {
    return store.state.settings.sidebarLogo;
  },
  set(val) {
    store.dispatch('settings/changeSetting', {
      key: 'sidebarLogo',
      value: val,
    });
  },
});
</script>

<style lang="scss" scoped>
.drawer-container {
  padding: 24px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;

  .drawer-title {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    line-height: 22px;
  }

  .drawer-item {
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    padding: 12px 0;
  }

  .drawer-switch {
    float: right;
  }
}
</style>
