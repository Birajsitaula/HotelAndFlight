// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import koalaRoute from "./routes/koalaroute.js";

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: ["http://localhost:3000", "https://hotel-and-flight.vercel.app"],
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/koalaroute", koalaRoute);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ❌ Remove app.listen
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// ✅ Instead export the app (for Vercel)
export default app;
