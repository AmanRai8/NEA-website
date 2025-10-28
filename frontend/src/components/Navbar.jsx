import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav
      className={`sticky top-0 z-30 transition-all duration-300 ${
        scrolled
          ? "bg-blue-500/20 backdrop-blur-lg shadow-lg border-b border-gray-200"
          : "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 shadow-md"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center justify-center py-3">
          <div className="flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <a
                  href={item.href}
                  target={item.href !== "#" ? "_blank" : undefined}
                  rel={item.href !== "#" ? "noopener noreferrer" : undefined}
                  onMouseEnter={() => setOpenDropdown(index)}
                  className={`
                    flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200
                    ${
                      item.highlight
                        ? "text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    }
                  `}
                >
                  <span>{item.name}</span>
                  {item.dropdown && item.dropdown.length > 0 && (
                    <ChevronDown
                      className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                        openDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </a>

                {/* Desktop Dropdown */}
                {item.dropdown && item.dropdown.length > 0 && (
                  <div
                    onMouseEnter={() => setOpenDropdown(index)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className={`
                      absolute left-0 top-full mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200
                      transition-all duration-200 origin-top
                      ${
                        openDropdown === index
                          ? "opacity-100 visible scale-100"
                          : "opacity-0 invisible scale-95 pointer-events-none"
                      }
                    `}
                  >
                    <div className="py-2 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                      {item.dropdown.map((section, idx) => (
                        <div
                          key={idx}
                          className="px-4 py-3 border-b last:border-b-0 border-gray-100"
                        >
                          <h6 className="font-bold text-xs uppercase tracking-wider text-blue-600 mb-2">
                            {section.title}
                          </h6>
                          <div className="space-y-1">
                            {section.links.map((link, i) => (
                              <a
                                key={i}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                              >
                                {link.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between py-4">
          <span className="text-lg font-bold text-gray-800">Menu</span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          lg:hidden bg-white border-t border-gray-200
          transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="container mx-auto px-4 py-4 max-h-96 overflow-y-auto">
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <div key={index}>
                <a
                  href={item.href}
                  target={item.href !== "#" ? "_blank" : undefined}
                  rel={item.href !== "#" ? "noopener noreferrer" : undefined}
                  onClick={(e) => {
                    if (item.dropdown && item.dropdown.length > 0) {
                      e.preventDefault();
                      setOpenDropdown(openDropdown === index ? null : index);
                    }
                  }}
                  className={`
                    flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-medium
                    transition-colors duration-200
                    ${
                      item.highlight
                        ? "text-orange-600 bg-orange-50"
                        : "text-gray-700 hover:bg-gray-100"
                    }
                  `}
                >
                  <span>{item.name}</span>
                  {item.dropdown && item.dropdown.length > 0 && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </a>

                {/* Mobile Dropdown */}
                {item.dropdown && item.dropdown.length > 0 && (
                  <div
                    className={`
                      ml-4 mt-2 space-y-2 overflow-hidden transition-all duration-300
                      ${
                        openDropdown === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }
                    `}
                  >
                    {item.dropdown.map((section, idx) => (
                      <div
                        key={idx}
                        className="pl-4 border-l-2 border-blue-200"
                      >
                        <h6 className="font-semibold text-xs text-blue-600 mb-1">
                          {section.title}
                        </h6>
                        {section.links.map((link, i) => (
                          <a
                            key={i}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors duration-150"
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
