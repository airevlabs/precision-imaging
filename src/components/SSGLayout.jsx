import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import FloatingContactForm from './FloatingContactForm';

const SSGLayout = ({ children }) => {
    return (
        <div className="app">
            <Header />
            {children}
            <Footer />
            <BackToTop />
            <FloatingContactForm />
            <script dangerouslySetInnerHTML={{
                __html: `
                (function() {
                    const initObserver = () => {
                        const observer = new IntersectionObserver((entries) => {
                            entries.forEach(entry => {
                                if (entry.isIntersecting) {
                                    entry.target.classList.remove('opacity-0', 'translate-y-8');
                                    entry.target.classList.add('opacity-100', 'translate-y-0');
                                    observer.unobserve(entry.target);
                                }
                            });
                        }, { threshold: 0.1 });
                        
                        document.querySelectorAll('.reveal-section').forEach((section) => {
                            observer.observe(section);
                        });
                    };

                    const initHeaderScroll = () => {
                        const header = document.querySelector('.site-header');
                        if (!header) return;
                        const handleScroll = () => {
                            if (window.scrollY > 20) {
                                header.classList.add('scrolled');
                            } else {
                                header.classList.remove('scrolled');
                            }
                        };
                        window.addEventListener('scroll', handleScroll);
                        handleScroll(); // Trigger once on load
                    };

                    const initAll = () => {
                        initObserver();
                        initHeaderScroll();
                    };

                    if (document.readyState === 'loading') {
                        document.addEventListener('DOMContentLoaded', initAll);
                    } else {
                        initAll();
                    }
                })();
            `}} />
        </div>
    );
};

export default SSGLayout;
