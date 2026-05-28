import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.footerGrid}>
          <div style={styles.footerBrand}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={styles.logoIcon} aria-hidden="true">
                <i className="fas fa-briefcase"></i>
              </div>
              <span style={styles.logoText}>InspHired</span>
            </div>
            <p style={styles.brandDesc}>
              Combating corporate unemployment structural friction across Africa via custom engineering.
            </p>
          </div>

          <div style={styles.footerLinksSection}>
            <h4 style={styles.footerHeading}>Quick Links</h4>
            <ul style={styles.linkList}>
              <li style={styles.linkItem}><a href="#" style={styles.link}>Open jobs</a></li>
              <li style={styles.linkItem}><a href="#" style={styles.link}>For employers</a></li>
              <li style={styles.linkItem}><a href="#" style={styles.link}>Services</a></li>
              <li style={styles.linkItem}><a href="#" style={styles.link}>About Us</a></li>
            </ul>
          </div>

          <div style={styles.footerLinksSection}>
            <h4 style={styles.footerHeading}>Solutions</h4>
            <ul style={styles.linkList}>
              <li style={styles.linkItem}><a href="#" style={styles.link}>VerifyMe Technologies</a></li>
              <li style={styles.linkItem}><a href="#" style={styles.link}>InspHired Worx</a></li>
              <li style={styles.linkItem}><a href="#" style={styles.link}>InspHired Connect</a></li>
            </ul>
          </div>

          <div style={styles.footerSocial}>
            <h4 style={styles.footerHeading}>Connect With Us</h4>
            <div style={styles.socialIcons}>
              <a href="#" style={styles.socialIconLink} aria-label="LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" style={styles.socialIconLink} aria-label="Twitter Profile"><i className="fab fa-twitter"></i></a>
              <a href="#" style={styles.socialIconLink} aria-label="Facebook Profile"><i className="fab fa-facebook-f"></i></a>
              <a href="#" style={styles.socialIconLink} aria-label="Instagram Profile"><i className="fab fa-instagram"></i></a>
            </div>
            <p style={styles.contactText}><i className="fas fa-envelope" aria-hidden="true" style={{ width: '20px' }}></i> hello@insphired.com</p>
            <p style={styles.contactText}><i className="fas fa-phone-alt" aria-hidden="true" style={{ width: '20px' }}></i> +254 700 123 456</p>
          </div>
        </div>

        <div style={styles.copyright}>
          &copy; {currentYear} InspHired — Africa's Recruitment Partner. All rights reserved. | Empowering the African workforce.
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#6E1D14', // Synchronized Brand Deep Burgundy
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
    gridTemplateColumns: '2fr repeat(3, 1fr)',
    gap: '48px',
    marginBottom: '64px',
  },
  footerBrand: {
    display: 'flex',
    flexDirection: 'column',
  },
  logoIcon: {
    background: 'white',
    color: '#6E1D14',
    width: '36px',
    height: '36px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: 800,
    color: 'white',
  },
  brandDesc: {
    marginTop: '16px',
    maxWidth: '300px',
    opacity: 0.9,
    lineHeight: 1.6,
  },
  footerHeading: {
    color: 'white',
    marginBottom: '24px',
    fontWeight: 700,
    fontSize: '1.05rem',
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
  },
  linkItem: {
    marginBottom: '12px',
  },
  link: {
    color: '#E2E8F0',
    textDecoration: 'none',
    opacity: 0.85,
    transition: 'opacity 0.2s, color 0.2s',
  },
  footerSocial: {
    display: 'flex',
    flexDirection: 'column',
  },
  socialIcons: {
    display: 'flex',
    gap: '12px',
    marginBottom: '24px',
  },
  socialIconLink: {
    color: '#6E1D14',
    backgroundColor: 'white',
    display: 'flex',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
  },
  contactText: {
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: '#E2E8F0',
    opacity: 0.85,
  },
  copyright: {
    textAlign: 'center',
    borderTop: '1px solid rgba(255,255,255,0.15)',
    paddingTop: '40px',
    fontSize: '0.85rem',
    color: '#E2E8F0',
    opacity: 0.75,
  }
};

export default Footer;