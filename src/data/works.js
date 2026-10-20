import allWorks from './works.json';

// Case-study subtitles double as the one-line description on the work index,
// and the case study's "Year" metadata (when recorded) is shown alongside.
const details = import.meta.glob('./work-details/*.json', { eager: true, import: 'default' });
const byId = Object.fromEntries(Object.values(details).map((d) => [d.id, d]));
const yearOf = (d) => d?.metadata?.find((m) => m.label.toLowerCase() === 'year')?.value;

// Entries marked "draft" stay out of the site until they're cleared for public display.
export default allWorks
  .filter((work) => !work.draft)
  .map((work) => ({
    ...work,
    summary: byId[work.id]?.subtitle || work.category,
    year: yearOf(byId[work.id]) || work.year,
  }))
  .sort((a, b) => Number(b.year || 0) - Number(a.year || 0));
