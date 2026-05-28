import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Team Array Configuration
const leadershipTeam = [
  {
    name: 'Adaobi Okonkwo',
    role: 'CEO & Founder',
    img: '/assets/InspHiredTeam/Basetsana.png'
  },
 {
    name: 'Deborah Mubenga',
    role: 'Head of Operations',
    img: '/assets/InspHiredTeam/Deborah.png'
  },
      {
    name: 'Basetsana Pule',
    role: 'Associate',
    img: '/assets/InspHiredTeam/Basetsana.png'
  },
  {
    name: 'Norma Banda',
    role: 'Managing Partner',
    img: '/assets/InspHiredTeam/Norma.png'
  },
  {
    name: 'Phamela Mthitshane ',
    role: 'Candidate Manager',
    img: '/assets/InspHiredTeam/Phamela.png'
  },
  {
    name: 'Rochelle Titus',
    role: 'Managing Partner',
    img: '/assets/InspHiredTeam/Rochelle.png'
  },
  {
    name: 'Sharrity Mhlanga',
    role: 'Recruitment Researcher',
    img: '/assets/InspHiredTeam/Sharity.png'
  },
  {
    name: 'Unathi Mbasa',
    role: 'Operations Team Lead',
    img: '/assets/InspHiredTeam/Unathi.png'
  },
  {
    name: 'Joyce Muya',
    role: 'Managing Partner',
    img: '/assets/InspHiredTeam/Joyce.png'
  },
  {
    name: 'Tumelo Mpeta',
    role: 'Talent Marketing & ATS Corodinator',
    img: '/assets/InspHiredTeam/Tumelo.png'
  },
      {
    name: 'Ene-ene NetShiswinzhe',
    role: 'HR Generalist',
    img: '/assets/InspHiredTeam/Ene.png'
  },
      {
    name: 'Gègè Sena Saleh',
    role: 'Head of Finance',
    img: '/assets/InspHiredTeam/Gege.png'
  }
  ,    {
    name: 'Stefanie Peters',
    role: 'Managing Partner',
    img: '/assets/InspHiredTeam/Stef.png'
  }
];

const HomePage = () => {
  return (
    <div style={globalStyles.pageWrapper}>
      {/* Global CSS Keyframe Animations & Class Modifiers */}
      <style>{`
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scrollTeams {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-280px * 6 - 24px * 6)); }
        }
        .animate-fadeleft { animation: fadeLeft 0.8s ease-out; }
        .team-track-container { display: flex; gap: 24px; width: max-content; animation: scrollTeams 40s linear infinite; }
        .team-track-container:hover { animation-play-state: paused; }
        
        /* Interactive Cyan Card Base Class */
        .interactive-cyan-card {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease !important;
        }
        .interactive-cyan-card:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 20px 40px -5px rgba(0, 129, 143, 0.22), 0 8px 20px -3px rgba(0, 129, 143, 0.1) !important;
        }
        .solutions-card-override:hover {
          transform: translateY(-8px) !important;
        }
        .btn-hover-transition { transition: all 0.2s ease !important; }
        .btn-hover-transition:hover { transform: translateY(-2px) !important; }
      `}</style>

      <Navbar />

      {/* Hero Header Section */}
      <header style={styles.hero}>
        <video 
          style={styles.heroVideo} 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-executives-working-together-in-a-bright-office-41556-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={styles.heroOverlay}></div>
        <div style={styles.container}>
          <div style={styles.heroContent} className="animate-fadeleft">
            <div style={styles.heroSlogan}>
              <i className="fas fa-globe-africa" style={{ marginRight: '8px' }}></i> AFRICA'S RECRUITMENT PARTNER
            </div>
            <h1 style={styles.heroHeading}>Connecting great talent with great companies</h1>
            <p style={styles.heroText}>We're solving Africa's employment challenges — one meaningful placement at a time. Whether you're looking for your next role or building a world-class team, we've got you covered.</p>
            <div style={styles.heroButtons}>
              <a href="#" style={styles.btnPrimary} className="btn-hover-transition">
                <i className="fas fa-paper-plane" style={{ marginRight: '8px' }}></i> Find talent
              </a>
              <a href="#" style={styles.btnOutlineLight} className="btn-hover-transition">
                <i className="fas fa-chart-line" style={{ marginRight: '8px' }}></i> Available Jobs
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* 1. Purpose & Direction Section */}
      <section style={{ ...styles.section, backgroundColor: '#F8FAFC' }}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <span style={styles.sectionTag}>Our Purpose & Direction</span>
            <h2 style={styles.sectionTitle}>Reshaping Africa's Workforce Ecosystem</h2>
            <p style={styles.sectionSub}>Driven by impact, guided by innovation — we connect enterprise needs with exceptional individual execution.</p>
          </div>
          <div style={styles.gridTwo}>
            <div style={styles.mvCard} className="interactive-cyan-card">
              <div style={styles.mvIcon}><i className="fas fa-rocket"></i></div>
              <h3 style={styles.cardHeading}>Our Mission</h3>
              <p style={styles.cardText}>Innovative recruitment through technology and people — custom-built for Africa's unique employment landscape.</p>
            </div>
            <div style={styles.mvCard} className="interactive-cyan-card">
              <div style={styles.mvIcon}><i className="fas fa-eye"></i></div>
              <h3 style={styles.cardHeading}>Our Vision</h3>
              <p style={styles.cardText}>To be the premier solution to Africa's enterprise staffing challenges, from entry-level positions to executive searches.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Value Propositions (Why InspHired) Section */}
      <section style={{ ...styles.section, backgroundColor: '#FFFFFF' }}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <span style={styles.sectionTag}>Why InspHired</span>
            <h2 style={styles.sectionTitle}>What Sets Us Apart</h2>
            <p style={styles.sectionSub}>We look past the CV to structure long-term growth and organizational health across the African continent.</p>
          </div>

          <div style={styles.gridFour}>
            <div style={styles.diffCard} className="interactive-cyan-card">
              <div style={styles.diffIcon}><i className="fas fa-heart-pulse"></i></div>
              <h4 style={styles.smallCardHeading}>Culture-first matching</h4>
              <p style={styles.diffText}>Beyond skills — every candidate is assessed for cultural alignment with your organisation's values and team dynamics.</p>
            </div>
            <div style={styles.gridFourCardOverride} className="interactive-cyan-card">
              <div style={styles.diffIcon}><i className="fas fa-network-wired"></i></div>
              <h4 style={styles.smallCardHeading}>Deep African networks</h4>
              <p style={styles.diffText}>A decade of relationships across industries and geographies means faster, higher-quality access to the right talent.</p>
            </div>
            <div style={styles.gridFourCardOverride} className="interactive-cyan-card">
              <div style={styles.diffIcon}><i className="fas fa-user-check"></i></div>
              <h4 style={styles.smallCardHeading}>End-to-end verification</h4>
              <p style={styles.diffText}>From criminal checks to credentials — every candidate is fully verified before being presented to you.</p>
            </div>
            <div style={styles.gridFourCardOverride} className="interactive-cyan-card">
              <div style={styles.diffIcon}><i className="fas fa-handshake-angle"></i></div>
              <h4 style={styles.smallCardHeading}>Post-placement support</h4>
              <p style={styles.diffText}>We stay involved after placement, checking in regularly to ensure smooth onboarding and lasting success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Operational Platforms Section */}
      <section style={{ ...styles.section, backgroundColor: '#F8FAFC' }}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <span style={styles.sectionTag}>Our Solutions</span>
            <h2 style={styles.sectionTitle}>Platforms Tailored For Growth</h2>
            <p style={styles.sectionSub}>Innovative tools and premium professional networks built exclusively for scaling African businesses.</p>
          </div>
          <div style={styles.gridThree}>
            {/* VerifyMe Technologies */}
            <div style={styles.solutionCard} className="interactive-cyan-card solutions-card-override">
              <div>
                <h3 style={styles.solutionCardHeading}>VerifyMe Technologies</h3>
                <p style={styles.solutionDesc}>Trusted background verification and screening services for employers.</p>
                <ul style={styles.featureList}>
                  <li style={styles.featureItem}><i className="fas fa-shield-alt" style={styles.featureIcon}></i> Criminal checks</li>
                  <li style={styles.featureItem}><i className="fas fa-graduation-cap" style={styles.featureIcon}></i> Qualification verification</li>
                  <li style={styles.featureItem}><i className="fas fa-history" style={styles.featureIcon}></i> Employment history</li>
                  <li style={styles.featureItem}><i className="fas fa-id-card" style={styles.featureIcon}></i> Identity verification</li>
                </ul>
              </div>
              <a href="#" style={styles.learnMore}>Learn More <i className="fas fa-arrow-right" style={{ marginLeft: '6px' }}></i></a>
            </div>

            {/* InspHired Worx */}
            <div style={styles.solutionCard} className="interactive-cyan-card solutions-card-override">
              <div>
                <h3 style={styles.solutionCardHeading}>InspHired Worx</h3>
                <p style={styles.solutionDesc}>Flexible on-demand temporary staffing solutions.</p>
                <ul style={styles.featureList}>
                  <li style={styles.featureItem}><i className="fas fa-mobile-alt" style={styles.featureIcon}></i> Mobile staffing</li>
                  <li style={styles.featureItem}><i className="fas fa-users" style={styles.featureIcon}></i> Temporary workforce</li>
                  <li style={styles.featureItem}><i className="fas fa-clock" style={styles.featureIcon}></i> Shift-based placements</li>
                  <li style={styles.featureItem}><i className="fas fa-bolt" style={styles.featureIcon}></i> Rapid deployment</li>
                </ul>
              </div>
              <a href="#" style={styles.learnMore}>Learn More <i className="fas fa-arrow-right" style={{ marginLeft: '6px' }}></i></a>
            </div>

            {/* InspHired Connect */}
            <div style={styles.solutionCard} className="interactive-cyan-card solutions-card-override">
              <div>
                <h3 style={styles.solutionCardHeading}>InspHired Connect</h3>
                <p style={styles.solutionDesc}>Free talent portal connecting employers with qualified candidates.</p>
                <ul style={styles.featureList}>
                  <li style={styles.featureItem}><i className="fas fa-upload" style={styles.featureIcon}></i> Upload your CV</li>
                  <li style={styles.featureItem}><i className="fas fa-briefcase" style={styles.featureIcon}></i> Apply for jobs</li>
                  <li style={styles.featureItem}><i className="fas fa-magic" style={styles.featureIcon}></i> Talent matching</li>
                  <li style={styles.featureItem}><i className="fas fa-chart-simple" style={styles.featureIcon}></i> Career opportunities</li>
                </ul>
              </div>
              <a href="#" style={{ ...styles.learnMore, ...styles.btnJoin }}>Join Free <i className="fas fa-user-plus" style={{ marginLeft: '6px' }}></i></a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Infinite Carousel Marquee Leadership Section */}
      <section style={{ ...styles.section, backgroundColor: '#FFFFFF', overflow: 'hidden' }}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <span style={styles.sectionTag}>Human Capital</span>
            <h2 style={styles.sectionTitle}>Our Leadership Team</h2>
            <p style={styles.sectionSub}>Passionate human resource and tech experts bridging Africa's widening enterprise talent gap. Hover to pause slide.</p>
          </div>
        </div>
        
        <div style={styles.teamSliderContainer}>
          <div className="team-track-container">
            {[...leadershipTeam, ...leadershipTeam].map((member, index) => (
              <div key={index} style={styles.teamMember}>
                <div style={styles.teamAvatar}>
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    style={styles.teamAvatarImage} 
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <i className="fas fa-user-tie" style={{ display: 'none', fontSize: '36px', color: 'rgba(255,255,255,0.8)' }}></i>
                </div>
                <div style={styles.teamName}>{member.name}</div>
                <div style={styles.teamRole}>{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

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
    height: '75vh',
    minHeight: '550px',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    overflow: 'hidden',
    backgroundColor: '#1E2223',
  },
  heroVideo: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    minWidth: '100%',
    minHeight: '100%',
    width: 'auto',
    height: 'auto',
    transform: 'translate(-50%, -50%)',
    objectFit: 'cover',
    zIndex: 1,
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, rgba(15,18,19,0.9) 0%, rgba(15,18,19,0.6) 60%, rgba(0,0,0,0.3) 100%)',
    zIndex: 2,
  },
  heroContent: {
    maxWidth: '720px',
    position: 'relative',
    zIndex: 3,
  },
  heroSlogan: {
    fontSize: '0.85rem',
    letterSpacing: '2px',
    fontWeight: 700,
    textTransform: 'uppercase',
    background: 'rgba(0, 129, 143, 0.9)',
    display: 'inline-flex',
    alignItems: 'center',
    padding: '6px 18px',
    borderRadius: '40px',
    marginBottom: '24px',
  },
  heroHeading: {
    fontSize: '3.5rem',
    fontWeight: 800,
    lineHeight: 1.15,
    marginBottom: '20px',
  },
  heroText: {
    fontSize: '1.15rem',
    marginBottom: '36px',
    opacity: 0.9,
  },
  heroButtons: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
  },
  btnPrimary: {
    backgroundColor: '#00818F',
    color: 'white',
    padding: '14px 32px',
    borderRadius: '40px',
    textDecoration: 'none',
    fontWeight: 600,
    display: 'inline-flex',
    alignItems: 'center',
    boxShadow: '0 4px 12px rgba(0,129,143,0.25)',
  },
  btnOutlineLight: {
    backgroundColor: 'transparent',
    border: '2px solid white',
    color: 'white',
    padding: '12px 30px',
    borderRadius: '40px',
    textDecoration: 'none',
    fontWeight: 600,
    display: 'inline-flex',
    alignItems: 'center',
  },
  section: {
    padding: '100px 0',
  },
  sectionHeader: {
    marginBottom: '60px',
    textAlign: 'center',
  },
  sectionTag: {
    color: '#6E1D14',
    textTransform: 'uppercase',
    fontSize: '0.85rem',
    fontWeight: 700,
    letterSpacing: '2px',
    display: 'block',
    marginBottom: '8px',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 800,
    marginBottom: '16px',
    color: '#1E2223',
  },
  sectionSub: {
    color: '#64748B',
    maxWidth: '640px',
    margin: '0 auto',
    fontSize: '1.1rem',
  },
  gridTwo: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '40px',
  },
  mvCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '24px',
    padding: '48px 40px',
    boxShadow: '0 10px 35px -5px rgba(0, 129, 143, 0.12), 0 4px 15px -3px rgba(0, 129, 143, 0.06)',
    border: '1px solid rgba(0, 129, 143, 0.08)',
    position: 'relative',
    overflow: 'hidden',
  },
  mvIcon: {
    fontSize: '2.2rem',
    color: '#6E1D14',
    marginBottom: '24px',
  },
  cardHeading: {
    fontSize: '1.75rem',
    fontWeight: 700,
    marginBottom: '16px',
    color: '#1E2223',
  },
  cardText: {
    color: '#475569',
    fontSize: '1.05rem',
  },
  gridFour: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '24px',
  },
  diffCard: {
    backgroundColor: '#FFFFFF',
    padding: '32px 28px',
    borderRadius: '20px',
    border: '1px solid rgba(0, 129, 143, 0.08)',
    boxShadow: '0 10px 35px -5px rgba(0, 129, 143, 0.12), 0 4px 15px -3px rgba(0, 129, 143, 0.06)',
  },
  gridFourCardOverride: {
    backgroundColor: '#FFFFFF',
    padding: '32px 28px',
    borderRadius: '20px',
    border: '1px solid rgba(0, 129, 143, 0.08)',
    boxShadow: '0 10px 35px -5px rgba(0, 129, 143, 0.12), 0 4px 15px -3px rgba(0, 129, 143, 0.06)',
  },
  diffIcon: {
    width: '48px',
    height: '48px',
    backgroundColor: 'rgba(110, 29, 20, 0.08)',
    color: '#6E1D14',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.35rem',
    marginBottom: '20px',
  },
  smallCardHeading: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#1E2223',
    marginBottom: '10px',
  },
  diffText: {
    fontSize: '0.92rem',
    color: '#64748B',
    lineHeight: 1.5,
  },
  gridThree: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '32px',
  },
  solutionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '30px', 
    padding: '45px 35px',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0 10px 35px -5px rgba(0, 129, 143, 0.12), 0 4px 15px -3px rgba(0, 129, 143, 0.06)',
    border: '1px solid rgba(0, 129, 143, 0.08)',
    borderBottom: '5px solid #00818F', 
  },
  solutionCardHeading: {
    fontSize: '1.65rem',
    fontWeight: 700,
    marginBottom: '16px',
    color: '#1E2223',
  },
  solutionDesc: {
    color: '#64748B',
    fontSize: '0.98rem',
    marginBottom: '28px',
    minHeight: '48px',
  },
  featureList: {
    listStyle: 'none',
    marginBottom: '36px',
    padding: 0,
  },
  featureItem: {
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    fontSize: '0.95rem',
    color: '#475569',
  },
  featureIcon: {
    color: '#00818F', // Swapped out burgundy icons for brand-aligned teal to match reference blueprint
    width: '18px',
    fontSize: '1.05rem',
  },
  learnMore: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #00818F',
    color: '#00818F',
    padding: '11px 26px',
    borderRadius: '40px',
    fontWeight: 600,
    textDecoration: 'none',
    width: 'fit-content',
    fontSize: '0.9rem',
  },
  btnJoin: {
    backgroundColor: '#00818F',
    color: 'white',
  },
  teamSliderContainer: {
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
    padding: '20px 0',
  },
  teamMember: {
    backgroundColor: '#FFFFFF',
    borderRadius: '20px',
    padding: '32px 24px',
    textAlign: 'center',
    boxShadow: '0 10px 35px -5px rgba(0, 129, 143, 0.12)', // Aligned to share matching blueprint parameters
    border: '1px solid rgba(0, 129, 143, 0.04)',
    width: '280px',
    flexShrink: 0,
  },
  teamAvatar: {
    width: '100px',
    height: '100px',
    margin: '0 auto 16px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    border: '3px solid #FFF2E8',
    overflow: 'hidden',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    backgroundColor: '#F1F5F9'
  },
  teamAvatarImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block'
  },
  teamName: {
    fontSize: '1.15rem',
    fontWeight: 700,
    color: '#1E2223',
    marginBottom: '4px',
  },
  teamRole: {
    color: '#00818F',
    fontWeight: 600,
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  }
};

export default HomePage;