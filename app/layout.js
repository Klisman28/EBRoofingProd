import "@/node_modules/react-modal-video/css/modal-video.css"
import "../public/assets/css/style.css"
import 'swiper/css'
import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode'
import { inter, roboto } from '@/lib/font'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ebroofingma.net'

export const metadata = {
    metadataBase: new URL(SITE_URL),
    alternates: {
        canonical: '/',
    },
    title: 'E&B Roofing',
    description: 'E&B Roofing - Where Performance Meets Quality',
    icons: {
        icon: '/assets/images/fav-icon.png',
    },
    openGraph: {
        url: SITE_URL,
        siteName: 'E&B Roofing',
        type: 'website',
        locale: 'en_US',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
            <body>{children}</body>
        </html>
    )
}
