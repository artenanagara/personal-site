import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://artenanagara.com',
  integrations: [vue()],
  // Fetch a page when its link is hovered, so the curtain opens onto a page that's already loaded
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  // /about is built as about.html; Vercel's cleanUrls serves it without the extension
  build: { format: 'file' },
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
});
