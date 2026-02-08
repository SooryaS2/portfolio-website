'use client';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const skillCategories = [
    {
        title: "Languages & Core",
        skills: ["Java", "Python", "JavaScript", "HTML5/CSS3", "SQL", "TypeScript"]
    },
    {
        title: "Frameworks & Tools",
        skills: ["React", "Next.js", "Expo", "Node.js", "Git/GitHub", "AWS"]
    },
    {
        title: "Concepts & Artificial Intelligence",
        skills: ["OOP", "Data Structures", "Algorithms", "Machine Learning", "Scikit-Learn", "Computer Vision"]
    },
    {
        title: "Software & Others",
        skills: ["VS Code", "IntelliJ IDEA", "PyCharm", "Jupyter Notebook", "Testing/Debugging"]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 100 }
    }
};

export default function Skills() {
    return (
        <section id="skills" className={styles.section}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    Technical Arsenal
                </motion.h2>

                <div className={styles.grid}>
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className={styles.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h3 className={styles.categoryTitle}>{category.title}</h3>
                            <motion.div
                                className={styles.skillsList}
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {category.skills.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        className={styles.skill}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.1, backgroundColor: "var(--accent)", color: "white" }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
