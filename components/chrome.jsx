// chrome.jsx — Squarespace-style site chrome (header, anchor nav, footer)

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

function MicrositeAnchorNav({ sections, activeId }) {
  return (
    <div className="microsite-anchor-nav">
      <div className="microsite-anchor-inner">
        <span className="label">Heritage Wrapped 2025 →</span>
        {sections.map(s => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={activeId === s.id ? "is-active" : ""}
          >
            {s.label}
          </a>
        ))}
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
