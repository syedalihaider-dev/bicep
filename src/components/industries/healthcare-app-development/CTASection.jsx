"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CustomButton from '@/components/CustomButton';
import styles from './CTASection.module.css';

export default function CTASection() {
    return (
        <section className={styles.ctaSection}>
            <div className="container">
                <motion.div
                    className={styles.ctaCard}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <div className={styles.patternOverlay}>
                        <Image
                            src="/industries/healthcare-app-development/cta-bg.png"
                            alt="Grid Background Pattern"
                            fill
                            className={styles.bgPatternImg}
                        />
                    </div>

                    <div className="row">
                        <div className="col-lg-7 col-md-12">
                            <div className={styles.contentLeft}>
                                <h2 className={styles.mainHeading}>
                                    Curious about the cost of <br /> healthcare app development?
                                </h2>
                                <p className={styles.description}>
                                    Looking for a cost estimate? Get in touch with Bicep, and we&apos;ll provide a tailored quote based on your requirements.
                                </p>
                                <div className={styles.btnGroup}>
                                    <CustomButton className={styles.blackCtaBtn}>
                                        Start Building Your App
                                    </CustomButton>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-12 position-relative d-flex justify-content-center justify-content-lg-end">
                            <motion.div
                                className={styles.imageWrapper}
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            >
                                <Image
                                    src="/industries/healthcare-app-development/cta-right.png"
                                    alt="Doctor with calculator and money graphic"
                                    width={389}
                                    height={436}
                                    className={styles.rightImg}
                                />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}