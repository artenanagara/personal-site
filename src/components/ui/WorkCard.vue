<script setup>
import { computed } from 'vue';

const props = defineProps({
  project: Object,
  aspect: {
    type: String,
    default: 'aspect-[4/3]',
  },
});


const projectType = computed(() => props.project.type?.toLowerCase() || 'open');
const isVisit = computed(() => projectType.value === 'visit');

const isClickable = computed(() => {
  const type = projectType.value;
  return type !== 'soon' && type !== 'confident' && type !== 'confidential';
});

const linkComponent = computed(() => {
  if (isVisit.value) return 'a';
  if (!isClickable.value) return 'div';
  return 'a';
});

const linkBindings = computed(() => {
  if (isVisit.value) {
    return { href: props.project.url, target: '_blank', rel: 'noopener noreferrer' };
  }
  if (!isClickable.value) return {};
  return { href: `/work/${props.project.id}`, 'data-transition-label': props.project.title };
});

const cursorText = computed(() => {
  const type = projectType.value;
  if (type === 'visit') return 'Visit ↗';
  if (type === 'soon') return 'Soon';
  if (type === 'confident' || type === 'confidential') return 'Private';
  return 'View';
});

</script>

<template>
  <component
    :is="linkComponent"
    v-bind="linkBindings"
    class="group block"
    :class="{ 'opacity-50': !isClickable }"
    :data-cursor="cursorText"
  >
    <div class="relative overflow-hidden bg-hairline" :class="aspect">
      <img
        :src="project.cover.default"
        :alt="project.title"
        loading="lazy"
        class="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out-expo group-hover:scale-[1.04]"
      />
      <img
        v-if="project.cover.hover"
        :src="project.cover.hover"
        alt=""
        loading="lazy"
        class="absolute inset-0 h-full w-full object-cover transition-[clip-path] duration-1000 ease-out-expo [clip-path:inset(100%_0_0_0)] group-hover:[clip-path:inset(0_0_0_0)]"
      />
    </div>

    <div class="mt-3 flex items-baseline justify-between gap-4">
      <h3 class="text-lg tracking-[-0.02em] md:text-xl">
        {{ project.title }}<span v-if="isVisit" class="ml-1 text-graphite">↗</span>
      </h3>
      <p class="mono-label text-right text-graphite">{{ project.category }}</p>
    </div>
  </component>
</template>
