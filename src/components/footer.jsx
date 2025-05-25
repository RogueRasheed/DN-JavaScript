import React from "react";
import { FaXTwitter, FaInstagram } from "react-icons/fa6"; // FaXTwitter is from Font Awesome 6

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo or Brand */}
          <div className="text-lg font-semibold">
            <a
              href="#"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="hover:text-blue-400 transition duration-200"
            >
              Davies North & Associates
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 text-sm md:text-base">
            <a href="/" className="hover:text-blue-400 transition">Home</a>
            <a href="/about" className="hover:text-blue-400 transition">About</a>
            <a href="/services" className="hover:text-blue-400 transition">Services</a>
            <a href="/contact" className="hover:text-blue-400 transition">Contact</a>
          </div>

          {/* Get In Touch + Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="/contact"
              className="bg-[#253F75] hover:bg-[#2c56a1] px-6 py-3 rounded-md font-medium text-sm transition"
            >
              Get in Touch
            </a>

            <div className="flex space-x-4">
              {/* Twitter/X */}
              <a
                href="https://x.com/Daniel_Davies"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/ddaviesprn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Davies North & Associates. All rights reserved. <br /> Designed By Heed Designs
        </div>
      </div>
    </footer>
  );
};

export default Footer;
