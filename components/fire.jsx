// fire.jsx — Part 2b: FIRE Indigenous-led grants

const FIRE_SPRING = [
  { name: "Magen Alexis", project: "Revitalizing Tradition: Regalia & Streetwear Sewing", award: 10000,
    note: "Workshops blending traditional regalia-making with contemporary streetwear design — reclaiming identity through wearable cultural practice." },
  { name: "Remington Bracher", project: "Native Student Professional Development", award: 10000,
    note: "Career and cultural mentorship for Indigenous post-secondary students, connecting traditional teachings with professional pathways." },
  { name: "Jessica Daniels", project: "pisim (Moon Teachings Camp)", award: 10000,
    note: "A land-based gathering centred on women’s moon teachings, ceremony, and intergenerational knowledge transfer at Moose Hills." },

  { name: "Kirsten Lindquist", project: "Tipi Confessions (Body Sovereignty Workshops)", award: 9975,
    note: "Workshops on Indigenous body sovereignty, sexual health, and consent — centring teachings and community-led conversation." },
  { name: "Jayroy Makokis", project: "Cultural Continuity through Land-Based Practices", award: 9998.82,
    note: "On-the-land programming with youth, elders, and harvesters — ensuring traditional practices continue across generations." },
  { name: "Viper Nayawatatic", project: "mámawihitowin (Three-Day Cultural Camp)", award: 10000,
    note: "A three-day cultural camp gathering community for ceremony, storytelling, food, and language immersion." },
  { name: "Wyatt Schiefelbein", project: "nêhiyawêrin (Cree Language Video Game Mod)", award: 10000,
    note: "A Cree-language modification of an existing video game — meeting young learners where they already are with playful immersion." },
  { name: "Chelsea Vowel", project: "tâpwê kinitawêyihtênaw (Online Cree Language Course)", award: 10000,
    note: "A free, self-paced online Cree (Y-dialect) course — 36 hours of video instruction for learners without institutional access." },
];

const FIRE_FALL = [
  { name: "Tracy Alikamik", project: "Reconnecting with Our Qulliq", award: 10000,
    note: "Qulliq carving and lighting workshops with Inuit community members in Edmonton — reconnecting urban Inuit with traditional lamp-keeping." },
  { name: "Edmonton Aboriginal Seniors Centre", project: "Journey of the Drum", award: 10000,
    note: "An intergenerational drum-making and teaching program led by Indigenous seniors, anchoring cultural memory in the community." },
  { name: "Enoch Cree Nation (Christina Cutknife)", project: "Winter Solstice Storytelling", award: 10000,
    note: "Winter solstice storytelling gatherings on Enoch Cree Nation — carrying forward seasonal teachings in their proper time." },
  { name: "Jeela Manniapik", project: "Lighting Our Language: Qulliq & Inuktitut", award: 10000,
    note: "Pairing Qulliq lighting ceremony with Inuktitut language learning — lighting language alongside lamp." },
  { name: "Jo-Ann Saddleback", project: "Pôsâci Nêhîyawêwîn (Step into Cree)", award: 10000,
    note: "Beginner-level Cree language sessions designed for community members ready to step into nehiyawewin." },
  { name: "Keith King", project: "Two Spirit Resurgence — Intergenerational 2Spirit Excellence", award: 10000,
    note: "Programming celebrating Two Spirit identity, history, and intergenerational mentorship across Edmonton’s Indigenous community." },
  { name: "Kelly Ryan", project: "Cultural Pathways to Community Pride", award: 10000,
    note: "Workshops connecting Indigenous youth to cultural identity and community pride through art, ceremony, and storytelling." },
  { name: "Natesa Medlicott-Kappo", project: "Revitalizing the Cree Language through Art", award: 10000,
    note: "Visual-art-based Cree language revitalization — painting, beading, and design as language-learning practice." },
  { name: "NiGiNan Housing Ventures", project: "On The Land Programming", award: 10000,
    note: "Land-based programming for residents of NiGiNan housing sites — weaving traditional practice into urban Indigenous care work." },
  { name: "Deborah Lee", project: "Central Alberta Métis and Red River Myopia", award: 9968.75,
    note: "Research and storytelling addressing the historical erasure of Central Alberta Métis communities relative to Red River narratives." },
  { name: "Wiwipson Iyiniw Healing", project: "Wiwipson Healing Culture Camp", award: 10000,
    note: "A multi-day healing culture camp grounded in ceremony, plant medicine, and intergenerational gathering." },
];

function FireSection() {
  const [run, setRun] = React.useState("spring");
  const data = run === "spring" ? FIRE_SPRING : FIRE_FALL;
  const total = data.reduce((s, x) => s + x.award, 0);
  const fmt = n => "$" + n.toLocaleString("en-US", {maximumFractionDigits: 2});

  return (
    <section className="section" id="fire" style={{
      background: 'var(--prairie-deep)',
      maxWidth: 'none',
      color: 'var(--cream)',
    }}>
      <div style={{maxWidth: 1320, margin: '0 auto'}}>
        <div className="section-hd" style={{borderBottom: '1px solid rgba(244,237,221,0.2)'}}>
          <div className="num" style={{color: '#FFFFFF'}}>03.2<span style={{color: '#FFFFFF'}}>FIRE</span></div>
          <div>
            <h2 style={{color: 'var(--cream)'}}>
              <span style={{fontStyle: 'italic'}}>Funding Indigenous Resurgence</span> in Edmonton.
            </h2>
            <p className="lede" style={{marginTop: 24, color: 'rgba(244,237,221,0.8)'}}>
              FIRE supports Indigenous-led cultural resurgence — projects that honour Indigenous knowledge,
              strengthen community connections, and reclaim cultural practices on Indigenous peoples'
              own terms.
            </p>
          </div>
        </div>

        {/* FIRE stats */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, marginBottom: 64,
                     borderTop: '1px solid rgba(244,237,221,0.2)', borderLeft: '1px solid rgba(244,237,221,0.2)'}}
             className="fire-stats">
          {[
            ["$189,943", "Total FIRE distributed", "Spring + Fall 2025"],
            ["19", "Indigenous-led projects funded", "Across two intakes"],
            ["93", "Applications received", "↑ 35% from 2024"],
            ["4", "Evaluation criteria", "Relationality · Resurgence · Impact · Expectations"],
          ].map(([n, l, f], i) => (
            <div key={i} style={{
              padding: 32,
              borderRight: '1px solid rgba(244,237,221,0.2)',
              borderBottom: '1px solid rgba(244,237,221,0.2)',
              minHeight: 200,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <span className="mono" style={{fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ember-soft)'}}>{l}</span>
              <div className="serif" style={{fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 0.95, fontWeight: 500, letterSpacing: '-0.02em'}}>{n}</div>
              <div className="mono" style={{fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.6}}>{f}</div>
            </div>
          ))}
          <style>{`
            @media (max-width: 900px) { .fire-stats { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 540px) { .fire-stats { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>

        {/* Tabs */}
        <div style={{marginBottom: 32}}>
          <div className="mono" style={{fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(244,237,221,0.5)', marginBottom: 14}}>Select a grant intake to view recipients →</div>
          <div style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}>
            <button onClick={() => setRun("spring")} className="pill"
              style={{
                background: run === "spring" ? 'var(--ember)' : 'transparent',
                color: run === "spring" ? 'white' : 'var(--cream)',
                borderColor: run === "spring" ? 'var(--ember)' : 'rgba(244,237,221,0.3)'
              }}>
              Spring 2025 · Run 1 · 8 funded
            </button>
            <button onClick={() => setRun("fall")} className="pill"
              style={{
                background: run === "fall" ? 'var(--ember)' : 'transparent',
                color: run === "fall" ? 'white' : 'var(--cream)',
                borderColor: run === "fall" ? 'var(--ember)' : 'rgba(244,237,221,0.3)'
              }}>
              Fall 2025 · Run 2 · 11 funded
            </button>
          </div>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 32}} className="fire-grid">
          {run === "spring" ? (
            <div style={{alignSelf: 'start', position: 'sticky', top: 140, display: 'flex', flexDirection: 'column', gap: 12}}>
              <img
                src="assets/tipi-confessions-event.png?v=2"
                alt="Tipi Confessions Speaker Series — Ashleigh Cardinal"
                style={{width: '100%', borderRadius: 4, display: 'block'}}
              />
              <div className="mono" style={{
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(244,237,221,0.65)',
                textAlign: 'center',
                lineHeight: 1.5,
              }}>
                Tipi Confessions · Speaker Series<br/>
                <a href="https://www.tipiconfessions.com/" target="_blank" rel="noopener noreferrer" style={{color: 'rgba(244,237,221,0.45)', textDecoration: 'none'}}>tipiconfessions.com</a>
              </div>
            </div>
          ) : (
            <div style={{alignSelf: 'start', position: 'sticky', top: 140, padding: '16px 0', display: 'flex', flexDirection: 'column', gap: 16}}>
              <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: 360,
                margin: '0 auto',
                aspectRatio: '9/16',
                background: '#000',
                borderRadius: 12,
                overflow: 'hidden',
                boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
                border: '1px solid rgba(244,237,221,0.15)',
              }}>
                <iframe
                  src="https://www.tiktok.com/embed/v2/7630285960760085768?lang=en-US&autoplay=0&music_info=0&description=0"
                  title="Qulliq carving workshop · @ikumaju"
                  allow="encrypted-media;"
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    display: 'block',
                  }}
                />
              </div>
              <div className="mono" style={{
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(244,237,221,0.65)',
                textAlign: 'center',
                lineHeight: 1.5,
                marginTop: 4,
              }}>
                Video · Qulliq carving workshop<br/>
                <span style={{color: 'rgba(244,237,221,0.45)'}}>@ikumaju · TikTok</span>
              </div>
            </div>
          )}
          <div>
            {data.map((d, i) => (
              <div key={i} style={{
                padding: '20px 0',
                borderBottom: '1px solid rgba(244,237,221,0.15)',
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 130px',
                  gap: 16,
                  alignItems: 'baseline',
                }}>
                  <div>
                    <div style={{fontSize: 17, fontWeight: 600, color: 'white', lineHeight: 1.25}}>{d.name}</div>
                    <div style={{fontSize: 14, color: 'white', marginTop: 4, lineHeight: 1.4}}>{d.project}</div>
                  </div>
                  <div className="mono" style={{textAlign: 'right', fontSize: 16, color: 'var(--ember-soft)', fontWeight: 600, letterSpacing: '0.02em'}}>{fmt(d.award)}</div>
                </div>
                {d.note && (
                  <div style={{
                    fontSize: 13.5,
                    color: 'rgba(255,255,255,0.78)',
                    marginTop: 10,
                    lineHeight: 1.55,
                    paddingLeft: 12,
                    borderLeft: '2px solid var(--ember)',
                    maxWidth: '60ch',
                  }}>
                    {d.note}
                  </div>
                )}
              </div>
            ))}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 130px',
              gap: 16,
              padding: '16px 0',
              marginTop: 8,
              borderTop: '2px solid rgba(244,237,221,0.4)',
              alignItems: 'baseline',
            }}>
              <div className="mono" style={{fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'white'}}>Total — {run === "spring" ? "Spring" : "Fall"} 2025</div>
              <div className="mono" style={{textAlign: 'right', fontSize: 16, color: 'var(--ember-soft)', fontWeight: 700}}>{fmt(total)}</div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .fire-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

Object.assign(window, { FireSection });
