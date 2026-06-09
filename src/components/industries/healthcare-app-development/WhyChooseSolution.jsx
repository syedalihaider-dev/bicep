"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './WhyChooseSolution.module.css';

const featuresData = [
    {
        id: 1,
        icon: '/industries/healthcare-app-development/consultations-01.png',
        title: 'Maximum Convenience',
        description: 'Around 51% of users prefer health apps due to long wait times and delayed appointments. To overcome challenges like time, distance, and scheduling, building apps similar to MyChart is becoming essential.',
    },
    {
        id: 2,
        icon: '/industries/healthcare-app-development/consultations-02.png',
        title: 'Lower Operations Costs',
        description: 'Healthcare providers often spend heavily on facilities and staffing. With Bicep’s virtual consultation apps, you can reduce the need for physical infrastructure and cut down on ongoing operational costs.',
    },
    {
        id: 3,
        icon: '/industries/healthcare-app-development/consultations-03.png',
        title: 'Successful Treatment',
        description: 'Interestingly, mobile health apps are often delivering more accurate diagnoses compared to traditional visits. This is driven by smart features like AI-powered reminders and medication alerts that improve consistency and patient care.',
    },
    {
        id: 4,
        icon: '/industries/healthcare-app-development/consultations-04.png',
        title: 'Lucrative Market',
        description: 'The healthcare technology market holds significant growth potential and is projected to reach $1070.58 billion. Along with this, increasing health awareness among consumers is creating strong opportunities for higher ROI.',
    },
];

export default function HealthcareWhyTeladoc() {
    // Stagger sequence effect for cards appearing on scroll
    const gridContainerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.12 }
        }
    };

    const singleCardVariants = {
        hidden: { opacity: 0, y: 35 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className={styles.whySection}>
            <div className="container">

                {/* Header Block */}
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-lg-10 col-md-11">
                        <h2 className={styles.sectionTitle}>
                            Why Should You Get a Healthcare <br /> App Like Teladoc?
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Teladoc Health has established a strong global footprint, serving over 50 million users across 175+ countries. Whether it’s medical consultations, mental health support, or accurate diagnoses, a dedicated healthcare app makes these services easily accessible.
                        </p>
                    </div>
                </div>

                {/* 2x2 Grid Cards System */}
                <motion.div
                    className="row g-4"
                    variants={gridContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {featuresData.map((feature) => (
                        <div className="col-lg-6 col-md-12" key={feature.id}>
                            <motion.div
                                className={styles.featureCard}
                                variants={singleCardVariants}
                                whileHover={{
                                    y: -8,
                                    boxShadow: "0 20px 35px rgba(0, 0, 0, 0.05)",
                                    borderColor: "#cbd5e1"
                                }}
                            >
                                {/* Fixed container matching explicit dimension slots */}
                                <div className={styles.iconBox}>
                                    <Image
                                        src={feature.icon}
                                        alt={feature.title}
                                        width={80}  /* Safe baseline wrapper bounding size max width */
                                        height={68} /* Safe height alignment matching your 68px scale */
                                        className="img-fluid object-contain"
                                    />
                                </div>
                                <h3 className={styles.cardHeading}>{feature.title}</h3>
                                <p className={styles.cardParagraph}>{feature.description}</p>
                            </motion.div>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}