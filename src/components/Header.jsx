import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
    { name: 'Home', to: 'https://precisionimagingus.com/' },
    { name: 'Ultrasound Services', to: 'https://precisionimagingus.com/#/#services' },
    { name: 'Self-Pay Options', to: 'https://precisionimagingus.com/#/#self-pay' },
    { name: 'What to Expect', to: 'https://precisionimagingus.com/#/#what-to-expect' },
    { name: 'Why Choose Us', to: 'https://precisionimagingus.com/#/#why-choose-us' },
    { name: 'Contact Us', to: 'https://precisionimagingus.com/#/contact' },
  ];

  return (
    <header className="site-header">
      <input type="checkbox" id="mobile-menu-toggle" />
      <div className="container header-inner">
        <a href="/"><Logo animated={true} /></a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="header-nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.to}
                  className="nav-link"
                >
                  {link.name}
                </a>
              </li>
            ))}
            {/* Book Now Button */}
            <li>
              <a
                href="https://precisionimagingus.com/#/booking"
                className="btn btn-primary header-book-btn"
              >
                Book Now
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <label
          htmlFor="mobile-menu-toggle"
          className="mobile-toggle"
          id="mobile-menu-btn"
        >
          <span className="hamburger-icon">☰</span>
        </label>
      </div>

      <div
        id="mobile-menu-container"
        className="mobile-menu-container"
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.to}
            className="mobile-nav-link"
          >
            {link.name}
          </a>
        ))}
        <a
          href="https://precisionimagingus.com/#/booking"
          className="btn btn-primary mobile-book-btn"
        >
          Book Now
        </a>
      </div>
    </header>
  );
};

export default Header;
