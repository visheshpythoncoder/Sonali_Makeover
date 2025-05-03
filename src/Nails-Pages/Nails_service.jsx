import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const shapeVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      type: "spring",
    },
  }),
};

const nailServices = [
  {
    title: "Acrylic Nails",
    image: "./photos/n1.JPG",
    description: "Durable and stylish acrylic nails perfect for everyday glam.",
  },
  {
    title: "Gel Nails",
    image: "./photos/n3.JPG",
    description: "Glossy, chip-resistant gel nails with a lasting finish.",
  },
  {
    title: "Nail Art",
    image: "./photos/n7.JPG",
    description: "Creative and unique nail art customized to your style.",
  },
  {
    title: "French Tips",
    image: "./photos/n5.JPG",
    description: "Classic and elegant French manicure for a timeless look.",
  },
  {
    title: "Polygel Nails",
    image: "./photos/n9.JPG",
    description:
      "Hybrid nails offering the flexibility of gel and strength of acrylic.",
  },
];

const nailShapes = [
  "Square",
  "Squoval",
  "Oval",
  "Almond",
  "Coffin/Ballerina",
  "Stiletto",
  "Round",
  "Lipstick",
  "Flare/Duck",
];

const shapeImages = {
  Square: "./photos/n9.JPG",
  Squoval: "./photos/n9.JPG",
  Oval: "./photos/n3.JPG",
  Almond: "./photos/n7.JPG",
  "Coffin/Ballerina": "./photos/n11.JPG",
  Stiletto: "./photos/n10.JPG",
  Round: "./photos/n12.JPG",
  Lipstick: "./photos/n13.JPG",
  "Flare/Duck": "./photos/n14.JPG",
};

export default function NailService() {
  const phoneNumber = "+919423591208";
  const [current, setCurrent] = useState(0);
  const [selectedShape, setSelectedShape] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % nailServices.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const resetSelection = () => {
    setSelectedShape(null);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 p-6 gap-10">
      {/* Left: Sliding Card */}
      <div className="w-full lg:w-1/3 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold text-center mb-10 w-full bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-red-500"
        >
          Nail Services
        </motion.h1>

        <div className="relative w-full max-w-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-5 rounded-2xl shadow-xl"
            >
              <img
                src={nailServices[current].image}
                alt={nailServices[current].title}
                className="w-full h-[260px] object-cover rounded-xl mb-4"
              />
              <h2 className="text-xl font-semibold text-pink-600 text-center">
                {nailServices[current].title}
              </h2>
              <p className="text-sm text-gray-600 text-center">
                {nailServices[current].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <button
            onClick={() =>
              setCurrent((prev) =>
                prev === 0 ? nailServices.length - 1 : prev - 1
              )
            }
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white shadow p-2 rounded-full"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() =>
              setCurrent((prev) => (prev + 1) % nailServices.length)
            }
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white shadow p-2 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Middle: Nail Shapes */}
      <div className="w-full lg:w-1/3 text-center">
        <h3 className="text-3xl font-bold text-fuchsia-700 mb-6 tracking-wide underline underline-offset-4">
          Nail Shapes
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 px-4">
          {nailShapes.map((shape, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              animate="visible"
              variants={shapeVariants}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 10px 20px rgba(255, 0, 128, 0.3)",
              }}
              onClick={() => setSelectedShape(shape)}
              className="bg-gradient-to-br from-pink-200 via-fuchsia-100 to-purple-200 border border-fuchsia-400 text-purple-800 font-semibold text-base py-4 px-4 rounded-xl shadow-lg cursor-pointer transition-all duration-300"
            >
              {shape}
            </motion.div>
          ))}
        </div>

        {/* Reset Button */}
        <button
          onClick={resetSelection}
          className="mt-4 bg-gradient-to-r from-red-500 via-pink-500 to-red-400 font-extrabold px-6 py-3 rounded-full shadow-xl hover:scale-105 transition duration-300"
        >
          Reset Selection
        </button>
      </div>

      {/* Right: Conditional Content */}
      <div className="w-full lg:w-1/3 flex flex-col items-center text-center">
        {selectedShape ? (
          <motion.div
          layout
          className="mt-6 min-h-[250px] flex flex-col items-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedShape}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex flex-col items-center"
            >
              <h4 className="text-lg font-semibold text-fuchsia-700 mb-2">
                {selectedShape} Shape
              </h4>
              <div className="relative p-1 rounded-2xl bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-500 animate-border-shimmer shadow-2xl">
                <div className="rounded-2xl bg-white p-1">
                  <img
                    src={shapeImages[selectedShape]}
                    alt={selectedShape}
                    className="w-[340px] h-[300px] object-cover rounded-xl"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>        
        ) : (
          <>
            <h2 className="text-3xl font-semibold text-pink-700">
              Sarika Mehandole
            </h2>
            <p className="text-base text-gray-700 mt-2">
              Professional Makeup and Nails Artist
            </p>

            <button
              onClick={() =>
                window.open(
                  "https://www.instagram.com/desginer_nails_by_sarika/?utm_source=ig_web_button_share_sheet",
                  "_blank"
                )
              }
              className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full shadow hover:scale-105 transition duration-300"
            >
              <i className="bi bi-instagram"></i> Follow: desginer_nails_by_sarika
            </button>

            <button
              onClick={handleCallClick}
              className="mt-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold px-6 py-3 rounded-full shadow-xl hover:scale-105 transition duration-300"
            >
              📞 Call Now
            </button>
          </>
        )}
      </div>
    </div>
  );
}
