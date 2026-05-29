"use client";
import React, { useState } from 'react';
import styles from './TestimonialsSection.module.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const TestimonialsSection = () => {
    const [activeVideoUrl, setActiveVideoUrl] = useState(null);

    const testimonials = [
        {
            name: "Miss Melsa",
            designation: "DIRECTOR",
            image: "/women-01.png",
            video: "/video/banner-bg.mp4"
        },
        {
            name: "Miss Keylor",
            designation: "AVP",
            image: "/men-01.png",
            video: "/video/testimonial-2.mp4"
        },
        {
            name: "Lana Gascoine",
            designation: "CEO",
            image: "/men-02.png",
            video: "/video/testimonial-3.mp4"
        },
        {
            name: "Ali Connors",
            designation: "MANAGING DIRECTOR",
            image: "/men-03.png",
            video: "/video/testimonial-4.mp4"
        }
    ];

    const openVideo = (videoUrl) => {
        setActiveVideoUrl(videoUrl);
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    };

    const closeVideo = () => {
        setActiveVideoUrl(null);
        // Restore body scroll
        document.body.style.overflow = 'unset';
    };

    return (
        <section className={styles.testimonialsSec}>
            <div className="container">
                <div className={styles.header}>
                    <div className="subHeading" style={{ justifyContent: 'center' }}>
                        <div className="dot"></div>
                        What Our Client Say
                    </div>
                    <h2 className={styles.heading}>Real Stories. Real Impact</h2>
                </div>
            </div>

            <div className="container">
                <Swiper
                    spaceBetween={25}
                    slidesPerView={1}
                    breakpoints={{
                        992: {
                            slidesPerView: 4,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        420: {
                            slidesPerView: 2,
                        },
                        320: {
                            slidesPerView: 1,
                        }
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.testimonialCard}>
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    fill
                                    className={styles.bgImage}
                                />
                                <div className={styles.overlay}>
                                    <h4 className={styles.name}>{testimonial.name}</h4>
                                    <p className={styles.designation}>{testimonial.designation}</p>
                                </div>
                                <div className={styles.playBtn} onClick={() => openVideo(testimonial.video)}>
                                    <Image
                                        src="/play-btn.png"
                                        alt="Play"
                                        width={17}
                                        height={21}
                                        className={styles.playIcon}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {activeVideoUrl && (
                <div className={styles.videoModal} onClick={closeVideo}>
                    <div className={styles.videoContainer} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={closeVideo}>&times;</button>
                        <video
                            className={styles.videoPlayer}
                            src={activeVideoUrl}
                            controls
                            autoPlay
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default TestimonialsSection;
