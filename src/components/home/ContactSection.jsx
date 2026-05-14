"use client"
import React from 'react'
import Image from 'next/image'
import styles from './ContactSection.module.css'

const ContactSection = () => {
    return (
        <section className={styles.contactSection}>
            <div className={styles.bgHalfDark}></div>
            <div className="container">
                <div className={styles.formContainer}>
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className={styles.imageWrapper}>
                                <Image
                                    src="/form-left-img.png"
                                    alt="Solar App Portfolio"
                                    width={425}
                                    height={431}
                                    className={styles.formImage}
                                />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className={styles.formContent}>
                                <form className={styles.contactForm}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className={styles.inputGroup}>
                                                <label>
                                                    <Image src="/user.png" alt="user" width={9} height={11} /> Full name*
                                                </label>
                                                <input type="text" placeholder="Your full name" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className={styles.inputGroup}>
                                                <label>
                                                    <Image src="/phone.png" alt="phone" width={9} height={12} /> Phone*
                                                </label>
                                                <input type="tel" placeholder="Your phone number" required />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className={styles.inputGroup}>
                                                <label>
                                                    <Image src="/email.png" alt="email" width={11} height={11} /> Email address*
                                                </label>
                                                <input type="email" placeholder="info@example.com" required />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className={styles.inputGroup}>
                                                <label>
                                                    <Image src="/message.png" alt="message" width={12} height={12} /> Project Details
                                                </label>
                                                <textarea rows="4" placeholder="Write a message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary-custom">Submit Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection;
