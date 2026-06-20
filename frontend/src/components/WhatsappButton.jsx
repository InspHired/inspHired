import React from 'react';

const WhatsAppButton = () => {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=27815536670&text=Good+day...&type=phone_number&app_absent=0";

  const btnStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    backgroundColor: '#25D366',
    color: '#ffffff',
    padding: '14px 32px',
    borderRadius: '40px',
    boxShadow: '0 6px 20px rgba(37, 211, 102, 0.25)',
    textDecoration: 'none',
    fontFamily: "'Inter', sans-serif",
    fontWeight: '700',
    fontSize: '0.95rem',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    border: 'none'
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={btnStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.backgroundColor = '#20ba5a';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.backgroundColor = '#25D366';
      }}
    >
      <i className="fab fa-whatsapp" style={{ fontSize: '1.3rem' }}></i>
      Chat on WhatsApp
    </a>
  );
};

export default WhatsAppButton;