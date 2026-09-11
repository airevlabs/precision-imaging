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
        navigate('/contact');
    };

    return (
        <section id="self-pay" className="selfpay-section">
            <div className="container">
                <div className="selfpay-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="section-title">
                            Simple Self-Pay Options
                        </h2>
                        <p className="selfpay-lead-text">
                            Precision Imaging operates on a self-pay model designed to provide clarity and faster access to care. We believe high-quality imaging should be straightforward and accessible.
                        </p>

                        <div className="selfpay-highlight-list">
                            {highlights.map((text, i) => (
                                <motion.div
                                    key={i}
                                    className="selfpay-highlight-item"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <CheckCircle2 color="var(--color-secondary-blue)" size={24} />
                                    <span className="selfpay-highlight-text">{text}</span>
                                </motion.div>
                            ))}
                            <p className="selfpay-insurance-text">
                                Trying to use insurance? <span onClick={handleContactClick} className="selfpay-insurance-link">Contact us</span> to see if your insurance is covered.
                            </p>
                        </div>

                        <motion.div
                            className="selfpay-info-box"
                            whileHover={{ scale: 1.02 }}
                        >
                            <Info color="var(--color-primary-blue)" className="selfpay-info-icon" />
                            <p className="selfpay-info-text">
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
                        >
                            Request Pricing Details
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="selfpay-visual-card"
                    >
                        {/* Abstract visual representing 'Price Transparency' or 'Clarity' */}
                        <div className="selfpay-visual-inner">
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.5, 0.8, 0.5]
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="selfpay-circle-outer"
                            />
                            <motion.div
                                animate={{
                                    scale: [1.1, 1, 1.1],
                                    opacity: [0.8, 0.5, 0.8]
                                }}
                                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                                className="selfpay-circle-inner"
                            />
                            <div className="selfpay-badge-content">
                                <span className="selfpay-currency-symbol">$</span>
                                <p className="selfpay-badge-label">Transparent Pricing</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SelfPay;
