// Latest Dribbble shots for the Explorations marquee on the home page.
// Needs DRIBBBLE_TOKEN (an OAuth access token with the "public" scope) in the Vercel environment.
// Cached at the edge for an hour, so a new shot shows up on the site within about an hour.

const LIMIT = 12;

export default async function handler(req, res) {
  const token = process.env.DRIBBBLE_TOKEN;
  if (!token) {
    res.status(503).json({ error: 'DRIBBBLE_TOKEN is not set' });
    return;
  }

  try {
    const response = await fetch(`https://api.dribbble.com/v2/user/shots?per_page=${LIMIT}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) throw new Error(`Dribbble responded ${response.status}`);

    const shots = await response.json();
    const items = shots
      .map((shot) => ({
        title: shot.title,
        link: shot.html_url,
        image: shot.images?.hidpi || shot.images?.normal,
      }))
      .filter((item) => item.link && item.image);

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    res.status(200).json(items);
  } catch (error) {
    // Short cache so a Dribbble hiccup doesn't stick around; the page falls back to its static list.
    res.setHeader('Cache-Control', 's-maxage=60');
    res.status(502).json({ error: error.message });
  }
}
