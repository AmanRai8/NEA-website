import React from "react";

const Header = () => {
  return (
    <nav className="bg-white shadow py-3">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Logo */}
        <a href="/" className="flex items-center z-10 mb-2 md:mb-0">
          <img src="/nea-logo.png" alt="NEA" className="h-16 md:h-20 w-auto" />
        </a>

        {/* White Paper Link */}
        <div className="flex items-center text-center">
          <a
            href="https://www.nea.org.np/admin/assets/uploads/nea_white_paper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 font-bold animate-pulse text-sm sm:text-base md:text-lg"
          >
            <p className="m-0 leading-snug">*** ने. वि. प्रा श्वेतपत्र ***</p>
            <p className="m-0 leading-snug">(बैशाख २०८२)</p>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
