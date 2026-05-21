"use client";
import React from 'react';
import styles from './ServicesSection.module.css';
import Image from 'next/image';
import CustomButton from '../CustomButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ServicesSection = () => {
    const services = [
        {
            title: "Android App Development",
            desc: "We build high-performance, feature-rich Android applications that provide seamless user experiences across all devices.",
            icon: "/android-app-icon.png",
            bg: "/android-app-bg.png"
        },
        {
            title: "iOS App Development",
            desc: "As a leading iOS app development company, we specialize in creating high-performance iPhone and iPad applications that reflect Apple's quality.",
            icon: "/ios-app-icon.png",
            bg: "/ios-app-bg.png"
        },
        {
            title: "React Native App Development",
            desc: "Leverage cross-platform development with React Native to reach both iOS and Android users with a single codebase and native performance.",
            icon: "/react-native-app-icon.png",
            bg: "/react-native-app-bg.png"
        }
    ];

    return (
        <section className={styles.servicesSec}>
            <div className="container">
                <div className={styles.header}>
                    <div className="subHeading" style={{ justifyContent: 'center' }}>
                        <div className="dot"></div>
                        Our Services
                    </div>
                    <h2 className={styles.heading}>High-End Mobile App <br />Development for Modern Brands</h2>
                    <p className={styles.desc}>
                        We design and develop mobile applications tailored to your business needs,
                        ensuring performance, scalability, and reliability.
                    </p>
                </div>

                <div className={styles.sliderContainer}>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            992: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 2,
                            }
                        }}
                    >
                        {services.map((service, index) => (
                            <SwiperSlide key={index}>
                                <div className={styles.serviceBox}>
                                    <Image
                                        src={service.bg}
                                        width={376}
                                        height={429}
                                        alt={service.title}
                                        className={styles.bgImage}
                                    />
                                    <div className={styles.overlay}></div>
                                    <div className={styles.content}>
                                        <div className={styles.iconWrapper}>
                                            <Image
                                                src={service.icon}
                                                width={40}
                                                height={40}
                                                alt="icon"
                                            />
                                        </div>
                                        <h3 className={styles.boxTitle}>{service.title}</h3>
                                        <p className={`${styles.boxDesc} scroll_block`}>{service.desc}</p>
                                        <div className={styles.readMore}>
                                            Read More
                                            <Image
                                                src="/arrow-right.png"
                                                width={14}
                                                height={14}
                                                alt="arrow"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="combo_btn">
                    <CustomButton>
                        View All Services
                    </CustomButton>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
