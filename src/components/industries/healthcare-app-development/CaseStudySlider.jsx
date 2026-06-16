"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/effect-fade';
import styles from './CaseStudySlider.module.css';

const Counter = ({ value, suffix }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

    useEffect(() => {
        if (isInView) {
            const numericValue = parseInt(value, 10);
            const controls = animate(count, numericValue, { duration: 2, ease: "easeOut" });
            return controls.stop;
        }
    }, [isInView, value, count]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
};

const caseStudies = [
    {
        id: 1,
        title: 'DoctApp',
        desc: 'Shifaam is a telehealth app that makes access to healthcare easy for all. This app product offers remote and physical doctor consultations for patients. Moreover, they can use it to book lab tests and prescription delivery purposes as well.',
        image: '/industries/healthcare-app-development/doctapp.png',
        stats: [
            { label: 'Traffic', value: '10', suffix: 'X' },
            { label: 'Calls', value: '15', suffix: 'X' },
            { label: 'Customer', value: '20', suffix: 'X' },
            { label: 'Downloaded', value: '30', suffix: 'X' }
        ],
        platforms: { ios: true, android: true },
        link: '#'
    },
    {
        id: 2,
        title: 'MedTech Solution',
        desc: 'An innovative healthcare application engineered to streamline clinic workflows and automate electronic health records (EHR). Patients can instantly synchronize wearable vitals data directly with active medical registries.',
        image: '/industries/healthcare-app-development/doctapp.png',
        stats: [
            { label: 'Efficiency', value: '12', suffix: 'X' },
            { label: 'Uptime', value: '99', suffix: '%' },
            { label: 'Retention', value: '40', suffix: 'X' },
            { label: 'Active Users', value: '50', suffix: 'K' }
        ],
        platforms: { ios: true, android: true },
        link: '#'
    },
    {
        id: 3,
        title: 'CareSync App',
        desc: 'A customized elder-care platform offering continuous real-time response monitoring, dynamic automated drug alerts, and direct emergency-room pipelines designed exclusively for cross-platform devices.',
        image: '/industries/healthcare-app-development/doctapp.png',
        stats: [
            { label: 'Response', value: '8', suffix: 'X' },
            { label: 'Safety', value: '18', suffix: 'X' },
            { label: 'Adoption', value: '25', suffix: 'X' },
            { label: 'Secure Logs', value: '100', suffix: '%' }
        ],
        platforms: { ios: true, android: true },
        link: '#'
    }
];

export default function CaseStudySlider() {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const totalSlides = caseStudies.length;

    const progressPercent = ((activeIndex + 1) / totalSlides) * 100;

    return (
        <section className={styles.sliderSection}>
            <div className={styles.constantBgCircleWrapper}>
                <div className={styles.spinningCircle}></div>
            </div>

            <div className="container position-relative">
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect={'fade'}
                    fadeEffect={{ crossFade: true }}
                    slidesPerView={1}
                    loop={false}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    onSwiper={setSwiperInstance}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    className={styles.swiperContainer}
                >
                    {caseStudies.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="row align-items-end">

                                <div className="col-lg-6 col-md-12 position-relative">
                                    <div className={styles.imageFrameWrapper}>
                                        <Image
                                            src={slide.image}
                                            alt={slide.title}
                                            width={596}
                                            height={563}
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12 text-white">
                                    <div className={styles.contentBlock}>
                                        <h2 className={styles.slideTitle}>{slide.title}</h2>
                                        <p className={`${styles.slideDesc} scroll_block`}>{slide.desc}</p>

                                        <div className={styles.statsContainer}>
                                            {slide.stats.map((stat, idx) => (
                                                <div key={idx} className={styles.statBox}>
                                                    <div className={styles.statNumber}>
                                                        <Counter value={stat.value} suffix={stat.suffix} />
                                                    </div>
                                                    <div className={styles.statLabel}>{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className={styles.availabilityRow}>
                                            <span className={styles.availText}>Available on :</span>
                                            {slide.platforms.ios && (
                                                <Image src="/industries/healthcare-app-development/apple-icon.png" alt="iOS" width={18} height={19} />
                                            )}
                                            {slide.platforms.android && (
                                                <Image src="/industries/healthcare-app-development/google-play-icon.png" alt="Android" width={18} height={19} />
                                            )}
                                        </div>

                                        <div className={styles.linkWrapper}>
                                            <Link href={slide.link} className={styles.caseStudyLink}>
                                                View Full Case Study
                                                <Image className={styles.arrowUpRight} src="/arrow-icon.png" alt="Next" width={24} height={24} />
                                            </Link>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className={styles.controlsRowWrapper}>
                    <div className={styles.fractionPagination}>
                        <span className={styles.activeNum}>{activeIndex + 1}</span>
                        <div className={styles.progressBarBg}>
                            <motion.div
                                className={styles.progressBarFill}
                                animate={{ width: `${progressPercent}%` }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                            />
                        </div>
                        <span className={styles.totalNum}>{totalSlides}</span>
                    </div>

                    <div className={styles.navButtons}>
                        <button
                            onClick={() => swiperInstance?.slidePrev()}
                            className={`${styles.navBtn} ${styles.prevBtn}`}
                            disabled={activeIndex === 0}
                            aria-label="Previous case study"
                        >
                            <Image src="/arrow-icon.png" alt="Prev" width={24} height={24} />
                        </button>
                        <button
                            onClick={() => swiperInstance?.slideNext()}
                            className={`${styles.navBtn} ${styles.nextBtn}`}
                            disabled={activeIndex === totalSlides - 1}
                            aria-label="Next case study"
                        >
                            <Image src="/arrow-icon.png" alt="Next" width={24} height={24} />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}