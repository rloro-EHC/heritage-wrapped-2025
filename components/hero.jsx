// hero.jsx — Heritage Wrapped opening sequence with expandable track narratives

const HERO_ROTATIONS = [
  {
    lbl: "Track 01 · Grants",
    stat: "$914,290",
    cap: "Total heritage grants distributed across HCIP and FIRE — record year.",
    body: [
      "EHC distributed $914,290 across the Heritage Community Investment Program (HCIP) and the FIRE Indigenous program — supporting 61 funded projects from a record 239 applications.",
      "Funded work ranged from oral history archives and community-led exhibitions to language-revitalization workshops and neighbourhood storytelling initiatives in more than eight languages, from Cree to Mandarin to Arabic to French.",
    ],
  },
  {
    lbl: "Track 02 · Demand",
    stat: "239",
    cap: "Grant applications received — the highest in EHC history.",
    body: [
      "We received 146 HCIP applications in 2025 — the highest in program history, a 49% increase from 2024 — alongside continued demand through FIRE.",
      "While our funding rate decreased to 28% due to limited funding relative to demand, the volume of applications confirmed the depth and breadth of heritage work happening in Edmonton's communities.",
    ],
  },
  {
    lbl: "Track 03 · Equity",
    stat: "72%",
    cap: "Of grants supported equity-deserving communities, 47% of total funding.",
    body: [
      "72% of our grants went to equity-deserving communities, representing 47% of total funding — a clear signal that the heritage being supported is the heritage Edmontonians are actually living.",
      "FIRE in particular continued to deepen Indigenous-led programming, with applicants self-identifying community priorities and leading every stage of project design.",
    ],
  },
  {
    lbl: "Track 04 · Reach",
    stat: "5,000+",
    cap: "Edmontonians engaged through K-Days and walking tours alone.",
    body: [
      "ECAMP had its busiest year yet. The Edmonton City as Museum Project welcomed 365 guests on heritage walking tours and drew over 4,000 interactions at the K-Days exhibit.",
      "The 2025 Heritage Pulse Survey confirmed what these numbers suggest: residents see heritage as core to identity and belonging — not nostalgia, but living infrastructure for a city still figuring out who it is.",
    ],
  },
  {
    lbl: "Track 05 · Stories",
    stat: "17",
    cap: "Labour Stories published, plus the launch of Clock In podcast on CJSR.",
    body: [
      "We launched the Clock In podcast on CJSR and published 17 Labour Stories, centering work as a site of resistance, creativity, and belonging across Edmonton's neighbourhoods.",
      "From the loading docks to the kitchens, from the picket lines to the studios, Labour Stories made plain how the work people do shapes the city they share.",
    ],
  },
];

const TRACK_ACCENTS  = ['#517fa3', '#3D6184', '#4a7a5c', '#7a3b2e', '#2d5a6b'];
const TRACK_BG_HOV   = ['rgba(81,127,163,0.05)','rgba(61,97,132,0.05)','rgba(74,122,92,0.05)','rgba(122,59,46,0.05)','rgba(45,90,107,0.05)'];
const TRACK_BG_OPEN  = ['rgba(81,127,163,0.09)','rgba(61,97,132,0.09)','rgba(74,122,92,0.09)','rgba(122,59,46,0.09)','rgba(45,90,107,0.09)'];

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-eyebrow">
        <span className="hero-tag">Annual Report 2025</span>
        <span className="hero-meta">Edmonton Heritage Council · Year 7 of Connections & Exchanges</span>
      </div>
      <img
        src="assets/ehc-logo-color.png?v=2"
        alt="Edmonton Heritage Council"
        style={{height: 64, width: 'auto', display: 'block', marginBottom: 16}}
      />
      <h1>
        Heritage<br />
        <span className="accent">Wrapped.</span>
      </h1>
      <p className="hero-lede">
        A year of connection, impact, and growth — your 2025 in grants, programming,
        stories, and the Edmontonians whose work made it possible.
      </p>
    </section>
  );
}

function HeroTracks() {
  const [open, setOpen] = React.useState(-1);
  const [hov, setHov]   = React.useState(null);
  const toggle = (i) => setOpen(cur => cur === i ? -1 : i);

  return (
    <div className="hero" style={{paddingTop: 0, paddingBottom: 80}}>
      <div style={{borderTop: '1px solid var(--rule)'}}>
        <div className="hero-tracks-head">
          <span className="mono" style={{fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-mute)'}}>2025 · Top Five Tracks</span>
          <span className="mono" style={{fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-mute)'}}>Click any track to expand</span>
        </div>
        <ol className="hero-tracks-list">
          {HERO_ROTATIONS.map((r, i) => {
            const isOpen = i === open;
            const isHov  = i === hov;
            const accent = TRACK_ACCENTS[i];
            const bg     = isOpen ? TRACK_BG_OPEN[i] : (isHov ? TRACK_BG_HOV[i] : 'transparent');
            return (
              <li key={i}
                  onClick={() => toggle(i)}
                  onMouseEnter={() => setHov(i)}
                  onMouseLeave={() => setHov(null)}
                  style={{
                    display: 'block',
                    cursor: 'pointer',
                    borderBottom: '1px solid var(--rule-soft)',
                    borderLeft: `4px solid ${(isOpen || isHov) ? accent : 'transparent'}`,
                    background: bg,
                    transition: 'background 0.18s, border-left-color 0.18s',
                  }}>
                <div className="hero-track-inner" style={{
                  display: 'grid',
                  gridTemplateColumns: '56px 1fr auto 24px',
                  gap: 24,
                  alignItems: 'center',
                  padding: (isOpen || isHov) ? '24px 20px' : '24px 4px',
                  transition: 'padding 0.18s ease',
                }}>
                  <div style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 13,
                    letterSpacing: '0.12em',
                    color: (isOpen || isHov) ? accent : 'var(--ink-mute)',
                    transition: 'color 0.18s',
                  }}>{String(i + 1).padStart(2, '0')}</div>

                  <div>
                    <div style={{
                      fontFamily: 'var(--display)',
                      fontSize: 'clamp(20px, 2.2vw, 28px)',
                      fontWeight: 600,
                      lineHeight: 1.15,
                      letterSpacing: '-0.01em',
                      color: isOpen ? accent : (isHov ? 'var(--ink)' : 'var(--ink)'),
                      transition: 'color 0.18s',
                      marginBottom: 4,
                    }}>{r.lbl.replace(/^Track \d+ · /, '')}</div>
                    <div style={{fontSize: 14, lineHeight: 1.45, color: 'var(--ink-soft)', maxWidth: '60ch'}}>
                      {r.cap}
                    </div>
                  </div>

                  <div className="hero-track-stat" style={{
                    fontFamily: 'var(--display)',
                    fontSize: 'clamp(36px, 4.5vw, 64px)',
                    fontWeight: 600,
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                    color: (isOpen || isHov) ? accent : 'var(--ink)',
                    textAlign: 'right',
                    whiteSpace: 'nowrap',
                    transition: 'color 0.18s',
                  }}>{r.stat}</div>

                  <div style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 18,
                    color: (isOpen || isHov) ? accent : 'var(--ink-mute)',
                    width: 24,
                    textAlign: 'center',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease, color 0.18s',
                    lineHeight: 1,
                  }}>+</div>
                </div>

                {isOpen && (
                  <div className="hero-track-expanded" style={{
                    padding: '0 20px 32px calc(56px + 24px + 4px)',
                    fontSize: 16,
                    lineHeight: 1.65,
                    color: 'var(--ink-soft)',
                    maxWidth: '64ch',
                    cursor: 'default',
                    borderLeft: `3px solid ${accent}`,
                    marginLeft: 4,
                    marginBottom: 0,
                  }} onClick={e => e.stopPropagation()}>
                    {r.body.map((p, j) => (
                      <p key={j} style={{margin: '0 0 12px'}}>{p}</p>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

Object.assign(window, { Hero, HeroTracks });
