import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Content1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = ["/1.jpg", "/content1.jpg", "/4.jpg", "/content11.jpg"];

  const slideInterval = useRef(null);

  const startAutoSlide = () => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
  };

  const stopAutoSlide = () => {
    if (slideInterval.current) clearInterval(slideInterval.current);
  };

  const nextSlide = () => {
    stopAutoSlide();
    setCurrentSlide((prev) => (prev + 1) % images.length);
    startAutoSlide();
  };

  const prevSlide = () => {
    stopAutoSlide();
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    startAutoSlide();
  };

  const goToSlide = (index) => {
    stopAutoSlide();
    setCurrentSlide(index);
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  return (
    <section className="w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[550px]">
      <div className="w-full h-full relative overflow-hidden">
        {/* Slides */}
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
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 text-gray-900 rounded-full p-2 shadow-lg transition-all duration-300 z-10"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 text-gray-900 rounded-full p-2 shadow-lg transition-all duration-300 z-10"
        >
          <ChevronRight size={28} />
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-blue-600 w-6"
                  : "bg-white/70 w-3 hover:bg-blue-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content1;
