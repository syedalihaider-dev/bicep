"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

// Swiper styles
import 'swiper/css';
import styles from './ComplianceSlider.module.css';

const complianceData = [
    {
        id: 1,
        logo: '/industries/healthcare-app-development/trusted-logo-hl7.png',
        title: 'HL7',
        desc: 'At Bicep, we integrate HL7 standards to enable smooth data exchange between hospitals, clinics, and medical devices—improving coordination and patient care.',
    },
    {
        id: 2,
        logo: '/industries/healthcare-app-development/trusted-logo-phipa.png',
        title: 'PHIPA',
        desc: 'At Bicep, we build healthcare apps for Canadian providers with full PHIPA compliance, ensuring the privacy, security, and integrity of patient health data.',
    },
    {
        id: 3,
        logo: '/industries/healthcare-app-development/trusted-logo-hipaa.png',
        title: 'HIPAA',
        desc: 'At Bicep, we develop healthcare apps aligned with HIPAA standards, ensuring secure data transmission, strong encryption, and strict access control for U.S. healthcare systems.',
    },
    {
        id: 4,
        logo: '/industries/healthcare-app-development/trusted-logo-hitech.png',
        title: 'HITECH',
        desc: 'At Bicep, we develop digital health solutions aligned with HITECH standards, strengthening EHR security, preventing unauthorized access, and improving data interoperability.',
    },
    {
        id: 5,
        logo: '/industries/healthcare-app-development/trusted-logo-hl7.png',
        title: 'FDA Regulations',
        desc: 'At Bicep, we closely align medical device software designs with FDA regulations, ensuring strict adherence to pre-market submissions, validations, and control protocols.',
    },
    {
        id: 6,
        logo: '/industries/healthcare-app-development/trusted-logo-phipa.png',
        title: 'GDPR Health',
        desc: 'Our solutions are optimized for European compliance frameworks, prioritizing strict clinical registry rules, explicit user consent, and total data protection control.',
    },
    {
        id: 7,
        logo: '/industries/healthcare-app-development/trusted-logo-hipaa.png',
        title: 'NIST Standards',
        desc: 'We map cybersecurity structures directly to NIST guidelines, validating high-security access loops, cryptographic processes, and ongoing threat prevention.',
    }
];

export default function ComplianceSlider() {
    // Swiper instance state to handle programmatic button clicks
    const [swiperInstance, setSwiperInstance] = useState(null);

    return (
        <section className={styles.complianceSection}>
            <div className="container">
                {/* Header */}
                <div className="row justify-content-center text-center">
                    <div className="col-lg-10">
                        <h2 className={styles.sectionTitle}>
                            Healthcare Compliance & <br /> Security Standards
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            At Bicep, we ensure every healthcare app meets global compliance standards, protecting patient data, privacy, and security with trusted, industry-level practices.
                        </p>
                    </div>
                </div>

                {/* Slider Wrapper */}
                <div className={styles.sliderWrapper}>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        onSwiper={setSwiperInstance}
                        breakpoints={{
                            576: { slidesPerView: 1.5 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                            1200: { slidesPerView: 4 },
                        }}
                        className={styles.mySwiper}
                    >
                        {complianceData.map((item) => (
                            <SwiperSlide key={item.id} className="h-auto">
                                <div className={styles.complianceCard}>
                                    <div className={styles.logoBox}>
                                        <Image
                                            src={item.logo}
                                            alt={item.title}
                                            width={40}
                                            height={40}
                                            className="img-fluid"
                                        />
                                    </div>
                                    <h3 className={styles.cardHeading}>{item.title}</h3>
                                    <p className={styles.cardPara}>{item.desc}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Corrected Navigation Controls matching the design image */}
                    <div className={styles.navigationWrapper}>
                        <button
                            onClick={() => swiperInstance?.slideNext()}
                            className={`${styles.navBtn} ${styles.prevBtn}`}
                            aria-label="Previous Slide"
                        >
                            <Image
                                src="/arrow-icon.png"
                                alt="Previous"
                                width={24}
                                height={24}
                            />
                        </button>
                        <button
                            onClick={() => swiperInstance?.slidePrev()}
                            className={`${styles.navBtn} ${styles.nextBtn}`}
                            aria-label="Next Slide"
                        >
                            <Image
                                src="/arrow-icon.png"
                                alt="Next"
                                width={24}
                                height={24}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}