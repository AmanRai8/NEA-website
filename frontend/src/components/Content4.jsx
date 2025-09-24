import React from "react";

const downloads = [
  {
    title:
      "सार्बजानिक चार्जिङ स्टेशन सम्बन्धि बिद्युत वितरण नियमावली, २०७८ को व्यवस्थामा संसोधन",
    href: "https://www.nea.org.np/admin/assets/uploads/supportive_docs/91920050.pdf",
    filename: "91920050.pdf",
  },
  {
    title: "विद्युत वितरण विनियमावली २०७८ मा संशोधन",
    href: "https://www.nea.org.np/admin/assets/uploads/supportive_docs/76366186.pdf",
    filename: "76366186.pdf",
  },
  {
    title: "विद्युत वितरण विनियमावली २०७८ (संशोधन सहित)",
    href: "https://www.nea.org.np/admin/assets/uploads/supportive_docs/46688479.pdf",
    filename: "46688479.pdf",
  },
  {
    title:
      "नेपाल विद्युत प्राधिकरण कर्मचारी सेवा, शर्त विनियमावली २०७५ (एघारौं संशोधन सहित)",
    href: "https://www.nea.org.np/admin/assets/uploads/supportive_docs/59937688.pdf",
    filename: "59937688.pdf",
  },
  {
    title: "नेपाल विद्युत प्राधिकरण, भ्रमण खर्च विनियमावली, २०६५ (संशोधन सहित)",
    href: "https://www.nea.org.np/admin/assets/uploads/supportive_docs/85920059.pdf",
    filename: "85920059.pdf",
  },
];

const photoGallery = ["/book1.jpg", "/book2.jpeg", "/book3.jpg"];

const annualPublications = [
  {
    img: "/book4.jpg",
    href: "https://www.nea.org.np/admin/assets/uploads/annual_publications/Annual_Report_40_Anniversery.pdf",
  },
  {
    img: "book5.jpg",
    href: "https://www.nea.org.np/admin/assets/uploads/annual_publications/Generation_2081_82.pdf",
  },
  {
    img: "book6.jpg",
    href: "https://www.nea.org.np/admin/assets/uploads/annual_publications/Transmission_Directorate_2082.pdf",
  },
  {
    img: "book7.jpg",
    href: "https://www.nea.org.np/admin/assets/uploads/annual_publications/NEA_DCSD_Maganize_2082.pdf",
  },
  {
    img: "book8.jpg",
    href: "https://www.nea.org.np/admin/assets/uploads/annual_publications/vidyut_2082.pdf",
  },
];

const Content4 = () => {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Downloads */}
          <div className="lg:w-1/4">
            <h6 className="text-sm uppercase border-b pb-2 mb-4 font-semibold">
              Downloads
            </h6>
            <div className="flex flex-col space-y-2">
              {downloads.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={item.filename}
                  className="text-gray-700 hover:text-blue-600 text-sm"
                  title={item.title}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="lg:w-1/4">
            <h6 className="text-sm uppercase border-b pb-2 mb-4 font-semibold">
              Photo Gallery
            </h6>
            <div className="space-y-2">
              {photoGallery.map((src, idx) => (
                <a
                  key={idx}
                  href="https://www.nea.org.np/photo_gallery"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={src}
                    alt={`Photo ${idx + 1}`}
                    className="w-full h-24 object-cover rounded"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Annual Publications */}
          <div className="lg:w-2/4">
            <h6 className="text-sm uppercase border-b pb-2 mb-4 font-semibold">
              Annual Publications
            </h6>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
              {annualPublications.map((pub, idx) => (
                <div key={idx} className="rounded shadow overflow-hidden">
                  <a href={pub.href} target="_blank" rel="noopener noreferrer">
                    <img
                      src={pub.img}
                      alt={`Publication ${idx + 1}`}
                      className="w-full h-32 object-cover"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content4;
