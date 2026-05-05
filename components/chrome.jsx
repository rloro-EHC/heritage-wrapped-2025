// chrome.jsx — Squarespace-style site chrome (header, anchor nav, footer)

const NAV_SECTIONS = [
  { id: "letters",      label: "Letters" },
  { id: "numbers",      label: "By the Numbers" },
  { id: "moments",      label: "Top Moments" },
  { id: "grants",       label: "HCIP",    group: "Grants" },
  { id: "fire",         label: "FIRE",    group: "Grants" },
  { id: "ecamp",        label: "ECAMP" },
  { id: "kpis",         label: "Strategic Progress" },
  { id: "partnerships", label: "Partnerships" },
  { id: "financials",   label: "Financials" },
  { id: "ahead",        label: "Looking Ahead" },
  { id: "people",       label: "People" },
];

function SqsHeader() {
  return (
    <>
      <div className="sqs-banner">
        <span>Edmonton Heritage Council · 2025 Annual Report just released →</span>
        <span className="sqs-banner-cta">Read the report</span>
      </div>
      <header className="sqs-header">
        <div className="sqs-header-inner">
          <a href="#" className="sqs-logo">
            <img src={(typeof window !== 'undefined' && window.__resources && window.__resources.ehcLogoWhite) || "assets/ehc-logo-white.webp"} alt="Edmonton Heritage Council" />
          </a>
          <nav className="sqs-nav">
            <a href="#">About</a>
            <a href="#">Grants</a>
            <a href="#">ECAMP</a>
            <a href="#">Stories</a>
            <a href="#" className="active">Annual Report</a>
            <a href="#">Members</a>
            <a href="#" className="sqs-nav-cta">Donate</a>
          </nav>
        </div>
      </header>
    </>
  );
}

function MicrositeAnchorNav() {
  const [activeId, setActiveId] = React.useState(null);
  const [hovId, setHovId] = React.useState(null);

  React.useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + 64;
      let current = null;
      for (const s of NAV_SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= scrollY) current = s.id;
      }
      setActiveId(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 46;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <div className="microsite-anchor-nav">
      <div className="microsite-anchor-inner">
        <a href="#top" className="hw-logo" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Heritage Wrapped 2025</a>
        {NAV_SECTIONS.map((s, i) => {
          const isActive   = activeId === s.id;
          const isHov      = hovId === s.id;
          const groupStart = s.group && (i === 0 || NAV_SECTIONS[i - 1].group !== s.group);
          return (
            <React.Fragment key={s.id}>
              {groupStart && (
                <span style={{
                  display: 'flex', alignItems: 'center', paddingLeft: 14, paddingRight: 6,
                  borderLeft: '1px solid rgba(39,37,37,0.15)',
                  color: 'rgba(39,37,37,0.4)', fontSize: 9,
                  letterSpacing: '0.14em', textTransform: 'uppercase', whiteSpace: 'nowrap', flexShrink: 0,
                }}>{s.group}</span>
              )}
              <a
                href={`#${s.id}`}
                className={isActive ? 'is-active' : ''}
                onClick={e => scrollTo(e, s.id)}
                onMouseEnter={() => setHovId(s.id)}
                onMouseLeave={() => setHovId(null)}
                style={{
                  color: isActive ? 'var(--ink)' : (isHov ? 'var(--ink)' : 'rgba(39,37,37,0.55)'),
                  background: isHov && !isActive ? 'rgba(39,37,37,0.06)' : 'transparent',
                  paddingLeft: s.group ? 10 : 14,
                  paddingRight: s.group ? 10 : 14,
                }}
              >
                {s.label}
              </a>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

function SqsFooter() {
  return (
    <footer className="sqs-footer">
      <div className="sqs-footer-inner">
        <div className="col">
          <p className="sqs-footer-tag">
            Heritage is the infrastructure through which belonging is built.
          </p>
          <a href="#" className="btn btn--ember">Become a member →</a>
        </div>
        <div className="col">
          <h4>Programs</h4>
          <ul>
            <li><a href="#">HCIP Grants</a></li>
            <li><a href="#">FIRE Grants</a></li>
            <li><a href="#">Community Heritage Activation Support</a></li>
            <li><a href="#">ECAMP</a></li>
            <li><a href="#">Roots & Routes</a></li>
          </ul>
        </div>
        <div className="col">
          <h4>About</h4>
          <ul>
            <li><a href="#">Our team</a></li>
            <li><a href="#">Board of directors</a></li>
            <li><a href="#">Reports & policies</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="col">
          <h4>Visit</h4>
          <ul>
            <li>218A–10440 108 Ave NW</li>
            <li>Edmonton, Alberta T5H 3Z9</li>
            <li><a href="mailto:info@edmontonheritagecouncil.ca">info@edmontonheritagecouncil.ca</a></li>
            <li><a href="#">Newsletter signup</a></li>
          </ul>
        </div>
      </div>
      <div className="sqs-footer-bottom">
        <span>© 2026 Edmonton Heritage Council Society · Treaty 6 Territory</span>
        <span>Built on Squarespace · edmontonheritage.ca</span>
      </div>
    </footer>
  );
}

Object.assign(window, { SqsHeader, MicrositeAnchorNav, SqsFooter });
