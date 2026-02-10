
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export async function generateMetadata({ params }) {
    const { slug } = params

    // Example: Create a title from the slug (e.g., "my-first-post" -> "My First Post")
    const title = slug
        ? slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
        : 'Blog Post'

    return {
        title: `${title} | E&B Roofing`,
        description: `Read our latest article on ${title}`,
        alternates: {
            canonical: `/blog/${slug}`,
        },
    }
}

export default function BlogPost({ params }) {
    const { slug } = params

    return (
        <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Blog Details">
            <section className="blog__details p_relative see__pad">
                <div className="auto_container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="blog__inner">
                                <div className="news__block__one">
                                    <div className="inner__box">
                                        <div className="lower__content two">
                                            <div className="news__title">
                                                <h4>Dynamic Post: {slug}</h4>
                                            </div>
                                            <div className="news__details__text">
                                                <p>This is a dynamically generated page for the slug: <strong>{slug}</strong>.</p>
                                                <p>
                                                    If you view the page source, you will see the canonical URL tag:
                                                    <br />
                                                    <code>&lt;link rel="canonical" href="https://www.ebroofingma.net/blog/{slug}" /&gt;</code>
                                                </p>
                                            </div>
                                            <div className="mt-4">
                                                <Link href="/" className="theme-btn-one">Back to Home</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
