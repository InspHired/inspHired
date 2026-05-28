import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navContainer}>
        <a href="#" style={styles.logoArea}>
          {/* Using the real company logo asset */}
          <img 
            src="/assets/d3058fff-66c9-4472-9b21-56f5649eaa18.png" 
            alt="InspHired Recruitment Solutions" 
            style={styles.logoImage} 
          />
        </a>
        <ul style={styles.navLinks}>
          <li><a href="#" style={styles.navLink}>Home</a></li>
          <li><a href="#" style={styles.navLink}>Open jobs</a></li>
          <li><a href="#" style={styles.navLink}>For employers</a></li>
          <li><a href="#" style={styles.navLink}>Services</a></li>
          <li><a href="#" style={styles.navLink}>About Us</a></li>
          <li>
            <a href="#" style={styles.ctaNav}>
              <i className="fas fa-user-plus" aria-hidden="true" style={{ marginRight: '8px' }}></i> 
              Get started
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
    padding: '12px 32px', // Slightly tightened for better image alignment
    maxWidth: '1280px',
    margin: '0 auto',
  },
  logoArea: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  /* Added the missing layout style block below */
  logoImage: {
    height: '45px',        // Constrains the height perfectly within the navigation bar
    width: 'auto',         // Maintains the original aspect ratio automatically
    objectFit: 'contain',  // Prevents the image from stretching or clipping
    display: 'block',
  },
  navLinks: {
    display: 'flex',
    gap: '32px',
    alignItems: 'center',
    listStyle: 'none',
  },
  navLink: {
    textDecoration: 'none',
    fontWeight: 500,
    color: '#1E2223',
    transition: 'color 0.2s',
    fontSize: '0.95rem',
  },
  ctaNav: {
    backgroundColor: '#00818F',
    color: 'white',
    padding: '10px 22px',
    borderRadius: '40px',
    fontWeight: 600,
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'background-color 0.2s',
  }
};

export default Navbar;