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
        </div>
    );
};

export default SSGLayout;
