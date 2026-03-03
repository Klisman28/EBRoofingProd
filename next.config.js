/** @type {import('next').NextConfig} */
const nextConfig = {
    // Exponer variable de entorno al cliente
    env: {
        NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ebroofingma.net',
    },

    // Trailing slash consistente (obligatorio para Hostinger static export si aplica)
    trailingSlash: false,

    // Compresión
    compress: true,

    // Potencia: React strict mode
    reactStrictMode: true,

    // Headers de seguridad + caché para assets estáticos
    async headers() {
        return [
            // Assets estáticos con caché de larga duración (inmutables)
            {
                source: '/assets/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            // Next.js static chunks
            {
                source: '/_next/static/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            // Todas las páginas: seguridad
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=(self)',
                    },
                ],
            },
        ]
    },
}

module.exports = nextConfig
