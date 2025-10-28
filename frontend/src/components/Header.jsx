import React, { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : "shadow-md"
      }`}
    >
      {/* Main Header */}
      <div className="bg-[#D6E4FC] border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo Section */}
            <a
              href="/"
              className="flex items-center gap-3 lg:gap-4 group transition-all duration-300 mx-auto sm:mx-0"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 group-hover:blur-md transition-all duration-300" />
                <img
                  src="/nea-logo.png"
                  alt="Nepal Electricity Authority"
                  className="h-12 lg:h-16 w-auto relative z-10 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </a>

            {/* Quick Action Buttons — hidden on mobile */}
            <div className="hidden sm:flex items-center gap-2 lg:gap-3">
              <a
                href="https://www.neabilling.com/viewonline"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 lg:px-4 py-2 text-xs lg:text-sm font-semibold text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200"
              >
                Check Bill
              </a>
              <a
                href="https://www.nea.org.np/bill_payment"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 lg:px-4 py-2 text-xs lg:text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 hover:shadow-md transition-all duration-200"
              >
                Pay Bill
              </a>
              <a
                href="https://career.nea.org.np"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 lg:px-4 py-2 text-xs lg:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-md transition-all duration-200"
              >
                Career Portal
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
