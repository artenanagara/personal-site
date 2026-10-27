// Latest Dribbble shots for the Explorations marquee on the home page.
// Needs DRIBBBLE_TOKEN (an OAuth access token with the "public" scope) in the Vercel environment.
// Cached at the edge for an hour, so a new shot shows up on the site within about an hour.

const LIMIT = 12;

// The Dribbble API doesn't return the video for motion shots, so their videos are kept in
// public/videos/dribbble and matched here by shot id (compressed to 1024px, no audio).
const LOCAL_VIDEOS = {
  27843696: '/videos/dribbble/fluora-roleplay-calls.mp4', // Fluora: AI Roleplay Calls with Whisper Hints
};

// Dribbble hands out 3200px images (1–2 MB each); the marquee cards are at most ~430px wide,
// so ask the CDN for 1024px instead. Keeps any crop Dribbble set.
const sized = (url) => {
  if (!url) return url;
  const u = new URL(url);
  u.searchParams.set('resize', '1024x768');
  return u.toString();
};

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
        image: sized(shot.images?.hidpi || shot.images?.normal),
        // Video shots: images hold only the first frame, the motion lives here
        video: LOCAL_VIDEOS[shot.id] || shot.video?.large_preview_url || shot.video?.url || null,
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
