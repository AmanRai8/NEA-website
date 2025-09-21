import React, { useState } from "react";

const MobileNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleMenu = () => setOpenMenu(!openMenu);
  const toggleAccordion = (id) =>
    setOpenAccordion(openAccordion === id ? null : id);

  return (
    <div className="lg:hidden">
      {/* Menu Button */}
      <div className="bg-blue-700 text-right p-2">
        <button
          onClick={toggleMenu}
          className="bg-gray-800 text-white px-4 py-2 rounded"
        >
          MENU
        </button>
      </div>

      {/* Mobile Navbar */}
      {openMenu && (
        <div className="bg-blue-700 text-white px-4 py-4">
          {/* Accordion Items */}
          {[
            {
              id: "about",
              label: "About Us",
              links: [
                { text: "About Us", href: "https://www.nea.org.np/aboutus" },
                {
                  text: "Board of Directors",
                  href: "https://www.nea.org.np/bod",
                },
                { text: "Contact", href: "https://www.nea.org.np/contacts" },
              ],
            },
            {
              id: "media",
              label: "Media Center",
              links: [
                { text: "Forms / Info", href: "https://www.nea.org.np/form" },
                {
                  text: "Publications",
                  href: "https://www.nea.org.np/publications",
                },
              ],
            },
          ].map((section) => (
            <div key={section.id} className="mb-2">
              <button
                onClick={() => toggleAccordion(section.id)}
                className="w-full text-left bg-gray-600 px-3 py-2 rounded flex justify-between items-center"
              >
                {section.label}
                <span>{openAccordion === section.id ? "-" : "+"}</span>
              </button>

              {openAccordion === section.id && (
                <div className="mt-1 pl-4">
                  {section.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-1 text-white hover:underline"
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
