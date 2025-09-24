import React from "react";

const links = [
  {
    img: "/neamail.png",
    href: "https://mail.nea.org.np",
    title: "Check Mail",
    description: "Pick up your email from anywhere!",
    width: 40,
  },
  {
    img: "/ebidding.png",
    href: "https://bolpatra.gov.np/egp/",
    title: "Ebidding",
    description: "Place your online bid from anywhere!",
    width: 50,
  },
  {
    img: "/CIP.png",
    href: "https://cip.nea.org.np/",
    title: "CIP",
    description: "Consumer Information Platform!",
    width: 50,
  },
];

const InBetweenSection2 = () => {
  return (
    <section className="bg-blue-700 py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center text-white gap-6">
          {links.map((link, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left sm:w-1/3"
            >
              <img
                src={link.img}
                alt={link.title}
                width={link.width}
                className="flex-shrink-0 mb-2 sm:mb-0"
              />
              <div className="sm:ml-4">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mb-1 px-4 py-2 border border-white rounded-full text-white hover:bg-white hover:text-blue-700 transition-colors"
                >
                  {link.title}
                </a>
                <p className="text-sm">{link.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InBetweenSection2;
