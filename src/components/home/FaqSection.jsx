"use client"
import React, { useState } from 'react'
import styles from './FaqSection.module.css'

const faqsLeft = [
    {
        question: "What services does BicepTech offer?",
        answer: "We Specialize In Mobile App Development For IOS And Android, Including UI/UX Design, Backend Development, API Integration, And Full Product Deployment."
    },
    {
        question: "Can you help us turn an idea into a complete product?",
        answer: "Yes, we provide end-to-end services from ideation, design, development to deployment and post-launch support."
    },
    {
        question: "Do you provide post-launch support?",
        answer: "Yes, we offer comprehensive post-launch support to ensure your application runs smoothly, including maintenance and updates."
    }
];

const faqsRight = [
    {
        question: "Do you build apps for both startups and enterprises?",
        answer: "Yes, we cater to both startups looking to build their MVP and enterprises needing scalable, robust applications."
    },
    {
        question: "Do you provide UI/UX design as well?",
        answer: "Absolutely. Our team includes expert UI/UX designers who ensure your application is intuitive, engaging, and visually appealing."
    },
    {
        question: "Will I own the source code of my app?",
        answer: "Yes, upon project completion and full payment, the complete source code and intellectual property rights are transferred to you."
    }
];

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState('left-0');

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={`${styles.faqSection} sec_padding`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="text-center mb-5">
                            <div className="subHeading justify-content-center">
                                <span className="dot"></span> FAQs
                            </div>
                            <h2 className={styles.heading}>Frequently Asked Questions</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        {faqsLeft.map((faq, index) => {
                            const isActive = activeIndex === `left-${index}`;
                            return (
                                <div
                                    key={`left-${index}`}
                                    className={`${styles.faqItem} ${isActive ? styles.active : ''}`}
                                    onClick={() => toggleFaq(`left-${index}`)}
                                >
                                    <div className={styles.faqHeader}>
                                        <h3 className={styles.question}>{faq.question}</h3>
                                        <span className={styles.icon}>
                                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className={`${styles.faqBody} ${isActive ? styles.show : ''}`}>
                                        <p className={styles.answer}>{faq.answer}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-lg-6">
                        {faqsRight.map((faq, index) => {
                            const isActive = activeIndex === `right-${index}`;
                            return (
                                <div
                                    key={`right-${index}`}
                                    className={`${styles.faqItem} ${isActive ? styles.active : ''}`}
                                    onClick={() => toggleFaq(`right-${index}`)}
                                >
                                    <div className={styles.faqHeader}>
                                        <h3 className={styles.question}>{faq.question}</h3>
                                        <span className={styles.icon}>
                                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className={`${styles.faqBody} ${isActive ? styles.show : ''}`}>
                                        <p className={styles.answer}>{faq.answer}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqSection;
