// kpis.jsx — Part 4: Connections & Exchanges KPIs

const AIMS = {
  1: {
    title: "Edmonton's neighbourhoods offer meaningful opportunities for heritage participation and engagement.",
    actions: [
      "1.1 Nurture cultural curiosity through planned and spontaneous heritage encounters.",
      "1.2 Inventory and develop heritage interpretive experiences to increase visibility, access, and engagement.",
    ],
  },
  2: {
    title: "Edmontonians have a sense of belonging and connectedness to peoples, places, and stories of their city.",
    actions: [
      "2.1 Create and support opportunities for cultural connection and understanding between people, communities, and places.",
      "2.2 Advance Edmonton City as Museum Project as a place of dialogue, exchange and collaborative city building.",
      "2.3 Work with heritage community to adopt inclusive practices in museums, archives, and historical research and programming.",
      "2.4 Contribute to placemaking through connections to cultural landscapes, natural history, built history, object, language, and story.",
      "2.5 Support Indigenous peoples in revitalizing and participating locally in traditions that reflect their connections to ancestors, and the land.",
    ],
  },
  3: {
    title: "Heritage leaders are actively engaged in civic planning implementation.",
    actions: [
      "3.1 With City Administration, develop policy guiding interpretation, naming, commemoration, participation, built heritage, boards and committees, facilities, collections and incorporate heritage into city strategies and planning.",
      "3.3 Encourage active civic engagement and participation in cultural activities.",
      "3.4 Adopt a holistic definition of civic vitality including heritage as a valued component.",
      "3.5 Apply a Fourth Pillar approach to City of Edmonton planning and policy development.",
    ],
  },
  4: {
    title: "Conditions are in place to remove barriers for all Edmontonians to participate in cultural experiences.",
    actions: [
      "4.2 Review Historian Laureate program and mandate for cultural inclusion.",
      "4.3 Stand with Indigenous leaders in cultural work.",
      "4.4 Resource Indigenous-led activities that support reclamation of Indigeneity.",
    ],
  },
  5: {
    title: "Dynamic exchanges of ideas and expertise occur between Edmonton's heritage sector and the world.",
    actions: [
      "5.1 Work with City Administration to champion public heritage experiences and raise awareness of Edmonton's lead practices.",
      "5.2 Create opportunities for heritage practitioners to develop and promote innovative practices.",
      "5.3 Work with public and private partners to celebrate and promote Edmonton's historic urban landscapes, including sites of conscience.",
    ],
  },
  6: {
    title: "Diverse platforms for collaboration within Edmonton that allow heritage communities to connect and create.",
    actions: [
      "6.1 Broaden the Edmonton City as Museum Project (ECAMP) to include public art, as well as neighbourhood and cultural heritage in a significant platform for cultural discovery and knowledge building.",
      "6.2 Connect individuals and groups with the resources they need to do creative, innovative heritage work.",
    ],
  },
  7: {
    title: "Heritage practitioners are economically resilient.",
    actions: [
      "7.1 Increase investment in Edmonton's heritage through the EHC's Community Investment Program (+FIRE).",
      "7.2 Research, develop and implement an equitable heritage practitioner pay scale (e.g., model on arts community CARFAC).",
      "7.3 Build funding mechanisms with an emphasis on: multi-year research and documentation projects, mentorship, residencies, and professional development.",
    ],
  },
  8: {
    title: "New and existing heritage organizational capacity enables innovation and builds resilience in the sector.",
    actions: [
      "8.1 Increase heritage sector capacity through training and mentorship.",
      "8.2 Multi-year funding opportunities for heritage organizations and heritage practitioners.",
      "8.3 Research the prospect of grants for organizations to enhance program development, access, and consistency.",
      "8.4 Provide change capital to cultural organizations to meet the needs of a rapidly changing city.",
    ],
  },
};

const KPIS = [
  {
    id: 1,
    title: "Reducing Barriers & Increasing Access",
    aims: "Aims 2 & 4",
    aimNums: [2, 4],
    headline: "72% of grants reached equity-deserving communities.",
    bullets: [
      "FIRE funded 19 Indigenous-led cultural resurgence projects",
      "Heritage work in 8+ languages including Cree, Michif, Mandarin, French, Arabic",
      "Indigenous, Afro-Franco, Chinese, Palestinian, Caribbean, Jewish & LGBTQ2S+ communities funded",
      "Indigitization workshop (with UBC's Indigitization Program): 17 practitioners from 11 Indigenous communities",
    ],
    chart: "equity",
  },
  {
    id: 2,
    title: "Neighbourhood Engagement & Participation",
    aims: "Aims 1 & 2",
    aimNums: [1, 2],
    headline: "5,000+ Edmontonians engaged in person.",
    bullets: [
      "365 guests on heritage walking tours, summer 2025",
      "4,000 interactions at K-Days heritage exhibit",
      "Churchill Square pop-up sound exhibit engaged 200+ including Mayor Sohi",
      "Programming in Strathcona, McCauley, River Valley, K-Days grounds",
    ],
  },
  {
    id: 3,
    title: "Sector Capacity & Economic Resilience",
    aims: "Aims 6, 7 & 8",
    aimNums: [6, 7, 8],
    headline: "$417,564 to 12 operational grant recipients.",
    bullets: [
      "11 Career Development grants ($32,409.68) — practitioners across six countries",
      "43 one-on-one meetings with grant applicants",
      "31 hours of jury training with 12 community jurors",
      "New Grants Coordinator and Grants Administrator hired",
    ],
  },
  {
    id: 4,
    title: "Raising Alberta's Heritage Profile",
    aims: "Aims 5 & 6",
    aimNums: [5, 6],
    headline: "Heritage work going international and provincial.",
    bullets: [
      "Career Development grantees travelled to Barbados, Taiwan, Halifax, Perth, Ottawa, Inuvik, Toronto, Trinidad",
      "Provincial Indigitization Workshop (in partnership with UBC's Indigitization Program): 17 attendees from 11 communities",
      "National Trust: Black Heritage Caucus and Indigenous Heritage Circle",
      "Daliso Mwanza on Black Heritage Caucus national organizing team",
    ],
  },
  {
    id: 5,
    title: "Heritage in Civic Planning & Leadership",
    aims: "Aim 3",
    aimNums: [3],
    headline: "From facilitator to active advocate.",
    bullets: [
      "Heritage Places Strategy — input on citywide preservation framework",
      "Government Centre LRT Station renaming — heritage perspective",
      "Royal Alberta Museum & U of A Ring Houses preservation advocacy",
      "Joint City Council engagement with EAC and Arts Habitat Edmonton",
      "Preparation for 2027–2030 budget advocacy",
    ],
  },
];

const EQUITY_TREND = [
  { year: 2021, grants: 56, funding: 34 },
  { year: 2022, grants: 66, funding: 45 },
  { year: 2023, grants: 69, funding: 45 },
  { year: 2024, grants: 72, funding: 47 },
  { year: 2025, grants: 72, funding: 47 },
];

function Kpis() {
  const [active, setActive] = React.useState(1);
  const k = KPIS.find(x => x.id === active);

  return (
    <section className="section" id="kpis">
      <div className="section-hd">
        <div className="num">Part 05<span>Strategic Progress</span></div>
        <div>
          <h2>Year 7 of Connections & Exchanges.</h2>
          <p className="lede" style={{marginTop: 24}}>
            Five Key Performance Indicators grouping the eight strategic aims of the 10-year plan to transform arts and heritage in Edmonton.
          </p>
        </div>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: '320px 1fr', gap: 48}} className="kpi-grid">
        <div>
          {KPIS.map(kpi => (
            <button
              key={kpi.id}
              onClick={() => setActive(kpi.id)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                padding: '20px 24px',
                background: active === kpi.id ? 'var(--ink)' : 'transparent',
                color: active === kpi.id ? 'var(--cream)' : 'var(--ink)',
                border: '1px solid var(--rule)',
                borderBottom: 'none',
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              <div className="mono" style={{fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: active === kpi.id ? 'var(--ember-soft)' : 'var(--ink-mute)', marginBottom: 6}}>
                Key Performance Indicator {kpi.id} · {kpi.aims}
              </div>
              <div style={{fontSize: 15, fontWeight: 500, lineHeight: 1.3}}>{kpi.title}</div>
            </button>
          ))}
          <div style={{borderBottom: '1px solid var(--rule)'}}/>
        </div>

        <div>
          <div className="mono" style={{fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--prairie)', marginBottom: 12}}>
            Key Performance Indicator {k.id} · {k.aims}
          </div>
          <h3 style={{maxWidth: '20ch', marginBottom: 32}}>{k.headline}</h3>

          {k.chart === "equity" && (
            <div style={{padding: 32, background: 'var(--paper)', border: '1px solid var(--rule)', marginBottom: 32, borderRadius: 4}}>
              <div className="mono" style={{fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-mute)', marginBottom: 24}}>
                Five-Year Equity Trend
              </div>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, alignItems: 'end', height: 200}}>
                {EQUITY_TREND.map(y => (
                  <div key={y.year} style={{display: 'flex', flexDirection: 'column', gap: 6, height: '100%'}}>
                    <div style={{flex: 1, display: 'flex', alignItems: 'flex-end', gap: 4}}>
                      <div style={{flex: 1, height: `${y.grants}%`, background: 'var(--prairie)', borderRadius: '2px 2px 0 0'}} title={`Grants: ${y.grants}%`}/>
                      <div style={{flex: 1, height: `${y.funding}%`, background: 'var(--brick)', borderRadius: '2px 2px 0 0'}} title={`Funding: ${y.funding}%`}/>
                    </div>
                    <div className="mono" style={{fontSize: 11, textAlign: 'center', color: 'var(--ink-mute)'}}>{y.year}</div>
                    <div className="mono" style={{fontSize: 10, textAlign: 'center', color: 'var(--ink-mute)'}}>{y.grants}/{y.funding}%</div>
                  </div>
                ))}
              </div>
              <div style={{display: 'flex', gap: 24, marginTop: 24, fontSize: 12}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
                  <span style={{width:12, height:12, background:'var(--prairie)'}}/> % grants to equity-deserving
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
                  <span style={{width:12, height:12, background:'var(--brick)'}}/> % funding to equity-deserving
                </div>
              </div>
            </div>
          )}

          <ul style={{listStyle: 'none', padding: 0, margin: 0, marginBottom: 48}}>
            {k.bullets.map((b, i) => (
              <li key={i} style={{
                display: 'grid',
                gridTemplateColumns: '24px 1fr',
                gap: 16,
                padding: '14px 0',
                borderBottom: '1px solid var(--rule-soft)',
                fontSize: 15,
                lineHeight: 1.5,
              }}>
                <span className="mono" style={{color: 'var(--prairie)', fontSize: 12}}>{String(i+1).padStart(2,'0')}</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* Aim descriptions */}
          <div style={{borderTop: '2px solid var(--rule)', paddingTop: 32}}>
            <div className="mono" style={{fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-mute)', marginBottom: 24}}>
              Connections & Exchanges · Strategic Aims
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 28}}>
              {k.aimNums.map(n => {
                const aim = AIMS[n];
                return (
                  <div key={n} style={{
                    background: 'var(--paper)',
                    border: '1px solid var(--rule)',
                    borderRadius: 4,
                    padding: 24,
                  }}>
                    <div style={{display: 'flex', gap: 16, alignItems: 'baseline', marginBottom: 10}}>
                      <span className="mono" style={{
                        fontSize: 11,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--prairie)',
                        whiteSpace: 'nowrap',
                      }}>Aim #{n}</span>
                      <p style={{fontSize: 16, fontWeight: 600, lineHeight: 1.35, margin: 0, color: 'var(--ink)'}}>
                        {aim.title}
                      </p>
                    </div>
                    <ul style={{listStyle: 'none', padding: 0, margin: 0, borderTop: '1px solid var(--rule-soft)', paddingTop: 12}}>
                      {aim.actions.map((a, i) => (
                        <li key={i} style={{
                          fontSize: 13,
                          color: 'var(--ink-soft)',
                          lineHeight: 1.6,
                          padding: '5px 0',
                          borderBottom: i < aim.actions.length - 1 ? '1px solid var(--rule-soft)' : 'none',
                        }}>{a}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .kpi-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { Kpis });
