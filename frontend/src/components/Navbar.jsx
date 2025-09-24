import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo / Brand */}
        <div className="text-xl font-bold">NEA</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-200">
            Home
          </a>
          <a href="#" className="hover:text-gray-200">
            About Us
          </a>
          <a href="#" className="hover:text-gray-200">
            Media Center
          </a>
          <a href="#" className="hover:text-gray-200">
            Consumers
          </a>
          <a href="#" className="hover:text-gray-200">
            Recruitment
          </a>
          <a href="#" className="hover:text-orange-400 font-semibold">
            Online Application
          </a>
          <a href="#" className="hover:text-gray-200">
            Tenders
          </a>
          <a href="#" className="hover:text-gray-200">
            Reports
          </a>
          <a href="#" className="hover:text-orange-400 font-semibold">
            Tarrif Rates
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden flex flex-col space-y-1 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 px-4 py-3 space-y-2 animate-slide-down">
          <a href="#" className="block hover:text-gray-200">
            Home
          </a>
          <a href="#" className="block hover:text-gray-200">
            About Us
          </a>
          <a href="#" className="block hover:text-gray-200">
            Media Center
          </a>
          <a href="#" className="block hover:text-gray-200">
            Consumers
          </a>
          <a href="#" className="block hover:text-gray-200">
            Recruitment
          </a>
          <a href="#" className="block hover:text-orange-400 font-semibold">
            Online Application
          </a>
          <a href="#" className="block hover:text-gray-200">
            Tenders
          </a>
          <a href="#" className="block hover:text-gray-200">
            Reports
          </a>
          <a href="#" className="block hover:text-orange-400 font-semibold">
            Tarrif Rates
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
