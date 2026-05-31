import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServicesPage = () => {
  return (
    <div style={globalStyles.pageWrapper}>
      {/* Global CSS for Animations, Hover States, and Responsive Overrides */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeup { animation: fadeInUp 0.6s ease-out forwards; }
        
        /* Interactive Blueprint Hover States matching Homepage precisely */
        .interactive-service-card {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease !important;
        }
        .interactive-service-card:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 20px 40px -5px rgba(0, 129, 143, 0.15), 0 8px 20px -3px rgba(0, 129, 143, 0.05) !important;
        }
        .btn-hover-transition { transition: all 0.2s ease !important; }
        .btn-hover-transition:hover { transform: translateY(-2px) !important; opacity: 0.95; }
        
        .split-banner-hover { transition: transform 0.5s ease; }
        .split-banner-container:hover .split-banner-hover { transform: scale(1.02); }
      `}</style>

      <Navbar />

      {/* Redesigned Premium Plain Dark Blue Hero Header Section */}
      <header style={styles.hero}>
        <div style={styles.container}>
          <div style={styles.heroContent} className="animate-fadeup">
            <span style={styles.heroTag}>What We Do</span>
            <h1 style={styles.heroHeading}>Our Services</h1>
          </div>
        </div>
      </header>

      {/* 3x2 Main Services Grid Section */}
      <section style={{ ...styles.section, backgroundColor: '#F8FAFC' }}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <span style={styles.sectionTag}>Core Solutions</span>
            <h2 style={styles.sectionTitle}>Professional Recruitment Ecosystems</h2>
            <p style={styles.sectionSub}>Streamlined frameworks structured to handle everything from executive search pipelines to volume placement logistics.</p>
          </div>

          <div style={styles.gridThree}>
            {/* 01. RPO — Burgundy Accent */}
            <div style={{ ...styles.serviceCard, borderTop: '5px solid #6E1D14' }} className="interactive-service-card">
              <div>
                <div style={{ ...styles.cardNumber, color: 'rgba(110, 29, 20, 0.12)' }}>01</div>
                <h3 style={styles.cardHeading}>Recruitment Process Outsourcing (RPO)</h3>
                <p style={styles.cardText}>
                  Streamline your structural hiring operations. We manage the entire recruitment lifecycle end-to-end, unlocking absolute operational freedom so you can scale core operations.
                </p>
              </div>
            </div>

            {/* 02. Executive Recruitment — Cyan Accent */}
            <div style={{ ...styles.serviceCard, borderTop: '5px solid #00818F' }} className="interactive-service-card">
              <div>
                <div style={{ ...styles.cardNumber, color: 'rgba(0, 129, 143, 0.12)' }}>02</div>
                <h3 style={styles.cardHeading}>Executive Recruitment</h3>
                <p style={styles.cardText}>
                  We specialize in sourcing and placing top-tier executives capable of charting enterprise roadmaps. Our deep executive network matches the right leader with your strategic vision.
                </p>
              </div>
            </div>

            {/* 03. Specialist Skill Recruitment — Slate Accent */}
            <div style={{ ...styles.serviceCard, borderTop: '5px solid #334155' }} className="interactive-service-card">
              <div>
                <div style={{ ...styles.cardNumber, color: 'rgba(51, 65, 85, 0.12)' }}>03</div>
                <h3 style={styles.cardHeading}>Specialist Skill Recruitment</h3>
                <p style={styles.cardText}>
                  Catering directly to specialized functions across Engineering, IT, Healthcare, and Corporate Finance. Our niche domain divisions source talent with the exact credentials you request.
                </p>
              </div>
            </div>

            {/* 04. Headhunting — Burgundy Accent */}
            <div style={{ ...styles.serviceCard, borderTop: '5px solid #6E1D14' }} className="interactive-service-card">
              <div>
                <div style={{ ...styles.cardNumber, color: 'rgba(110, 29, 20, 0.12)' }}>04</div>
                <h3 style={styles.cardHeading}>Targeted Headhunting</h3>
                <p style={styles.cardText}>
                  Engage high-value passive candidates who aren’t actively browsing job boards. Every strategic outreach path integrates strict behavioral assessments and meticulous team alignment roadmaps.
                </p>
              </div>
            </div>

            {/* 05. Bulk & Contract Staffing — Cyan Accent */}
            <div style={{ ...styles.serviceCard, borderTop: '5px solid #00818F' }} className="interactive-service-card">
              <div>
                <div style={{ ...styles.cardNumber, color: 'rgba(0, 129, 143, 0.12)' }}>05</div>
                <h3 style={styles.cardHeading}>Bulk & Contract Staffing</h3>
                <p style={styles.cardText}>
                  Scale production rapidly during seasonal demand peaks or complex project kickoffs. We absorb your end-to-end payroll administration risk and operational bottlenecks seamlessly.
                </p>
              </div>
            </div>

            {/* 06. Efficient Temp Recruitment — Slate Accent */}
            <div style={{ ...styles.serviceCard, borderTop: '5px solid #334155' }} className="interactive-service-card">
              <div>
                <div style={{ ...styles.cardNumber, color: 'rgba(51, 65, 85, 0.12)' }}>06</div>
                <h3 style={styles.cardHeading}>Efficient Temp Recruitment</h3>
                <p style={styles.cardText}>
                  Leverage our cutting-edge staffing app to request, track, and manage vetted talent on demand. Built cleanly to support fast, same-day site deployment requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Split Feature Banner Section */}
      <section style={{ ...styles.section, backgroundColor: '#FFFFFF', padding: '90px 0' }}>
        <div style={styles.container}>
          <div style={styles.splitLayout}>
            
            {/* Left Column: Candidate Training */}
            <div style={styles.splitBox} className="split-banner-container">
              <div style={styles.splitImageWrapper}>
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop" 
                  alt="Corporate Training Workspace" 
                  style={styles.splitImage} 
                  className="split-banner-hover"
                />
                <div style={styles.splitOverlay}></div>
                <div style={styles.splitTextContent}>
                  <span style={styles.splitTag}>Empowering Candidates</span>
                  <h3 style={styles.splitTitle}>Skills Training & Development</h3>
                  <p style={styles.splitText}>We equip talent pipelines with practical technical skillsets, workforce confidence, and market insights to excel right from day one.</p>
                  
                  {/* Fixed Button Layout Configuration Container */}
                  <div style={styles.splitBtnGroup}>
                    <a href="https://calendly.com/recruitment-insphired/book-a-consultation-with-a-client-relationship-manager?month=2026-05" style={styles.splitBtnPrimary} className="btn-hover-transition">
                      Book Consultation <i className="fas fa-calendar-alt" style={{ marginLeft: '8px' }}></i>
                    </a>
                    <a href="https://insphired.jobs/contact-me-form/" style={styles.splitBtnSecondary} className="btn-hover-transition">
                      Request Call Back <i className="fas fa-phone-alt" style={{ marginLeft: '8px' }}></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Background Verification Checklist */}
            <div style={styles.verificationBox}>
              <span style={styles.verificationTag}>Risk Management</span>
              <h3 style={styles.verificationTitle}>Employment Verification & Background Screening</h3>
              <p style={styles.verificationSub}>Protect company culture and verify integrity parameters using absolute data transparency protocols.</p>
              
              <ul style={styles.vList}>
                <li style={styles.vItem}><div style={styles.vCheck}><i className="fas fa-check"></i></div> <span><strong>Biometric Criminal Checks</strong> — Secure digital identity clearance.</span></li>
                <li style={styles.vItem}><div style={styles.vCheck}><i className="fas fa-check"></i></div> <span><strong>ID, Work Permits & Drivers Licenses</strong> — Strict regional legal validations.</span></li>
                <li style={styles.vItem}><div style={styles.vCheck}><i className="fas fa-check"></i></div> <span><strong>Education Qualifications</strong> — Direct authentication with academic bodies.</span></li>
                <li style={styles.vItem}><div style={styles.vCheck}><i className="fas fa-check"></i></div> <span><strong>Employment References</strong> — Complete audio recorded historical verifications.</span></li>
                <li style={styles.vItem}><div style={styles.vCheck}><i className="fas fa-check"></i></div> <span><strong>Interview Assistance Panels</strong> — Expert cross-examinations for target roles.</span></li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Styling Configuration Schema
const globalStyles = {
  pageWrapper: {
    fontFamily: "'Inter', sans-serif",
    color: '#334155',
    backgroundColor: '#FFFFFF',
    lineHeight: 1.6,
  }
};

const styles = {
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 32px',
    width: '100%',
  },
  hero: {
    position: 'relative',
    padding: '130px 0 100px 0',
    color: '#FFFFFF',
    backgroundColor: '#0B1329', // Solid premium deep corporate navy blue matching Career Lab layout exactly
    overflow: 'hidden',
  },
  heroContent: {
    maxWidth: '640px',
    position: 'relative',
    zIndex: 2,
  },
  heroTag: {
    fontSize: '0.8rem',
    letterSpacing: '2px',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: '#00818F',
    backgroundColor: 'rgba(0, 129, 143, 0.12)',
    padding: '6px 14px',
    borderRadius: '20px',
    display: 'inline-block',
    marginBottom: '18px'
  },
  heroHeading: {
    fontSize: '3.6rem',
    fontWeight: 800,
    lineHeight: 1.15,
    margin: 0,
    color: '#FFFFFF',
    letterSpacing: '-1.5px'
  },
  section: {
    padding: '100px 0',
  },
  sectionHeader: {
    marginBottom: '64px',
    textAlign: 'center',
  },
  sectionTag: {
    color: '#6E1D14',
    textTransform: 'uppercase',
    fontSize: '0.85rem',
    fontWeight: 700,
    letterSpacing: '2px',
    display: 'block',
    marginBottom: '10px',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 800,
    marginBottom: '16px',
    color: '#1E2223',
    letterSpacing: '-0.5px'
  },
  sectionSub: {
    color: '#64748B',
    maxWidth: '640px',
    margin: '0 auto',
    fontSize: '1.1rem',
  },
  gridThree: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    gap: '32px',
  },
  serviceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    padding: '44px 36px',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)',
    border: '1px solid #E2E8F0',
  },
  cardNumber: {
    fontSize: '3.2rem',
    fontWeight: 800,
    lineHeight: 1,
    marginBottom: '16px',
  },
  cardHeading: {
    fontSize: '1.35rem',
    fontWeight: 700,
    marginBottom: '14px',
    color: '#1E2223',
    lineHeight: 1.3,
  },
  cardText: {
    color: '#475569',
    fontSize: '0.96rem',
    lineHeight: 1.65,
  },
  splitLayout: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(45%, 1fr))',
    gap: '64px',
    alignItems: 'center',
  },
  splitBox: {
    borderRadius: '20px',
    overflow: 'hidden',
    position: 'relative',
    height: '460px',
    boxShadow: '0 20px 40px rgba(15,17,18,0.08)'
  },
  splitImageWrapper: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden'
  },
  splitImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  splitOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to top, rgba(15,17,18,0.95) 0%, rgba(15,17,18,0.4) 60%, rgba(0,0,0,0) 100%)',
    zIndex: 2,
  },
  splitTextContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: '40px',
    zIndex: 3,
    color: 'white',
  },
  splitTag: {
    color: '#00818F',
    textTransform: 'uppercase',
    fontSize: '0.8rem',
    fontWeight: 700,
    letterSpacing: '2px',
    display: 'block',
    marginBottom: '8px',
  },
  splitTitle: {
    fontSize: '1.8rem',
    fontWeight: 800,
    marginBottom: '12px',
    letterSpacing: '-0.5px'
  },
  splitText: {
    opacity: 0.85,
    fontSize: '0.96rem',
    marginBottom: '24px',
    lineHeight: 1.6
  },
  splitBtnGroup: {
    display: 'flex',
    gap: '14px',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  splitBtnPrimary: {
    backgroundColor: '#00818F',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '40px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '0.9rem',
    display: 'inline-flex',
    alignItems: 'center',
  },
  splitBtnSecondary: {
    backgroundColor: 'transparent',
    color: 'white',
    padding: '11px 23px',
    borderRadius: '40px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '0.9rem',
    display: 'inline-flex',
    alignItems: 'center',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(4px)',
  },
  verificationBox: {
    padding: '10px 0',
  },
  verificationTag: {
    color: '#6E1D14',
    textTransform: 'uppercase',
    fontSize: '0.85rem',
    fontWeight: 700,
    letterSpacing: '2px',
    display: 'block',
    marginBottom: '10px',
  },
  verificationTitle: {
    fontSize: '2.2rem',
    fontWeight: 800,
    color: '#1E2223',
    lineHeight: 1.2,
    marginBottom: '16px',
    letterSpacing: '-0.5px'
  },
  verificationSub: {
    color: '#64748B',
    fontSize: '1.05rem',
    marginBottom: '32px',
  },
  vList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  vItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    marginBottom: '20px',
    fontSize: '0.98rem',
    color: '#475569',
  },
  vCheck: {
    backgroundColor: 'rgba(0, 129, 143, 0.08)',
    color: '#00818F',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.75rem',
    flexShrink: 0,
    marginTop: '2px',
  }
};

export default ServicesPage;