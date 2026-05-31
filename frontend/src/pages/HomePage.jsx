import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const leadershipTeam = [
  { name: 'Landry Mutombo',       role: 'Chief Executive',                     img: '/assets/InspHiredTeam/Mr L.png'   },
  { name: 'Norma Banda',          role: 'Managing Partner',                    img: '/assets/InspHiredTeam/Norma.png'    },
  { name: 'Rochelle Titus',       role: 'Managing Partner',                    img: '/assets/InspHiredTeam/Rochelle.png' },
  { name: 'Joyce Muya',           role: 'Managing Partner',                    img: '/assets/InspHiredTeam/Joyce.png'    },
  { name: 'Stefanie Peters',      role: 'Managing Partner',                    img: '/assets/InspHiredTeam/Stef.png'     },
  { name: 'Deborah Mubenga',      role: 'Head of Operations',                  img: '/assets/InspHiredTeam/Deborah.png'  },
  { name: 'Gègè Sena Saleh',      role: 'Head of Finance',                     img: '/assets/InspHiredTeam/Gege.png'     },
  { name: 'Unathi Mbasa',         role: 'Operations Team Lead',                img: '/assets/InspHiredTeam/Unathi.png'   },
  { name: 'Ene-ene Netshiswinzhe',role: 'HR Generalist',                       img: '/assets/InspHiredTeam/Ene.png'      },
  { name: 'Tumelo Mpeta',         role: 'Talent Marketing & ATS Coordinator', img: '/assets/InspHiredTeam/Tumelo.png'   },
  { name: 'Phamela Mthitshane',   role: 'Candidate Manager',                   img: '/assets/InspHiredTeam/Phamela.png'  },
  { name: 'Sharrity Mhlanga',     role: 'Recruitment Researcher',              img: '/assets/InspHiredTeam/Sharity.png'  },
];

const ecosystemPlatforms = [
  {
    label:   'Proprietary AI',
    name:    'Jobot by InspHired',
    tagline: 'In-house AI Applicant Tracking System',
    desc:    'Jobot manages the full recruitment pipeline — from job spec to placement — ensuring speed, consistency, and quality on every search we run.',
    features:['AI-powered candidate matching', 'Full pipeline management', 'ATS & CRM in one platform', 'Built & owned by InspHired'],
    cta:     'Learn more',
    ctaHref: '/jobot',
    accent:  '#00818F',
    mockIcon:'fas fa-robot',
    img:     '/assets/JobBot.png',
  },
  {
    label:   'Temp & contract',
    name:    'InspHired Worx',
    tagline: 'On-demand temp booking platform',
    desc:    'A pre-vetted talent pool and on-demand temp booking platform. Request, manage, and deploy temporary staff rapidly — without the admin burden.',
    features:['Pre-vetted talent pool', 'On-demand booking', 'Shift-based placements', 'Rapid deployment'],
    cta:     'Learn more',
    ctaHref: '/worx',
    accent:  '#00818F',
    mockIcon:'fas fa-users',
    img:     '/assets/InspHiredWorx.png',
  },
  {
    label:   'Free for candidates',
    name:    'InspHired Connect',
    tagline: 'Free job board & CRM',
    desc:    'A free job board and CRM connecting qualified candidates directly with open opportunities. Upload a CV, get matched, apply — all in one place.',
    features:['Free for all candidates', 'Smart talent matching', 'Direct employer access', 'Career pathway tools'],
    cta:     'Learn More',
    ctaHref: '/connect',
    accent:  '#00818F',
    mockIcon:'fas fa-bolt',
    img:     '/assets/InspHiredConnect.png',
  },
  {
    label:   'Verification',
    name:    'VerifyMe',
    tagline: 'Background checks & screening',
    desc:    'Every InspHired candidate is screened through VerifyMe before being presented — giving you full confidence in every hire.',
    features:['Criminal & biometric checks', 'Education verification', 'Employment history', 'ID & work permits'],
    cta:     'Learn more',
    ctaHref: '/verify-me',
    accent:  '#00818F',
    mockIcon:'fas fa-shield-alt',
    img:     '/assets/VerifyMe.png',
  },
];

const HomePage = () => {
  return (
    <div style={g.pageWrapper}>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollTeam {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .fade-up { animation: fadeUp 0.8s ease-out both; }
        .team-track { display:flex; gap:20px; width:max-content; animation: scrollTeam 50s linear infinite; }
        .team-track:hover { animation-play-state: paused; }

        .eco-card {
          transition: transform 0.28s cubic-bezier(0.16,1,0.3,1), box-shadow 0.28s ease;
        }
        .eco-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px -8px rgba(110,29,20,0.12) !important;
        }
        .val-card {
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }
        .val-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 40px -8px rgba(110,29,20,0.15) !important;
        }
        .team-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .team-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -8px rgba(110,29,20,0.16) !important;
        }
        .btn-t { transition: all 0.2s ease; }
        .btn-t:hover { opacity: 0.88; transform: translateY(-1px); }
      `}</style>

      <Navbar />

      {/* ── HERO ── */}
      <header style={s.hero}>
        <video style={s.heroVid} autoPlay loop muted playsInline
          poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-executives-working-together-in-a-bright-office-41556-large.mp4" type="video/mp4" />
        </video>
        <div style={s.heroOverlay} />
        <div style={s.container}>
          <div style={s.heroContent} className="fade-up">
            <div style={s.heroBadge}>
              <i className="fas fa-globe-africa" style={{marginRight:'7px'}}></i>
              Africa's Recruitment Partner · Est. 2015
            </div>
            <h1 style={s.heroH1}>
              Connecting great talent with great companies
            </h1>
            <p style={s.heroSub}>
              We don't just fill jobs — we build careers, relationships, and futures.
              InspHired has been solving Africa's employment challenges through 
              innovative technology and people who care.
            </p>
            <div style={s.heroBtns}>
              <a href="#" style={s.btnCyan} className="btn-t">
                <i className="fas fa-paper-plane" style={{marginRight:'8px'}}></i>Find talent
              </a>
              <a href="https://app.insphired.jobs/jobs?standalone=true" style={s.btnOutline} className="btn-t">
                <i className="fas fa-briefcase" style={{marginRight:'8px'}}></i>Available jobs
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ── STORY ── */}
      <section style={{...s.section, background:'#F8FAFC'}}>
        <div style={s.container}>
          <div style={s.storyGrid}>
            <div style={s.storyLeft}>
              <span style={s.eyebrow}>Who we are</span>
              <h2 style={s.h2}>Where African Talent<br/>Meets Opportunity</h2>
              <p style={s.bodyText}>
                Founded in 2015, InspHired set out with a clear mission — to bridge the gap 
                between candidates and clients through innovative technology and dedicated talent 
                specialists. What started as a focused recruitment firm has steadily grown into 
                a full talent ecosystem serving employers and job seekers across the continent.
              </p>
              <p style={{...s.bodyText, marginTop:'16px'}}>
                Today, InspHired operates a multi-platform digital infrastructure engineered to 
                simplify hiring. We are home to a team of passionate professionals who believe 
                the right placement changes lives — creating long-term value for candidates, 
                growing enterprises, and communities across Africa.
              </p>
              <blockquote style={s.quote}>
                "We don't just fill jobs — we build careers, relationships, and futures."
              </blockquote>
            </div>
            
            <div style={s.storyImageWrap}>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
                alt="Diverse modern business team collaborating at a table in a bright workspace" 
                style={s.storyImage} 
              />
              <div style={s.storyImageOverlay} />
            </div>
          </div>

          <div style={s.mvCardsRow}>
            <div style={s.mvCard}>
              <div style={s.mvCardBar} />
              <div style={s.mvCardInner}>
                <div style={s.mvNumWrap}>
                  <span style={s.mvNum}>01</span>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={s.mvTitle}>Our Mission</h3>
                  <p style={s.mvText}>
                    To bridge the gap between candidates and clients through innovative
                    technology and InspHired people — custom-built for Africa's unique
                    employment landscape.
                  </p>
                </div>
              </div>
            </div>

            <div style={s.mvCard}>
              <div style={{...s.mvCardBar, background: C.cyan}} />
              <div style={s.mvCardInner}>
                <div style={{...s.mvNumWrap, background: 'rgba(0,129,143,0.08)', color: C.cyan}}>
                  <span style={s.mvNum}>02</span>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={s.mvTitle}>Our Vision</h3>
                  <p style={s.mvText}>
                    To be the number one solution to Africa's employment challenges —
                    from entry-level positions to C-suite executive searches — across
                    the continent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ECOSYSTEM ── */}
      <section style={{...s.section, background: C.white}}>
        <div style={s.container}>
          <div style={s.secHead}>
            <span style={s.eyebrow}>The InspHired Ecosystem</span>
            <h2 style={s.h2}>More than a recruitment agency</h2>
            <p style={s.secSub}>
                  Four connected platforms, each solving a different part of the employment challenge — working together as one ecosystem. 
            </p>
          </div>
          <div style={s.ecoGrid}>
            {ecosystemPlatforms.map((p, i) => (
              <div key={i} style={s.ecoCard} className="eco-card">
                
                {/* Top Header Layer */}
                <div style={s.ecoTopRow}>
                  <div style={{...s.ecoLabel, color: p.accent, borderColor: `${p.accent}25`, background: `${p.accent}0C`}}>
                    {p.label}
                  </div>
                  
                  {/* Expanded circular badge enclosing the asset logo */}
                  <div style={s.ecoCircleBadge}>
                    {p.img ? (
                      <img 
                        src={p.img} 
                        alt={`${p.name} logo`}
                        style={s.ecoBadgeImg}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div style={{...s.ecoBadgeIconFallback, background: `${p.accent}12`}}>
                      <i className={p.mockIcon} style={{color: p.accent, fontSize: '1.2rem'}}></i>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 style={s.ecoName}>{p.name}</h3>
                <p style={s.ecoTagline}>{p.tagline}</p>
                <p style={s.ecoDesc}>{p.desc}</p>
                <ul style={s.ecoList}>
                  {p.features.map((f, fi) => (
                    <li key={fi} style={s.ecoListItem}>
                      <i className="fas fa-check" style={{...s.ecoCheck, color: p.accent}}></i>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={p.ctaHref} style={{...s.ecoCta, borderColor: p.accent, color: p.accent}} className="btn-t">
                  {p.cta} <i className="fas fa-arrow-right" style={{marginLeft:'6px', fontSize:'0.75rem'}}></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{...s.section, background:'#F8FAFC'}}>
        <div style={s.container}>
          <div style={s.secHead}>
            <span style={s.eyebrow}>What drives us</span>
            <h2 style={s.h2}>Three values. Every decision.</h2>
            <p style={s.secSub}>
              Our actions and attitudes are guided by three core values that shape how
              we work with each other, our candidates, and our clients.
            </p>
          </div>
          <div style={s.valGrid}>
            {[
              { icon:'fas fa-fire-flame-curved', title:'Passion',      accent: C.burgundy,
                text:'Life is too short to not love what you do, why you do it, and who you do it with. Passion is in everything we do — and our people are driven by it every single day.' },
              { icon:'fas fa-scale-balanced',    title:'Integrity',    accent: C.burgundy,
                text:'Being authentic in the way we deal with colleagues, candidates, and clients is key to our success. We are committed to doing the right thing in the right way, always.' },
              { icon:'fas fa-bullseye',          title:'Accountability', accent: C.burgundy,
                text:'In all our activities, we operate with full transparency. We accept responsibility and hold ourselves accountable — to each other, to our candidates, and to our clients.' },
            ].map((v, i) => (
              <div key={i} style={s.valCard} className="val-card">
                <div style={{...s.valIconRow}}>
                  <div style={{...s.valIconBox, background: v.accent === C.burgundy ? 'rgba(110,29,20,0.08)' : 'rgba(0,129,143,0.08)'}}>
                    <i className={v.icon} style={{fontSize:'1.25rem', color: v.accent}}></i>
                  </div>
                  <h3 style={{...s.valTitle, color: v.accent}}>{v.title}</h3>
                </div>
                <p style={s.valText}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section style={{...s.section, background: C.white, overflow:'hidden'}}>
        <div style={s.container}>
          <div style={s.secHead}>
            <span style={s.eyebrow}>Our people</span>
            <h2 style={s.h2}>The team behind InspHired</h2>
            <p style={s.secSub}>
              Experienced recruitment professionals united by one mission —
              connecting great talent with great companies across Africa. Hover to pause.
            </p>
          </div>
        </div>
        <div style={s.teamSlider}>
          <div className="team-track">
            {[...leadershipTeam, ...leadershipTeam].map((m, i) => (
              <div key={i} style={s.teamCard} className="team-card">
                <div style={s.teamAvatar}>
                  <img src={m.img} alt={m.name} style={s.teamImg}
                    onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
                  <div style={s.teamFallback}>
                    <i className="fas fa-user-tie" style={{fontSize:'1.8rem', color:'rgba(255,255,255,0.85)'}}></i>
                  </div>
                </div>
                <div style={s.teamName}>{m.name}</div>
                <div style={s.teamRole}>{m.role}</div>
              </div>
            ))}
          </div>
        </div>
        <p style={{textAlign:'center', marginTop:'32px', fontSize:'0.9rem', color: C.slateLight, padding:'0 32px'}}>
          Backed by a full team of candidate managers, recruitment researchers, account managers, and operations specialists — all on the InspHired bus.
        </p>
      </section>

      <Footer />
    </div>
  );
};

/* ─────────────────────────────────
    COLOR TOKENS
───────────────────────────────── */
const C = {
  burgundy:     '#6E1D14',
  burgundyDk:   '#54140E',
  cyan:         '#00818F',
  cyanDk:       '#005F6A',
  cyanLight:    '#5ecfd9',
  slate:        '#1E2223',
  slateText:    '#334155',
  slateLight:   '#64748B',
  white:        '#FFFFFF',
  bgOff:        '#F8FAFC',
  border:       'rgba(110,29,20,0.08)',
  shadowSm:     '0 6px 24px -6px rgba(110,29,20,0.05), 0 2px 8px -2px rgba(110,29,20,0.03)',
};

const g = {
  pageWrapper: {
    fontFamily:"'Inter', sans-serif",
    color: C.slateText,
    backgroundColor: C.white,
    lineHeight: 1.65,
  }
};

const s = {
  container: { maxWidth:'1280px', margin:'0 auto', padding:'0 40px', width:'100%' },

  /* Hero */
  hero:        { position:'relative', minHeight:'92vh', display:'flex', alignItems:'center', color:'white', overflow:'hidden', backgroundColor: C.slate },
  heroVid:     { position:'absolute', top:'50%', left:'50%', minWidth:'100%', minHeight:'100%', width:'auto', height:'auto', transform:'translate(-50%,-50%)', objectFit:'cover', zIndex:1 },
  heroOverlay: { 
    position: 'absolute', 
    inset: 0, 
    background: 'linear-gradient(105deg, rgba(0, 129, 143, 0.24) 0%, rgba(30, 34, 35, 0.85) 45%, rgba(0, 40, 50, 0.7) 100%)', 
    zIndex: 2 
  },
  heroContent: { maxWidth:'680px', position:'relative', zIndex:3, padding:'80px 0 60px' },
  heroBadge:   { fontSize:'0.72rem', letterSpacing:'2px', fontWeight:700, textTransform:'uppercase', background:'rgba(4, 60, 66, 0.18)', border:'1px solid rgba(0,129,143,0.4)', backdropFilter:'blur(8px)', display:'inline-flex', alignItems:'center', padding:'6px 18px', borderRadius:'40px', marginBottom:'24px', color:'#5ecfd9' },
  heroH1:      { fontSize:'clamp(2.4rem, 4.5vw, 3.6rem)', fontWeight:800, lineHeight:1.1, marginBottom:'18px', color:'#fff' },
  heroSub:     { fontSize:'1.05rem', marginBottom:'32px', opacity:0.82, lineHeight:1.75, maxWidth:'540px' },
  heroBtns:    { display:'flex', gap:'12px', flexWrap:'wrap', marginBottom:'44px' },
  btnCyan:     { background: C.cyan, color:'white', padding:'12px 28px', borderRadius:'40px', textDecoration:'none', fontWeight:700, fontSize:'0.9rem', display:'inline-flex', alignItems:'center', boxShadow:'0 6px 20px rgba(0,129,143,0.35)' },
  btnOutline:  { background:'transparent', border:'2px solid rgba(255,255,255,0.5)', color:'white', padding:'10px 26px', borderRadius:'40px', textDecoration:'none', fontWeight:700, fontSize:'0.9rem', display:'inline-flex', alignItems:'center' },

  /* Section base */
  section:  { padding:'96px 0' },
  secHead:  { textAlign:'center', marginBottom:'52px' },
  secSub:   { color: C.slateLight, maxWidth:'580px', margin:'0 auto', fontSize:'1rem', lineHeight:1.72 },
  eyebrow:  { display:'block', fontSize:'0.72rem', letterSpacing:'2.5px', fontWeight:700, textTransform:'uppercase', color: C.burgundy, marginBottom:'10px' },
  h2:       { fontSize:'clamp(1.9rem, 3vw, 2.5rem)', fontWeight:800, color: C.slate, lineHeight:1.18, marginBottom:'12px' },
  bodyText: { fontSize:'0.97rem', color:'#475569', lineHeight:1.75 },

  /* Story Layout Split */
  storyGrid:     { display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(450px, 1fr))', gap:'60px', alignItems:'center', marginBottom: '60px' },
  storyLeft:     { display:'flex', flexDirection:'column' },
  quote:         { borderLeft:`3px solid #788B7C`, paddingLeft:'18px', margin:'24px 0 0', fontStyle:'italic', fontSize:'1rem', color: C.slate, lineHeight:1.65 },
  storyImageWrap:{ position: 'relative', borderRadius: '20px', overflow: 'hidden', height: '400px', boxShadow: '0 20px 40px -15px rgba(0,0,0,0.1)', display: 'block', width: '100%' },
  storyImage:    { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  storyImageOverlay: { position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(248,250,252,0.15), rgba(248,250,252,0))' },

  /* Mission & Vision Row Layout */
  mvCardsRow:   { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px', marginTop: '20px' },
  mvCard:       { background: C.white, borderRadius:'16px', padding:'24px 22px', boxShadow: C.shadowSm, border:`1px solid ${C.border}`, overflow:'hidden', position:'relative' },
  mvCardBar:    { position:'absolute', top:0, left:0, right:0, height:'3px', background: C.burgundy },
  mvCardInner:  { display:'flex', gap:'16px', alignItems:'flex-start' },
  mvNumWrap:    { width:'36px', height:'36px', borderRadius:'10px', background:'rgba(110,29,20,0.08)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 },
  mvNum:        { fontSize:'0.85rem', fontWeight:800, color: C.burgundy },
  mvTitle:      { fontSize:'1.05rem', fontWeight:700, color: C.slate, marginBottom:'6px' },
  mvText:       { fontSize:'0.88rem', color:'#475569', lineHeight:1.65 },

  /* Ecosystem Layout Styling Adjustments */
  ecoGrid:        { display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'20px' },
  ecoCard:        { background: C.white, borderRadius:'16px', padding:'28px 24px', border:`1px solid ${C.border}`, boxShadow: C.shadowSm, position:'relative', display:'flex', flexDirection:'column' },
  ecoTopRow:      { display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'20px' },
  ecoLabel:       { fontSize:'0.65rem', fontWeight:700, letterSpacing:'0.8px', textTransform:'uppercase', padding:'4px 12px', borderRadius:'999px', border:'1px solid' },
  
  // Increased width/height from 46px to 56px for a cleaner balance
  ecoCircleBadge: { width:'56px', height:'56px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, overflow:'hidden', position:'relative', backgroundColor:'#FFFFFF', boxShadow:'0 2px 10px rgba(0,0,0,0.06)', border:'1px solid rgba(0,0,0,0.04)' },
  
  // Scaled up image layout containment context
  ecoBadgeImg:    { width:'90%', height:'90%', objectFit:'contain', display:'block', position:'relative', zIndex:2 },
  ecoBadgeIconFallback: { position:'absolute', inset:0, display:'none', alignItems:'center', justifyContent:'center', zIndex:1 },
  ecoName:        { fontSize:'1.1rem', fontWeight:700, color: C.slate, marginBottom:'4px', lineHeight:1.25 },
  ecoTagline:     { fontSize:'0.78rem', color: C.slateLight, marginBottom:'12px', fontWeight:500 },
  ecoDesc:        { fontSize:'0.85rem', color:'#475569', lineHeight:1.6, marginBottom:'16px' },
  ecoList:        { listStyle:'none', padding:0, margin:'0 0 24px', display:'flex', flexDirection:'column', gap:'8px' },
  ecoListItem:    { display:'flex', alignItems:'center', gap:'8px', fontSize:'0.82rem', color:'#475569' },
  ecoCheck:       { fontSize:'0.72rem', flexShrink:0 },
  ecoCta:         { display:'inline-flex', alignItems:'center', margin:'auto 0 0', border:'1.5px solid', padding:'8px 20px', borderRadius:'40px', fontWeight:600, fontSize:'0.8rem', textDecoration:'none', width:'fit-content' },

  /* Values */
  valGrid:    { display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'20px', marginBottom:'24px' },
  valCard:    { background: C.white, borderRadius:'18px', padding:'28px 26px', boxShadow: C.shadowSm, border:`1px solid ${C.border}` },
  valIconRow: { display:'flex', alignItems:'center', gap:'14px', marginBottom:'14px' },
  valIconBox: { width:'42px', height:'42px', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 },
  valTitle:   { fontSize:'1.15rem', fontWeight:700 },
  valText:    { fontSize:'0.88rem', color: C.slateLight, lineHeight:1.7 },
  wayStrip:   { background: C.white, border:`1px solid ${C.border}`, borderRadius:'14px', padding:'16px 24px', display:'flex', alignItems:'center', gap:'16px', flexWrap:'wrap', boxShadow:'0 4px 14px rgba(110,29,20,0.05)' },
  wayLabel:   { fontSize:'0.75rem', fontWeight:700, color: C.burgundy, textTransform:'uppercase', letterSpacing:'1.5px', flexShrink:0, whiteSpace:'nowrap' },
  wayPills:   { display:'flex', flexWrap:'wrap', gap:'7px' },
  wayPill:    { fontSize:'0.78rem', padding:'4px 12px', borderRadius:'999px', background:'rgba(110,29,20,0.06)', color: C.burgundy, border:'1px solid rgba(110,29,20,0.14)', fontWeight:500 },

  /* Team */
  teamSlider: { width:'100%', overflow:'hidden', padding:'8px 0 16px' },
  teamCard:   { background: C.white, borderRadius:'18px', padding:'26px 20px', textAlign:'center', boxShadow: C.shadowSm, border:`1px solid ${C.border}`, width:'210px', flexShrink:0 },
  teamAvatar: { width:'84px', height:'84px', margin:'0 auto 14px', borderRadius:'50%', position:'relative', border:`2.5px solid rgba(110,29,20,0.14)`, overflow:'hidden', background:'#F1F5F9', display:'flex', alignItems:'center', justifyContent:'center' },
  teamImg:    { width:'100%', height:'100%', objectFit:'cover', display:'block' },
  teamFallback:{ display:'none', width:'100%', height:'100%', alignItems:'center', justifyContent:'center', background:`linear-gradient(135deg, ${C.burgundy}, #8B2A1F)` },
  teamName:   { fontSize:'0.92rem', fontWeight:700, color: C.slate, marginBottom:'3px' },
  teamRole:   { fontSize:'0.72rem', color: C.burgundy, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.4px', lineHeight:1.4 },
};

export default HomePage;