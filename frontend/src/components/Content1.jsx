import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Content1 = () => {
  const [activeTab, setActiveTab] = useState("import");
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = ["/1.jpg", "/content1.jpg", "/4.jpg", "/content11.jpg"];

  const slideInterval = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
    resetInterval();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    resetInterval();
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetInterval();
  };

  const resetInterval = () => {
    if (slideInterval.current) clearInterval(slideInterval.current);
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
  };

  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(slideInterval.current);
  }, [images.length]);

  return (
    <section className="py-0 px-0">
      <div className="flex flex-col lg:flex-row">
        {/* Slider Section */}
        <div className="lg:w-3/4 w-full relative overflow-hidden rounded-lg shadow-lg">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`slide-${index}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 text-gray-800 rounded-full p-2 shadow-md transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 text-gray-800 rounded-full p-2 shadow-md transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>

          {/* Navigation Dots */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-blue-600 w-5"
                    : "bg-white/70 hover:bg-blue-400"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Energy Details Section */}
        <div className="lg:w-1/4 w-full mt-4 lg:mt-0 lg:ml-4 bg-white rounded-lg shadow-md">
          <div className="flex border-b border-gray-300">
            <button
              className={`flex-1 py-2 text-center font-medium ${
                activeTab === "import"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("import")}
            >
              Energy Details
            </button>
            <button
              className={`flex-1 py-2 text-center font-medium ${
                activeTab === "iex"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("iex")}
            >
              IEX
            </button>
          </div>

          <div className="mt-2 px-4 pb-4">
            {activeTab === "import" && (
              <ul className="text-primary space-y-1">
                <li>
                  <h6>Export – 22793 MWh</h6>
                </li>
                <li>
                  <h6>Interruption – 50 MWh</h6>
                </li>
                <li>
                  <h6>Total Energy Demand – 61922 MWh</h6>
                </li>
                <li>
                  <h6>National Energy Demand – 39129 MWh</h6>
                </li>
                <li>
                  <h6>Total Peak Demand – 2910 MW</h6>
                </li>
                <li>
                  <h6>National Peak Demand – 1922 MW</h6>
                </li>
                <li>
                  <h6>NEA – 7537 MWh</h6>
                </li>
                <li>
                  <h6>NEA Subsidiary Companies – 13384 MWh</h6>
                </li>
                <li>
                  <h6>IPP – 40951 MWh</h6>
                </li>
              </ul>
            )}
            {activeTab === "iex" && (
              <ul className="text-primary space-y-1">
                <li>No IEX data available</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content1;
