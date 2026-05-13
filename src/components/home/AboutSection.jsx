import React from 'react';
import Image from 'next/image';
import styles from './AboutSection.module.css';
import CustomButton from '../CustomButton';

const AboutSection = () => {
    return (
        <section className={styles.aboutSec}>
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-5">
                        <div className={styles.content}>
                            <div className="subHeading">
                                <div className="dot"></div>
                                About us
                            </div>
                            <h2 className={styles.heading}>
                                We build mobile apps that are designed to last — not just launch.
                            </h2>
                            <p className={styles.desc}>
                                We work closely with teams to turn ideas into products that are fast,
                                reliable, and built with long-term scalability in mind. Every project
                                is approached with clear thinking, strong design fundamentals,
                                and clean engineering practices.
                            </p>
                            <div className="combo_btn">
                                <CustomButton>
                                    Know More About Us
                                </CustomButton>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/about-us-img.png"
                                width={500}
                                height={500}
                                alt="About BICEP"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
