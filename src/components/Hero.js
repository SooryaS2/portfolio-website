'use client';
import styles from './Hero.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Instagram } from 'lucide-react';

export default function Hero() {
    return (
        <section className={styles.hero} id="home">
            <div className={styles.glow} />

            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.span
                        className={styles.greeting}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Hello, I'm
                    </motion.span>
                    <h1 className={styles.title}>Soorya Selvakumar</h1>
                    <motion.p
                        className={styles.role}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Computer Science Graduate & <span style={{ color: 'var(--accent)' }}>Artificial Intelligence Enthusiast</span>
                    </motion.p>
                    <motion.p
                        style={{ marginBottom: '2rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        Passionate about leveraging technology to solve real-world problems.
                        Specializing in Artificial Intelligence and Full Stack Development.
                    </motion.p>

                    <motion.div
                        className={styles.actions}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <Link href="#projects" className={`${styles.button} ${styles.primary}`}>
                            View Work
                        </Link>

                        <a
                            href="/Soorya_Selvakumar_CV.pdf"
                            download="Soorya_Selvakumar_CV.pdf"
                            className={`${styles.button} ${styles.secondary}`}
                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                        >
                            <span>Download CV</span>
                            <Download size={18} />
                        </a>
                    </motion.div>

                    <motion.div
                        className={styles.socials}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0, duration: 0.5 }}
                    >
                        <Link href="https://github.com/SooryaS2" target="_blank" className={styles.socialIcon}>
                            <Github size={24} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/sooryaselvakumar02/" target="_blank" className={styles.socialIcon}>
                            <Linkedin size={24} />
                        </Link>
                        <Link href="https://www.instagram.com/soorya.selvakumar/" target="_blank" className={styles.socialIcon}>
                            <Instagram size={24} />
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.div
                    className={styles.imageWrapper}
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
                >
                    <div className={styles.imageContainer}>
                        <Image
                            src="/images/profile.jpg"
                            alt="Soorya Selvakumar"
                            width={400}
                            height={400}
                            className={styles.profileImage}
                            priority
                        />
                    </div>

                    <motion.div
                        className={styles.orbit}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                </motion.div>
            </div>
        </section>
    );
}
