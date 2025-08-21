// ✅ server/createServer.js

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { handleDemo } from "./routes/demo.js";
import authRoutes from "./routes/auth.js";
import sendMailRoutes from "./routes/sendMail.js"; // ✅ Mail route
import productRoutes from "./routes/product.js";

dotenv.config(); // ✅ Load .env

export const createServer = () => {
  const app = express();

  app.use(cors());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true, limit: "100mb" }));


  // Health check
  app.get("/api/ping", (_req, res) => {
    res.json({ message: "✅ Server running fine!" });
  });

  // Routes
  app.get("/api/demo", handleDemo);
  app.use("/api/auth", authRoutes);
  app.use("/api/products", productRoutes);
  app.use("/api", sendMailRoutes); // ✅ Handles /api/contact and /api/quote

  return app; // ✅ Return Express app directly
};
