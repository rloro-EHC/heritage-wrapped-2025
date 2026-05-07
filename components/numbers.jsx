// numbers.jsx — Part 1: By the Numbers

function ByTheNumbers() {
  return (
    <section className="section" id="numbers" style={{ paddingTop: 80 }}>
      <div className="section-hd">
        <div className="num">Part 01<span>By the Numbers</span></div>
        <div>
          <h2>Heritage demand is growing faster than available funding.</h2>
          <p className="lede" style={{ marginTop: 24 }}>
            A year of record-breaking growth and impact across grants, programming,
            and community engagement.
          </p>
        </div>
      </div>

      {/* State of Heritage */}
      <div style={{ marginBottom: 64 }}>
        <span className="eyebrow eyebrow-ink">01.1 — State of Heritage</span>
        <h3 style={{ marginTop: 12, marginBottom: 32, maxWidth: '20ch' }}>
          What Edmontonians say about heritage.
        </h3>
        <div className="stat-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <div className="cell tone-prairie" style={{ backgroundColor: "rgb(81, 127, 163)" }}>
            <span className="stat-lbl">Sector value</span>
            <div className="stat-num">77<span style={{ fontSize: '0.5em' }}>%</span></div>
            <div className="stat-cap">agree Edmonton's heritage sector is valuable</div>
          </div>
          <div className="cell" style={{ background: 'var(--sky-pale)' }}>
            <span className="stat-lbl">Economic impact</span>
            <div className="stat-num">68<span style={{ fontSize: '0.5em' }}>%</span></div>
            <div className="stat-cap">agree it has a positive impact on Edmonton's economy</div>
          </div>
          <div className="cell tone-ember">
            <span className="stat-lbl">Belonging</span>
            <div className="stat-num">67<span style={{ fontSize: '0.5em' }}>%</span></div>
            <div className="stat-cap">agree heritage brings our city together</div>
          </div>
        </div>
        <p style={{ marginTop: 24, color: 'var(--ink-soft)', fontSize: 16, lineHeight: 1.55, maxWidth: '60ch' }}>
          Nearly half (48%) of Edmontonians agree it is becoming more difficult to connect culturally with others — making heritage investment more important than ever.
        </p>
        <p className="mono" style={{ marginTop: 12, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-mute)' }}>
          Source — 2025 Heritage Pulse Survey, conducted by YStation Research &amp; Communications
        </p>
      </div>

      {/* Investment in Community */}
      <div style={{ marginBottom: 64 }}>
        <span className="eyebrow eyebrow-ink">01.2 — Our Investment in Community</span>
        <h3 style={{ marginTop: 12, marginBottom: 32 }}>
          $914,290 distributed to 61 funded projects.
        </h3>

        <div className="stat-grid">
          <div className="cell tone-prairie span-2" style={{ minHeight: 280 }}>
            <span className="stat-lbl">Total Heritage Grants</span>
            <div>
              <div className="stat-num" style={{ fontSize: 'clamp(72px, 9vw, 140px)' }}>$914,290</div>
              <div className="stat-cap" style={{ marginTop: 12, maxWidth: '40ch' }}>
                HCIP and FIRE combined — the largest annual grant distribution in EHC history.
              </div>
            </div>
            <div className="stat-foot">HCIP $724,347 · FIRE $189,943</div>
          </div>
          <div className="cell">
            <span className="stat-lbl">HCIP & FIRE Applications</span>
            <div className="stat-num">239</div>
            <div className="stat-foot">Record high</div>
          </div>
          <div className="cell tone-cream">
            <span className="stat-lbl">Projects funded</span>
            <div className="stat-num">61</div>
            <div className="stat-foot">42 HCIP · 19 FIRE</div>
          </div>

          <div className="cell">
            <span className="stat-lbl">Increase in HCIP applications</span>
            <div className="stat-num med">↑ 49%</div>
            <div className="stat-foot">vs. 2024 — highest in program history</div>
          </div>
          <div className="cell">
            <span className="stat-lbl">Increase in FIRE applications</span>
            <div className="stat-num med">↑ 35%</div>
            <div className="stat-foot">93 applications across two intakes</div>
          </div>
          <div className="cell" style={{ background: 'var(--sky-pale)' }}>
            <span className="stat-lbl">Languages supported</span>
            <div className="stat-num med">8+</div>
            <div className="stat-foot">Cree · Michif · Mandarin · French · Arabic · Korean · Somali · Vietnamese</div>
          </div>

          <div className="cell tone-prairie span-2" style={{ borderTop: '4px solid var(--brick)' }}>
            <span className="stat-lbl">Equity-deserving communities</span>
            <div style={{ display: 'flex', gap: 32, alignItems: 'baseline', flexWrap: 'wrap' }}>
              <div>
                <div className="stat-num med">72%</div>
                <div className="stat-foot">of grants</div>
              </div>
              <div>
                <div className="stat-num med">47%</div>
                <div className="stat-foot">of total funding</div>
              </div>
            </div>
            <div className="stat-cap" style={{ maxWidth: '44ch' }}>
              Indigenous · Afro-Franco · Chinese · Palestinian · Caribbean · Jewish · LGBTQ2S+ communities funded.
            </div>
          </div>
          <div className="cell">
            <span className="stat-lbl">Community Heritage Activation Support (CHAS)</span>
            <div className="stat-num sm">$58,905</div>
            <div className="stat-foot">24 Initiatives Supported</div>
          </div>
        </div>
      </div>

      {/* Reach */}
      <div style={{ marginBottom: 0 }}>
        <span className="eyebrow eyebrow-ink">01.3 — Community Reach & Engagement</span>
        <h3 style={{ marginTop: 12, marginBottom: 24 }}>
          From walking tours to podcasts — heritage met Edmontonians where they live.
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'start' }} className="reach-grid">
          <figure style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ aspectRatio: '4 / 3', position: 'relative', overflow: 'hidden', background: 'var(--paper-warm)' }}>
              <img src={(typeof window !== 'undefined' && window.__resources && window.__resources.kDaysExhibit) || "assets/k-days-exhibit.jpg?v=2"} alt="K-Days heritage exhibit, summer 2025 — Edmonton City as Museum Project booth with visitors viewing storyboards" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <figcaption className="mono" style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-mute)' }}>
              K-Days heritage exhibit · Summer 2025
            </figcaption>
          </figure>
          <div className="stat-grid" style={{ gridTemplateColumns: '1fr', alignSelf: 'stretch' }}>
            <div className="cell" style={{ minHeight: 0, padding: 24 }}>
              <span className="stat-lbl">K-Days · Walking Tours · Trivia Night · Momentary Museum</span>
              <div className="stat-num sm">5,000+</div>
              <div className="stat-foot">Edmontonians engaged in person</div>
            </div>
            <div className="cell" style={{ minHeight: 0, padding: 24 }}>
              <span className="stat-lbl">Indigenous Spotlight Series</span>
              <div className="stat-num sm">130+</div>
              <div className="stat-foot">Speaker series participants</div>
            </div>
            <div className="cell" style={{ minHeight: 0, padding: 24 }}>
              <span className="stat-lbl">Operational Grant orgs</span>
              <div className="stat-num sm">278,576</div>
              <div className="stat-foot">Reached through funded organizations</div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 720px) {
            .reach-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>);

}

Object.assign(window, { ByTheNumbers });