import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Clock, Shield, Share2 } from 'lucide-react';

const steps = [
    {
        icon: Monitor,
        title: "Modern Equipment",
        description: "We use high-tech, portable ultrasound equipment for the clearest possible diagnostic imaging."
    },
    {
        icon: Clock,
        title: "Quick Exams",
        description: "Most exams are completed efficiently (under 30-45 mins), allowing you to return to your day immediately."
    },
    {
        icon: Shield,
        title: "Private Environment",
        description: "Your comfort and privacy are our top priorities in our professional, clinical setting."
    },
    {
        icon: Share2,
        title: "Direct Results",
        description: "Findings are shared directly with your referring healthcare provider for seamless follow-up care."
    }
];

const WhatToExpect = () => {
    return (
        <section id="what-to-expect" className="expect-section">
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        What to Expect
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-subtitle"
                    >
                        Patients can expect a professional, straightforward experience from start to finish. Most exams are completed efficiently, allowing you to return to normal activities right away.
                    </motion.p>
                </div>

                <div className="expect-grid">
                    {/* Connecting line for desktop */}
                    <div className="step-line" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="expect-card"
                        >
                            <div className="expect-icon-wrapper">
                                <step.icon size={36} />
                            </div>
                            <h3 className="expect-card-title">{step.title}</h3>
                            <p className="expect-card-desc">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatToExpect;
