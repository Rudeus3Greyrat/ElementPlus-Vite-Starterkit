<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed, defineProps } from '@vue/runtime-core';
import { isExternal } from '../../../utils/validate';
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
});
const isRealExternal = computed(() => isExternal(props.to));
const type = computed(() => {
  if (isRealExternal) {
    return 'a';
  }
  return 'router-link';
});
const linkProps = (to) => {
  if (isRealExternal) {
    return {
      href: to,
      target: '_blank',
      rel: 'noopener',
    };
  }
  return {
    to: to,
  };
};
</script>
