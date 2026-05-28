import React, { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // State tracking to manage hover styles dynamically across list links
  const [hoveredKey, setHoveredKey] = useState(null);
  // State tracking for the circular social icon buttons
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const quickLinks = [
    { text: 'Open jobs', href: '#' },
    { text: 'For employers', href: '#' },
    { text: 'Services', href: '#' },
    { text: 'About Us', href: '#' }
  ];

  const solutionsLinks = [
    { text: 'VerifyMe Technologies', href: '#' },
    { text: 'InspHired Worx', href: '#' },
    { text: 'InspHired Connect', href: '#' }
  ];

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.footerGrid}>
          
          {/* Brand Column with Logo */}
          <div style={styles.footerBrand}>
            <a href="#" style={styles.logoArea}>
              <img 
                src="/assets/d3058fff-66c9-4472-9b21-56f5649eaa18.png" 
                alt="InspHired Recruitment Solutions" 
                style={styles.logoImage} 
              />
            </a>
            <p style={styles.brandDesc}>
              Combating corporate unemployment structural friction across Africa via custom engineering solutions.
            </p>
          </div>

          {/* Quick Links Column */}
          <div style={styles.footerLinksSection}>
            <h4 style={styles.footerHeading}>Quick Links</h4>
            <ul style={styles.linkList}>
              {quickLinks.map((link, i) => (
                <li key={i} style={styles.linkItem}>
                  <a 
                    href={link.href} 
                    style={{
                      ...styles.link,
                      color: hoveredKey === `q-${i}` ? '#00818F' : '#E2E8F0',
                      opacity: hoveredKey === `q-${i}` ? 1 : 0.85
                    }}
                    onMouseEnter={() => setHoveredKey(`q-${i}`)}
                    onMouseLeave={() => setHoveredKey(null)}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div style={styles.footerLinksSection}>
            <h4 style={styles.footerHeading}>Solutions</h4>
            <ul style={styles.linkList}>
              {solutionsLinks.map((link, i) => (
                <li key={i} style={styles.linkItem}>
                  <a 
                    href={link.href} 
                    style={{
                      ...styles.link,
                      color: hoveredKey === `s-${i}` ? '#00818F' : '#E2E8F0',
                      opacity: hoveredKey === `s-${i}` ? 1 : 0.85
                    }}
                    onMouseEnter={() => setHoveredKey(`s-${i}`)}
                    onMouseLeave={() => setHoveredKey(null)}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* NEW: Explicitly Configured Contact & Social Columns */}
          <div style={styles.footerContactSection}>
            <h4 style={styles.footerHeading}>Contact Us</h4>
            <div style={styles.contactContainer}>
              <p style={styles.contactText}>
                <i className="fas fa-envelope" aria-hidden="true" style={styles.contactIcon}></i> 
                <a href="mailto:info@insphired.co.za" style={styles.contactLink}>info@insphired.co.za</a>
              </p>
              <p style={styles.contactText}>
                <i className="fas fa-phone-alt" aria-hidden="true" style={styles.contactIcon}></i> 
                <a href="tel:+27114635540" style={styles.contactLink}>++27 11 463 5540</a>
              </p>
              <p style={styles.contactText}>
                <i className="fas fa-map-marker-alt" aria-hidden="true" style={styles.contactIcon}></i>
                <span style={styles.contactLink}>Brynston, Gauteng, South Africa</span>
              </p>
            </div>

            <div style={styles.socialIconsContainer}>
              {['linkedin-in', 'twitter', 'facebook-f', 'instagram'].map((platform, index) => (
                <a 
                  key={index}
                  href="#" 
                  style={{
                    ...styles.socialIconLink,
                    backgroundColor: hoveredSocial === index ? '#00818F' : 'white',
                    color: hoveredSocial === index ? 'white' : '#6E1D14',
                    transform: hoveredSocial === index ? 'translateY(-3px)' : 'translateY(0)'
                  }} 
                  aria-label={`${platform} Profile`}
                  onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  <i className={`fab fa-${platform}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Base Bar */}
        <div style={styles.copyright}>
          &copy; {currentYear} InspHired — Africa's Recruitment Partner. All rights reserved. | Empowering the African workforce.
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#6E1D14', // Synchronized Deep Burgundy Background
    color: '#F8FAFC',
    padding: '80px 0 40px',
    fontSize: '0.95rem',
    fontFamily: "'Inter', sans-serif",
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 32px',
  },
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: '2fr repeat(2, 1fr) 1.25fr', // Balanced layout columns
    gap: '48px',
    marginBottom: '64px',
  },
  footerBrand: {
    display: 'flex',
    flexDirection: 'column',
  },
  logoArea: {
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
    width: 'fit-content',
    marginBottom: '8px'
  },
  logoImage: {
    height: '48px',
    width: 'auto',
    objectFit: 'contain',
    display: 'block',
    backgroundColor: 'rgba(255,255,255,0.95)', // Subtle backdrop shielding contrast against burgundy
    padding: '6px 12px',
    borderRadius: '8px'
  },
  brandDesc: {
    marginTop: '16px',
    maxWidth: '300px',
    opacity: 0.85,
    lineHeight: 1.6,
    fontSize: '0.92rem'
  },
  footerHeading: {
    color: 'white',
    marginBottom: '24px',
    fontWeight: 700,
    fontSize: '1.05rem',
    letterSpacing: '0.5px'
  },
  footerLinksSection: {
    display: 'flex',
    flexDirection: 'column',
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  linkItem: {
    marginBottom: '14px',
  },
  link: {
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'all 0.25s ease',
  },
  footerContactSection: {
    display: 'flex',
    flexDirection: 'column',
  },
  contactContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    marginBottom: '24px'
  },
  contactText: {
    display: 'flex',
    alignItems: 'flex-start',
    margin: 0,
    fontSize: '0.92rem',
  },
  contactIcon: {
    width: '20px',
    color: 'white',
    fontSize: '0.95rem',
    marginTop: '4px',
    opacity: 0.9
  },
  contactLink: {
    color: '#E2E8F0',
    textDecoration: 'none',
    opacity: 0.85,
    lineHeight: '1.4',
    transition: 'color 0.2s',
  },
  socialIconsContainer: {
    display: 'flex',
    gap: '12px',
    marginTop: '4px'
  },
  socialIconLink: {
    display: 'flex',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
    textDecoration: 'none',
  },
  copyright: {
    textAlign: 'center',
    borderTop: '1px solid rgba(255,255,255,0.12)',
    paddingTop: '40px',
    fontSize: '0.85rem',
    color: '#E2E8F0',
    opacity: 0.7,
  }
};

export default Footer;