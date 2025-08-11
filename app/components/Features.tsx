import Image from "next/image";
import Tokenomics from "./Tokenomics";

export default function Features() {
  const features = [
    {
      icon: <Image src="/fea1.svg" alt="icon1" width={36} height={36} />,
      title: "Custom AI Solutions",
      description: "Get paid to charge your phone or EV",
    },
    {
      icon: <Image src="/fea2.svg" alt="icon2" width={36} height={36} />,
      title: "Invite & Earn",
      description: "Refer friends, earn together",
    },
    {
      icon: <Image src="/fea3.svg" alt="icon3" width={36} height={36} />,
      title: "NFT Power-Ups",
      description: "Boost earnings with rare charging NFTs",
    },
    {
      icon: <Image src="/fea4.svg" alt="icon4" width={36} height={36} />,
      title: "Watch Ads",
      description: "Unlock extra rewards by watching sponsored content",
    },
    {
      icon: <Image src="/fea5.svg" alt="icon5" width={36} height={36} />,
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
