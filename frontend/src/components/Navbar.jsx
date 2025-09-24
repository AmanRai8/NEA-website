import React, { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "https://www.nea.org.np" },
    {
      name: "About Us",
      href: "#",
      dropdown: [
        {
          title: "Introduction",
          links: [
            { name: "About Us", href: "https://www.nea.org.np/aboutus" },
            {
              name: "Organizational Structure",
              href: "https://www.nea.org.np/organizational_structure",
            },
            { name: "Board of Directors", href: "https://www.nea.org.np/bod" },
            {
              name: "Contact Information",
              href: "https://www.nea.org.np/contacts",
            },
          ],
        },
        {
          title: "Corporate Structure",
          links: [
            {
              name: "Generation Directorate",
              href: "https://www.nea.org.np/genDirectorate",
            },
            {
              name: "Transmission Directorate",
              href: "https://www.nea.org.np/transDirectorate",
            },
            {
              name: "Distribution Directorate",
              href: "https://www.nea.org.np/disDirectorate",
            },
          ],
        },
        {
          title: "Provincial Offices",
          links: [
            {
              name: "कोशी प्रदेश, बिराटनगर",
              href: "https://www.nea.org.np/regional/1",
            },
            {
              name: "मधेश प्रदेश, जनकपुर",
              href: "https://www.nea.org.np/regional/2",
            },
            {
              name: "वाग्मती प्रदेश, काठमाडौँ",
              href: "https://www.nea.org.np/regional/4",
            },
            {
              name: "गण्डकी प्रदेश, पोखरा",
              href: "https://www.nea.org.np/regional/6",
            },
            {
              name: "लुम्बिनी प्रदेश, बुटवल",
              href: "https://www.nea.org.np/regional/5",
            },
            {
              name: "कर्णाली प्रदेश, सुर्खेत",
              href: "https://www.nea.org.np/regional/9",
            },
            {
              name: "सुदुरपश्चिम प्रदेश, अत्तरिया",
              href: "https://www.nea.org.np/regional/8",
            },
            {
              name: "वाग्मती प्रदेश, हेटौडा",
              href: "https://www.nea.org.np/regional/3",
            },
            {
              name: "लुम्बिनी प्रदेश, नेपालगंज",
              href: "https://www.nea.org.np/regional/7",
            },
          ],
        },
      ],
    },
    {
      name: "Media Center",
      href: "#",
      dropdown: [
        {
          title: "Forms / Information",
          links: [
            {
              name: "Forms / Information",
              href: "https://www.nea.org.np/form",
            },
            {
              name: "Publication / Reports",
              href: "https://www.nea.org.np/publications",
            },
            {
              name: "Acts / Regulations",
              href: "https://www.nea.org.np/acts_regulations",
            },
            {
              name: "Press Releases",
              href: "https://www.nea.org.np/press_release",
            },
          ],
        },
        {
          title: "News / Downloads",
          links: [
            { name: "News / Notices", href: "https://www.nea.org.np/notice" },
            { name: "Downloads", href: "https://www.nea.org.np/downloads" },
          ],
        },
        {
          title: "Annual Publications",
          links: [
            {
              name: "Annual Reports",
              href: "https://www.nea.org.np/annual_report",
            },
          ],
        },
        {
          title: "Gallery",
          links: [
            {
              name: "Image Gallery",
              href: "https://www.nea.org.np/photo_gallery",
            },
            {
              name: "Video Gallery",
              href: "https://www.nea.org.np/video_gallery",
            },
          ],
        },
      ],
    },
    {
      name: "Consumers",
      href: "#",
      dropdown: [
        {
          title: "Bill Payment",
          links: [
            {
              name: "Check Your Bill",
              href: "https://www.neabilling.com/viewonline",
            },
            {
              name: "Pay Your Bill",
              href: "https://www.nea.org.np/bill_payment",
            },
          ],
        },
        {
          title: "Telephone Directory",
          links: [
            {
              name: "No Light Numbers",
              href: "https://www.nea.org.np/nolights",
            },
            {
              name: "Contact Info of DCS",
              href: "https://www.nea.org.np/dcscontacts",
            },
          ],
        },
        {
          title: "Downloads",
          links: [
            {
              name: "नयाँ ग्राहक आवेदन फारम",
              href: "https://www.nea.org.np/new_connection",
            },
            {
              name: "मीटर नामसारी फारम",
              href: "https://www.nea.org.np/meter_transfer",
            },
          ],
        },
        {
          title: "TARRIF RATES",
          links: [
            {
              name: "Consumer Tarrif Rates",
              href: "https://nea.org.np/admin/assets/uploads/Consumer_Tarrif_data.pdf",
            },
            {
              name: "PPA Tarrif Rates",
              href: "https://nea.org.np/admin/assets/uploads/PPA_Rates.pdf",
            },
          ],
        },
      ],
    },
    {
      name: "Recruitment",
      href: "#",
      dropdown: [
        {
          title: "Internal / Promotional",
          links: [
            {
              name: "पाठ्यक्रम (आन्तरिक)",
              href: "https://www.nea.org.np/recruitment_internal/1323",
            },
            {
              name: "विज्ञापन तथा सूचनाहरू",
              href: "https://www.nea.org.np/recruitment_internal/2129",
            },
            {
              name: "नतिजाहरू",
              href: "https://www.nea.org.np/recruitment_internal/1891",
            },
            {
              name: "पुनरावलोकन समितिको सूचना",
              href: "https://www.nea.org.np/recruitment_internal/1683",
            },
            {
              name: "स्वीकृत नामावली प्रकाशित गरिएको सम्बन्धि सूचना (आन्तरिक)",
              href: "https://www.nea.org.np/recruitment_internal/2045",
            },
          ],
        },
        {
          title: "Open",
          links: [
            {
              name: "विज्ञापन तथा सूचनाहरू",
              href: "https://www.nea.org.np/recruitment_open/321",
            },
            {
              name: "स्वीकृत नामावली प्रकाशित गरिएको सम्बन्धि सूचना (खुला)",
              href: "https://www.nea.org.np/recruitment_open/1606",
            },
            {
              name: "दक्ष/बिज्ञ र कर्मचारीहरुको आचार संहिता, २०७६",
              href: "https://www.nea.org.np/recruitment_open/1613",
            },
            {
              name: "पाठ्यक्रम (खुला)",
              href: "https://www.nea.org.np/recruitment_open/2146",
            },
            {
              name: "दक्षको सुचिमा नाम समावेश गर्ने सूचना तथा निवेदन फाराम",
              href: "https://www.nea.org.np/recruitment_open/1508",
            },
            {
              name: "परीक्षा कार्यक्रम",
              href: "https://www.nea.org.np/recruitment_open/27",
            },
            {
              name: "नतिजाहरू",
              href: "https://www.nea.org.np/recruitment_open/14",
            },
          ],
        },
      ],
    },
    {
      name: "Online Application",
      href: "https://career.nea.org.np",
      highlight: true,
      dropdown: [
        {
          title: "Applications",
          links: [
            { name: "Open", href: "https://career.nea.org.np" },
            { name: "Promotional / Internal", href: "https://hris.nea.org.np" },
          ],
        },
      ],
    },
    {
      name: "Tenders",
      href: "#",
      dropdown: [
        {
          title: "Tenders",
          links: [
            {
              name: "Tender / Prequalifications",
              href: "https://www.nea.org.np/tender_prequalification",
            },
            {
              name: "Notifications",
              href: "https://www.nea.org.np/notifications",
            },
            {
              name: "Award of Contract",
              href: "https://www.nea.org.np/award_of_contract",
            },
          ],
        },
      ],
    },
    {
      name: "NEA Operational Reports",
      href: "#",
      dropdown: [
        {
          title: "Reports",
          links: [
            {
              name: "Daily Operational Reports",
              href: "https://www.nea.org.np/dailyOperationalReports",
            },
            {
              name: "Monthly Operational Reports",
              href: "https://www.nea.org.np/monthlyOperationalReports",
            },
            {
              name: "Yearly Operational Reports",
              href: "https://www.nea.org.np/yearlyOperationalReports",
            },
          ],
        },
      ],
    },
    {
      name: "स्वत प्रकाशन",
      href: "https://www.nea.org.np/monthlyUpdates",
    },
    {
      name: "Tarrif Rates",
      href: "#",
      highlight: true,
      dropdown: [
        {
          title: "Tarrif",
          links: [
            {
              name: "Consumer Tarrif",
              href: "https://nea.org.np/admin/assets/uploads/Consumer_Tarrif_data.pdf",
            },
            {
              name: "PPA Tarrif",
              href: "https://nea.org.np/admin/assets/uploads/PPA_Rates.pdf",
            },
          ],
        },
      ],
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center space-x-6 items-start">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-2 py-1 rounded-md font-medium transition-colors duration-300 flex items-center ${
                  item.highlight
                    ? "text-orange-400 hover:text-orange-300"
                    : "hover:text-gray-200"
                }`}
              >
                {item.name}
                {item.dropdown && item.dropdown.length > 0 && (
                  <svg
                    className="ml-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </a>

              {/* Dropdown */}
              {item.dropdown && item.dropdown.length > 0 && (
                <div className="absolute left-0 top-full mt-2 w-96 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                  {item.dropdown.map((section, idx) => (
                    <div key={idx} className="p-3 border-b last:border-b-0">
                      <h6 className="font-bold text-blue-600 mb-2">
                        {section.title}
                      </h6>
                      {section.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.href}
                          className="block px-2 py-1 rounded-md hover:bg-blue-100 transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden ml-auto">
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
