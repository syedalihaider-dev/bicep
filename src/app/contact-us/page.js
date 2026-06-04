import React from 'react';
import BannerSection from '../../components/contactUs/BannerSection';
import ContactInfoSection from '../../components/contactUs/ContactInfoSection';
import GlobalPresenceSection from '../../components/contactUs/GlobalPresenceSection';
import ContactSection from '@/components/home/ContactSection';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact Us - Bicep',
  description: 'Talk to our expert team! BicepTech designs and develops high-performance iOS and Android apps.',
};

export default function ContactUsPage() {
  return (
    <div className={styles.contactUsPage}>
      <BannerSection />
      <ContactInfoSection />
      <GlobalPresenceSection />
      <ContactSection />
    </div>
  );
}
