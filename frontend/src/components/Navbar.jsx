import React, { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Media Center", href: "#" },
    { name: "Consumers", href: "#" },
    { name: "Recruitment", href: "#" },
    { name: "Online Application", href: "#", highlight: true },
    { name: "Tenders", href: "#" },
    { name: "Reports", href: "#" },
    { name: "Tarrif Rates", href: "#", highlight: true },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Desktop Menu - Centered */}
        <div className="hidden md:flex flex-1 justify-center space-x-6 items-center">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`relative group px-2 py-1 rounded-md font-medium transition-colors duration-300 ${
                item.highlight
                  ? "text-orange-400 hover:text-orange-300"
                  : "hover:text-gray-200"
              }`}
            >
              {item.name}
              {/* Underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Mobile Hamburger - Right */}
        <div className="md:hidden flex items-center">
          <Menu
            size={28}
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-blue-700 overflow-hidden transition-max-height duration-500 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-4 py-3 space-y-2">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`block px-3 py-2 rounded-md font-medium text-white transition-colors duration-300 ${
                item.highlight
                  ? "text-orange-400 hover:text-orange-300"
                  : "hover:text-gray-200"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
