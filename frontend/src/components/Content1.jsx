import React, { useState } from "react";

const Content1 = () => {
  const [activeTab, setActiveTab] = useState("import");

  return (
    <section className="py-0 px-0">
      <div className="flex flex-col lg:flex-row">
        {/* Slider Section */}
        <div className="lg:w-3/4 w-full relative">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="/content1.jpg"
              alt="content image"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Energy Details Section */}
        <div className="lg:w-1/4 w-full mt-4 lg:mt-0 lg:ml-4">
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

          <div className="mt-2">
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
