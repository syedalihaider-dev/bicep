"use client";
import React from 'react';
import styles from './ProjectsSection.module.css';
import Image from 'next/image';
import CustomButton from '../CustomButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ProjectsSection = () => {
    const projects = [
        {
            title: "Financial",
            category: "Digital",
            year: "2026",
            image: "/project-financial.png"
        },
        {
            title: "Health",
            category: "Digital",
            year: "2025",
            image: "/project-health.png"
        },
        {
            title: "Quiz",
            category: "Mobile App",
            year: "2026",
            image: "/project-quiz.png"
        },
        {
            title: "Creative Agency",
            category: "Mobile App",
            year: "2026",
            image: "/project-creative-agency.png"
        }
    ];

    return (
        <section className={styles.projectsSec}>
            <div className="container">
                <div className={styles.header}>
                    <div className="subHeading" style={{ justifyContent: 'center' }}>
                        <div className="dot"></div>
                        Recent Project
                    </div>
                    <h2 className={styles.heading}>Ideas We've Turned Into Products</h2>
                </div>
            </div>
            <div className={styles.sliderContainer}>
                <Swiper
                    spaceBetween={25}
                    slidesPerView={1}
                    breakpoints={{
                        992: {
                            slidesPerView: 4,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        480: {
                            slidesPerView: 2,
                        },
                        320: {
                            slidesPerView: 1,
                        },
                    }}
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.projectCard}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={341}
                                        height={216}
                                    />
                                </div>
                                <div className={styles.cardBody}>
                                    <div className={styles.topRow}>
                                        <h4 className={styles.title}>{project.title}</h4>
                                        <span className={styles.year}>{project.year}</span>
                                    </div>
                                    <p className={styles.category}>{project.category}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="combo_btn" style={{ justifyContent: 'center' }}>
                <CustomButton>
                    View More
                </CustomButton>
            </div>
        </section>
    );
};

export default ProjectsSection;
