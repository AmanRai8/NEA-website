import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-center">
        <p className="text-gray-300 text-sm text-center">
          © {new Date().getFullYear()}{" "}
          <a
            href="http://www.nea.org.np"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            Nepal Electricity Authority
          </a>{" "}
          ❘ All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
