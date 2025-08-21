// server/server.js
import { createServer } from "./createServer.js";
import dotenv from "dotenv";
import connectDB from "./db.js";

dotenv.config();

const PORT = process.env.PORT || 4000;

// ✅ Use an async IIFE to handle top-level await
(async () => {
  try {
    await connectDB(); // ⏳ DB connected
    const app = createServer(); // ✅ server created

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Error starting server:", err.message);
    process.exit(1);
  }
})();


