
import ContactContent from "@/components/pages/contact/ContactContent";

export const metadata = {
    title: 'Contact Us | E&B Roofing',
    description: 'Get in touch with E&B Roofing for a free estimate. Serving Massachusetts and Rhode Island with top-quality roofing, siding, and window services.',
    alternates: {
        canonical: './',
    },
};

export default function Contact() {
    return <ContactContent />;
}