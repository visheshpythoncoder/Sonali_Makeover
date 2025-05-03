import React, { useState, useEffect } from "react";
import { FaPaintBrush } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const zoomIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5 },
  },
};

const images = [
  "./photos/sonuandsaru.png",
  "photos/certify/c30.jpeg",
  "photos/certify/c31.jpeg",
  "./photos/pr7.JPG",
  "./photos/pr11.jpeg",
  "./photos/pr9.png",



];

const sections = [
  {
    title: "What We Provide",
    items: [
      "Professional kits with student discounts",
      "Certifications in makeup & nails",
      "Hands-on client training",
      "Expert mentorship",
    ],
  },
  {
    title: "What We Teach",
    items: [
      "Bridal, HD, and Airbrush Makeup",
      "Nail Art, Extensions & Gel Polish",
      "Editorial & Fashion Styles",
      "Color Theory & Skin/Nail Health",
    ],
  },
  {
    title: "Student Practice",
    items: [
      "Daily sessions & demos",
      "Live assignments",
      "Before/After documentation",
      "Portfolio building",
    ],
  },
  {
    title: "Shoot Management",
    items: [
      "Managing makeup/nail shoots",
      "Working with photographers",
      "On-set etiquette & timing",
      "Creating a shoot experience",
    ],
  },
];

const Academy = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen p-10 animate-gradient bg-gradient-to-r from-[#F9C6D9] via-[#D8A39D] to-[#B97B6D] bg-size-200">
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 justify-between">
        
        {/* Left Section - Hero Text */}
        <motion.div
          className="text-center lg:text-left lg:w-2/3 space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex flex-wrap justify-center items-center space-x-0 md:space-x-6 mb-6">
            <img
              src="./photos/lg3.png"
              alt="Logo 1"
              className="w-32 sm:w-40 md:w-56 object-contain mb-4 md:mb-0"
              style={{filter:"drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.3))"}}

            />
            <motion.h1
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="text-5xl text-pink-500 sm:text-6xl md:text-[90px] mx-4 md:mx-0 font-extrabold drop-shadow-lg"
            >
              &
            </motion.h1>
            <img
              src="./photos/n_logo1.png"
              alt="Logo 2"
              className="w-32 sm:w-40 md:w-56 object-contain mb-4 md:mb-0 "
              style={{filter:"drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.3))"}}
            />
          </div>

          <motion.h1
            className="text-5xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-[#3B2211]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Sonali_MakeOver & Sarika_Nails Academy
          </motion.h1>

          <p className="text-[#7B4A32] text-xl sm:text-2xl font-light">
            Transform your passion into profession with hands-on training in
            makeup & nail artistry, from beginner to expert.
          </p>

          <p className="font-medium text-xl">
            <strong>Instructor: </strong>
            <Typewriter
              words={["Sonali & Sarika Mehandole, Professional Makeup Artists"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={60}
              delaySpeed={1000}
            />
          </p>
        </motion.div>

        {/* Right Section - Image Carousel */}
        <div className="lg:w-1/3 relative w-full h-[350px] p-1 bg-gradient-to-tr from-pink-400 via-purple-400 to-yellow-300 sm:h-[450px] overflow-hidden rounded-lg shadow-xl transform transition duration-700 ease-in-out hover:scale-105">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={images[current]}
              alt="Academy"
              className="w-full h-full object-cover rounded-lg"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Sections with Cards */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 font-playfair">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={zoomIn}
            className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out"
          >
            <h4 className="text-3xl text-pink-600 font-bold mb-6 tracking-wide">
              {section.title}
            </h4>
            <ul className="space-y-5">
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start text-gray-600 text-lg hover:text-pink-500 transition-colors duration-300"
                >
                  <FaPaintBrush className="text-pink-500 mr-4 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Academy;
