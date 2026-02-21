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
            className="hero"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, var(--color-white) 0%, var(--color-light-blue) 100%)',
                padding: '120px 0 120px 0'
            }}
        >
            {/* Background Decorative Elements */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '10%',
                    right: '-5%',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, var(--color-sky-blue) 0%, transparent 70%)',
                    opacity: 0.3,
                    y: y1
                }}
            />
            <motion.div
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '-10%',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, var(--color-secondary-blue) 0%, transparent 70%)',
                    opacity: 0.1,
                    y: y2
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ maxWidth: '700px', opacity }}
                >
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', color: 'var(--color-primary-navy)' }}>
                        Reliable Diagnostic Ultrasound — <span style={{ color: 'var(--color-secondary-blue)' }}>When You Need It</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--color-primary-blue)' }}>
                        Clear - Convenient - Self-Pay Friendly
                    </p>
                    <p style={{ fontSize: '1.125rem', marginBottom: '2.5rem', maxWidth: '600px' }}>
                        Precision Imaging provides professional diagnostic ultrasound services with transparent self-pay pricing and flexible scheduling, making imaging accessible, efficient, and stress-free for patients and referring providers.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <motion.button
                            onClick={() => navigate('/booking')}
                            className="btn btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{ border: 'none', cursor: 'pointer' }}
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
                            style={{ border: 'none', cursor: 'pointer' }}
                        >
                            View Ultrasound Services
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Full-width Animated Waveform */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '100px',
                zIndex: 0,
                overflow: 'hidden',
                opacity: 0.6
            }}>
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
