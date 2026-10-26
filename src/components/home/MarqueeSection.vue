<template>
  <section class="overflow-hidden pb-28 md:pb-40">
    <div class="page-x mb-8 flex items-end justify-between gap-6 md:mb-12">
      <div v-reveal class="md:ml-[30%]">
        <p class="mono-label text-graphite">(Explorations)</p>
        <p class="mt-3 max-w-[30ch] text-[17px] leading-snug">
          Concepts, side studies, and UI kit previews, shared on Dribbble. The kits come from the same component foundations I use on client work.
        </p>
      </div>
      <a
        v-reveal="100"
        href="https://dribbble.com/artenanagara"
        target="_blank"
        rel="noopener noreferrer"
        class="u-link shrink-0 text-[15px]"
      >Dribbble ↗</a>
    </div>

    <div v-reveal="150" class="marquee flex w-max select-none">
      <div v-for="set in 2" :key="set" class="marquee-track flex gap-4 pr-4" :aria-hidden="set === 2">
        <a
          v-for="(item, index) in items"
          :key="`${set}-${index}`"
          :href="item.link"
          target="_blank"
          rel="noopener noreferrer"
          :tabindex="set === 2 ? -1 : null"
          class="group relative block aspect-[4/3] h-[220px] shrink-0 overflow-hidden bg-hairline md:h-[30vw] md:max-h-[420px]"
          @mouseenter="setCursor({ text: 'Dribbble ↗', variant: 'button' })"
          @mouseleave="resetCursor()"
        >
          <img
            :src="item.image"
            :alt="item.title"
            loading="lazy"
            class="h-full w-full object-cover transition-transform duration-[1600ms] ease-out-expo group-hover:scale-[1.04]"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { useCursor } from '../../composables/useCursor';

const { setCursor, resetCursor } = useCursor();
onUnmounted(() => resetCursor());

// Shown until the latest shots load from /api/dribbble, and kept if that request fails
const fallbackItems = [
  { title: 'Jobar, job portal app', link: 'https://dribbble.com/shots/26790239-Jobar-Smart-Job-Portal-App', image: 'https://cdn.dribbble.com/userupload/45759357/file/bfa45f83b652d083d553519c8b83e425.jpg?resize=752x&vertical=center' },
  { title: 'Bakr, POS system for bakeries', link: 'https://dribbble.com/shots/26759374-Bakr-Modern-POS-System-for-Bakeries', image: 'https://cdn.dribbble.com/userupload/45661058/file/22a9db05acb54835b1ab69f55db89a54.jpg?resize=752x&vertical=center' },
  { title: 'Kemayu, beauty clinic homepage', link: 'https://dribbble.com/shots/26051673-Kemayu-Beauty-Clinic-Homepage', image: 'https://cdn.dribbble.com/userupload/43399396/file/original-9d3525b9aab6058d2086ccffec6927db.jpg?resize=752x&vertical=center' },
  { title: 'Ecovolt, EV power landing page', link: 'https://dribbble.com/shots/26025028-Ecovolt-Electric-Vehicle-Power-Landing-Page', image: 'https://cdn.dribbble.com/userupload/43315629/file/original-3fe75f38f4d5408916e8a12e37567bd3.png?resize=752x&vertical=center' },
  { title: 'Finansiku, finance landing page', link: 'https://dribbble.com/shots/24438455-Finansiku-Finance-Landing-Page', image: 'https://cdn.dribbble.com/userupload/15354141/file/original-d91d339d1fb58c2ecf15be404fae0516.png?resize=752x&vertical=center' },
  { title: 'BuyCar, automotive landing page', link: 'https://dribbble.com/shots/24472371-BuyCar-Automotive-Landing-Page', image: 'https://cdn.dribbble.com/userupload/15454180/file/original-16cf8321ec01359363643379605a214a.png?resize=752x&vertical=center' },
  { title: 'Umah, real estate landing page', link: 'https://dribbble.com/shots/23668006--Umah-Real-Estate-Landing-Page', image: 'https://cdn.dribbble.com/userupload/13127156/file/original-701489418a9b8ff84c3dc4ac5425bdfe.jpg?resize=752x&vertical=center' },
];

const items = ref(fallbackItems);

onMounted(async () => {
  try {
    const response = await fetch('/api/dribbble');
    if (!response.ok) return;
    const shots = await response.json();
    if (Array.isArray(shots) && shots.length) items.value = shots;
  } catch {
    // Keep the fallback list
  }
});
</script>

<style scoped>
.marquee-track {
  animation: marquee 80s linear infinite;
}

.marquee:hover .marquee-track {
  animation-play-state: paused;
}

@keyframes marquee {
  to {
    transform: translateX(-100%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
}
</style>
