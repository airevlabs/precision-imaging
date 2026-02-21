import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-primary-navy)', color: 'var(--color-white)', padding: '5rem 0 2rem' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
                    <div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <Logo theme="dark" />
                        </div>
                        <p style={{ opacity: 0.8, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                            Professional diagnostic ultrasound services with transparent pricing and flexible scheduling.
                        </p>
                        <p style={{ fontWeight: '700', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Phone: 630-344-9449</p>
                        <p style={{ opacity: 0.8, fontSize: '0.95rem' }}>4121 Fairview Ave, Suite L1<br />Downers Grove, IL 60515</p>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--color-white)', fontWeight: '700' }}>Quick Links</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', opacity: 0.8 }}>
                            <li><Link to="/" className="footer-link">Home</Link></li>
                            <li><Link to="/#services" className="footer-link">Services</Link></li>
                            <li><Link to="/#self-pay" className="footer-link">Self-Pay Options</Link></li>
                            <li><Link to="/#contact" className="footer-link">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--color-white)', fontWeight: '700' }}>Patient Resources</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', opacity: 0.8 }}>
                            <li><Link to="/#what-to-expect" className="footer-link">What to Expect</Link></li>
                            <li><Link to="/#why-choose-us" className="footer-link">Why Choose Us</Link></li>
                            <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
                            <li><Link to="/hipaa" className="footer-link">HIPAA Notice</Link></li>
                            <li><Link to="/terms" className="footer-link">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '2rem',
                    textAlign: 'center',
                    fontSize: '0.85rem',
                    opacity: 0.6
                }}>
                    <p>© 2026 PRECISIONIMAGINGUSA LLC. All rights reserved. Professional medical imaging services provided by licensed specialists.</p>
                    <p style={{ marginTop: '0.5rem' }}>This website is for informational purposes and does not constitute medical advice. Please consult with a healthcare professional for diagnosis or treatment.</p>
                    <p style={{ marginTop: '1.5rem', opacity: 0.8 }}>
                        Designed by <a href="https://airevlabs.com" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: 'var(--color-white)', textDecoration: 'underline' }}>AI REV LABS</a>
                    </p>
                </div>
            </div>
            <style>{`
        .footer-link:hover {
          color: var(--color-sky-blue);
          padding-left: 5px;
        }
      `}</style>
        </footer>
    );
};

export default Footer;
