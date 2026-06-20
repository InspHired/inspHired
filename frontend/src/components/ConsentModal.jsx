import React, { useState, useEffect } from 'react';

const ConsentModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Always true
    analytical: true,
    marketing: false,
  });

  // Load existing choices if any
  useEffect(() => {
    const savedPrefs = localStorage.getItem('insphired_cookie_consent');
    if (savedPrefs) {
      setPreferences(JSON.parse(savedPrefs));
    }
  }, []);

  const handleToggle = (key) => {
    if (key === 'essential') return; // Cannot toggle essential
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    localStorage.setItem('insphired_cookie_consent', JSON.stringify(preferences));
    setIsOpen(false);
    // Optional: Trigger your tracking script re-initialization here if needed
  };

  return (
    <>
      {/* ── THE BUTTON ── */}
      <button
        onClick={() => setIsOpen(true)}
        style={s.triggerBtn}
        onMouseEnter={(e) => e.currentTarget.style.color = '#6E1D14'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
      >
        <i className="fas fa-cookie-bite" style={{ marginRight: '6px' }}></i>
        Consent Preferences
      </button>

      {/* ── THE MODAL BACKDROP ── */}
      {isOpen && (
        <div style={s.backdrop} onClick={() => setIsOpen(false)}>
          {/* MODAL BODY */}
          <div style={s.modal} onClick={(e) => e.stopPropagation()}>
            <h3 style={s.title}>Cookie Consent & Preferences</h3>
            <p style={s.desc}>
              We use cookies to optimize your platform experience, analyze traffic, and support our ecosystem services. Customize your choices below.
            </p>

            <div style={s.optionsContainer}>
              {/* Essential */}
              <div style={s.row}>
                <div>
                  <div style={s.optionTitle}>Essential Cookies</div>
                  <div style={s.optionDesc}>Required for basic site functionality, secure log-ins, and routing.</div>
                </div>
                <input type="checkbox" checked={preferences.essential} disabled style={s.checkbox} />
              </div>

              {/* Analytical */}
              <div style={s.row} onClick={() => handleToggle('analytical')} style={{...s.row, cursor:'pointer'}}>
                <div>
                  <div style={s.optionTitle}>Analytical & Performance</div>
                  <div style={s.optionDesc}>Helps us understand how visitors interact with Jobot and our ecosystem boards.</div>
                </div>
                <input 
                  type="checkbox" 
                  checked={preferences.analytical} 
                  onChange={() => handleToggle('analytical')}
                  style={s.checkbox} 
                />
              </div>

              {/* Marketing */}
              <div style={s.row} onClick={() => handleToggle('marketing')} style={{...s.row, cursor:'pointer'}}>
                <div>
                  <div style={s.optionTitle}>Marketing & Match Communication</div>
                  <div style={s.optionDesc}>Used to tailor career pathways, recruitment reminders, and ecosystem updates.</div>
                </div>
                <input 
                  type="checkbox" 
                  checked={preferences.marketing} 
                  onChange={() => handleToggle('marketing')}
                  style={s.checkbox} 
                />
              </div>
            </div>

            <div style={s.btnRow}>
              <button onClick={() => setIsOpen(false)} style={s.cancelBtn}>Cancel</button>
              <button onClick={handleSave} style={s.saveBtn}>Save Preferences</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

/* Styles tailored to your premium, clean workspace aesthetic */
const s = {
  triggerBtn: {
    background: 'none',
    border: 'none',
    color: '#64748B',
    fontSize: '0.82rem',
    fontWeight: '500',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    transition: 'color 0.2s ease',
    padding: '4px 8px',
    fontFamily: "'Inter', sans-serif"
  },
  backdrop: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(30, 34, 35, 0.45)',
    backdropFilter: 'blur(4px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999999,
    padding: '20px'
  },
  modal: {
    background: '#FFFFFF',
    width: '100%',
    maxWidth: '520px',
    borderRadius: '16px',
    padding: '32px',
    boxShadow: '0 24px 48px -12px rgba(0,0,0,0.18)',
    border: '1px solid rgba(110,29,20,0.06)',
    fontFamily: "'Inter', sans-serif"
  },
  title: { margin: '0 0 10px 0', fontSize: '1.3rem', fontWeight: 800, color: '#1E2223' },
  desc: { fontSize: '0.88rem', color: '#64748B', lineHeight: 1.6, margin: '0 0 24px 0' },
  optionsContainer: { display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' },
  row: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    gap: '20px',
    padding: '12px 14px',
    background: '#F8FAFC',
    borderRadius: '10px',
    border: '1px solid rgba(0,0,0,0.02)'
  },
  optionTitle: { fontWeight: 700, fontSize: '0.92rem', color: '#1E2223', marginBottom: '2px' },
  optionDesc: { fontSize: '0.78rem', color: '#64748B', lineHeight: 1.4 },
  checkbox: { 
    width: '18px', 
    height: '18px', 
    accentColor: '#00818F', 
    cursor: 'pointer',
    flexShrink: 0
  },
  btnRow: { display: 'flex', justifyContent: 'flex-end', gap: '12px' },
  cancelBtn: {
    background: 'none',
    border: 'none',
    color: '#64748B',
    fontWeight: 600,
    fontSize: '0.88rem',
    cursor: 'pointer',
    padding: '10px 16px'
  },
  saveBtn: {
    backgroundColor: '#6E1D14',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '30px',
    padding: '10px 22px',
    fontWeight: 700,
    fontSize: '0.88rem',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(110,29,20,0.15)'
  }
};

export default ConsentModal;