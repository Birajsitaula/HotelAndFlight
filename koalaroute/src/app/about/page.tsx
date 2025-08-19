"use client";

import React, { useRef, useState, useEffect } from "react";
import { FaPlane, FaHotel, FaMapMarkedAlt, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutPage(): JSX.Element {
  const featuresRef = useRef<HTMLDivElement>(null);
  const [showTopButton, setShowTopButton] = useState<boolean>(false);

  const features = [
    {
      icon: <FaPlane className="text-blue-600 w-8 h-8 mb-2" />,
      title: "Flight Booking",
      description:
        "Compare flights, find the best deals, and book your tickets seamlessly.",
    },
    {
      icon: <FaHotel className="text-blue-600 w-8 h-8 mb-2" />,
      title: "Hotel Search",
      description:
        "Discover hotels that fit your budget and preferences with real-time availability.",
    },
    {
      icon: <FaMapMarkedAlt className="text-blue-600 w-8 h-8 mb-2" />,
      title: "Smart Itinerary",
      description:
        "Organize your trips efficiently with a personalized travel plan.",
    },
  ];

  const handleCTA = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gray-100 min-h-screen relative">
      {/* Hero / Banner Section */}
      <section className="bg-blue-600 text-white py-16 px-4 md:px-8 text-center rounded-b-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to KoalaRoute AI
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Your smart travel planner for seamless trips. Compare flights, book
          hotels, and organize your itinerary—all in one place!
        </p>
        <button
          onClick={handleCTA}
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
        >
          Explore Features
        </button>
      </section>

      {/* Main Content */}
      <div className="flex justify-center p-4 md:p-8">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 -mt-16">
          <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">
            About KoalaRoute AI
          </h2>
          <p className="text-gray-700 mb-4 text-justify">
            KoalaRoute AI is your smart travel planner, designed to make trip
            planning fast, easy, and personalized. Whether you’re booking
            flights, finding hotels, or exploring destinations, KoalaRoute AI
            brings all the information you need in one place.
          </p>
          <p className="text-gray-700 mb-8 text-justify">
            With a user-friendly interface and real-time data, you can compare
            prices, check availability, and organize your itinerary without the
            hassle of multiple websites. Our goal is to make your travel
            experience seamless and enjoyable.
          </p>

          {/* Features Section */}
          <div ref={featuresRef}>
            <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">
              Our Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center p-4 border rounded-lg bg-gray-50"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                >
                  {feature.icon}
                  <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
          title="Back to Top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}
