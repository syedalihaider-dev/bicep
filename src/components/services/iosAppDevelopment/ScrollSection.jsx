"use client"

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './ScrollSection.module.css';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const contentData = [
    {
        title: "Designed for Apple Standards",
        description: "Every pixel, animation, and interaction follows Apple's Human Interface Guidelines."
    },
    {
        title: "Built for Performance & Scale",
        description: "Optimized code that handles millions of users without breaking a sweat."
    },
    {
        title: "Crafted for Real Users",
        description: "Intuitive interfaces that users love, backed by data and real-world testing."
    },
    {
        title: "Seamless Integrations",
        description: "Connecting your app seamlessly with third-party APIs and internal databases."
    },
    {
        title: "End-to-End Security",
        description: "Robust security protocols keeping your data safe against emerging threats."
    },
    {
        title: "App Store Success",
        description: "Guidance through the App Store submission process ensuring a smooth launch."
    }
];

const ScrollSection = () => {
    const sectionRef = useRef(null);
    const rightContentRef = useRef(null);
    const boxRefs = useRef([]);
    boxRefs.current = [];

    const addToRefs = (el) => {
        if (el && !boxRefs.current.includes(el)) {
            boxRefs.current.push(el);
        }
    };

    useEffect(() => {
        // Only run animation on desktop
        if (window.innerWidth < 992) return;

        let ctx = gsap.context(() => {
            const boxes = boxRefs.current;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=3000",
                    pin: true,
                    scrub: 1,
                }
            });

            tl.to(rightContentRef.current, {
                y: () => -(rightContentRef.current.scrollHeight - window.innerHeight * 0.4),
                ease: "none",
                duration: boxes.length
            }, 0);

            boxes.forEach((box, i) => {
                tl.from(box, {
                    opacity: 0.1,
                    y: 100,
                    duration: 1,
                    ease: "power2.out"
                }, i);

                if (i < boxes.length - 1) {
                    tl.to(box, {
                        opacity: 0.2,
                        duration: 1,
                        ease: "power2.inOut"
                    }, i + 1);
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className={styles.scrollSection} ref={sectionRef}>
            <div className="container h-100">
                <div className="row h-100 align-items-end">
                    <div className="col-lg-6">
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/services/ios-app-development/ios-apple-mobile.png"
                                alt="iOS Apple Mobile"
                                width={543}
                                height={811}
                                className={styles.mobileImage}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 h-100">
                        <div className={styles.rightContentWrapper}>
                            <div className={styles.rightContent} ref={rightContentRef}>
                                {contentData.map((item, index) => (
                                    <div
                                        className={styles.contentBox}
                                        key={index}
                                        ref={addToRefs}
                                    >
                                        <div className={styles.orangeLine}></div>
                                        <h3 className={styles.title}>{item.title}</h3>
                                        <p className={styles.description}>{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScrollSection;
