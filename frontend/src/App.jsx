import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";
import InBetweenSection from "./components/InBetweenSection";
import Content3 from "./components/Content3";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />
      <Content1 />
      <br />
      <br />
      <br />
      <Content2 />
      <InBetweenSection />
      <br />
      <Content3 />
      {/* <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-10 text-center">
          <h1 className="text-2xl font-bold">Welcome to NEA</h1>
          <p className="mt-2 text-gray-600">
            Your content goes here. Add sections, components, or pages inside
            this area.
          </p>
        </div>
      </main> */}

      <Footer />
    </div>
  );
};

export default App;
