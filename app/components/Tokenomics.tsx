export default function Tokenomics() {
  const tokenDistribution = [
    { name: "Community Rewards", percentage: "40%" },
    { name: "Ecosystem & Operations", percentage: "20%" },
    { name: "Strategic Partnerships", percentage: "15%" },
    { name: "Team & Advisors", percentage: "15%" },
    { name: "Liquidity & Listings", percentage: "10%" }
  ];

  return (
    <section id="tokenomics" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-glow">TOKENOMICS</h2>
          <p className="text-lg sm:text-xl text-gray-300">$CHARGE Tokenomics</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto relative">
              <svg width="100%" height="100%" viewBox="0 0 100 100" className="transform -rotate-90">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#374151" strokeWidth="8"/>
                <circle cx="50" cy="50" r="45" fill="none" stroke="#6CDDAF" strokeWidth="8" strokeDasharray="283" strokeDashoffset="170" className="transition-all duration-1000"/>
                <circle cx="50" cy="50" r="35" fill="none" stroke="#374151" strokeWidth="8"/>
                <circle cx="50" cy="50" r="35" fill="none" stroke="#6CDDAF" strokeWidth="8" strokeDasharray="220" strokeDashoffset="110" className="transition-all duration-1000"/>
                <circle cx="50" cy="50" r="25" fill="none" stroke="#374151" strokeWidth="8"/>
                <circle cx="50" cy="50" r="25" fill="none" stroke="#6CDDAF" strokeWidth="8" strokeDasharray="157" strokeDashoffset="47" className="transition-all duration-1000"/>
              </svg>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary">$CHARGE</div>
                  <div className="text-xs sm:text-sm text-gray-400">Token</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            {tokenDistribution.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 sm:p-4 bg-gray-800/50 rounded-lg">
                <span className="text-gray-300 text-sm sm:text-base">{item.name}</span>
                <span className="text-primary font-bold text-sm sm:text-base">{item.percentage}</span>
              </div>
            ))}
            
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gray-800/30 rounded-lg border border-gray-700">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Token Information</h3>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">TOKEN NAME:</span>
                  <span className="text-white">$CHARGE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">TOTAL SUPPLY:</span>
                  <span className="text-white">10,000,000,000 $CHARGE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">USE CASES:</span>
                  <span className="text-white">Utility & reward token</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
