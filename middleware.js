// Vercel Routing Middleware: cv.artenanagara.com serves the CV at its root.
// A vercel.json rewrite can't do this, since the static index.html matches "/" first.
import { rewrite, next } from '@vercel/functions/middleware';

export const config = { matcher: '/' };

export default function middleware(request) {
  const url = new URL(request.url);
  if (!url.hostname.startsWith('cv.')) return next();
  url.pathname = '/cv';
  return rewrite(url);
}
