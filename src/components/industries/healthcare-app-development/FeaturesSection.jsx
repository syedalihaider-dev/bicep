'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import styles from './FeaturesSection.module.css';

// Counter Component for Numbers
const Counter = ({ value, suffix = "" }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { stiffness: 50, damping: 25 });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (inView) {
            motionValue.set(value);
        }
    }, [inView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            // Decimal values check karne k liye (like 99.9 or 4.9)
            if (value % 1 === 0) {
                setDisplayValue(Math.floor(latest));
            } else {
                setDisplayValue(latest.toFixed(1));
            }
        });
    }, [springValue, value]);

    return <span ref={ref}>{displayValue}{suffix}</span>;
};

const FeaturesSection = () => {
    // Left content elements ke liye standard fade-up animation variants
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className={styles.featuresSection}>
            <div className="container">
                <div className="row align-items-center">

                    {/* Left Column - Content & Stats */}
                    <div className="col-lg-6">
                        <motion.div
                            className={styles.contentWrapper}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ staggerChildren: 0.15 }} // Elements ek k baad aik smooth ayenge
                        >
                            <motion.h2 variants={fadeUp} className={styles.heading}>
                                Transform Healthcare with Innovative Healthcare App Solutions
                            </motion.h2>

                            <motion.p variants={fadeUp} className={styles.description}>
                                The healthcare industry is rapidly evolving with digital innovation transforming
                                patient care. At Bicep, we build secure, user-friendly, and scalable healthcare
                                applications for hospitals, medical professionals, and startups.
                            </motion.p>

                            <motion.p variants={fadeUp} className={styles.description}>
                                Our solutions follow global standards like HIPAA, GDPR, and HITECH, ensuring
                                data security and compliance. From mHealth apps to AI-powered diagnostics
                                and remote monitoring, we deliver smart, future-ready healthcare solutions
                                across mobile and web platforms.
                            </motion.p>

                            {/* Stats/Counter Grid */}
                            <motion.div variants={fadeUp} className={styles.statsGrid}>
                                <div className={styles.statBox}>
                                    <h3 className={styles.statNumber}>
                                        <Counter value={90} suffix=" %" />
                                    </h3>
                                    <p className={styles.statLabel}>Work Efficiency</p>
                                </div>

                                <div className={styles.statBox}>
                                    <h3 className={styles.statNumber}>
                                        <Counter value={60} suffix=" %" />
                                    </h3>
                                    <p className={styles.statLabel}>Cost Reduction</p>
                                </div>

                                <div className={styles.statBox}>
                                    <h3 className={styles.statNumber}>
                                        <Counter value={99.9} suffix=" %" />
                                    </h3>
                                    <p className={styles.statLabel}>System Uptime</p>
                                </div>

                                <div className={styles.statBox}>
                                    <h3 className={styles.statNumber}>
                                        <Counter value={4.9} suffix="/5" />
                                    </h3>
                                    <p className={styles.statLabel}>Client Rating</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="col-lg-6">
                        <motion.div
                            className={styles.imageWrapper}
                            initial={{ opacity: 0, x: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className={styles.mockupContainer}>
                                <Image
                                    src="/industries/healthcare-app-development/solution.png"
                                    alt="Healthcare App Solution Mockup"
                                    width={454}
                                    height={538}
                                    className={styles.mainImage}
                                />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;