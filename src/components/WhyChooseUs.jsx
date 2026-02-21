import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, Camera, FileText, HeartHandshake } from 'lucide-react';

const reasons = [
    {
        icon: Award,
        title: "Licensed & Credentialed",
        description: "Our providers are highly skilled, licensed, and credentialed professionals."
    },
    {
        icon: Zap,
        title: "Fast Documentation",
        description: "Quick turnaround times for exam results and reporting to your providers."
    },
    {
        icon: Camera,
        title: "Modern Portable Equipment",
        description: "State-of-the-art ultrasound technology for high-resolution imaging."
    },
    {
        icon: Shield,
        title: "HIPAA-Compliant",
        description: "Your health information is handled with the highest level of security and privacy."
    },
    {
        icon: HeartHandshake,
        title: "Patient-Focused Care",
        description: "Professional care that prioritizes patient comfort and convenience."
    }
];

// Re-importing Shield since I used it but forgot to add to imports above
import { Shield } from 'lucide-react';

const WhyChooseUs = () => {
    return (
        <section id="why-choose-us" style={{ backgroundColor: 'var(--color-white)' }}>
            <div className="container">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
                    <motion.div
                        style={{ flex: '1 1 400px' }}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-primary-navy)' }}>
                            Why Choose Precision Imaging
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--color-secondary-blue)', fontWeight: '600', marginBottom: '1.5rem' }}>
                            Trust, Reliability, and Convenience.
                        </p>
                        <p style={{ fontSize: '1.125rem', marginBottom: '2rem', lineHeight: '1.8' }}>
                            We pride ourselves on providing a clinical experience that feels high-tech yet personal. Our self-pay model ensures that financial transparency is never a barrier to quality diagnostic care.
                        </p>
                        <motion.a
                            href="/booking"
                            className="btn btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Book Your Scan Today
                        </motion.a>
                    </motion.div>

                    <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ x: 10 }}
                                style={{
                                    display: 'flex',
                                    gap: '1.5rem',
                                    padding: '1.5rem',
                                    borderRadius: '1rem',
                                    backgroundColor: 'var(--color-soft-gray-bg)',
                                    borderLeft: '4px solid var(--color-secondary-blue)'
                                }}
                            >
                                <div style={{ color: 'var(--color-primary-blue)', flexShrink: 0 }}>
                                    <reason.icon size={28} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.125rem', marginBottom: '0.25rem', color: 'var(--color-primary-navy)' }}>{reason.title}</h3>
                                    <p style={{ fontSize: '0.925rem' }}>{reason.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
