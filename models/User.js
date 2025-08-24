import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default mongoose.model("User", userSchema);

// // updated
// import mongoose from "mongoose";

// const messageSchema = new mongoose.Schema({
//   role: { type: String, enum: ["user", "assistant", "system"], required: true },
//   content: { type: String, required: true },
// });

// const chatSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // link to user
//   messages: [messageSchema],
//   createdAt: { type: Date, default: Date.now },
// });

// export default mongoose.model("Chat", chatSchema);
