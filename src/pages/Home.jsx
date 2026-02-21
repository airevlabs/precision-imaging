import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Services from '../components/Services';
import SelfPay from '../components/SelfPay';
import WhatToExpect from '../components/WhatToExpect';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div className="pt-16">
            <SEO
                canonical="https://precisionimagingus.com/"
            />
            <Hero />
            <Services />
            <SelfPay />
            <WhatToExpect />
            <WhyChooseUs />
            <Contact />
        </div>
    );
};

export default Home;
