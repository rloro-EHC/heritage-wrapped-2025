// partnerships.jsx — Part 06: Partnerships & Collaborations

const CHAS_GRANTS = [
  { org: "Shawn Tse / FascinAsian Film Fest", project: "Event Promotion", award: 5000 },
  { org: "Clearwater Documentary Screening", project: "Film Screening", award: 2000 },
  { org: "Cariwest", project: "Costume Contest", award: 5000 },
  { org: "El Salvador Cultural Association of Edmonton", project: "Valentine's Cultural Event", award: 5000 },
  { org: "Animating Archives Project Collective", project: "Animating Archives Project", award: 3582 },
  { org: "Adwa Ethiopian Community", project: "Community Day", award: 3000 },
  { org: "YWCA Edmonton", project: "Women of Distinction Bellamy Award", award: 1750 },
  { org: "Chinese Library", project: "Asian Heritage Month Workshops", award: 2573 },
  { org: "Pride / Indigenous Pride Powwow", project: "Community Event Support", award: 2000 },
  { org: "Edmonton Federation of Community Leagues", project: "Sponsorship / Membership", award: 500 },
  { org: "Eric Awuah", project: "Evolving Rhythms: African Diaspora Dance", award: 2000 },
  { org: "Africanival", project: "Elevating Voices", award: 2000 },
  { org: "Memory Keepers", project: "Rwandan Day of Remembrance", award: 2500 },
  { org: "Soni & Shreela", project: "Mill Woods Bus Tour", award: 2000 },
  { org: "1000 Faces Festival", project: "Mainstage Programming", award: 2000 },
  { org: "Verna Fisher", project: "Community Project Support", award: 1500 },
  { org: "Adriana Davis", project: "Images for Publication", award: 2000 },
  { org: "Dan Rose", project: "The Last Perfect Game (Fringe)", award: 2000 },
  { org: "Hope of Dreams Alliance", project: "Language & Culture Learning", award: 2000 },
  { org: "Broadview Film Fest", project: "Tony Cashman Documentary", award: 500 },
  { org: "AB & SK Black Historical Society", project: "Debbie Beaver Project", award: 1500 },
  { org: "National Black Coalition of Canada (Edmonton)", project: "BHM Opening Event", award: 6000 },
  { org: "Jamaica Association of Northern Alberta", project: "Jamaican Bandana BHM Event", award: 2000 },
];

const FIRE_SPOTLIGHT_EVENTS = [
  {
    date: "May 2025",
    title: "Honouring Indigenous Heritage Practitioners & King Charles III Coronation Medal Presentation",
    body: "Delivered in partnership with the Indigenous Heritage Circle and the National Trust for Canada, this gathering recognized Indigenous heritage practitioners through the presentation of the King Charles III Coronation Medal. The event combined ceremony, drumming, and panel dialogue, celebrating leadership and contributions while situating recognition within Indigenous cultural practice.",
  },
  {
    date: "July 2025",
    title: "Indigenous Burial Sites Working Group",
    body: "A knowledge-sharing session that brought together practitioners and community members to explore Indigenous-led approaches to land stewardship, memory, and sites of conscience, grounded in cultural protocols and collective responsibility.",
  },
  {
    date: "August 2025",
    title: "Commonwealth Walkway Tour featuring Lewis Cardinal",
    body: "A guided, place-based experience that connected participants to Indigenous histories embedded in Edmonton's landscape, illustrating how relationships to land, language, and story are carried and shared through community knowledge.",
  },
  {
    date: "August 2025",
    title: "St. Albert Historic River Lot Tour",
    body: "A walking tour that explored Métis and Indigenous histories of land use, settlement, and displacement, offering a layered understanding of place shaped through generations of lived experience and stewardship.",
  },
];

const STRATEGIC_PARTNERS = [
  { name: "City of Edmonton", role: "Core funding partner · civic planning · Contract for Service" },
  { name: "Edmonton Arts Council", role: "Joint City Council advocacy · sector collaboration" },
  { name: "Arts Habitat Edmonton", role: "Joint City Council advocacy" },
  { name: "Edmonton Public Library", role: "Expanded programming partnership" },
  { name: "Explore Edmonton", role: "Tourism & community engagement collaboration" },
  { name: "Royal Alberta Museum", role: "Programming partnership" },
  { name: "National Trust for Canada", role: "Black Heritage Caucus · Indigenous Heritage Circle" },
  { name: "Heritage Alberta Network", role: "Provincial heritage sector capacity" },
  { name: "Africa Centre · Edmonton Community Foundation · City of Edmonton", role: "Delivery partners — Black History Month Initiatives Fund" },
];

const COLLABORATORS = [
  { name: "Y-Station", role: "MEL framework development partner" },
  { name: "CJSR Radio", role: "Broadcasting partner — Clock In podcast" },
  { name: "Jury community members", role: "Three HCIP panels and FIRE peer assessment" },
];

function ImgPlaceholder({ caption, ratio, src, alt }) {
  return (
    <figure style={{ display: 'flex', flexDirection: 'column', gap: 8, margin: 0 }}>
      {src ? (
        <img
          src={src}
          alt={alt || caption}
          style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 4 }}
        />
      ) : (
        <div style={{
          aspectRatio: ratio || '4 / 3',
          background: 'var(--paper-warm)',
          border: '1px solid var(--rule)',
          borderRadius: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <span className="mono" style={{
            fontSize: 11,
            color: 'var(--ink-mute)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            textAlign: 'center',
            padding: 24,
            lineHeight: 1.6,
          }}>{caption}</span>
        </div>
      )}
      {caption && (
        <figcaption className="mono" style={{
          fontSize: 11,
          letterSpacing: '0.07em',
          textTransform: 'uppercase',
          color: 'var(--ink-mute)',
          lineHeight: 1.5,
        }}>{caption}</figcaption>
      )}
    </figure>
  );
}

function Partnerships() {
  const fmt = n => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <section className="section" id="partnerships">
      <div className="section-hd">
        <div className="num">Part 06<span>Partnerships & Collaborations</span></div>
        <div>
          <h2>Building the relationships that make heritage work possible.</h2>
          <p className="lede" style={{ marginTop: 24 }}>
            In 2025, EHC deepened its role as a connector across Edmonton's heritage ecosystem. Through member engagement and responsive funding, we supported the relationships, networks, and community-led initiatives that allow heritage to be created, shared, and sustained across the city.
          </p>
        </div>
      </div>

      {/* 06.1 — Iskwew Kâ-mikak */}
      <div style={{ marginBottom: 80 }}>
        <span className="eyebrow eyebrow-ink">06.1 — Iskwew Kâ-mikak</span>
        <h3 style={{ marginTop: 12, marginBottom: 32 }}>Indigenous women-led ceremonial space</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }} className="iskwew-grid">
          <ImgPlaceholder caption="Image placeholder · Iskwew Kâ-mikak gathering, June 2025" />
          <div>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', marginBottom: 20 }}>
              In response to the lack of opportunities for urban Indigenous women to occupy ceremonial roles, Iskwew Kâ-mikak created a dedicated space for ceremony, cultural practice, and community connection.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', marginBottom: 20 }}>
              Held in June 2025, the gathering brought together 30 Indigenous women and non-binary participants, providing access to ceremonial rites of passage and teachings grounded in Indigenous knowledge systems.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', marginBottom: 28 }}>
              More than a single event, Iskwew Kâ-mikak represents a shift in how heritage is supported, moving beyond institutional models toward community-led, relational, and land-based approaches. Participants engaged in shared learning, ceremony, and intergenerational exchange, strengthening cultural continuity and identity.
            </p>
            <div className="stat-grid" style={{ gridTemplateColumns: '1fr', marginTop: 0 }}>
              <div className="cell tone-prairie" style={{ minHeight: 0, padding: 24 }}>
                <span className="stat-lbl">Participants</span>
                <div className="stat-num sm">30</div>
                <div className="stat-foot">Indigenous women and non-binary participants · June 2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 06.2 — FIRE Spotlight Speaker Series */}
      <div style={{ marginBottom: 80 }}>
        <span className="eyebrow eyebrow-ink">06.2 — FIRE Spotlight Speaker Series</span>
        <h3 style={{ marginTop: 12, marginBottom: 8 }}>Indigenous-led knowledge sharing</h3>
        <p className="mono" style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--prairie)', marginBottom: 32 }}>
          Place-based learning · 4 gatherings in 2025
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start', marginBottom: 40 }} className="fire-spotlight-grid">
          <div>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', marginBottom: 20 }}>
              The FIRE Spotlight Series extends the impact of FIRE Impact Grant projects by creating opportunities for Indigenous thought leaders, Elders, and knowledge holders to share teachings, stories, and practices that deepen understanding of Indigenous histories and relationships to place.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)' }}>
              Delivered in collaboration with partners and community knowledge holders, the series reflected EHC's approach to partnerships as infrastructure — where relationships enable the conditions for meaningful heritage work to take place.
            </p>
          </div>
          <ImgPlaceholder
            src="https://019ddfa9-ba64-75fe-97af-cd0227cf96a7.claudeusercontent.com/v1/design/projects/019ddfa9-ba64-75fe-97af-cd0227cf96a7/serve/assets/Fire%20Spotlight%20Series%20-%20King%20Charles%20III%20Coronation%20Medal%20Ceremony.jpg?t=4192828012d108656a816c19c487fcf770e104e4659d3c9c1882b968b073b168.1fd584e8-b4b2-4bee-9539-d62d17f2f045.adf9aaf9-f3c7-4c29-a5ac-a7ac474c8d25.1777933645"
            caption="Executive Director David Ridley brings remarks on behalf of EHC, recognizing honorees Dr. Jerry Saddleback, Celina Loyer, and Matthew Hiltermann"
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, marginBottom: 32 }} className="spotlight-events">
          {FIRE_SPOTLIGHT_EVENTS.map((ev, i) => (
            <div key={i} style={{
              background: 'var(--paper)',
              border: '1px solid var(--rule)',
              borderRadius: 4,
              padding: 28,
            }}>
              <div className="mono" style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--prairie)', marginBottom: 8 }}>{ev.date}</div>
              <h4 style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.35, marginBottom: 12, color: 'var(--ink)' }}>{ev.title}</h4>
              <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.6, margin: 0 }}>{ev.body}</p>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', maxWidth: '72ch' }}>
          Together, these events combined storytelling, ceremony, and experiential learning, connecting audiences directly with Indigenous heritage practices while reinforcing the role of relationship — between people, communities, and partners — as foundational to how heritage is created, shared, and sustained.
        </p>
      </div>

      {/* 06.3 — Black Heritage Caucus */}
      <div style={{ marginBottom: 80 }}>
        <span className="eyebrow eyebrow-ink">06.3 — Black Heritage Caucus</span>
        <h3 style={{ marginTop: 12, marginBottom: 32 }}>Connecting stories across the country</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }} className="bhc-grid">
          <ImgPlaceholder
              src="https://019ddfa9-ba64-75fe-97af-cd0227cf96a7.claudeusercontent.com/v1/design/projects/019ddfa9-ba64-75fe-97af-cd0227cf96a7/serve/assets/Black%20Heritage%20Caucus.jpg?t=4192828012d108656a816c19c487fcf770e104e4659d3c9c1882b968b073b168.1fd584e8-b4b2-4bee-9539-d62d17f2f045.adf9aaf9-f3c7-4c29-a5ac-a7ac474c8d25.1777933645"
              caption="Black Heritage Caucus at 2025 National Trust Conference in Nova Scotia"
            />
          <div>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', marginBottom: 20 }}>
              In 2025, EHC Research & Policy Lead, Daliso Mwanza was part of a national organizing team of the National Trust's Black Heritage Caucus, a national gathering of Black heritage practitioners from across Canada focused on sharing knowledge, building relationships, and strengthening approaches to preserving Black histories.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', marginBottom: 20 }}>
              During the conference, participants traveled through Nova Scotia, from Halifax to Birchtown, engaging with sites central to Black Loyalist history, guided by community historians whose storytelling revealed both presence and erasure in the landscape. These experiences grounded conversations in lived history and collective memory.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', marginBottom: 28 }}>
              Across the gathering, practitioners identified shared priorities: preserving oral histories, securing sustainable funding, and creating multigenerational spaces for heritage engagement.
            </p>
            <blockquote style={{
              borderLeft: '4px solid var(--ember)',
              paddingLeft: 24,
              margin: '0 0 16px',
              fontStyle: 'italic',
              fontSize: 20,
              lineHeight: 1.4,
              color: 'var(--ink)',
            }}>
              "Heritage is discovery and healing."
            </blockquote>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-soft)', margin: 0 }}>
              Through dialogue, storytelling, and cross-cultural exchange, the Caucus strengthened national connections and affirmed that heritage is sustained through relationships — across communities, geographies, and generations.
            </p>
          </div>
        </div>
      </div>

      {/* 06.4 — Roots & Routes */}
      <div style={{ marginBottom: 80 }}>
        <span className="eyebrow eyebrow-ink">06.4 — Roots & Routes</span>
        <h3 style={{ marginTop: 12, marginBottom: 4 }}>Member Engagement</h3>
        <p style={{ fontSize: 16, color: 'var(--prairie)', fontStyle: 'italic', marginBottom: 32, marginTop: 8 }}>Growing demand for sector connection</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }} className="roots-grid">
          <div>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', marginBottom: 20 }}>
              In 2025, EHC expanded its member engagement through Roots & Routes, a series of events designed to bring together heritage practitioners, organizations, and community members through shared experiences and facilitated connection.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', marginBottom: 20 }}>
              The series launched with an inaugural event at the Journey of the Horse exhibit at the Mah Society of Edmonton, where participants engaged in a guided tour and reception. This experience-centered format connected members directly to community-led heritage work, highlighting over a century of Chinese history in Edmonton through immersive storytelling and material culture.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', marginBottom: 20 }}>
              Subsequent events, including a member night hosted at Frank's Community Pub, combined informal networking with opportunities to engage directly with the work of local heritage practitioners. The evening featured presentations from Dan Rose, heritage enthusiast and creator of Arch Madness built heritage bracket, and Jia Jia Yong, Community Archivist with the City of Edmonton Archives, showcasing creative and community-based approaches to documenting and interpreting Edmonton's stories.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', marginBottom: 20 }}>
              Attendance increased throughout the year, with a November event welcoming 50 participants — the highest level of engagement for a member-focused event to date.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)' }}>
              More than networking, Roots & Routes functioned as active sector infrastructure, creating conditions for collaboration, surfacing new ideas, and strengthening relationships across Edmonton's heritage community. This work was supported by the implementation of a new CRM platform to better coordinate events, maintain connections, and support ongoing engagement.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <ImgPlaceholder
                src="https://019ddfa9-ba64-75fe-97af-cd0227cf96a7.claudeusercontent.com/v1/design/projects/019ddfa9-ba64-75fe-97af-cd0227cf96a7/serve/assets/Roots%20%26%20Routes%20(Journey%20of%20the%20Horse).JPG?t=4192828012d108656a816c19c487fcf770e104e4659d3c9c1882b968b073b168.1fd584e8-b4b2-4bee-9539-d62d17f2f045.adf9aaf9-f3c7-4c29-a5ac-a7ac474c8d25.1777933645"
                caption="Roots & Routes visits Journey of the Horse at the Mah Society (April 2025)"
              />
            <div className="stat-grid" style={{ gridTemplateColumns: '1fr 1fr', marginTop: 0 }}>
              <div className="cell" style={{ minHeight: 0, padding: 24 }}>
                <span className="stat-lbl">Peak attendance</span>
                <div className="stat-num sm">50</div>
                <div className="stat-foot">November 2025</div>
              </div>
              <div className="cell tone-cream" style={{ minHeight: 0, padding: 24 }}>
                <span className="stat-lbl">Record engagement</span>
                <div className="stat-num sm">↑</div>
                <div className="stat-foot">Highest for a member event to date</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 06.5 — CHAS */}
      <div style={{ marginBottom: 80 }}>
        <span className="eyebrow eyebrow-ink">06.5 — CHAS</span>
        <h3 style={{ marginTop: 12, marginBottom: 32 }}>Community Heritage Activation Support</h3>

        <div className="stat-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: 40 }}>
          <div className="cell tone-cream" style={{ minHeight: 0, padding: 24 }}>
            <span className="stat-lbl">Total Distributed</span>
            <div className="stat-num sm">$58,905</div>
          </div>
          <div className="cell" style={{ minHeight: 0, padding: 24 }}>
            <span className="stat-lbl">Initiatives Funded</span>
            <div className="stat-num sm">24</div>
          </div>
          <div className="cell" style={{ minHeight: 0, padding: 24 }}>
            <span className="stat-lbl">Applications Received</span>
            <div className="stat-num sm">24</div>
          </div>
        </div>

        <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', marginBottom: 20, maxWidth: '72ch' }}>
          Community Heritage Activation Support (CHAS) provides small-scale, flexible funding to support heritage initiatives led by community organizations and grassroots groups. In 2025, CHAS supported a range of projects across Edmonton, enabling communities to activate heritage in ways that are immediate, locally relevant, and grounded in lived experience.
        </p>

        <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', marginBottom: 12, maxWidth: '72ch' }}>
          Funded initiatives included:
        </p>
        <ul style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-soft)', marginBottom: 20, maxWidth: '72ch', paddingLeft: 24 }}>
          <li style={{ marginBottom: 8 }}><strong>Mill Woods Bus Tour, 1000 Faces Festival, and programming with Lodgepole Communitas</strong> — supporting neighbourhood-based heritage engagement</li>
          <li><strong>A Black History Month event led by the Jamaica Association of Northern Alberta</strong> — exploring the history and cultural significance of the Jamaican bandana</li>
        </ul>

        <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', marginBottom: 12, maxWidth: '72ch' }}>
          CHAS fills a critical gap within EHC's funding ecosystem by supporting:
        </p>
        <ul style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-soft)', marginBottom: 32, maxWidth: '72ch', paddingLeft: 24 }}>
          <li>Time-sensitive and emerging opportunities</li>
          <li>Grassroots and community-led initiatives</li>
          <li>Projects that may not align with larger grant cycles</li>
        </ul>

        <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', marginBottom: 40, maxWidth: '72ch' }}>
          Through CHAS, EHC continues to expand access to heritage funding and support communities in sharing their stories on their own terms.
        </p>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--rule)' }}>
                <th style={{ textAlign: 'left', padding: '12px 16px 12px 0', fontWeight: 600, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-mute)', whiteSpace: 'nowrap' }}>Organization / Recipient</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-mute)' }}>Project</th>
                <th style={{ textAlign: 'right', padding: '12px 0 12px 16px', fontWeight: 600, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-mute)', whiteSpace: 'nowrap' }}>Award</th>
              </tr>
            </thead>
            <tbody>
              {CHAS_GRANTS.map((g, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--rule-soft)' }}>
                  <td style={{ padding: '12px 16px 12px 0', fontWeight: 500, color: 'var(--ink)', verticalAlign: 'top' }}>{g.org}</td>
                  <td style={{ padding: '12px 16px', color: 'var(--ink-soft)', verticalAlign: 'top' }}>{g.project}</td>
                  <td style={{ padding: '12px 0 12px 16px', textAlign: 'right', fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--ink)', verticalAlign: 'top', whiteSpace: 'nowrap' }}>{fmt(g.award)}</td>
                </tr>
              ))}
              <tr style={{ borderTop: '2px solid var(--rule)', background: 'var(--cream-deep)' }}>
                <td style={{ padding: '16px 16px 16px 0', fontWeight: 700, color: 'var(--ink)' }} colSpan={2}>Total</td>
                <td style={{ padding: '16px 0 16px 16px', textAlign: 'right', fontFamily: 'var(--mono)', fontSize: 14, fontWeight: 700, color: 'var(--ink)', whiteSpace: 'nowrap' }}>$58,905.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 06.6 — Strategic Partners + Collaborators */}
      <div>
        <span className="eyebrow eyebrow-ink">06.6 — Strategic Partners & Collaborators</span>
        <h3 style={{ marginTop: 12, marginBottom: 32, maxWidth: '24ch' }}>Partnerships as infrastructure.</h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }} className="partners-grid">
          <div>
            <p className="mono" style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--prairie)', marginBottom: 20 }}>
              Strategic Partners
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: '1px solid var(--rule)' }}>
              {STRATEGIC_PARTNERS.map((p, i) => (
                <li key={i} style={{
                  padding: '16px 0',
                  borderBottom: '1px solid var(--rule)',
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: 4,
                }}>
                  <span style={{ fontSize: 16, fontWeight: 500, color: 'var(--ink)' }}>{p.name}</span>
                  <span style={{ fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.5 }}>{p.role}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mono" style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--prairie)', marginBottom: 20 }}>
              Academic & Community Collaborators
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: '1px solid var(--rule)' }}>
              {COLLABORATORS.map((p, i) => (
                <li key={i} style={{
                  padding: '16px 0',
                  borderBottom: '1px solid var(--rule)',
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: 4,
                }}>
                  <span style={{ fontSize: 16, fontWeight: 500, color: 'var(--ink)' }}>{p.name}</span>
                  <span style={{ fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.5 }}>{p.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .iskwew-grid, .fire-spotlight-grid, .bhc-grid, .roots-grid { grid-template-columns: 1fr !important; }
          .spotlight-events { grid-template-columns: 1fr !important; }
          .partners-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}

window.Partnerships = Partnerships;
