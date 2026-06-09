"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CustomButton from '@/components/CustomButton';
import styles from './ServicesSection.module.css';

const servicesData = [
    {
        id: 1,
        icon: '/industries/healthcare-app-development/service-icon-01.png',
        title: 'Custom Healthcare App Development',
        description: 'At Bicep, we design custom healthcare applications for hospitals, clinics, and startups. Our solutions combine AI, IoT, and telemedicine to enable smarter, more efficient healthcare management.',
    },
    {
        id: 2,
        icon: '/industries/healthcare-app-development/service-icon-02.png',
        title: 'Healthcare App Consultation',
        description: 'Get expert support from Bicep for healthcare mobile app development, from strategy to launch. We evaluate feasibility, compliance, and key features to deliver modern, high-performing healthcare solutions.',
    },
    {
        id: 3,
        icon: '/industries/healthcare-app-development/service-icon-03.png',
        title: 'Android Healthcare App Development',
        description: 'At Bicep, our Android healthcare app development ensures smooth performance across all devices. We integrate EHR systems, telehealth features, and wearable support for a seamless and efficient user experience.',
    },
    {
        id: 4,
        icon: '/industries/healthcare-app-development/service-icon-04.png',
        title: 'iOS Healthcare App Development',
        description: 'At Bicep, we deliver high-quality iOS healthcare apps with a focus on security and usability. Our solutions follow HIPAA standards, feature intuitive UI, strong data protection, and smooth patient engagement.',
    },
    {
        id: 5,
        icon: '/industries/healthcare-app-development/service-icon-05.png',
        title: 'Healthcare App Maintenance & Support',
        description: 'At Bicep, we offer continuous healthcare software support, including updates, bug fixes, and performance improvements—ensuring smooth operation and long-term reliability.',
    },
    {
        id: 6,
        icon: '/industries/healthcare-app-development/service-icon-06.png',
        title: 'Healthcare App UI/UX Design',
        description: 'At Bicep, we design healthcare web apps with a focus on usability and clarity. Our interfaces are intuitive, accessible, and built to deliver smooth experiences for both patients and medical professionals.',
    },
];

export default function HealthcareServices() {
    // Scroll animation variants for the container (stagger effect)
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    // Card fade-in up variant
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        },
    };

    return (
        <section className={styles.servicesSection}>
            <div className="container">
                {/* Header Section */}
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-lg-9 col-md-11">
                        <h2 className={styles.sectionTitle}>
                            Our Healthcare App <br /> Development Services
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Reimagine healthcare with Bicep’s end-to-end app development services, delivering secure, scalable, and innovative solutions for better patient care and operational efficiency. We create custom healthcare applications for mobile, web, and wearable devices.
                        </p>
                    </div>
                </div>

                {/* Services Cards Grid */}
                <motion.div
                    className="row g-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {servicesData.map((service) => (
                        <div className="col-lg-4 col-md-6" key={service.id}>
                            <motion.div
                                className={styles.serviceCard}
                                variants={cardVariants}
                                whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.08)" }}
                            >
                                <div className={styles.iconWrapper}>
                                    <Image
                                        src={service.icon}
                                        alt={service.title}
                                        width={76}
                                        height={56}
                                        className="img-fluid"
                                    />
                                </div>
                                <h4 className={styles.cardTitle}>{service.title}</h4>
                                <p className={styles.cardDescription}>{service.description}</p>
                            </motion.div>
                        </div>
                    ))}
                </motion.div>

                {/* CTA Button */}
                <div className="row text-center mt-5">
                    <div className="col-12">
                        <div className={styles.btnGroup}>
                            <CustomButton className={styles.ctaBtn}>
                                Start Building Your App
                            </CustomButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}