
import Layout from "@/components/layout/Layout";

export const metadata = {
    title: 'Terms of Service | E&B Roofing',
    description: 'Terms of Service for E&B Roofing in Massachusetts and Rhode Island.',
    alternates: {
        canonical: './',
    },
};

export default function TermsOfService() {
    return (
        <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Terms of Service">
            <section className="terms-section see__pad">
                <div className="auto_container">
                    <div className="content-box">
                        <div className="sec-title mb_50">
                            <h2>Terms of Service</h2>
                            <p className="mt_20">Last Updated: {new Date().toLocaleDateString()}</p>
                        </div>

                        <div className="text-block mb_40">
                            <h3>1. Agreement to Terms</h3>
                            <p>
                                By accessing and using the website of E&B Roofing ("Company", "we", "us", or "our"), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the service.
                            </p>
                        </div>

                        <div className="text-block mb_40">
                            <h3>2. Services</h3>
                            <p>
                                E&B Roofing provides roofing, siding, and window services in Massachusetts and Rhode Island. All services are subject to a separate written agreement or estimate provided to the client.
                            </p>
                        </div>

                        <div className="text-block mb_40">
                            <h3>3. Estimates and Quotes</h3>
                            <p>
                                Any estimates provided on this website are for informational purposes only and do not constitute a binding contract. A definitive price will be established after an in-person inspection and written agreement.
                            </p>
                        </div>

                        <div className="text-block mb_40">
                            <h3>4. Intellectual Property</h3>
                            <p>
                                The content, features, and functionality of this website, including text, graphics, logos, and images, are the property of E&B Roofing and are protected by copyright and other intellectual property laws.
                            </p>
                        </div>

                        <div className="text-block mb_40">
                            <h3>5. Limitation of Liability</h3>
                            <p>
                                In no event shall E&B Roofing be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the website.
                            </p>
                        </div>

                        <div className="text-block mb_40">
                            <h3>6. Governing Law</h3>
                            <p>
                                These Terms shall be governed and construed in accordance with the laws of the Commonwealth of Massachusetts and the State of Rhode Island, without regard to its conflict of law provisions.
                            </p>
                        </div>

                        <div className="text-block mb_40">
                            <h3>7. Changes to Terms</h3>
                            <p>
                                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
                            </p>
                        </div>

                        <div className="text-block mb_40">
                            <h3>8. Contact Us</h3>
                            <p>
                                If you have any questions about these Terms, please contact us at: <br />
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
