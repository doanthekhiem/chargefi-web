export default function Partners() {
  const benefits = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
        </svg>
      ),
      title: "API & SDK Integrations",
      description: "For EV charging, smart plugs, or mobile devices."
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Blockchain Compatibility",
      description: "Smart contract compatibility (EV, IoT, AI)."
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
          <path d="M3 3L21 21" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Carbon Footprint Tracking",
      description: "Energy data & carbon footprint tracking."
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
        </svg>
      ),
      title: "Gamified Engagement",
      description: "User engagement and growth quests."
    }
  ];

  return (
    <section id="partners" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-glow">
              WANT TO INTEGRATE YOUR PLATFORM WITH CHARGEFI?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Whether you&apos;re an EV charging network, smart plug manufacturer, or mobile app developer, partnering with ChargeFi opens new revenue streams and user engagement opportunities.
            </p>
            <button className="btn-primary">
              BECOME A PARTNER
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
          </div>
          
          <div>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              We&apos;re building a global energy-reward network—and we&apos;re looking for visionary partners to build it with us.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-800/50 p-3 sm:p-4 rounded-lg border border-gray-700">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{benefit.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
