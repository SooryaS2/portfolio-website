'use client';
import styles from './Navbar.module.css';
import Link from 'next/link';
import Logo from './Logo';
import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <motion.nav
            className={styles.nav}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
            <div className={styles.container}>
                <Link href="/" className={styles.logoItem}>
                    <Logo />
                    <span className={styles.logoText}>Soorya</span>
                </Link>
                <div className={styles.links}>
                    <Link href="#about" className={styles.link}>About</Link>
                    <Link href="#experience" className={styles.link}>Experience</Link>
                    <Link href="#projects" className={styles.link}>Projects</Link>
                    <Link href="#skills" className={styles.link}>Skills</Link>
                    <Link href="#contact" className={styles.buttonLink}>Contact</Link>
                </div>
            </div>
        </motion.nav>
    );
}
