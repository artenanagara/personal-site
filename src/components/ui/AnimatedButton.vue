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
</script>

<template>
  <component
    :is="isExternal ? 'a' : (to ? 'RouterLink' : 'button')"
    :href="href"
    :to="to"
    :target="isExternal ? '_blank' : null"
    :rel="isExternal ? 'noopener noreferrer' : null"
    class="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-transparent bg-black px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-white hover:text-black hover:border-black"
  >
    <div class="relative flex flex-col items-center overflow-hidden h-[1.5em] leading-[1.5em]">
      <span class="translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full block">
        {{ text }}
      </span>
      <span class="absolute top-full translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full block">
        {{ text }}
      </span>
    </div>
    
    <!-- Optional Slot for Icons -->
    <div v-if="$slots.default" class="ml-2 relative overflow-hidden h-[1.5em] w-[1.5em] flex items-center justify-center">
        <!-- We can animate icon similarly if needed, or just keep it static / simple color change -->
         <slot></slot>
    </div>
  </component>
</template>
