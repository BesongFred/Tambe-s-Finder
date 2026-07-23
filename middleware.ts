import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Protect all routes except auth pages, api/auth, static assets, _next and public
const PUBLIC_FILE = /^\/_next\/|^\/favicon.ico|\.(png|jpg|jpeg|svg|gif|css|js)$|^\/public\//i

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // allow public files & next internals
  if (PUBLIC_FILE.test(pathname)) return NextResponse.next()

  // allow API auth endpoints
  if (pathname.startsWith('/api/auth')) return NextResponse.next()

  // allow static auth pages resources
  if (pathname.startsWith('/auth') || pathname.startsWith('/_next') ) {
    // if user is logged in and visiting auth pages, redirect to homepage
    const token = req.cookies.get('tambe_token')?.value
    if (token && pathname.startsWith('/auth')) {
      const url = req.nextUrl.clone()
      url.pathname = '/'
      return NextResponse.redirect(url)
    }
    return NextResponse.next()
  }

  // If no token cookie, redirect to sign in
  const token = req.cookies.get('tambe_token')?.value
  if (!token) {
    const url = req.nextUrl.clone()
    url.pathname = '/auth/signin'
    url.search = `redirect=${encodeURIComponent(pathname)}`
    return NextResponse.redirect(url)
  }

  // token present (we do not verify signature here in middleware for edge compatibility)
  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/rooms/:path*', '/gallery/:path*', '/about/:path*', '/contact/:path*', '/dashboard/:path*', '/']
}
