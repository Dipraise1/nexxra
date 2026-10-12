import { NextResponse, type NextRequest } from 'next/server';

// Links pasted from WhatsApp, email or chat often pick up the sentence's
// trailing punctuation ("…/guides/foo." → 404). Strip it and redirect.
const TRAILING_PUNCT = /[.,;:!?)\]'"]+$/;

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname.length > 1 && TRAILING_PUNCT.test(pathname)) {
    const url = req.nextUrl.clone();
    url.pathname = pathname.replace(TRAILING_PUNCT, '') || '/';
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  // Pages only — leave static files (which legitimately contain dots) alone.
  matcher: ['/((?!_next/|api/|.*\\.(?:png|jpe?g|webp|avif|gif|svg|ico|mp4|txt|xml|webmanifest|html)$).*)'],
};
