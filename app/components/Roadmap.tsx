import Image from "next/image";

export default function Roadmap() {
  const phases = [
    {
      title: "Phase 1",
      items: [
        "Project Launch",
        "MVP App Android",
        "Smart Contract Audit",
        "Token Deployment (Testnet)",
      ],
    },
    {
      title: "Phase 2",
      items: [
        "NFT Marketplace",
        "EV Integration Beta",
        "Community Growth Campaign",
        "CEX/DEX Listings",
      ],
    },
    {
      title: "Phase 3",
      items: [
        "iOS App",
        "Global Launch",
        "Green Partner Integrations",
        "Solar Charging Rewards",
      ],
    },
    {
      title: "Phase 4",
      items: [
        "Enterprise EV Charging APIs",
        "Real-time Carbon Offset Trader",
        "DeFi Staking Pools",
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-16 sm:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center gap-15">
        <div className="text-center">
          <div className="flex justify-center items-center">
            <Image
              src="/roadmap.svg"
              alt="Roadmap"
              width={500}
              height={87}
              className="w-auto"
            />
          </div>
        </div>
        <div className="w-full h-[1px] bg-white"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full">
          {phases.map((phase, index) => (
            <div key={index}>
              <div className="text-white  text-lg mb-3 sm:mb-4">
                {phase.title}
              </div>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-[#828282]">
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
