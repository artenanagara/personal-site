# artenanagara.com

Personal site, built with [Astro](https://astro.build) and Vue components, styled with Tailwind CSS v4, deployed on Vercel.

```sh
npm run dev      # local dev server
npm run build    # static build to dist/
npm run preview  # serve the build
```

- `src/pages/` — one file per route; `work/[id].astro` builds a page per JSON file in `src/data/work-details/`
- `src/layouts/BaseLayout.astro` — head tags (title, description, canonical, Open Graph, JSON-LD), nav, footer, cursor, scroll reveal, Lenis
- `src/components/`, `src/views/` — Vue components; most render to static HTML, only the nav, footer clock, cursor, and Dribbble marquee hydrate
- `api/dribbble.js` — Vercel function behind the home page marquee (needs `DRIBBBLE_TOKEN`)
- `vercel.json` — clean URLs, and `cv.artenanagara.com/` rewritten to `/cv`

Scroll reveal: add `data-reveal` (optionally `data-reveal="200"` for a delay in ms, `data-reveal-lines` for `.line-mask` headings, `data-reveal-load` for above-the-fold content). Cursor label on hover: `data-cursor="View"`.
