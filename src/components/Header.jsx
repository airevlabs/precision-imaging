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
  ];

  return (
    <header className="site-header">
      <input type="checkbox" id="mobile-menu-toggle" style={{ display: 'none' }} />
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="https://precisionimagingus.com/"><Logo animated={true} /></a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={{ display: 'none' }}>
          <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.to}
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
                </a>
              </li>
            ))}
            {/* Book Now Button */}
            <li>
              <a
                href="https://precisionimagingus.com/#/booking"
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
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <label
          htmlFor="mobile-menu-toggle"
          className="mobile-toggle"
          id="mobile-menu-btn"
          style={{
            fontSize: '1.5rem',
            color: 'var(--color-primary-navy)',
            zIndex: 1001,
            cursor: 'pointer'
          }}
        >
          <span className="hamburger-icon">☰</span>
        </label>
      </div>

      <div
        id="mobile-menu-container"
        className="mobile-menu-container"
        style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'var(--color-white)',
          padding: '2rem',
          boxShadow: 'var(--shadow-lg)',
          flexDirection: 'column',
          gap: '1.5rem',
          zIndex: 999
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.to}
            className="mobile-nav-link"
            style={{ fontWeight: '600', color: 'var(--color-primary-navy)', fontSize: '1.1rem' }}
          >
            {link.name}
          </a>
        ))}
        <a
          href="https://precisionimagingus.com/#/booking"
          className="btn btn-primary"
          style={{
            textAlign: 'center',
            padding: '0.75rem',
            borderRadius: '0.5rem',
            fontWeight: '600'
          }}
        >
          Book Now
        </a>
      </div>

      <style jsx>{`
        /* Hide menu by default */
        .mobile-menu-container {
          display: none !important;
        }

        /* Show menu when checkbox is checked */
        #mobile-menu-toggle:checked ~ .mobile-menu-container {
          display: flex !important;
        }

        /* Change hamburger to X when open */
        #mobile-menu-toggle:checked ~ .container .mobile-toggle .hamburger-icon::before {
          content: '✕';
        }
        .hamburger-icon::before {
          content: '☰';
        }
        .hamburger-icon {
          font-size: 0; /* hides the original text */
        }
        .hamburger-icon::before {
          font-size: 1.5rem;
        }

        /* Hide checkbox when label is clicked, auto close menu */
        .mobile-nav-link {
          /* optional styling */
        }

        @media (min-width: 1024px) {
          .desktop-nav { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
