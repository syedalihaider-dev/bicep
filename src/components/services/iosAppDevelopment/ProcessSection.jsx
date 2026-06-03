"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ProcessSection.module.css';

const processData = [
    {
        id: 1,
        title: "01. Strategy",
        description: "Discovery, research, and roadmap planning",
        icon: "/services/ios-app-development/process-icon-01.png",
        image: "/about-us-img.png"
    },
    {
        id: 2,
        title: "02. Design",
        description: "UI/UX design, prototyping, and user testing",
        icon: "/services/ios-app-development/process-icon-02.png",
        image: "/project-creative-agency.png"
    },
    {
        id: 3,
        title: "03. Development",
        description: "Swift development with modern architecture",
        icon: "/services/ios-app-development/process-icon-03.png",
        image: "/project-financial.png"
    },
    {
        id: 4,
        title: "04. Testing",
        description: "QA, performance optimization, bug fixes",
        icon: "/services/ios-app-development/process-icon-04.png",
        image: "/project-health.png"
    },
    {
        id: 5,
        title: "05. Launch",
        description: "App Store submission and marketing support",
        icon: "/services/ios-app-development/process-icon-05.png",
        image: "/project-quiz.png"
    }
];

const ProcessSection = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className={styles.processSection}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className={styles.heading}>Our Process</h2>
                        <p className={styles.subheading}>
                            A proven methodology that transforms ideas into successful iOS applications.
                        </p>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-5 mb-5 mb-lg-0">
                        <div className={styles.tabsContainer}>
                            {processData.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`${styles.tabItem} ${activeTab === index ? styles.activeTab : ''}`}
                                    onClick={() => setActiveTab(index)}
                                >
                                    <div className={styles.iconWrapper}>
                                        <Image
                                            src={item.icon}
                                            alt={item.title}
                                            width={36}
                                            height={36}
                                            className={styles.icon}
                                        />
                                    </div>
                                    <div className={styles.tabContent}>
                                        <h3 className={styles.tabTitle}>{item.title}</h3>
                                        <p className={styles.tabDescription}>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className={styles.imageWrapper}>
                            <Image
                                src={processData[activeTab].image}
                                alt={processData[activeTab].title}
                                fill
                                className={styles.mainImage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
