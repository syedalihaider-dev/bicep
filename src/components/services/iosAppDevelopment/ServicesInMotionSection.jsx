import React from 'react';
import Image from 'next/image';
import styles from './ServicesInMotionSection.module.css';

const servicesData = [
    {
        title: "Services in Motion",
        description: "Launch your first iOS product with a clean, focused, and scalable MVP.",
        icon: "/services/ios-app-development/services-icon-01.png"
    },
    {
        title: "Business Apps",
        description: "Custom iOS apps for operations, teams, customers, and internal workflows.",
        icon: "/services/ios-app-development/services-icon-02.png"
    },
    {
        title: "Ecommerce Apps",
        description: "Fast shopping experiences with product browsing, payments, and order tracking.",
        icon: "/services/ios-app-development/services-icon-03.png"
    },
    {
        title: "On-Demand Apps",
        description: "Booking, delivery, service, and marketplace apps with real-time features.",
        icon: "/services/ios-app-development/services-icon-04.png"
    }
];

const ServicesInMotionSection = () => {
    return (
        <section className={styles.servicesSection}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className={styles.heading}>Services in Motion</h2>
                        <p className={styles.subheading}>
                            From startup MVPs to enterprise platforms, we build iOS apps that scale.
                        </p>
                    </div>
                </div>

                <div className="row">
                    {servicesData.map((service, index) => (
                        <div className="col-lg-3 col-md-6 mb-4" key={index}>
                            <div className={styles.serviceCard}>
                                <div className={styles.iconWrapper}>
                                    <Image
                                        src={service.icon}
                                        alt={service.title}
                                        width={56}
                                        height={56}
                                        className={styles.icon}
                                    />
                                </div>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDescription}>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesInMotionSection;
