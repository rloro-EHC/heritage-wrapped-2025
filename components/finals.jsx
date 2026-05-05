// finals.jsx — Top moments, financials, looking ahead, people

const SPOTLIGHTS = [
  {
    tag: "Grant Recipient · FIRE",
    title: "Chelsea Vowel — Online Cree Language Course",
    body: "A free, self-paced online Cree language course rooted in Y-dialect, with 36 hours of video instruction and exercises for beginners. Centres access for those without institutional support — helping Métis and Cree people anywhere reclaim connection to nêhiyawêwin.",
    media: { type: 'image-link', src: 'assets/chelsea-vowel-indigenous-learns.png', href: 'https://courses.apihtawikosisan.com/', orientation: 'landscape', caption: 'courses.apihtawikosisan.com', alt: 'Chelsea Vowel — Indigenous Learns: Welcome to mâci-nêhiyawêtân' },
    img: "Chelsea Vowel teaching nêhiyawêwin",
    color: "var(--prairie)",
  },
  {
    tag: "Grant Recipient · HCIP",
    title: "Palestine 101 — Educational Resources",
    body: "The Canada Palestine Cultural Association received a Heritage Project Grant to develop comprehensive K–12 educational resources on Palestinian culture, history, and heritage — a testament to the breadth of heritage EHC supports.",
    media: { type: 'instagram', src: 'https://www.instagram.com/reel/DBerva5tGSx/embed', orientation: 'portrait', caption: '@canadapalestine on Instagram' },
    img: "Palestine 101 classroom resource",
    color: "var(--brick)",
  },
  {
    tag: "Innovation · ECAMP",
    title: "Summer Student Sound Exhibit",
    body: "ECAMP summer student Emily Horrill created a pop-up sound exhibit in Churchill Square on August 19th, engaging over 200 visitors including Mayor Sohi. Heritage in unexpected public spaces.",
    media: { type: 'image', src: 'assets/churchill-square-sound-exhibit.jpg', alt: 'Visitors at the ECAMP pop-up sound exhibit in Churchill Square — listeners with headphones at a fountain-side table.' },
    img: "Churchill Square sound exhibit",
    color: "var(--ember)",
  },
  {
    tag: "Provincial Hub · Indigitization",
    title: "A Hub for Indigenous Digital Heritage",
    body: "In partnership with the Indigitization Program — originally founded at UBC — EHC hosted a provincial Indigitization workshop bringing together 17 Indigenous heritage practitioners from 11 communities, including Piikani, Frog Lake, Saddle Lake Cree, Siksika, and Tsuut'ina. The work extends a growing practice of Indigenous data sovereignty — ensuring communities retain ownership and governance of their own heritage as it moves into digital form — and positions Alberta as a hub for that ongoing work.",
    media: { type: 'youtube', src: 'https://www.youtube-nocookie.com/embed/RYT9wkhRga0?rel=0&modestbranding=1', caption: 'Provincial Indigitization Workshop' },
    img: "Indigitization workshop participants",
    color: "var(--prairie-deep)",
  },
];

function TopMoments() {
  return (
    <section className="section" id="moments">
      <div className="section-hd">
        <div className="num">Part 02<span>Top Moments & Stories</span></div>
        <div>
          <h2>The work behind the numbers.</h2>
          <p className="lede" style={{marginTop: 24}}>
            Spotlights on the people, projects, and partnerships that defined 2025.
          </p>
        </div>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start'}} className="moments-grid">
        {SPOTLIGHTS.map((s, i) => (
          <article key={i} style={{
            border: '1px solid var(--rule)',
            background: 'var(--paper)',
            borderRadius: 4,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}>
            {s.media && s.media.type === 'instagram' ? (
              <div style={{
                background: 'var(--paper)',
                borderBottom: '1px solid var(--rule)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '32px 32px 24px',
              }}>
                <div style={{
                  width: '100%',
                  maxWidth: 360,
                  aspectRatio: '9/16',
                  background: 'var(--paper)',
                  borderRadius: 4,
                  overflow: 'hidden',
                }}>
                  <iframe
                    src={s.media.src}
                    title={s.title}
                    loading="lazy"
                    allow="encrypted-media;"
                    style={{width: '100%', height: '100%', border: 'none', display: 'block', background: 'var(--paper)'}}
                  />
                </div>
              </div>
            ) : s.media && s.media.type === 'youtube' ? (
              <div style={{
                aspectRatio: '16/9',
                borderBottom: '1px solid var(--rule)',
                background: '#000',
                overflow: 'hidden',
              }}>
                <iframe
                  src={s.media.src}
                  title={s.title}
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{width: '100%', height: '100%', border: 'none', display: 'block'}}
                />
              </div>
            ) : s.media && s.media.type === 'image-link' ? (
              <a
                href={s.media.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  borderBottom: '1px solid var(--rule)',
                  overflow: 'hidden',
                  background: 'var(--paper)',
                }}
              >
                <img
                  src={s.media.src}
                  alt={s.media.alt || s.title}
                  loading="lazy"
                  style={{width: '100%', height: 'auto', display: 'block'}}
                />
              </a>
            ) : s.media && s.media.type === 'image' ? (
              <div style={{
                borderBottom: '1px solid var(--rule)',
                overflow: 'hidden',
                background: 'var(--paper)',
              }}>
                <img
                  src={s.media.src}
                  alt={s.media.alt || s.title}
                  loading="lazy"
                  style={{width: '100%', height: 'auto', display: 'block'}}
                />
              </div>
            ) : (
              <div className="img-ph" style={{aspectRatio: '16/10', borderRadius: 0, border: 'none', borderBottom: '1px solid var(--rule)'}}>
                {s.img}
              </div>
            )}
            <div style={{padding: 32, display: 'flex', flexDirection: 'column', gap: 12, flex: 1}}>
              <span className="mono" style={{fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: s.color}}>{s.tag}</span>
              <h3 style={{fontSize: 26}}>{s.title}</h3>
              <p style={{color: 'var(--ink-soft)', fontSize: 15, margin: 0}}>{s.body}</p>
              {s.media && s.media.caption && (
                <span className="mono" style={{fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-mute)', marginTop: 4}}>
                  Video · {s.media.caption}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>

      <style>{`
        @media (max-width: 720px) {
          .moments-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const REVENUE = [
  { label: "City of Edmonton & Provincial Grants", value: 2573486, pct: 97.7, color: "#3D6184", desc: "Operating funding via the City of Edmonton's Community Investment Operating Grant, plus complementary provincial support. Anchors EHC's capacity to deliver every program in this report." },
  { label: "Casino (AGLC)", value: 25907, pct: 1.0, color: "#C97A3F", desc: "Proceeds from EHC's biennial AGLC casino fundraiser — volunteer-staffed shifts that fund unrestricted programming." },
  { label: "Iskwehew Kamik Sponsorships", value: 17500, pct: 0.7, color: "#7A9C5A", desc: "Sponsorship revenue dedicated to Iskwehew Kamik — the Indigenous Women's Lodge programming stream." },
  { label: "Symposium", value: 7409, pct: 0.3, color: "#B8A24A", desc: "Registration and partner contributions from the annual Heritage Symposium." },
  { label: "Amortization of Deferred Capital", value: 3744, pct: 0.1, color: "#A85D7A", desc: "Non-cash recognition of previously received capital contributions, amortized over the useful life of associated assets." },
  { label: "Membership · Donations · Interest", value: 5142, pct: 0.2, color: "#5C8AA8", desc: "Individual memberships, donations to the Heritage Places Endowment Fund, and interest income on operating reserves." },
];

const EXPENSES = [
  { label: "Salaries, Wages & Benefits", value: 1134795, color: "#3D6184", desc: "Compensation for EHC's 17-person staff team across grants, programming, communications, ECAMP, and operations." },
  { label: "Grants and Honorariums", value: 1111276, color: "#C97A3F", desc: "Direct disbursements: $724K via HCIP, $204K via FIRE, plus honorariums to community advisors, jurors, and program contributors." },
  { label: "External Contracting", value: 107773, color: "#7A9C5A", desc: "Specialist contractors — evaluators, designers, facilitators, and Indigenous knowledge keepers — engaged on a per-project basis." },
  { label: "Technology Costs", value: 96196, color: "#B8A24A", desc: "Grant management platform, ECAMP digital infrastructure, IT systems, and licensing." },
  { label: "Events", value: 48099, color: "#A85D7A", desc: "Heritage Awards, Symposium, FIRE gatherings, and ECAMP public programming." },
  { label: "Office", value: 38224, color: "#5C8AA8", desc: "Rent, utilities, supplies, and shared workspace costs at EHC's downtown office." },
  { label: "Other (Advertising, Board, Pro Fees, etc.)", value: 80689, color: "#6F6C6C", desc: "Audit and legal fees, board governance costs, communications, advertising, and administrative overhead." },
];

function Donut({ data, total, centerLabel, centerValue, accent, hoverIdx, setHoverIdx }) {
  const size = 280;
  const stroke = 44;
  const r = (size - stroke) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const C = 2 * Math.PI * r;

  let offset = 0;
  const segs = data.map((d, i) => {
    const pct = d.pct != null ? d.pct / 100 : d.value / total;
    const len = pct * C;
    const isHover = hoverIdx === i;
    const dimmed = hoverIdx != null && !isHover;
    const seg = (
      <circle
        key={i}
        cx={cx} cy={cy} r={r}
        fill="none"
        stroke={d.color}
        strokeWidth={isHover ? stroke + 8 : stroke}
        strokeDasharray={`${Math.max(len - 0.5, 0.5)} ${C - len + 0.5}`}
        strokeDashoffset={-offset}
        opacity={dimmed ? 0.32 : 1}
        onMouseEnter={() => setHoverIdx && setHoverIdx(i)}
        onMouseLeave={() => setHoverIdx && setHoverIdx(null)}
        style={{ transition: 'stroke-width 0.18s ease, opacity 0.18s ease', cursor: 'pointer' }}
      />
    );
    offset += len;
    return seg;
  });

  const focused = hoverIdx != null ? data[hoverIdx] : null;

  return (
    <svg viewBox={`0 0 ${size} ${size}`} style={{ width: '100%', maxWidth: size, display: 'block', overflow: 'visible' }}>
      <g transform={`rotate(-90 ${cx} ${cy})`}>
        {segs}
      </g>
      <text x={cx} y={cy - 8} textAnchor="middle" className="mono"
        style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', fill: 'var(--ink-mute)', pointerEvents: 'none' }}>
        {focused ? `${(focused.pct != null ? focused.pct : (focused.value/total*100)).toFixed(1)}%` : centerLabel}
      </text>
      <text x={cx} y={cy + 22} textAnchor="middle"
        style={{ fontSize: 28, fontFamily: 'var(--display)', fontWeight: 500, fill: focused ? focused.color : (accent || 'var(--ink)'), pointerEvents: 'none' }}>
        {focused ? ("$" + focused.value.toLocaleString()) : centerValue}
      </text>
    </svg>
  );
}

function Financials() {
  const fmt = n => "$" + n.toLocaleString("en-US", {maximumFractionDigits: 0});
  const fmtShort = n => n >= 1e6 ? "$" + (n/1e6).toFixed(2) + "M" : "$" + Math.round(n/1000) + "K";
  const totalRev = 2633188;
  const totalExp = 2617052;
  const [revHover, setRevHover] = React.useState(null);
  const [expHover, setExpHover] = React.useState(null);

  return (
    <section className="section" id="financials">
      <div className="section-hd">
        <div className="num">Part 07<span>Financial Overview</span></div>
        <div>
          <h2>The numbers behind the year.</h2>
          <p className="lede" style={{marginTop: 24}}>
            For the year ended December 31, 2025. Audited by Metrix Group LLP with a clean opinion.
          </p>
        </div>
      </div>

      <div className="stat-grid" style={{gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: 64}}>
        <div className="cell tone-prairie">
          <span className="stat-lbl">Total Revenue</span>
          <div className="stat-num med">{fmt(totalRev)}</div>
          <div className="stat-foot">97.2% from City of Edmonton operating funding</div>
        </div>
        <div className="cell tone-cream">
          <span className="stat-lbl">Total Expenses</span>
          <div className="stat-num med">{fmt(totalExp)}</div>
          <div className="stat-foot">$1.11M direct grants + honorariums</div>
        </div>
        <div className="cell" style={{background:'var(--sky-pale)'}}>
          <span className="stat-lbl">Excess Revenue over Expenses</span>
          <div className="stat-num med">{fmt(totalRev - totalExp)}</div>
          <div className="stat-foot">Surplus reinvested in 2026 programming</div>
        </div>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: 64}} className="fin-grid">
        <div>
          <span className="eyebrow eyebrow-ink">07.1 — Revenue</span>
          <h3 style={{marginTop: 12, marginBottom: 24}}>Where it came from</h3>
          <div style={{display: 'grid', gridTemplateColumns: '280px minmax(0, 480px)', gap: 32, alignItems: 'center'}} className="donut-row">
            <Donut data={REVENUE} total={totalRev} centerLabel="Total Revenue" centerValue={fmtShort(totalRev)} accent="#3D6184" hoverIdx={revHover} setHoverIdx={setRevHover} />
            <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6}}>
              {REVENUE.map((r, i) => {
                const isHover = revHover === i;
                const dimmed = revHover != null && !isHover;
                return (
                  <li key={i}
                      onMouseEnter={() => setRevHover(i)}
                      onMouseLeave={() => setRevHover(null)}
                      style={{display: 'grid', gridTemplateColumns: '12px 1fr auto', gap: 16, alignItems: 'baseline',
                              padding: '6px 8px', margin: '0 -8px', borderRadius: 3,
                              background: isHover ? 'var(--cream-deep)' : 'transparent',
                              opacity: dimmed ? 0.5 : 1, transition: 'background 0.15s, opacity 0.15s', cursor: 'pointer'}}>
                    <span style={{width: 12, height: 12, background: r.color, borderRadius: 2, alignSelf: 'center'}}/>
                    <span style={{fontSize: 13, lineHeight: 1.3}}>{r.label}<br/><span className="mono" style={{fontSize: 10, color: 'var(--ink-mute)', letterSpacing: '0.06em'}}>{r.pct}%</span></span>
                    <span className="mono" style={{fontSize: 12, color: 'var(--ink-soft)', whiteSpace: 'nowrap'}}>{fmt(r.value)}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div style={{marginTop: 16, padding: '14px 16px', minHeight: 64,
                       borderLeft: `3px solid ${revHover != null ? REVENUE[revHover].color : 'var(--rule)'}`,
                       background: 'var(--cream-deep)', transition: 'border-color 0.18s'}}>
            <div className="mono" style={{fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-mute)', marginBottom: 6}}>
              {revHover != null ? REVENUE[revHover].label : "Hover a slice for detail"}
            </div>
            <p style={{margin: 0, fontSize: 13, lineHeight: 1.5, color: 'var(--ink-soft)'}}>
              {revHover != null ? REVENUE[revHover].desc : "Each segment of the ring represents one revenue stream. Larger segments = larger contribution to total revenue."}
            </p>
          </div>
          <p style={{marginTop: 16, fontSize: 13, color: 'var(--ink-mute)', fontStyle: 'italic'}}>
            Note: ongoing operations are dependent on continuing funding from the City of Edmonton. Current
            service agreement expires December 31, 2026.
          </p>
        </div>
        <div>
          <span className="eyebrow eyebrow-ink">07.2 — Expenses</span>
          <h3 style={{marginTop: 12, marginBottom: 24}}>Where it went</h3>
          <div style={{display: 'grid', gridTemplateColumns: '280px minmax(0, 480px)', gap: 32, alignItems: 'center'}} className="donut-row">
            <Donut data={EXPENSES} total={totalExp} centerLabel="Total Expenses" centerValue={fmtShort(totalExp)} accent="#C97A3F" hoverIdx={expHover} setHoverIdx={setExpHover} />
            <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6}}>
              {EXPENSES.map((r, i) => {
                const pct = ((r.value / totalExp) * 100).toFixed(1);
                const isHover = expHover === i;
                const dimmed = expHover != null && !isHover;
                return (
                  <li key={i}
                      onMouseEnter={() => setExpHover(i)}
                      onMouseLeave={() => setExpHover(null)}
                      style={{display: 'grid', gridTemplateColumns: '12px 1fr auto', gap: 16, alignItems: 'baseline',
                              padding: '6px 8px', margin: '0 -8px', borderRadius: 3,
                              background: isHover ? 'var(--cream-deep)' : 'transparent',
                              opacity: dimmed ? 0.5 : 1, transition: 'background 0.15s, opacity 0.15s', cursor: 'pointer'}}>
                    <span style={{width: 12, height: 12, background: r.color, borderRadius: 2, alignSelf: 'center'}}/>
                    <span style={{fontSize: 13, lineHeight: 1.3}}>{r.label}<br/><span className="mono" style={{fontSize: 10, color: 'var(--ink-mute)', letterSpacing: '0.06em'}}>{pct}%</span></span>
                    <span className="mono" style={{fontSize: 12, color: 'var(--ink-soft)', whiteSpace: 'nowrap'}}>{fmt(r.value)}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div style={{marginTop: 16, padding: '14px 16px', minHeight: 64,
                       borderLeft: `3px solid ${expHover != null ? EXPENSES[expHover].color : 'var(--rule)'}`,
                       background: 'var(--cream-deep)', transition: 'border-color 0.18s'}}>
            <div className="mono" style={{fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-mute)', marginBottom: 6}}>
              {expHover != null ? EXPENSES[expHover].label : "Hover a slice for detail"}
            </div>
            <p style={{margin: 0, fontSize: 13, lineHeight: 1.5, color: 'var(--ink-soft)'}}>
              {expHover != null ? EXPENSES[expHover].desc : "Each segment of the ring represents one expense category. Larger segments = larger share of total spending."}
            </p>
          </div>
          <p style={{marginTop: 16, fontSize: 13, color: 'var(--ink-mute)', fontStyle: 'italic'}}>
            Materiality set at $104,200 · Three minor audit adjustments · Revenue recognition transitioned to
            deferral method, applied retrospectively.
          </p>
          <div style={{marginTop: 24}}>
            <a
              href="https://static1.squarespace.com/static/66d0c79a7e14aa1c7990537c/t/69fa0ae2f9e8cb53cbced390/1777994466194/Edmonton+Heritage+Council+Society+2025+Financial+Statements.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.08em',
                textTransform: 'uppercase', color: 'var(--prairie)',
                textDecoration: 'none', borderBottom: '1px solid var(--prairie)',
                paddingBottom: 2,
              }}
            >
              Review the full 2025 Audit Report ↗
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .donut-row { grid-template-columns: 1fr !important; justify-items: center; }
        }
        @media (max-width: 900px) {
          .fin-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const AHEAD = [
  {
    title: "Budget Advocacy",
    body: "Preparing for conversations with City Council about the 2027–2030 budget cycle. Heritage as essential infrastructure — alongside Edmonton Arts Council and Arts Habitat Edmonton.",
  },
  {
    title: "Expanding Indigenous Programming",
    body: "Expanding FIRE, deepening relationships with Indigenous communities, and aligning more closely with truth and reconciliation commitments. Fall 2025 FIRE data will inform 2026 decisions.",
  },
  {
    title: "Digital Storytelling & Public Exhibits",
    body: "ECAMP will expand its content library, develop new multimedia formats, and improve digital accessibility. The ECAMP website redesign is underway.",
  },
  {
    title: "Gentle Densification & Heritage",
    body: "Continuing conversations about preserving heritage while enabling sustainable urban development. Edmonton Design Week panel scheduled for October 2026.",
  },
  {
    title: "Grants Infrastructure",
    body: "Strengthening applicant support, refining the MEL framework, developing case studies that demonstrate capacity building over time. New Grant Guide for successful applicants.",
  },
];

function LookingAhead() {
  return (
    <section className="section" id="ahead" style={{
      background: 'var(--ink)',
      maxWidth: 'none',
      color: 'var(--cream)',
    }}>
      <div style={{maxWidth: 1320, margin: '0 auto'}}>
        <div className="section-hd" style={{borderBottom: '1px solid rgba(244,237,221,0.2)'}}>
          <div className="num" style={{color: 'var(--ember-soft)'}}>Part 08<span style={{color: 'rgba(244,237,221,0.6)'}}>Looking Ahead</span></div>
          <div>
            <h2 style={{color: 'var(--cream)'}}>The demand for heritage funding has <span style={{color:'var(--sky-pale)', fontStyle:'italic'}}>never been higher</span>.</h2>
            <p className="lede" style={{marginTop: 24, color: 'rgba(244,237,221,0.8)'}}>
              With City Council support and community partnership, we can meet that demand and demonstrate that
              heritage investment creates belonging, resilience, and shared prosperity for all Edmontonians.
            </p>
          </div>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0,
                     borderTop: '1px solid rgba(244,237,221,0.2)', borderLeft: '1px solid rgba(244,237,221,0.2)'}}
             className="ahead-grid">
          {AHEAD.map((a, i) => (
            <div key={i} style={{
              padding: 40,
              borderRight: '1px solid rgba(244,237,221,0.2)',
              borderBottom: '1px solid rgba(244,237,221,0.2)',
              minHeight: 240,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}>
              <div className="mono" style={{fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ember-soft)'}}>
                Priority {String(i+1).padStart(2,'0')}
              </div>
              <h3 style={{color: 'var(--cream)'}}>{a.title}</h3>
              <p style={{color: 'rgba(244,237,221,0.75)', fontSize: 15, lineHeight: 1.55, margin: 0}}>{a.body}</p>
            </div>
          ))}
          <style>{`
            @media (max-width: 720px) { .ahead-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </div>
    </section>
  );
}

const BOARD = [
  ["Jess Burylo", "Chair"],
  ["Geoff Wagner", "Vice Chair"],
  ["Tim Gilchrist", "Treasurer"],
  ["Abbey Preston", "Secretary"],
  ["Mercy Afrane", "Director"],
  ["Lauren Berlinguette", "Director"],
  ["Joanne Collins-Gonsalves", "Director"],
  ["Atul Deshmukh", "Director"],
  ["Maureen Duguay", "Director"],
  ["James Lamouche", "Director"],
  ["Adegoke Ogundeyi", "Director"],
  ["Ravi Rupnarain", "Director"],
  ["Kyle Schole", "Director"],
  ["Lauren Wheeler", "Director"],
];

const STAFF = [
  ["David Ridley", "Executive Director"],
  ["Ann Mary Babu", "HR & Operations Manager"],
  ["Kyla Fisher", "Partnerships & Investments Manager"],
  ["Kesia Kvill", "Community Engagement Manager"],
  ["Raffaella Loro", "Communications Lead"],
  ["Daliso Mwanza", "Heritage Policy & Research Lead"],
  ["Fatme Elkadry", "Grants Coordinator, HCIP"],
  ["Jessica Johns", "Indigenous Initiatives Lead, FIRE (Left 2025)"],
  ["Amber Paquette", "Community Outreach Coordinator, FIRE"],
  ["Natesa Medlicott-Kappo", "FIRE Grants Coordinator (Hired 2026)"],
  ["Nika Paziuk", "Indigenous Initiatives Coordinator (Hired 2026)"],
  ["Chris Chang-Yen Phillips", "ECAMP Coordinator"],
  ["Marina Hulzenga", "ECAMP Exhibits Coordinator"],
  ["Carl Paolo Hernandez", "Community Engagement Assistant"],
  ["Jess Sebastiano", "Grants Administrator"],
  ["Angie Gambler", "Administrative Coordinator"],
  ["Keelan Marples", "IT Coordinator"],
  ["Emily Horrill", "ECAMP Summer Student / Community Engagement (Hired 2026)"],
  ["Abigail Struthers", "ECAMP Summer Student (2025)"],
];

function People() {
  const [tab, setTab] = React.useState("board");
  const data = tab === "board" ? BOARD : STAFF;

  return (
    <section className="section" id="people">
      <div className="section-hd">
        <div className="num">Part 09<span>People</span></div>
        <div>
          <h2>The team behind 2025.</h2>
          <p className="lede" style={{marginTop: 24}}>
            Volunteer board members and staff who steward the Edmonton Heritage Council's mandate.
          </p>
        </div>
      </div>

      <div style={{display: 'flex', gap: 12, marginBottom: 32}}>
        {[["board", "Board of Directors"], ["staff", "Staff Team"]].map(([k, l]) => (
          <button key={k} className={"pill" + (tab === k ? " is-active" : "")} onClick={() => setTab(k)}>{l}</button>
        ))}
      </div>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0,
                   borderTop: '1px solid var(--rule)', borderLeft: '1px solid var(--rule)'}}
           className="people-grid">
        {data.map(([n, r], i) => (
          <div key={i} style={{
            padding: 24,
            borderRight: '1px solid var(--rule)',
            borderBottom: '1px solid var(--rule)',
            background: 'var(--paper)',
          }}>
            <div className="serif" style={{fontSize: 22, fontWeight: 500, lineHeight: 1.15}}>{n}</div>
            <div className="mono" style={{fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-mute)', marginTop: 6}}>{r}</div>
          </div>
        ))}
      </div>

      <div style={{marginTop: 32, padding: 24, background: 'var(--cream-deep)', borderRadius: 4}}>
        <span className="eyebrow eyebrow-ink">City of Edmonton Advisors</span>
        <div style={{display: 'flex', gap: 32, flexWrap: 'wrap', marginTop: 12}}>
          <div>
            <strong>Roger Jevne</strong> — Branch Manager, Community and Recreation Facilities
          </div>
          <div>
            <strong>Kathryn Ivany</strong> — City Archivist and Supervisor of Heritage Facilities
          </div>
          <div>
            <strong>Erik Backstrom</strong> — Senior Planner, Planning Strategies
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) { .people-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .people-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function ClosingSection() {
  return (
    <section style={{
      background: 'var(--prairie-deep)',
      color: 'var(--cream)',
      maxWidth: 'none',
      padding: '80px 0 0',
    }}>
      <div style={{maxWidth: 1320, margin: '0 auto', padding: '0 48px'}}>

        {/* Thank you banner */}
        <div style={{
          textAlign: 'center',
          paddingBottom: 72,
          borderBottom: '1px solid rgba(244,237,221,0.18)',
        }}>
          <p className="mono" style={{fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(244,237,221,0.5)', marginBottom: 24}}>
            Edmonton Heritage Council · 2025 Annual Report
          </p>
          <h2 style={{
            fontFamily: 'var(--display)',
            fontSize: 'clamp(32px, 5vw, 64px)',
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'var(--cream)',
            marginBottom: 24,
            maxWidth: '18ch',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            Thank you for being part of Edmonton's heritage story.
          </h2>
          <p style={{fontSize: 18, lineHeight: 1.65, color: 'rgba(244,237,221,0.75)', maxWidth: '54ch', margin: '0 auto'}}>
            None of this work happens without the donors, members, volunteers, jurors, knowledge holders, and community partners who make it possible — year after year.
          </p>

        </div>

        {/* Land acknowledgement */}
        <div style={{
          padding: '56px 0 72px',
          borderBottom: '1px solid rgba(244,237,221,0.18)',
        }}>
          <p className="mono" style={{fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(244,237,221,0.4)', marginBottom: 16}}>
            Land Acknowledgement
          </p>
          <p style={{fontSize: 15, lineHeight: 1.75, color: 'rgba(244,237,221,0.65)', maxWidth: '72ch', margin: '0'}}>
            Edmonton Heritage Council acknowledges that we are located on Treaty 6 Territory, and the Homeland of the Métis Nation. We acknowledge the many First Nations, Métis and Inuit peoples whose footsteps have marked this land for generations.
          </p>
        </div>

        {/* Copyright */}
        <div style={{padding: '32px 0', textAlign: 'center'}}>
          <p className="mono" style={{fontSize: 11, letterSpacing: '0.12em', color: 'rgba(244,237,221,0.3)', margin: 0}}>
            © 2026 Edmonton Heritage Council · All rights reserved
          </p>
        </div>

      </div>
    </section>
  );
}

Object.assign(window, { TopMoments, Financials, LookingAhead, People, ClosingSection });