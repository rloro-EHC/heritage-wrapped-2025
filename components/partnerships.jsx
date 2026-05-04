// partnerships.jsx — Part 06: Partnerships & Collaborations

const STRATEGIC_PARTNERS = [
  { name: "City of Edmonton", role: "Core funding partner · civic planning · Contract for Service" },
  { name: "Edmonton Arts Council", role: "Joint City Council advocacy · sector collaboration" },
  { name: "Arts Habitat Edmonton", role: "Joint City Council advocacy" },
  { name: "Edmonton Public Library", role: "Expanded programming partnership" },
  { name: "Explore Edmonton", role: "Tourism & community engagement collaboration" },
  { name: "Royal Alberta Museum", role: "Programming partnership" },
  { name: "National Trust for Canada", role: "Black Heritage Network · Indigenous Heritage Circle" },
  { name: "Heritage Alberta Network", role: "Provincial heritage sector capacity" },
  { name: "Africa Centre · Edmonton Community Foundation · City of Edmonton", role: "Delivery partners — Black History Month Initiatives Fund" },
];

const COLLABORATORS = [
  { name: "Y-Station", role: "MEL framework development partner" },
  { name: "CJSR Radio", role: "Broadcasting partner — Clock In podcast" },
  { name: "Jury community members", role: "Three HCIP panels and FIRE peer assessment" },
];

const PARTNERSHIP_STORIES = [
  {
    eyebrow: "06.1 — Headline Partnership",
    title: "Black History Month Initiatives Fund",
    stat: "$80,000",
    statLbl: "Total invested",
    sub: "28 community-led initiatives · 57 applications · 5,000+ participants",
    body: "Delivered with the Africa Centre, Edmonton Community Foundation, and the City of Edmonton — a distributed-infrastructure model that lets community organizations lead their own storytelling, cultural expression, and knowledge sharing. Funded work spanned cultural festivals, educational workshops, exhibitions, digital platforms, and youth programming. The fund deepened cross-sector relationships — connecting community organizations with the Royal Alberta Museum, Campus Saint-Jean, and local businesses — while strengthening networks within Edmonton's Black communities.",
    color: "var(--brick)",
  },
  {
    eyebrow: "06.2 — Indigenous Knowledge Sharing",
    title: "FIRE Spotlight Speaker Series",
    stat: "4",
    statLbl: "Gatherings in 2025",
    sub: "Coronation Medal Honouring · Burial Sites Working Group · Commonwealth Walkway Tour · St. Albert River Lot Tour",
    body: "An Indigenous-led series that extends the impact of FIRE Impact Grants — creating space for thought leaders, Elders, and knowledge holders to share teachings, stories, and place-based learning. Delivered with the Indigenous Heritage Circle, the National Trust for Canada, and community knowledge holders including Lewis Cardinal. The format combines ceremony, panel dialogue, and walking tours — partnership as infrastructure for relational, land-based heritage practice.",
    color: "var(--prairie-deep)",
  },
  {
    eyebrow: "06.3 — National Network",
    title: "Black Heritage Caucus",
    stat: "Halifax → Birchtown",
    statLbl: "Nova Scotia field gathering",
    sub: "National Trust convening · EHC on the organizing team",
    body: "EHC's Research & Policy Lead Daliso Mwanza joined the national organizing team for the National Trust's Black Heritage Caucus — a gathering of Black heritage practitioners from across Canada. Participants travelled through Black Loyalist sites guided by community historians; conversations surfaced shared priorities around oral history preservation, sustainable funding, and multigenerational heritage spaces.",
    color: "var(--ember)",
  },
  {
    eyebrow: "06.4 — Member Engagement",
    title: "Roots & Routes",
    stat: "50",
    statLbl: "Peak event attendance",
    sub: "Highest engagement for a member event to date",
    body: "A series bringing heritage practitioners, organizations, and community members into shared experiences — launched at the Mah Society of Edmonton's Journey of the Horse exhibit, continued at Frank's Community Pub with presentations from heritage enthusiast Dan Rose and Community Archivist Jia Jia Yong. Attendance climbed throughout the year. Supported by a new CRM platform that lets EHC coordinate events and sustain relationships over time.",
    color: "var(--prairie)",
  },
];

function Partnerships() {
  const fmt = n => "$" + n.toLocaleString("en-US", {maximumFractionDigits: 0});
  const totalCHAS = 58905;

  return (
    <section className="section" id="partnerships">
      <div className="section-hd">
        <div className="num">Part 06<span>Partnerships & Collaborations</span></div>
        <div>
          <h2>The relationships that make heritage work possible.</h2>
          <p className="lede" style={{marginTop: 24}}>
            Heritage is not created in isolation — it is built through relationships between organizations, practitioners, and communities. In 2025, EHC deepened its role as a connector across Edmonton's heritage ecosystem.
          </p>
        </div>
      </div>

      {/* Headline + secondary stories grid */}
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 96, alignItems: 'start'}} className="ptr-grid">
        {PARTNERSHIP_STORIES.map((p, i) => (
          <article key={i} style={{
            background: 'var(--paper)',
            border: '1px solid var(--rule)',
            borderRadius: 4,
            padding: 32,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}>
            <span className="mono" style={{fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: p.color}}>{p.eyebrow}</span>
            <h3 style={{fontSize: 26, lineHeight: 1.15}}>{p.title}</h3>
            <div style={{display: 'flex', gap: 24, alignItems: 'baseline', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', padding: '16px 0'}}>
              <div style={{fontFamily: 'var(--serif)', fontSize: 36, lineHeight: 1, fontWeight: 500, color: p.color, letterSpacing: '-0.02em'}}>
                {p.stat}
              </div>
              <div className="mono" style={{fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-mute)'}}>
                {p.statLbl}
              </div>
            </div>
            <p className="mono" style={{fontSize: 11, letterSpacing: '0.06em', color: 'var(--ink-soft)', lineHeight: 1.6, margin: 0}}>
              {p.sub}
            </p>
            <p style={{color: 'var(--ink-soft)', fontSize: 15, margin: 0, lineHeight: 1.6}}>{p.body}</p>
          </article>
        ))}
      </div>

      {/* CHAS — community heritage activation support */}
      <div style={{
        background: 'var(--cream-deep)',
        border: '1px solid var(--rule)',
        borderRadius: 4,
        padding: 'clamp(32px, 4vw, 48px)',
        marginBottom: 96,
      }}>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 48, alignItems: 'start'}} className="chas-grid">
          <div>
            <span className="eyebrow eyebrow-ink">06.5 — CHAS</span>
            <h3 style={{marginTop: 12, fontSize: 28, lineHeight: 1.15}}>
              Community Heritage Activation Support
            </h3>
            <div style={{display: 'flex', gap: 32, marginTop: 24, paddingTop: 24, borderTop: '1px solid var(--rule)'}}>
              <div>
                <div className="stat-num med" style={{color: 'var(--prairie-deep)'}}>{fmt(totalCHAS)}</div>
                <div className="stat-lbl">Distributed</div>
              </div>
              <div>
                <div className="stat-num med" style={{color: 'var(--prairie-deep)'}}>24</div>
                <div className="stat-lbl">Initiatives</div>
              </div>
            </div>
          </div>
          <div>
            <p style={{color: 'var(--ink-soft)', fontSize: 15, lineHeight: 1.7, marginTop: 0}}>
              CHAS provides small-scale, flexible funding for heritage initiatives led by community organizations and grassroots groups — filling the gaps between larger grant cycles. In 2025, it supported time-sensitive opportunities and emerging projects from the Mill Woods Bus Tour and 1000 Faces Festival to programming with Lodgepole Communitas, plus a Black History Month event led by the Jamaica Association of Northern Alberta exploring the cultural significance of the Jamaican bandana.
            </p>
            <p className="mono" style={{fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-mute)', marginTop: 16}}>
              Time-sensitive opportunities · Grassroots & community-led · Outside larger grant cycles
            </p>
          </div>
        </div>
      </div>

      {/* Strategic Partners + Collaborators */}
      <div>
        <span className="eyebrow eyebrow-ink">06.6 — Strategic Partners & Collaborators</span>
        <h3 style={{marginTop: 12, marginBottom: 32, maxWidth: '24ch'}}>
          Partnerships as infrastructure.
        </h3>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48}} className="partners-grid">
          <div>
            <p className="mono" style={{fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--prairie)', marginBottom: 20}}>
              Strategic Partners
            </p>
            <ul style={{listStyle: 'none', padding: 0, margin: 0, borderTop: '1px solid var(--rule)'}}>
              {STRATEGIC_PARTNERS.map((p, i) => (
                <li key={i} style={{
                  padding: '16px 0',
                  borderBottom: '1px solid var(--rule)',
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: 4,
                }}>
                  <span style={{fontSize: 16, fontWeight: 500, color: 'var(--ink)'}}>{p.name}</span>
                  <span style={{fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.5}}>{p.role}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mono" style={{fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--prairie)', marginBottom: 20}}>
              Academic & Community Collaborators
            </p>
            <ul style={{listStyle: 'none', padding: 0, margin: 0, borderTop: '1px solid var(--rule)'}}>
              {COLLABORATORS.map((p, i) => (
                <li key={i} style={{
                  padding: '16px 0',
                  borderBottom: '1px solid var(--rule)',
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: 4,
                }}>
                  <span style={{fontSize: 16, fontWeight: 500, color: 'var(--ink)'}}>{p.name}</span>
                  <span style={{fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.5}}>{p.role}</span>
                </li>
              ))}
            </ul>

            <div style={{
              marginTop: 32,
              padding: 24,
              background: 'var(--paper)',
              border: '1px solid var(--rule)',
              borderRadius: 4,
            }}>
              <p className="mono" style={{fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--prairie)', margin: 0, marginBottom: 8}}>
                Iskwew Kâ-mikak
              </p>
              <p style={{fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.6, margin: 0}}>
                Indigenous women-led ceremonial space — 30 Indigenous women and non-binary participants gathered in June 2025 for ceremonial rites of passage and teachings grounded in Indigenous knowledge systems. A community-led, relational, land-based model for how heritage is supported.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .ptr-grid { grid-template-columns: 1fr !important; }
          .chas-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .partners-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}

window.Partnerships = Partnerships;
