// src/app/page.tsx
import React from "react";

export const metadata = {
  title: "KoalaRoute AI - Home", // Tab name
  description: "Your smart travel planner for seamless trips",
};

export default function HomePage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 md:px-8 py-12">
      <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
          Welcome to KoalaRoute AI 🚀
        </h1>
        <p className="text-gray-700 text-base md:text-lg mb-6">
          Your smart travel planner for seamless trips. Compare flights, book
          hotels, and organize your itinerary—all in one place!
        </p>
      </div>
    </div>
  );
}
