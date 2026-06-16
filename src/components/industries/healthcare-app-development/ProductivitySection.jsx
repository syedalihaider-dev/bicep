"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CustomButton from '@/components/CustomButton';
import styles from './ProductivitySection.module.css';

export default function ProductivitySection() {
    return (
        <section className={styles.productivitySection}>
            <div className={styles.bgWrapper}>
                <Image
                    src="/industries/healthcare-app-development/revenue-mobile-bg.png"
                    alt="Background Stethoscope Shape"
                    fill
                    priority
                    className={styles.bgImage}
                />
            </div>

            <div className="container position-relative">
                <div className="row align-items-end">

                    <div className="col-lg-5 col-md-5">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className={styles.contentWrapper}
                        >
                            <h2 className={styles.mainHeading}>
                                Boost healthcare productivity by up to <span className={styles.highlight}>50%</span> with Bicep.
                            </h2>

                            <p className={styles.description}>
                                At Bicep, we are your trusted partner for medical app development, helping improve patient care while reducing operational costs.
                            </p>

                            <div className={styles.btnGroup}>
                                <CustomButton>
                                    Start Building Your App
                                </CustomButton>
                            </div>
                        </motion.div>
                    </div>

                    <div className="col-lg-7 col-md-7">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                            className={styles.imageContainer}
                        >
                            <Image
                                src="/industries/healthcare-app-development/revenue-mobile-img.png"
                                alt="Bicep Healthcare App Mockups"
                                width={656}
                                height={504}
                                className="img-fluid"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}