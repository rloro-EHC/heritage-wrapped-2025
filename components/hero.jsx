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
      "While our success rate decreased to 28% due to limited funding relative to demand, the volume of applications confirmed the depth and breadth of heritage work happening in Edmonton's communities.",
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

function Hero() {
  const [open, setOpen] = React.useState(0); // first track expanded by default

  const toggle = (i) => setOpen((cur) => (cur === i ? -1 : i));

  return (
    <section className="hero" id="top">
      <div className="hero-eyebrow">
        <span className="hero-tag">Annual Report 2025</span>
        <span className="hero-meta">Edmonton Heritage Council · Year 7 of Connections & Exchanges</span>
      </div>
      <img
        src="assets/ehc-logo-color.png"
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

      <div className="hero-tracks">
        <div className="hero-tracks-head">
          <span className="mono" style={{fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-mute)'}}>2025 · Top Five Tracks</span>
          <span className="mono" style={{fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-mute)'}}>Click any track to expand</span>
        </div>
        <ol className="hero-tracks-list">
          {HERO_ROTATIONS.map((r, i) => {
            const isOpen = i === open;
            return (
              <li key={i}
                  className={"hero-track" + (isOpen ? " active" : "")}
                  onClick={() => toggle(i)}
                  style={{display: 'block', padding: 0}}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '56px 1fr auto 24px',
                  gap: 24,
                  alignItems: 'center',
                  padding: isOpen ? '24px 16px' : '24px 0',
                }}>
                  <div className="track-num">{String(i + 1).padStart(2, "0")}</div>
                  <div className="track-body">
                    <div className="track-label">{r.lbl.replace(/^Track \d+ · /, '')}</div>
                    <div className="track-cap">{r.cap}</div>
                  </div>
                  <div className="track-stat">{r.stat}</div>
                  <div className="track-toggle" aria-hidden="true" style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 18,
                    color: 'var(--ink-mute)',
                    width: 24,
                    textAlign: 'center',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                    lineHeight: 1,
                  }}>+</div>
                </div>
                {isOpen && (
                  <div className="track-narrative" style={{
                    padding: '0 16px 32px calc(56px + 24px + 16px)',
                    fontSize: 16,
                    lineHeight: 1.65,
                    color: 'var(--ink-soft)',
                    maxWidth: '64ch',
                    cursor: 'default',
                  }} onClick={(e) => e.stopPropagation()}>
                    {r.body.map((p, j) => (
                      <p key={j} style={{margin: j === 0 ? '0 0 12px 0' : '0 0 12px 0'}}>{p}</p>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>

      <div className="scroll-hint">Scroll · The year in five parts</div>

      <style>{`
        @media (max-width: 720px) {
          .track-narrative {
            padding-left: 16px !important;
          }
          .hero-track > div:first-child {
            grid-template-columns: 40px 1fr auto !important;
            gap: 12px !important;
          }
          .hero-track .track-stat {
            grid-column: 2 / span 2 !important;
            text-align: left !important;
          }
          .hero-track .track-toggle {
            grid-column: 3 !important;
          }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { Hero });
