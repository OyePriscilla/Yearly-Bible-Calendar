import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-black text-white px-4 py-3 flex flex-col md:flex-row items-center justify-between shadow-md z-50 h-24">
      <div className="text-center md:text-left text-sm md:text-base mb-2 md:mb-0">
        <h1 className="font-semibold text-xs md:text-sm text-gray-300 leading-tight">
          Credit to Henry Groves, Creator of the Yearly Bible Calendar
        </h1>
        <p className="mt-1 text-xs md:text-sm text-gray-400 leading-tight">
          Henry Groves developed the Yearly Bible Calendar to facilitate systematic and comprehensive reading of the Scriptures, ensuring that readers engage with both the Old and New Testaments over the course of a year. This structured approach helps individuals avoid confining their reading to favorite passages, promoting a more holistic understanding of the Bible.
        </p>
        <p className="mt-1 text-xs md:text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Bible Yearly Calendar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
