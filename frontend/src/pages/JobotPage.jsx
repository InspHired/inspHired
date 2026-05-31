import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const faqData = [
  { q: "What is Jobot?", a: "Jobot is an intelligent, automated recruitment assistant designed to streamline high-volume talent sourcing, background screening, and optimized matching protocols." },
  { q: "How does it improve applicant quality?", a: "By leveraging multi-layered vetting metrics and automated initial verification assessments, it filters out unqualified applications before they ever hit your desk." },
  { q: "Can it scale for multi-regional enterprise teams?", a: "Absolutely. Jobot supports complex operational structures, enabling distinct cross-provincial filtering rules and localized team compliance pipelines." }
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
    maxWidth: '380px',
    width: '100%',
  },
  metricBlock: {
    flex: 1, 
    padding: '20px 16px', 
    background: '#FFFFFF', 
    borderRadius: '16px',
    boxShadow: '0 10px 25px -5px rgba(0, 129, 143, 0.15)',
    border: '1px solid rgba(0, 129, 143, 0.1)'
  },
  metricNumber: {
    fontSize: '2rem', 
    fontWeight: 800, 
    color: '#6E1D14',
    lineHeight: 1.2,
    marginBottom: '4px'
  },
  metricLabel: {
    fontSize: '0.75rem', 
    textTransform: 'uppercase', 
    fontWeight: 700,
    letterSpacing: '1px',
    color: '#334155'
  },
  sectionWhite: {
    padding: '100px 0',
    backgroundColor: '#FFFFFF'
  },
  sectionLight: {
    padding: '100px 0',
    backgroundColor: '#F8FAFC'
  },
  sectionHeading: {
    fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
    fontWeight: 800,
    color: '#6E1D14',
    lineHeight: 1.2,
    marginBottom: '16px',
    letterSpacing: '-0.5px'
  },
  sectionSub: {
    fontSize: '1.05rem',
    color: '#334155',
    maxWidth: '620px',
    margin: '0 auto',
    lineHeight: 1.6
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
  iconBox: {
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
  moduleHeading: {
    fontSize: '1.2rem',
    fontWeight: 700, 
    color: '#6E1D14', 
    marginBottom: '12px'
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
  }
};

const JobotPage = () => {
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

      {/* ── HERO ── */}
      <header style={styles.heroSection}>
        <div style={styles.container}>
          <div style={styles.heroGrid} className="animate-fadeup">
            <div>
              <span style={styles.eyebrow}>Automated Talent Sourcing</span>
              <div style={styles.logoRow}>
                <img src="/assets/JobBot.png" alt="Jobot Logo" style={styles.appLogo} />
                <h1 style={styles.pageTitle}>Jobot</h1>
              </div>
              <p style={styles.heroLead}>
                Your strategic corporate hiring assistant. Automate candidate pre-screening, filter top-tier 
                talents dynamically, and accelerate your recruitment lifecycles with advanced sorting infrastructure.
              </p>
              <div style={styles.btnRow}>
                <a href="https://app.insphired.jobs/jobs?standalone=true" target="_blank" rel="noreferrer" style={styles.btnPrimary} className="btn-hover-transition">
                  <i className="fas fa-external-link-alt" style={{marginRight: '8px'}}></i>Visit Site
                </a>
              </div>
            </div>
            <div style={styles.heroVisualWrap}>
              <div style={styles.glassCard}>
                <div style={{display: 'flex', gap: '16px', textAlign: 'center'}}>
                  <div style={styles.metricBlock} className="interactive-card">
                    <div style={styles.metricNumber}>24/7</div>
                    <div style={styles.metricLabel}>Smart Screening</div>
                  </div>
                  <div style={styles.metricBlock} className="interactive-card">
                    <div style={styles.metricNumber}>85%</div>
                    <div style={styles.metricLabel}>Time Saved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── VALUES / KEY PILLARS ── */}
      <section style={styles.sectionLight}>
        <div style={styles.container}>
          <div style={styles.centerHead}>
            <h2 style={styles.sectionHeading}>Why Choose Jobot</h2>
            <p style={styles.sectionSub}>Eliminating high-volume operational bottlenecks using programmatic pipeline tracking.</p>
          </div>

          <div style={styles.featureGrid}>
            <div style={{ ...styles.featureCard, borderTop: '4px solid #6E1D14' }} className="interactive-card">
              <div style={styles.iconBox}><i className="fas fa-robot"></i></div>
              <h3 style={styles.cardTitle}>Intelligent Filtering</h3>
              <p style={styles.cardText}>Instantly scan thousands of digital profiles to extract ideal candidates based on background, experience, and custom filters.</p>
            </div>
            <div style={{ ...styles.featureCard, borderTop: '4px solid #00818F' }} className="interactive-card">
              <div style={styles.iconBox}><i className="fas fa-user-check"></i></div>
              <h3 style={styles.cardTitle}>Pre-Vetted Match</h3>
              <p style={styles.cardText}>Every recommendation undergoes programmatic validation protocols to guarantee premium output alignment before interview rounds.</p>
            </div>
            <div style={{ ...styles.featureCard, borderTop: '4px solid #334155' }} className="interactive-card">
              <div style={styles.iconBox}><i className="fas fa-chart-line"></i></div>
              <h3 style={styles.cardTitle}>Scalable Flow</h3>
              <p style={styles.cardText}>Easily handle seasonal applicant spikes without degrading structural review processing speeds or increasing staff overheads.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SYSTEM APP MODULES ── */}
      <section style={styles.sectionWhite}>
        <div style={styles.container}>
          <div style={styles.centerHead}>
            <h2 style={styles.sectionHeading}>Application Modules</h2>
            <p style={styles.sectionSub}>Enterprise toolsets architected for high-velocity hiring environments.</p>
          </div>

          <div style={styles.featureGrid}>
            <div style={{ ...styles.featureCard, borderLeft: '4px solid #6E1D14' }} className="interactive-card">
              <h4 style={styles.moduleHeading}>Recruiter Command Hub</h4>
              <p style={styles.cardText}>Monitor pending applicant paths, adjust assessment rules instantly across operational nodes, and build historical placement trend reports.</p>
            </div>
            <div style={{ ...styles.featureCard, borderLeft: '4px solid #00818F' }} className="interactive-card">
              <h4 style={styles.moduleHeading}>Dynamic Matrix Rules</h4>
              <p style={styles.cardText}>Establish tailored evaluation metrics based on technical standards, regional constraints, and target soft-skill indicators.</p>
            </div>
            <div style={{ ...styles.featureCard, borderLeft: '4px solid #334155' }} className="interactive-card">
              <h4 style={styles.moduleHeading}>Automated Verification</h4>
              <p style={styles.cardText}>Seamlessly confirm profile authenticity, background highlights, and professional certifications without manual, third-party interventions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={styles.sectionLight}>
        <div style={styles.container}>
          <div style={styles.centerHead}>
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

export default JobotPage;