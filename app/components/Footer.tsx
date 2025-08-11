import Logo from "./Logo";

export default function Footer() {
  const navigationLinks = [
    { href: "#how-it-works", label: "How it Works" },
    { href: "#features", label: "Features" },
    { href: "#tokenomics", label: "Tokenomics" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "#partners", label: "Partners" },
    { href: "#faq", label: "FAQ" }
  ];

  const legalLinks = [
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Report Abuse" }
  ];

  const socialLinks = [
    {
      href: "#",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-400 hover:text-black">
          <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2"/>
          <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      href: "#",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-400 hover:text-black">
          <path d="M23 3A10.9 10.9 0 0 1 13 13A10.9 10.9 0 0 1 1 3A10.9 10.9 0 0 1 13 -7A10.9 10.9 0 0 1 23 3Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 12L12 16L16 12" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      href: "#",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-400 hover:text-black">
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2"/>
          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      href: "#",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-400 hover:text-black">
          <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="py-8 sm:py-12 bg-gray-900/80 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Logo width={100} height={26} />
            </div>
            <p className="text-gray-400 text-xs sm:text-sm">
              The future of energy rewards is here. Charge. Earn. Repeat.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Navigation</h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Connect</h3>
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">© 2023 ChargeFi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
