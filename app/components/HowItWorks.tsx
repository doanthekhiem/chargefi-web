export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Plug in",
      description: "Charge your smartphone or EV as usual."
    },
    {
      number: "02",
      title: "App Tracks",
      description: "ChargeFi app verifies charged power via smart sensors."
    },
    {
      number: "03",
      title: "Proof-of-Charge",
      description: "AI & blockchain confirm real-time charging (no cheating)."
    },
    {
      number: "04",
      title: "Earn $CHARGE",
      description: "Receive crypto rewards based on verified energy usage."
    },
    {
      number: "05",
      title: "Use Your Tokens",
      description: "Spend, stake, send, or swap on DeFi."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-glow">HOW IT WORKS</h2>
          <p className="text-lg sm:text-xl text-gray-300">Step-by-step</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="w-full h-64 sm:h-80 lg:h-96 bg-gray-800/30 rounded-lg border border-gray-700 flex items-center justify-center">
              <div className="text-center">
                <svg width="80" height="80" className="sm:w-100 sm:h-100 lg:w-120 lg:h-120 mx-auto mb-4" viewBox="0 0 24 24" fill="none" className="text-primary">
                  <path d="M7 2L17 2L17 22L7 22L7 2Z" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="18" r="1" fill="currentColor"/>
                  <path d="M12 6L12 10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 14L12 18" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <div className="text-primary font-semibold text-lg sm:text-xl">C2E Network</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center text-black font-bold text-sm sm:text-lg flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
