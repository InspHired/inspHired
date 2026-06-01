import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CallbackPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    service: '',
    callbackTime: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert('Thank you! Our team will contact you shortly.');
  };

  return (
    <div style={styles.pageWrapper}>
      <Navbar />

      {/* HERO */}
      <header style={styles.hero}>
        <div style={styles.heroOverlay}></div>

        <div style={styles.container}>
          <div style={styles.heroContent}>
            <span style={styles.heroTag}>
              REQUEST A CALLBACK
            </span>

            <h1 style={styles.heroTitle}>
              We'd Love To Learn More About Your Needs
            </h1>

            <p style={styles.heroText}>
              Whether you're looking for recruitment solutions,
              executive search, verification services, or workforce
              strategy support, our team is ready to assist.
            </p>
          </div>
        </div>
      </header>

      {/* FORM SECTION */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.contactGrid}>
            
            {/* FORM */}
            <div style={styles.formCard}>
              <h2 style={styles.formTitle}>
                Request Your Callback
              </h2>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />

                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  style={styles.input}
                />

                <input
                  type="text"
                  name="position"
                  placeholder="Job Title"
                  value={formData.position}
                  onChange={handleChange}
                  style={styles.input}
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  style={styles.input}
                  required
                >
                  <option value="">Select Service</option>
                  <option>Recruitment Services</option>
                  <option>Executive Search</option>
                  <option>Verification Services</option>
                  <option>Career Lab Services</option>
                  <option>General Enquiry</option>
                </select>

                <select
                  name="callbackTime"
                  value={formData.callbackTime}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option value="">Preferred Callback Time</option>
                  <option>Morning (08:00 - 12:00)</option>
                  <option>Afternoon (12:00 - 17:00)</option>
                  <option>Any Time</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Tell us more about your needs..."
                  value={formData.message}
                  onChange={handleChange}
                  style={styles.textarea}
                />

                <button
                  type="submit"
                  style={styles.primaryBtn}
                >
                  Request Callback
                </button>
              </form>
            </div>

            {/* INFO CARD */}
            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>
                Need Immediate Assistance?
              </h3>

              <div style={styles.infoItem}>
                📧 info@insphired.co.za
              </div>

              <div style={styles.infoItem}>
                📞 +27 XX XXX XXXX
              </div>

              <div style={styles.infoItem}>
                🕒 Monday - Friday
                <br />
                08:00 - 17:00
              </div>

              <a
                href="https://bookings.cloud.microsoft/book/LandrysDiary@insphired.co.za/?ismsaljsauthenabled=true"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.secondaryBtn}
              >
                Schedule Consultation
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
    backgroundColor: '#FFFFFF'
  },

  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 32px'
  },

  hero: {
    background: '#0F172A',
    color: '#FFFFFF',
    padding: '140px 0 100px',
    position: 'relative'
  },

  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background:
      'linear-gradient(90deg, rgba(15,23,42,0.96), rgba(15,23,42,0.8))'
  },

  heroContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '750px'
  },

  heroTag: {
    display: 'inline-block',
    backgroundColor: '#00818F',
    padding: '8px 18px',
    borderRadius: '40px',
    fontSize: '0.8rem',
    fontWeight: 700,
    letterSpacing: '2px',
    marginBottom: '20px'
  },

  heroTitle: {
    fontSize: '3.8rem',
    fontWeight: 800,
    marginBottom: '24px'
  },

  heroText: {
    fontSize: '1.15rem',
    lineHeight: 1.8,
    opacity: 0.9
  },

  section: {
    padding: '100px 0'
  },

  contactGrid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '40px'
  },

  formCard: {
    backgroundColor: '#FFFFFF',
    padding: '40px',
    borderRadius: '24px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
  },

  formTitle: {
    fontSize: '2rem',
    marginBottom: '30px',
    color: '#0F172A'
  },

  input: {
    width: '100%',
    padding: '16px',
    marginBottom: '20px',
    borderRadius: '12px',
    border: '1px solid #CBD5E1',
    fontSize: '1rem'
  },

  textarea: {
    width: '100%',
    minHeight: '180px',
    padding: '16px',
    borderRadius: '12px',
    border: '1px solid #CBD5E1',
    marginBottom: '24px',
    resize: 'vertical'
  },

  infoCard: {
    backgroundColor: '#F8FAFC',
    padding: '40px',
    borderRadius: '24px',
    height: 'fit-content'
  },

  infoTitle: {
    fontSize: '1.5rem',
    marginBottom: '24px',
    color: '#0F172A'
  },

  infoItem: {
    marginBottom: '24px',
    color: '#475569',
    lineHeight: 1.8
  },

  primaryBtn: {
    backgroundColor: '#00818F',
    color: '#FFFFFF',
    border: 'none',
    padding: '16px 32px',
    borderRadius: '40px',
    cursor: 'pointer',
    fontWeight: 600
  },

  secondaryBtn: {
    display: 'inline-block',
    marginTop: '20px',
    textDecoration: 'none',
    border: '2px solid #00818F',
    color: '#00818F',
    padding: '14px 28px',
    borderRadius: '40px',
    fontWeight: 600
  }
};

export default CallbackPage;