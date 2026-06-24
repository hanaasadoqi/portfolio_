import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from './src/app/lib/supabase/middleware'

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // CSP relaxed to allow Next.js font optimization and inline styles
  response.headers.set(
    'Content-Security-Policy',
    `default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; script-src 'self' 'unsafe-eval' 'unsafe-inline'; img-src 'self' data: blob: https:;`
  );

  return response;
}
  // return await updateSession(request)
// }

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
