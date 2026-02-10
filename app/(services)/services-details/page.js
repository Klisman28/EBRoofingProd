import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Service Details">
                <div>
                    {/*services-details */}
                    <section className="services__details see__pad">
                        <div className="auto_container">
                            <div className="row">
                                <div className="sidebar__side col-xl-4 col-lg-6 pe-xl-5">
                                    <div className="sidebar">
                                        <div className="sidebar__widget__one">
                                            <div className="sidebar__title">
                                                <h4>All Services</h4>
                                            </div>
                                            <ul className="service__details__1__cat">
                                                <li><Link href="/services"> Roofing Services</Link></li>
                                                <li className="active"><Link href="/services"> Repair Services</Link></li>
                                                <li><Link href="/services"> Siding Installation</Link></li>
                                                <li><Link href="/services"> Window Replacement</Link></li>
                                                <li><Link href="/services"> Gutters & Skylights</Link></li>
                                            </ul>
                                        </div>
                                        <div className="sidebar__widget__two">
                                            <div className="need__section" style={{ backgroundImage: 'url(assets/images/service/service-details-03.png)' }}>
                                                <div className="need___top">
                                                    <div className="icon">
                                                        <span className="icon-29"></span>
                                                    </div>
                                                    <h3>Do You Need <br /> Any <span>Help?</span></h3>
                                                </div>
                                                <div className="need___bottom">
                                                    <Link href="mailto:E_broofing@yahoo.com">E_broofing@yahoo.com</Link>
                                                    <Link href="tel:7743001932">(774) 300-1932</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content__side col-xl-8 col-lg-12 col-md-12 col-sm-12 ps-xl-4">
                                    <div className="services__single">
                                        <div className="inner__box">
                                            <div className="image__box">
                                                <figure>
                                                    <img src="assets/images/service/service-details-01.png" alt="" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="content__box">
                                            <h3>Comprehensive Roofing Strategy</h3>
                                            <p>At E&B Roofing, we begin every project with a thorough inspection and strategic planning. We assess the condition of your existing roof, identify potential issues, and propose a solution that fits your budget and timeline. Our goal is to provide a long-lasting roofing system that enhances your home's value and protection.</p>
                                            <p>We use only the highest quality materials and adhere to strict safety standards. Whether it's a minor repair or a complete replacement, our team works efficiently to minimize disruption to your daily life.</p>
                                        </div>
                                        <div className="service_system">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-12 pr-xl-0">
                                                    <div className="service__system__left">
                                                        <h3>Expert Roofing <br /> Systems.</h3>
                                                        <p>Our team consists of experienced professionals dedicated to delivering superior craftsmanship. We are fully licensed and insured, ensuring peace of mind for every client.</p>
                                                        <div className="system__list">
                                                            <ul>
                                                                <li><span className="icon-41"></span> Expert Engineers </li>
                                                                <li><span className="icon-41"></span> Award Wining Company </li>
                                                                <li><span className="icon-41"></span> Required Works </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-12">
                                                    <div className="service__system__right">
                                                        <div className="inner__box">
                                                            <div className="image__box">
                                                                <figure className="image">
                                                                    <img src="assets/images/service/service-details-02.png" alt="" />
                                                                </figure>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="our__solutions">
                                            <h3>Our Solutions</h3>
                                            <p>We offer a wide range of solutions including asphalt shingle roofing, flat rubber roofing (EPDM), siding installation, and window replacement. Each solution is tailored to meet the specific needs of your property and the New England climate.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*services-details end */}
                </div>
            </Layout>
        </>
    )
}