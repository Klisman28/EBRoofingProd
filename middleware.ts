import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const CANONICAL_HOST = 'www.ebroofingma.net'

export function middleware(request: NextRequest) {
    const { headers, nextUrl } = request

    // 1) Host/proto reales (detrás de proxy)
    const forwardedHost = (headers.get('x-forwarded-host') ?? headers.get('host') ?? '')
        .split(',')[0]
        .trim()
        .toLowerCase()

    const forwardedProto = (headers.get('x-forwarded-proto') ?? 'http')
        .split(',')[0]
        .trim()
        .toLowerCase()

    // 2) Quitar puerto si viene (":3000")
    const hostname = forwardedHost.split(':')[0]

    const needsHttps = forwardedProto !== 'https'
    const needsCanonicalHost = hostname !== CANONICAL_HOST

    // 3) Redirección SIEMPRE a https + www (sin puerto)
    if (needsHttps || needsCanonicalHost) {
        const location = `https://${CANONICAL_HOST}${nextUrl.pathname}${nextUrl.search}`
        return NextResponse.redirect(location, 308)
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon|apple-touch|assets|api|robots\\.txt|sitemap\\.xml|.*\\.(?:css|js|png|jpg|jpeg|gif|svg|ico|webp|avif|woff2?|ttf|eot|map|txt|xml)).*)',
    ],
}