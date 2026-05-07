// grants.jsx — Part 2: Grant Programs

const HCIP_STREAMS = [
  { name: "Operational", awarded: 417564.95, apps: 23, funded: 12, success: 52, color: "#3D6184" },
  { name: "Heritage Project", awarded: 210450, apps: 74, funded: 11, success: 15, color: "#5c462b" },
  { name: "Research & Development", awarded: 56922, apps: 25, funded: 6, success: 24, color: "#517fa3" },
  { name: "Career Development", awarded: 32409.68, apps: 21, funded: 11, success: 52, color: "#a84d2e" },
  { name: "Community Archives", awarded: 7000, apps: 3, funded: 2, success: 67, color: "#c6d6e3" },
];

const HERITAGE_PROJECTS = [
  { org: "Edmonton Forest School Society", project: "A Guide to Forest School in Edmonton's River Valley", award: 20000,
    note: "Creating a comprehensive guide to forest school practices in the River Valley, making land-based learning accessible to educators and families." },
  { org: "Catherine C. Cole", project: "Imagining Mill Woods", award: 20000,
    note: "Documenting the history of Mill Woods through archival research and oral history — a community heritage record of this significant post-war neighbourhood." },
  { org: "Société historique francophone de l'Alberta", project: "Flying Canoë Volant: Memory in Motion", award: 20000,
    note: "Supporting the beloved winter festival that brings together Métis, Indigenous, and Francophone storytelling traditions through illuminated trails, music, and shared cultural memory." },
  { org: "Silver Skate Festival Society", project: "mâmawâyâwin", award: 20000,
    note: "Activating Indigenous-led programming and ceremony at one of Edmonton's longest-running winter festivals — centring Treaty 6 traditions and intergenerational gathering." },
  { org: "La Société généalogique du Nord-Ouest", project: "REMEMBER — Registry of Early Métis and Francophone Obituaries", award: 20000,
    note: "Building a searchable registry of early Métis and Francophone obituaries — a critical genealogical resource for descendants tracing family stories across the prairies." },
  { org: "Kayanou", project: "Griot App: Phase 2 — Community Launch & School Integration", award: 20000,
    note: "Expanding the Griot App to connect African diaspora communities with their heritage through school integration and community launch activities." },
  { org: "Nicole Schutz & Tenielle Bennett", project: "Michif Language and Music Preservation: Unearthing Métis Voices", award: 20000,
    note: "Working with Métis Elders to record and preserve traditional Michif songs — including lullabies and ceremonial music — in both Michif and digital formats." },
  { org: "Canada Palestine Cultural Association", project: "Palestine 101: Educational Resources for Schools", award: 20000,
    note: "Developing K–12 educational resources on Palestinian culture and heritage, supporting respectful, informed engagement in schools." },
  { org: "New Grocery Movement", project: "Cooking4Community: Cooking As Resilience", award: 20000,
    note: "Establishing community cooking programs that celebrate diverse food traditions and build belonging through intergenerational food story exchange." },
  { org: "Robert Tyndale", project: "Out of Many One Community", award: 20000,
    note: "Collecting oral histories from Edmonton's diverse communities, with a focus on Jamaican and Caribbean contributions to the city." },
  { org: "Alberta Aviation Museum", project: "Hangar 14 Lego Model", award: 10450,
    note: "Building a detailed Lego model of the historic Hangar 14 — engaging youth and visitors with Edmonton's aviation heritage through hands-on, family-friendly storytelling." },
];

// Career Development — sorted by award descending
const CAREER_DEV = [
  { name: "Catherine C. Cole", dest: "Building the Museum for the Future + Study Tour — Taiwan", award: 4000,
    note: "Participated in a symposium and Indigenous study tour, bringing back international perspectives on ethical heritage practice." },
  { name: "Zachary Polis", dest: "Banff World Media Festival", award: 4000,
    note: "Promoted his Geriactors documentary, bringing an Edmonton heritage story to a national and international audience." },
  { name: "Skye Haggerty", dest: "Art Association of Australia and New Zealand Conference — Perth", award: 4000,
    note: "Visited heritage institutions and built international networks in object-centred practice." },
  { name: "Cherelle George", dest: "Caribbean Folk Dance Training — Trinidad and Tobago", award: 4000,
    note: "Received one-on-one Pique dance training to teach with greater authenticity in Edmonton schools and community programs." },
  { name: "Xiru Wang", dest: "Advanced Training in Chinese Narrative Storytelling — China", award: 3600,
    note: "Completed eight months of virtual Meihua Dagu (Plum Blossom Drum-Song) training — an art form unavailable for advanced study in Canada." },
  { name: "Althea Shelley Morrison", dest: "National Trust Conference 2025 — Halifax", award: 3312.52,
    note: "Joined the newly formed Black Heritage Caucus to centre Black heritage in national conversations." },
  { name: "Jessica Sanderson-Barry", dest: "Great Northern Arts Festival — Inuvik", award: 3060,
    note: "Advanced her Cree artistic practice through beading workshops at the festival." },
  { name: "Rochelle Ignacio", dest: "Plants and Planting for the Future IV — Barbados", award: 2356.72,
    note: "Presented at a biocultural symposium on food as a site of cultural reclamation and community resilience through Feed the Soul YEG." },
  { name: "Mireille Isidore", dest: "Je me souviendrai: mémoire, patrimoine et commémoration — Ottawa", award: 1560.35,
    note: "Presented research on the heritage of Alberta's Francophone Caribbean and Afro-descendant communities." },
  { name: "Shawn Tse", dest: "National Chinatown Forum — Toronto", award: 1342.86,
    note: "Served on the advisory committee, commemorating the 20th anniversary of the Chinese Head Tax Redress." },
  { name: "Denis Perreaux", dest: "National Panel on Vitality of Memory — Ottawa", award: 1177.23,
    note: "Invited panelist on a national discussion of mémoire vitalité in minority Francophone contexts." },
];

// R&D — sorted descending
const RND_PROJECTS = [
  { a: "Chinatown Transformation Collaborative", b: "Edmonton Dragon Food Tours", c: "$10,000",
    note: "Developing heritage-focused food tours that connect culinary experiences with Edmonton Chinatown's cultural history." },
  { a: "NiGiNan Housing Ventures", b: "From Teachings to Telling: Indigenous Storytelling Facilitators", c: "$10,000",
    note: "Building a training program for Indigenous storytelling facilitators, embedding oral traditions into community care practices at NiGiNan housing sites." },
  { a: "Sue Mah", b: "In the Kitchen with Aunties", c: "$10,000",
    note: "Documenting culinary heritage and recipes carried by Chinese-Canadian aunties — preserving food memory as a living archive of family and community history." },
  { a: "Taghreed Saadeh", b: "Arabs: Old Stock Canadians", c: "$10,000",
    note: "Developing a docuseries exploring over a century of Arab community history in Edmonton — a community whose deep roots have often gone unrecognized." },
  { a: "Russell Cobb", b: "Crude Territory: Oil, Treaties, and Modern Edmonton", c: "$8,922",
    note: "Researching a podcast series on the relationship between oil development, Treaty rights, and Edmonton's urban growth." },
  { a: "Afro-Caribbean Indigenous Foodbank", b: "Echoes of Arrival: Mapping Afro-Caribbean Migration", c: "$8,000",
    note: "Mapping Afro-Caribbean migration stories in Edmonton through community gatherings and food, building a foundation for future heritage programming." },
];

const OPERATIONAL = [
  { org: "Alberta Aviation Museum", award: 178429 },
  { org: "Société historique francophone de l'Alberta", award: 56638 },
  { org: "Northern Alberta Pioneers & Descendants", award: 30000 },
  { org: "Alberta Railway Museum", award: 29971 },
  { org: "Alberta Genealogical Society", award: 28000 },
  { org: "Edmonton Radial Railway Society", award: 26105 },
  { org: "Edmonton Chinese Library Foundation", award: 19374 },
  { org: "La Société généalogique du Nord-Ouest", award: 16358 },
  { org: "Jewish Archives and Historical Society", award: 13340 },
  { org: "Alberta Labour History Institute", award: 10907 },
  { org: "Mah Society of North America", award: 5750 },
  { org: "Kayanou/Kiskeya Institute", award: 2693 },
];

function Grants() {
  const [stream, setStream] = React.useState("Heritage Project");
  const totalApps = HCIP_STREAMS.reduce((s, x) => s + x.apps, 0);
  const totalFunded = HCIP_STREAMS.reduce((s, x) => s + x.funded, 0);
  const totalAwarded = HCIP_STREAMS.reduce((s, x) => s + x.awarded, 0);
  const maxAwarded = Math.max(...HCIP_STREAMS.map(s => s.awarded));

  const fmt = n => "$" + n.toLocaleString("en-US", {maximumFractionDigits: 0});

  return (
    <section className="section" id="grants">
      <div className="section-hd">
        <div className="num">Part 03<span>Grant Programs</span></div>
        <div>
          <h2>Where the money went, and why it mattered.</h2>
          <p className="lede" style={{marginTop: 24}}>
            HCIP distributed $724,346.63 to 42 projects across five streams. Heritage Project applications doubled.
          </p>
          <p className="mono" style={{marginTop: 12, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-mute)'}}>
            Click a stream below to explore the recipients →
          </p>
        </div>
      </div>

      {/* HCIP overview chart */}
      <div style={{marginBottom: 64}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24, flexWrap: 'wrap', gap: 16}}>
          <div>
            <span className="eyebrow eyebrow-ink">03.1 — HCIP Streams</span>
            <h3 style={{marginTop: 8}}>Heritage Community Investment Program</h3>
          </div>
          <div className="mono" style={{fontSize: 12, color: 'var(--ink-mute)', letterSpacing: '0.08em'}}>
            {totalApps} APPLICATIONS · {totalFunded} FUNDED · {fmt(totalAwarded)} TOTAL
          </div>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32}} className="grants-grid">
          <div>
            <div className="mono" style={{fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-mute)', marginBottom: 8}}>Select a stream to explore recipients →</div>
            {HCIP_STREAMS.map(s => (
              <button
                key={s.name}
                onClick={() => setStream(s.name)}
                style={{
                  width: '100%',
                  display: 'grid',
                  gridTemplateColumns: '1fr 80px',
                  gap: 16,
                  padding: '16px 0',
                  border: 'none',
                  borderBottom: '1px solid var(--rule-soft)',
                  background: 'transparent',
                  textAlign: 'left',
                  cursor: 'pointer',
                  color: stream === s.name ? 'var(--ink)' : 'var(--ink-soft)',
                }}
              >
                <div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8}}>
                    <span style={{
                      width: 8, height: 8, borderRadius: '50%',
                      background: s.color,
                      transform: stream === s.name ? 'scale(1.5)' : 'scale(1)',
                      transition: 'transform .15s',
                    }}/>
                    <span style={{fontSize: 16, fontWeight: stream === s.name ? 600 : 400}}>{s.name}</span>
                    <span className="mono" style={{fontSize: 11, color: 'var(--ink-mute)'}}>
                      {s.funded}/{s.apps} · {s.success}%
                    </span>
                  </div>
                  <div style={{height: 8, background: 'var(--cream-deep)', borderRadius: 999, overflow: 'hidden'}}>
                    <div style={{height: '100%', width: `${(s.awarded / maxAwarded) * 100}%`, background: s.color, transition: 'width 0.6s'}} />
                  </div>
                </div>
                <div className="mono" style={{textAlign: 'right', fontSize: 13, alignSelf: 'center'}}>
                  {fmt(s.awarded)}
                </div>
              </button>
            ))}
          </div>

          <div style={{background: 'var(--paper)', border: '1px solid var(--rule)', padding: 32, borderRadius: 4}}>
            {stream === "Heritage Project" && (
              <StreamPanel title="Heritage Project Grants" foot="11 funded · 74 applications · 15% funding rate"
                blurb="Heritage Project applications doubled from 2024 — a clear signal of how vibrant Edmonton's heritage community has become. The 11 funded projects span language preservation, digital platforms, educational resources, and oral history."
                rows={HERITAGE_PROJECTS.map(p => ({a: p.org, b: p.project, c: fmt(p.award), note: p.note}))} />
            )}
            {stream === "Career Development" && (
              <StreamPanel title="Career Development Grants" foot="11 practitioners · 21 applications · 52% funding rate"
                blurb="Practitioners travelled to conferences and training opportunities from Barbados to Taiwan, from Halifax to Australia — bringing new skills and international networks back to Edmonton."
                rows={CAREER_DEV.map(p => ({a: p.name, b: p.dest, c: fmt(p.award), note: p.note}))} />
            )}
            {stream === "Operational" && (
              <StreamPanel title="Operational Grants — Sector Backbone" foot="12 organizations · 23 applications · 52% funding rate"
                blurb="These organizations collectively serve tens of thousands of Edmontonians annually, maintain significant heritage collections, deliver educational programming, and provide employment for heritage professionals."
                rows={OPERATIONAL.map(p => ({a: p.org, b: "", c: fmt(p.award)}))} />
            )}
            {stream === "Research & Development" && (
              <StreamPanel title="Research & Development Grants" foot="6 projects · 25 applications · 24% funding rate"
                blurb="Supporting heritage practitioners in the critical research and planning phases that lay the groundwork for future community impact."
                rows={RND_PROJECTS} />
            )}
            {stream === "Community Archives" && (
              <StreamPanel title="Community Archives Support" foot="2 archives · 3 applications · 67% funding rate"
                blurb="Supporting grassroots preservation to ensure diverse community stories are collected and made accessible for future generations."
                rows={[
                  {a: "Usha Gupta", b: "Artistic Records", c: "$3,000"},
                  {a: "Al Rashid Mosque Records", b: "", c: "$4,000"},
                ]} />
            )}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .grants-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>

    </section>
  );
}

function StreamPanel({title, foot, blurb, rows}) {
  return (
    <div>
      <h3 style={{marginBottom: 8}}>{title}</h3>
      <div className="mono" style={{fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--prairie)', marginBottom: 16}}>
        {foot}
      </div>
      <p style={{fontSize: 14, color: 'var(--ink-soft)', marginBottom: 24, lineHeight: 1.5}}>
        {blurb}
      </p>
      <div style={{maxHeight: 420, overflow: 'auto', paddingRight: 8}}>
        {rows.map((r, i) => (
          <div key={i} style={{
            padding: '12px 0',
            borderBottom: '1px solid var(--rule-soft)',
            fontSize: 13,
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 90px',
              gap: 12,
              alignItems: 'baseline',
            }}>
              <div>
                <div style={{fontWeight: 500}}>{r.a}</div>
                {r.b && <div style={{fontSize: 12, color: 'var(--ink-mute)', marginTop: 2}}>{r.b}</div>}
              </div>
              <div className="mono" style={{textAlign: 'right', fontSize: 12}}>{r.c}</div>
            </div>
            {r.note && (
              <div style={{
                fontSize: 12.5,
                color: 'var(--ink-soft)',
                marginTop: 8,
                lineHeight: 1.5,
                paddingLeft: 12,
                borderLeft: '2px solid var(--sky-pale)',
              }}>
                {r.note}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { Grants });
