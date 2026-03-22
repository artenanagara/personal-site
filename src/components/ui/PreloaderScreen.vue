<template>
  <div
    class="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center will-change-transform"
    :class="{ 'pointer-events-none': leaving }"
    :style="{
      transform: leaving ? 'translateY(-105%)' : 'translateY(0)',
      transition: leaving ? 'transform 1.1s cubic-bezier(0.76, 0, 0.24, 1)' : 'none'
    }"
  >

    <!-- Language code — top right -->
    <div class="absolute top-8 right-8 text-[11px] text-white/25 tracking-[0.3em] font-light uppercase select-none">
      {{ greetings[current].lang }}
    </div>

    <!-- Counter — bottom left -->
    <div class="absolute bottom-8 left-8 text-[11px] text-white/20 font-light select-none tabular-nums">
      {{ String(current + 1).padStart(2, '0') }} / {{ String(greetings.length).padStart(2, '0') }}
    </div>

    <!-- Greeting content -->
    <div class="text-center select-none px-8 w-full">

      <!-- Big greeting word -->
      <div class="relative overflow-hidden h-[3.75rem] md:h-[6rem] flex items-center justify-center mb-3 md:mb-4">
        <Transition name="word">
          <p
            :key="'g' + current"
            class="text-white text-6xl md:text-8xl font-light leading-none w-full text-center"
            :dir="greetings[current].dir"
          >
            {{ greetings[current].greeting }}
          </p>
        </Transition>
      </div>

      <!-- Sub text -->
      <div class="relative overflow-hidden h-[1.5rem] md:h-[1.75rem] flex items-center justify-center">
        <Transition name="sub">
          <p
            :key="'s' + current"
            class="text-white/40 text-base md:text-lg font-light leading-none w-full text-center"
            :dir="greetings[current].dir"
          >
            {{ greetings[current].name }}
          </p>
        </Transition>
      </div>

    </div>

    <!-- Progress line -->
    <div class="absolute bottom-0 left-0 w-full h-px overflow-hidden">
      <div
        class="h-full bg-white/25"
        :class="started ? 'w-full' : 'w-0'"
        :style="{
          transition: started
            ? `width ${progressDuration}ms cubic-bezier(0.22, 1, 0.36, 1)`
            : 'none'
        }"
      ></div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['done'])

const INTERVAL = 520

const greetings = [
  { lang: 'EN', greeting: 'Hello',      name: "I'm Artena",        dir: 'ltr' },
  { lang: 'FR', greeting: 'Bonjour',    name: 'je suis Artena',    dir: 'ltr' },
  { lang: 'DE', greeting: 'Hallo',      name: 'ich bin Artena',    dir: 'ltr' },
  { lang: 'JA', greeting: 'こんにちは',  name: 'アルテナです',        dir: 'ltr' },
  { lang: 'ZH', greeting: '你好',        name: '我是 Artena',        dir: 'ltr' },
  { lang: 'ES', greeting: 'Hola',       name: 'soy Artena',        dir: 'ltr' },
  { lang: 'AR', greeting: 'مرحباً',     name: 'أنا أرتينا',         dir: 'rtl' },
  { lang: 'KO', greeting: '안녕하세요',  name: '아르테나입니다',       dir: 'ltr' },
  { lang: 'PT', greeting: 'Olá',        name: 'eu sou Artena',     dir: 'ltr' },
  { lang: 'ID', greeting: 'Halo',       name: 'saya Artena',       dir: 'ltr' },
]

const current = ref(0)
const started = ref(false)
const leaving = ref(false)
const progressDuration = (greetings.length - 1) * INTERVAL + 800

let timer = null

onMounted(() => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      started.value = true
    })
  })

  timer = setInterval(() => {
    if (current.value < greetings.length - 1) {
      current.value++
    } else {
      clearInterval(timer)
      timer = null
      setTimeout(() => { leaving.value = true }, 900)
      setTimeout(() => { emit('done') }, 900 + 1200)
    }
  }, INTERVAL)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
/* ── Greeting word ─────────────────── */
.word-enter-active {
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s;
}
.word-enter-from {
  transform: translateY(110%);
  opacity: 0;
}
.word-leave-active {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in, opacity 0.25s ease-in;
}
.word-leave-to {
  transform: translateY(-110%);
  opacity: 0;
}

/* ── Sub text (slight delay) ───────── */
.sub-enter-active {
  transition: transform 0.5s 0.06s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s 0.06s;
}
.sub-enter-from {
  transform: translateY(110%);
  opacity: 0;
}
.sub-leave-active {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s ease-in, opacity 0.2s ease-in;
}
.sub-leave-to {
  transform: translateY(-110%);
  opacity: 0;
}
</style>
