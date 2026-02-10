
import Layout from "@/components/layout/Layout";

export const metadata = {
    title: 'Privacy Policy | E&B Roofing',
    description: 'Privacy Policy for E&B Roofing. Learn how we collect, use, and protect your personal information.',
    alternates: {
        canonical: './',
    },
};

export default function PrivacyPolicy() {
    return (
        <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Privacy Policy">
            <section className="privacy-policy-section see__pad">
                <div className="auto_container">
                    <div className="content-box">
                        <div className="sec-title mb_50">
                            <h2>Privacy Policy</h2>
                            <p className="mt_20">Last Updated: {new Date().toLocaleDateString()}</p>
                        </div>

                        <div className="text-block mb_40">
                            <h3>1. Introduction</h3>
                            <p>
                                E&B Roofing ("we," "our," or "us") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
                            </p>
                        </div>

                        <div className="text-block mb_40">
                            <h3>2. Information We Collect</h3>
                            <p>We may collect personal information such as:</p>
                            <ul className="list-style-one ms-4 mb-3">
                                <li>Name, email address, phone number, and physical address when you request a quote or contact us.</li>
                                <li>Information about your property regarding roofing projects.</li>
                                <li>Technical data such as IP address and browser type when you browse our site.</li>
                            </ul>
                        </div>

                        <div className="text-block mb_40">
                            <h3>3. How We Use Your Information</h3>
                            <p>We use your information to:</p>
                            <ul className="list-style-one ms-4 mb-3">
                                <li>Provide roofing estimates and services.</li>
                                <li>Communicate with you regarding appointments and project updates.</li>
                                <li>Improve our website and customer service.</li>
                                <li>Comply with legal obligations.</li>
                            </ul>
                        </div>

                        <div className="text-block mb_40">
                            <h3>4. Information Sharing</h3>
                            <p>
                                We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.
                            </p>
                        </div>

                        <div className="text-block mb_40">
                            <h3>5. Security</h3>
                            <p>
                                We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet is 100% secure.
                            </p>
                        </div>

                        <div className="text-block mb_40">
                            <h3>6. Contact Us</h3>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at: <br />
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
