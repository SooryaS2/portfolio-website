'use client';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import Link from 'next/link';
import { Github, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.heading}>Get In Touch</h2>
                    <p className={styles.text}>
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                        I'll try my best to get back to you!
                    </p>

                    <div className={styles.links}>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link href="mailto:sooryas@outlook.com" className={styles.linkCard}>
                                <Mail size={30} className={styles.icon} />
                                <span>sooryas@outlook.com</span>
                            </Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link href="tel:+447405151055" className={styles.linkCard}>
                                <Phone size={30} className={styles.icon} />
                                <span>+44 7405 151055</span>
                            </Link>
                        </motion.div>

                        <div className={styles.socials}>
                            <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                                <Link href="https://github.com/SooryaS2" target="_blank" className={styles.socialIcon}>
                                    <Github size={24} />
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                                <Link href="https://www.linkedin.com/in/sooryaselvakumar02/" target="_blank" className={styles.socialIcon}>
                                    <Linkedin size={24} />
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                                <Link href="https://www.instagram.com/soorya.selvakumar/" target="_blank" className={styles.socialIcon}>
                                    <Instagram size={24} />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
