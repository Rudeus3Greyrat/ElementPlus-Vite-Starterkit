<template>
  <div :class="{ 'has-logo': showLogo }">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.$menuBg"
        :text-color="variables.$menuText"
        :unique-opened="false"
        :active-text-color="variables.$menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in permission_routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import Logo from './Logo.vue';
import SidebarItem from './SidebarItem.vue';
import variables from '../../../styles/variables.module.scss';
import { computed } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
import store from '../../../store';

const activeMenu = computed(() => {
  const route = useRoute();
  const { meta, path } = route;
  // if set path, the sidebar will highlight the path you set
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return path;
});

const showLogo = computed(() => store.state.settings.sidebarLogo);
const isCollapse = computed(() => !sidebar.value.opened);
const permission_routes = computed(() => store.getters['permission_routes']);
const sidebar = computed(() => store.getters.sidebar);
</script>
