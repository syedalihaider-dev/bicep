"use client";
import React from 'react';
import Image from 'next/image';
import styles from './AwardsSection.module.css';

const AwardsSection = () => {
    // Array of award images 1 to 9
    const awards = Array.from({ length: 9 }, (_, i) => `/awards/award-0${i + 1}.png`);
    // Duplicate for continuous marquee effect
    const marqueeItems = [...awards, ...awards];

    return (
        <section className={styles.awardsSec}>
            <div className="container">
                <div className={styles.header}>
                    <div className="subHeading justify-content-center">
                        <div className="dot"></div>
                        Awards
                    </div>
                    <h2 className={styles.heading}>
                        Honored for Innovation,<br />
                        Trusted for Results
                    </h2>
                    <p className={styles.desc}>
                        We're not another dev shop. We're a partner in every sense — invested in<br />
                        your success long after launch day.
                    </p>
                </div>
            </div>

            <div className={styles.marqueeContainer}>
                <div className={styles.marqueeContent}>
                    {marqueeItems.map((imgSrc, index) => (
                        <div key={index} className={styles.awardItem}>
                            <Image
                                src={imgSrc}
                                width={173}
                                height={173}
                                alt={`Award ${index + 1}`}
                                className={styles.awardImage}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AwardsSection;
