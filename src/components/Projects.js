'use client';
import { useState, useEffect } from 'react';
import SpotlightCard from './SpotlightCard';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Projects.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
    {
        title: "Kudos App (HackTheDiff)",
        description: "A peer recognition platform enabling users to nominate colleagues for kudos. Features real-time notifications, a dashboard feed, and an admin panel. Built during the Hackthediff hackathon.",
        technologies: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"]
    },
    {
        title: "University Database System",
        description: "A comprehensive SQL-based system for managing university data, including students, researchers, courses, and grants. Demonstrates complex relationship modeling and query optimization.",
        technologies: ["SQL", "Database Design", "Data Management"]
    },
    {
        title: "AI-Driven Virus Signature Detection",
        description: "Developed an AI-driven malware detection system using Random Forest, MLP, and XGBoost, achieving up to 0.9997 ROC AUC on a dataset of 2,000+ files.",
        technologies: ["Python", "scikit-learn", "XGBoost", "Machine Learning"]
    },
    {
        title: "ModernCity Application",
        description: "Smart city guide desktop application featuring a modular UI for administration, tourism, and services. Implemented MVC architecture and secure MySQL connectivity.",
        technologies: ["Java", "JavaFX", "MySQL", "Scene Builder"]
    },
    {
        title: "Coppell Mental Health App",
        description: "Secure mental health application with features like secure login, therapist matching, and real-time chat functionality, focusing on privacy and accessibility.",
        technologies: ["HTML", "JavaScript", "Wix", "Web Development"]
    }
];

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(3);
            }
        };

        handleResize(); // check the screen size right away
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {

        setCurrentIndex((prev) =>
            prev + 1 > projects.length - itemsPerPage ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? projects.length - itemsPerPage : prev - 1
        );
    };



    return (
        <section id="projects" className={styles.section}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </motion.h2>

                <div className={styles.carouselContainer}>
                    <button onClick={prevSlide} className={styles.arrowBtn} aria-label="Previous Project">
                        <ChevronLeft size={32} />
                    </button>

                    <div className={styles.window}>
                        <motion.div
                            className={styles.track}
                            animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            style={{ width: `${(projects.length / itemsPerPage) * 100}%` }}
                        >
                            {projects.map((project, index) => (
                                <div
                                    key={index}
                                    className={styles.slide}
                                    style={{ width: `${100 / projects.length}%` }}
                                >
                                    <div style={{ height: '100%', padding: '0 1rem' }}>
                                        <SpotlightCard className={styles.card}>
                                            <h3 className={styles.title}>{project.title}</h3>
                                            <p className={styles.description}>{project.description}</p>

                                            <div className={styles.tags}>
                                                {project.technologies.map((tech) => (
                                                    <span key={tech} className={styles.tag}>{tech}</span>
                                                ))}
                                            </div>
                                        </SpotlightCard>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <button onClick={nextSlide} className={styles.arrowBtn} aria-label="Next Project">
                        <ChevronRight size={32} />
                    </button>
                </div>


            </div>
        </section>
    );
}
