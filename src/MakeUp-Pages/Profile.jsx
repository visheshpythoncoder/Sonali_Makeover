import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProfileSlider() {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 4000); // slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const sliderVariants = {
    initial: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    }),
  };

  return (
    <div className="flex justify-center items-center h-[500px]  sm:h-[600px] md:h-[500px] overflow-hidden">
      <AnimatePresence custom={showFirst ? 1 : -1} mode="wait">
        {showFirst ? (
          <motion.div
            key="sonali"
            custom={1}
            variants={sliderVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col md:flex-row border-b-2 justify-center items-center w-full px-4 md:px-12"
          >
            <img
              src="./photos/pr3.png"
              className="w-[250px] sm:w-[300px] md:w-[400px]"
              alt="Sonali"
            />
            <div className="text-center p-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold  text-pink-600 leading-tight tracking-wide font-playfair">
                Professional <br />
                <span className="text-black"> Nails Artist</span>
              </h1> 
              <p className="mt-4 text-lg md:text-2xl lg:text-3xl font-semibold text-gray-700">
                 "Nail Your Style, Flaunt Your Confidence."
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="swati"
            custom={-1}
            variants={sliderVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col-reverse border-b-2 md:flex-row justify-center items-center w-full px-4 md:px-12"
          >
            <div className="text-center p-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#7B4A32] leading-tight tracking-wide font-playfair">
                Professional <br />
                <span className="text-black">Makeup Artist</span>
              </h1>
              <p className="mt-4 text-lg md:text-2xl lg:text-3xl font-semibold text-gray-700">
              "Artistry that Enhances Your Natural Beauty."
              </p>
            </div>

            <img
              src="./photos/pr34.png"
              className="w-[250px] sm:w-[300px] md:w-[400px]"
              alt="Swati"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
