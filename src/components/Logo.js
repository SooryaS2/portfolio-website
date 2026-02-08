'use client';
import { motion } from 'framer-motion';

export default function Logo() {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '33px',
                height: '33px',
                transform: 'rotate(-10deg)'
            }}
        >
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                </defs>
                <path
                    d="M70 25C70 16.7157 63.2843 10 55 10H30C18.9543 10 10 18.9543 10 30C10 41.0457 18.9543 50 30 50H70C81.0457 50 90 58.9543 90 70C90 81.0457 81.0457 90 70 90H45C36.7157 90 30 83.2843 30 75"
                    stroke="url(#logoGradient)"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </motion.div>
    );
}
