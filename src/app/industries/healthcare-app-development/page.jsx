import React from 'react';
import BannerSection from "@/components/industries/healthcare-app-development/BannerSection";
import FeaturesSection from "@/components/industries/healthcare-app-development/FeaturesSection";
import ServicesSection from "@/components/industries/healthcare-app-development/ServicesSection";
import ComplianceSlider from "@/components/industries/healthcare-app-development/ComplianceSlider";
import HealthcareProductivity from "@/components/industries/healthcare-app-development/HealthcareProductivity";
import CaseStudySlider from "@/components/industries/healthcare-app-development/CaseStudySlider";
import TabsFeatures from "@/components/industries/healthcare-app-development/TabsFeatures";
import WhyChooseSolution from "@/components/industries/healthcare-app-development/WhyChooseSolution";
import CTASection from "@/components/industries/healthcare-app-development/CTASection";
import ProcessSection from "@/components/services/iosAppDevelopment/ProcessSection";
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
            <ServicesSection />
            <ComplianceSlider />
            <HealthcareProductivity />
            <CaseStudySlider />
            <TabsFeatures />
            <WhyChooseSolution />
            <CTASection />
            <ProcessSection />
            <FaqSection />
            <ContactSection />
        </div>
    );
}
