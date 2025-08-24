// "use client";

// import React from "react";

// interface TabNavigationProps {
//   activeTab: "chat" | "flights" | "hotels" | "alerts";
//   setActiveTab: (tab: "chat" | "flights" | "hotels" | "alerts") => void;
// }

// export default function TabNavigation({
//   activeTab,
//   setActiveTab,
// }: TabNavigationProps) {
//   const tabs: {
//     key: "chat" | "flights" | "hotels" | "alerts";
//     label: string;
//   }[] = [
//     { key: "chat", label: "💬 Chat" },
//     { key: "flights", label: "✈️ Flights" },
//     { key: "hotels", label: "🏨 Hotels" },
//     { key: "alerts", label: "🔔 Alerts" },
//   ];

//   return (
//     <div className="flex space-x-2 overflow-x-auto">
//       {tabs.map((tab) => (
//         <button
//           key={tab.key}
//           onClick={() => setActiveTab(tab.key)}
//           className={`flex-1 py-2 text-sm font-semibold rounded-md border-b-2 transition-colors ${
//             activeTab === tab.key
//               ? "border-blue-600 text-blue-600 bg-blue-50"
//               : "border-transparent text-gray-500 hover:text-gray-700"
//           }`}
//         >
//           {tab.label}
//         </button>
//       ))}
//     </div>
//   );
// }

// Update
"use client";

interface TabNavigationProps {
  activeTab: "chat" | "flights" | "hotels" | "alerts";
  setActiveTab: (tab: "chat" | "flights" | "hotels" | "alerts") => void;
}

export default function TabNavigation({
  activeTab,
  setActiveTab,
}: TabNavigationProps) {
  const tabs = [
    { id: "chat", label: "💬 Chat" },
    { id: "flights", label: "✈️ Flights" },
    { id: "hotels", label: "🏨 Hotels" },
    { id: "alerts", label: "🔔 Alerts" },
  ];

  return (
    <div className="flex flex-wrap justify-center md:justify-start gap-2 bg-gray-50 p-2 rounded-lg shadow-sm">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id as any)}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            activeTab === tab.id
              ? "bg-blue-600 text-white shadow-md"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
