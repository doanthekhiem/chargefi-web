export default function Features() {
  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary">
          <path d="M9 3H15L16 5H19C19.5523 5 20 5.44772 20 6V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V6C4 5.44772 4.44772 5 5 5H8L9 3Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 8V16" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 12H16" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Custom AI Solutions",
      description: "Get data to charge your phone or EV."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary">
          <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15C10.9391 15 9.92172 15.4214 9.17157 16.1716C8.42143 16.9217 8 17.9391 8 19V21" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M20 8L22 10L20 12" stroke="currentColor" strokeWidth="2"/>
          <path d="M4 8L2 10L4 12" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Invite & Earn",
      description: "Refer friends, earn together."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor"/>
          <path d="M12 6L12 10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 14L12 18" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "NFT Power-Ups",
      description: "Boost earnings with rare charging NFTs."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary">
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
          <polygon points="10,8 15,12 10,16" fill="currentColor"/>
        </svg>
      ),
      title: "Watch Ads",
      description: "Unlock extra rewards by watching sponsored content."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
        </svg>
      ),
      title: "Green Rewards",
      description: "Get bonus tokens for using solar/clean energy."
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-20 bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-glow">FEATURES</h2>
          <p className="text-lg sm:text-xl text-gray-300">WHAT CAN YOU DO WITH $CHARGE?</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800/50 p-6 sm:p-8 rounded-lg border border-gray-700 hover:border-primary transition-colors">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{feature.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
