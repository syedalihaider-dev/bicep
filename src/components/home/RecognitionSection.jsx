"use client";
import React from 'react';
import styles from './RecognitionSection.module.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const RecognitionSection = () => {
    const data = [
        {
            title: "Strategy-First",
            desc: "Every decision aligns with business goals—not just trends.",
            icon: "/strategy.png"
        },
        {
            title: "End-to-End Execution",
            desc: "From idea to launch, everything is handled under one roof.",
            icon: "/execution.png"
        },
        {
            title: "Scalable Solutions",
            desc: "Built to grow with your business without unnecessary costs.",
            icon: "/scalable.png"
        },
        {
            title: "Fast & Reliable Delivery",
            desc: "On-time execution with a strong focus on quality.",
            icon: "/delivery.png"
        }
    ];

    return (
        <section className={styles.Recognition_Sec}>
            <div className="container">
                <div className="subHeading">
                    <div className="dot"></div>
                    Recognition
                </div>
                <h2 className={styles.heading}>Why SMBs Choose BICEP</h2>

                {/* Desktop Grid */}
                <div className={styles.grid}>
                    {data.map((item, index) => (
                        <div key={index} className={styles.box}>
                            <div className={styles.iconWrapper}>
                                <Image
                                    src={item.icon}
                                    width={48}
                                    height={48}
                                    className={styles.icon}
                                    alt={item.title}
                                />
                            </div>
                            <h5 className={styles.boxTitle}>{item.title}</h5>
                            <p className={styles.boxDesc}>{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Mobile/Tablet Slider */}
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
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 2,
                            }
                        }}
                    >
                        {data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className={styles.box}>
                                    <div className={styles.iconWrapper}>
                                        <Image
                                            src={item.icon}
                                            width={48}
                                            height={48}
                                            className={styles.icon}
                                            alt={item.title}
                                        />
                                    </div>
                                    <h3 className={styles.boxTitle}>{item.title}</h3>
                                    <p className={styles.boxDesc}>{item.desc}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default RecognitionSection;
