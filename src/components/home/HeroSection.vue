<template>
  <section class="page-x relative flex min-h-[100svh] flex-col pb-5 pt-24 md:pt-28">
    <div v-reveal.load="600" class="mono-label flex justify-between text-graphite">
      <span>Portfolio — Product &amp; web design</span>
      <span class="hidden md:block">07°34′S, 110°49′E</span>
    </div>

    <h1 v-reveal.load.lines class="hero-title mt-auto">
      <span class="line-mask"><span style="--d: 80ms">Creates intuitive</span></span>
      <span class="line-mask md:pl-[11vw]"><span style="--d: 180ms">and engaging <em class="serif-i">user</em></span></span>
      <span class="line-mask"><span style="--d: 280ms">
        <em class="serif-i">experiences</em>
        <img
          src="/images/photo-me.webp"
          alt="Portrait of Artena Nagara"
          class="mx-[0.12em] inline-block h-[0.74em] w-[1.15em] object-cover align-[-0.04em] grayscale"
        />
        through
      </span></span>
      <span class="line-mask md:pl-[6vw]"><span style="--d: 380ms">minimalist design.</span></span>
    </h1>

    <div
      v-reveal.load="700"
      class="mt-10 flex flex-wrap items-end gap-x-[7vw] gap-y-4 border-t border-hairline pt-4 md:mt-14"
    >
      <p>
        <span class="mono-label block text-graphite">Based in</span>
        <span class="text-[15px]">Surakarta, Indonesia</span>
      </p>
      <p>
        <span class="mono-label block text-graphite">Available for</span>
        <span class="text-[15px]">Freelance, worldwide</span>
      </p>
      <p class="ml-auto hidden text-right sm:block">
        <span class="mono-label block text-graphite">Scroll</span>
        <span class="text-[15px]">Selected work ↓</span>
      </p>
    </div>
  </section>
</template>

<style scoped>
.hero-title {
  font-size: clamp(2.6rem, 12.4vw, 4.5rem);
  line-height: 0.92;
  letter-spacing: -0.05em;
  font-weight: 400;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: clamp(4.5rem, 8.2vw, 10rem);
  }
}

.hero-title .serif-i {
  letter-spacing: -0.035em;
}
</style>
