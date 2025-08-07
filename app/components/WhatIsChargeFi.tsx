export default function WhatIsChargeFi() {
  const features = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-primary"
        >
          <path
            d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15C10.9391 15 9.92172 15.4214 9.17157 16.1716C8.42143 16.9217 8 17.9391 8 19V21"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "Universal Compatibility",
      description: "Works with any smartphone or EV charger",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-primary"
        >
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" />
          <path
            d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "No Technical Knowledge",
      description: "Zero technical knowledge needed",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-primary"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: "Verified System",
      description: "Verified “Proof-of-Charge” system",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-primary"
        >
          <path
            d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
            fill="currentColor"
          />
        </svg>
      ),
      title: "Eco-Friendly",
      description: "Eco-friendly & rewards green charging habits",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-primary"
        >
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" />
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
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
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
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
