import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const makeupSlides = [
  { image: "./photos/16.png", text: "Bridal Makeover" },
  { image: "./photos/17.png", text: "Editorial Makeover" },
  { image: "./photos/19.png", text: "Traditional Makeover" },
  { image: "./photos/18.png", text: "Party Makeover" },
];

const hairSlides = [
  { image: "./photos/hr1.jpg", text: "Hair Style 1" },
  { image: "./photos/hr2.jpg", text: "Hair Style 2" },
  { image: "./photos/hr3.jpg", text: "Hair Style 3" },
  { image: "./photos/hr4.jpg", text: "Hair Style 4" },
];

const AutoSlider = ({ slides, small }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div
      className={`relative mx-auto rounded-2xl shadow-lg bg-white overflow-hidden p-0 m-0 ${
        small ? "w-[90vw] max-w-[320px]" : "w-[90vw] max-w-[320px]"
      }`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].image}
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 30, opacity: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          className="w-full relative"
        >
          <div className="w-full h-[300px] sm:h-[400px] overflow-hidden">
            <img
              src={slides[index].image}
              alt={slides[index].text}
              className="w-full h-full object-cover block"
              loading="lazy"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].text}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute bottom-0 w-full font-bold text-center bg-black bg-opacity-60 text-pink-400 font-DancingScript text-xl sm:text-2xl py-2 m-0"
        >
          {slides[index].text}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const Service = () => {
  return (
    <div className="bg-gray-100 py-10 px-4">
      <h1
  className="text-center font-pacifico text-4xl md:text-5xl font-semibold text-[#A77454] mb-12 animate-fade-in-up drop-shadow-md"
>
  ✨ Makeup Services ✨
</h1>


      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4 text-[#98694B]">Makeup Looks</h2>
          <AutoSlider slides={makeupSlides} small />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4 text-[#98694B]">Hair Styles</h2>
          <AutoSlider slides={hairSlides} />
        </div>
      </div>
    </div>
  );
};

export default Service;
