import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo-1.png";
import { useState } from "react";

import homeBg from "../assets/IMG_1129.jpeg";
import aboutBg from "../assets/IMG_2770.jpeg";
import contactBg from "../assets/IMG_8189.jpeg";
import servicesBg from "../assets/IMG_2666.jpeg";

const HeroHeader = ({ title, subtitle, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const routeConfig = {
    "/": {
      bg: homeBg,
      defaultTitle: "Bridging Government, Industries, and Indigenous Relations ",
      defaultSubtitle: "Strategic advocacy and communications solutions for the energy sector",
    },
    "/about": {
      bg: aboutBg,
      defaultTitle: "About Davies North",
      defaultSubtitle: "Expert consulting services to take your organization to the next level",
    },
    "/contact": {
      bg: contactBg,
      defaultTitle: "Contact Us",
      defaultSubtitle: "Let us represent you: getting what you need!",
    },
    "/services": {
      bg: servicesBg,
      defaultTitle: "Our Services",
      defaultSubtitle: "Expert Services to Amplify Your Voice",
    },
  };

  const pathname = location.pathname;
  const currentRoute = routeConfig[pathname] || {
    bg: homeBg,
    defaultTitle: "Page Not Found",
    defaultSubtitle: "We couldn't find what you were looking for.",
  };

  const { bg, defaultTitle, defaultSubtitle } = currentRoute;

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: bg
          ? `linear-gradient(rgba(37, 63, 117, 0.85), rgba(37, 63, 117, 0.85)), url(${bg})`
          : undefined,
      }}
    >
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center text-white">
        <img src={logo} alt="Logo" className="h-10" />

        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <div className="hidden md:flex gap-6 font-medium">
          {["Home", "About", "Contact", "Services"].map((text) => (
            <NavLink
              key={text}
              to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full transition-all ${
                  isActive ? "bg-white text-[#253F75]" : "hover:text-blue-300"
                }`
              }
            >
              {text}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#253F75] text-white flex flex-col items-center gap-4 py-6 md:hidden z-40">
          {["Home", "About", "Contact", "Services"].map((text) => (
            <NavLink
              key={text}
              to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
              className="text-lg"
              onClick={() => setIsOpen(false)}
            >
              {text}
            </NavLink>
          ))}
        </div>
      )}

      {/* Hero section */}
      <div className="h-screen flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight max-w-4xl">
          {title || defaultTitle}
          </h1>
        <p className="text-lg md:text-xl mb-6">
          {subtitle || defaultSubtitle}
        </p>

        {/* Conditional Buttons */}
            {pathname === "/" && (
              <div className="flex gap-4 mb-6">
                <NavLink to="/contact" 
                className="bg-[#253F75] text-[white] px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#2c56a1] transition">Get in Touch</NavLink>
                
                <NavLink to="/services" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#253F75] transition">What We Do</NavLink>
              </div>
            )}

                  {pathname === "/about" && (
        <div className="mb-6">
          <a
            href="tel:2507875847"
            className="bg-[#253F75] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#2c56a1] transition"
          >Call Us
          </a>
        </div>
      )}

        {pathname === "/contact" && (
  <div className="mb-6">
    <a
      href="tel:2507875847"
      className="bg-[#253F75] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#2c56a1] transition"
    >
      Give Us A Call
    </a>
  </div>
)}


      </div>
    </div>
  );
};

export default HeroHeader;
