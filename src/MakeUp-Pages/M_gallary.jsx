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

  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-12 w-full min-h-screen px-4">
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
    </div>
  );
};

// Separate component for one section
const ImageSection = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Pick a random index
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentImage(randomIndex);
    }, 3000); // Change image every 3 seconds

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
