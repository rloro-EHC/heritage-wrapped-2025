// letters.jsx — Letter from the ED + Board Chair

function Letters() {
  const [active, setActive] = React.useState("chair");

  const letters = {
    chair: {
      tab: "Board Chair",
      author: "Jessica Burylo",
      role: "Chair, Board of Directors",
      paragraphs: [
        "On behalf of the Board of Directors, it is my privilege to share this report with you. 2025 was a year that showed us, in concrete terms, what it means for heritage to matter to a city.",
        "Record grant applications. A busiest-ever summer of public programming. Stories connecting across languages, communities, and generations. A growing chorus of Edmontonians who recognize that heritage is not nostalgia — it is the infrastructure through which belonging is built and shared.",
        "This year, our work meant supporting a record-breaking grants season, deepening engagement with Indigenous-led programming through FIRE, and preparing the groundwork for meaningful conversations with City Council about the funding EHC and Edmonton's heritage sector need to meet growing community demand.",
        "Edmonton is a city that is growing, changing, and — through the work of this organization and its partners — increasingly learning to honour where it has come from as it shapes where it is going.",
      ],
    },
    ed: {
      tab: "Executive Director",
      author: "David Ridley",
      role: "Executive Director, Edmonton Heritage Council",
      paragraphs: [
        "2025 was a transformative year for the Edmonton Heritage Council. The data tells a story we are proud to share: record grant applications, record community engagement, and deepened impact across every program.",
        "We received 146 HCIP applications — the highest in program history, a 49% increase from 2024. While our success rate decreased to 28% due to limited funding relative to demand, we supported 42 outstanding projects with $724,346.63 in HCIP grants. Across both HCIP and FIRE, 61 projects were funded from 239 applications.",
        "The data tells a powerful story about equity and access: 72% of our grants went to equity-deserving communities, representing 47% of total funding. We supported heritage work in over eight languages — from Cree to Mandarin, from Arabic to French.",
        "ECAMP had its busiest summer to date, with 365 guests joining heritage walking tours and over 4,000 interactions at our K-Days exhibit. We launched the Clock In podcast and published 17 Labour Stories, centering work as a site of resistance, creativity, and belonging.",
        "We are not just preserving heritage — we are bringing it alive in neighbourhoods, at festivals, and in the digital spaces where Edmontonians already gather.",
      ],
    },
  };

  const photos = {
    ed: "assets/david-ridley.jpg",
    chair: "assets/jessica-burylo.webp",
  };

  const L = letters[active];
  const photo = photos[active];

  return (
    <section className="section section--tight" id="letters">
      <div style={{display: 'flex', gap: 12, marginBottom: 40}}>
        {Object.entries(letters).map(([key, l]) => (
          <button
            key={key}
            className={"pill" + (active === key ? " is-active" : "")}
            onClick={() => setActive(key)}
          >
            Letter from the {l.tab}
          </button>
        ))}
      </div>

      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start'}}
           className="letter-grid">
        {photo ? (
          <div style={{aspectRatio: '4/5', overflow: 'hidden', borderRadius: 4, background: 'var(--cream-deep)'}}>
            <img src={photo} alt={L.author + ' portrait'} style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: active === 'ed' ? 'center 30%' : 'center top', display: 'block'}} />
          </div>
        ) : (
          <div className="img-ph" style={{aspectRatio: '4/5'}}>
            {L.author} portrait
          </div>
        )}
        <div>
          <span className="eyebrow">From the {L.tab}</span>
          <h2 style={{marginTop: 16, marginBottom: 24}}>
            {L.paragraphs[0].split('.')[0]}.
          </h2>
          <div style={{fontSize: 16, lineHeight: 1.6, color: 'var(--ink-soft)'}}>
            {L.paragraphs.slice(1).map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div style={{marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--rule)'}}>
            <div style={{fontFamily: 'var(--display)', fontSize: 22, fontStyle: 'italic'}}>
              {L.author}
            </div>
            <div className="mono" style={{fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-mute)', marginTop: 4}}>
              {L.role}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .letter-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { Letters });
