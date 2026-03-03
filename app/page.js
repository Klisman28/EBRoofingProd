import Layout from "@/components/layout/Layout"
import ServiceFrom from "@/components/sections/home1/ServiceFrom"
import Quality from "@/components/sections/home1/Quality"
import About from "@/components/sections/home1/About"
import Banner from "@/components/sections/home1/Banner"
import Services from "@/components/sections/home1/Services"
import Funfacts from "@/components/sections/home1/Funfacts"
import Roofer from "@/components/sections/home1/Roofer"
import Portfolio from "@/components/sections/home1/Portfolio"
import News from "@/components/sections/home1/News"
import Testimonial from "@/components/sections/home1/Testimonial"
import Workprocess from "@/components/sections/home1/Workprocess"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ebroofingma.net'

export const metadata = {
    title: 'Roofing, Siding & Windows in MA & RI | E&B Roofing',
    description: 'Premier roofing, siding, and window contractor serving Massachusetts and Rhode Island. Licensed, insured, and experienced.',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Roofing, Siding & Windows in MA & RI | E&B Roofing',
        description: 'Premier roofing, siding, and window contractor serving Massachusetts and Rhode Island. Licensed, insured, and experienced.',
        url: SITE_URL,
        images: [
            {
                url: `${SITE_URL}/assets/images/banner/banner-6.jpg`,
                width: 1200,
                height: 630,
                alt: 'E&B Roofing — Roofing Contractor in MA & RI',
            },
        ],
    },
}

// JSON-LD structured data — RoofingContractor
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    name: 'E&B Roofing LLC',
    url: SITE_URL,
    logo: `${SITE_URL}/assets/images/logo.png`,
    image: `${SITE_URL}/assets/images/banner/banner-6.jpg`,
    description:
        'E&B Roofing LLC is a licensed and insured roofing contractor serving Massachusetts and Rhode Island. We specialize in roof replacement, roof repair, siding, windows, gutters, and skylights.',
    telephone: '+1-774-300-1932',
    email: 'E_broofing@yahoo.com',
    foundingDate: '2009',
    priceRange: '$$',
    currenciesAccepted: 'USD',
    address: {
        '@type': 'PostalAddress',
        addressRegion: 'MA',
        addressCountry: 'US',
    },
    areaServed: [
        { '@type': 'State', name: 'Massachusetts' },
        { '@type': 'State', name: 'Rhode Island' },
        { '@type': 'City', name: 'Pawtucket' },
        { '@type': 'City', name: 'Cranston' },
        { '@type': 'City', name: 'East Providence' },
        { '@type': 'City', name: 'Attleboro' },
        { '@type': 'City', name: 'Providence' },
        { '@type': 'City', name: 'Woonsocket' },
        { '@type': 'City', name: 'North Attleborough' },
    ],
    hasCredential: [
        { '@type': 'EducationalOccupationalCredential', name: 'MA HIC License #212610' },
        { '@type': 'EducationalOccupationalCredential', name: 'RI Contractor Registration #GC-47693' },
    ],
    sameAs: [
        'https://www.facebook.com/ebroofingusa',
        'https://www.instagram.com/e_broofing',
        'https://nextdoor.com/page/eb-roofing-pawtucket-ri',
    ],
    openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '18:00',
    },
    makesOffer: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roof Replacement' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roof Repair' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Roof Tarping' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Siding Installation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Window Replacement' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gutter Installation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Skylight Installation' } },
    ],
}

export default function Home() {
    return (
        <>
            {/* JSON-LD structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Layout headerStyle={1} footerStyle={2}>
                <Banner />
                <ServiceFrom />
                <Quality />
                <About />
                <Services />
                <Funfacts />
                <Roofer />
                <Workprocess />
                <Portfolio />
                <Testimonial />
                <News />
            </Layout>
        </>
    )
}