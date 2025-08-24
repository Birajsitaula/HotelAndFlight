// "use client";

// import React, { useState } from "react";

// export default function ManualHotelForm() {
//   const [formData, setFormData] = useState({
//     destination: "",
//     checkin: "",
//     checkout: "",
//     guests: 2,
//     style: "any",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Hotel form submitted", formData);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="space-y-4 bg-white p-4 rounded-xl shadow-md"
//     >
//       <input
//         type="text"
//         name="destination"
//         placeholder="Destination (City Code)"
//         value={formData.destination}
//         onChange={handleChange}
//         className="p-2 border rounded-md w-full"
//         required
//       />

//       <div className="grid grid-cols-2 gap-2">
//         <input
//           type="date"
//           name="checkin"
//           value={formData.checkin}
//           onChange={handleChange}
//           className="p-2 border rounded-md w-full"
//           required
//         />
//         <input
//           type="date"
//           name="checkout"
//           value={formData.checkout}
//           onChange={handleChange}
//           className="p-2 border rounded-md w-full"
//           required
//         />
//       </div>

//       <div className="grid grid-cols-2 gap-2">
//         <input
//           type="number"
//           name="guests"
//           value={formData.guests}
//           min={1}
//           onChange={handleChange}
//           className="p-2 border rounded-md w-full"
//         />
//         <select
//           name="style"
//           value={formData.style}
//           onChange={handleChange}
//           className="p-2 border rounded-md w-full"
//         >
//           <option value="any">Any</option>
//           <option value="budget">Budget</option>
//           <option value="luxury">Luxury</option>
//         </select>
//       </div>

//       <button
//         type="submit"
//         className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all"
//       >
//         Search Hotels
//       </button>
//     </form>
//   );
// }

// update
"use client";

export default function ManualHotelForm() {
  return (
    <form className="space-y-4 bg-gray-50 p-4 rounded-lg shadow-inner">
      <input
        type="text"
        placeholder="Destination (City)"
        className="p-2 border rounded-md w-full"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="date"
          placeholder="Check-in"
          className="p-2 border rounded-md w-full"
        />
        <input
          type="date"
          placeholder="Check-out"
          className="p-2 border rounded-md w-full"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="number"
          min={1}
          placeholder="Guests"
          className="p-2 border rounded-md w-full"
        />
        <select className="p-2 border rounded-md w-full">
          <option value="any">Any</option>
          <option value="budget">Budget</option>
          <option value="luxury">Luxury</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all"
      >
        Search Hotels
      </button>
    </form>
  );
}
