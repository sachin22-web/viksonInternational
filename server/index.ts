// ✅ Load .env only in development
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import connectDB from "./db.js";

// ✅ Exported separately for Vite's dev middleware
export function createServer() {
  const app = express();
  app.use(express.json({ limit: "10mb" }));

  return app;
}

// ESM compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Load dotenv ONLY if not in production (local only)
if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: path.resolve(__dirname, "../.env") });
}

const PORT = process.env.PORT || 4000;

// ✅ Only run server if not disabled by Vite dev server
if (process.env.START_EXPRESS !== "false") {
  async function startServer() {
    try {
      await connectDB();
      const app = createServer();
      app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
      });
    } catch (err: any) {
      console.error("❌ Error starting server:", err.message);
      process.exit(1);
    }
  }

  startServer();
}
