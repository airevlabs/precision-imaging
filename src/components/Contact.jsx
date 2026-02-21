import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [formState, setFormState] = useState('idle'); // idle, loading, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState('loading');
        setTimeout(() => {
            setFormState('success');
            setTimeout(() => setFormState('idle'), 3000);
        }, 1500);
    };

    return (
        <section id="contact" style={{ backgroundColor: 'var(--color-soft-gray-bg)', padding: '5rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-primary-navy)' }}>Contact Us</h2>
                    <p style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
                        Ready to book an appointment or have questions? Reach out to us today.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'start' }}>
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--color-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary-blue)', boxShadow: 'var(--shadow-sm)' }}>
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-navy)', marginBottom: '0.25rem' }}>Phone</h3>
                                    <a href="tel:630-344-9449" style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-secondary-blue)' }}>630-344-9449</a>
                                </div>
                            </div>



                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--color-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary-blue)', boxShadow: 'var(--shadow-sm)' }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-navy)', marginBottom: '0.25rem' }}>Location</h3>
                                    <p style={{ fontSize: '1.1rem' }}>4121 Fairview Ave, Suite L1, Downers Grove, IL 60515</p>
                                    <p style={{ fontSize: '1rem', color: 'var(--color-gray-text)' }}>Serving Chicago Metro Area & Surrounding Suburbs</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--color-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary-blue)', boxShadow: 'var(--shadow-sm)' }}>
                                    <Link to="/booking"><Calendar size={24} /></Link>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-navy)', marginBottom: '0.25rem' }}>
                                        <Link to="/booking" style={{ textDecoration: 'none', color: 'inherit' }}>Book Appointment</Link>
                                    </h3>
                                    <p style={{ fontSize: '1rem', color: 'var(--color-gray-text)' }}>Schedule online instantly</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--color-sky-blue)', borderRadius: '1rem', opacity: 0.8 }}>
                            <h4 style={{ color: 'var(--color-primary-navy)', marginBottom: '0.5rem' }}>REFERRING PROVIDERS</h4>
                            <p style={{ fontSize: '0.95rem' }}>We provide fast documentation turnaround and HIPAA-compliant results sharing for all referring physicians and healthcare practices.</p>
                        </div>
                    </motion.div>

                    {/* Contact Form Widget */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{
                            backgroundColor: 'var(--color-white)',
                            padding: '1rem',
                            borderRadius: '1.5rem',
                            boxShadow: 'var(--shadow-lg)',
                            overflow: 'hidden',
                            height: '900px' // Increased height
                        }}
                    >
                        <iframe
                            src="https://links.airevlabs.com/widget/form/Oj5KV4C0BEXGHFjfqGLp"
                            style={{
                                width: '100%',
                                border: 'none',
                                height: '100%'
                            }}
                            scrolling="yes"
                            title="Contact Form"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
