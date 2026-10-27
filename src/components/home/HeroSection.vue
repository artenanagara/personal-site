<template>
  <section class="page-x relative flex min-h-[100svh] flex-col pb-5 pt-24 md:pt-28">
    <div data-reveal="600" data-reveal-load class="mono-label flex justify-between text-graphite">
      <span>Clear interfaces, built to ship.</span>
      <span class="hidden md:block">07°34′S, 110°49′E</span>
    </div>

    <h1 data-reveal data-reveal-lines data-reveal-load class="hero-title mt-auto">
      <span class="line-mask"><span style="--d: 80ms">Shaping the quiet</span></span>
      <span class="line-mask md:pl-[11vw]"><span style="--d: 180ms">
        details
        <img
          src="/images/photo-me.webp"
          alt="Portrait of Artena Nagara"
          class="mx-[0.12em] inline-block h-[0.74em] w-[1.15em] object-cover align-[-0.04em] grayscale"
        />
        <span class="whitespace-nowrap">that make</span>
      </span></span>
      <span class="line-mask"><span style="--d: 280ms">SaaS, web &amp; apps</span></span>
      <span class="line-mask md:pl-[6vw]"><span style="--d: 380ms">feel <em class="serif-i">effortless.</em></span></span>
    </h1>

    <div
      data-reveal="700" data-reveal-load
      class="mt-10 flex flex-wrap items-end gap-x-[7vw] gap-y-4 border-t border-hairline pt-4 md:mt-14"
    >
      <p>
        <span class="mono-label block text-graphite">Based in</span>
        <span class="text-[15px]">Surakarta, Indonesia</span>
      </p>
      <p>
        <span class="mono-label block text-graphite">Available for</span>
        <span class="text-[15px]">Freelance &amp; contract projects, worldwide</span>
      </p>
      <p class="sm:ml-auto sm:text-right">
        <span class="mono-label block text-graphite">Have a project?</span>
        <a href="mailto:artenanagara22@gmail.com?subject=New%20project" class="u-link text-[15px]">Let's talk →</a>
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
