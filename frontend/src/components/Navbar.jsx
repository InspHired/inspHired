import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { text: 'Home', href: '/', internal: true },
    {
      text: 'Find Work',
      dropdown: [
        { text: 'Available Jobs', href: 'https://app.insphired.jobs/jobs?standalone=true', internal: false },
        { text: 'Career Lab', href: '/careerLab', internal: true }
      ]
    },
    { text: 'For Employers', href: '/employers', internal: true },
    {
      text: 'Our Services',
      dropdown: [
        { text: 'All Services', href: '/services', internal: true },
        { text: 'RPO', href: '/services#rpo', internal: true },
        { text: 'Executive Recruitment', href: '/services#executive', internal: true },
        { text: 'Specialist Recruitment', href: '/services#specialist', internal: true },
        { text: 'Targeted Headhunting', href: '/services#headhunting', internal: true },
        { text: 'Bulk & Contract Staffing', href: '/services#bulk', internal: true },
        { text: 'Temp Recruitment', href: '/services#temp', internal: true }
      ]
    },
    { text: 'Client Center', href: '/client-center', internal: true },
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
                <span
                  style={{
                    ...styles.navLink,
                    color: hoveredIndex === index ? '#00818F' : '#1E2223',
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}
                >
                  {item.text}
                  <i className="fas fa-chevron-down" style={styles.chevron}></i>
                </span>
              ) : (
                renderLink(item, {
                  ...styles.navLink,
                  color: hoveredIndex === index ? '#00818F' : '#1E2223'
                })
              )}

              {/* Dropdown panel */}
              {item.dropdown && activeDropdown === index && (
                <div style={styles.dropdownMenu}>
                  {item.dropdown.map((subLink, subIndex) => (
                    <React.Fragment key={subIndex}>
                      {renderLink(subLink, styles.dropdownItem)}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </li>
          ))}

          {/* CTA Button */}
          <li>
            <Link to="/get-started" style={styles.ctaNav}>
              <i className="fas fa-user-plus" aria-hidden="true" style={{ marginRight: '8px' }}></i>
              Get started
            </Link>
          </li>
        </ul>
      </div>

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
    gap: '24px',
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
  chevron: {
    fontSize: '0.75rem',
    marginLeft: '6px',
    opacity: 0.7,
  },
  dropdownMenu: {
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#FFFFFF',
    minWidth: '210px',
    boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1), 0 4px 12px -3px rgba(0,0,0,0.05)',
    borderRadius: '12px',
    padding: '8px 0',
    marginTop: '4px',
    border: '1px solid rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  dropdownItem: {
    color: '#334155',
    padding: '10px 16px',
    textDecoration: 'none',
    fontSize: '0.88rem',
    fontWeight: 500,
    textAlign: 'left',
    transition: 'all 0.2s ease',
    display: 'block',
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
    whiteSpace: 'nowrap',
    display: 'inline-flex',
    alignItems: 'center',
  },
};

export default Navbar;