import React from 'react';
import Image from 'next/image';
import CustomButton from '@/components/CustomButton';
import styles from './FocusSection.module.css';

const FocusSection = () => {
    return (
        <section className={styles.focusSection}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className={styles.imageWrapper}>
                            <Image 
                                src="/services/ios-app-development/mobile-window.png" 
                                alt="iOS App Development Process" 
                                width={600} 
                                height={700} 
                                className={styles.mainImage}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={styles.contentWrapper}>
                            <div className={styles.subHeading}>
                                <span className={styles.dot}></span>
                                iOS App Development
                            </div>
                            <h2 className={styles.heading}>
                                We focus on building apps that last, perform, and evolve over time.
                            </h2>
                            <p className={styles.description}>
                                We collaborate closely with startups and enterprises to turn ideas into polished, high-performing mobile applications. Our process combines intuitive UX, clean code, and Apple-first best practices to create apps that are smooth, scalable, and user-friendly. With a strong focus on performance and design quality, we ensure your product stands out in a competitive market and delivers a seamless user experience.
                            </p>
                            <CustomButton className={styles.knowMoreBtn}>
                                Know More About Us
                            </CustomButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FocusSection;
