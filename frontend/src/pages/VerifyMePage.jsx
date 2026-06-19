import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const faqData = [
  { q: "What types of backgrounds can VerifyMe authenticate?", a: "We provide comprehensive authentication checks including South African ID verification, global qualification audits, criminal record clearances via biometric scans, and driver's license validation." },
  { q: "How long do typical screening pipelines take?", a: "Standard identity and credential verifications yield instant to 24-hour response vectors, while advanced background histories are completed within 48 hours." },
  { q: "Is the platform compliant with national privacy frameworks?", a: "Completely. The framework operates under strict POPIA compliance architectures, securing user data structures with end-to-end encryption protocols." }
];

/* ──────────────────────────────────────────────────────────────────────────
   STYLING ARCHITECTURE (Premium Navy, Deep Burgundy & Vibrant Deep Cyan)
────────────────────────────────────────────────────────────────────────── */
const styles = {
  pageWrapper: {
    fontFamily: "'Inter', sans-serif",
    color: '#334155',
    backgroundColor: '#FFFFFF',
    lineHeight: 1.65,
  },
  container: { 
    maxWidth: '1280px', 
    margin: '0 auto', 
    padding: '0 32px', 
    width: '100%' 
  },
  heroSection: {
    backgroundColor: '#0B1329',
    padding: '130px 0 100px 0',
    position: 'relative',
    overflow: 'hidden',
  },
  heroGrid: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    gap: '60px',
    alignItems: 'center'
  },
  eyebrow: {
    display: 'inline-block',
    fontSize: '0.8rem',
    letterSpacing: '2px',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: '#00818F',
    backgroundColor: 'rgba(0, 129, 143, 0.12)',
    padding: '6px 14px',
    borderRadius: '20px',
    marginBottom: '18px',
  },
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '20px'
  },
  appLogo: {
    width: '48px',
    height: '48px',
    objectFit: 'contain',
    filter: 'drop-shadow(0 4px 12px rgba(0, 129, 143, 0.25))'
  },
  pageTitle: {
    fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
    fontWeight: 800,
    color: '#FFFFFF',
    margin: 0,
    lineHeight: 1.15,
    letterSpacing: '-1.5px'
  },
  heroLead: {
    fontSize: '1.05rem',
    color: '#94A3B8',
    marginBottom: '32px',
    maxWidth: '580px',
    lineHeight: 1.7
  },
  btnRow: {
    display: 'flex',
    gap: '16px'
  },
  btnPrimary: {
    background: '#6E1D14',
    color: '#FFFFFF',
    padding: '14px 32px',
    borderRadius: '40px',
    textDecoration: 'none',
    fontWeight: 700,
    fontSize: '0.95rem',
    display: 'inline-flex',
    alignItems: 'center',
    boxShadow: '0 4px 14px rgba(110, 29, 20, 0.4)',
  },
  heroVisualWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  glassCard: {
    background: 'rgba(255, 255, 255, 0.07)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '24px',
    padding: '40px',
    boxShadow: '0 24px 50px -12px rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
    maxWidth: '340px',
    width: '100%',
  },
  iconContainer: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0, 129, 143, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 18px auto',
    border: '1px solid rgba(0, 129, 143, 0.25)'
  },
  heroCardIcon: {
    fontSize: '1.6rem',
    color: '#00818F'
  },
  heroCardTitle: {
    fontWeight: 800,
    fontSize: '1.2rem',
    margin: '0 0 8px 0',
    color: '#FFFFFF'
  },
  heroCardText: {
    fontSize: '0.88rem',
    margin: 0,
    color: '#94A3B8',
    lineHeight: 1.5
  },
  sectionWhite: {
    padding: '100px 0',
    backgroundColor: '#FFFFFF'
  },
  sectionLight: {
    padding: '100px 0',
    backgroundColor: '#F8FAFC'
  },
  splitRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(45%, 1fr))',
    gap: '64px',
    alignItems: 'center'
  },
  sectionHeading: {
    fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
    fontWeight: 800,
    color: '#6E1D14',
    lineHeight: 1.2,
    marginBottom: '16px',
    letterSpacing: '-0.5px'
  },
  bodyText: {
    fontSize: '1rem',
    color: '#334155',
    lineHeight: 1.7
  },
  quoteBlock: {
    marginTop: '24px',
    borderLeft: '4px solid #6E1D14',
    paddingLeft: '20px',
    fontStyle: 'italic',
    color: '#334155',
    fontSize: '0.98rem',
    lineHeight: 1.65,
    backgroundColor: '#F8FAFC',
    padding: '16px 20px 16px 24px',
    borderRadius: '0 12px 12px 0'
  },
  audienceCard: {
    background: '#FFFFFF',
    padding: '44px 36px',
    borderRadius: '20px',
    border: '1px solid #E2E8F0',
    boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.04)'
  },
  audienceHeading: {
    fontWeight: 800,
    fontSize: '1.2rem',
    marginBottom: '24px',
    color: '#0B1329',
    letterSpacing: '-0.3px'
  },
  bulletList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  centerHead: {
    textAlign: 'center',
    marginBottom: '64px'
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '32px'
  },
  featureCard: {
    background: '#FFFFFF',
    borderRadius: '16px',
    padding: '44px 36px',
    border: '1px solid #E2E8F0',
    boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)',
    position: 'relative',
    overflow: 'hidden'
  },
  featureIconWrap: {
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    backgroundColor: 'rgba(0, 129, 143, 0.08)',
    color: '#00818F',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    fontSize: '1.1rem'
  },
  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#0B1329',
    marginBottom: '12px'
  },
  cardText: {
    fontSize: '0.94rem',
    color: '#334155',
    lineHeight: 1.65,
    margin: 0
  },
  faqWrapper: {
    maxWidth: '780px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  faqCard: {
    background: '#FFFFFF',
    borderRadius: '14px',
    padding: '24px 28px',
    border: '1px solid #E2E8F0',
    transition: 'all 0.2s ease'
  },
  faqQuestion: {
    fontSize: '1rem',
    fontWeight: 700,
    color: '#0B1329',
    margin: '0 0 10px 0',
    display: 'flex',
    alignItems: 'center'
  },
  faqIcon: {
    marginRight: '14px',
    color: '#00818F',
    fontSize: '1.1rem',
    flexShrink: 0
  },
  faqAnswer: {
    fontSize: '0.94rem',
    color: '#334155',
    margin: 0,
    paddingLeft: '28px',
    lineHeight: 1.65
  },
  audienceItemIcon: {
    backgroundColor: 'rgba(0, 129, 143, 0.08)', 
    color: '#00818F', 
    width: '24px', 
    height: '24px', 
    borderRadius: '50%', 
    display: 'inline-flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    fontSize: '0.75rem', 
    marginRight: '14px',
    flexShrink: 0
  }
};

const VerifyMePage = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Global Animation Frames & Smooth Hover States */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeup { animation: fadeInUp 0.6s ease-out forwards; }
        
        .interactive-card {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease !important;
        }
        .interactive-card:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 20px 40px -5px rgba(0, 129, 143, 0.12), 0 8px 20px -3px rgba(0, 129, 143, 0.04) !important;
        }
        .btn-hover-transition { transition: all 0.2s ease !important; }
        .btn-hover-transition:hover { transform: translateY(-2px) !important; opacity: 0.95; }
        
        .faq-item-transition:hover {
          border-color: rgba(0, 129, 143, 0.25) !important;
          background-color: #F8FAFC !important;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.02) !important;
        }
      `}</style>

      <Navbar />

      {/* ── HERO SECTION ── */}
      <header style={styles.heroSection}>
        <div style={styles.container}>
          <div style={styles.heroGrid} className="animate-fadeup">
            <div>
              <span style={styles.eyebrow}>Automated Background Screening</span>
              <div style={styles.logoRow}>
                <img src="/assets/VerifyMe.png" alt="VerifyMe Logo" style={styles.appLogo} />
                <h1 style={styles.pageTitle}>VerifyMe</h1>
              </div>
              <p style={styles.heroLead}>
                A secure, frictionless candidate credential authentication system engineered to mitigate operational risk 
                and protect corporate ecosystems with high-fidelity validation.
              </p>
              <div style={styles.btnRow}>
                <a href="https://verifyme.insphired.jobs" target="_blank" rel="noreferrer" style={styles.btnPrimary} className="btn-hover-transition">
                  <i className="fas fa-external-link-alt" style={{marginRight: '8px'}}></i>Launch Console
                </a>
              </div>
            </div>
            <div style={styles.heroVisualWrap}>
              <div style={styles.glassCard}>
                <div style={styles.iconContainer}>
                  <i className="fas fa-shield-alt" style={styles.heroCardIcon}></i>
                </div>
                <h3 style={styles.heroCardTitle}>POPIA Secure</h3>
                <p style={styles.heroCardText}>Fully decentralized and encrypted applicant compliance workflows.</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── MISSION SECTION ── */}
      <section style={styles.sectionWhite}>
        <div style={styles.container}>
          <div style={styles.splitRow}>
            <div style={{flex: 1}}>
              <span style={{ ...styles.eyebrow, backgroundColor: 'rgba(0, 129, 143, 0.08)', color: '#00818F' }}>Risk Mitigation</span>
              <h2 style={styles.sectionHeading}>Uncompromising Integrity Checks</h2>
              <p style={styles.bodyText}>
                We streamline verification procedures by centralizing identity management, qualification audits, and reference parameters into a unified dashboard footprint.
              </p>
              <div style={styles.quoteBlock}>
                "To deliver ironclad validation tools that protect corporate infrastructure, reduce operational turnarounds, and empower talent networks with fully verifiable profiles."
              </div>
            </div>
            <div style={styles.audienceCard}>
              <h4 style={styles.audienceHeading}>Enterprise Security Benefits</h4>
              <ul style={styles.bulletList}>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}><div style={styles.audienceItemIcon}><i className="fas fa-check"></i></div><span><strong>HR Leaders:</strong> Execute candidate background screening smoothly without exiting the central panel.</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}><div style={styles.audienceItemIcon}><i className="fas fa-check"></i></div><span><strong>Risk Officers:</strong> Enforce complete protection paradigms over organizational placement tracks.</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}><div style={styles.audienceItemIcon}><i className="fas fa-check"></i></div><span><strong>SME Builders:</strong> Run individual profile evaluations securely on an flexible, agile pay-per-check plan.</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}><div style={styles.audienceItemIcon}><i className="fas fa-check"></i></div><span><strong>Job Seekers:</strong> Maintain permanent ownership of authentic digital career credentials.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── DETAILED FEATURES SECTION ── */}
      <section style={styles.sectionLight}>
        <div style={styles.container}>
          <div style={styles.centerHead}>
            <span style={{ ...styles.eyebrow, backgroundColor: 'rgba(0, 129, 143, 0.08)', color: '#00818F' }}>Identity Infrastructure</span>
            <h2 style={styles.sectionHeading}>Core Screening Foundations</h2>
          </div>

          <div style={styles.featureGrid}>
            <div style={{ ...styles.featureCard, borderTop: '5px solid #6E1D14' }} className="interactive-card">
              <div style={styles.featureIconWrap}>
                <i className="fas fa-id-card"></i>
              </div>
              <h3 style={styles.cardTitle}>Identity & Biometrics</h3>
              <p style={styles.cardText}>Instant connection loops with national population registers. Confirms identity numbers and flags biometric records with total technical fidelity.</p>
            </div>
            <div style={{ ...styles.featureCard, borderTop: '5px solid #00818F' }} className="interactive-card">
              <div style={styles.featureIconWrap}>
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3 style={styles.cardTitle}>Qualification Auditing</h3>
              <p style={styles.cardText}>Direct mapping channels alongside global educational databases. Verifies academic degrees, specialized diplomas, and professional trade certifications.</p>
            </div>
            <div style={{ ...styles.featureCard, borderTop: '5px solid #0B1329' }} className="interactive-card">
              <div style={styles.featureIconWrap}>
                <i className="fas fa-user-shield"></i>
              </div>
              <h3 style={styles.cardTitle}>Criminal Clearances</h3>
              <p style={styles.cardText}>Secure linkage to verified digital criminal record databases, ensuring full corporate compliance vectors are meticulously satisfied.</p>
            </div>
            <div style={{ ...styles.featureCard, borderTop: '5px solid #6E1D14' }} className="interactive-card">
              <div style={styles.featureIconWrap}>
                <i className="fas fa-history"></i>
              </div>
              <h3 style={styles.cardTitle}>Reference Harvesting</h3>
              <p style={styles.cardText}>Automated communication sequences targeting historic corporate supervisors. Collects and stores structural workspace telemetry cleanly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section style={styles.sectionWhite}>
        <div style={styles.container}>
          <div style={styles.centerHead}>
            <span style={{ ...styles.eyebrow, backgroundColor: 'rgba(0, 129, 143, 0.08)', color: '#00818F' }}>Fidelity Diagnostics</span>
            <h2 style={styles.sectionHeading}>Frequently Asked Questions</h2>
          </div>
          <div style={styles.faqWrapper}>
            {faqData.map((item, i) => (
              <div key={i} style={styles.faqCard} className="faq-item-transition">
                <h4 style={styles.faqQuestion}>
                  <i className="far fa-question-circle" style={styles.faqIcon}></i>
                  {item.q}
                </h4>
                <p style={styles.faqAnswer}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VerifyMePage;