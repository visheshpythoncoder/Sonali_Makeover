import React, { useEffect, useRef, useState } from "react";
import "../css/style.css";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import N_profile from "./N_profile"
import N_gallary from "./N_gallary"
import NailsForm from "./N_form";
import Academy from "./N_academy";
import NailTestimonials from "./N_testomonial";
import NailService from "./Nails_service";


const N_home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const [showOptions, setShowOptions] = useState(false);
  const menuRef = useRef(null);
  const phoneNumber = "9423591208";

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      const sections = ["home", "about", "services", "portfolio", "academy","contact","register","testimonials"];

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -100;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "academy", label: "Academy" },
    { id: "register", label: "Register & Booking" },
    { id: "portfolio", label: "Portfolio" },
    { id: "about", label: "About" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },

  ];

  return (
    <>
      {/* Navigation Bar */}
      <div
  className={`w-full z-50 transition-all duration-700 ${
    scrolled ? "fixed top-0 bg-white shadow-md" : ""
  }`}
>

        <div
          className={`flex items-center justify-between px-4 ${
            scrolled ? "py-2 flex-row" : "py-4 flex-col"
          } transition-all duration-700`}
        >
          {/* Logo */}
          <div className={`${scrolled ? "self-start" : "mb-2"}`}>
            <img
              src="src/photos/nail_logo.png"
              alt="Logo"
              className={`${
                scrolled ? "w-32 sm:w-40" : "w-52 sm:w-60 md:w-72"
              } transition-all duration-700`}
            />
          </div>

          {/* Toggle for mobile view */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop navigation */}
          <ul className="hidden md:flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 font-bold text-sm sm:text-base text-[#4A3F35]">
            {navItems.map(({ id, label }) => (
              <li
                key={id}
                className={`hover:scale-105 hover:text-pink-600 duration-300 cursor-pointer ${
                  activeSection === id ? "border-b-2 border-pink-600" : ""
                }`}
                onClick={() => scrollToSection(id)}
              >
                {label}
              </li>
            ))}
            
            <li
              ref={menuRef}
              style={{ zIndex: 50 }}
              className="border-2 relative inline-block p-2 rounded-xl bg-[brown] text-white hover:scale-105 duration-300 cursor-pointer"
            >
              <a
                onClick={() => setShowOptions((prev) => !prev)}
                className="hover:text-pink-500"
              >
                Book Now
              </a>
              {showOptions && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl p-3"
                  style={{ position: "absolute", zIndex: 100 }}
                >
                  <a
                    href={`https://wa.me/${phoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-green-600 hover:bg-green-50 rounded-md transition"
                  >
                    <FaWhatsapp /> WhatsApp
                  </a>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md transition"
                  >
                    <FaPhone /> Call Now
                  </a>
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col items-center bg-white px-4 pb-4 font-bold text-sm text-[#4A3F35]">
            {navItems.map(({ id, label }) => (
              <li
                key={id}
                className={`my-2 hover:text-pink-600 cursor-pointer ${
                  activeSection === id ? "border-b-2 border-pink-600" : ""
                }`}
                onClick={() => scrollToSection(id)}
              >
                {label}
              </li>
            ))}
            <li
              ref={menuRef}
              className="my-2 border-2 px-4 py-2 rounded-xl bg-[brown] text-white hover:scale-105 duration-300 cursor-pointer"
            >
              <a
                onClick={() => setShowOptions((prev) => !prev)}
                className="hover:text-pink-500"
              >
                Book Now
              </a>
              {showOptions && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl p-3"
                  style={{ position: "absolute", zIndex: 100 }}
                >
                  <a
                    href={`https://wa.me/${phoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-green-600 hover:bg-green-50 rounded-md transition"
                  >
                    <FaWhatsapp /> WhatsApp
                  </a>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md transition"
                  >
                    <FaPhone /> Call Now
                  </a>
                </div>
              )}
            </li>
          </ul>
        )}
      </div>

      {/* Page Sections */}
      <div className={`${scrolled ? "pt-52" : "pt-4"} px-2`}>
  <div className="flex flex-col space-y-12"> {/* Adjust space-y-24 as needed */}
    <div id="home">
      <N_profile/>
    </div>
    
    <div id="services">
      <NailService/>
    </div>
    <div id="academy">
      <Academy/>
    </div>
    <div id="register">
      <NailsForm/>
    </div>
    <div id="portfolio">
      <N_gallary/>
    </div>
    <div id="testimonials">
      <NailTestimonials/>
    </div>
    
  </div>
</div>

    </>
  );
};

export default N_home;
