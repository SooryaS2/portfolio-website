'use client';
import { motion } from 'framer-motion';
import styles from './About.module.css';

export default function About() {
    return (
        <section id="about" className={styles.section}>
            <motion.div
                className={styles.container}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className={styles.heading}>About Me</h2>
                <div className={styles.content}>
                    <p className={styles.text}>
                        I am a recent graduate from <strong>Cardiff Metropolitan University</strong> with a degree in BSc (Hons) Computer Science - Artificial Intelligence,
                        currently pursuing a <strong>MSc Advanced Computer Science</strong> degree at <strong>Cardiff University</strong>.
                    </p>
                    <p className={styles.text}>
                        I am passionate about leveraging technology to solve real-world problems and continually seek opportunities to enhance my skills in programming,
                        data analysis, and project management. With a strong foundation in <strong>Python, Java</strong>, and other technologies, I am eager to contribute
                        to innovative projects that push the boundaries of what technology can achieve.
                    </p>
                    <p className={styles.text}>
                        My goal is to make a meaningful impact in the tech industry, particularly through <strong>AI-driven solutions</strong>.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
