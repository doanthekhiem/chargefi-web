import Image from "next/image";

export default function WhatIsChargeFi() {
  const features = [
    {
      icon: <Image src="/what1.svg" alt="icon1" width={33} height={33} />,
      title: "Universal Compatibility",
      description: "Works with any smartphone or EV charger",
    },
    {
      icon: <Image src="/what2.svg" alt="icon2" width={33} height={33} />,
      title: "No Technical Knowledge",
      description: "Zero technical knowledge needed",
    },
    {
      icon: <Image src="/what3.svg" alt="icon3" width={33} height={33} />,
      title: "Verified System",
      description: "Verified “Proof-of-Charge” system",
    },
    {
      icon: <Image src="/what4.svg" alt="icon4" width={33} height={33} />,
      title: "Eco-Friendly",
      description: "Eco-friendly & rewards green charging habits",
    },
    {
      icon: <Image src="/what5.svg" alt="icon5" width={33} height={33} />,
      title: "Polygon Network",
      description: "Built on Polygon – fast, low-cost, sustainable",
    },
  ];

  return (
    <div className="w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-x-5 sm:gap-y-8">
        <div className="text-left">
          <div className="text-lg font-normal mb-4 sm:mb-6 text-primary uppercase  border-b border-b-primary w-1/2 pb-2">
            WHAT IS CHARGEFI?
          </div>
          <div className="text-sm text-white max-w-3xl ">
            ChargeFi is the world&apos;s first Charge-to-Earn (C2E) platform
            powered by blockchain. Whether you&apos;re charging a smartphone or
            an electric vehicle (EV), ChargeFi rewards you with $CHARGE tokens
            for verified charging behavior—bridging daily energy usage with real
            economic value.
          </div>
        </div>
        {features.map((feature, index) => (
          <div key={index} className="bg-[#0E0F0E] p-4 sm:p-6 ">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-3 sm:mb-4">
              {feature.icon}
            </div>
            <p className="text-sm sm:text-base text-white">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
