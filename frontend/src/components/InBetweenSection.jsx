import React from "react";

const images = ["/banner.jpg"];

const InBetweenSection = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto h-full">
        <div className="overflow-hidden rounded flex justify-center">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className="h-40 w-300 rounded"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InBetweenSection;
