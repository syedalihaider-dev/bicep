import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CustomButton from '../CustomButton';
import styles from './BannerSection.module.css';

const BannerSection = () => {
    return (
        <section className={styles.aboutBanner}>
            <Image
                src="/banner.png"
                alt="Banner Background Image"
                fill
                className={styles.bannerImage}
            />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className={styles.content}>
                            <h1 className={styles.heading}>
                                Step Into Scalable Growth<br />and Modern Innovation
                            </h1>
                            <p className={styles.description}>
                                Bicep Provides Flexible Mobile App Pricing With Tailored Packages For Every Stage Of Growth. Our Custom Pricing Model Is Based On Your App's Features, Design, And Platform, Ensuring A Scalable Solution That Delivers Value Without Exceeding Your Budget.
                            </p>
                            <div className={styles.btnGroup}>
                                <CustomButton className={styles.ctaBtn}>
                                    Free Consultation
                                </CustomButton>
                                <a href="tel:123456789" className={styles.phoneLink}>
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className={styles.phoneIcon}
                                    >
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                    <span className={styles.phoneNumber}>123-456-789</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerSection;
