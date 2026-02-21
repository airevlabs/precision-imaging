import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if a link is active (simple check for hash or pathname)
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/' && !location.hash) return true;
    if (path.startsWith('/#') && location.hash === path.substring(1)) return true;
    return location.pathname === path;
  };

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Ultrasound Services', to: '/#services' },
    { name: 'Self-Pay Options', to: '/#self-pay' },
    { name: 'What to Expect', to: '/#what-to-expect' },
    { name: 'Why Choose Us', to: '/#why-choose-us' },
    // Book Now is handled separately as a button
  ];

  return (
    <header
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: isScrolled ? '0.75rem 0' : '1.5rem 0',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        boxShadow: isScrolled ? 'var(--shadow-md)' : 'none',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        transition: 'var(--transition-smooth)'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/"><Logo animated={true} /></Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={{ display: 'none' }}>
          <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                {/* Use a tag for hash links to allow simple anchor behavior on same page, or Link for routing */}
                {/* Actually Link to="/#hash" works fine with our ScrollToAnchor component */}
                <Link
                  to={link.to}
                  style={{
                    fontWeight: '600',
                    fontSize: '0.925rem',
                    color: 'var(--color-primary-navy)',
                    position: 'relative'
                  }}
                  className="nav-link"
                >
                  {link.name}
                  <style>{`
                    .nav-link::after {
                      content: '';
                      position: absolute;
                      bottom: -4px;
                      left: 0;
                      width: 0;
                      height: 2px;
                      background-color: var(--color-secondary-blue);
                      transition: var(--transition-smooth);
                    }
                    .nav-link:hover::after {
                      width: 100%;
                    }
                  `}</style>
                </Link>
              </li>
            ))}
            {/* Book Now Button */}
            <li>
              <Link
                to="/booking"
                className="btn btn-primary"
                style={{
                  padding: '0.75rem 1.5rem',
                  fontSize: '0.9rem',
                  borderRadius: '9999px', // Rounded full like pills
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
              >
                Book Now
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            fontSize: '1.5rem',
            color: 'var(--color-primary-navy)',
            zIndex: 1001
          }}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: 'var(--color-white)',
              padding: '2rem',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              zIndex: 999
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ fontWeight: '600', color: 'var(--color-primary-navy)' }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn btn-primary"
              style={{
                textAlign: 'center',
                padding: '0.75rem',
                borderRadius: '0.5rem'
              }}
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (min-width: 1024px) {
          .desktop-nav { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
