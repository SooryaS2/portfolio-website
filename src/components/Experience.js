'use client';
import { motion } from 'framer-motion';
import styles from './Experience.module.css';

const education = [
    {
        role: "MSc Advanced Computer Science",
        company: "Cardiff University",
        period: "Sept 2025 - Present",
        description: "Relevant Courses: Programming Paradigms, Internet of Things: Systems Design, Principles of Machine Learning, Applications of Machine Learning: NLP/Computer Vision, Developing Secure Systems and Applications, Distributed and Cloud Computing."
    },
    {
        role: "BSc(Hons) Computer Science - (Artificial Intelligence)",
        company: "Cardiff Metropolitan University",
        period: "Sept 2022 - June 2025",
        description: "Final Grade: First Class Honours. Dissertation: AI-Driven System for Virus Signature Detection."
    }
];

const experience = [
    {
        role: "Lead School Representative",
        company: "Cardiff School Of Technologies",
        period: "Aug 2024 - June 2025",
        description: "Liaison between 600+ students and staff. Increased student engagement by 35% through targeted events."
    },
    {
        role: "Semi Professional Cricket Player",
        company: "Minor League Cricket",
        period: "Sep 2020 - Oct 2025",
        description: "Represented Dallas Mustangs & Kings XI Dallas. Enhanced team collaboration and critical thinking in high-performance environments."
    },
    {
        role: "Data Analyst Intern",
        company: "Emergere Technologies",
        period: "June 2020 - Aug 2020",
        description: "Improved team efficiency by 15% through data analysis framework development. Delivered Python training."
    }
];

export default function Experience() {
    return (
        <section id="experience" className={styles.section}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    My Journey
                </motion.h2>

                <div className={styles.timeline}>
                    <h3 className={styles.subheading}>Education</h3>
                    {education.map((item, index) => (
                        <TimelineItem key={index} item={item} index={index} />
                    ))}

                    <h3 className={styles.subheading} style={{ marginTop: '4rem' }}>Experience</h3>
                    {experience.map((item, index) => (
                        <TimelineItem key={index + education.length} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TimelineItem({ item, index }) {
    return (
        <motion.div
            className={styles.item}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <div className={styles.marker} />
            <div className={styles.content}>
                <span className={styles.period}>{item.period}</span>
                <h4 className={styles.role}>{item.role}</h4>
                <h5 className={styles.company}>{item.company}</h5>
                <p className={styles.description}>{item.description}</p>
            </div>
        </motion.div>
    );
}
