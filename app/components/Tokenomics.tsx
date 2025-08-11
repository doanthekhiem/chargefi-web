import Image from "next/image";

export default function Tokenomics() {
  return (
    <section id="tokenomics" className=" lg:pt-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div className=" text-lg sm:text-xl mb-4 text-glow text-primary">
            TOKENOMICS
          </div>
          <p className=" text-white text-3xl sm:text-4xl md:text-5xl">
            $CHARGE Tokenomics
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className=" flex justify-center items-center">
            <Image
              src="/tokennomic.svg"
              alt="Tokenomics"
              width={400}
              height={400}
              className="w-full h-full"
            />
          </div>

          <div className="mt-6 lg:min-w-xl sm:mt-8 p-4 sm:p-6 ">
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between border-b border-[#212121] pb-2">
                <span className="text-primary">TOKEN NAME:</span>
                <span className="text-white">$CHARGE</span>
              </div>
              <div className="flex justify-between border-b border-[#212121] pb-2">
                <span className="text-primary">TOTAL SUPPLY:</span>
                <span className="text-white">10,000,000,000 $CHARGE</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#212121] pb-2">
                <span className="text-primary flex-1">USE CASES:</span>
                <span className="text-white max-w-xs text-right">
                  Utility & reward token for the ChargeFi ecosystem: spend,
                  stake, swap, redeem.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
