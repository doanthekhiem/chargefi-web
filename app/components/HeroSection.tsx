import Image from "next/image";
import WhatIsChargeFi from "./WhatIsChargeFi";

export default function HeroSection() {
  return (
    <section
      style={{
        backgroundImage: `url(/banner1.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
      className="pt-24 min-h-screen sm:pt-28 md:pt-32 pb-16 sm:pb-20 relative "
    >
      <div className="container mx-auto px-4 sm:px-6 text-center z-10 h-full">
        <div className="max-w-xl mx-auto flex flex-col items-center justify-center">
          <Image
            src="/Frame1.svg"
            alt="banner"
            width={400}
            height={300}
            className="object-cover h-[300px] object-top"
          />
          <div className="text-4xl lg:text-5xl mb-4 sm:mb-6 text-glow leading-tight">
            Charge. <span className="text-primary">Earn.</span> Repeat.
          </div>
          <p className="text-sm lg:text-lg text-gray-300 max-w-[440px] mx-auto mb-8 sm:mb-12 leading-relaxed">
            Turn Everyday Charging into Crypto Rewards. Earn $CHARGE Tokens By
            Simply Charging your Phone Or EV. Welcome to the Charge-to-Earn
            Revolution.
          </p>
        </div>
      </div>
      <WhatIsChargeFi />
    </section>
  );
}
