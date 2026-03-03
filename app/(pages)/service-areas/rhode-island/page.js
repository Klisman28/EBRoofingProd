import Layout from "@/components/layout/Layout"
import Link from 'next/link'

export const metadata = {
    title: 'Roofing Services in Rhode Island | E&B Roofing',
    description: 'E&B Roofing provides master-level roofing, siding, and gutter services across Rhode Island including Pawtucket, Cranston, East Providence, and surrounding cities.',
}

// JSON-LD structured data para el Hub
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    "serviceType": "Roofing Services in Rhode Island",
    "provider": {
        "@type": "RoofingContractor",
        "name": "E&B Roofing LLC",
        "telephone": "+1-774-300-1932",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Attleboro",
            "addressRegion": "MA",
            "addressCountry": "US"
        },
        "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "name": "RI Contractor Registration #GC-47693"
        }
    },
    "areaServed": [
        { "@type": "State", "name": "Rhode Island" },
        { "@type": "City", "name": "Pawtucket" },
        { "@type": "City", "name": "Cranston" },
        { "@type": "City", "name": "East Providence" },
        { "@type": "City", "name": "Central Falls" },
        { "@type": "City", "name": "Providence" },
        { "@type": "City", "name": "Woonsocket" }
    ],
    "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Are you registered to work in Rhode Island?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we are fully licensed and registered with the Rhode Island Contractors' Registration and Licensing Board (Registration #GC-47693). We handle all necessary RI permits."
                }
            },
            {
                "@type": "Question",
                "name": "What are the common roofing problems in coastal Rhode Island areas?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Coastal RI homes frequently face high-speed winds and salt-air corrosion. We use wind-resistant architectural shingles and non-corrosive flashing materials to ensure your roof withstands coastal weather."
                }
            }
        ]
    }
}

export default function ServiceAreaRI() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Roofing in Rhode Island">
                <section className="service-details p_relative">
                    <div className="auto_container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="service-details-content">
                                    <div className="content-one">
                                        <h2>Rhode Island Roofing Contractor</h2>
                                        <p>
                                            Though our headquarters is right across the border in Attleboro, MA, E&B ROOFING LLC has deep roots serving homeowners throughout Rhode Island.
                                            We understand the specific building codes required by the Rhode Island Contractors' Registration and Licensing Board, and how coastal winds affect roofing structures in the Ocean State.
                                        </p>

                                        <h3>Our Core Services in RI</h3>
                                        <ul className="list-item clearfix mb-4">
                                            <li><span className="icon-21" /> <Link href="/services/roof-replacement"><strong>Roof Replacement:</strong></Link> Complete tear-offs and expert installation.</li>
                                            <li><span className="icon-21" /> <Link href="/services/roof-repair"><strong>Roof Repairs:</strong></Link> Fixing leaks and missing shingles fast.</li>
                                            <li><span className="icon-21" /> <strong>Storm Damage Repair:</strong> Assistance navigating insurance after Nor'easters.</li>
                                            <li><span className="icon-21" /> <strong>Gutters & Siding:</strong> Complete protection from wind-driven rain.</li>
                                        </ul>

                                        <h3>Major Cities We Serve in Rhode Island</h3>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <ul className="list-item clearfix">
                                                    <li><span className="icon-3" /> Pawtucket</li>
                                                    <li><span className="icon-3" /> Cranston</li>
                                                    <li><span className="icon-3" /> East Providence</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <ul className="list-item clearfix">
                                                    <li><span className="icon-3" /> Central Falls</li>
                                                    <li><span className="icon-3" /> Providence</li>
                                                    <li><span className="icon-3" /> Woonsocket</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="mt-5">
                                            <h3>Common Roofing Questions in RI</h3>
                                            <div className="faq-box mt-3">
                                                <h5>Are you registered to work in Rhode Island?</h5>
                                                <p>Yes, we are fully licensed and registered with the Rhode Island Contractors' Registration and Licensing Board (Registration #GC-47693). We handle all necessary RI permits seamlessly.</p>

                                                <h5 className="mt-4">What are the common roofing problems in coastal Rhode Island areas?</h5>
                                                <p>Coastal RI homes frequently face high-speed winds and salt-air corrosion. We use wind-resistant architectural shingles and non-corrosive flashing materials to ensure your roof withstands coastal weather.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <div className="service-sidebar">
                                    <div className="sidebar-widget bg-light p-4 rounded text-center mb-4">
                                        <h4>Need an Estimate?</h4>
                                        <p className="mt-3">Call our team today for a free inspection anywhere in Rhode Island.</p>
                                        <Link href="tel:+17743001932" className="btn-one mt-3">
                                            <span>(774) 300-1932</span>
                                        </Link>
                                    </div>
                                    <div className="sidebar-widget cat-widget">
                                        <ul className="category-list clearfix">
                                            <li><Link href="/service-areas/massachusetts">Massachusetts</Link></li>
                                            <li><Link href="/service-areas/rhode-island" className="current">Rhode Island</Link></li>
                                        </ul>
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
