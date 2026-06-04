"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './GlobalPresenceSection.module.css';

const GlobalPresenceSection = () => {
    const locations = [
        {
            city: "CHICAGO",
            image: "/contact/chicago.png",
            theme: "orange",
            address: "141 w jackson blvd ste 300 a, chicago, il 60604, united states",
            phone: "+1 (833) 500 6007",
            email: "wearebiceps.com"
        },
        {
            city: "DUBAI",
            image: "/contact/dubai.png",
            theme: "blue",
            address: "office 1402, jbc 3 cluster y, jumeirah lake towers dubai uae",
            phone: "+1 (833) 500 6007",
            email: "wearebiceps.com"
        },
        {
            city: "HOUSTON",
            image: "/contact/houston.png",
            theme: "blue",
            address: "2800 post oak blvd ste 4100, houston, tx 77056, united states",
            phone: "+1 (833) 500 6007",
            email: "wearebiceps.com"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    // SVGs for the icons to match the design (white color)
    const LocationIcon = () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
        </svg>
    );

    const PhoneIcon = () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
    );

    const MailIcon = () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
    );

    return (
        <section className={styles.globalPresenceSec}>
            <div className="container">
                <div className={styles.header}>
                    <motion.h2
                        className={styles.heading}
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Our Global Presence
                    </motion.h2>
                </div>

                <motion.div
                    className={styles.gridContainer}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {locations.map((loc, index) => (
                        <motion.div
                            key={index}
                            className={`${styles.locationCard} ${loc.theme === 'orange' ? styles.orangeTheme : styles.blueTheme}`}
                            variants={cardVariants}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={loc.image}
                                    alt={loc.city}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className={styles.imageOverlay}></div>
                                <h3 className={styles.cityTitle}>{loc.city}</h3>
                            </div>

                            <div className={styles.cardDetails}>
                                <div className={styles.infoRow}>
                                    <div className={styles.iconBox}><LocationIcon /></div>
                                    <div className={styles.infoContent}>
                                        <h4 className={styles.infoLabel}>Location</h4>
                                        <p className={styles.infoValue}>{loc.address}</p>
                                    </div>
                                </div>

                                <div className={styles.infoRow}>
                                    <div className={styles.iconBox}><PhoneIcon /></div>
                                    <div className={styles.infoContent}>
                                        <h4 className={styles.infoLabel}>Contact Us</h4>
                                        <p className={styles.infoValue}>{loc.phone}</p>
                                    </div>
                                </div>

                                <div className={styles.infoRow}>
                                    <div className={styles.iconBox}><MailIcon /></div>
                                    <div className={styles.infoContent}>
                                        <h4 className={styles.infoLabel}>Email Us</h4>
                                        <p className={styles.infoValue}>{loc.email}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default GlobalPresenceSection;
