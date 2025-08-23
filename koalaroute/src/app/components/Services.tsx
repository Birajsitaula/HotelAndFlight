import { Plane, Hotel, Calendar } from "lucide-react";

export default function Services() {
  return (
    <section className="bg-gray-900 py-16 text-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
        <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
          KoalaRoute AI provides intelligent travel planning tools to ensure
          your journey is smooth and stress-free.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Flight Finder */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <Plane className="h-10 w-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Flight Finder</h3>
            <p className="text-gray-400">
              Get the best flight deals tailored to your budget and travel dates
              using AI-powered search.
            </p>
          </div>

          {/* Hotel Recommendations */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <Hotel className="h-10 w-10 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Hotel Recommendations
            </h3>
            <p className="text-gray-400">
              Discover top-rated hotels and accommodations that match your
              travel style and preferences.
            </p>
          </div>

          {/* Itinerary Planning */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <Calendar className="h-10 w-10 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Itinerary Planning</h3>
            <p className="text-gray-400">
              Create a custom travel itinerary with AI-generated recommendations
              for activities and destinations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
