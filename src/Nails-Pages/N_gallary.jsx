import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "./photos/n1.JPG",
  "./photos/n2.JPG",
  "./photos/n3.JPG",
  "./photos/n4.JPG",
  "./photos/n5.JPG",
  "./photos/n6.JPG",
  "./photos/n7.JPG",
  "./photos/n8.JPG",
  "./photos/n9.JPG",
  "./photos/n10.JPG",
  "./photos/n11.JPG",
  "./photos/n12.JPG",
  "./photos/n13.JPG",
  "./photos/n14.JPG",
  "./photos/n15.JPG",
  "./photos/n16.JPG",
  "./photos/n17.JPG",

];

export default function N_gallary() {
  const [index, setIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Disable scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = showOverlay ? "hidden" : "auto";
  }, [showOverlay]);

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white">
      {/* Overlay for all images */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center"
          >
            <div className="relative w-full max-w-7xl h-[90vh] bg-white/10 rounded-xl p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Nail ${i}`}
                  className="w-full h-[350px] object-cover rounded-xl shadow-xl"
                />
              ))}
              {/* Close button */}
              <button
                onClick={() => setShowOverlay(false)}
                className="fixed top-6 right-6 z-50 bg-white/20 backdrop-blur-lg text-white text-3xl font-bold px-4 py-2 rounded-full hover:bg-pink-500/60 transition"
              >
                &times;
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main gallery section */}
      <div
        style={{
          background:
            "linear-gradient(to bottom right, #3a1c71, #d76d77, #ffaf7b)",
          boxShadow: "0 4px 15px rgba(255, 105, 180, 0.7)",
        }}
        className="w-[90vw] max-w-6xl h-[70vh] flex flex-col md:flex-row items-center justify-center overflow-hidden rounded-2xl border border-gray-700"
      >
        {/* Left: Text and Button */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center px-6 md:px-12 py-8 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 drop-shadow-lg"
          >
            Nails PortFolio
          </motion.h2>
          <motion.h2
            className="text-xl md:text-2xl font-medium text-gray-300"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Take a peek at our most-loved nail styles — simple, elegant, and
            stunning.
          </motion.h2>
          <button
            onClick={() => setShowOverlay(true)}
            className="mt-6 px-6 py-2 bg-gradient-to-r from-pink-500 to-indigo-500 text-white rounded-lg shadow-md hover:bg-gradient-to-l transition-all duration-300"
          >
            See All Images
          </button>
        </div>

        {/* Right: Auto Slider */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden rounded-2xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              alt={`Image ${index}`}
              className="absolute w-full h-full object-cover rounded-2xl scale-105"
              initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              exit={{ clipPath: "inset(0% 0% 0% 100%)" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
