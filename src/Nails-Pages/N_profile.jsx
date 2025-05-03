import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function N_profile() {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center  items-center min-h-[500px] sm:min-h-[600px] md:min-h-[500px] overflow-hidden w-full px-4">
      <div className="flex flex-col-reverse border-b-2 md:flex-row justify-center items-center gap-8 w-full max-w-7xl mx-auto">
        <img
          src="src/photos/pr3.png"
          className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] object-contain"
          alt="Sarika"
        />
        <div className="text-center md:text-left w-full">
          <h1 className="font-bold font-vibes text-[#C71585] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            <Typewriter
              words={["Hello, I am Sarika Mehandole"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl max-w-md mx-auto md:mx-0 mt-2">
            "Transforming nails into miniature masterpieces—because true beauty lives in the details, and your fingertips are my favorite canvas."
          </h2>
        </div>
      </div>
    </div>
  );
}
