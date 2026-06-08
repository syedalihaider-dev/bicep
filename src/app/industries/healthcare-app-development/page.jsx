import React from 'react';
import BannerSection from "@/components/industries/healthcare-app-development/BannerSection";
import FeaturesSection from "@/components/industries/healthcare-app-development/FeaturesSection";
import FaqSection from "@/components/home/FaqSection";
import ContactSection from "@/components/home/ContactSection";

export const metadata = {
    title: "Healthcare App Development Company | BicepTech",
    description: "Top healthcare app development company crafting HIPAA-compliant mobile solutions for doctors, patients & wellness providers.",
};

export default function HealthcareAppDevelopmentPage() {
    return (
        <div>
            <BannerSection />
            <FeaturesSection />
            <FaqSection />
            <ContactSection />
        </div>
    );
}
