'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            // spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider0() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="portfolio__block__one">
                        <div className="inner-box">
                            <figure className="image-box" style={{ position: 'relative', height: '250px' }}>
                                <Image src="/assets/images/resource/eb_roofing.jpg" alt="Residential Roofing" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} loading="lazy" />
                            </figure>
                            <div className="lower__content">
                                <div className="view-btn">
                                    <Link
                                        href="assets/images/resource/eb_roofing.jpg"
                                        className="lightbox-image"
                                        data-fancybox="gallery"
                                    >
                                        <span className="icon-18" />
                                    </Link>
                                </div>
                                <div className="portfolio__block">
                                    <span>Residential — Attleboro, MA</span>
                                    <h4>
                                        <Link href="/project-details">Complete Roof Replacement</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="portfolio__block__one">
                        <div className="inner-box">
                            <figure className="image-box" style={{ position: 'relative', height: '250px' }}>
                                <Image src="/assets/images/resource/ebroofgin2.jpg" alt="Storm Repair" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} loading="lazy" />
                            </figure>
                            <div className="lower__content">
                                <div className="view-btn">
                                    <Link
                                        href="assets/images/resource/ebroofgin2.jpg"
                                        className="lightbox-image"
                                        data-fancybox="gallery"
                                    >
                                        <span className="icon-18" />
                                    </Link>
                                </div>
                                <div className="portfolio__block">
                                    <span>Repair Service — Pawtucket, RI</span>
                                    <h4>
                                        <Link href="/project-details">Emergency Storm Repair</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="portfolio__block__one">
                        <div className="inner-box">
                            <figure className="image-box" style={{ position: 'relative', height: '250px' }}>
                                <Image src="/assets/images/resource/ebroofing3.jpg" alt="Commercial Roofing" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} loading="lazy" />
                            </figure>
                            <div className="lower__content">
                                <div className="view-btn">
                                    <Link
                                        href="assets/images/resource/ebroofing3.jpg"
                                        className="lightbox-image"
                                        data-fancybox="gallery"
                                    >
                                        <span className="icon-18" />
                                    </Link>
                                </div>
                                <div className="portfolio__block">
                                    <span>Commercial — Cranston, RI</span>
                                    <h4>
                                        <Link href="/project-details">Flat Roof Restoration</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="portfolio__block__one">
                        <div className="inner-box">
                            <figure className="image-box" style={{ position: 'relative', height: '250px' }}>
                                <Image src="/assets/images/resource/ebroofing4.jpg" alt="New Construction Roofing" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} loading="lazy" />
                            </figure>
                            <div className="lower__content">
                                <div className="view-btn">
                                    <Link
                                        href="assets/images/resource/ebroofing4.jpg"
                                        className="lightbox-image"
                                        data-fancybox="gallery"
                                    >
                                        <span className="icon-18" />
                                    </Link>
                                </div>
                                <div className="portfolio__block">
                                    <span>New Construction — Seekonk, MA</span>
                                    <h4>
                                        <Link href="/project-details">Premium Shingle Install</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="portfolio__block__one">
                        <div className="inner-box">
                            <figure className="image-box" style={{ position: 'relative', height: '250px' }}>
                                <Image src="/assets/images/resource/ebroofing5.jpg" alt="Roof Maintenance" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} loading="lazy" />
                            </figure>
                            <div className="lower__content">
                                <div className="view-btn">
                                    <Link
                                        href="assets/images/resource/ebroofing5.jpg"
                                        className="lightbox-image"
                                        data-fancybox="gallery"
                                    >
                                        <span className="icon-18" />
                                    </Link>
                                </div>
                                <div className="portfolio__block">
                                    <span>Maintenance — Providence, RI</span>
                                    <h4>
                                        <Link href="/project-details">Roof Inspection & Care</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="portfolio__block__one">
                        <div className="inner-box">
                            <figure className="image-box" style={{ position: 'relative', height: '250px' }}>
                                <Image src="/assets/images/resource/ebroofing6.jpg" alt="Roof Renovation" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} loading="lazy" />
                            </figure>
                            <div className="lower__content">
                                <div className="view-btn">
                                    <Link
                                        href="assets/images/resource/ebroofing6.jpg"
                                        className="lightbox-image"
                                        data-fancybox="gallery"
                                    >
                                        <span className="icon-18" />
                                    </Link>
                                </div>
                                <div className="portfolio__block">
                                    <span>Renovation — Taunton, MA</span>
                                    <h4>
                                        <Link href="/project-details">Historic Roof Restoration</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="portfolio__block__one">
                        <div className="inner-box">
                            <figure className="image-box" style={{ position: 'relative', height: '250px' }}>
                                <Image src="/assets/images/resource/ebroofing7.jpg" alt="Siding and Gutters" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} loading="lazy" />
                            </figure>
                            <div className="lower__content">
                                <div className="view-btn">
                                    <Link
                                        href="assets/images/resource/ebroofing7.jpg"
                                        className="lightbox-image"
                                        data-fancybox="gallery"
                                    >
                                        <span className="icon-18" />
                                    </Link>
                                </div>
                                <div className="portfolio__block">
                                    <span>Siding & Gutters — Mansfield, MA</span>
                                    <h4>
                                        <Link href="/project-details">Exterior Protection</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="portfolio__block__one">
                        <div className="inner-box">
                            <figure className="image-box" style={{ position: 'relative', height: '250px' }}>
                                <Image src="/assets/images/resource/ebroofing8.jpg" alt="Custom Roofing Solutions" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} loading="lazy" />
                            </figure>
                            <div className="lower__content">
                                <div className="view-btn">
                                    <Link
                                        href="assets/images/resource/ebroofing8.jpg"
                                        className="lightbox-image"
                                        data-fancybox="gallery"
                                    >
                                        <span className="icon-18" />
                                    </Link>
                                </div>
                                <div className="portfolio__block">
                                    <span>Projects — East Providence, RI</span>
                                    <h4>
                                        <Link href="/project-details">Custom Roofing Solutions</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
