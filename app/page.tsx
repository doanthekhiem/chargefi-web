import {
  CTA,
  FAQ,
  Features,
  Footer,
  Header,
  HeroSection,
  HowItWorks,
  Partners,
  Roadmap
} from "./components";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <HowItWorks />
      <Features />
      <Roadmap />
      <Partners />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
