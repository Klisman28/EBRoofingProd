
import AboutContent from "@/components/pages/about/AboutContent";

export const metadata = {
    title: 'About Us | E&B Roofing',
    description: 'Learn about E&B Roofing, serving MA & RI for over 15 years. Experts in roofing, siding, and windows.',
    alternates: {
        canonical: './',
    },
};

export default function About() {
    return <AboutContent />;
}