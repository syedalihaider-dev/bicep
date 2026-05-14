"use client"
import React from 'react'
import Image from 'next/image'
import styles from './CTASection.module.css'

const CTASection = () => {
    return (
        <section className={`${styles.ctaSection} sec_padding`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className={styles.ctaContent}>
                            <div className="subHeading">
                                <span className="dot"></span> BicepTech
                            </div>
                            <h2 className={styles.title}>
                                Not Amateurs But<br /> Experts – Let&apos;s<br /> Build Your Next Big Idea
                            </h2>
                            <p className={styles.description}>
                                We work closely with teams to turn ideas into products that are
                                fast, reliable, and built with long-term scalability in mind. Every
                                project is approached with clear thinking, strong design
                                fundamentals, and clean engineering practices.
                            </p>
                            <div className={styles.btnGroup}>
                                <button className="btn btn-primary-custom">Free Consultation</button>
                                <div className={styles.contactInfo}>
                                    <span className={styles.callIconWrapper}>
                                        <Image src="/call-calling.png" alt="Call" width={24} height={24} className={styles.callIcon} />
                                    </span>
                                    <span className={styles.phoneNumber}>123-456-789</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={styles.imageWrapper}>
                            <div className={styles.callingAnimationOverlay}>
                                <div className={styles.ripple}></div>
                                <div className={styles.ripple}></div>
                                <div className={styles.ripple}></div>
                            </div>
                            <Image
                                src="/mobile-phone.png"
                                alt="Mobile App"
                                width={257}
                                height={513}
                                className={styles.phoneImage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTASection
