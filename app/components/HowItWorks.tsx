import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Plug In",
      description: "Charge your smartphone or EV as usual",
    },
    {
      number: "02",
      title: "App Tracks",
      description: "ChargeFi app verifies charging behavior via smart sensors",
    },
    {
      number: "03",
      title: "Proof-of-Charge",
      description:
        "AI & blockchain confirm real vs. fake charging (no cheating)",
    },
    {
      number: "04",
      title: "Earn $CHARGE",
      description: "Receive crypto rewards based on verified energy usage",
    },
    {
      number: "05",
      title: "Use Your Tokens",
      description: "Spend, stake, send, or swap on DeFi",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-[#0E0F0E]">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
          {/* Left Side - Illustration */}
          <div className="order-2 lg:order-1 col-span-2">
            <div className="w-full max-w-md mx-auto lg:max-w-none">
              <Image
                src="/stepbystep.svg"
                alt="EV Charging Station with Wireless Connection"
                width={500}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Side - Steps */}
          <div className="order-1 lg:order-2 lg:col-span-3 col-span-1">
            <div className="text-left mb-12 sm:mb-16">
              <h3 className="text-sm sm:text-base text-primary mb-2">
                HOW IT WORKS
              </h3>
              <div className="w-50 h-0.5 bg-primary mb-4"></div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-normal text-white">
                Step-by-step
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm sm:text-base">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-base sm:text-lg mb-1 sm:mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#6D7C76] text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
