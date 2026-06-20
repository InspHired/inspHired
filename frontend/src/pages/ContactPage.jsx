import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsappButton';

const offices = [
  {
    city: 'Johannesburg',
    country: 'South Africa',
    phone: '+27 11 463 5540',
    email: 'info@insphired.co.za',
    address:
      'Block 8, Bryanston Gate Office Park, Corner Main Road and Homestead Avenue, Bryanston, 2191'
  },
  {
    city: 'Cape Town',
    country: 'South Africa',
    phone: '+27 21 879 1441',
    email: 'info@insphired.co.za',
    address:
      'Unit 127, Millennium Business Park, 19 Edison Way, Century City, 7441'
  },
  {
    city: 'Kinshasa',
    country: 'DRC',
    phone: null,
    email: 'info@insphired.co.za',
    address:
      '5ème Étage Imm. Le 130, Av. Kwango C/Gombe, Kinshasa, 16474'
  }
];

const ContactPage = () => {
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
        <div style={styles.overlay}></div>

        <div style={styles.container}>
          <div style={styles.heroContent} className="fade-up">
            <span style={styles.tag}>CONTACT US</span>

            <h1 style={styles.title}>
              Let’s Build Your Future Together
            </h1>

            <p style={styles.subtitle}>
              Reach out for expert staffing solutions and career opportunities. Let’s connect and achieve success together.
            </p>

            <div style={styles.ctaRow}>
               <a
  href='/callback'
  target="_blank"
  rel="noopener noreferrer"
  style={styles.primaryBtn}
  className="btn-hover"
>
  Request Callback
</a>
              <a href="#offices" style={styles.secondaryBtn}>
                View Offices
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* INTRO */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.centerText}>
            <h2 style={styles.sectionTitle}>
              An Expert Recruiter Will Be In Touch
            </h2>
            <p style={styles.sectionSub}>
              Fill in your details or contact one of our offices directly. We respond quickly and professionally to all enquiries.
            </p>
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section id="offices" style={{ ...styles.section, backgroundColor: '#F8FAFC' }}>
        <div style={styles.container}>
          <div style={styles.grid}>
            {offices.map((office, index) => (
              <div key={index} style={styles.card} className="hover-card">
                <h3 style={styles.cardTitle}>
                  {office.city}
                </h3>

                <p style={styles.cardSub}>
                  {office.country}
                </p>

                {office.phone && (
                  <p style={styles.info}>
                    📞 {office.phone}
                  </p>
                )}

                <p style={styles.info}>
                  ✉️ {office.email}
                </p>

                <p style={styles.address}>
                  📍 {office.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT INFO STRIP */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.infoBox}>
            <h2 style={styles.sectionTitle}>Let’s Talk</h2>
            <p style={styles.sectionSub}>
              Email us with any questions or enquiries. We will be happy to answer you.
            </p>

            <div style={styles.contactGrid}>
              <div style={styles.contactItem}>
                <h4>General Email</h4>
                <p>info@insphired.co.za</p>
              </div>

              <div style={styles.contactItem}>
                <h4>Response Time</h4>
                <p>Within 24–48 hours</p>
              </div>

              <div style={styles.contactItem}>
                <h4>Support</h4>
                <p>Recruitment & Staffing Queries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={styles.ctaSection}>
        <div style={styles.container}>
          <div style={styles.ctaBox}>
            <h2 style={styles.ctaTitle}>Get Job Notifications</h2>
            <p style={styles.ctaText}>
              Hey there 👋 Stay updated with new opportunities.
            </p>

            <div style={styles.form}>
              <input style={styles.input} placeholder="Hey {name}," />
              <input style={styles.input} placeholder="Last name" />
              <input style={styles.input} placeholder="Email" />

              <button style={styles.button}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Block Option */}
        <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '16px', boxShadow: '0 6px 24px rgba(0,0,0,0.04)', border: '1px solid rgba(110,29,20,0.08)', marginBottom: '40px' }}>
          <h4 style={{ margin: '0 0 8px 0', fontWeight: 700, fontSize: '1.1rem' }}>Instant Support</h4>
          <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '20px' }}>Skip the email queues and chat to a consultant right now.</p>
          
          <WhatsAppButton />
        </div>

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
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px'
  },

  hero: {
    minHeight: '65vh',
    backgroundColor: '#0F172A',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    color: 'white'
  },

  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(90deg, rgba(15,23,42,0.95), rgba(15,23,42,0.65))'
  },

  heroContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '750px'
  },

  tag: {
    backgroundColor: '#00818F',
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    letterSpacing: '2px',
    fontWeight: 700
  },

  title: {
    fontSize: '3.2rem',
    fontWeight: 800,
    marginTop: '20px'
  },

  subtitle: {
    marginTop: '16px',
    fontSize: '1.1rem',
    lineHeight: 1.7,
    color: '#CBD5E1'
  },

  ctaRow: {
    display: 'flex',
    gap: '12px',
    marginTop: '30px',
    flexWrap: 'wrap'
  },

  primaryBtn: {
    backgroundColor: '#00818F',
    color: 'white',
    padding: '12px 26px',
    borderRadius: '30px',
    textDecoration: 'none',
    fontWeight: 600
  },

  secondaryBtn: {
    border: '2px solid white',
    color: 'white',
    padding: '12px 26px',
    borderRadius: '30px',
    textDecoration: 'none',
    fontWeight: 600
  },

  section: {
    padding: '90px 0'
  },

  centerText: {
    textAlign: 'center',
    maxWidth: '750px',
    margin: '0 auto'
  },

  sectionTitle: {
    fontSize: '2.4rem',
    fontWeight: 800
  },

  sectionSub: {
    marginTop: '12px',
    color: '#64748B',
    lineHeight: 1.7
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
    fontSize: '1.3rem',
    fontWeight: 800
  },

  cardSub: {
    color: '#00818F',
    fontWeight: 600,
    marginTop: '6px'
  },

  info: {
    marginTop: '10px',
    color: '#334155'
  },

  address: {
    marginTop: '10px',
    color: '#64748B',
    lineHeight: 1.6
  },

  infoBox: {
    textAlign: 'center'
  },

  contactGrid: {
    marginTop: '40px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px'
  },

  contactItem: {
    backgroundColor: '#F8FAFC',
    padding: '24px',
    borderRadius: '16px'
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

export default ContactPage;