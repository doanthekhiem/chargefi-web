"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : ""
      }`}
    >
      <div className="w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex items-center justify-between">
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center">
                <svg
                  width="12"
                  height="12"
                  className="sm:w-4 sm:h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-lg sm:text-xl font-bold text-primary">
                ChargeFi
              </span>
            </div>
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-primary transition-colors text-sm xl:text-base"
            >
              How it Works
            </a>
            <a
              href="#features"
              className="text-gray-300 hover:text-primary transition-colors text-sm xl:text-base"
            >
              Features
            </a>
            <a
              href="#tokenomics"
              className="text-gray-300 hover:text-primary transition-colors text-sm xl:text-base"
            >
              Tokenomics
            </a>
            <a
              href="#roadmap"
              className="text-gray-300 hover:text-primary transition-colors text-sm xl:text-base"
            >
              Roadmap
            </a>
            <a
              href="#partners"
              className="text-gray-300 hover:text-primary transition-colors text-sm xl:text-base"
            >
              Partners
            </a>
            <a
              href="#faq"
              className="text-gray-300 hover:text-primary transition-colors text-sm xl:text-base"
            >
              FAQ
            </a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <button className="btn-primary-inline text-xs lg:text-sm">
              <svg
                width="14"
                height="14"
                className="lg:w-4 lg:h-4"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              <span className="hidden sm:inline">Whitepaper</span>
            </button>
            <button className="btn-primary h-10 text-xs lg:text-sm">
              <svg
                width="14"
                height="14"
                className="lg:w-4 lg:h-4"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M7 10L12 15L17 10"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M12 15V3" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="hidden sm:inline">Download App</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {isMenuOpen ? (
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              ) : (
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-800">
            <nav className="flex flex-col gap-4 mt-4">
              <a
                href="#how-it-works"
                className="text-gray-300 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How it Works
              </a>
              <a
                href="#features"
                className="text-gray-300 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#tokenomics"
                className="text-gray-300 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tokenomics
              </a>
              <a
                href="#roadmap"
                className="text-gray-300 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Roadmap
              </a>
              <a
                href="#partners"
                className="text-gray-300 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Partners
              </a>
              <a
                href="#faq"
                className="text-gray-300 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
            </nav>
            <div className="flex flex-col gap-3 mt-4">
              <button className="btn-primary text-sm w-full justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                Whitepaper
              </button>
              <button className="btn-primary text-sm w-full justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path d="M12 15V3" stroke="currentColor" strokeWidth="2" />
                </svg>
                Download App
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
