"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import styles from './WhatSetsUsApart.module.css';
import 'swiper/css';

const WhatSetsUsApart = () => {
    const data = [
        {
            num: "01",
            title: "Product-First Thinking",
            desc: "We don't start with code. We start with your user, your market, and your goals. Every architecture decision is rooted in product.",
            icon: "/about-us/code.png"
        },
        {
            num: "02",
            title: "Long-Term Reliability",
            desc: "We build apps with scalability and maintainability baked in — not bolted on. Our clients return because they trust us.",
            icon: "/about-us/lock-icon.png"
        },
        {
            num: "03",
            title: "Design That Converts",
            desc: "Aesthetic without function is art. We marry pixel-perfect UI with intuitive UX — creating interfaces users love and that drive results.",
            icon: "/about-us/heart-icon.png"
        },
        {
            num: "04",
            title: "Speed Without Shortcuts",
            desc: "We move fast because we have refined processes, not because we cut corners. Our structured sprints deliver working software on time, every time.",
            icon: "/about-us/flash-icon.png"
        },
        {
            num: "05",
            title: "Dedicated Team Model",
            desc: "You get a dedicated team — not rotating freelancers. Same people, same context, full ownership.",
            icon: "/about-us/team-icon.png"
        },
        {
            num: "06",
            title: "Data-Driven Decisions",
            desc: "We integrate analytics and testing frameworks from day one — because great products aren't built on assumptions.",
            icon: "/about-us/driven.png"
        }
    ];

    return (
        <section className={styles.setsApartSec}>
            <div className="container">
                <div className={styles.header}>
                    <div className="subHeading justify-content-center">
                        <div className="dot"></div>
                        Why Bicep Tech
                    </div>
                    <h2 className={styles.heading}>What Sets Us Apart</h2>
                    <p className={styles.desc}>
                        We're not another dev shop. We're a partner in every sense — invested in your success long after launch day.
                    </p>
                </div>

                {/* Desktop Grid Layout */}
                <div className={styles.grid}>
                    {data.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <span className={styles.cardNumber}>{item.num}</span>
                            <div className={styles.iconWrapper}>
                                <Image
                                    src={item.icon}
                                    width={49}
                                    height={49}
                                    alt={item.title}
                                    className={styles.icon}
                                />
                            </div>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDesc}>{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Mobile Slider Layout */}
                <div className={styles.sliderWrapper}>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            480: {
                                slidesPerView: 1.2,
                            },
                            575: {
                                slidesPerView: 1.5,
                            },
                            768: {
                                slidesPerView: 2,
                            }
                        }}
                    >
                        {data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className={styles.card}>
                                    <span className={styles.cardNumber}>{item.num}</span>
                                    <div className={styles.iconWrapper}>
                                        <Image
                                            src={item.icon}
                                            width={22}
                                            height={22}
                                            alt={item.title}
                                            className={styles.icon}
                                        />
                                    </div>
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                    <p className={styles.cardDesc}>{item.desc}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default WhatSetsUsApart;
