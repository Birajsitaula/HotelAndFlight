// "use client";

// import React, { useState } from "react";

// export default function PriceAlert() {
//   const [alertData, setAlertData] = useState({
//     origin: "",
//     destination: "",
//     targetPrice: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setAlertData({ ...alertData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Price alert set", alertData);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="space-y-4 bg-white p-4 rounded-xl shadow-md"
//     >
//       <div className="grid grid-cols-2 gap-2">
//         <input
//           type="text"
//           name="origin"
//           placeholder="From (City Code)"
//           value={alertData.origin}
//           onChange={handleChange}
//           className="p-2 border rounded-md w-full"
//           required
//         />
//         <input
//           type="text"
//           name="destination"
//           placeholder="To (City Code)"
//           value={alertData.destination}
//           onChange={handleChange}
//           className="p-2 border rounded-md w-full"
//           required
//         />
//       </div>

//       <input
//         type="number"
//         name="targetPrice"
//         placeholder="Alert me under ($)"
//         value={alertData.targetPrice}
//         onChange={handleChange}
//         className="p-2 border rounded-md w-full"
//         required
//       />

//       <button
//         type="submit"
//         className="w-full py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-all"
//       >
//         Set Alert
//       </button>
//     </form>
//   );
// }

//update
"use client";

export default function PriceAlert() {
  return (
    <form className="space-y-4 bg-gray-50 p-4 rounded-lg shadow-inner">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="From"
          className="p-2 border rounded-md w-full"
        />
        <input
          type="text"
          placeholder="To"
          className="p-2 border rounded-md w-full"
        />
      </div>
      <input
        type="number"
        min={1}
        placeholder="Target Price ($)"
        className="p-2 border rounded-md w-full"
      />
      <button
        type="submit"
        className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-all"
      >
        Set Alert
      </button>
    </form>
  );
}
