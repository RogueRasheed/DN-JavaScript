import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/DLogoNB1.png";
import { useState } from "react";

import homeBg from "../assets/IMG_1129.jpeg";
import aboutBg from "../assets/IMG_2770.jpeg";
import contactBg from "../assets/IMG_8189.jpeg";
import servicesBg from "../assets/IMG_2666.jpeg";

const HeroHeader = ({ title, subtitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const routeConfig = {
    "/": {
      bg: homeBg,
      defaultTitle:
        "Bridging Government, Industries, and Indigenous Relations",
      defaultSubtitle:
        "Strategic advocacy and communications solutions for the energy sector",
    },
    "/about": {
      bg: aboutBg,
      defaultTitle: "About Davies North",
      defaultSubtitle:
        "Expert consulting services to take your organization to the next level",
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
        // Slightly dimmer overlay for clarity
        backgroundImage: `linear-gradient(rgba(37, 63, 117, 0.75), rgba(37, 63, 117, 0.75)), url(${bg})`,
      }}
    >
      {/* Aurora Navbar */}
      <nav className="relative flex justify-between items-center p-2.5 z-10 aurora-nav">
        {/* Reverted logo size */}
        <img
          src={logo}
          alt="Logo"
          className="h-15 w-35 z-20 relative transition-all duration-300"
        />

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

      {/* Aurora animation keyframes */}
      <style>
        {`
          @keyframes auroraMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .aurora-nav {
            background: linear-gradient(
              120deg,
              rgba(3, 194, 148, 0.8),
              rgba(20, 184, 166, 0.35),
              rgba(59, 130, 246, 0.2)
            );
            background-size: 300% 300%;
            animation: auroraMove 6s ease-in-out infinite;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            
          }
        `}
      </style>

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

        {pathname === "/" && (
          <div className="flex gap-4 mb-6">
            <NavLink
              to="/contact"
              className="bg-[#253F75] text-[white] px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#2c56a1] transition"
            >
              Get in Touch
            </NavLink>
            <NavLink
              to="/services"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#253F75] transition"
            >
              What We Do
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroHeader;
