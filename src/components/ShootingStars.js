'use client';
import { useEffect, useRef } from 'react';
import styles from './ShootingStars.module.css';

export default function ShootingStars() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const createStar = () => {
            const star = document.createElement('div');
            star.classList.add(styles.star);


            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;

            star.style.left = `${x}px`;
            star.style.top = `${y}px`;


            const duration = Math.random() * 1 + 0.5; // make some go faster than others
            star.style.animationDuration = `${duration}s`;


            const angle = Math.random() * 45 - 22.5 + 45; // angle them slightly so they look cool
            star.style.transform = `rotate(${angle}deg)`;

            container.appendChild(star);


            setTimeout(() => {
                star.remove();
            }, duration * 1000);
        };

        const interval = setInterval(() => {
            if (document.hidden) return;
            createStar();
        }, 800);

        return () => clearInterval(interval);
    }, []);

    return <div ref={containerRef} className={styles.container} />;
}
