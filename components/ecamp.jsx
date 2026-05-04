// ecamp.jsx — Part 3: ECAMP Edmonton City as Museum Project

const LABOUR_STORIES = [
  { title: "Making Home: Homemakers' Clubs in Life on Reserve", author: "", date: "Jan 14", theme: "Indigenous Domesticity", url: "https://citymuseumedmonton.ca/2025/01/14/making-home-the-role-of-homemakers-clubs-in-life-on-reserve/" },
  { title: "The Company and the Combination: Collective Bargaining at the River's Edge", author: "", date: "Jan 28", theme: "Labour & Organizing", url: "https://citymuseumedmonton.ca/2025/01/28/the-company-and-the-combination-collective-bargaining-at-the-rivers-edge/" },
  { title: "Women Wanted: To Work and to Win — The Grads Take Flight", author: "", date: "Feb 11", theme: "Sport & Gender", url: "https://citymuseumedmonton.ca/2025/02/11/women-wanted-to-work-and-win-the-grads-take-flight/" },
  { title: "Hard Times in the Alberta Penitentiary, 1906–1920", author: "", date: "Feb 25", theme: "Carceral History", url: "https://citymuseumedmonton.ca/2025/02/25/hard-times-in-the-alberta-penitentiary-1906-1920/" },
  { title: "Laura Lindsay, First Lady of Daytime TV in Alberta (1955–68)", author: "Katherine Koller", date: "Mar 11", theme: "Gender & Television", url: "https://citymuseumedmonton.ca/2025/03/11/laura-lindsay-first-lady-of-daytime-tv-in-alberta-from-1955-68/" },
  { title: "Station of Broken Promises", author: "", date: "Mar 25", theme: "Migration & Memory", url: "https://citymuseumedmonton.ca/2025/03/25/station-of-broken-promises/" },
  { title: "More Than a Prize Scholar or Bookworm: Dr. Geneva Misener", author: "Pamela Young", date: "May 20", theme: "Women in Academia", url: "https://citymuseumedmonton.ca/2025/05/20/more-than-a-prize-scholar-or-bookworm-the-leadership-and-legacy-of-dr-geneva-misener/" },
  { title: "She Can Move Mountains: Tessie Oliva's Impact on Nursing in Edmonton", author: "Giselle General", date: "Jun 03", theme: "Nursing & Immigration", url: "https://citymuseumedmonton.ca/2025/06/03/she-can-move-mountains-tessie-olivas-impact-on-the-nursing-sector-in-edmonton/" },
  { title: "Hot Wheelz: Raising a Middle Finger and Building World-Class Accessible Drag", author: "Kels Valenzuela Delamarter", date: "Jun 17", theme: "Disability & Performance", url: "https://citymuseumedmonton.ca/2025/06/17/hot-wheelz-raising-a-middle-finger-and-building-world-class-accessible-drag/" },
  { title: "Happyland", author: "", date: "Jul 02", theme: "Place & Memory", url: "https://citymuseumedmonton.ca/2025/07/02/happyland/" },
  { title: "James Big Jim Stone, The People's Commander", author: "Tiffany Chan", date: "Jul 15", theme: "Military Leadership", url: "https://citymuseumedmonton.ca/2025/07/15/james-big-jim-stone-the-peoples-commander/" },
  { title: "Alberta's Government, the Mainframe Computer, and Women's Work", author: "Cathy Roy", date: "Jul 29", theme: "Technology & Labour", url: "https://citymuseumedmonton.ca/2025/07/29/albertas-government-the-mainframe-computer-and-womens-work/" },
  { title: "Queen of the Link: Margaret Littlewood", author: "Bruce Cinnamon", date: "Aug 12", theme: "Aviation & Gender", url: "https://citymuseumedmonton.ca/2025/08/12/queen-of-the-link-margaret-littlewood/" },
  { title: "Bridging Alberta: Dilip Dasmohapatra's YEG Origin Story", author: "Soni Dasmohapatra", date: "Aug 27", theme: "Engineering & Immigration", url: "https://citymuseumedmonton.ca/2025/08/27/bridging-alberta-dilip-dasmohapatras-yeg-origin-story/" },
  { title: "My Grandma Going Out into the World: Working at Woodward's", author: "Harma-Mae Smit", date: "Sep 09", theme: "Retail & Immigration", url: "https://citymuseumedmonton.ca/2025/09/09/my-grandma-going-out-into-the-world-working-at-woodwards/" },
  { title: "More Than Half a Day: Child Labour at the St. Albert Youville Indian Residential School", author: "Crystal Gail Fraser", date: "Sep 30", theme: "Indigenous Resistance", url: "https://citymuseumedmonton.ca/2025/09/30/more-than-half-a-day-child-labour-at-the-st-albert-youville-indian-residential-school/" },
  { title: "Chinese Hand Laundries: A History of the First Chinese Entrepreneurs in Edmonton", author: "", date: "Dec 03", theme: "Chinese Heritage", url: "https://citymuseumedmonton.ca/2025/12/03/chinese-hand-laundries-a-history-of-the-first-chinese-entrepreneurs-in-edmonton/" },
];

function EcampSection() {
  const [hovered, setHovered] = React.useState(null);

  return (
    <section className="section" id="ecamp">
      <div className="section-hd">
        <div className="num">Part 04<span>ECAMP</span></div>
        <div>
          <h2>Edmonton City <span style={{fontStyle:'italic'}}>as Museum</span> Project.</h2>
          <p className="lede" style={{marginTop: 24}}>
            In 2025, ECAMP centred its storytelling on labour as heritage — and had its busiest summer to date.
          </p>
        </div>
      </div>

      {/* Pull quote */}
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', marginBottom: 80}}
           className="ecamp-pull">
        <div>
          <span className="eyebrow">Heritage of Work</span>
          <p className="pull" style={{marginTop: 16}}>
            From drag performance to mainframe computing, from nursing advocacy to department store retail
            — work as a site of <span style={{color: 'var(--brick)', fontStyle: 'italic'}}>resistance, creativity, and belonging</span>.
          </p>
        </div>
        <div className="img-ph" style={{aspectRatio: '4/3'}}>
          Hero image · Clock In podcast recording session
        </div>
      </div>

      {/* Clock In Podcast — featured */}
      <div className="stat-grid" style={{gridTemplateColumns: '1.6fr 1fr', marginBottom: 24}}>
        <div className="cell tone-prairie">
          <span className="stat-lbl">Clock In Podcast — launched 2025</span>
          <h3 style={{color:'var(--cream)', maxWidth:'24ch'}}>
            Hosted by musician and postal worker Jay Gilday, exploring labour as heritage.
          </h3>
          <p style={{color: 'rgba(255,255,255,0.85)', fontSize: 14, lineHeight: 1.55, marginTop: 16, maxWidth: '60ch'}}>
            ECAMP launched <em>Clock In</em>, exploring labour as a form of heritage and a lens into Edmonton's social and cultural history.
            The series featured 6 episodes (165 minutes of audio) and brought together <strong style={{color:'var(--cream)'}}>14 storytellers</strong> in intergenerational conversations
            about work, identity, and belonging. The podcast reached audiences through both digital platforms and CJSR radio broadcast,
            generating 935 direct plays alongside an estimated 20,000 listeners through repeated on-air programming.
          </p>
          <div style={{display: 'flex', gap: 32, flexWrap: 'wrap', marginTop: 20}}>
            <div>
              <div className="stat-num sm">6</div>
              <div className="mono" style={{fontSize: 10, letterSpacing: '0.12em', opacity: 0.7}}>EPISODES · 165 MIN</div>
            </div>
            <div>
              <div className="stat-num sm">935</div>
              <div className="mono" style={{fontSize: 10, letterSpacing: '0.12em', opacity: 0.7}}>DIRECT PLAYS</div>
            </div>
            <div>
              <div className="stat-num sm">20,000+</div>
              <div className="mono" style={{fontSize: 10, letterSpacing: '0.12em', opacity: 0.7}}>CJSR LISTENERS</div>
            </div>
          </div>
        </div>
        <div className="cell" style={{background:'var(--sky-pale)', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <span className="stat-lbl">Storytellers</span>
          <div>
            <div className="stat-num" style={{fontSize: 'clamp(96px, 11vw, 168px)', lineHeight: 0.9}}>14</div>
            <div className="stat-cap" style={{marginTop: 12, fontSize: 15, lineHeight: 1.45, maxWidth: '28ch'}}>
              In intergenerational conversation with Jay Gilday about work, identity, and belonging — the voices that carry <em>Clock In</em>.
            </div>
          </div>
        </div>
      </div>

      {/* Summer programming — expanded with descriptive blurbs */}
      <div style={{marginTop: 64}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24, flexWrap: 'wrap', gap: 16}}>
          <div>
            <span className="eyebrow eyebrow-ink">03.2 — Summer Programming</span>
            <h3 style={{marginTop: 8}}>Busiest season to date.</h3>
          </div>
          <div className="mono" style={{fontSize: 12, color: 'var(--ink-mute)', letterSpacing: '0.08em'}}>
            5,000+ EDMONTONIANS ENGAGED IN PERSON
          </div>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24}} className="ecamp-progs">
          {/* Walking Tours */}
          <div style={{background: 'var(--paper)', border: '1px solid var(--rule)', padding: 28, borderRadius: 4}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16}}>
              <span className="stat-lbl">Heritage Walking Tours</span>
              <span className="mono" style={{fontSize: 11, color: 'var(--prairie)', letterSpacing: '0.08em'}}>SUMMER 2025</span>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '120px 1fr', gap: 16, alignItems: 'center', marginBottom: 16}}>
              <div className="img-ph" style={{aspectRatio: '1/1', fontSize: 10, padding: 6, textAlign: 'center'}}>Walking tour photo</div>
              <div>
                <div className="stat-num" style={{fontSize: 'clamp(48px, 5vw, 72px)', lineHeight: 0.95, fontWeight: 600, color: 'var(--ink)'}}>365</div>
                <div style={{fontSize: 13, color: 'var(--ink-mute)', marginTop: 4, fontWeight: 500}}>guests · nearly all tours sold out</div>
              </div>
            </div>
            <p style={{fontSize: 14, lineHeight: 1.55, color: 'var(--ink-soft)'}}>
              ECAMP commissioned two walking tours from community heritage practitioners and provided two early-career heritage
              practitioners with full-time summer employment delivering them. The tours moved through Strathcona, McCauley, and the
              River Valley — and were covered by GlobalTV, CBC Radio, AUPE, and the Edmonton Journal.
              Abigail Struthers explored connections with the McCauley neighbourhood; her story will be published in
              <em> Boyle McCauley News</em> and ECAMP.
            </p>
          </div>

          {/* K-Days */}
          <div className="cell tone-ember" style={{padding: 28, borderRadius: 4}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16}}>
              <span className="stat-lbl">K-Days Heritage Exhibit</span>
              <span className="mono" style={{fontSize: 11, opacity: 0.7, letterSpacing: '0.08em'}}>K-DAYS GROUNDS</span>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '120px 1fr', gap: 16, alignItems: 'center', marginBottom: 16}}>
              <div className="img-ph tone-dark" style={{aspectRatio: '1/1', fontSize: 10, padding: 6, textAlign: 'center', borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.7)'}}>K-Days photo</div>
              <div>
                <div className="stat-num" style={{fontSize: 'clamp(48px, 5vw, 72px)', lineHeight: 0.95, fontWeight: 600, color: 'white'}}>4,000+</div>
                <div style={{fontSize: 13, opacity: 0.85, marginTop: 4, fontWeight: 500}}>interactions · work-themed display</div>
              </div>
            </div>
            <p style={{fontSize: 14, lineHeight: 1.55, opacity: 0.9}}>
              The K-Days heritage exhibit returned with a work-themed display tied to ECAMP's 2025 Heritage of Work focus —
              featuring reusable materials sourced from local builders and businesses, and staffed with volunteer support.
              The exhibit met Edmontonians where they already gather, threading labour heritage into the rhythm of the
              city's biggest summer festival.
            </p>
          </div>

          {/* Churchill Square */}
          <div style={{background: 'var(--cream-deep)', border: '1px solid var(--rule)', padding: 28, borderRadius: 4}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16}}>
              <span className="stat-lbl">Churchill Square Sound Exhibit</span>
              <span className="mono" style={{fontSize: 11, color: 'var(--prairie)', letterSpacing: '0.08em'}}>AUG 19, 2025</span>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '120px 1fr', gap: 16, alignItems: 'center', marginBottom: 16}}>
              <div className="img-ph" style={{aspectRatio: '1/1', fontSize: 10, padding: 6, textAlign: 'center'}}>Sound exhibit photo</div>
              <div>
                <div className="stat-num" style={{fontSize: 'clamp(48px, 5vw, 72px)', lineHeight: 0.95, fontWeight: 600, color: 'var(--ink)'}}>200+</div>
                <div style={{fontSize: 13, color: 'var(--ink-mute)', marginTop: 4, fontWeight: 500}}>visitors including Mayor Sohi</div>
              </div>
            </div>
            <p style={{fontSize: 14, lineHeight: 1.55, color: 'var(--ink-soft)'}}>
              ECAMP summer student Emily Horrill created a pop-up sound exhibit in Churchill Square on August 19th, engaging
              over 200 visitors including Mayor Sohi. The installation exemplifies ECAMP's commitment to bringing heritage into
              unexpected public spaces — and its investment in early-career practitioners shaping how heritage gets staged in
              the city.
            </p>
          </div>

          {/* Momentary Museum */}
          <div className="cell tone-prairie" style={{padding: 28, borderRadius: 4}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16}}>
              <span className="stat-lbl">Momentary Museum</span>
              <span className="mono" style={{fontSize: 11, opacity: 0.7, letterSpacing: '0.08em'}}>4 EPL BRANCHES</span>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '120px 1fr', gap: 16, alignItems: 'center', marginBottom: 16}}>
              <div className="img-ph tone-dark" style={{aspectRatio: '1/1', fontSize: 10, padding: 6, textAlign: 'center', borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.7)'}}>Momentary Museum photo</div>
              <div>
                <div className="stat-num" style={{fontSize: 'clamp(48px, 5vw, 72px)', lineHeight: 0.95, fontWeight: 600, color: 'white'}}>400+</div>
                <div style={{fontSize: 13, opacity: 0.85, marginTop: 4, fontWeight: 500}}>participants · 6 partnerships</div>
              </div>
            </div>
            <p style={{fontSize: 14, lineHeight: 1.55, opacity: 0.9, marginBottom: 12}}>
              Momentary Museum transforms accessible public spaces — including Edmonton Public Library branches — into
              pop-up museums where Edmontonians contribute their own objects, stories, and perspectives to temporary,
              community-based exhibitions. Delivered in partnership with the Royal Alberta Museum, the Provincial Archives
              of Alberta, and EPL.
            </p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8, fontSize: 12, opacity: 0.85}} className="mono">
              <div>STANLEY MILNER · 136</div>
              <div>MILL WOODS · 150+</div>
              <div>LOIS HOLE · 76</div>
              <div>CAPILANO · 46+</div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .ecamp-progs { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>

      {/* Labour stories list */}
      <div style={{marginTop: 80}}>
        <span className="eyebrow eyebrow-ink">03.1 — Labour Stories Published</span>
        <h3 style={{marginTop: 12, marginBottom: 32}}>17 stories. 9 centre women's labour. All published in 2025.</h3>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 380px', gap: 48}} className="stories-grid">
          <div>
            {LABOUR_STORIES.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '50px 1fr 180px 70px 24px',
                  gap: 16,
                  padding: '20px 0',
                  borderBottom: '1px solid var(--rule-soft)',
                  alignItems: 'baseline',
                  cursor: 'pointer',
                  background: hovered === i ? 'var(--paper)' : 'transparent',
                  transition: 'background 0.15s, padding 0.15s',
                  paddingLeft: hovered === i ? 16 : 0,
                  paddingRight: hovered === i ? 16 : 0,
                  marginLeft: hovered === i ? -16 : 0,
                  marginRight: hovered === i ? -16 : 0,
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <div className="mono" style={{fontSize: 11, color: 'var(--ink-mute)'}}>{String(i+1).padStart(2,'0')}</div>
                <div>
                  <div className="serif" style={{fontSize: 20, lineHeight: 1.2, fontWeight: 500, color: hovered === i ? 'var(--brick)' : 'var(--ink)', transition: 'color 0.15s'}}>{s.title}</div>
                  <div style={{fontSize: 13, color: 'var(--ink-mute)', marginTop: 4}}>by {s.author}</div>
                </div>
                <div className="mono" style={{fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--prairie)'}}>{s.theme}</div>
                <div className="mono" style={{fontSize: 11, color: 'var(--ink-mute)', textAlign: 'right'}}>{s.date}</div>
                <div style={{fontSize: 16, color: hovered === i ? 'var(--brick)' : 'var(--ink-mute)', textAlign: 'right', transition: 'color 0.15s, transform 0.15s', transform: hovered === i ? 'translateX(2px)' : 'translateX(0)'}}>↗</div>
              </a>
            ))}
          </div>

          <div style={{position: 'sticky', top: 140, alignSelf: 'start'}}>
            <div className="img-ph" style={{aspectRatio: '4/5', marginBottom: 16}}>
              {hovered !== null ? `Story ${hovered + 1}` : "Story image"} · {hovered !== null ? LABOUR_STORIES[hovered].title.slice(0, 40) : "hover to preview"}
            </div>
            <div style={{padding: 16, background: 'var(--paper)', border: '1px solid var(--rule)', borderRadius: 4}}>
              <div className="mono" style={{fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--prairie)'}}>Key Themes</div>
              <div style={{fontSize: 14, marginTop: 12, lineHeight: 1.5, color: 'var(--ink-soft)'}}>
                Women's work & visibility · immigrant labour & advocacy · bodies & labour · community building as work.
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .stories-grid { grid-template-columns: 1fr !important; }
            .ecamp-pull { grid-template-columns: 1fr !important; gap: 32px !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

Object.assign(window, { EcampSection });
