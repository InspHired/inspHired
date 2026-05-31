import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ClientCenterPage = () => {
  const [formTab, setFormTab] = useState('login'); // 'login' | 'register' | 'upload'
  const [accountType, setAccountType] = useState('candidate');

  // Handle mock actions or link forwarding
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formTab === 'login') {
      window.open('https://app.insphired.jobs/login', '_blank');
    } else if (formTab === 'register') {
      window.open('https://app.insphired.jobs/jobs?standalone=true', '_blank');
    } else {
      window.open('https://calendly.com/recruitment-insphired/book-a-consultation-with-a-client-relationship-manager?month=2026-05', '_blank');
    }
  };

  return (
    <div style={styles.pageWrapper}>
      <Navbar />

      {/* Hero Header Block */}
      <header style={styles.hero}>
        <div style={styles.container}>
          <span style={styles.heroTag}>Client Centre</span>
          <h1 style={styles.heroHeading}>Your InspHired Talent Portal</h1>
          <p style={styles.heroSubheading}>
            Manage recruitment workflows, track placement statuses, or upload new vacancy requirements all from one secure operational dashboard.
          </p>
        </div>
      </header>

      {/* Main Dynamic Workspace Section */}
      <section style={styles.mainSection}>
        <div style={styles.container}>
          <div style={styles.splitGrid}>
            
            {/* Left Side: Modern Interactive Multi-Tab Form Card */}
            <div style={styles.portalCard}>
              <div style={styles.formTabsHeader}>
                <button 
                  onClick={() => setFormTab('login')}
                  style={{...styles.formTabBtn, borderBottom: formTab === 'login' ? '3px solid #00818F' : '3px solid transparent', color: formTab === 'login' ? '#00818F' : '#64748B', fontWeight: formTab === 'login' ? 700 : 500}}
                >
                  Login
                </button>
                <button 
                  onClick={() => setFormTab('register')}
                  style={{...styles.formTabBtn, borderBottom: formTab === 'register' ? '3px solid #00818F' : '3px solid transparent', color: formTab === 'register' ? '#00818F' : '#64748B', fontWeight: formTab === 'register' ? 700 : 500}}
                >
                  Sign Up
                </button>
                <button 
                  onClick={() => setFormTab('upload')}
                  style={{...styles.formTabBtn, borderBottom: formTab === 'upload' ? '3px solid #00818F' : '3px solid transparent', color: formTab === 'upload' ? '#00818F' : '#64748B', fontWeight: formTab === 'upload' ? 700 : 500}}
                >
                  Upload Your Job
                </button>
              </div>

              <form onSubmit={handleFormSubmit} style={styles.formBody}>
                
                {/* DYNAMIC TAB 1: LOGIN */}
                {formTab === 'login' && (
                  <div>
                    <h3 style={styles.formTitle}>Sign in to your account</h3>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Username or Email Address *</label>
                      <input type="text" required style={styles.input} placeholder="Enter your email" />
                    </div>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Password *</label>
                      <input type="password" required style={styles.input} placeholder="••••••••" />
                    </div>
                    <div style={styles.rowActions}>
                      <label style={styles.checkboxLabel}>
                        <input type="checkbox" style={styles.checkbox} /> Remember Me
                      </label>
                      <a href="#reset" style={styles.formLink}>Forgot password?</a>
                    </div>
                    <button type="submit" style={styles.submitBtn}>Sign In</button>
                  </div>
                )}

                {/* DYNAMIC TAB 2: REGISTER */}
                {formTab === 'register' && (
                  <div>
                    <h3 style={styles.formTitle}>Register for access</h3>
                    <p style={styles.formSub}>Create your ecosystem profile account in under two minutes.</p>
                    
                    <div style={styles.rowGrid}>
                      <div style={styles.inputGroup}>
                        <label style={styles.label}>First Name *</label>
                        <input type="text" required style={styles.input} />
                      </div>
                      <div style={styles.inputGroup}>
                        <label style={styles.label}>Last Name *</label>
                        <input type="text" required style={styles.input} />
                      </div>
                    </div>

                    <div style={styles.rowGrid}>
                      <div style={styles.inputGroup}>
                        <label style={styles.label}>Email Address *</label>
                        <input type="email" required style={styles.input} />
                      </div>
                      <div style={styles.inputGroup}>
                        <label style={styles.label}>Phone Number *</label>
                        <input type="tel" required style={styles.input} placeholder="e.g. +27" />
                      </div>
                    </div>

                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Account Type *</label>
                      <select 
                        value={accountType} 
                        onChange={(e) => setAccountType(e.target.value)} 
                        style={styles.select}
                      >
                        <option value="candidate">Candidate (Looking for Work)</option>
                        <option value="employer">Employer / Recruiter (Hiring Team)</option>
                      </select>
                    </div>

                    {accountType === 'employer' && (
                      <div style={styles.inputGroup}>
                        <label style={styles.label}>Company Name *</label>
                        <input type="text" required style={styles.input} />
                      </div>
                    )}

                    <div style={styles.rowGrid}>
                      <div style={styles.inputGroup}>
                        <label style={styles.label}>Password *</label>
                        <input type="password" required style={styles.input} />
                      </div>
                      <div style={styles.inputGroup}>
                        <label style={styles.label}>Confirm Password *</label>
                        <input type="password" required style={styles.input} />
                      </div>
                    </div>

                    <label style={{...styles.checkboxLabel, marginTop: '16px', alignItems: 'flex-start'}}>
                      <input type="checkbox" required style={{marginTop: '4px'}} />
                      <span style={{fontSize: '0.82rem', color: '#64748B'}}>I agree to the InspHired Terms of Use and Privacy Protection Policies.</span>
                    </label>

                    <button type="submit" style={styles.submitBtn}>Create my account</button>
                  </div>
                )}

                {/* DYNAMIC TAB 3: UPLOAD A JOB */}
                {formTab === 'upload' && (
                  <div>
                    <h3 style={styles.formTitle}>Upload a vacancy</h3>
                    <p style={styles.formSub}>Submit details directly. An executive consultant handler will contact you within 1 business day.</p>
                    
                    <div style={styles.rowGrid}>
                      <div style={styles.inputGroup}>
                        <label style={styles.label}>Job Title *</label>
                        <input type="text" required style={styles.input} placeholder="e.g. Senior Software Engineer" />
                      </div>
                      <div style={styles.inputGroup}>
                        <label style={styles.label}>Department / Team</label>
                        <input type="text" style={styles.input} placeholder="e.g. Information Technology" />
                      </div>
                    </div>

                    <div style={styles.rowGrid}>
                      <div style={styles.inputGroup}>
                        <label style={styles.label}>Employment Type *</label>
                        <select style={styles.select} required>
                          <option value="permanent">Permanent Placement</option>
                          <option value="contract">Fixed Contract</option>
                          <option value="temporary">Temporary / Contingent Staffing</option>
                          <option value="executive">Executive Search / Headhunting</option>
                        </select>
                      </div>
                      <div style={styles.inputGroup}>
                        <label style={styles.label}>Location *</label>
                        <input type="text" required style={styles.input} placeholder="e.g. Midrand, Johannesburg" />
                      </div>
                    </div>

                    <div style={styles.rowGrid}>
                      <div style={styles.inputGroup}>
                        <label style={styles.label}>Estimated Salary Range</label>
                        <input type="text" style={styles.input} placeholder="e.g. R60k - R80k pm" />
                      </div>
                      <div style={styles.inputGroup}>
                        <label style={styles.label}>Number of Positions *</label>
                        <input type="number" defaultValue="1" required style={styles.input} />
                      </div>
                    </div>

                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Job Description Summary / File Link *</label>
                      <textarea required style={styles.textarea} placeholder="Paste requirements specs or shared doc link here..."></textarea>
                    </div>

                    <button type="submit" style={styles.submitBtn}>Submit vacancy specification</button>
                    
                    <p style={styles.supportInline}>
                      Prefer to talk it through first? <a href="https://calendly.com/recruitment-insphired/book-a-consultation-with-a-client-relationship-manager?month=2026-05" target="_blank" rel="noopener noreferrer" style={styles.inlineLink}>Schedule a consultation</a> directly.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Right Side: Informational Features List */}
            <div style={styles.infoColumn}>
              <span style={styles.sectionTag}>System Capabilities</span>
              <h2 style={styles.infoTitle}>What You Can Do in the Portal</h2>
              <p style={styles.infoSubText}>
                Our collaborative cloud interface is designed to maximize visibility and eliminate communication delays between stakeholders.
              </p>

              <div style={styles.splitFeatures}>
                <div style={styles.featBlock}>
                  <h4 style={styles.featHeader}><i className="fas fa-building" style={{color: '#00818F', marginRight: '10px'}}></i> For Employers</h4>
                  <ul style={styles.list}>
                    <li>Submit and manage technical vacancy briefs</li>
                    <li>Review and vet pre-screened shortlists</li>
                    <li>Coordinate and log interview feedback timelines</li>
                    <li>Instantly request biometric & qualification verification</li>
                  </ul>
                </div>
              </div>

              {/* Quick Contact Help Footnote */}
              <div style={styles.supportFooterCard}>
                <h4 style={{margin: '0 0 6px 0', fontSize: '1rem', fontWeight: 700, color: '#1E2223'}}>Need urgent assistance?</h4>
                <p style={{margin: 0, fontSize: '0.88rem', color: '#64748B'}}>
                  Encountering sync problems? Connect with our global support helpdesk directly at <a href="mailto:support@insphired.co.za" style={{color: '#00818F', fontWeight: 600, textDecoration: 'none'}}>support@insphired.co.za</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const styles = {
  pageWrapper: {
    fontFamily: "'Inter', sans-serif",
    color: '#334155',
    backgroundColor: '#FFFFFF',
    lineHeight: 1.6
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 32px',
    width: '100%'
  },
  hero: {
    padding: '130px 0 90px 0',
    backgroundColor: '#0B1329', // Solid clean deep corporate navy match
    color: '#FFFFFF'
  },
  heroTag: {
    fontSize: '0.8rem',
    letterSpacing: '2px',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: '#00818F',
    backgroundColor: 'rgba(0, 129, 143, 0.15)',
    padding: '6px 14px',
    borderRadius: '20px',
    display: 'inline-block',
    marginBottom: '16px'
  },
  heroHeading: {
    fontSize: '3.2rem',
    fontWeight: 800,
    margin: '0 0 14px 0',
    letterSpacing: '-1.5px'
  },
  heroSubheading: {
    fontSize: '1.1rem',
    opacity: 0.85,
    maxWidth: '700px',
    margin: 0
  },
  mainSection: {
    padding: '100px 0',
    backgroundColor: '#FFFFFF'
  },
  splitGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(46%, 1fr))',
    gap: '64px',
    alignItems: 'start'
  },
  portalCard: {
    backgroundColor: '#FFFFFF',
    border: '1px solid #E2E8F0',
    borderRadius: '16px',
    boxShadow: '0 20px 40px rgba(11,19,41,0.03)',
    overflow: 'hidden'
  },
  formTabsHeader: {
    display: 'flex',
    backgroundColor: '#F8FAFC',
    borderBottom: '1px solid #E2E8F0'
  },
  formTabBtn: {
    flex: 1,
    padding: '18px 12px',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    fontSize: '0.92rem',
    transition: 'all 0.2s ease',
    textAlign: 'center'
  },
  formBody: {
    padding: '40px 36px'
  },
  formTitle: {
    fontSize: '1.4rem',
    fontWeight: 800,
    color: '#1E2223',
    margin: '0 0 6px 0',
    letterSpacing: '-0.3px'
  },
  formSub: {
    fontSize: '0.88rem',
    color: '#64748B',
    margin: '0 0 24px 0'
  },
  inputGroup: {
    marginBottom: '18px'
  },
  rowGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px'
  },
  label: {
    display: 'block',
    fontSize: '0.82rem',
    fontWeight: 600,
    color: '#475569',
    marginBottom: '6px'
  },
  input: {
    width: '100%',
    padding: '11px 14px',
    borderRadius: '8px',
    border: '1px solid #CBD5E1',
    fontSize: '0.9rem',
    fontFamily: 'inherit',
    color: '#1E2223',
    boxSizing: 'border-box'
  },
  select: {
    width: '100%',
    padding: '11px 14px',
    borderRadius: '8px',
    border: '1px solid #CBD5E1',
    fontSize: '0.9rem',
    backgroundColor: '#FFFFFF',
    fontFamily: 'inherit',
    color: '#1E2223',
    boxSizing: 'border-box'
  },
  textarea: {
    width: '100%',
    height: '110px',
    padding: '11px 14px',
    borderRadius: '8px',
    border: '1px solid #CBD5E1',
    fontSize: '0.9rem',
    fontFamily: 'inherit',
    resize: 'none',
    boxSizing: 'border-box'
  },
  rowActions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
    fontSize: '0.85rem'
  },
  checkboxLabel: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    color: '#475569',
    cursor: 'pointer'
  },
  checkbox: {
    cursor: 'pointer'
  },
  formLink: {
    color: '#00818F',
    textDecoration: 'none',
    fontWeight: 500
  },
  submitBtn: {
    width: '100%',
    backgroundColor: '#00818F',
    color: '#FFFFFF',
    padding: '13px',
    borderRadius: '40px',
    border: 'none',
    fontWeight: 600,
    fontSize: '0.95rem',
    cursor: 'pointer',
    transition: 'opacity 0.2s ease',
    marginTop: '12px'
  },
  supportInline: {
    fontSize: '0.82rem',
    textAlign: 'center',
    color: '#64748B',
    marginTop: '16px',
    marginLight: 0,
    marginBottom: 0
  },
  inlineLink: {
    color: '#00818F',
    textDecoration: 'none',
    fontWeight: 600
  },
  infoColumn: {
    paddingTop: '8px'
  },
  sectionTag: {
    color: '#00818F',
    textTransform: 'uppercase',
    fontSize: '0.8rem',
    fontWeight: 700,
    letterSpacing: '1.5px',
    display: 'block',
    marginBottom: '8px'
  },
  infoTitle: {
    fontSize: '2.2rem',
    fontWeight: 800,
    color: '#1E2223',
    margin: '0 0 12px 0',
    letterSpacing: '-0.5px'
  },
  infoSubText: {
    color: '#64748B',
    fontSize: '1.02rem',
    margin: '0 0 40px 0'
  },
  splitFeatures: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  },
  featBlock: {
    backgroundColor: '#F8FAFC',
    padding: '24px',
    borderRadius: '12px',
    border: '1px solid #E2E8F0'
  },
  featHeader: {
    margin: '0 0 14px 0',
    fontSize: '1.1rem',
    fontWeight: 700,
    color: '#1E2223'
  },
  list: {
    paddingLeft: '20px',
    margin: 0,
    fontSize: '0.92rem',
    color: '#475569',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  supportFooterCard: {
    marginTop: '40px',
    borderTop: '1px dashed #E2E8F0',
    paddingTop: '24px'
  }
};

export default ClientCenterPage;