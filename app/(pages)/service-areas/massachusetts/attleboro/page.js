import Layout from "@/components/layout/Layout"
import Link from 'next/link'

export const metadata = {
    title: 'Roofing Contractor in Attleboro, MA | E&B Roofing',
    description: 'E&B Roofing is headquartered in Attleboro, MA. We provide expert roof replacements, emergency tarping, and siding services for local Attleboro homeowners.',
}

// JSON-LD structured data para hiper-local Service
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    "serviceType": "Roofing Services in Attleboro, MA",
    "provider": {
        "@type": "RoofingContractor",
        "name": "E&B Roofing LLC",
        "telephone": "+1-774-300-1932",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Attleboro",
            "addressRegion": "MA",
            "postalCode": "02703",
            "addressCountry": "US"
        },
    },
    "areaServed": {
        "@type": "City",
        "name": "Attleboro",
        "containedInPlace": {
            "@type": "State",
            "name": "Massachusetts"
        }
    },
    "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Do you need a permit to replace a roof in Attleboro, MA?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, the City of Attleboro Building Department requires a permit for roof replacements. We handle the entire permitting process in Attleboro for you."
                }
            }
        ]
    }
}

export default function AttleboroRoofing() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Roofing in Attleboro, MA">
                <section className="service-details p_relative">
                    <div className="auto_container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="service-details-content">
                                    <div className="content-one">
                                        <h2>#1 Roofing Contractor in Attleboro, MA</h2>
                                        <p>
                                            Since Attleboro is our home base, we take special pride in the roofs we build here in our community.
                                            E&B ROOFING LLC provides homeowners and businesses in Attleboro with the most reliable roof repair, roof replacement, and exterior upgrades available.
                                        </p>
                                        <p>
                                            Whether your property is near Capron Park Zoo, downtown Attleboro, or near the Seekonk border, our local teams are equipped to respond quickly—especially during sudden New England storms.
                                        </p>

                                        <h3>Our Local Services</h3>
                                        <ul className="list-item clearfix mb-4">
                                            <li><span className="icon-21" /> <Link href="/services/roof-replacement"><strong>Roof Replacement:</strong></Link> Durable architectural shingles for Attleboro's climate.</li>
                                            <li><span className="icon-21" /> <Link href="/services/roof-repair"><strong>Fast Repairs:</strong></Link> We arrive quickly because we are right here in town.</li>
                                            <li><span className="icon-21" /> <strong>Vinyl Siding & Window Replacement:</strong> Improve your home's energy efficiency.</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <div className="service-sidebar">
                                    <div className="sidebar-widget bg-light p-4 rounded text-center mb-4">
                                        <h4>Schedule an Estimate</h4>
                                        <p className="mt-3">Call your local Attleboro roofing team!</p>
                                        <Link href="tel:+17743001932" className="btn-one mt-3">
                                            <span>(774) 300-1932</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
