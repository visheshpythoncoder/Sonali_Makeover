import React, { useEffect, useRef, useState } from "react";
import ProfileSlider from "./Profile";
import "../css/style.css";
import Gallery from "./M_gallary";
import Service from "./M_service";
import AboutUs from "./M_about";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import ContactComponent from "./M_caontact";
import Form from "./M_form";
import Testimonial from "./M_testimonials";
import MakeupSlider from "./sub_service/MakeupComponentsSlider";
import NailService from "../Nails-Pages/Nails_service";
import N_gallary from "../Nails-Pages/N_gallary";
import NailTestimonials from "../Nails-Pages/N_testomonial";
import Academy from "../Nails-Pages/N_academy";
import CertificationGallery from "./Cirtificate";

const M_home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [activeLogo, setActiveLogo] = useState("both");
  const menuRef = useRef(null);
  const phoneNumber = "9423591208";

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
      const sectionLogoMap = [
        { id: "home", logo: "both" },
        { id: "services", logo: "makeup" },
        { id: "nail-services", logo: "nails" },
        { id: "academy", logo: "both" },
        { id: "register", logo: "both" },
        { id: "portfolio-makeup", logo: "makeup" },
        { id: "portfolio-nails", logo: "nails" },
        { id: "about", logo: "both" },
        { id: "testimonials-makeup", logo: "makeup" },
        { id: "testimonials-nails", logo: "nails" },
        { id: "contact", logo: "both" },
      ];

      for (let i = 0; i < sectionLogoMap.length; i++) {
        const { id, logo } = sectionLogoMap[i];
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id);
            setActiveLogo(logo);
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
    { id: "portfolio-makeup", label: "Portfolio" },
    { id: "about", label: "About" },
    { id: "testimonials-makeup", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <div
        className={`w-full z-50 transition-all duration-700 ${scrolled ? "fixed top-0 bg-white shadow-md" : ""}`}
      >
        <div
          className={`flex items-center justify-between px-4 ${scrolled ? "py-2 flex-row" : "py-4 flex-col"} transition-all duration-700`}
        >
          <div className={`flex ${scrolled ? "self-start" : "mb-2"} space-x-4`}>
            {(activeLogo === "makeup" || activeLogo === "both") && (
              <img
              src="./photos/lg3.png"
              alt="Makeup Logo"
              className={`logo ${scrolled ? "w-24 sm:w-32" : "w-40 sm:w-48 md:w-56"}`}
              style={{
                opacity: activeLogo === "makeup" || activeLogo === "both" ? 1 : 0,
                transform: activeLogo === "makeup" || activeLogo === "both" ? "scale(1)" : "scale(0.8)",
                filter: activeLogo === "makeup" || activeLogo === "both" ? "drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.3))" : "none",
              }}
            />
            
            
            )}
            {(activeLogo === "nails" || activeLogo === "both") && (
              <img
              src="./photos/n_logo1.png"
              alt="Nail Logo"
              className={`logo ${scrolled ? "w-24 sm:w-32" : "w-40 sm:w-48 md:w-56"}`}
              style={{
                opacity: activeLogo === "nails" || activeLogo === "both" ? 1 : 0,
                transform: activeLogo === "nails" || activeLogo === "both" ? "scale(1)" : "scale(0.8)",
                filter: activeLogo === "nails" || activeLogo === "both" ? "drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.3))" : "none",
              }}
            />
            
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          <ul className="hidden md:flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 font-bold text-sm sm:text-base text-[#4A3F35]">
            {navItems.map(({ id, label }) => (
              <li
                key={id}
                className={`hover:scale-105 hover:text-pink-600 duration-300 cursor-pointer ${activeSection === id ? "border-b-2 border-pink-600" : ""}`}
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
              <a onClick={() => setShowOptions((prev) => !prev)} className="hover:text-pink-500">
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

        {menuOpen && (
          <ul className="md:hidden flex flex-col items-center bg-white px-4 pb-4 font-bold text-sm text-[#4A3F35]">
            {navItems.map(({ id, label }) => (
              <li
                key={id}
                className={`my-2 hover:text-pink-600 cursor-pointer ${activeSection === id ? "border-b-2 border-pink-600" : ""}`}
                onClick={() => scrollToSection(id)}
              >
                {label}
              </li>
            ))}
            <li
              ref={menuRef}
              className="my-2 border-2 px-4 py-2 rounded-xl bg-[brown] text-white hover:scale-105 duration-300 cursor-pointer"
            >
              <a onClick={() => setShowOptions((prev) => !prev)} className="hover:text-pink-500">
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

      <div className={`${scrolled ? "pt-52" : "pt-4"} px-2`}>
        <div className="flex flex-col">
          <div id="home">
            <ProfileSlider />
          </div>
          <div id="services">
            <Service />
            <MakeupSlider />
          </div>
          <div id="nail-services">
            <NailService />
          </div>
          <div id="academy">
            <Academy />
            <CertificationGallery/>
          </div>
          <div id="register">
            <Form />
          </div>
          <div id="portfolio-makeup">
            <Gallery />
          </div>
          <div id="portfolio-nails">
            <N_gallary />
          </div>
          <div id="about">
            <AboutUs />
          </div>
          <div id="testimonials-makeup">
            <Testimonial />
          </div>
          <div id="testimonials-nails">
            <NailTestimonials />
          </div>
          <div id="contact">
            <ContactComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default M_home;


