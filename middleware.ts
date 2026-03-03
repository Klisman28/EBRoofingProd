import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const CANONICAL_HOST = 'www.ebroofingma.net'

// Patrones comunes de spam / probes (WordPress/PHP/JSP/ASPX) + keyword hack
const SPAM_PATH_PATTERNS: RegExp[] = [
    // Archivos ejecutables que NO deberían existir en Next.js
    /\.php$/i,
    /\.jsp$/i,
    /\.aspx?$/i,

    // WordPress probes típicos
    /^\/wp-(content|admin|includes)\b/i,
    /^\/wp-login\.php$/i,
    /^\/xmlrpc\.php$/i,

    // Japanese keyword hack / spam keywords en URL (si aparecen)
    /激安/i,
    /スーパーコピー/i,
    /ロレックス/i,

    // Rutas aleatorias típicas del hack (ej: /d32697065239033)
    /^\/[a-z]\d{10,}$/i,
]

// Helper: toma el primer valor si viene "a, b, c"
function firstHeaderValue(v: string | null): string | null {
    if (!v) return null
    return v.split(',')[0].trim()
}

export function middleware(request: NextRequest) {
    const { headers, nextUrl } = request
    const pathname = nextUrl.pathname
    const search = nextUrl.search

    // =========================
    // 1) BLOQUEO ANTI-SPAM (410)
    // =========================
    // Caso clásico de WP spam: /?p=123 en home
    const hasSusParam =
        pathname === '/' &&
        nextUrl.searchParams.has('p') &&
        /^\d+$/.test(nextUrl.searchParams.get('p') ?? '')

    const isSpamPath = SPAM_PATH_PATTERNS.some((re) => re.test(pathname))

    if (isSpamPath || hasSusParam) {
        return new NextResponse(
            `<!doctype html><html><head><meta charset="utf-8"><title>410 Gone</title></head><body><h1>410 Gone</h1><p>This resource does not exist and has been permanently removed.</p></body></html>`,
            {
                status: 410,
                headers: {
                    'Content-Type': 'text/html; charset=utf-8',
                    'Cache-Control': 'no-store',
                },
            }
        )
    }

    // ==========================================
    // 2) FORZAR CANONICAL (HTTPS + WWW, sin :3000)
    // ==========================================
    const rawHost =
        firstHeaderValue(headers.get('x-forwarded-host')) ??
        firstHeaderValue(headers.get('host')) ??
        ''

    const rawProto =
        firstHeaderValue(headers.get('x-forwarded-proto')) ??
        // fallback seguro para evitar loops si falta x-forwarded-proto
        nextUrl.protocol.replace(':', '')

    const forwardedHost = rawHost.toLowerCase()
    const forwardedProto = rawProto.toLowerCase()

    // Quitar puerto si viene (":3000")
    const hostname = forwardedHost.split(':')[0]

    const needsHttps = forwardedProto !== 'https'
    const needsCanonicalHost = hostname !== CANONICAL_HOST

    if (needsHttps || needsCanonicalHost) {
        const location = `https://${CANONICAL_HOST}${pathname}${search}`
        return NextResponse.redirect(location, 308)
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon|apple-touch|assets|api|robots\\.txt|sitemap\\.xml|.*\\.(?:css|js|png|jpg|jpeg|gif|svg|ico|webp|avif|woff2?|ttf|eot|map|txt|xml)).*)',
    ],
}