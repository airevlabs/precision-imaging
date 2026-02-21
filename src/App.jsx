import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import FloatingContactForm from './components/FloatingContactForm';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Hipaa from './pages/Hipaa';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// ScrollToAnchor component to handle hash scrolling on route change
const ScrollToAnchor = () => {
  const { hash } = useLocation();

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
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="app">
        <ScrollToAnchor />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/hipaa" element={<Hipaa />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
        <BackToTop />
        <FloatingContactForm />
      </div>
    </Router>
  );
}

export default App;
