"use client";
import React, { useState } from 'react';
import styles from './PricingCards.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import CustomButton from '../CustomButton';

const PricingCards = () => {
    const [isAnnual, setIsAnnual] = useState(false);

    const plans = [
        {
            name: "Starter",
            description: "Ideal for small projects",
            monthlyPrice: 2000,
            annualPrice: 1700,
            features: [
                { text: "All professional features +", isBlue: true },
                { text: "Enterprise security suite" },
                { text: "Single Sign-On (SSO)" },
                { text: "Custom contract terms" },
                { text: "Dedicated phone support" },
                { text: "Custom integration support" },
                { text: "Compliance tools" }
            ],
            isPopular: false,
            btnText: "Get Started"
        },
        {
            name: "Professional",
            description: "For freelancers and startups",
            monthlyPrice: 4500,
            annualPrice: 3825,
            features: [
                { text: "All starter features +", isBlue: true },
                { text: "Up to 5 user accounts" },
                { text: "Team collaboration tools" },
                { text: "Custom dashboards" },
                { text: "Multiple data export formats" },
                { text: "Basic custom integrations" }
            ],
            isPopular: true,
            btnText: "Get Started",
            subText: "or contact sales"
        },
        {
            name: "Organization",
            description: "For fast-growing businesses",
            monthlyPrice: 8000,
            annualPrice: 6800,
            features: [
                { text: "All professional features +", isBlue: true },
                { text: "Enterprise security suite" },
                { text: "Single Sign-On (SSO)" },
                { text: "Custom contract terms" },
                { text: "Dedicated phone support" },
                { text: "Custom integration support" },
                { text: "Compliance tools" }
            ],
            isPopular: false,
            btnText: "Get Started"
        }
    ];

    const CheckIconBlue = () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#0E76FD" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
    );

    const CheckIconOutline = () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
    );

    return (
        <section className={styles.pricingSec}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.heading}>Plans & Subscriptions</h2>
                    <div className={styles.toggleWrapper}>
                        <div className={styles.toggleBg}>
                            <div 
                                className={`${styles.toggleOption} ${!isAnnual ? styles.active : ''}`}
                                onClick={() => setIsAnnual(false)}
                            >
                                Monthly
                            </div>
                            <div 
                                className={`${styles.toggleOption} ${isAnnual ? styles.active : ''}`}
                                onClick={() => setIsAnnual(true)}
                            >
                                Annual
                            </div>
                        </div>
                        <p className={styles.discountText}>-15% off on annual payments</p>
                    </div>
                </div>

                <div className={styles.desktopGrid}>
                    {plans.map((plan, index) => (
                        <div key={index} className={`${styles.cardWrapper} ${plan.isPopular ? styles.popularWrapper : ''}`}>
                            {plan.isPopular && <div className={styles.popularBadge}>MOST POPULAR PLAN</div>}
                            <div className={`${styles.card} ${plan.isPopular ? styles.popularCard : ''}`}>
                                
                                <div className={styles.cardHeader}>
                                    <h3 className={styles.planName}>{plan.name}</h3>
                                    <p className={styles.planDesc}>{plan.description}</p>
                                    <div className={styles.priceContainer}>
                                        <span className={styles.currency}>$</span>
                                        <span className={styles.price}>{isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                                        <span className={styles.period}>/per user</span>
                                    </div>
                                </div>

                                <div className={styles.featuresList}>
                                    {plan.features.map((feature, idx) => (
                                        <div key={idx} className={styles.featureItem}>
                                            <div className={styles.iconBox}>
                                                {feature.isBlue ? <CheckIconBlue /> : <CheckIconOutline />}
                                            </div>
                                            <span className={`${styles.featureText} ${feature.isBlue ? styles.featureTextBold : ''}`}>
                                                {feature.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className={styles.cardFooter}>
                                    <button className={`${styles.getStartedBtn} ${plan.isPopular ? styles.btnOrange : styles.btnDark}`}>
                                        {plan.btnText}
                                    </button>
                                    {plan.subText && (
                                        <p className={styles.subText}>
                                            or <a href="/contact" className={styles.contactLink}>contact sales</a>
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.mobileSlider}>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            }
                        }}
                    >
                        {plans.map((plan, index) => (
                            <SwiperSlide key={index}>
                                <div className={`${styles.cardWrapper} ${plan.isPopular ? styles.popularWrapper : ''}`}>
                                    {plan.isPopular && <div className={styles.popularBadge}>MOST POPULAR PLAN</div>}
                                    <div className={`${styles.card} ${plan.isPopular ? styles.popularCard : ''}`}>
                                        
                                        <div className={styles.cardHeader}>
                                            <h3 className={styles.planName}>{plan.name}</h3>
                                            <p className={styles.planDesc}>{plan.description}</p>
                                            <div className={styles.priceContainer}>
                                                <span className={styles.currency}>$</span>
                                                <span className={styles.price}>{isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                                                <span className={styles.period}>/per user</span>
                                            </div>
                                        </div>

                                        <div className={styles.featuresList}>
                                            {plan.features.map((feature, idx) => (
                                                <div key={idx} className={styles.featureItem}>
                                                    <div className={styles.iconBox}>
                                                        {feature.isBlue ? <CheckIconBlue /> : <CheckIconOutline />}
                                                    </div>
                                                    <span className={`${styles.featureText} ${feature.isBlue ? styles.featureTextBold : ''}`}>
                                                        {feature.text}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className={styles.cardFooter}>
                                            <button className={`${styles.getStartedBtn} ${plan.isPopular ? styles.btnOrange : styles.btnDark}`}>
                                                {plan.btnText}
                                            </button>
                                            {plan.subText && (
                                                <p className={styles.subText}>
                                                    or <a href="/contact" className={styles.contactLink}>contact sales</a>
                                                </p>
                                            )}
                                        </div>
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

export default PricingCards;
