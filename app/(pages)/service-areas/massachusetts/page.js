import Layout from "@/components/layout/Layout"
import Link from 'next/link'

export const metadata = {
    title: 'Roofing Services in Massachusetts | E&B Roofing',
    description: 'E&B Roofing is your trusted local roofer in Massachusetts. We cover Attleboro, Taunton, Seekonk, Mansfield, and surrounding MA areas with top-tier roof repair and replacement.',
}

// JSON-LD structured data para el Hub
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    "serviceType": "Roofing Services in Massachusetts",
    "provider": {
        "@type": "RoofingContractor",
        "name": "E&B Roofing LLC",
        "telephone": "+1-774-300-1932",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Attleboro",
            "addressRegion": "MA",
            "addressCountry": "US"
        }
    },
    "areaServed": [
        { "@type": "State", "name": "Massachusetts" },
        { "@type": "City", "name": "Attleboro" },
        { "@type": "City", "name": "Taunton" },
        { "@type": "City", "name": "Seekonk" },
        { "@type": "City", "name": "North Attleborough" },
        { "@type": "City", "name": "Mansfield" },
        { "@type": "City", "name": "Easton" },
        { "@type": "City", "name": "Rehoboth" }
    ],
    "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Do you need a permit to replace a roof in Massachusetts?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, roof replacements in Massachusetts require a building permit. As a licensed MA Home Improvement Contractor (HIC #212610), we handle all the permitting and inspections for our clients."
                }
            },
            {
                "@type": "Question",
                "name": "How does snow and ice affect roofs in MA?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "New England winters bring heavy snowfall and ice dams, which can lift shingles and cause severe leaks. We install specialized ice and water shields along the eaves and valleys to prevent ice dam damage specific to our Massachusetts climate."
                }
            }
        ]
    }
}

export default function ServiceAreaMA() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Roofing in Massachusetts">
                <section className="service-details p_relative">
                    <div className="auto_container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="service-details-content">
                                    <div className="content-one">
                                        <h2>Massachusetts Roofing Contractor</h2>
                                        <p>
                                            Based in Attleboro, MA, E&B ROOFING LLC understands the unique weather challenges your Massachusetts home faces.
                                            From humid summer storms to brutal winter nor'easters, your roof needs to withstand it all.
                                            We use high-quality, weather-resistant materials designed specifically for the New England climate.
                                        </p>

                                        <h3>Our Core Services in MA</h3>
                                        <ul className="list-item clearfix mb-4">
                                            <li><span className="icon-21" /> <Link href="/services/roof-replacement"><strong>Roof Replacement:</strong></Link> Complete tear-offs and expert installation.</li>
                                            <li><span className="icon-21" /> <Link href="/services/roof-repair"><strong>Roof Repairs:</strong></Link> Fixing leaks and missing shingles fast.</li>
                                            <li><span className="icon-21" /> <strong>Emergency Tarping:</strong> 24/7 protection against sudden storm damage.</li>
                                            <li><span className="icon-21" /> <strong>Gutters & Skylights:</strong> Comprehensive exterior improvements.</li>
                                        </ul>

                                        <h3>Major Cities We Serve in Massachusetts</h3>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <ul className="list-item clearfix">
                                                    <li><span className="icon-3" /> <Link href="/service-areas/massachusetts/attleboro">Attleboro</Link></li>
                                                    <li><span className="icon-3" /> <Link href="/service-areas/massachusetts/north-attleborough">North Attleborough</Link></li>
                                                    <li><span className="icon-3" /> Seekonk</li>
                                                    <li><span className="icon-3" /> Taunton</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <ul className="list-item clearfix">
                                                    <li><span className="icon-3" /> Mansfield</li>
                                                    <li><span className="icon-3" /> Easton</li>
                                                    <li><span className="icon-3" /> Rehoboth</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="mt-5">
                                            <h3>Common Roofing Questions in MA</h3>
                                            <div className="faq-box mt-3">
                                                <h5>Do you need a permit to replace a roof in Massachusetts?</h5>
                                                <p>Yes, roof replacements in Massachusetts require a building permit. As a licensed MA Home Improvement Contractor (HIC #212610), we handle all the permitting and inspections for our clients.</p>

                                                <h5 className="mt-4">How does snow and ice affect roofs in MA?</h5>
                                                <p>New England winters bring heavy snowfall and ice dams, which can lift shingles and cause severe leaks. We install specialized ice and water shields along the eaves and valleys to prevent ice dam damage specific to our Massachusetts climate.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <div className="service-sidebar">
                                    <div className="sidebar-widget bg-light p-4 rounded text-center mb-4">
                                        <h4>Need an Estimate?</h4>
                                        <p className="mt-3">Call our Attleboro office directly for immediate assistance in Massachusetts.</p>
                                        <Link href="tel:+17743001932" className="btn-one mt-3">
                                            <span>(774) 300-1932</span>
                                        </Link>
                                    </div>
                                    <div className="sidebar-widget cat-widget">
                                        <ul className="category-list clearfix">
                                            <li><Link href="/service-areas/massachusetts" className="current">Massachusetts</Link></li>
                                            <li><Link href="/service-areas/rhode-island">Rhode Island</Link></li>
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
