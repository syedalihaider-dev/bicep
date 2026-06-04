import React from 'react';
import BannerSection from '../../components/pricing/BannerSection';
import PricingCards from '../../components/pricing/PricingCards';
import FaqSection from "@/components/home/FaqSection";
import ContactSection from "@/components/home/ContactSection";
import styles from './page.module.css';

export const metadata = {
  title: 'Pricing - Bicep',
  description: 'Flexible mobile app pricing with tailored packages for every stage of growth.',
};

export default function PricingPage() {
  return (
    <div className={styles.pricingPage}>
      <BannerSection />
      <PricingCards />
      <FaqSection />
      <ContactSection />
    </div>
  );
}
