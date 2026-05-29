"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import styles from './OurTeamSection.module.css';
import 'swiper/css';

const OurTeamSection = () => {
    const team = [
        {
            name: "Miley Jepsen",
            designation: "Lead Architect",
            image: "/about-us/miley-jepsen.png"
        },
        {
            name: "Elijah Manning",
            designation: "Project Manager",
            image: "/about-us/elijah-manning.png"
        },
        {
            name: "Ethan Slade",
            designation: "Project Manager",
            image: "/about-us/ethan-slade.png"
        },
        {
            name: "Lana Delgreco",
            designation: "Project Manager",
            image: "/about-us/lana-delgreco.png"
        }
    ];

    return (
        <section className={styles.teamSec}>
            <div className="container">
                <div className={styles.header}>
                    <div className="subHeading justify-content-center">
                        <div className="dot"></div>
                        Our Team
                    </div>
                    <h2 className={styles.heading}>
                        Meet the Minds Behind the Magic
                    </h2>
                </div>

                {/* Desktop Grid Layout */}
                <div className={styles.grid}>
                    {team.map((member, index) => (
                        <div key={index} className={styles.teamCard}>
                            <div className={styles.cardHeader}>
                                <h4 className={styles.memberName}>{member.name}</h4>
                                <p className={styles.memberDesignation}>{member.designation}</p>
                            </div>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={member.image}
                                    width={267}
                                    height={279}
                                    alt={member.name}
                                    className={styles.memberImage}
                                />
                            </div>
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
                                slidesPerView: 1.5,
                            },
                            768: {
                                slidesPerView: 2.5,
                            }
                        }}
                    >
                        {team.map((member, index) => (
                            <SwiperSlide key={index}>
                                <div className={styles.teamCard}>
                                    <div className={styles.cardHeader}>
                                        <h4 className={styles.memberName}>{member.name}</h4>
                                        <p className={styles.memberDesignation}>{member.designation}</p>
                                    </div>
                                    <div className={styles.imageWrapper}>
                                        <Image
                                            src={member.image}
                                            width={267}
                                            height={279}
                                            alt={member.name}
                                            className={styles.memberImage}
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default OurTeamSection;
