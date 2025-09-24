import React from "react";
import { Calendar, ArrowRight, ChevronRight } from "lucide-react";

const Content2 = () => {
  const newsItems = [
    {
      date: "2025-09-21",
      title: "घर बहालमा लिने सम्बन्धि सूचना",
      description:
        "वितरण तथा ग्राहक सेवा निर्देशनालय योजना तथा प्राबिधिक सेवा बिभाग नवलपुर ग्रामिण विद्युतीकरण तथा छुसाङ (मुस्ताङ) ३३ के.भि.प्र.ला. तथा स.स निर्माण आयोजना",
      pdfLink:
        "https://www.nea.org.np/admin/assets/uploads/supportive_docs/81388492.pdf",
    },
    {
      date: "2025-09-18",
      title: "वि. स. २०८२ फाल्गुन महिनामा अनिबार्य अवकाश हुने कर्मचारीहरु",
      description:
        "वि. स. २०८२ फाल्गुन महिनामा अनिबार्य अवकाश हुने कर्मचारीहरु",
      pdfLink:
        "https://www.nea.org.np/admin/assets/uploads/supportive_docs/61044533.pdf",
    },
    {
      date: "2025-09-18",
      title: "वि. स. २०८२ फाल्गुन महिनामा अनिबार्य अवकाश हुने कर्मचारीहरु",
      description:
        "वि. स. २०८२ फाल्गुन महिनामा अनिबार्य अवकाश हुने कर्मचारीहरु",
      pdfLink:
        "https://www.nea.org.np/admin/assets/uploads/supportive_docs/61044533.pdf",
    },
    {
      date: "2025-09-15",
      title: "बिश्वकर्मा पूजा सम्बन्धमा",
      description: "बिश्वकर्मा पूजा सम्बन्धमा",
      pdfLink:
        "https://www.nea.org.np/admin/assets/uploads/supportive_docs/69996032.pdf",
    },
    {
      date: "2025-09-15",
      title: "बिश्वकर्मा पूजा सम्बन्धमा",
      description: "बिश्वकर्मा पूजा सम्बन्धमा",
      pdfLink:
        "https://www.nea.org.np/admin/assets/uploads/supportive_docs/69996032.pdf",
    },
    {
      date: "2025-09-14",
      title: "तह-४, फोरमेन पदको नियुक्तिपत्र वितरण सम्बन्धि सूचना",
      description:
        "प्राविधिक सेवा, ईलेक्ट्रिकल/मेकानिकल/सिभिल समूह/उपसमूह तह ४, फोरमेन पदको नियुक्तिपत्र वितरण सम्बन्धी सूचना",
      pdfLink:
        "https://www.nea.org.np/admin/assets/uploads/supportive_docs/52991684.pdf",
    },
    {
      date: "2025-09-12",
      title: "अन्तरबार्ता परीक्षा स्थगन सम्बन्धी सूचना",
      description: "अन्तरबार्ता परीक्षा स्थगन सम्बन्धी सूचना",
      pdfLink:
        "https://www.nea.org.np/admin/assets/uploads/supportive_docs/77649212.jpeg",
    },
    {
      date: "2025-09-12",
      title: "अन्तरबार्ता परीक्षा स्थगन सम्बन्धी सूचना",
      description: "अन्तरबार्ता परीक्षा स्थगन सम्बन्धी सूचना",
      pdfLink:
        "https://www.nea.org.np/admin/assets/uploads/supportive_docs/77649212.jpeg",
    },
    {
      date: "2025-09-12",
      title: "अन्तरबार्ता परीक्षा स्थगन सम्बन्धी सूचना",
      description: "अन्तरबार्ता परीक्षा स्थगन सम्बन्धी सूचना",
      pdfLink:
        "https://www.nea.org.np/admin/assets/uploads/supportive_docs/77649212.jpeg",
    },
    {
      date: "2025-09-12",
      title: "अन्तरबार्ता परीक्षा स्थगन सम्बन्धी सूचना",
      description: "अन्तरबार्ता परीक्षा स्थगन सम्बन्धी सूचना",
      pdfLink:
        "https://www.nea.org.np/admin/assets/uploads/supportive_docs/77649212.jpeg",
    },
  ];

  const serviceLinks = [
    {
      title: "Post Your Complain",
      link: "https://crm.nea.org.np/complain",
    },
    {
      title: "Three Phase meter request",
      link: "https://crm.nea.org.np/new-connection",
    },
    {
      title: "Check Your Bill",
      link: "https://www.neabilling.com/viewonline",
    },
    {
      title: "Pay Your Bill",
      link: "https://www.nea.org.np/bill_payment",
    },
    {
      title: "Contact Information of DCS",
      link: "https://www.nea.org.np/dcscontacts",
    },
    {
      title: "Consumer Tarrif Rates",
      link: "https://nea.org.np/admin/assets/uploads/Consumer_Tarrif_data.pdf",
    },
    {
      title: "PPA Tarrif Rates",
      link: "https://nea.org.np/admin/assets/uploads/PPA_Rates.pdf",
    },
    {
      title: "Power Trade Department (DMS)",
      link: "https://ptddms.nea.org.np",
    },
  ];

  return (
    <section className="py-0 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap mt-6 -mx-4">
          {/* Left sidebar with officials */}
          <div className="w-full lg:w-1/4 xl:w-1/4 px-4 mb-4 xl:mb-0">
            {/* Managing Director */}
            <div className="bg-white rounded-lg shadow-md mb-4">
              <div className="bg-gray-50 px-4 py-3 border-b">
                <h6 className="text-sm font-semibold text-center uppercase text-gray-700">
                  Managing Director
                </h6>
              </div>
              <div className="p-6 text-center h-full hover:shadow-lg transition-shadow">
                <img
                  src="/Hitendra.jpg"
                  alt="Managing Director"
                  className="w-32 h-32 mx-auto border-2 border-blue-600 rounded-lg mb-3"
                />
                <p className="text-gray-800 font-medium">
                  Mr. Hitendra Dev Shakya
                </p>
              </div>
            </div>

            {/* Spokesperson */}
            <div className="text-center py-0 px-0 pb-6">
              <button className="focus:outline-none">
                <img
                  src="/RajanDhakal.jpg"
                  alt="Spokesperson"
                  className="w-32 h-32 mx-auto border-2 border-blue-600 rounded-full mb-2"
                />
              </button>
              <p className="text-gray-800 font-medium">Mr. Rajan Dhakal</p>
              <p className="text-gray-600 text-sm">Spokesperson</p>
            </div>
          </div>

          {/* Main content area */}
          <div className="w-full lg:w-3/4 px-4">
            <div className="flex flex-wrap h-full -mx-2">
              {/* News section */}
              <div className="w-full md:w-1/2 xl:w-2/3 px-2 mb-4 xl:mb-0">
                <div className="bg-white rounded-lg shadow-md h-full">
                  <div className="bg-gray-50 px-4 py-3 border-b">
                    <h6 className="text-sm font-semibold uppercase text-gray-700">
                      Latest news
                    </h6>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-4 pt-4">
                      {newsItems.map((item, index) => (
                        <li key={index} className="cursor-pointer">
                          <div className="pl-1">
                            <a
                              href="#!"
                              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                            >
                              <ArrowRight className="w-4 h-4 mr-2" />
                              <span className="text-sm">{item.title}</span>
                            </a>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative px-4 pt-4 border-t bg-gray-50">
                    <a
                      href="https://www.nea.org.np/notice"
                      className="text-blue-600 hover:text-blue-800 flex items-center justify-center transition-colors"
                    >
                      View more
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Services section */}
              <div className="w-full md:w-1/2 xl:w-1/3 px-2">
                <div className="space-y-4">
                  {serviceLinks.map((service, index) => (
                    <div
                      key={index}
                      className="bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                    >
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 text-center text-white hover:text-white no-underline"
                      >
                        <h6 className="text-xs font-semibold uppercase">
                          {service.title}
                        </h6>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content2;
