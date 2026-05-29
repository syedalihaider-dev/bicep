"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './MissionSection.module.css';

// Custom CountUp Component
const CountUp = ({ end, duration = 2000, trigger, isDecimal = false }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!trigger) return;

        let startTime = null;
        const startValue = 0;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Easing: easeOutQuad
            const easeProgress = progress * (2 - progress);

            const currentValue = startValue + easeProgress * (end - startValue);

            if (isDecimal) {
                setCount(parseFloat(currentValue.toFixed(1)));
            } else {
                setCount(Math.floor(currentValue));
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animate);
    }, [trigger, end, duration, isDecimal]);

    return <span>{count}</span>;
};

const MissionSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Trigger once and disconnect
                }
            },
            {
                threshold: 0.2, // Trigger when 20% of section is visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const statData = [
        {
            value: 4.8,
            isDecimal: true,
            suffix: "k",
            label: "Job Completed"
        },
        {
            value: 12,
            isDecimal: false,
            suffix: "+",
            label: "Industry Experience"
        },
        {
            value: 2.5,
            isDecimal: true,
            suffix: "k+",
            label: "World wide clients"
        },
        {
            value: 120,
            isDecimal: false,
            suffix: "+",
            label: "Won Awards"
        }
    ];

    return (
        <section className={styles.missionSec} ref={sectionRef}>
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className={styles.content}>
                            <div className="subHeading">
                                <div className="dot"></div>
                                Our Mission
                            </div>
                            <h2 className={styles.heading}>
                                Building Mobile<br /> Experiences That Matter
                            </h2>
                            <p className={styles.desc}>
                                At BicepTech, we don't just develop mobile apps — we build digital products
                                that solve real problems, scale with ambition, and deliver measurable impact.
                                Our focus is simple: combine design thinking, engineering precision, and
                                product strategy to create mobile experiences that users actually love to use.
                                <br /><br />
                                Because we care about outcomes, not just output. We focus on building apps
                                that are fast, scalable, and built for real-world usage — not just portfolios.
                                We partner with you, not just work for you.
                            </p>

                            <div className={styles.countersRow}>
                                {statData.map((stat, index) => (
                                    <div key={index} className={styles.counterItem}>
                                        <div className={styles.counterNumber}>
                                            <CountUp
                                                end={stat.value}
                                                trigger={isVisible}
                                                isDecimal={stat.isDecimal}
                                            />
                                            {stat.suffix}
                                        </div>
                                        <p className={styles.counterLabel}>{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/about-us/bicep-logo.png"
                                width={378}
                                height={535}
                                alt="Bicep Logo Wireframe Design"
                                className={styles.logoImage}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionSection;
