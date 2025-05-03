import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

const artists = [
  {
    name: "Sarika Mehandole",
    image1:"./photos/n_logo1.png",
    user: "_desginer_nails_by_sarika",
    link: "https://www.instagram.com/desginer_nails_by_sarika/?utm_source=ig_web_button_share_sheet",
    role: "Nail Artist & Makeup Expert",
    description:
      "Sarika crafts luxurious nail art—from sleek minimalism to bold glam sets. Every design is a statement of elegance and creativity.",
    image: "./photos/pr13.png",
    bgColor: "bg-gradient-to-br from-purple-100 via-white to-pink-50",
  },
  {
    name: "Sonali Mehandole",
    image1:"./photos/lg3.png",
    user: "_sonali_makeover",
    link: "https://www.instagram.com/_sonali_makeover?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    role: "Makeup Artist & Hair Stylist",
    description:
      "Sonali enhances natural beauty with refined makeup, voluminous hair styling, and timeless bridal elegance customized for every face.",
    image: "./photos/sonu_pr.png",
    bgColor: "bg-gradient-to-br from-pink-100 via-white to-purple-50",
  },
];

const AboutUs = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { name, user, link, role, description, image, bgColor,image1 } = artists[current];

  return (
    <div className={`w-full min-h-screen flex items-center justify-center ${bgColor} transition-all duration-500 px-4`}>
      <div className="max-w-7xl w-full p-10 md:p-16 relative z-10">
        <h1 className="text-6xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
          Meet Our Artists
        </h1>

        <AnimatePresence mode="wait">
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-14"
          >
            {/* Enlarged Circular Profile */}
            <div className="flex justify-center">
          <motion.div
            className="w-[420px] h-[420px] rounded-full overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.2)] border-[12px] border-white ring-8 ring-pink-300 transition-all duration-500"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

            {/* Text Content */}
            <div className="text-center md:text-left">
              <div className="flex justify-center items-center">

              <img src={image1} alt="Logo 1" className="w-[250px] object-contain" style={{filter:"drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.3))"}} />
              </div>
              <h2 className="text-3xl font-bold text-pink-700 mb-3">{role}</h2>
              <h3 className="text-2xl text-gray-800 font-semibold mb-4">{name}</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">{description}</p>
              <button
                onClick={() => window.open(link, "_blank")}
                className="inline-flex items-center gap-2 bg-pink-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-pink-600 transition duration-300"
              >
                <FaInstagram className="text-xl" />
                {user}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AboutUs;
