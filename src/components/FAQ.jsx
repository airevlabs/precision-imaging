import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "What types of ultrasound services do you offer?",
        answer: "We provide a full range of diagnostic ultrasound exams, including abdominal, vascular, cardiac (echo), OB, pediatric, thyroid, breast, pelvic, kidney and bladder, and soft-tissue ultrasound, as well as screening packages for stroke and vascular health."
    },
    {
        question: "Do I need a doctor’s order to schedule an ultrasound?",
        answer: "Many patients come with a doctor’s order, especially when a radiology report is needed, but we also accept self‑referred patients for wellness and screening exams; in those cases, we provide images on CD and explain that a physician’s order is required if a formal radiology report is later needed."
    },
    {
        question: "Are your ultrasound exams safe?",
        answer: "Yes, ultrasound uses sound waves instead of radiation, so it is considered very safe for adults, children, and pregnancy; most exams are painless and noninvasive, with only mild pressure from the probe."
    },
    {
        question: "How long does a typical ultrasound appointment take?",
        answer: "Most appointments last between 20 and 45 minutes, depending on the type of exam and how many areas are being evaluated; we recommend arriving 10–15 minutes early for check‑in and preparation."
    },
    {
        question: "Do you accept insurance, and what if I want to self‑pay?",
        answer: (
            <>
                We work with many major insurance plans when a valid physician order is provided, and we also offer clear self‑pay pricing for patients who prefer to pay out of pocket or do not have insurance coverage.{" "}
                <a href="/#/contact" style={{ color: 'var(--color-primary-blue)', textDecoration: 'underline' }}>
                    If you want to use insurance, contact us to see if it is covered.
                </a>
            </>
        )
    },
    {
        question: "Who performs the ultrasound and who reviews the results?",
        answer: "Exams are performed by trained ultrasound technologists who specialize in diagnostic imaging; when a doctor’s order is present, a radiologist or qualified physician interprets the study and sends a detailed report directly to your ordering provider."
    },
    {
        question: "When and how will I get my results?",
        answer: "If you have a doctor’s order, your provider typically receives a detailed report within 24-48 hours after your exam and will contact you to review the findings; for self‑referred screening exams without an order, you receive your images on CD and can share them with a physician if further interpretation is needed."
    },
    {
        question: "What should I bring to my appointment?",
        answer: "Please bring a photo ID, insurance card if you plan to use insurance, any written doctor’s order, and relevant prior imaging reports; also review your confirmation message for any specific prep instructions such as fasting or arriving with a full bladder."
    },
    {
        question: "How do I schedule, reschedule, or cancel an appointment?",
        answer: "You can request and manage appointments through our online scheduling system or by using the Contact Us page; our team will confirm your time, review preparation, and help you reschedule if your plans change."
    },
    {
        question: "What makes this ultrasound center different from a hospital imaging department?",
        answer: "We focus exclusively on outpatient diagnostic ultrasound, which allows for shorter wait times, transparent pricing, and a more personalized experience, while still providing high‑quality imaging and timely communication with your healthcare providers."
    }
];

const FAQItem = ({ question, answer, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            style={{
                marginBottom: '1rem',
                backgroundColor: 'var(--color-white)',
                borderRadius: '1rem',
                border: '1px solid var(--color-soft-gray-border)',
                overflow: 'hidden',
                boxShadow: isOpen ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                transition: 'box-shadow 0.3s ease'
            }}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    padding: '1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                }}
            >
                <span style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: 'var(--color-primary-navy)',
                    paddingRight: '1rem'
                }}>
                    {question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ color: 'var(--color-primary-blue)', flexShrink: 0 }}
                >
                    <ChevronDown size={24} />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div style={{
                            padding: '0 1.5rem 1.5rem 1.5rem',
                            fontSize: '1rem',
                            lineHeight: '1.6',
                            color: 'var(--color-text-body)'
                        }}>
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQ = () => {
    return (
        <section id="faq" style={{ backgroundColor: 'var(--color-soft-gray-bg)', padding: '6rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-primary-navy)', fontWeight: '700' }}
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem', color: 'var(--color-text-body)' }}
                    >
                        Find answers to common questions about our services, safety, results, and more.
                    </motion.p>
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} index={index} {...faq} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
