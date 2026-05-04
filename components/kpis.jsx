// kpis.jsx — Part 4: Connections & Exchanges KPIs

const KPIS = [
  {
    id: 1,
    title: "Reducing Barriers & Increasing Access",
    aims: "Aims 2 & 4",
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
    headline: "5,000+ Edmontonians engaged in person.",
    bullets: [
      "365 guests on heritage walking tours, summer 2025",
      "4,000+ interactions at K-Days heritage exhibit",
      "Churchill Square pop-up sound exhibit engaged 200+ including Mayor Sohi",
      "Programming in Strathcona, McCauley, River Valley, K-Days grounds",
    ],
  },
  {
    id: 3,
    title: "Sector Capacity & Economic Resilience",
    aims: "Aims 6, 7 & 8",
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
    headline: "Heritage work going international and provincial.",
    bullets: [
      "Career Development grantees travelled to Barbados, Taiwan, Halifax, Perth, Ottawa, Inuvik, Toronto, Trinidad",
      "Provincial Indigitization Workshop (in partnership with UBC's Indigitization Program): 17 attendees from 11 communities",
      "National Trust: Black Heritage Network and Indigenous Heritage Circle",
      "Daliso Mwanza on Black Heritage Caucus national organizing team",
    ],
  },
  {
    id: 5,
    title: "Heritage in Civic Planning & Leadership",
    aims: "Aim 3",
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

          <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
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
