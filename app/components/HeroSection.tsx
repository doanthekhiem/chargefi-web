export default function HeroSection() {
  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 text-glow leading-tight">
          Charge. Earn. Repeat.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
          Turn Everyday Charging into Crypto Rewards. Earn $CHARGE Tokens By Simply Charging your Phone Or EV. Welcome to the Charge-to-Earn Revolution.
        </p>
        
        {/* Hero Visual */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto mb-12 sm:mb-16">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute inset-4 bg-primary/10 rounded-full blur-2xl"></div>
          <div className="absolute inset-8 bg-primary/5 rounded-full blur-xl"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-primary rounded-full flex items-center justify-center glow">
              <svg width="32" height="32" className="sm:w-40 sm:h-40 md:w-48 md:h-48" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="white"/>
              </svg>
            </div>
          </div>
          
          {/* Device Icons */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <svg width="24" height="24" className="sm:w-8 sm:h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" className="text-primary">
              <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
              <line x1="12" y1="18" x2="12.01" y2="18" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="absolute bottom-0 left-1/4">
            <svg width="24" height="24" className="sm:w-8 sm:h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" className="text-primary">
              <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
              <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
              <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <div className="absolute bottom-0 right-1/4">
            <svg width="24" height="24" className="sm:w-8 sm:h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" className="text-primary">
              <path d="M7 2L17 2L17 22L7 22L7 2Z" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="18" r="1" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
