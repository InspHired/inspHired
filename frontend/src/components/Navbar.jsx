import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navItems = [
    { text: 'Home', href: '/', internal: true },
    { text: 'Find Work', href: 'https://app.insphired.jobs/jobs?standalone=true', internal: false },
    { text: 'Career Lab', href: '/careerLab', internal: true },
    { text: 'For Employers', href: '/employers', internal: true },
    { text: 'Our Services', href: '/services', internal: true },
    { text: 'Client Center', href: '/client', internal: true },
    { text: 'About Us', href: '/about', internal: true },
    { text: 'Contact Us', href: '/contact', internal: true }
  ];

  const renderLink = (item, styleObj, children = item.text) => {
    if (item.internal) {
      return (
        <Link to={item.href} style={styleObj}>
          {children}
        </Link>
      );
    }
    return (
      <a href={item.href} style={styleObj} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navContainer}>
        {/* Brand Logo */}
        <Link to="/" style={styles.logoArea}>
          <img
            src="/assets/d3058fff-66c9-4472-9b21-56f5649eaa18.png"
            alt="InspHired Recruitment Solutions"
            style={styles.logoImage}
          />
        </Link>

        {/* Nav Links */}
        <ul style={styles.navLinks}>
          {navItems.map((item, index) => (
            <li key={index} style={{ position: 'relative' }}        
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}>
              {renderLink(item, {
                ...styles.navLink,
                color: hoveredIndex === index ? '#00818F' : '#1E2223'
              })}
              <span 
                style={{
                  ...styles.hoverIndicator,
                  transform: hoveredIndex === index ? 'scaleX(1)' : 'scaleX(0)'
                }}
              />
            </li>
          ))}

          {/* Cyan Blue Calendly CTA Button */}
          <li>
            <a 
              href="https://calendly.com/recruitment-insphired/book-a-consultation-with-a-client-relationship-manager?month=2026-05" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{
                ...styles.ctaNav,
                opacity: hoveredIndex === 'cta' ? 0.92 : 1,
                transform: hoveredIndex === 'cta' ? 'translateY(-1px)' : 'translateY(0)'
              }}
              onMouseEnter={() => setHoveredIndex('cta')}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <i className="fas fa-calendar-alt" aria-hidden="true" style={{ marginRight: '8px' }}></i>
              Book Consultation
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    background: 'rgba(255, 255, 255, 0.98)',
    backdropFilter: 'blur(8px)',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    borderBottom: '1px solid rgba(0,0,0,0.06)',
    fontFamily: "'Inter', sans-serif",
  },
  navContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 32px',
    maxWidth: '1280px',
    margin: '0 auto',
  },
  logoArea: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  logoImage: {
    height: '45px',
    width: 'auto',
    objectFit: 'contain',
    display: 'block',
  },
  navLinks: {
    display: 'flex',
    gap: '28px',
    alignItems: 'center',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navLink: {
    textDecoration: 'none',
    fontWeight: 600,
    transition: 'color 0.25s ease',
    fontSize: '0.92rem',
    display: 'inline-flex',
    alignItems: 'center',
    padding: '8px 0',
  },
  hoverIndicator: {
    position: 'absolute',
    bottom: '2px',
    left: 0,
    width: '100%',
    height: '2px',
    backgroundColor: '#00818F',
    transformOrigin: 'left',
    transition: 'transform 0.25s ease',
  },
  ctaNav: {
    backgroundColor: '#00818F', // Clean Cyan Blue matching branding exactly
    color: '#FFFFFF',
    padding: '10px 22px',
    borderRadius: '40px',
    fontWeight: 600,
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
    whiteSpace: 'nowrap',
    display: 'inline-flex',
    alignItems: 'center',
    boxShadow: '0 4px 12px rgba(0, 129, 143, 0.2)',
  }
};

export default Navbar;