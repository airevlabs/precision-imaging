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
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Contact Us</h2>
                    <p className="section-subtitle">
                        Ready to book an appointment or have questions? Reach out to us today.
                    </p>
                </div>

                <div className="contact-grid">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="contact-info-list">
                            <div className="contact-info-row">
                                <div className="contact-icon-bubble">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="contact-item-title">Phone</h3>
                                    <a href="tel:630-344-9449" className="contact-phone-link">630-344-9449</a>
                                </div>
                            </div>

                            <div className="contact-info-row">
                                <div className="contact-icon-bubble">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="contact-item-title">Location</h3>
                                    <p className="contact-text">4121 Fairview Ave, Downers Grove, IL 60515</p>
                                    <p className="contact-subtext">Serving Chicago Metro Area & Surrounding Suburbs</p>
                                </div>
                            </div>

                            <div className="contact-info-row contact-info-row-center">
                                <div className="contact-icon-bubble">
                                    <Link to="/booking"><Calendar size={24} /></Link>
                                </div>
                                <div>
                                    <h3 className="contact-item-title">
                                        <Link to="/booking">Book Appointment</Link>
                                    </h3>
                                    <p className="contact-subtext">Schedule online instantly</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-provider-alert">
                            <h4 className="contact-provider-title">REFERRING PROVIDERS</h4>
                            <p className="contact-provider-desc">We provide fast documentation turnaround and HIPAA-compliant results sharing for all referring physicians and healthcare practices.</p>
                        </div>
                    </motion.div>

                    {/* Contact Form Widget */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="contact-form-card"
                    >
                        <iframe
                            src="https://links.airevlabs.com/widget/form/Oj5KV4C0BEXGHFjfqGLp"
                            loading="lazy"
                            className="contact-form-iframe"
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
