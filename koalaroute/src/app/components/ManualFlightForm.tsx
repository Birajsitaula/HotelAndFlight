// "use client";

// import React, { useState } from "react";

// export default function ManualFlightForm() {
//   const [formData, setFormData] = useState({
//     origin: "",
//     destination: "",
//     departure_date: "",
//     return_date: "",
//     adults: 1,
//     children: 0,
//     infants: 0,
//     cabin_class: "economy",
//     trip_type: "return",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Flight form submitted", formData);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="space-y-4 bg-white p-4 rounded-xl shadow-md"
//     >
//       <div className="flex space-x-2">
//         <label className="flex items-center space-x-1">
//           <input
//             type="radio"
//             name="trip_type"
//             value="return"
//             checked={formData.trip_type === "return"}
//             onChange={handleChange}
//           />
//           <span>Return</span>
//         </label>
//         <label className="flex items-center space-x-1">
//           <input
//             type="radio"
//             name="trip_type"
//             value="one-way"
//             checked={formData.trip_type === "one-way"}
//             onChange={handleChange}
//           />
//           <span>One-way</span>
//         </label>
//       </div>

//       <div className="grid grid-cols-2 gap-2">
//         <input
//           type="text"
//           name="origin"
//           placeholder="From"
//           value={formData.origin}
//           onChange={handleChange}
//           className="p-2 border rounded-md w-full"
//           required
//         />
//         <input
//           type="text"
//           name="destination"
//           placeholder="To"
//           value={formData.destination}
//           onChange={handleChange}
//           className="p-2 border rounded-md w-full"
//           required
//         />
//       </div>

//       <div className="grid grid-cols-2 gap-2">
//         <input
//           type="date"
//           name="departure_date"
//           value={formData.departure_date}
//           onChange={handleChange}
//           className="p-2 border rounded-md w-full"
//           required
//         />
//         <input
//           type="date"
//           name="return_date"
//           value={formData.return_date}
//           onChange={handleChange}
//           disabled={formData.trip_type === "one-way"}
//           className="p-2 border rounded-md w-full"
//         />
//       </div>

//       <div className="grid grid-cols-3 gap-2">
//         <input
//           type="number"
//           name="adults"
//           value={formData.adults}
//           min={1}
//           onChange={handleChange}
//           className="p-2 border rounded-md w-full"
//         />
//         <input
//           type="number"
//           name="children"
//           value={formData.children}
//           min={0}
//           onChange={handleChange}
//           className="p-2 border rounded-md w-full"
//         />
//         <input
//           type="number"
//           name="infants"
//           value={formData.infants}
//           min={0}
//           onChange={handleChange}
//           className="p-2 border rounded-md w-full"
//         />
//       </div>

//       <select
//         name="cabin_class"
//         value={formData.cabin_class}
//         onChange={handleChange}
//         className="p-2 border rounded-md w-full"
//       >
//         <option value="economy">Economy</option>
//         <option value="premium_economy">Premium Economy</option>
//         <option value="business">Business</option>
//         <option value="first">First</option>
//       </select>

//       <button
//         type="submit"
//         className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all"
//       >
//         Search Flights
//       </button>
//     </form>
//   );
// }

// update
"use client";

export default function ManualFlightForm() {
  return (
    <form className="space-y-4 bg-gray-50 p-4 rounded-lg shadow-inner">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="From (SYD)"
          className="p-2 border rounded-md w-full"
        />
        <input
          type="text"
          placeholder="To (MEL)"
          className="p-2 border rounded-md w-full"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="date" className="p-2 border rounded-md w-full" />
        <input type="date" className="p-2 border rounded-md w-full" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <input
          type="number"
          min={1}
          placeholder="Adults"
          className="p-2 border rounded-md w-full"
        />
        <input
          type="number"
          min={0}
          placeholder="Children"
          className="p-2 border rounded-md w-full"
        />
        <input
          type="number"
          min={0}
          placeholder="Infants"
          className="p-2 border rounded-md w-full"
        />
      </div>
      <select className="p-2 border rounded-md w-full">
        <option value="economy">Economy</option>
        <option value="premium_economy">Premium Economy</option>
        <option value="business">Business</option>
        <option value="first">First</option>
      </select>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all"
      >
        Search Flights
      </button>
    </form>
  );
}
