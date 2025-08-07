import {
  Header,
  HeroSection,
  WhatIsChargeFi,
  HowItWorks,
  Features,
  Tokenomics,
  Roadmap,
  Partners,
  FAQ,
  CTA,
  Footer
} from './components';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <WhatIsChargeFi />
      <HowItWorks />
      <Features />
      <Tokenomics />
      <Roadmap />
      <Partners />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
