// // // server.js
// // import express from "express";
// // import mongoose from "mongoose";
// // import dotenv from "dotenv";
// // import cors from "cors";
// // import authRoutes from "./routes/auth.js";
// // import koalaRoute from "./routes/koalaroute.js";

// // dotenv.config();

// // const app = express();

// // // Middleware
// // app.use(
// //   cors({
// //     origin: ["http://localhost:3000", "https://hotel-and-flight.vercel.app"],
// //     credentials: true,
// //   })
// // );
// // app.use(express.json());

// // // Routes
// // app.use("/api/auth", authRoutes);
// // app.use("/api/koalaroute", koalaRoute);

// // // MongoDB connection
// // mongoose
// //   .connect(process.env.MONGO_URI)
// //   .then(() => console.log("✅ MongoDB connected"))
// //   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // // ❌ Remove app.listen
// // // const PORT = process.env.PORT || 5000;
// // // app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// // // ✅ Instead export the app (for Vercel)
// // export default app;

// // old code
// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import cors from "cors";
// import authRoutes from "./routes/auth.js";

// dotenv.config();
// const app = express();

// app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/api/auth", authRoutes);

// // MongoDB connect
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("❌ MongoDB error:", err));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// new code
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import koalaRoute from "./routes/koalaroute.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/koalaroute", koalaRoute);

// MongoDB connection
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.error("❌ MONGO_URI is not defined. Did you set it in Railway?");
  process.exit(1); // Stop server if missing
}

mongoose
  .connect(mongoUri)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
