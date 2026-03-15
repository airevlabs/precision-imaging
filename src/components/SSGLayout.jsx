import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import FloatingContactForm from './FloatingContactForm';

const SSGLayout = ({ children }) => {
    return (
        <div className="app">
            <div id="ghl-scroll-sentinel" style={{ position: 'absolute', top: 0, left: 0, width: '1px', height: '10px', pointerEvents: 'none', visibility: 'hidden' }}></div>
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
                        const sentinel = document.getElementById('ghl-scroll-sentinel');
                        if (!header || !sentinel) return;

                        const headerObserver = new IntersectionObserver((entries) => {
                            entries.forEach(entry => {
                                // When sentinel is NOT intersecting (it scrolled up out of view), add scrolled!
                                if (!entry.isIntersecting) {
                                    header.classList.add('scrolled');
                                } else {
                                    header.classList.remove('scrolled');
                                }
                            });
                        }, { threshold: 0 });

                        headerObserver.observe(sentinel);
                        
                        // Fallback scroll listener just in case they are scrolling the window natively
                        window.addEventListener('scroll', () => {
                            if (window.scrollY > 20) {
                                header.classList.add('scrolled');
                            } else if (sentinel.getBoundingClientRect().top >= 0) {
                                header.classList.remove('scrolled');
                            }
                        }, { passive: true, capture: true });
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
