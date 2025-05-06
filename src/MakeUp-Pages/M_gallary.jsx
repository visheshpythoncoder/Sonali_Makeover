import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Gallery = () => {
  const images = [
    "./photos/IMG_1385.JPG",
    "./photos/im.jpeg",
    "./photos/WND_8640.JPG",
    "./photos/im7.jpg",
    "./photos/im3.jpeg",
    "./photos/2e.jpeg",
    "./photos/im5.jpg",
    "./photos/im6.jpg",
  ];

  // Divide images into 4 sections randomly
  const sections = [[], [], [], []];
  images.forEach((img, idx) => {
    sections[idx % 4].push(img);
  });

  const [showOverlay, setShowOverlay] = useState(false);

  // Disable scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = showOverlay ? "hidden" : "auto";
  }, [showOverlay]);

  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-12 w-full min-h-screen px-4 relative">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#D1A684] via-[#98694B] to-[#3A241B] drop-shadow-lg"
      >
        MakeUp PortFolio
      </motion.h2>

      {/* 4 Section Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full justify-center items-center">
        {sections.map((group, idx) => (
          <ImageSection key={idx} images={group} />
        ))}
      </div>

      {/* Full Overlay */}
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
                  alt={`Makeup ${i}`}
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
      {/* Show All Button */}
      <button
        onClick={() => setShowOverlay(true)}
        className="px-8 py-3 bg-gradient-to-r from-yellow-900 to-orange-800 text-white rounded-2xl shadow-lg hover:from-orange-800 hover:to-yellow-900 transition-all duration-500 transform hover:scale-105"
      >
        See All Photos
      </button>
    </div>
  );
};

// Section Component
const ImageSection = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentImage(randomIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full md:w-[250px] lg:w-[300px] h-[400px] bg-black rounded-2xl overflow-hidden shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          alt="Gallery"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
