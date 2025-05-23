import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const headingColors = ["#e91e63", "#9c27b0", "#ff5722", "#ff4081", "#f06292", "#ab47bc"];

export default function Form() {
  const [activeLink, setActiveLink] = useState(null);
  const [passcode, setPasscode] = useState("");
  const [typedText, setTypedText] = useState("");
  const [colorIndex, setColorIndex] = useState(0);

  const fullText = "Welcome to Sonali Makeover Studio & Classes";
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");

      let i = 0;
      const typingInterval = setInterval(() => {
        setTypedText(fullText.slice(0, i + 1));
        i++;
        if (i === fullText.length) clearInterval(typingInterval);
      }, 60);

      const colorInterval = setInterval(() => {
        setColorIndex((prev) => (prev + 1) % headingColors.length);
      }, 500);

      return () => {
        clearInterval(typingInterval);
        clearInterval(colorInterval);
      };
    }
  }, [inView]);

  const handleAccess = () => {
    if (activeLink === "academy" && passcode === "sonu1208") {
      window.open("https://forms.gle/y1v2HVw5NCPTDNtj7", "_blank");
      MySwal.fire({
        icon: "success",
        title: "Access Granted",
        text: "Redirecting you to the Academy Registration page.",
        confirmButtonColor: "#e91e63",
      });
    } else if (activeLink === "booking" && passcode === "swati1712") {
      window.open("https://forms.gle/AaKb7CERMtY7PpaJ7", "_blank");
      MySwal.fire({
        icon: "success",
        title: "Access Granted",
        text: "Redirecting you to the Appointment Booking page.",
        confirmButtonColor: "#e91e63",
      });
    } else {
      MySwal.fire({
        icon: "error",
        title: "Access Denied",
        text: "Incorrect Passcode! Please try again.",
        confirmButtonColor: "#e91e63",
      });
    }
    setPasscode("");
    setActiveLink(null);
  };
  

  return (
    <div
      ref={ref}
      className="bg-white p-12 sm:p-20 rounded-3xl mb-12 shadow-2xl w-full max-w-7xl mx-auto mt-10 sm:mt-16"
    >
      {/* Logo and Animated Heading */}
      <div className="text-center mb-12 sm:mb-16 px-2">
        <motion.h2
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6"
          style={{ color: headingColors[colorIndex], transition: "color 0.5s" }}
        >
          {typedText}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-lg sm:text-xl text-gray-700"
        >
          “Enhance Your Beauty with Our Expert Touch – Join Our Academy or Book Your Glam Look Today!”
        </motion.p>
        <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#c2185b] via-[#6a1b9a] to-[#1565c0] mt-6">
          Makeup & Nails Academy & Booking Form
        </h1>
      </div>

      {/* Access Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-10 mb-12">
        {["academy", "booking"].map((type) => (
          <motion.button
            key={type}
            onClick={() => setActiveLink(type)}
            className={`w-72 px-8 py-4 text-lg sm:text-xl rounded-2xl font-semibold transition duration-300 shadow-md ${
              activeLink === type
                ? type === "academy"
                  ? "bg-indigo-700 text-white scale-105"
                  : "bg-green-700 text-white scale-105"
                : type === "academy"
                ? "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                : "bg-green-100 text-green-700 hover:bg-green-200"
            }`}
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: type === "academy" ? 0.3 : 0.4,
            }}
          >
            {type === "academy" ? "Academy Registration" : "Appointment Booking"}
          </motion.button>
        ))}
      </div>

      {/* Passcode Entry + Info */}
      {activeLink && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6 px-4"
        >
          <input
            type="password"
            placeholder="Enter Passcode"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            className="border border-gray-300 rounded-md px-6 py-4 w-full max-w-sm text-lg sm:text-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleAccess}
            className="bg-indigo-600 text-white w-full max-w-sm px-6 py-4 text-lg sm:text-xl rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Submit
          </button>

          <div className="mt-8 text-center">
            <p className="text-base sm:text-lg text-red-600 italic mb-3">
              For Passcode info, contact Sonali_Makeover.
            </p>
            <a
              href="tel:+919423591208"
              className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full transition duration-300 shadow-md text-base sm:text-lg"
            >
              📞 Call Now
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
}
