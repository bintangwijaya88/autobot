import createIntlMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale,
});

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // First, handle internationalization
  const intlResponse = intlMiddleware(request);

  // Define protected routes (routes that require authentication)
  const protectedRoutes = ['/dashboard', '/profile', '/settings'];

  // Define auth routes (signin, signup, etc.)
  const authRoutes = ['/auth/signin', '/auth/signup'];

  // Check if the current path is protected (accounting for locale prefix)
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.includes(route)
  );

  // Check if the current path is an auth route
  const isAuthRoute = authRoutes.some((route) => pathname.includes(route));

  // Get the token to check authentication status
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // Redirect authenticated users away from auth pages
  if (isAuthRoute && token) {
    const locale = pathname.split('/')[1];
    const dashboardUrl = new URL(`/${locale}/dashboard`, request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  // Redirect unauthenticated users to signin page
  if (isProtectedRoute && !token) {
    const locale = pathname.split('/')[1];
    const signInUrl = new URL(`/${locale}/auth/signin`, request.url);
    signInUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(signInUrl);
  }

  // Return the intl response if no auth redirects are needed
  return intlResponse;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
