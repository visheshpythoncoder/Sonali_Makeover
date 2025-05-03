import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [slides, setSlides] = useState([
    {
      name: "sonali mehandole",
      title: "✨ A True Artist with the Brushes!",
      description:
        "I booked her for my wedding day, and I've never felt more beautiful. She listened to exactly what I wanted and enhanced my features perfectly. The makeup lasted all day and night without a single touch-up. Professional, punctual, and incredibly talented!",
      rating: 5,
    },
    {
      name: "priya sharna",
      title: "Flawless Every Time!",
      description:
        "I had my makeup done by her for multiple events, and she nails it every time. Whether it is a party look or something more natural, she understands my skin and style perfectly. I get so many compliments every time!",
      rating: 4,
    },
    {
      name: "kajal agrawal",
      title: "Transformed Me into a Queen!",
      description:
        "Her bridal makeover made me look and feel like royalty. She paid attention to every little detail, and the results were just breathtaking. I cried happy tears seeing myself in the mirror!",
      rating: 4,
    },
    {
      name: "priya mehra",
      title: "Perfect for Editorial Shoots!",
      description:
        "As a photographer, I've worked with many makeup artists, but her work stands out. Clean, camera-ready finishes with creative flair—she knows how to make every look pop on camera!",
      rating: 5,
    },
  ]);

  const [newReview, setNewReview] = useState({ name: "", title: "", description: "", rating: 5 });

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [slides]);

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isPopupOpen]);

  const renderStars = (count) =>
    Array.from({ length: 5 }, (_, index) => (
      <FontAwesomeIcon
        key={index}
        icon={faStar}
        className={`text-yellow-400 text-xl sm:text-2xl md:text-3xl ${index < count ? "opacity-100" : "opacity-30"}`}
      />
    ));

  const handleSubmit = () => {
    if (newReview.name && newReview.title && newReview.description) {
      setSlides([...slides, newReview]);
      setNewReview({ name: "", title: "", description: "", rating: 5 });
      setIsPopupOpen(false);
      setCurrentIndex(slides.length);

      // SweetAlert Success
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        icon: "success",
        title: "Review Submitted",
        text: "Your review has been successfully added!",
        confirmButtonText: "OK",
      });
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div className="relative">
      {/* Main Section */}
      <div className={`flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-100 via-white to-pink-100 relative overflow-hidden px-4 sm:px-8 transition-all ${isPopupOpen ? "blur-sm" : ""}`}>
        {/* Heading */}
        <div className="absolute top-6 sm:top-10 text-center w-full px-2">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
            ✨ MakeUp Testimonials ✨
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-2 italic">Real words from stunning transformations</p>
        </div>

        {/* Testimonial Card */}
        <div className={`w-full max-w-4xl bg-white px-6 sm:px-10 md:px-12 py-10 sm:py-14 md:py-16 rounded-2xl sm:rounded-3xl shadow-2xl text-center transition-all duration-500 ${isTransitioning ? "blur-sm" : ""}`}>
          <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 font-medium">Client Reviews</p>
          <h2 className="text-2xl font-dancing sm:text-4xl md:text-5xl font-extrabold text-[#5A3825] mb-4 sm:mb-6 tracking-wide drop-shadow-md capitalize">
            {slides[currentIndex]?.name}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 sm:mb-6 font-medium">{slides[currentIndex]?.title}</p>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 font-medium">{slides[currentIndex]?.description}</p>
          <div className="flex justify-center gap-2">{renderStars(slides[currentIndex]?.rating)}</div>
        </div>

        {/* Navigation Buttons */}
        <button onClick={prevSlide} className="absolute left-4 sm:left-10 top-1/2 transform -translate-y-1/2 bg-black text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-md">
          &#8592;
        </button>
        <button onClick={nextSlide} className="absolute right-4 sm:right-10 top-1/2 transform -translate-y-1/2 bg-black text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-md">
          &#8594;
        </button>

        {/* Create Review Button */}
        <button onClick={() => setIsPopupOpen(true)} className="absolute bottom-24 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full shadow-lg text-lg font-semibold">
          + Create Review
        </button>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 sm:p-10 rounded-2xl w-11/12 sm:w-3/4 md:w-1/2 shadow-2xl relative">
            <h2 className="text-2xl font-bold mb-6 text-center">Create Your Makeup Review</h2>
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
              <button onClick={handleSubmit} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md">
                Submit
              </button>
              <button onClick={() => setIsPopupOpen(false)} className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonial;
