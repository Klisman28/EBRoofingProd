import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const { headers, nextUrl } = request

    // Leer host y proto reales (detrás de proxy Hostinger)
    const forwardedHost = headers.get('x-forwarded-host') ?? headers.get('host') ?? ''
    const forwardedProto = headers.get('x-forwarded-proto') ?? 'https'

    // Normalizar: tomar primer valor si hay lista separada por comas
    const host = forwardedHost.split(',')[0].trim()
    const proto = forwardedProto.split(',')[0].trim()

    const needsWww = host === 'ebroofingma.net'
    const needsHttps = proto !== 'https'

    if (needsWww || needsHttps) {
        const targetProto = 'https'
        const targetHost = needsWww ? 'www.ebroofingma.net' : host
        const url = nextUrl.clone()

        url.protocol = targetProto + ':'
        url.host = targetHost

        // 308 Permanent Redirect — preserva método HTTP y body
        return NextResponse.redirect(url, { status: 308 })
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Aplica a todas las rutas EXCEPTO:
         *  - _next/static  (assets compilados)
         *  - _next/image   (optimización de imágenes)
         *  - favicon.ico, apple-touch-icon, favicon-*
         *  - assets/       (carpeta pública)
         *  - api/          (rutas API)
         *  - archivos con extensión estática conocida
         */
        '/((?!_next/static|_next/image|favicon|apple-touch|assets|api|robots\\.txt|sitemap\\.xml|.*\\.(?:css|js|png|jpg|jpeg|gif|svg|ico|webp|avif|woff2?|ttf|eot|map|txt|xml)).*)',
    ],
}
