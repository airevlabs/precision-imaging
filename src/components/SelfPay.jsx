import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Info } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const highlights = [
    "Transparent, upfront pricing",
    "No insurance billing required",
    "Faster scheduling and reduced wait times",
    "Ideal for uninsured and cash-pay patients"
];

const SelfPay = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleContactClick = () => {
        if (location.pathname !== '/') {
            // Navigate to home with hash, App.jsx ScrollToAnchor will handle scrolling
            navigate('/#contact');
        } else {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                const headerOffset = 80;
                const elementPosition = contactSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }
    };

    return (
        <section id="self-pay" style={{ backgroundColor: 'var(--color-white)' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-primary-navy)' }}>
                            Simple Self-Pay Options
                        </h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
                            Precision Imaging operates on a self-pay model designed to provide clarity and faster access to care. We believe high-quality imaging should be straightforward and accessible.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                            {highlights.map((text, i) => (
                                <motion.div
                                    key={i}
                                    style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <CheckCircle2 color="var(--color-secondary-blue)" size={24} />
                                    <span style={{ fontWeight: '500', fontSize: '1.1rem' }}>{text}</span>
                                </motion.div>
                            ))}
                            <p style={{ fontSize: '1rem', marginTop: '0.5rem', color: 'var(--color-text-body)' }}>
                                Trying to use insurance? <span onClick={handleContactClick} style={{ color: 'var(--color-primary-blue)', textDecoration: 'underline', cursor: 'pointer' }}>Contact us</span> to see if your insurance is covered.
                            </p>
                        </div>

                        <motion.div
                            style={{
                                padding: '1.5rem',
                                backgroundColor: 'var(--color-light-blue)',
                                borderRadius: '12px',
                                display: 'flex',
                                gap: '1rem',
                                marginBottom: '2rem'
                            }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <Info color="var(--color-primary-blue)" style={{ flexShrink: 0 }} />
                            <p style={{ fontSize: '0.95rem', fontWeight: '500', color: 'var(--color-primary-navy)' }}>
                                Pricing information is available upon request. We offer competitive rates for all our ultrasound services.
                            </p>
                        </motion.div>

                        <motion.button
                            onClick={() => {
                                handleContactClick();
                            }}
                            className="btn btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{ border: 'none', cursor: 'pointer' }}
                        >
                            Request Pricing Details
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{
                            position: 'relative',
                            height: '400px',
                            backgroundColor: 'var(--color-sky-blue)',
                            borderRadius: '2rem',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-lg)'
                        }}
                    >
                        {/* Abstract visual representing 'Price Transparency' or 'Clarity' */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(45deg, var(--color-primary-blue), var(--color-sky-blue))',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.5, 0.8, 0.5]
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                                style={{
                                    width: '200px',
                                    height: '200px',
                                    border: '2px solid rgba(255,255,255,0.3)',
                                    borderRadius: '50%'
                                }}
                            />
                            <motion.div
                                animate={{
                                    scale: [1.1, 1, 1.1],
                                    opacity: [0.8, 0.5, 0.8]
                                }}
                                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                                style={{
                                    position: 'absolute',
                                    width: '150px',
                                    height: '150px',
                                    border: '2px solid rgba(255,255,255,0.5)',
                                    borderRadius: '50%'
                                }}
                            />
                            <div style={{ color: 'white', textAlign: 'center', zIndex: 1 }}>
                                <span style={{ fontSize: '4rem', fontWeight: '800' }}>$</span>
                                <p style={{ fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px' }}>Transparent Pricing</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SelfPay;
