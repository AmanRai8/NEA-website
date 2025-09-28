import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.nav
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative bg-gradient-to-r from-[#0a1f44] via-[#123b70] to-[#0a1f44] shadow-lg py-3"
    >
      {/* Floating glow effect behind logo */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[#18cef2] blur-3xl opacity-40"
        />
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 relative z-10">
        {/* Logo */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.05, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="flex items-center z-10 mb-2 md:mb-0"
        >
          <img
            src="./nea-logo.png"
            alt="NEA"
            className="h-16 md:h-20 w-auto "
          />
        </motion.a>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="flex items-center text-center"
        >
          <motion.a
            href="https://www.nea.org.np/admin/assets/uploads/nea_white_paper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 12px #18cef2",
              color: "#18cef2",
            }}
            className="font-bold text-sm sm:text-base md:text-lg text-white transition-all duration-300"
          >
            <p className="m-0 leading-snug">*** ने. वि. प्रा श्वेतपत्र ***</p>
            <p className="m-0 leading-snug">(बैशाख २०८२)</p>
          </motion.a>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Header;
