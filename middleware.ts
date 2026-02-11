import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const host = request.headers.get('host')

    // Solo redirigir si el host es exactamente 'ebroofingma.net' (sin www)
    if (host === 'ebroofingma.net') {
        const url = request.nextUrl.clone()

        // Construir la nueva URL con www, preservando path y search
        url.host = 'www.ebroofingma.net'

        // 308 Permanent Redirect (preserva el método HTTP)
        return NextResponse.redirect(url, { status: 308 })
    }

    // No hacer nada si ya tiene www o es otro dominio
    return NextResponse.next()
}

// Configuración del matcher para excluir archivos estáticos y rutas Next.js internas
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder files (assets)
         * - api routes (if you have any)
         */
        '/((?!_next/static|_next/image|favicon.ico|assets|api).*)',
    ],
}
