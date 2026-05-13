import React from 'react';
import styles from './BannerSection.module.css';
import CustomButton from '../CustomButton';

const BannerSection = () => {
    return (
        <section className={styles.banner}>
            <video
                autoPlay
                muted
                loop
                playsInline
                className={styles.videoBackground}
                poster="/banner-bg.png"
            >
                <source src="/video/banner-bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.overlay}></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className={styles.content}>
                            <h1 className={styles.heading}>
                                Build the Right Product. <br />
                                <span className="primary-text">Not Just an App.</span>
                            </h1>
                            <p className={styles.subHeading}>
                                BicepTech designs and develops high-performance iOS and Android apps for startups and growing companies — focused on speed, usability, and long-term scalability.
                            </p>
                            <div className="combo_btn">
                                <CustomButton>
                                    Build Your App Today
                                </CustomButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerSection;
