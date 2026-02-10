
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Blog Details">

                {/*blog-details */}
                <section className="blog__section blog__details p_relative see__pad">
                    <div className="blog__content">
                        <div className="auto_container">
                            <div className="row">
                                <div className="col-lg-8 col-sm-12">
                                    <div className="news__block__one">
                                        <div className="inner__box">
                                            <div className="image__box">
                                                <figure className="image">
                                                    <img src="assets/images/news/news-01.png" alt="" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="lower__content two">
                                            <div className="news__date" style={{ backgroundImage: 'url(assets/images/shape/shape-05.png)' }}>
                                                <Link href="#">11 <span>April</span> </Link>
                                            </div>
                                            <div className="news__title">
                                                <h4>How to Handle Unexpected Situations on Road</h4>
                                            </div>
                                            <div className="author__info">
                                                <ul>
                                                    <li>
                                                        <Link href="#"><span className="icon-icon-22"></span>by Admin</Link> <span>2 Comments</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="news__details__text">

                                                <p>Regular roof maintenance is crucial for extending the lifespan of your roof. Even minor damage can lead to significant issues if left unchecked, potentially causing leaks and structural damage. E&B Roofing recommends annual inspections to identify potential problems early.</p>
                                                <p className="pt-30">Our team checks for loose shingles, flashing damage, and signs of water infiltration. By addressing these issues promptly, you can save money on costly repairs down the line and ensure your home remains safe and dry throughout the seasons.</p>
                                            </div>
                                        </div>
                                        <div className="authore__des">
                                            <p>Dedicated to providing the best roofing solutions for homeowners in New England.</p>
                                            <h5>E&B Expert Team</h5>
                                        </div>
                                        <div className="news__details__text">
                                            <p>We understand the unique weather challenges in Massachusetts and Rhode Island. Our roofing systems are designed to withstand heavy snow, strong winds, and rain, keeping your family safe year-round.</p>
                                        </div>
                                        <div className="details__image">
                                            <div className="row">
                                                <div className="col-xl-6 col-md-6">
                                                    <div className="inner__box">
                                                        <div className="image__box">
                                                            <figure className="image">
                                                                <img src="assets/images/news/news-10.png" alt="" />
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-md-6">
                                                    <div className="inner__box">
                                                        <div className="image__box">
                                                            <figure className="image">
                                                                <img src="assets/images/news/news-11.png" alt="" />
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="normal__text">
                                            <p>Choosing the right materials is essential. We work with top manufacturers to provide a range of options, from asphalt shingles to flat rubber roofing, ensuring quality and longevity.</p>
                                        </div>
                                        <div className="left__tag">
                                            <div className="sidebar__tag">
                                                <ul className="sidebar__tag__box">
                                                    <li><Link href="/shop">Roofing</Link></li>
                                                    <li><Link href="/shop">Projects</Link></li>
                                                    <li><Link href="/shop">Repair</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="details__authore p_relative">
                                            <div className="image_layer shape-57" style={{ backgroundImage: 'url(assets/images/shape/shape-57.png)' }}></div>
                                            <div className="comment">
                                                <figure className="thumb-box">
                                                    <img src="assets/images/news/news-authore.png" alt="" />
                                                </figure>
                                                <div className="comment__inner">
                                                    <div className="comment__info">
                                                        <h4 className="body__one">E&B Roofing Team</h4>
                                                        <p>About Author</p>
                                                    </div>
                                                    <p>Our goal is customer satisfaction. We take pride in our workmanship and our commitment to the community.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comments__form__area">
                                            <div className="group__title">
                                                <h3>Leave A Comments </h3>
                                            </div>
                                            <form action="/blog-details" method="post" className="comment-form">
                                                <div className="row clearfix">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                        <input type="text" name="name" placeholder="Your name" required="" />
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                        <input type="email" name="email" placeholder="Your Email" required="" />
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                        <textarea name="message" placeholder="Type message"></textarea>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 message-btn">
                                                        <button type="submit" className="btn-one">
                                                            <em>
                                                                <i></i>
                                                                <i></i>
                                                                <i></i>
                                                                <i></i>
                                                                <i></i>
                                                                <i></i>
                                                                <i></i>
                                                            </em>
                                                            <span>Post Comment</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="sidebar__content__box right ps-lg-5">
                                        <div className="single__sidebar__box">
                                            <div className="sidebar__search__box">
                                                <form className="search-form" action="#">
                                                    <input placeholder="Search" type="text" />
                                                    <button type="submit"><i className="icon-17"></i></button>
                                                </form>
                                            </div>
                                        </div>
                                        {/*End Single Sidebar Box */}
                                        {/*Start Single Sidebar Box */}
                                        <div className="single__sidebar__box">
                                            <div className="title">
                                                <h3>Category</h3>
                                            </div>
                                            <div className="sidebar__categories">
                                                <ul className="sidebar__categories__box">
                                                    <li><Link href="/shop">Cleaning Roof</Link></li>
                                                    <li><Link href="/shop">Roofing Technology</Link></li>
                                                    <li><Link href="/shop">Renovation Roof</Link></li>
                                                    <li><Link href="/shop">Modern Architecture</Link></li>
                                                    <li><Link href="/shop">Roofing</Link></li>
                                                    <li><Link href="/shop">Siding Roof</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/*End Single Sidebar Box */}
                                        {/*Start Single Sidebar Box */}
                                        <div className="single__sidebar__box">
                                            <div className="title">
                                                <h3>Recent Article</h3>
                                            </div>
                                            <div className="sidebar__repost">
                                                <div className="post__inner">
                                                    <div className="post">
                                                        <div className="inner__box">
                                                            <div className="image__box">
                                                                <figure className="image">
                                                                    <Link href="/blog-details">
                                                                        <img src="assets/images/news/news-07.png" alt="" />
                                                                    </Link>
                                                                </figure>
                                                            </div>
                                                        </div>
                                                        <h6><Link href="/blog-details">Get tips to protect your roofings</Link></h6>
                                                        <div className="post__info">
                                                            <ul className="post-info clearfix">
                                                                <li>{new Date().getFullYear()}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="post">
                                                        <div className="inner__box">
                                                            <div className="image__box">
                                                                <figure className="image">
                                                                    <Link href="/blog-details">
                                                                        <img src="assets/images/news/news-08.png" alt="" />
                                                                    </Link>
                                                                </figure>
                                                            </div>
                                                        </div>
                                                        <h6><Link href="/blog-details">How to maintain your roof in winter</Link></h6>
                                                        <div className="post__info">
                                                            <ul className="post-info clearfix">
                                                                <li>{new Date().getFullYear()}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="post">
                                                        <div className="inner__box">
                                                            <div className="image__box">
                                                                <figure className="image">
                                                                    <Link href="/blog-details">
                                                                        <img src="assets/images/news/news-09.png" alt="" />
                                                                    </Link>
                                                                </figure>
                                                            </div>
                                                        </div>
                                                        <h6><Link href="/blog-details">Choosing the right siding for your home</Link></h6>
                                                        <div className="post__info">
                                                            <ul className="post-info clearfix">
                                                                <li>{new Date().getFullYear()}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End Single Sidebar Box */}

                                        {/*Start Single Sidebar Box */}
                                        <div className="single__sidebar__box">
                                            <div className="title">
                                                <h3>Popular Tags</h3>
                                            </div>
                                            <div className="sidebar__tag">
                                                <ul className="sidebar__tag__box">
                                                    <li><Link href="/shop">Roofing</Link></li>
                                                    <li><Link href="/shop">Projects</Link></li>
                                                    <li><Link href="/shop">Repair</Link></li>
                                                    <li><Link href="/shop">Architecture</Link></li>
                                                    <li><Link href="/shop">Maintainance</Link></li>
                                                    <li><Link href="/shop">Roofing</Link></li>
                                                    <li><Link href="/shop">Quality</Link></li>
                                                    <li><Link href="/shop">Material</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/*End Single Sidebar Box */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*blog-details end */}

            </Layout>
        </>
    )
}
