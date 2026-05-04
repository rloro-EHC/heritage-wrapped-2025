// app.jsx — main entry, composes all sections

const SECTIONS = [
  { id: "letters", label: "Letters" },
  { id: "numbers", label: "By the Numbers" },
  { id: "moments", label: "Top Moments" },
  { id: "grants", label: "Grants" },
  { id: "fire", label: "FIRE" },
  { id: "ecamp", label: "ECAMP" },
  { id: "kpis", label: "Strategic Progress" },
  { id: "partnerships", label: "Partnerships" },
  { id: "financials", label: "Financials" },
  { id: "ahead", label: "Looking Ahead" },
  { id: "people", label: "People" },
];

function App() {
  const [activeId, setActiveId] = React.useState("letters");

  React.useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + 200;
      let current = SECTIONS[0].id;
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= scrollY) current = s.id;
      }
      setActiveId(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <SqsHeader />
      <Hero />
      <MicrositeAnchorNav sections={SECTIONS} activeId={activeId} />
      <Letters />
      <ByTheNumbers />
      <TopMoments />
      <Grants />
      <FireSection />
      <EcampSection />
      <Kpis />
      <Partnerships />
      <Financials />
      <LookingAhead />
      <People />
      <SqsFooter />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
