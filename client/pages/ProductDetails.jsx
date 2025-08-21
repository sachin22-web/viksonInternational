import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/products/${id}`)
      .then((res) => {
        console.log("🟢 Product data:", res.data);
        setProduct(res.data);
      })
      .catch((err) => console.error("Failed to load product", err));
  }, [id]);

  if (!product) {
    return (
      <>
        <Header />
        <div className="text-center mt-20 text-gray-500">Loading product...</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="mt-10 px-4 py-12 bg-white min-h-screen max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Image Section */}
          <div className="w-full h-auto">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[400px] object-cover rounded-lg shadow-sm"
              />
            ) : (
              <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center rounded-lg">
                <span className="text-gray-500">No Image Available</span>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-blue-900 mb-4">
                {product.name || "No Name"}
              </h1>
              <p className="text-gray-600 mb-6 whitespace-pre-wrap leading-relaxed">
                {product.description || "No description available."}
              </p>
            </div>

            <p className="text-gray-700 text-xl mt-2">
              <span className="font-semibold">Category:</span>{" "}
              {product.category || "N/A"}
            </p>


            
          </div>

        </div><br></br>

        {/* Back Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => navigate("/our-products")}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Our Products
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetails;
