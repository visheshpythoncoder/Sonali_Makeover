import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const NailTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newReview, setNewReview] = useState({ name: "", title: "", description: "", rating: 5 });

  // State for storing the reviews
  const [slides, setSlides] = useState([
    {
      name: "Ritika Bansal",
      title: "Absolutely Stunning Nail Art!",
      description:
        "Her creativity blew my mind! I got a marble effect with glitter accents, and it turned out better than the Pinterest reference I showed. So patient and detailed—I've never loved my nails this much!",
      rating: 5,
    },
    {
      name: "Meena Kapoor",
      title: "Saved My Nails Before My Big Day!",
      description:
        "I came in with damaged nails just before my engagement, and she worked her magic. The extensions were flawless, and the nail art matched my lehenga perfectly. True professional with a heart of gold!",
      rating: 5,
    },
    {
      name: "Anjali Verma",
      title: "The Most Relaxing Mani-Pedi Ever",
      description:
        "Not only did my nails look gorgeous, but the whole experience was super relaxing. The ambiance, her hygiene practices, and the pampering—10/10! I book my monthly appointments without fail now.",
      rating: 4,
    },
    {
      name: "Sanya Singh",
      title: "Perfect for Photoshoots!",
      description:
        "As a fashion blogger, I always need Instagram-ready hands. She’s my go-to for every campaign. From subtle nudes to bold chrome—her designs are camera-perfect every single time!",
      rating: 5,
    },
  ]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const renderStars = (count) =>
    Array.from({ length: 5 }, (_, i) => (
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        className={`text-pink-400 text-lg sm:text-xl md:text-2xl ${i < count ? "opacity-100" : "opacity-30"}`}
      />
    ));

  const handleSubmit = () => {
    if (newReview.name && newReview.title && newReview.description) {
      // Create a new array with the existing slides and the new review
      setSlides((prevSlides) => [...prevSlides, newReview]);
      setNewReview({ name: "", title: "", description: "", rating: 5 });
      setIsPopupOpen(false);
      setCurrentIndex(slides.length); // Show the new review immediately

      // Show success message with SweetAlert2
      MySwal.fire({
        title: "Success!",
        text: "Your review has been submitted successfully.",
        icon: "success",
        confirmButtonText: "Okay",
      });
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 via-fuchsia-100 to-purple-100 px-4 sm:px-8">
      {/* Heading */}
      <div className="absolute top-10 text-center w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
          💅Nails Glowing Reviews 💅
        </h1>
        <p className="text-sm sm:text-base text-gray-600 italic mt-2">Real clients. Real beauty. Real nails.</p>
      </div>

      {/* Sliding Review Container */}
      <div className="relative w-full max-w-4xl h-auto overflow-hidden mt-4">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full bg-white px-6 sm:px-10 md:px-12 py-10 sm:py-14 md:py-16 rounded-2xl sm:rounded-3xl shadow-2xl text-center"
            >
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 font-medium">Client Reviews</p>
              <h2 className="text-2xl font-dancing sm:text-4xl md:text-5xl font-extrabold text-pink-600 mb-4 sm:mb-6 tracking-wide capitalize">
                {slide.name}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 sm:mb-6 font-medium">{slide.title}</p>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 font-medium">{slide.description}</p>
              <div className="flex justify-center gap-2">{renderStars(slide.rating)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 bg-white text-purple-500 hover:bg-purple-100 p-3 rounded-full shadow"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 bg-white text-purple-500 hover:bg-purple-100 p-3 rounded-full shadow"
      >
        &#8594;
      </button>

      {/* Create Review Button */}
      <button
        onClick={() => setIsPopupOpen(true)}
        className="absolute bottom-24 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full shadow-lg text-lg font-semibold"
      >
        + Create Review
      </button>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 sm:p-10 rounded-2xl w-11/12 sm:w-3/4 md:w-1/2 shadow-2xl relative">
            <h2 className="text-2xl font-bold mb-6 text-center">Create Your Nails Review</h2>
            <input
              type="text"
              placeholder="Name"
              value={newReview.name}
              onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
              className="w-full mb-4 p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Title"
              value={newReview.title}
              onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
              className="w-full mb-4 p-3 border border-gray-300 rounded-md"
            />
            <textarea
              placeholder="Description"
              value={newReview.description}
              onChange={(e) => setNewReview({ ...newReview, description: e.target.value })}
              className="w-full mb-4 p-3 border border-gray-300 rounded-md h-32"
            />
            <div className="flex items-center mb-4 gap-2">
              <label className="font-medium">Rating:</label>
              <select
                value={newReview.rating}
                onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
                className="border border-gray-300 rounded-md p-2"
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <option key={star} value={star}>
                    {star}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleSubmit}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md"
              >
                Submit
              </button>
              <button
                onClick={() => setIsPopupOpen(false)}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NailTestimonials;
