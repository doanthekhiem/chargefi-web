import Image from "next/image";

export default function Partners() {
  const benefits = [
    {
      icon: <Image src="/want1.svg" alt="icon1" width={36} height={36} />,
      title: "API & SDK Integrations",
      description:
        "API & SDK integrations for EV chargers, smart plugs, or mobile devices",
    },
    {
      icon: <Image src="/want2.svg" alt="icon2" width={36} height={36} />,
      title: "Blockchain Compatibility",
      description: "Blockchain & wallet compatibility (EVM, zk, L2)",
    },
    {
      icon: <Image src="/want3.svg" alt="icon3" width={36} height={36} />,
      title: "Carbon Footprint Tracking",
      description: "Carbon footprint tracking & energy data",
    },
    {
      icon: <Image src="/want4.svg" alt="icon4" width={36} height={36} />,
      title: "Gamified Engagement",
      description: "Gamified user engagement and growth quests",
    },
    {
      icon: <Image src="/want5.svg" alt="icon5" width={36} height={36} />,
      title: "Gamified Engagement",
      description: "Real-world energy → on-chain reward logic",
    },
  ];

  return (
    <section id="partners" className="py-8 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 items-start">
          <div className="lg:sticky lg:top-4">
            <div className="text-sm sm:text-base mb-4 sm:mb-6 text-primary border-b border-primary pb-2 max-w-[224px]">
              <div className="max-w-[184px] text-left">
                WANT TO INTEGRATE YOUR PLATFORM WITH CHARGEFI?
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2">
            <p className="text-base sm:text-lg lg:text-2xl text-gray-300 mb-2 sm:mb-3 leading-relaxed">
              We&apos;re building a global energy-reward network—and we&apos;re
              looking for visionary partners to build it with us.
            </p>
            <div className="text-xs sm:text-sm text-white mb-4 sm:mb-6">
              Have a custom idea or pilot in mind? Email us at
              <a
                href="mailto:partners@chargefi.io"
                className="text-primary hover:underline ml-1"
              >
                partners@chargefi.io
              </a>
            </div>
          </div>
          <div className="col-span-1">
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
              Whether you&apos;re an EV charging provider, a Layer-2 blockchain,
              a green energy startup, or a Web3 community tool—ChargeFi is open
              for integration.
              <br className="hidden sm:block" /> Together, we can unlock new
              user experiences, reward systems, and sustainable adoption models.
            </p>
            <button className="h-12 sm:h-14 flex items-center justify-between gap-2 w-full p-3 sm:p-4 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base font-medium">
              BECOME A PARTNER
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M12 5L19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#0E0F0E] p-4 sm:p-6 lg:px-10 lg:py-8 rounded-lg"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                {benefit.icon}
              </div>
              <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base lg:text-lg">
                {benefit.title}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
