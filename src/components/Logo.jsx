import React from 'react';

const Logo = ({ animated = false, theme = 'light' }) => {
  const isDark = theme === 'dark';
  const primaryColor = isDark ? '#ffffff' : 'var(--color-primary-navy)';
  const secondaryColor = isDark ? 'var(--color-sky-blue)' : 'var(--color-secondary-blue)';
  const gradientStart = isDark ? '#ebf8ff' : '#4299e1';
  const gradientEnd = isDark ? '#bee3f8' : '#2b6cb0';

  return (
    <div className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '0px' }}>
      <svg
        width="80"
        height="40"
        viewBox="0 0 120 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={animated ? "animated-logo-svg" : ""}
      >
        <path
          className="logo-wave-path"
          d="M0 30H15L20 20L30 40L40 10L50 50L60 20L70 40L75 30H120"
          stroke="url(#waveGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength="1"
        />
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="30" x2="120" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={gradientStart} />
            <stop offset="75%" stopColor={gradientEnd} stopOpacity="1" />
            <stop offset="100%" stopColor={gradientEnd} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1', alignItems: 'center', marginLeft: '-15px' }}>
        <span style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          color: primaryColor,
          letterSpacing: '-0.02em'
        }}>
          Precision
        </span>
        <span style={{
          fontSize: '1.2rem',
          fontWeight: '500',
          color: secondaryColor,
          marginTop: '-2px'
        }}>
          Imaging
        </span>
      </div>
    </div>
  );
};

export default Logo;
