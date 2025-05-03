import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function CertificationGallery() {
  const bannerImages = [
    "photos/certify/c30.jpeg",
    "photos/certify/c31.jpeg",
    "photos/certify/c4.jpeg",
    "photos/certify/c32.jpeg",
    "photos/certify/c33.jpeg",
    "photos/certify/c15.jpeg",
    "photos/certify/c34.jpeg",
  ];

  const imagesSet1 = [
    "photos/certify/c1.jpeg",
    "photos/certify/c2.jpeg",
    "photos/certify/c3.jpeg",
    "photos/certify/c5.jpeg",
    "photos/certify/c6.jpeg",
    "photos/certify/c7.jpeg",
    "photos/certify/c8.jpeg",
    "photos/certify/c9.jpeg",
    "photos/certify/c10.jpeg",
    "photos/certify/c11.jpeg",
    "photos/certify/c12.jpeg",
    "photos/certify/c13.jpeg",
    "photos/certify/c14.jpeg",
    "photos/certify/c16.jpeg",
    "photos/certify/c17.jpeg",
  ];

  const imagesSet2 = [
    "photos/certify/c5.jpeg",
    "photos/certify/c6.jpeg",
    "photos/certify/c18.jpeg",
    "photos/certify/c19.jpeg",
    "photos/certify/c20.jpeg",
    "photos/certify/c21.jpeg",
    "photos/certify/c22.jpeg",
    "photos/certify/c23.jpeg",
    "photos/certify/c24.jpeg",
    "photos/certify/c25.jpeg",
    "photos/certify/c26.jpeg",
    "photos/certify/c27.jpeg",
    "photos/certify/c28.jpeg",
    "photos/certify/c29.jpeg",
  ];

  const [current1, setCurrent1] = useState(0);
  const [current2, setCurrent2] = useState(0);

  const nextSlide1 = () =>
    setCurrent1((prev) => (prev + 1) % imagesSet1.length);
  const prevSlide1 = () =>
    setCurrent1((prev) => (prev - 1 + imagesSet1.length) % imagesSet1.length);

  const nextSlide2 = () =>
    setCurrent2((prev) => (prev + 1) % imagesSet2.length);
  const prevSlide2 = () =>
    setCurrent2((prev) => (prev - 1 + imagesSet2.length) % imagesSet2.length);

  // Automatically change the images every 5 seconds with a smooth transition
  useEffect(() => {
    const interval1 = setInterval(() => {
      nextSlide1();
    }, 6000); // 6 seconds for Carousel 1 to allow more time for smooth transition

    const interval2 = setInterval(() => {
      nextSlide2();
    }, 6000); // 6 seconds for Carousel 2

    // Clean up intervals on component unmount
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-white to-blue-50 px-4 py-10">
      {/* Banner Section */}
      <div className="overflow-hidden w-full h-[300px] md:h-[400px]">
        <motion.div
          className="flex gap-2 w-max h-full"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          }}
        >
          {[...bannerImages, ...bannerImages].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Banner ${index + 1}`}
              loading="lazy"
              className="h-full w-[300px] sm:w-[350px] md:w-[400px] lg:w-[500px] object-cover rounded-none shadow-none"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/300";
              }}
            />
          ))}
        </motion.div>
      </div>

      <h2 className="text-3xl font-bold text-center text-blue-800 mt-10 mb-10">
        Student Certification Distribution
      </h2>

      {/* Carousels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Carousel 1 */}
        <div className="relative w-full overflow-hidden rounded-xl shadow-lg bg-white">
          <motion.img
            key={current1}
            src={imagesSet1[current1]}
            alt={`Certificate ${current1 + 1}`}
            loading="lazy"
            className="w-full h-auto object-contain transition-all duration-500"
            initial={{ opacity: 0, filter: "blur(3px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ opacity: { duration: 1 }, filter: { duration: 2 } }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/400";
            }}
          />
          <div className="absolute top-1/2 w-full px-4 flex justify-between items-center -translate-y-1/2">
            <button
              onClick={prevSlide1}
              className="bg-white p-3 rounded-full shadow hover:bg-blue-100"
            >
              ◀
            </button>
            <button
              onClick={nextSlide1}
              className="bg-white p-3 rounded-full shadow hover:bg-blue-100"
            >
              ▶
            </button>
          </div>
          <div className="absolute bottom-2 w-full text-center text-sm text-black">
            {current1 + 1} / {imagesSet1.length}
          </div>
        </div>

        {/* Carousel 2 */}
        <div className="relative w-full overflow-hidden rounded-xl shadow-lg bg-white">
          <motion.img
            key={current2}
            src={imagesSet2[current2]}
            alt={`Certificate ${current2 + 1}`}
            loading="lazy"
            className="w-full h-auto object-contain transition-all duration-500"
            initial={{ opacity: 0, filter: "blur(3px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ opacity: { duration: 1 }, filter: { duration: 1.2 } }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/400";
            }}
          />
          <div className="absolute top-1/2 w-full px-4 flex justify-between items-center -translate-y-1/2">
            <button
              onClick={prevSlide2}
              className="bg-white p-3 rounded-full shadow hover:bg-blue-100"
            >
              ◀
            </button>
            <button
              onClick={nextSlide2}
              className="bg-white p-3 rounded-full shadow hover:bg-blue-100"
            >
              ▶
            </button>
          </div>
          <div className="absolute bottom-2 w-full text-center text-sm text-black">
            {current2 + 1} / {imagesSet2.length}
          </div>
        </div>
      </div>
    </div>
  );
}
