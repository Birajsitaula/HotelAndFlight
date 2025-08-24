// final one
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Chat from "../components/Chat";
import ManualFlightForm from "../components/ManualFlightForm";
import ManualHotelForm from "../components/ManualHotelForm";
import PriceAlert from "../components/PriceAlert";
import TabNavigation from "../components/TabNavigation";

type TabType = "chat" | "flights" | "hotels" | "alerts";

interface DashboardData {
  msg: string;
  userId: string;
}

export default function KoalaRoutePage() {
  const [activeTab, setActiveTab] = useState<TabType>("chat");
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/koalaroute/dashboard`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (res.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("userEmail");
          router.push("/login");
        }
        return res.json();
      })
      .then((data: DashboardData) => {
        setDashboardData(data);
        setIsLoading(false);
      })
      .catch(() => router.push("/login"));
  }, [router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-gray-500 animate-pulse">
          Checking authentication...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 lg:p-12 transition-all duration-500">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10 animate-fadeIn">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600 text-center md:text-left animate-bounce">
            Welcome to KoalaRoute AI 🚀
          </h1>
          {dashboardData && (
            <p className="mt-2 md:mt-0 text-gray-700 text-center md:text-right">
              {dashboardData.msg}{" "}
              <span className="font-medium">
                (User ID: {dashboardData.userId})
              </span>
            </p>
          )}
        </div>

        {/* Tab Navigation */}
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Tab Content */}
        <div className="mt-6 space-y-6">
          {activeTab === "chat" && <Chat />}
          {activeTab === "flights" && <ManualFlightForm />}
          {activeTab === "hotels" && <ManualHotelForm />}
          {activeTab === "alerts" && <PriceAlert />}
        </div>
      </div>

      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Chat from "../components/Chat";

// export default function KoalaRoutePage() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [dashboardData, setDashboardData] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       router.push("/login");
//       return;
//     }

//     fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/koalaroute/dashboard`, {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//       .then((res) => {
//         if (res.status === 401) {
//           localStorage.clear();
//           router.push("/login");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setDashboardData(data);
//         setIsLoading(false);
//       })
//       .catch(() => router.push("/login"));
//   }, [router]);

//   if (isLoading)
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <p>Checking authentication...</p>
//       </div>
//     );

//   return (
//     <div className="min-h-screen p-4 bg-gray-100">
//       <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
//         <h1 className="text-2xl font-bold text-center text-blue-600">
//           Welcome to KoalaRoute AI 🚀
//         </h1>
//         {dashboardData && (
//           <p className="text-gray-700 text-center mt-2">
//             {dashboardData.msg} (User ID: {dashboardData.userId})
//           </p>
//         )}
//         <div className="mt-6">
//           <Chat />
//         </div>
//       </div>
//     </div>
//   );
// }
