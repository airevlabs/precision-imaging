import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

import Home from './pages/Home';
import Booking from './pages/Booking';
import Hipaa from './pages/Hipaa';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import AbdomenUltrasound from './pages/services/AbdomenUltrasound';
import AortaScreening from './pages/services/AortaScreening';
import BreastUltrasound from './pages/services/BreastUltrasound';
import CarotidScreening from './pages/services/CarotidScreening';
import Echocardiogram from './pages/services/Echocardiogram';
import KidneysBladderUltrasound from './pages/services/KidneysBladderUltrasound';
import ObUltrasound from './pages/services/ObUltrasound';
import PediatricImaging from './pages/services/PediatricImaging';
import PelvicUltrasound from './pages/services/PelvicUltrasound';
import SoftTissueUltrasound from './pages/services/SoftTissueUltrasound';
import ThyroidUltrasound from './pages/services/ThyroidUltrasound';
import VascularUltrasound from './pages/services/VascularUltrasound';
import ContactPage from './pages/ContactPage';

// ScrollToAnchor component to handle hash scrolling on route change
const ScrollToAnchor = () => {
  const { pathname, hash } = useLocation();
  const topPages = ['/contact', '/booking', '/hipaa', '/privacy', '/terms'];

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 100);
      }
    } else if (topPages.includes(pathname)) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <div className="app">
      <ScrollToAnchor />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/hipaa" element={<Hipaa />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/services/abdomen-ultrasound" element={<AbdomenUltrasound />} />
        <Route path="/services/aorta-screening" element={<AortaScreening />} />
        <Route path="/services/breast-ultrasound" element={<BreastUltrasound />} />
        <Route path="/services/carotid-screening" element={<CarotidScreening />} />
        <Route path="/services/echocardiogram" element={<Echocardiogram />} />
        <Route path="/services/kidneys-bladder-ultrasound" element={<KidneysBladderUltrasound />} />
        <Route path="/services/ob-ultrasound" element={<ObUltrasound />} />
        <Route path="/services/pediatric-imaging" element={<PediatricImaging />} />
        <Route path="/services/pelvic-ultrasound" element={<PelvicUltrasound />} />
        <Route path="/services/soft-tissue-ultrasound" element={<SoftTissueUltrasound />} />
        <Route path="/services/thyroid-ultrasound" element={<ThyroidUltrasound />} />
        <Route path="/services/vascular-ultrasound" element={<VascularUltrasound />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
