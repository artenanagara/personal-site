<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    default: null,
  },
  to: {
    type: String,
    default: null,
  },
});

const isExternal = computed(() => !!props.href);
const tag = computed(() => (isExternal.value ? 'a' : props.to ? RouterLink : 'button'));
</script>

<template>
  <component
    :is="tag"
    :href="href"
    :to="to"
    :target="isExternal ? '_blank' : null"
    :rel="isExternal ? 'noopener noreferrer' : null"
    class="group inline-flex items-center gap-3 rounded-full border border-ink px-6 py-3 text-[15px] transition-colors duration-500 ease-out-expo hover:bg-ink hover:text-paper"
  >
    <span class="relative block h-[1.4em] overflow-hidden leading-[1.4em]">
      <span class="block transition-transform duration-500 ease-out-expo group-hover:-translate-y-full">{{ text }}</span>
      <span class="absolute left-0 top-full block transition-transform duration-500 ease-out-expo group-hover:-translate-y-full" aria-hidden="true">{{ text }}</span>
    </span>
    <span v-if="$slots.default" class="flex h-4 w-4 items-center justify-center">
      <slot></slot>
    </span>
  </component>
</template>
