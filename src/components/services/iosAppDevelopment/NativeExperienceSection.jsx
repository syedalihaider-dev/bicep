import React from 'react';
import Image from 'next/image';
import styles from './NativeExperienceSection.module.css';

const featuresData = [
    {
        title: "Fluid animations",
        description: "120fps smooth transitions",
        icon: "/services/ios-app-development/fluid-animations.png"
    },
    {
        title: "Native gestures",
        description: "Swipe, pinch, haptic feedback",
        icon: "/services/ios-app-development/native-gestures.png"
    },
    {
        title: "Lightning-fast performance",
        description: "Optimized for all devices",
        icon: "/services/ios-app-development/fast-performance.png"
    },
    {
        title: "Clean Apple-style UI",
        description: "Beautiful, minimal interfaces",
        icon: "/services/ios-app-development/clean-apple-style-ui.png"
    },
    {
        title: "Secure architecture",
        description: "End-to-end encryption",
        icon: "/services/ios-app-development/secure-architecture.png"
    }
];

const NativeExperienceSection = () => {
    return (
        <section className={styles.nativeSection}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className={styles.contentWrapper}>
                            <div className={styles.subHeading}>
                                <span className={styles.dot}></span>
                                Native Experience
                            </div>
                            <h2 className={styles.heading}>
                                Every Detail Feels Native
                            </h2>
                            <p className={styles.description}>
                                We don't just build apps. We craft experiences that feel like they belong on iOS.
                            </p>

                            <div className={styles.featuresList}>
                                {featuresData.map((feature, index) => (
                                    <div className={styles.featureBox} key={index}>
                                        <div className={styles.iconWrapper}>
                                            <Image
                                                src={feature.icon}
                                                alt={feature.title}
                                                width={48}
                                                height={48}
                                                className={styles.icon}
                                            />
                                        </div>
                                        <div className={styles.featureText}>
                                            <h4>{feature.title}</h4>
                                            <p>{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/services/ios-app-development/native-experience.png"
                                alt="Native iOS Experience"
                                width={682}
                                height={567}
                                className={styles.mainImage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NativeExperienceSection;
