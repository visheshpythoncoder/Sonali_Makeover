import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const headingColors = [
    "#c2185b", // dark pink / raspberry
    "#1565c0", // dark blue
    "#2e7d32", // dark green
    "#6a1b9a", // deep purple
    "#d81b60", // strong rose pink
    "#283593", // indigo
    "#00695c", // teal green
    "#8e24aa", // deep violet
    "#ad1457", // cranberry pink
    "#1b5e20"  // forest green
  ];
  

export default function NailsForm() {
  const [activeLink, setActiveLink] = useState(null);
  const [passcode, setPasscode] = useState("");
  const [typedText, setTypedText] = useState("");
  const [colorIndex, setColorIndex] = useState(0);

  const fullText = "Welcome to Sarika Makeover Studio & Classes";
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

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
    if (activeLink === "academy" && passcode === "academy123") {
      MySwal.fire({
        icon: "success",
        title: "Access Granted",
        text: "Redirecting you to the Nail Art Academy Registration page.",
        confirmButtonColor: "#ff6f91",
      }).then(() => {
        window.open("https://forms.gle/AaKb7CERMtY7PpaJ7", "_blank");
      });
    } else if (activeLink === "booking" && passcode === "booking123") {
      MySwal.fire({
        icon: "success",
        title: "Access Granted",
        text: "Redirecting you to the Appointment Booking page.",
        confirmButtonColor: "#ff6f91",
      }).then(() => {
        window.open("https://forms.gle/y1v2HVw5NCPTDNtj7", "_blank");
      });
    } else {
      MySwal.fire({
        icon: "error",
        title: "Access Denied",
        text: "Incorrect Passcode! Please try again.",
        confirmButtonColor: "#ff6f91",
      });
    }
    setPasscode("");
    setActiveLink(null);
  };

  return (
    <div
      ref={ref}
      className="bg-pink-100 p-6 sm:p-10 rounded-3xl shadow-xl w-full max-w-4xl mx-auto mt-10 sm:mt-16"
    >
      {/* Logo and Animated Heading */}
      <div className="text-center mb-8 sm:mb-10 px-2">
        <motion.h2
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
          className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-3"
          style={{ color: headingColors[colorIndex], transition: "color 0.5s" }}
        >
          {typedText}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-base sm:text-lg text-gray-600"
        >
          “Get Your Perfect Nails with Our Expert Nail Artists – Join Our Academy or Book Your Appointment Now!”
        </motion.p>
        <h1 class="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#c2185b] via-[#6a1b9a] to-[#1565c0]">
  Nails Art Academy & Booking Form
</h1>

      </div>

      {/* Access Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mb-8">
        {["academy", "booking"].map((type) => (
          <motion.button
            key={type}
            onClick={() => setActiveLink(type)}
            className={`w-64 px-6 py-4 text-base sm:text-lg rounded-xl font-semibold transition duration-300 shadow-md ${
              activeLink === type
                ? type === "academy"
                  ? "bg-pink-600 text-white scale-105"
                  : "bg-teal-500 text-white scale-105"
                : type === "academy"
                ? "bg-pink-200 text-pink-800 hover:bg-pink-200"
                : "bg-teal-100 text-teal-800 hover:bg-teal-200"
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
          className="flex flex-col items-center gap-4 px-4"
        >
          <input
            type="password"
            placeholder="Enter Passcode"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-3 w-full max-w-xs text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button
            onClick={handleAccess}
            className="bg-pink-600 text-white w-full max-w-xs px-6 py-3 text-base sm:text-lg rounded-md hover:bg-pink-700 transition duration-300"
          >
            Submit
          </button>

          <div className="mt-6 text-center">
            <p className="text-sm sm:text-base text-red-600 italic mb-2">
              For Passcode info, contact Sarika_Nails.
            </p>
            <a
              href="tel:+919423591208"
              className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition duration-300 shadow-md text-sm sm:text-base"
            >
              📞 Call Now
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
}
