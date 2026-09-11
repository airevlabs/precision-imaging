import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section
            ref={ref}
            className="hero hero-section"
        >
            {/* Background Decorative Elements */}
            <motion.div
                className="hero-circle-1"
                style={{ y: y1 }}
            />
            <motion.div
                className="hero-circle-2"
                style={{ y: y2 }}
            />

            <div className="container hero-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="hero-content"
                    style={{ opacity }}
                >
                    <h1 className="hero-title">
                        Reliable Diagnostic Ultrasound — <span className="hero-title-accent">When You Need It</span>
                    </h1>
                    <p className="hero-tagline">
                        Clear - Convenient - Self-Pay Friendly
                    </p>
                    <p className="hero-description">
                        Precision Imaging provides professional diagnostic ultrasound services with transparent self-pay pricing and flexible scheduling, making imaging accessible, efficient, and stress-free for patients and referring providers.
                    </p>

                    <div className="hero-btn-group">
                        <motion.button
                            onClick={() => navigate('/booking')}
                            className="btn btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Request an Appointment
                        </motion.button>
                        <motion.button
                            onClick={() => {
                                navigate('/');
                                setTimeout(() => {
                                    const element = document.getElementById('services');
                                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                                }, 100);
                            }}
                            className="btn btn-secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Ultrasound Services
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Full-width Animated Waveform */}
            <div className="hero-waveform-container">
                <motion.svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 1440 100"
                    fill="none"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.path
                        d="M0 50 H200 L220 10 L240 90 L260 50 H500 L520 20 L540 80 L560 50 H900 L920 30 L940 70 L960 50 H1440"
                        stroke="var(--color-primary-blue)"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{
                            duration: 6,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    />
                </motion.svg>
            </div>
        </section>
    );
};

export default Hero;
