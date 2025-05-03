import { useState, useEffect, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Lazy load components
const M_home = lazy(() => import("../MakeUp-Pages/M_home"));
const N_home = lazy(() => import("../Nails-Pages/N_home"));

export default function Toggle() {
  const [activeTab, setActiveTab] = useState("makeup");
  const [isBlurring, setIsBlurring] = useState(false);

  useEffect(() => {
    const savedTab = localStorage.getItem("activeTab");
    if (savedTab) {
      setActiveTab(savedTab);
    }
  }, []);

  const handleTabChange = (tab) => {
    if (tab !== activeTab) {
      setIsBlurring(true);
      setTimeout(() => {
        setActiveTab(tab);
        setIsBlurring(false);
        localStorage.setItem("activeTab", tab);
      }, 200); // Reducing delay and speeding up the transition
    }
  };

  return (
    <div className="mt-4">
      {/* Animated Tab Buttons */}
      <div className="flex justify-center gap-4 mb-4">
        {[ 
          { tab: "makeup", label: "Makeup_by_Sonali", gradient: "from-rose-600 to-red-400" },
          { tab: "nails", label: "Nails_by_Sarika", gradient: "from-pink-500 to-fuchsia-500" }
        ].map(({ tab, label, gradient }) => (
          <motion.button
            key={tab}
            onClick={() => handleTabChange(tab)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0.7 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0.7 }}
            className={`w-44 h-11 rounded-xl text-lg font-semibold shadow-md transition-all duration-300 ${
              activeTab === tab
                ? `bg-gradient-to-r ${gradient} text-white shadow-lg`
                : "bg-gray-100 text-black hover:bg-gray-200"
            }`}
          >
            {label}
          </motion.button>
        ))}
      </div>

      {/* Blurring Content Area on Tab Change */}
      <div className={`transition duration-300 ${isBlurring ? "blur-sm" : ""}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <AnimatePresence initial={false}>
            {activeTab === "makeup" ? (
              <motion.div
                key="makeup"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <M_home />
              </motion.div>
            ) : (
              <motion.div
                key="nails"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <N_home />
              </motion.div>
            )}
          </AnimatePresence>
        </Suspense>
      </div>
    </div>
  );
}
