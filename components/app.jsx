// app.jsx — main entry, composes all sections

function App() {
  return (
    <>
      <SqsHeader />
      <Hero />
      <MicrositeAnchorNav />
      <HeroTracks />
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
      <ClosingSection />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
