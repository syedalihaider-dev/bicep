"use client"
import React from 'react'
import Link from 'next/link'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-3 mb-lg-0">
                        <h4 className={styles.widgetTitle}>Quick Links</h4>
                        <ul className={styles.widgetList}>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/">About Us</Link></li>
                            <li><Link href="/">Our Services</Link></li>
                            <li><Link href="/">Industries</Link></li>
                            <li><Link href="/">Portfolio</Link></li>
                            <li><Link href="/">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-3 mb-lg-0">
                        <h4 className={styles.widgetTitle}>Our Services</h4>
                        <ul className={styles.widgetList}>
                            <li><Link href="/">Mobile App Development</Link></li>
                            <li><Link href="/">Android App Development</Link></li>
                            <li><Link href="/">IOS App Development</Link></li>
                            <li><Link href="/">NFT game Development</Link></li>
                            <li><Link href="/">Cross Platform App Development</Link></li>
                            <li><Link href="/">Blockchain Game Development</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-3 mb-lg-0">
                        <h4 className={styles.widgetTitle}>Solutions</h4>
                        <ul className={styles.widgetList}>
                            <li><Link href="/">Artificial Intelligence</Link></li>
                            <li><Link href="/">Generative Ai</Link></li>
                            <li><Link href="/">Machine Learning</Link></li>
                            <li><Link href="/">Computer Vision Cloud</Link></li>
                            <li><Link href="/">Data Science &amp; Analytics</Link></li>
                            <li><Link href="/">IOT</Link></li>
                            <li><Link href="/">AR/VR</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h4 className={styles.widgetTitle}>Contact Us</h4>
                        <ul className={styles.widgetList}>
                            <li><a href="tel:+0123456789">+012 345 6789</a></li>
                            <li><a href="mailto:info@wearebiceps.com">info@wearebiceps.com</a></li>
                        </ul>

                        <h4 className={`${styles.widgetTitle} mt-3`}>Follow Us</h4>
                        <div className={styles.socialIcons}>
                            <a href="#" aria-label="Facebook">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" /></svg>
                            </a>
                            <a href="#" aria-label="Instagram">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                            </a>
                            <a href="#" aria-label="X Twitter">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                            <a href="#" aria-label="YouTube">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.086 0 12 0 12s0 3.914.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.914 24 12 24 12s0-3.914-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>&copy; Copyright 2026 | Bicep | All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
