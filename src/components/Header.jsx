import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CustomButton from './CustomButton';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <Link href="/" className="navbar-brand d-flex align-items-center">
                        <Image
                            src="/logo.png"
                            width={205}
                            height={57}
                            alt="logo"
                            className={styles.logo}
                            priority={true}
                        />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav align-items-center">
                            <li className="nav-item">
                                <Link href="/" className={styles.nav_link}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about-us" className={styles.nav_link}>About Us</Link>
                            </li>
                            <li className={`nav-item ${styles.dropdown}`}>
                                <Link href="#" className={styles.nav_link}>Services</Link>
                                <div className={styles.dropdownMenu}>
                                    <Link href="/services/mobile-app-development" className={styles.dropdownItem}>Mobile App Development</Link>
                                    <Link href="/services/android-app-development" className={styles.dropdownItem}>Android App Development</Link>
                                    <Link href="/services/ios-app-development" className={styles.dropdownItem}>IOS App Development</Link>
                                    <Link href="/services/nft-game-development" className={styles.dropdownItem}>NFT game Development</Link>
                                    <Link href="/services/cross-platform-app-development" className={styles.dropdownItem}>Cross Platform App Development</Link>
                                    <Link href="/services/blockchain-game-development" className={styles.dropdownItem}>Blockchain Game Development</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link href="/industries" className={styles.nav_link}>Industries</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/pricing" className={styles.nav_link}>Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact" className={styles.nav_link}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="d-none d-lg-block">
                        <CustomButton>
                            Start a Discussion
                        </CustomButton>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
