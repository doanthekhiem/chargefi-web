import Tokenomics from "./Tokenomics";

export default function Features() {
  const features = [
    {
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          className="text-primary"
        >
          <rect
            x="6"
            y="2"
            width="12"
            height="20"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M12 18V22" stroke="currentColor" strokeWidth="2" />
          <path d="M8 6H16" stroke="currentColor" strokeWidth="2" />
          <path d="M10 10H14" stroke="currentColor" strokeWidth="2" />
          <path d="M10 14H14" stroke="currentColor" strokeWidth="2" />
          <path d="M12 6L13 4H11L12 6Z" fill="currentColor" />
        </svg>
      ),
      title: "Custom AI Solutions",
      description: "Get paid to charge your phone or EV",
    },
    {
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          className="text-primary"
        >
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" />
          <path
            d="M12 3C13.5 3 15 3.5 16 4.5C17 5.5 17.5 7 17.5 8.5C17.5 10 17 11.5 16 12.5C15 13.5 13.5 14 12 14C10.5 14 9 13.5 8 12.5C7 11.5 6.5 10 6.5 8.5C6.5 7 7 5.5 8 4.5C9 3.5 10.5 3 12 3Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M12 16L14 18L16 16" stroke="currentColor" strokeWidth="2" />
          <path d="M12 18L14 20L16 18" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: "Invite & Earn",
      description: "Refer friends, earn together",
    },
    {
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          className="text-primary"
        >
          <path
            d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M12 6L12 10" stroke="currentColor" strokeWidth="2" />
          <path d="M12 14L12 18" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: "NFT Power-Ups",
      description: "Boost earnings with rare charging NFTs",
    },
    {
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          className="text-primary"
        >
          <rect
            x="2"
            y="3"
            width="20"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <text
            x="12"
            y="12"
            textAnchor="middle"
            className="text-xs font-bold fill-current"
          >
            AD
          </text>
        </svg>
      ),
      title: "Watch Ads",
      description: "Unlock extra rewards by watching sponsored content",
    },
    {
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          className="text-primary"
        >
          <path
            d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <rect
            x="6"
            y="18"
            width="12"
            height="4"
            rx="1"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M8 20L10 22L12 20L14 22L16 20"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "Green Rewards",
      description: "Get bonus tokens for using solar/off-peak energy",
    },
  ];

  return (
    <section
      id="features"
      className="py-16 sm:py-20 bg-black flex flex-col items-center"
    >
      <div
        className="flex flex-col items-center w-full"
        style={{
          backgroundImage: "url('/tokennomicsbg.svg')",
          backgroundSize: "contain",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header Bar */}
          <div className="flex items-center justify-center mb-12 sm:mb-16">
            <div className="flex bg-[#0E0F0E] rounded-full overflow-hidden shadow-lg w-fit">
              <div className="px-6 pr-0 py-3">
                <div className="border-b border-primary pr-6">
                  <span className="text-primary font-bold text-lg sm:text-xl ">
                    FEATURES
                  </span>
                </div>
              </div>
              <div className="px-6 py-3">
                <span className="text-white font-medium text-sm sm:text-base">
                  WHAT CAN YOU DO WITH $CHARGE?
                </span>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="flex flex-wrap max-w-5xl mx-auto justify-center items-center gap-8 sm:gap-16">
            {features.map((feature, index) => (
              <div key={index} className="text-left w-1/4">
                <div className="flex  mb-4">{feature.icon}</div>
                <h3 className="text-white font-bold text-base sm:text-xl mb-1 sm:mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm sm:text-base font-medium">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:h-100"></div>
        <Tokenomics />
      </div>
    </section>
  );
}
