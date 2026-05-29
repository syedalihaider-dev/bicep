"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import styles from './MissionVisionSection.module.css';
import 'swiper/css';
import 'swiper/css/pagination';

const MissionVisionSection = () => {
    const data = [
        {
            subtitle: "OUR MISSION",
            title: "Empower Ideas with Engineering Excellence",
            desc: "We exist to close the gap between imagination and execution. Our mission is to give every entrepreneur, startup, and enterprise access to world-class mobile development.",
            icon: "/about-us/our-misson-icon.png"
        },
        {
            subtitle: "OUR VISION",
            title: "A Products Built to Last",
            desc: "We envision a future where every great idea gets the product it deserves. Our long-term vision is to be the most trusted digital product partner globally — known not for speed alone, but for building software that outlasts.",
            icon: "/about-us/our-vision-icon.png"
        }
    ];

    return (
        <section className={styles.missionVisionSec}>
            <div className="container">
                <div className={styles.header}>
                    <div className="subHeading justify-content-center">
                        <div className="dot"></div>
                        What Drives Us
                    </div>
                    <h2 className={styles.heading}>Mission & Vision</h2>
                </div>

                <div className={styles.mainContainer}>
                    {/* Left Side: Cards */}
                    <div className={styles.leftContent}>
                        {/* Desktop View */}
                        <div className={styles.desktopCards}>
                            {data.map((item, index) => (
                                <div key={index} className={styles.card}>
                                    <div className={styles.iconWrapper}>
                                        <Image
                                            src={item.icon}
                                            width={55}
                                            height={55}
                                            alt={item.subtitle}
                                            className={styles.icon}
                                        />
                                    </div>
                                    <h4 className={styles.cardSubtitle}>{item.subtitle}</h4>
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                    <p className={styles.cardDesc}>{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Mobile View Slider */}
                        <div className={styles.mobileSlider}>
                            <Swiper
                                modules={[Autoplay, Pagination]}
                                spaceBetween={20}
                                slidesPerView={1}
                                loop={true}
                                pagination={{ clickable: true }}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                            >
                                {data.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className={styles.card}>
                                            <div className={styles.iconWrapper}>
                                                <Image
                                                    src={item.icon}
                                                    width={24}
                                                    height={24}
                                                    alt={item.subtitle}
                                                    className={styles.icon}
                                                />
                                            </div>
                                            <h4 className={styles.cardSubtitle}>{item.subtitle}</h4>
                                            <h3 className={styles.cardTitle}>{item.title}</h3>
                                            <p className={styles.cardDesc}>{item.desc}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    <div className={styles.rightContent}>
                        <Image
                            src="/about-us/our-mission-right-img.png"
                            fill
                            alt="Mission and Vision"
                            className={styles.rightImage}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVisionSection;
