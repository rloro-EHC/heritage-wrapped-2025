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
        "2025 was a transformative year for the Edmonton Heritage Council. The data tells a story we are proud to share: record numbers of applications, record levels of community engagement, and increased impact across every program.",
        "In terms of grant applications alone, we received the highest number in the Heritage Community Investment Program's history: 146 applications, a 49% increase from 2024. This demonstrates growing recognition of the importance of heritage in Edmonton's cultural fabric. While our success rate decreased to 28% due to limited funding relative to demand, we supported 42 outstanding projects with $724,346.63 in HCIP grants alone.",
        "The data also tells a powerful story about equity and access: 72% of our grants went to equity-deserving communities, representing 47% of our total funding across all programs. We supported heritage work in different languages, from Cree to Mandarin, from Arabic to French. Through FIRE (Funding Indigenous Resurgence in Edmonton) and targeted, focussed support for newcomer communities, we demonstrated that heritage funding can be a tool for equity, belonging, and cultural reclamation.",
        "ECAMP had its busiest summer to date, with 365 guests joining heritage walking tours and over 4,000 interactions at our K-Days exhibit. We launched the Clock In podcast and published 10 Labour Stories, centering work as a site of resistance, creativity, and belonging. We are preserving heritage and we are bringing it alive in neighbourhoods, at festivals, and in digital spaces where Edmontonians already gather.",
        "As we prepare for conversations with City Council on the 2027–2030 budget cycle, we speak of heritage not as a nice-to-have, but as part of Edmonton's essential infrastructure. Heritage work creates belonging, supports economic resilience, and strengthens the social fabric of our city. This report shares the evidence of that impact.",
        "Thank you to our funders, partners, grant recipients, board members, and staff for making this work possible.",
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
