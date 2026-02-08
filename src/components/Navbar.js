'use client';
import { useState } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import Logo from './Logo';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const closeMenu = () => setIsOpen(false);

    const menuVariants = {
        closed: {
            opacity: 0,
            y: "-100%",
            transition: {
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1]
            }
        },
        open: {
            opacity: 1,
            y: "0%",
            transition: {
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1]
            }
        }
    };

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        closeMenu();
    };

    return (
        <motion.nav
            className={styles.nav}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
            <div className={styles.container}>
                <a href="#" className={styles.logoItem} onClick={scrollToTop}>
                    <Logo />
                </a>

                {/* Desktop Links */}
                <div className={styles.links}>
                    <Link href="#about" className={styles.link}>About</Link>
                    <Link href="#experience" className={styles.link}>Experience</Link>
                    <Link href="#projects" className={styles.link}>Projects</Link>
                    <Link href="#skills" className={styles.link}>Skills</Link>
                    <Link href="#contact" className={styles.buttonLink}>Contact</Link>
                </div>

                {/* Mobile Toggle Button */}
                <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle Menu">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        <div className={styles.mobileLinks}>
                            <Link href="#about" className={styles.mobileLink} onClick={closeMenu}>About</Link>
                            <Link href="#experience" className={styles.mobileLink} onClick={closeMenu}>Experience</Link>
                            <Link href="#projects" className={styles.mobileLink} onClick={closeMenu}>Projects</Link>
                            <Link href="#skills" className={styles.mobileLink} onClick={closeMenu}>Skills</Link>
                            <Link href="#contact" className={styles.mobileButtonLink} onClick={closeMenu}>Contact</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
