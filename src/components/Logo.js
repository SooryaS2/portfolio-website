'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Logo() {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
            <Image
                src="/logo.png"
                alt="S Logo"
                width={80}
                height={80}
                style={{ objectFit: 'contain' }}
                priority
            />
        </motion.div>
    );
}
