import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
 
  description: String,
  image: String,
  category: String,
   pdf: String, 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Product || mongoose.model("Product", productSchema);
