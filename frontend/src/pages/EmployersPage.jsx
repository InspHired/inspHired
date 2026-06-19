import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const recruitmentSteps = [
  {
    number: '01',
    title: 'Client Consultation',
    desc: 'We start by diving deep into your business goals, culture, and hiring requirements to align our recruitment strategy with your vision.',
    icon: 'fas fa-comments'
  },
  {
    number: '02',
    title: 'Position Profile Development',
    desc: 'We collaborate with you to create a compelling position profile outlining responsibilities, qualifications, and ideal candidate traits.',
    icon: 'fas fa-file-signature'
  },
  {
    number: '03',
    title: 'Targeted Search Strategy',
    desc: 'Using our extensive network and modern sourcing tools, we identify professionals who match your business needs and culture.',
    icon: 'fas fa-bullseye'
  },
  {
    number: '04',
    title: 'Candidate Screening & Assessment',
    desc: 'We conduct interviews, skills assessments, and background checks to ensure only the highest-quality candidates are shortlisted.',
    icon: 'fas fa-user-check'
  },
  {
    number: '05',
    title: 'Presentation of Shortlist',
    desc: 'Receive a curated shortlist of candidates complete with detailed profiles and recommendations.',
    icon: 'fas fa-list-check'
  },
  {
    number: '06',
    title: 'Final Candidate Selection',
    desc: 'We guide you through final interviews and hiring decisions with strategic insights and support.',
    icon: 'fas fa-handshake'
  },
  {
    number: '07',
    title: 'Post-Placement Support',
    desc: 'Our partnership continues after placement with ongoing support to ensure long-term success and smooth onboarding.',
    icon: 'fas fa-rocket'
  }
];

const verificationServices = [
  {
    title: 'Employment Verification',
    icon: 'fas fa-briefcase'
  },
  {
    title: 'Biometric Criminal Checks',
    icon: 'fas fa-fingerprint'
  },
  {
    title: 'ID, Work Permits & Drivers License',
    icon: 'fas fa-id-card'
  },
  {
    title: 'Education Qualifications',
    icon: 'fas fa-graduation-cap'
  },
  {
    title: 'Employment References',
    icon: 'fas fa-microphone'
  },
  {
    title: 'Interview Assistance',
    icon: 'fas fa-users'
  }
];

const testimonials = [
  {
    name: 'Global Logistics Group',
    text: 'InspHired completely transformed our hiring process. Their team consistently delivers exceptional candidates aligned with our company culture.'
  },
  {
    name: 'Fintech Africa',
    text: 'The professionalism, speed, and verification standards were outstanding. We found top-tier talent faster than ever before.'
  },
  {
    name: 'Healthcare Solutions SA',
    text: 'From consultation to onboarding support, the entire recruitment journey felt seamless and highly strategic.'
  }
];

const EmployersPage = () => {
  return (
    <div style={styles.pageWrapper}>
      <style>{`
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

        @media (max-width: 992px) {
  .hero-device {
    width: 60% !important;
    opacity: 0.3;
  }
}

@media (max-width: 768px) {
  .hero-device {
    display: none;
  }
}

        .fade-up {
          animation: fadeUp 0.8s ease forwards;
        }

        .hover-card {
          transition: all 0.3s ease;
        }

        .hover-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }

        .btn-hover {
          transition: all 0.25s ease;
        }

        .btn-hover:hover {
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem !important;
          }

          .section-title {
            font-size: 2rem !important;
          }

          .hero-buttons {
            flex-direction: column;
          }
        }
      `}</style>

      <Navbar />

      {/* HERO SECTION */}
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

  <img
  src="/public/assets/worx-hero.png"
  alt="InspHired Platform"
  className="hero-device"
  style={styles.heroDeviceImage}
/>

  <div style={styles.container}>
    <div style={styles.heroContent} className="fade-up">
      <span style={styles.heroTag}>
        FOR EMPLOYERS
      </span>

      <h1 style={styles.heroTitle} className="hero-title">
        Strategic Recruitment Solutions For Modern African Businesses
      </h1>

      <p style={styles.heroText}>
        Our comprehensive recruitment services are designed to connect your organisation with top-tier professionals who align with your culture, vision, and long-term business goals.
      </p>

      <div style={styles.heroButtons} className="hero-buttons">
        <a
  href="https://bookings.cloud.microsoft/book/LandrysDiary@insphired.co.za/?ismsaljsauthenabled=true"
  target="_blank"
  rel="noopener noreferrer"
  style={styles.primaryBtn}
  className="btn-hover"
>
  Schedule Consultation
</a>

  <a
  href='/callback'
  target="_blank"
  rel="noopener noreferrer"
  style={styles.primaryBtn}
  className="btn-hover"
>
  Request Callback
</a>

      </div>
    </div>
  </div>
</header>

      {/* RECRUITMENT PROCESS */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <span style={styles.sectionTag}>
              OUR RECRUITMENT PROCESS
            </span>

            <h2 style={styles.sectionTitle} className="section-title">
              A Proven Hiring Framework Built For Results
            </h2>

            <p style={styles.sectionSub}>
              Every step of our recruitment process is intentionally designed to deliver exceptional candidates and long-term hiring success.
            </p>
          </div>

          <div style={styles.timelineGrid}>
            {recruitmentSteps.map((step, index) => (
              <div
                key={index}
                style={styles.timelineCard}
                className="hover-card"
              >
                <div style={styles.timelineNumber}>
                  {step.number}
                </div>

                <div style={styles.timelineIcon}>
                  <i className={step.icon}></i>
                </div>

                <h3 style={styles.cardTitle}>
                  {step.title}
                </h3>

                <p style={styles.cardText}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section style={styles.quoteSection}>
        <div style={styles.container}>
          <div style={styles.quoteWrapper}>
            <div style={styles.quoteIcon}>
              <i className="fas fa-quote-left"></i>
            </div>

            <p style={styles.quoteText}>
              Hiring is the most important people function you have, and most of us aren’t as good at it as we think. Refocusing your resources on hiring better will have a higher return than almost any training program you can develop.
            </p>

            <h4 style={styles.quoteAuthor}>
              — Laszlo Bock
            </h4>
          </div>
        </div>
      </section>

      {/* VERIFICATION SERVICES */}
      <section style={{ ...styles.section, backgroundColor: '#F8FAFC' }}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <span style={styles.sectionTag}>
              VERIFICATION SERVICES
            </span>

            <h2 style={styles.sectionTitle} className="section-title">
              Recruitment Backed By Trusted Verification
            </h2>

            <p style={styles.sectionSub}>
              We ensure every candidate is thoroughly verified to protect your business and strengthen hiring confidence.
            </p>
          </div>

          <div style={styles.servicesGrid}>
            {verificationServices.map((service, index) => (
              <div
                key={index}
                style={styles.serviceCard}
                className="hover-card"
              >
                <div style={styles.serviceIcon}>
                  <i className={service.icon}></i>
                </div>

                <h3 style={styles.serviceTitle}>
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <span style={styles.sectionTag}>
              CLIENT TESTIMONIALS
            </span>

            <h2 style={styles.sectionTitle} className="section-title">
              Trusted By Growing Organisations
            </h2>

            <p style={styles.sectionSub}>
              Discover how InspHired has transformed recruitment experiences for businesses across Africa.
            </p>
          </div>

          <div style={styles.testimonialGrid}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={styles.testimonialCard}
                className="hover-card"
              >
                <div style={styles.stars}>
                  ★★★★★
                </div>

                <p style={styles.testimonialText}>
                  {testimonial.text}
                </p>

                <h4 style={styles.testimonialName}>
                  {testimonial.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.ctaSection}>
        <div style={styles.container}>
          <div style={styles.ctaBox}>
            <h2 style={styles.ctaTitle}>
              How Can We InspHire You Today?
            </h2>

        <p style={styles.ctaText}>
          Let’s discuss your business needs and build a workforce designed for growth.
        </p>

        <div style={styles.heroButtons} className="hero-buttons">
          <a
            href="https://bookings.cloud.microsoft/book/LandrysDiary@insphired.co.za/?ismsaljsauthenabled=true"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.primaryBtn}
            className="btn-hover"
          >
            Schedule Consultation
          </a>

          <a
            href= '/callback'
            target="_blank"
            rel="noopener noreferrer"
            style={styles.primaryBtn}
            className="btn-hover"
          >
            Request Callback
          </a>

          <a
            href="https://worx.insphired.jobs/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.primaryBtn}
            className="btn-hover"
          >
            WORX(Temp Hiring Platform)
          </a>

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
    backgroundColor: '#FFFFFF',
    color: '#334155'
  },

 container: {
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '0 32px',
  position: 'relative',
  zIndex: 3
  },

  hero: {
    position: 'relative',
    minHeight: '85vh',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: '#111827'
  },

  heroVideo: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    top: 0,
    left: 0
  },

  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(90deg, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.65) 100%)'
  },

  heroDeviceImage: {
  position: 'absolute',
  right: '2%',
  bottom: '0',
  width: '48%',
  maxWidth: '750px',
  zIndex: 2,
  pointerEvents: 'none',
  opacity: 0.95,
},

  heroContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '760px',
    color: 'white'
  },

  heroTag: {
    display: 'inline-block',
    padding: '8px 18px',
    borderRadius: '40px',
    backgroundColor: '#00818F',
    fontSize: '0.8rem',
    letterSpacing: '2px',
    fontWeight: 700,
    marginBottom: '24px'
  },

  heroTitle: {
    fontSize: '4rem',
    fontWeight: 800,
    lineHeight: 1.1,
    marginBottom: '24px'
  },

  heroText: {
    fontSize: '1.15rem',
    lineHeight: 1.8,
    opacity: 0.9,
    marginBottom: '40px'
  },

  heroButtons: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  },

  primaryBtn: {
    backgroundColor: '#00818F',
    color: 'white',
    padding: '14px 32px',
    borderRadius: '40px',
    textDecoration: 'none',
    fontWeight: 600
  },

  secondaryBtn: {
    border: '2px solid white',
    color: 'white',
    padding: '14px 32px',
    borderRadius: '40px',
    textDecoration: 'none',
    fontWeight: 600
  },

  secondaryBtnDark: {
    border: '2px solid #1E293B',
    color: '#1E293B',
    padding: '14px 32px',
    borderRadius: '40px',
    textDecoration: 'none',
    fontWeight: 600
  },

  section: {
    padding: '100px 0'
  },

  sectionHeader: {
    textAlign: 'center',
    marginBottom: '70px'
  },

  sectionTag: {
    color: '#6E1D14',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontWeight: 700,
    fontSize: '0.8rem',
    marginBottom: '12px',
    display: 'block'
  },

  sectionTitle: {
    fontSize: '2.8rem',
    fontWeight: 800,
    color: '#0F172A',
    marginBottom: '18px'
  },

  sectionSub: {
    maxWidth: '720px',
    margin: '0 auto',
    color: '#64748B',
    fontSize: '1.05rem'
  },

  timelineGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '28px'
  },

  timelineCard: {
    backgroundColor: '#FFFFFF',
    padding: '40px 32px',
    borderRadius: '24px',
    border: '1px solid rgba(0,0,0,0.05)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
    position: 'relative'
  },

  timelineNumber: {
    position: 'absolute',
    top: '24px',
    right: '24px',
    fontSize: '3rem',
    fontWeight: 800,
    color: 'rgba(0,129,143,0.08)'
  },

  timelineIcon: {
    width: '60px',
    height: '60px',
    borderRadius: '16px',
    backgroundColor: 'rgba(0,129,143,0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#00818F',
    fontSize: '1.4rem',
    marginBottom: '24px'
  },

  cardTitle: {
    fontSize: '1.3rem',
    fontWeight: 700,
    marginBottom: '14px',
    color: '#0F172A'
  },

  cardText: {
    color: '#64748B',
    lineHeight: 1.7
  },

  quoteSection: {
    backgroundColor: '#0F172A',
    padding: '120px 0',
    color: 'white'
  },

  quoteWrapper: {
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'center'
  },

  quoteIcon: {
    fontSize: '3rem',
    color: '#00818F',
    marginBottom: '30px'
  },

  quoteText: {
    fontSize: '1.6rem',
    lineHeight: 1.8,
    marginBottom: '24px',
    fontWeight: 300
  },

  quoteAuthor: {
    color: '#94A3B8',
    fontWeight: 600
  },

  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px'
  },

  serviceCard: {
    backgroundColor: '#FFFFFF',
    padding: '40px 28px',
    borderRadius: '24px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.04)'
  },

  serviceIcon: {
    width: '70px',
    height: '70px',
    borderRadius: '18px',
    margin: '0 auto 24px',
    backgroundColor: 'rgba(0,129,143,0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#00818F',
    fontSize: '1.6rem'
  },

  serviceTitle: {
    fontSize: '1.1rem',
    fontWeight: 700,
    color: '#0F172A'
  },

  testimonialGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '28px'
  },

  testimonialCard: {
    backgroundColor: '#FFFFFF',
    padding: '40px 32px',
    borderRadius: '24px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.04)'
  },

  stars: {
    color: '#F59E0B',
    fontSize: '1.1rem',
    marginBottom: '18px'
  },

  testimonialText: {
    color: '#64748B',
    lineHeight: 1.8,
    marginBottom: '24px'
  },

  testimonialName: {
    color: '#0F172A',
    fontWeight: 700
  },

  ctaSection: {
    padding: '120px 0',
    backgroundColor: '#F8FAFC'
  },

  ctaBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: '32px',
    padding: '80px 50px',
    textAlign: 'center',
    boxShadow: '0 20px 50px rgba(0,0,0,0.05)'
  },

  ctaTitle: {
    fontSize: '3rem',
    fontWeight: 800,
    marginBottom: '18px',
    color: '#0F172A'
  },

  ctaText: {
    color: '#64748B',
    fontSize: '1.1rem',
    marginBottom: '40px'
  }
};

export default EmployersPage;
