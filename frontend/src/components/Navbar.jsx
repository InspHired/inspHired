import React, { useState } from 'react';

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Grouped menu structure to save horizontal real estate
  const navItems = [
    { text: 'Home', href: '/' },
    { 
      text: 'Find Work', 
      dropdown: [
        { text: 'Available Jobs', href: 'https://app.insphired.jobs/jobs?standalone=true' },
        { text: 'Career Lab', href: '/careerLab' }
      ]
    },
    { 
      text: 'For Employers', 
      dropdown: [
        { text: 'Our Services', href: '/services' },
        { text: 'Client Center', href: '#' }
      ]
    },
    { text: 'About Us', href: '#' },
    { text: 'Contact Us', href: '#' }
  ];

  return (
    <nav style={styles.navbar}>
      <div style={styles.navContainer}>
        {/* Brand Logo Area */}
        <a href="#" style={styles.logoArea}>
          <img 
            src="/assets/d3058fff-66c9-4472-9b21-56f5649eaa18.png" 
            alt="InspHired Recruitment Solutions" 
            style={styles.logoImage} 
          />
        </a>

        {/* Dynamic Navigation Track */}
        <ul style={styles.navLinks}>
          {navItems.map((item, index) => (
            <li 
              key={index} 
              style={{ position: 'relative' }}
              onMouseEnter={() => {
                setHoveredIndex(index);
                if (item.dropdown) setActiveDropdown(index);
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setActiveDropdown(null);
              }}
            >
              {item.dropdown ? (
                // Dropdown Parent Header Item
                <span style={{
                  ...styles.navLink,
                  color: hoveredIndex === index ? '#00818F' : '#1E2223',
                  cursor: 'pointer'
                }}>
                  {item.text} <i className="fas fa-chevron-down" style={styles.chevron}></i>
                </span>
              ) : (
                // Standard Single Action Anchor Target
                <a 
                  href={item.href} 
                  style={{
                    ...styles.navLink,
                    color: hoveredIndex === index ? '#00818F' : '#1E2223'
                  }}
                >
                  {item.text}
                </a>
              )}

              {/* Renders the child nodes floating underneath */}
              {item.dropdown && activeDropdown === index && (
                <div style={styles.dropdownMenu}>
                  {item.dropdown.map((subLink, subIndex) => (
                    <a 
                      key={subIndex} 
                      href={subLink.href} 
                      style={styles.dropdownItem}
                      className="dropdown-hover-target"
                    >
                      {subLink.text}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
          
          {/* Main Action Endpoint Button */}
          <li>
            <a href="#" style={styles.ctaNav} className="btn-hover-transition">
              <i className="fas fa-user-plus" aria-hidden="true" style={{ marginRight: '8px' }}></i> 
              Get started
            </a>
          </li>
        </ul>
      </div>

      {/* Global overrides injecting native pseudo selectors for your sub-link item transitions */}
      <style>{`
        .dropdown-hover-target {
          transition: all 0.2s ease;
        }
        .dropdown-hover-target:hover {
          background-color: #F8FAFC !important;
          color: #00818F !important;
          padding-left: 20px !important;
        }
      `}</style>
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
    gap: '24px', // Reduced from 32px to stay compact
    alignItems: 'center',
    listStyle: 'none',
    margin: 0,
    padding: 0
  },
  navLink: {
    textDecoration: 'none',
    fontWeight: 600, // Kept at 600 for prominent brand look
    transition: 'color 0.25s ease',
    fontSize: '0.92rem', // Reduced slightly from 0.95rem to prevent compression lines
    display: 'inline-flex',
    alignItems: 'center',
    padding: '8px 0',
  },
  chevron: {
    fontSize: '0.75rem',
    marginLeft: '6px',
    opacity: 0.7
  },
  dropdownMenu: {
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#FFFFFF',
    minWidth: '180px',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 12px -3px rgba(0, 0, 0, 0.05)',
    borderRadius: '12px',
    padding: '8px 0',
    marginTop: '4px',
    border: '1px solid rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  dropdownItem: {
    color: '#334155',
    padding: '10px 16px',
    textDecoration: 'none',
    fontSize: '0.88rem',
    fontWeight: 500,
    textAlign: 'left'
  },
  ctaNav: {
    backgroundColor: '#00818F',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '40px',
    fontWeight: 600,
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap'
  }
};

export default Navbar;