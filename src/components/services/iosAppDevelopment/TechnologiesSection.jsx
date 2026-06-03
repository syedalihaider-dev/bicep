"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './TechnologiesSection.module.css';

const tabs = ["Mobile App", "AI", "Frontend", "Backend", "DevOps", "Microsoft"];

const technologiesData = {
    "Mobile App": [
        "/technologies/mobile-app/01.png",
        "/technologies/mobile-app/02.png",
        "/technologies/mobile-app/03.png",
        "/technologies/mobile-app/04.png",
        "/technologies/mobile-app/05.png",
        "/technologies/mobile-app/06.png",
        "/technologies/mobile-app/07.png",
        "/technologies/mobile-app/08.png",
    ],
    "AI": [],
    "Frontend": [],
    "Backend": [],
    "DevOps": [],
    "Microsoft": []
};

const TechnologiesSection = () => {
    const [activeTab, setActiveTab] = useState("Mobile App");
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const activeImages = technologiesData[activeTab] || [];

    return (
        <section className={styles.technologiesSection}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                        <h2 className={styles.heading}>
                            Get Solutions Built with the Latest<br />
                            Robust Technologies
                        </h2>
                        <p className={styles.subheading}>
                            At Bicep, we leverage AI, machine learning, and emerging technologies to build scalable solutions that give your business a competitive advantage. Our team's diverse technical expertise sets us apart from others in the market.
                        </p>
                    </div>
                </div>

                <div className={styles.tabsWrapper}>
                    <div className={styles.tabsContainer}>
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                className={`${styles.tabButton} ${activeTab === tab ? styles.activeTab : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.imagesContainer}>
                    {activeImages.length > 0 ? (
                        <>
                            {isMobile ? (
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={2.5}
                                    breakpoints={{
                                        0: { slidesPerView: 2, spaceBetween: 15 },
                                        576: { slidesPerView: 3, spaceBetween: 20 },
                                        768: { slidesPerView: 4, spaceBetween: 20 }
                                    }}
                                    className={styles.swiperSlider}
                                >
                                    {activeImages.map((src, index) => (
                                        <SwiperSlide key={index}>
                                            <div className={styles.imageBox}>
                                                <Image
                                                    src={src}
                                                    alt={`Technology ${index + 1}`}
                                                    width={122}
                                                    height={135}
                                                    className={styles.techImage}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            ) : (
                                <div className={styles.desktopGrid}>
                                    {activeImages.map((src, index) => (
                                        <div className={styles.imageBox} key={index}>
                                            <Image
                                                src={src}
                                                alt={`Technology ${index + 1}`}
                                                width={122}
                                                height={135}
                                                className={styles.techImage}
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center mt-5 text-muted">
                            <p>More assets coming soon for {activeTab}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TechnologiesSection;
