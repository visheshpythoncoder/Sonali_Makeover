import React, { useState, useRef, useEffect } from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

export default function BookNowButton() {
  const [showOptions, setShowOptions] = useState(false);
  const menuRef = useRef(null);
  const phoneNumber = "1234567890"; // Full number with country code

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative inline-block">
      <button
        onClick={() => setShowOptions((prev) => !prev)}
        className="px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition"
      >
        Book Now
      </button>

      {showOptions && (
        <div className="absolute mt-2 w-48 bg-white rounded-xl shadow-lg p-3 z-10">
          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-green-600 hover:bg-green-50 rounded-md transition"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md transition"
          >
            <FaPhone /> Call Now
          </a>
        </div>
      )}
    </div>
  );
}
