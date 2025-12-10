<script setup>
import { ref, computed } from 'vue';
import { useCursor } from '../../composables/useCursor';

const props = defineProps({
  project: Object,
  delay: Number,
});

const isHovering = ref(false);
const { setCursor, resetCursor } = useCursor();

const projectType = computed(() => props.project.type?.toLowerCase() || 'open');

const isClickable = computed(() => {
  const type = projectType.value;
  return type !== 'soon' && type !== 'confident' && type !== 'confidential';
});

const linkComponent = computed(() => {
  if (projectType.value === 'visit') return 'a';
  if (!isClickable.value) return 'div';
  return 'RouterLink';
});

const linkBindings = computed(() => {
  if (projectType.value === 'visit') {
    return { 
      href: props.project.url, 
      target: '_blank', 
      rel: 'noopener noreferrer' 
    };
  }
  if (!isClickable.value) return {};
  return { to: `/work/${props.project.id}` };
});

const cursorText = computed(() => {
  const type = projectType.value;
  if (type === 'visit') return 'VISIT';
  if (type === 'soon') return 'SOON';
  if (type === 'confident' || type === 'confidential') return 'CONFIDENTIAL';
  return 'VIEW PROJECT';
});

const onMouseEnter = () => {
  if (isClickable.value) {
      isHovering.value = true;
  }
  setCursor({ text: cursorText.value, variant: 'button' });
};

const onMouseLeave = () => {
  isHovering.value = false;
  resetCursor();
};

import { onUnmounted } from 'vue';
onUnmounted(() => {
  resetCursor();
});
</script>

<template>
  <component
    :is="linkComponent"
    v-bind="linkBindings"
    @mouseenter="onMouseEnter" 
    @mouseleave="onMouseLeave"
    v-motion
    :initial="{ opacity: 0, y: 40 }"
    :visible="{ opacity: 1, y: 0, transition: { duration: 800, delay: delay * 1000, ease: [0.22, 1, 0.36, 1] } }"
    :delay="delay * 1000"
    class="block group"
    :style="{ cursor: 'none' }"
    :class="{ 'opacity-50': !isClickable }"
  >
    <div 
      class="w-full relative mb-3 overflow-hidden bg-gray-200 aspect-[4/3]"
    >
      <!-- Default Cover -->
      <img 
        v-if="project.cover.default && project.cover.default.startsWith('/')"
        :src="project.cover.default" 
        :alt="project.title"
        class="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        :class="{
          '-translate-x-[20%] opacity-0': isHovering && project.cover.hover,
          'translate-x-0 opacity-100': !isHovering || !project.cover.hover
        }"
      />
      <div 
        v-else-if="project.cover.default"
        class="absolute inset-0 w-full h-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        :style="{ backgroundColor: project.cover.default }"
        :class="{
           '-translate-x-[20%] opacity-0': isHovering && project.cover.hover,
           'translate-x-0 opacity-100': !isHovering || !project.cover.hover
        }"
      ></div>

      <!-- Hover Cover -->
      <template v-if="project.cover.hover">
        <img 
          v-if="project.cover.hover.startsWith('/')"
          :src="project.cover.hover" 
          :alt="project.title + ' Hover'"
          class="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          :class="{
            'translate-x-0 opacity-100': isHovering,
            'translate-x-full opacity-0': !isHovering,
          }"
        />
        <div 
          v-else
          class="absolute inset-0 w-full h-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          :style="{ backgroundColor: project.cover.hover }"
          :class="{
            'translate-x-0 opacity-100': isHovering,
            'translate-x-full opacity-0': !isHovering,
          }"
        ></div>
      </template>

      <div
        class="absolute inset-0 bg-black/0 transition-colors duration-400"
        :class="{ 'bg-black/10': isHovering }"
      ></div>
    </div>

    <div class="flex flex-col gap-0.5">
      <p class="font-normal text-base text-black md:text-lg">{{ project.title }}</p>
      <p class="font-normal text-sm text-gray-500">{{ project.category }}</p>
    </div>
  </component>
</template>