export default function Roadmap() {
  const phases = [
    {
      title: "Phase 1",
      items: [
        "Project Launch",
        "MVP App Android",
        "Smart Contract Audit",
        "Token Deployment (Testnet)"
      ]
    },
    {
      title: "Phase 2",
      items: [
        "NFT Marketplace",
        "EV Integration Beta",
        "Community Growth Campaign",
        "CEX/DEX Listings"
      ]
    },
    {
      title: "Phase 3",
      items: [
        "iOS App",
        "Global Launch",
        "Green Partner Integrations",
        "Solar Charging Rewards"
      ]
    },
    {
      title: "Phase 4",
      items: [
        "Enterprise EV Charging APIs",
        "Real-time Carbon Offset Trader",
        "DeFi Staking Pools"
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-16 sm:py-20 bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-glow">ROADMAP</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {phases.map((phase, index) => (
            <div key={index} className="bg-gray-800/50 p-4 sm:p-6 rounded-lg border border-gray-700">
              <div className="text-primary font-bold text-lg mb-3 sm:mb-4">{phase.title}</div>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
