"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './TabsFeatures.module.css';

const tabsData = [
    {
        id: 'patient',
        label: 'Patient Panel',
        image: '/industries/healthcare-app-development/patient-panel.png', // Main size standard (450x420)
        features: [
            'User registration', 'Profile management',
            'Appointment booking', 'Video consultations',
            'E-prescriptions', 'Medication reminders',
            'Lab test booking', 'Secure payments',
            'Health records access', 'Symptom checker',
            'Chat with doctors', 'Insurance integration',
            'Emergency alerts', 'Wearable device sync',
            'Telehealth support', 'Mental health tracking',
            'Multilingual support', 'Push notifications'
        ]
    },
    {
        id: 'admin',
        label: 'Admin Panel',
        image: '/industries/healthcare-app-development/patient-panel.png', // Reusing structure layout as default
        features: [
            'User & role management', 'Doctor verification',
            'Analytics dashboard', 'Revenue tracking',
            'Content management (CMS)', 'Appointment tracking',
            'System logs & security', 'Database backups',
            'Push notification control', 'Feedback management'
        ]
    },
    {
        id: 'professional',
        label: 'Professional Panel',
        image: '/industries/healthcare-app-development/patient-panel.png',
        features: [
            'EHR digital inputs', 'Availability scheduler',
            'Digital prescription tool', 'Video calling portal',
            'Patient history access', 'Earnings tracker',
            'Lab report uploads', 'Direct secure chat'
        ]
    }
];

export default function HealthcareFeatures() {
    const [activeTab, setActiveTab] = useState('patient');
    const currentData = tabsData.find(tab => tab.id === activeTab);

    // Animation Variant Definitions for Smooth Tab Switching
    const tabContentVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        },
        exit: {
            opacity: 0,
            y: -15,
            transition: { duration: 0.3, ease: "easeIn" }
        }
    };

    return (
        <section className={styles.featuresSection}>
            <div className="container">

                {/* Section Header */}
                <div className="row justify-content-center text-center mb-4">
                    <div className="col-lg-8">
                        <h2 className={styles.sectionTitle}>
                            Must-Have Features for Your <br /> Healthcare App
                        </h2>
                    </div>
                </div>

                {/* Dynamic Nav Tabs Row */}
                <div className="row justify-content-center mb-5">
                    <div className="col-auto">
                        <div className={styles.tabsNavContainer}>
                            {tabsData.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`${styles.tabBtn} ${activeTab === tab.id ? styles.activeTabBtn : ''}`}
                                >
                                    {tab.label}
                                    {/* Framer motion magical layout pill effect for active state background */}
                                    {activeTab === tab.id && (
                                        <motion.div
                                            layoutId="activeTabPill"
                                            className={styles.activePillBackground}
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Features Dynamic Container Display */}
                <div className={styles.dashboardContainer}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            variants={tabContentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="row align-items-center g-4"
                        >

                            {/* Left Column: 2-Column Features Check Grid */}
                            <div className="col-lg-7 col-md-12">
                                <div className={styles.featuresListGrid}>
                                    {currentData.features.map((feature, idx) => (
                                        <div key={idx} className={styles.featureItem}>
                                            <div className={styles.iconWrapper}>
                                                <Image
                                                    src="/check-circle-icon.png"
                                                    alt="Checked"
                                                    width={28}
                                                    height={28}
                                                />
                                            </div>
                                            <span className={styles.featureText}>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Column: Mobile App Showcase Graphic */}
                            <div className="col-lg-5 col-md-12 text-center text-lg-end">
                                <div className={styles.mockupImageWrapper}>
                                    <Image
                                        src={currentData.image}
                                        alt={`${currentData.label} Screen Mockups`}
                                        width={450}
                                        height={420}
                                        className="img-fluid"
                                        priority
                                    />
                                </div>
                            </div>

                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}