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
        <section id="what-to-expect" style={{ backgroundColor: 'var(--color-soft-gray-bg)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-primary-navy)' }}
                    >
                        What to Expect
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1.125rem' }}
                    >
                        Patients can expect a professional, straightforward experience from start to finish. Most exams are completed efficiently, allowing you to return to normal activities right away.
                    </motion.p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '2.5rem',
                    position: 'relative'
                }}>
                    {/* Connecting line for desktop */}
                    <div style={{
                        position: 'absolute',
                        top: '45px',
                        left: '10%',
                        right: '10%',
                        height: '2px',
                        backgroundColor: 'var(--color-sky-blue)',
                        zIndex: 0,
                        display: 'none'
                    }} className="step-line" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
                        >
                            <div style={{
                                width: '90px',
                                height: '90px',
                                backgroundColor: 'var(--color-white)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem',
                                color: 'var(--color-primary-blue)',
                                boxShadow: 'var(--shadow-md)',
                                border: '4px solid var(--color-light-blue)'
                            }}>
                                <step.icon size={36} />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-primary-navy)' }}>{step.title}</h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-body)', lineHeight: '1.6' }}>{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style>{`
        @media (min-width: 1024px) {
          .step-line { display: block !important; }
        }
      `}</style>
        </section>
    );
};

export default WhatToExpect;
