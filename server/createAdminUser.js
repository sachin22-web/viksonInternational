import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "./models/User.js"; // ✅ your existing User schema

// ✅ Load .env from root
dotenv.config({ path: "./.env" });

const createAdmin = async () => {
  try {
    // ✅ Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB");

    // ✅ Hash the password
    const hashedPassword = await bcrypt.hash("123456", 10);

    // ✅ Create new user
    const user = new User({
      name: "Admin Vikas",
      email: "vikson@gmail.com",
      password: hashedPassword,
    });

    await user.save();
    console.log("🎉 Admin user created successfully ✅");
    process.exit(0); // success
  } catch (err) {
    console.error("❌ Error creating admin:", err.message);
    process.exit(1); // failure
  }
};

createAdmin();
