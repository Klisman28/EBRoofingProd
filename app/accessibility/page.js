
import Layout from "@/components/layout/Layout";

export const metadata = {
    title: 'Accessibility Statement | E&B Roofing',
    description: 'Our commitment to providing an accessible experience for all users.',
    alternates: {
        canonical: './',
    },
};

export default function Accessibility() {
    return (
        <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Accessibility Statement">
            <section className="accessibility-section see__pad">
                <div className="auto_container">
                    <div className="content-box">
                        <div className="sec-title mb_50">
                            <h2>Accessibility Statement</h2>
                            <p className="mt_20">Last Updated: {new Date().toLocaleDateString()}</p>
                        </div>

                        <div className="text-block mb_40">
                            <h3>1. General</h3>
                            <p>
                                E&B Roofing strives to ensure that its services are accessible to people with disabilities. We have invested resources to help ensure that our website is made easier to use and more accessible for people with disabilities, with the strong belief that every person has the right to live with dignity, equality, comfort, and independence.
                            </p>
                        </div>

                        <div className="text-block mb_40">
                            <h3>2. Accessibility on EBroofing.net</h3>
                            <p>
                                We make available the UserWay Website Accessibility Widget that is powered by a dedicated accessibility server. The software allows ebroofingma.net to improve its compliance with the Web Content Accessibility Guidelines (WCAG 2.1).
                            </p>
                        </div>

                        <div className="text-block mb_40">
                            <h3>3. Disclaimer</h3>
                            <p>
                                E&B Roofing continues its efforts to constantly improve the accessibility of its site and services in the belief that it is our collective moral obligation to allow seamless, accessible and unhindered use also for those of us with disabilities. In an ongoing effort to continually improve and remediate accessibility issues, we also regularly scan ebroofingma.net to identify and fix every possible accessibility barrier on our site. Despite our efforts to make all pages and content on ebroofingma.net fully accessible, some content may not have yet been fully adapted to the strictest accessibility standards.
                            </p>
                        </div>

                        <div className="text-block mb_40">
                            <h3>4. Contact Us</h3>
                            <p>
                                If you are experiencing difficulty with any content on ebroofingma.net or require assistance with any part of our site, please contact us during normal business hours as detailed below and we will be happy to assist.
                                <br /><br />
                                Email: <a href="mailto:E_broofing@yahoo.com">E_broofing@yahoo.com</a> <br />
                                Phone: (774) 300-1932
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
