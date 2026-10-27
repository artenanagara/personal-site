<script setup>
import AnimatedButton from '../components/ui/AnimatedButton.vue';
</script>

<template>
  <div class="flex flex-grow flex-col">
    <section class="page-x flex min-h-[100svh] flex-col justify-end pb-16 pt-40">
      <p data-reveal class="mono-label text-graphite">Error 404</p>
      <h1 data-reveal data-reveal-lines class="mt-6 max-w-[16ch] text-[clamp(2.75rem,7vw,7.5rem)] leading-[0.95] tracking-[-0.05em]">
        <span class="line-mask"><span style="--d: 80ms">This page doesn't</span></span>
        <span class="line-mask"><span style="--d: 180ms">exist or has <em class="serif-i">moved.</em></span></span>
      </h1>
      <AnimatedButton data-reveal="300" to="/" text="Back to home" class="mt-10 self-start md:ml-[30%]" />
    </section>  </div>
</template>
