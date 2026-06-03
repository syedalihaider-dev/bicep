import React from 'react';
import BannerSection from "@/components/services/iosAppDevelopment/BannerSection";
import ScrollSection from "@/components/services/iosAppDevelopment/ScrollSection";
import NativeExperienceSection from "@/components/services/iosAppDevelopment/NativeExperienceSection";
import ServicesInMotionSection from "@/components/services/iosAppDevelopment/ServicesInMotionSection";
import ProcessSection from "@/components/services/iosAppDevelopment/ProcessSection";

export const metadata = {
    title: "iOS App Development | BicepTech",
    description: "High Performance iOS Apps Built for Growth by BicepTech.",
};

export default function IosAppDevelopmentPage() {
    return (
        <div>
            <BannerSection />
            <ScrollSection />
            <NativeExperienceSection />
            <ServicesInMotionSection />
            <ProcessSection />
        </div>
    );
}
