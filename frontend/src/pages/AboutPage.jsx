import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const testimonials = [
  {
    name: 'Jermaine C.',
    role: 'Successful candidate',
    text: 'I would just like to say a massive thank you for believing in me. Your professionalism throughout the process was exceptional.'
  },
  {
    name: 'Jodene L.',
    role: 'Satisfied client',
    text: 'That is why I like your work. Honestly, I think you are my best recruiter.'
  },
  {
    name: 'Nicole L.',
    role: 'Successful candidate',
    text: 'Thank you for giving me the opportunity. You guided me through the process and I’ll be forever grateful!'
  }
];

const values = [
  {
    title: 'Passion',
    icon: 'fas fa-fire',
    desc: 'Life is too short to not love what you do. Passion drives everything we do at InspHired.'
  },
  {
    title: 'Integrity',
    icon: 'fas fa-handshake',
    desc: 'We act with authenticity and always do the right thing for our candidates, clients, and team.'
  },
  {
    title: 'Accountability',
    icon: 'fas fa-balance-scale',
    desc: 'We take responsibility for our actions with transparency and commitment to excellence.'
  }
];

const AboutPage = () => {
  return (
    <div style={styles.pageWrapper}>
      <style>{`
        .hover-card {
          transition: all 0.3s ease;
        }

        .hover-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }

        .fade-up {
          animation: fadeUp 0.8s ease forwards;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <Navbar />

      {/* HERO */}
      <header style={styles.hero}>

         <video
    autoPlay
    loop
    muted
    playsInline
    style={styles.heroVideo}
  >
    <source
      src="https://assets.mixkit.co/videos/preview/mixkit-business-team-working-in-modern-office-43770-large.mp4"
      type="video/mp4"
    />
  </video>


        <div style={styles.heroOverlay}></div>

        <div style={styles.container}>
          <div className="fade-up" style={styles.heroContent}>
            <span style={styles.heroTag}>
              ABOUT US
            </span>

            <h1 style={styles.heroTitle}>
              InspHired Recruitment Solutions
            </h1>

            <p style={styles.heroText}>
              Founded in 2015, <strong>InspHired Recruitment Solutions</strong> is a talent solution provider focused on innovation, using technology and people to bridge the gap between candidates and clients.
            </p>
          </div>
        </div>
      </header>

      {/* STORY / MISSION / VISION */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.grid}>
            <div style={styles.card} className="hover-card">
              <h3 style={styles.cardTitle}>Our Mission</h3>
              <p style={styles.cardText}>
                To provide innovative recruitment solutions through technology and people. To InspHired.
              </p>
            </div>

            <div style={styles.card} className="hover-card">
              <h3 style={styles.cardTitle}>Our Vision</h3>
              <p style={styles.cardText}>
                To be the number one solution to Africa’s employment challenges.
              </p>
            </div>

            <div style={styles.card} className="hover-card">
              <h3 style={styles.cardTitle}>Our Story</h3>
              <p style={styles.cardText}>
                We embarked on a mission in 2015 to transform recruitment through innovation, connecting the right people with the right opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ ...styles.section, backgroundColor: '#F8FAFC' }}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Our Values</h2>
          </div>

          <div style={styles.grid}>
            {values.map((v, i) => (
              <div key={i} style={styles.card} className="hover-card">
                <div style={styles.iconBox}>
                  <i className={v.icon}></i>
                </div>
                <h3 style={styles.cardTitle}>{v.title}</h3>
                <p style={styles.cardText}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>What People Say</h2>
          </div>

          <div style={styles.grid}>
            {testimonials.map((t, i) => (
              <div key={i} style={styles.card} className="hover-card">
                <div style={styles.stars}>★★★★★</div>
                <p style={styles.cardText}>"{t.text}"</p>
                <h4 style={styles.name}>{t.name}</h4>
                <span style={styles.role}>{t.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={styles.ctaSection}>
        <div style={styles.container}>
          <div style={styles.ctaBox}>
            <h2 style={styles.ctaTitle}>Get Job Notifications</h2>
            <p style={styles.ctaText}>
              Hey there 👋 Subscribe to stay updated with new opportunities.
            </p>

            <div style={styles.form}>
              <input style={styles.input} placeholder="Hey {name}," />
              <input style={styles.input} placeholder="Last name" />
              <input style={styles.input} placeholder="Email" />
              <button style={styles.button}>Subscribe</button>
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
    color: '#0F172A'
  },


 container: {
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '0 32px',
  position: 'relative',
  zIndex: 3
  },

  hero: {
    minHeight: '60vh',
    backgroundColor: '#0F172A',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    position: 'relative'
  },

  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(90deg, rgba(15,23,42,0.95), rgba(15,23,42,0.7))'
  },

  heroContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '700px'
  },

  heroTag: {
    backgroundColor: '#00818F',
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: 700,
    letterSpacing: '2px'
  },

  heroTitle: {
    fontSize: '3rem',
    fontWeight: 800,
    marginTop: '20px'
  },

  heroText: {
    marginTop: '16px',
    fontSize: '1.1rem',
    lineHeight: 1.7,
    color: '#CBD5E1'
  },

  section: {
    padding: '90px 0'
  },

  sectionHeader: {
    textAlign: 'center',
    marginBottom: '50px'
  },

  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 800
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px'
  },

  card: {
    backgroundColor: 'white',
    padding: '32px',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
  },

  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: 700,
    marginBottom: '10px'
  },

  cardText: {
    color: '#64748B',
    lineHeight: 1.7
  },

  iconBox: {
    width: '60px',
    height: '60px',
    borderRadius: '14px',
    backgroundColor: 'rgba(0,129,143,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#00818F',
    marginBottom: '16px'
  },

  stars: {
    color: '#F59E0B',
    marginBottom: '10px'
  },

  name: {
    marginTop: '14px',
    fontWeight: 700
  },

  role: {
    fontSize: '0.9rem',
    color: '#64748B'
  },

  ctaSection: {
    padding: '100px 0',
    backgroundColor: '#F8FAFC'
  },

  ctaBox: {
    textAlign: 'center'
  },

  ctaTitle: {
    fontSize: '2.5rem',
    fontWeight: 800
  },

  ctaText: {
    marginTop: '10px',
    color: '#64748B'
  },

  form: {
    marginTop: '30px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center'
  },

  input: {
    padding: '12px 16px',
    borderRadius: '10px',
    border: '1px solid #E2E8F0',
    minWidth: '200px'
  },

  button: {
    backgroundColor: '#00818F',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 600
  }
};

export default AboutPage;