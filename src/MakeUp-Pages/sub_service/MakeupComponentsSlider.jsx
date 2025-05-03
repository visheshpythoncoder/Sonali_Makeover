import React, { useState } from "react";
import { PhoneCall, ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Traditional Makeup",
    subtitle: "Timeless elegance for every occasion 🌼",
    color: "yellow",
    offers: [
      "💄 Traditional & Classic Looks",
      "🌸 Custom makeup for festive and cultural events",
      "🌟 Bright and bold looks to highlight your beauty",
      "🎨 Long-lasting products for all-day wear",
      "💇 Hair styling to complement your makeup",
      "📸 Picture-perfect finish for all occasions"
    ],
    description:
      "Enhance your natural beauty with our traditional makeup services, designed for grace and charm.",
    image: "./photos/dd.jpeg"
  },
  {
    title: "Party Makeup",
    subtitle: "Glam up for a night to remember 💫",
    color: "blue",
    offers: [
      "💄 Stunning party looks that turn heads",
      "✨ Glam makeup for evening events and celebrations",
      "🌟 Bold eyes and perfect skin for a radiant look",
      "🎨 Long-lasting makeup for a flawless night",
      "💇 Hair styling that completes your glam look",
      "📸 Get ready for your close-up with a photo-perfect finish"
    ],
    description:
      "Whether it’s a cocktail party or a celebration, our makeup will make you the center of attention.",
    image: "./photos/im.jpeg"
  },
  {
    title: "Editorial Makeup",
    subtitle: "Bold and creative looks for high fashion ✨",
    color: "purple",
    offers: [
      "💄 Artistic & High-fashion Makeup Styles",
      "🎨 Custom editorial looks for photoshoots & runway",
      "🌟 Creative & bold makeup with intense color",
      "💇 Hair styling with trendy and experimental vibes",
      "📸 Flawless finish for magazine-worthy looks"
    ],
    description:
      "Stand out with editorial makeup that makes a statement for photoshoots, fashion shows, and more.",
    image: "./photos/ed.jpeg"
  },
  {
    title: "Bridal Makeup",
    subtitle: "Because every bride deserves to glow on her big day ✨",
    color: "pink",
    offers: [
      "💄 HD and Airbrush Bridal Makeup",
      "👰 Customized looks for each wedding function",
      "🌟 Skin prep and glow-enhancing treatments",
      "🎨 Waterproof, long-lasting premium products",
      "💇 Hair styling, accessories & draping included",
      "📷 Camera-ready finish for your big day"
    ],
    description:
      "Let us make your special day unforgettable with a flawless bridal transformation tailored just for you.",
    image: "./photos/WND_8638.JPG"
  }
];

const MakeupSlider = () => {
  const [index, setIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const handleTransition = (nextIndex) => {
    setTransitioning(true);
    setTimeout(() => {
      setIndex(nextIndex);
      setTransitioning(false);
    }, 400);
  };

  const handleNext = () => {
    const nextIndex = (index + 1) % services.length;
    handleTransition(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (index - 1 + services.length) % services.length;
    handleTransition(prevIndex);
  };

  const handleCall = () => {
    window.location.href = "tel:+919423591208";
  };

  const service = services[index];

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen p-6 bg-${service.color}-50 transition-colors duration-500`}>      
      <div className="relative w-full max-w-6xl flex justify-center items-center">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 p-3 bg-pink-400 rounded-full shadow-md hover:scale-110 transition-transform duration-300 animate-bounce-left"
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>

        {/* Content */}
        <div
          className={`bg-white shadow-xl rounded-2xl p-6 flex flex-col lg:flex-row max-w-5xl w-full items-center transition-all duration-500 ${
            transitioning ? 'blur-sm opacity-70' : 'blur-0 opacity-100'
          }`}
        >
          {/* Description */}
          <div className="lg:w-1/2 pr-4">
            <h2 className={`text-4xl font-bold text-center text-${service.color}-800 mb-2`}>{service.title}</h2>
            <p className={`text-lg text-center text-${service.color}-700 mb-8`}>{service.subtitle}</p>
            <h3 className={`text-2xl font-semibold text-${service.color}-700 mb-4`}>What We Offer</h3>
            <ul className="space-y-3 text-gray-700">
              {service.offers.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className={`mt-4 text-${service.color}-600 font-medium`}>{service.description}</p>
            <button
              onClick={handleCall}
              className={`flex justify-center items-center gap-2 px-6 py-3 mt-4 text-white bg-gradient-to-r from-${service.color}-800 to-${service.color}-500 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-xl`}
            >
              <PhoneCall className="w-5 h-5" />
              Call Now
            </button>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <img
              src={service.image}
              alt={`${service.title} Look`}
              className="rounded-2xl w-[300px] object-contain shadow-lg"
            />
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-0 z-10 bg-pink-400 p-3 rounded-full shadow-md hover:scale-110 transition-transform duration-300 animate-bounce-right"
        >
          <ChevronRight className="w-6 h-6 text-black" />
        </button>
      </div>
    </div>
  );
};

export default MakeupSlider;