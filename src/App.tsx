import { Header, Footer } from '@/components/layout';
import { Hero, Values, WhoWeServe, Stats, Services, CTA } from '@/components/sections';
import { SmoothScroll, BlurOverlay } from '@/components/common';

export function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-bg-main">
        <Header />

        <main>
          <Hero />
          <Values />
          <WhoWeServe />
          <Stats />
          <Services />
          <CTA />
        </main>

        <Footer />

        <BlurOverlay position="bottom" />
      </div>
    </SmoothScroll>
  );
}

export default App;
