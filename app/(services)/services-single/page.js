
'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Services Single">
                <div>
                    {/*service-single-page */}
                    <section className="service__single see__pad p_relative">
                        <div className="auto_container">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                    <div className="service__single__block">
                                        <div className="inner__content__four">
                                            <div className="service__content__four">
                                                <div className="image_layer">
                                                    <div className="image__hover__bg__one" style={{ backgroundImage: 'url(assets/images/shape/shape-53.png)' }}></div>
                                                    <div className="image__hover__bg__two" style={{ backgroundImage: 'url(assets/images/shape/shape-51.png)' }}></div>
                                                </div>
                                                <div className="lower__content__four">
                                                    <div className="icon__box p_ralative">
                                                        <div className="icon__hover__bg__one" style={{ backgroundImage: 'url(assets/images/shape/shape-49.png)' }}></div>
                                                        <div className="icon__hover__bg__two" style={{ backgroundImage: 'url(assets/images/shape/shape-49.png)' }}></div>
                                                        <div className="icon__outer">
                                                            <div className="icon__bg">
                                                                <span className="icon-27"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="service__text">
                                                        <h4><Link href="/services-details">Residential Roofing</Link></h4>
                                                        <p>Complete roof replacement and installation using top-quality shingles and materials.</p>
                                                    </div>
                                                    <div className="more__btn">
                                                        <Link href="/services-details">Read More <span className="icon-53"></span> <span className="icon-52"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                    <div className="service__single__block">
                                        <div className="inner__content__four">
                                            <div className="service__content__four">
                                                <div className="image_layer">
                                                    <div className="image__hover__bg__one" style={{ backgroundImage: 'url(assets/images/shape/shape-53.png)' }}></div>
                                                    <div className="image__hover__bg__two" style={{ backgroundImage: 'url(assets/images/shape/shape-51.png)' }}></div>
                                                </div>
                                                <div className="lower__content__four">
                                                    <div className="icon__box p_ralative">
                                                        <div className="icon__hover__bg__one" style={{ backgroundImage: 'url(assets/images/shape/shape-49.png)' }}></div>
                                                        <div className="icon__hover__bg__two" style={{ backgroundImage: 'url(assets/images/shape/shape-49.png)' }}></div>
                                                        <div className="icon__outer">
                                                            <div className="icon__bg">
                                                                <span className="icon-8"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="service__text">
                                                        <h4><Link href="/services-details">Storm Damage</Link></h4>
                                                        <p>Fast and reliable repairs for storm, wind, and hail damage to restore your home.</p>
                                                    </div>
                                                    <div className="more__btn">
                                                        <Link href="/services-details">Read More <span className="icon-53"></span> <span className="icon-52"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                    <div className="service__single__block">
                                        <div className="inner__content__four">
                                            <div className="service__content__four">
                                                <div className="image_layer">
                                                    <div className="image__hover__bg__one" style={{ backgroundImage: 'url(assets/images/shape/shape-53.png)' }}></div>
                                                    <div className="image__hover__bg__two" style={{ backgroundImage: 'url(assets/images/shape/shape-51.png)' }}></div>
                                                </div>
                                                <div className="lower__content__four">
                                                    <div className="icon__box p_ralative">
                                                        <div className="icon__hover__bg__one" style={{ backgroundImage: 'url(assets/images/shape/shape-49.png)' }}></div>
                                                        <div className="icon__hover__bg__two" style={{ backgroundImage: 'url(assets/images/shape/shape-49.png)' }}></div>
                                                        <div className="icon__outer">
                                                            <div className="icon__bg">
                                                                <span className="icon-14"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="service__text">
                                                        <h4><Link href="/services-details">Flashing & Trim</Link></h4>
                                                        <p>Custom flashing and trim work to prevent leaks and ensure a watertight seal.</p>
                                                    </div>
                                                    <div className="more__btn">
                                                        <Link href="/services-details">Read More <span className="icon-53"></span> <span className="icon-52"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                    <div className="service__single__block">
                                        <div className="inner__content__four">
                                            <div className="service__content__four">
                                                <div className="image_layer">
                                                    <div className="image__hover__bg__one" style={{ backgroundImage: 'url(assets/images/shape/shape-53.png)' }}></div>
                                                    <div className="image__hover__bg__two" style={{ backgroundImage: 'url(assets/images/shape/shape-51.png)' }}></div>
                                                </div>
                                                <div className="lower__content__four">
                                                    <div className="icon__box p_ralative">
                                                        <div className="icon__hover__bg__one" style={{ backgroundImage: 'url(assets/images/shape/shape-49.png)' }}></div>
                                                        <div className="icon__hover__bg__two" style={{ backgroundImage: 'url(assets/images/shape/shape-49.png)' }}></div>
                                                        <div className="icon__outer">
                                                            <div className="icon__bg">
                                                                <span className="icon-31"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="service__text">
                                                        <h4><Link href="/services-details">Siding Install</Link></h4>
                                                        <p>Enhance your curb appeal and efficiency with vinyl and fiber cement siding.</p>
                                                    </div>
                                                    <div className="more__btn">
                                                        <Link href="/services-details">Read More <span className="icon-53"></span> <span className="icon-52"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                    <div className="service__single__block">
                                        <div className="inner__content__four">
                                            <div className="service__content__four">
                                                <div className="image_layer">
                                                    <div className="image__hover__bg__one" style={{ backgroundImage: 'url(assets/images/shape/shape-53.png)' }}></div>
                                                    <div className="image__hover__bg__two" style={{ backgroundImage: 'url(assets/images/shape/shape-51.png)' }}></div>
                                                </div>
                                                <div className="lower__content__four">
                                                    <div className="icon__box p_ralative">
                                                        <div className="icon__hover__bg__one" style={{ backgroundImage: 'url(assets/images/shape/shape-49.png)' }}></div>
                                                        <div className="icon__hover__bg__two" style={{ backgroundImage: 'url(assets/images/shape/shape-49.png)' }}></div>
                                                        <div className="icon__outer">
                                                            <div className="icon__bg">
                                                                <span className="icon-32"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="service__text">
                                                        <h4><Link href="/services-details">Leak Repair</Link></h4>
                                                        <p>Expert leak detection and repair services to stop water damage in its tracks.</p>
                                                    </div>
                                                    <div className="more__btn">
                                                        <Link href="/services-details">Read More <span className="icon-53"></span> <span className="icon-52"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                    <div className="service__single__block">
                                        <div className="inner__content__four">
                                            <div className="service__content__four">
                                                <div className="image_layer">
                                                    <div className="image__hover__bg__one" style={{ backgroundImage: 'url(assets/images/shape/shape-53.png)' }}></div>
                                                    <div className="image__hover__bg__two" style={{ backgroundImage: 'url(assets/images/shape/shape-51.png)' }}></div>
                                                </div>
                                                <div className="lower__content__four">
                                                    <div className="icon__box p_ralative">
                                                        <div className="icon__hover__bg__one" style={{ backgroundImage: 'url(assets/images/shape/shape-49.png)' }}></div>
                                                        <div className="icon__hover__bg__two" style={{ backgroundImage: 'url(assets/images/shape/shape-49.png)' }}></div>
                                                        <div className="icon__outer">
                                                            <div className="icon__bg">
                                                                <span className="icon-33"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="service__text">
                                                        <h4><Link href="/services-details">Metal Roofing</Link></h4>
                                                        <p>Durable and long-lasting metal roofing solutions for residential and commercial.</p>
                                                    </div>
                                                    <div className="more__btn">
                                                        <Link href="/services-details">Read More <span className="icon-53"></span> <span className="icon-52"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                    <div className="service__single__block">
                                        <div className="inner__content__four">
                                            <div className="service__content__four">
                                                <div className="image_layer">
                                                    <div className="image__hover__bg__one" style={{ backgroundImage: 'url(assets/images/shape/shape-53.png)' }}></div>
                                                    <div className="image__hover__bg__two" style={{ backgroundImage: 'url(assets/images/shape/shape-51.png)' }}></div>
                                                </div>
                                                <div className="lower__content__four">
                                                    <div className="icon__box p_ralative">
                                                        <div className="icon__hover__bg__one" style={{ backgroundImage: 'url(assets/images/shape/shape-49.png)' }}></div>
                                                        <div className="icon__hover__bg__two" style={{ backgroundImage: 'url(assets/images/shape/shape-49.png)' }}></div>
                                                        <div className="icon__outer">
                                                            <div className="icon__bg">
                                                                <span className="icon-28"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="service__text">
                                                        <h4><Link href="/services-details">Commercial Roofing</Link></h4>
                                                        <p>Flat roofing systems (EPDM/TPO) for businesses and commercial properties.</p>
                                                    </div>
                                                    <div className="more__btn">
                                                        <Link href="/services-details">Read More <span className="icon-53"></span> <span className="icon-52"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                    <div className="service__single__block">
                                        <div className="inner__content__four">
                                            <div className="service__content__four">
                                                <div className="image_layer">
                                                    <div className="image__hover__bg__one" style={{ backgroundImage: 'url(assets/images/shape/shape-53.png)' }}></div>
                                                    <div className="image__hover__bg__two" style={{ backgroundImage: 'url(assets/images/shape/shape-51.png)' }}></div>
                                                </div>
                                                <div className="lower__content__four">
                                                    <div className="icon__box p_ralative">
                                                        <div className="icon__hover__bg__one" style={{ backgroundImage: 'url(assets/images/shape/shape-49.png)' }}></div>
                                                        <div className="icon__hover__bg__two" style={{ backgroundImage: 'url(assets/images/shape/shape-49.png)' }}></div>
                                                        <div className="icon__outer">
                                                            <div className="icon__bg">
                                                                <span className="icon-20"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="service__text">
                                                        <h4><Link href="/services-details">Roof Inspection</Link></h4>
                                                        <p>Comprehensive inspections to assess roof condition and identify potential issues.</p>
                                                    </div>
                                                    <div className="more__btn">
                                                        <Link href="/services-details">Read More <span className="icon-53"></span> <span className="icon-52"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                    {/*ervice-single-page-end */}

                </div>

            </Layout>
        </>
    )
}