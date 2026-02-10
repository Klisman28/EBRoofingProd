
import ServicesContent from "@/components/pages/services/ServicesContent";

export const metadata = {
    title: 'Roofing Services | E&B Roofing',
    description: 'Expert roofing services including installation, repair, and replacement. Also siding, windows, and gutters.',
    alternates: {
        canonical: './',
    },
};

export default function Services() {
    return <ServicesContent />;
}