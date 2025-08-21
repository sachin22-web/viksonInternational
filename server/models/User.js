import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: String,
});

// ✅ Fix: prevent model overwrite error in dev/hot-reload
export default mongoose.models.User || mongoose.model("User", userSchema);
