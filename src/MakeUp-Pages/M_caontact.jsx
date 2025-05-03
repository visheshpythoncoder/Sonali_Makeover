import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Youtube } from "lucide-react";
import "bootstrap-icons/font/bootstrap-icons.css";

const slideshowImages = [
  "src/photos/m1.jpg",
  "src/photos/m2.jfif",
  "src/photos/m3.jfif",
  "src/photos/m4.jpg",
  "src/photos/m5.jpg",
];

export default function ContactComponent() {
  const [activeLink, setActiveLink] = useState(null);
  const [passcode, setPasscode] = useState("");
  const [currentImage, setCurrentImage] = useState(0);

  const handleAccess = () => {
    if (activeLink === "academy" && passcode === "academy123") {
      window.location.href = "https://yourdomain.com/academy-registration";
    } else if (activeLink === "booking" && passcode === "booking123") {
      window.location.href = "https://yourdomain.com/appointment-booking";
    } else {
      alert("Incorrect Passcode!");
    }
    setPasscode("");
    setActiveLink(null);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % slideshowImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Full-width Slideshow with Blur Effect */}
      {/* <div className="w-full mt-12">
        <div className="relative w-full h-[400px] overflow-hidden rounded-2xl">
          {slideshowImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slideshow ${index}`}
              className={`absolute top-0 left-0 w-full h-full object-contain transition-all duration-1000 ease-in-out
      ${
        index === currentImage
          ? "opacity-100 blur-0 scale-100"
          : "opacity-0 blur-sm scale-105"
      }`}
              style={{ transition: "opacity 1s, transform 1s, filter 1s" }}
            />
          ))}
        </div>
      </div> */}
      <div className="w-full min-h-screen px-6 py-10 bg-gray-50">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8, y: -30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 drop-shadow-lg"
        >
          Contact Details
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8 h-auto max-w-[95rem] mx-auto">
          {/* Left Section */}
          <div className="bg-white p-6  rounded-xl shadow-lg overflow-y-auto">
            {/* Contact Info Container */}
            <div className="w-full flex flex-col items-center justify-center gap-6">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-3">
                Social Links
              </h3>
              {/* Phone Button */}
              <div className="flex flex-col gap-4">
                {/* Phone Button */}
                
                {/* Instagram Button 1 */}
                <button
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/_sonali_makeover?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                      "_blank"
                    )
                  }
                  className="flex justify-center items-center gap-2 font-apricots bg-gradient-to-r from-indigo-500 to-pink-500  px-6 py-3 rounded-full text-base md:text-lg shadow-md hover:scale-105 transition-all duration-300"
                >
                  <i className="bi bi-instagram text-xl"></i>
                  Follow : _sonali_makeover
                </button>

                {/* Instagram Button 2 */}
                <button
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/desginer_nails_by_sarika/?utm_source=ig_web_button_share_sheet",
                      "_blank"
                    )
                  }
                  className="flex justify-center items-center font-apricots gap-2 bg-gradient-to-r from-indigo-500 to-pink-500  px-6 py-3 rounded-full text-base md:text-lg shadow-md hover:scale-105 transition-all duration-300"
                >
                  <i className="bi bi-instagram text-xl"></i>
                  Follow : desginer_nails_by_sarika
                </button>
                <button
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/@Sonali__Makeover12",
                      "_blank"
                    )
                  }
                  className="flex justify-center items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 text-lg md:text-xl"
                >
                  <Youtube className="w-6 h-6 md:w-7 md:h-7" />
                  Watch on YouTube
                </button>
                <h3 className="text-2xl text-center font-semibold text-indigo-600 mb-3">
                Contact Us
              </h3>
                <button
                  onClick={() => (window.location.href = "tel:+919423591208")}
                  className="flex justify-center items-center font-extrabold gap-2 px-6 py-3 bg-blue-600 text-gray-200 text-base md:text-lg rounded-2xl shadow-md transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg"
                >
                  <i className="bi bi-telephone-outbound text-xl"></i>
                  +91-94235-91208
                </button>

                {/* Email Button */}
                <button
                  onClick={() =>
                    (window.location.href =
                      "mailto:sonalimehandole2000@gmail.com")
                  }
                  className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white text-base md:text-lg rounded-2xl shadow-md transition-all duration-300 hover:bg-green-700 hover:scale-105 hover:shadow-lg"
                >
                  <i className="bi bi-envelope-at-fill text-xl"></i>
                  <span className="font-semibold">
                    sonalimehandole2000@gmail.com
                  </span>
                </button>

                {/* YouTube Button */}
                
              </div>

              {/* Address Block */}
              <div className="flex items-center gap-2 bg-gray-100 text-gray-800 px-6 py-3 rounded-2xl shadow-md text-base md:text-lg text-center">
                <i className="bi bi-geo-alt-fill text-red-500 text-xl"></i>
                <span>
                  Near Sai Mandir, Bus Stand, Saoner, Nagpur, Maharashtra
                </span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex-1 overflow-y-auto">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-3">
              Location
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Sai Temple, Saoner, Nagpur, Maharashtra
            </p>
            <iframe
              title="Sai Temple Saoner Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.243913839519!2d78.92432828077813!3d21.38029853285227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4e573b8a16c7f%3A0xe987aa54dce7e96f!2sSonali_Makeover%20Studio%20and%20Classes!5e0!3m2!1sen!2sin!4v1745305492381!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-md shadow"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

// maximum and minimum of 3d array
