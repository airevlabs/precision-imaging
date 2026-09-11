import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <div className="footer-brand-logo">
                            <Logo theme="dark" />
                        </div>
                        <p className="footer-desc">
                            Professional diagnostic ultrasound services with transparent pricing and flexible scheduling.
                        </p>
                        <p className="footer-phone">Phone: 630-344-9449</p>
                        <p className="footer-address">4121 Fairview Ave<br />Downers Grove, IL 60515</p>
                    </div>

                    <div>
                        <h3 className="footer-col-title">Quick Links</h3>
                        <ul className="footer-links-list">
                            <li><a href="https://precisionimagingus.com/" className="footer-link">Home</a></li>
                            <li><a href="https://precisionimagingus.com/#/#services" className="footer-link">Services</a></li>
                            <li><a href="https://precisionimagingus.com/#/#self-pay" className="footer-link">Self-Pay Options</a></li>
                            <li><a href="https://precisionimagingus.com/blog" className="footer-link">Blog</a></li>
                            <li><a href="https://precisionimagingus.com/#/contact" className="footer-link">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="footer-col-title">Patient Resources</h3>
                        <ul className="footer-links-list">
                            <li><a href="https://precisionimagingus.com/#/#what-to-expect" className="footer-link">What to Expect</a></li>
                            <li><a href="https://precisionimagingus.com/#/#why-choose-us" className="footer-link">Why Choose Us</a></li>
                            <li><a href="https://precisionimagingus.com/#/privacy" className="footer-link">Privacy Policy</a></li>
                            <li><a href="https://precisionimagingus.com/#/hipaa" className="footer-link">HIPAA Notice</a></li>
                            <li><a href="https://precisionimagingus.com/#/terms" className="footer-link">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom-bar">
                    <p>© 2026 PRECISIONIMAGINGUSA LLC. All rights reserved. Professional medical imaging services provided by licensed specialists.</p>
                    <p className="footer-disclaimer">This website is for informational purposes and does not constitute medical advice. Please consult with a healthcare professional for diagnosis or treatment.</p>
                    <p className="footer-credits">
                        Designed by <a href="https://airevlabs.com" target="_blank" rel="noopener noreferrer" className="footer-credit-link">AI REV LABS</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
