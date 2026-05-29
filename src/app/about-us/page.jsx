import React from 'react';
import BannerSection from "@/components/aboutUs/BannerSection";
import MissionSection from "@/components/aboutUs/MissionSection";
import WhatSetsUsApart from "@/components/aboutUs/WhatSetsUsApart";
import MissionVisionSection from "@/components/aboutUs/MissionVisionSection";
import AwardsSection from "@/components/aboutUs/AwardsSection";
import OurTeamSection from "@/components/aboutUs/OurTeamSection";
import CTASection from "@/components/home/CTASection";
import FaqSection from "@/components/home/FaqSection";
import ContactSection from "@/components/home/ContactSection";
import styles from "./page.module.css";

export const metadata = {
    title: "About Us | BicepTech",
    description: "Learn more about BicepTech - we build iOS and Android apps with speed, usability, and long-term scalability in mind.",
};

export default function AboutUsPage() {
    return (
        <div className={styles.aboutUsPage}>
            <BannerSection />
            <MissionSection />
            <WhatSetsUsApart />
            <MissionVisionSection />
            <AwardsSection />
            <OurTeamSection />
            <CTASection />
            <FaqSection />
            <ContactSection />
        </div>
    );
}
