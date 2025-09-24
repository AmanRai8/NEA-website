import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";
import InBetweenSection from "./components/InBetweenSection";
import Content3 from "./components/Content3";
import InBetweenSection2 from "./components/InBetweenSection2";
import Content4 from "./components/Content4";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />
      <main className="flex-grow">
        <Content1 className="my-8" />
        <Content2 className="my-8" />
        <InBetweenSection className="my-8" />
        <Content3 className="my-8" />
        <InBetweenSection2 className="my-8" />
        <Content4 className="my-8" />
      </main>
      <Footer />
    </div>
  );
};

export default App;
