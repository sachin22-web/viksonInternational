// server/routes/product.js
import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// 🔹 Add Product
router.post("/add", async (req, res) => {
  try {
    // ✅ DEBUG LOG for PDF field
    console.log("📦 Incoming product PDF length:", req.body.pdf?.length);
    console.log("📎 PDF prefix:", req.body.pdf?.slice(0, 30));

    const product = new Product(req.body);
    await product.save();
    res.json({ message: "Product added", product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Get All Products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Get Single Product by ID ✅ [NEW ROUTE]
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Update Product
router.put("/:id", async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "Product updated", updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Delete Product
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
