"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './ContactInfoSection.module.css';

const ContactInfoSection = () => {
    const contactCards = [
        {
            icon: "/contact/24-hours-support.png",
            title: "Call Us At:",
            value: "+1 (214) 910-6917",
            theme: "orange"
        },
        {
            icon: "/contact/live-chat.png",
            title: "Representative:",
            value: "Click To Begin",
            theme: "blue"
        },
        {
            icon: "/contact/send-us-email.png",
            title: "Send Us An Email:",
            value: "wearebiceps.com",
            theme: "orange"
        },
        {
            icon: "/contact/get-a-quote.png",
            title: "Get A Free",
            value: "Quote",
            theme: "blue"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className={styles.contactInfoSec}>
            <div className="container">
                <div className={styles.header}>
                    <div className="subHeading" style={{ justifyContent: 'center' }}>
                        <div className="dot"></div>
                        Contact Us
                    </div>
                    <motion.h2
                        className={styles.heading}
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Are You Ready To Share<br />Your Story With The World?
                    </motion.h2>
                </div>

                <motion.div
                    className={styles.cardsWrapper}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {contactCards.map((card, index) => (
                        <motion.div
                            key={index}
                            className={`${styles.pillCard} ${card.theme === 'orange' ? styles.orangeTheme : styles.blueTheme}`}
                            variants={cardVariants}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                            <div className={styles.iconCircle}>
                                <Image src={card.icon} alt={card.title} width={34} height={34} className={styles.iconImg} />
                            </div>
                            <div className={styles.cardContent}>
                                <p className={styles.cardTitle}>{card.title}</p>
                                <p className={styles.cardValue}>{card.value}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ContactInfoSection;
