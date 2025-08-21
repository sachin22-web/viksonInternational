import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;
import axios from "axios";

const AdminProducts = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialMode = queryParams.get("mode") || "list";

  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
 
    description: "",
    image: "",
    category: "",
  });
  const [mode, setMode] = useState(initialMode);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      window.location.href = "/admin/login";
    }
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/products`);
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  const handleAdd = async () => {
    if (!form.name ) {
      alert("Name and Price are required");
      return;
    }

    try {
      await axios.post(`${API_URL}/api/products/add`, form);
      resetForm();
      fetchProducts();
      setMode("list");
    } catch (err) {
      console.error("Add error:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await axios.delete(`${API_URL}/api/products/${id}`);
      fetchProducts();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const handleEditClick = (product) => {
    setEditId(product._id);
    setForm({
      name: product.name,
  
      description: product.description,
      image: product.image,
      category: product.category,
    });
    setMode("edit");
  };

  const handleUpdate = async () => {
    if (!editId) return;
    try {
      await axios.put(`${API_URL}/api/products/${editId}`, form);
      alert("Product updated successfully");
      resetForm();
      fetchProducts();
      setMode("list");
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  const resetForm = () => {
    setForm({ name: "",  description: "", image: "", category: "" });
    setEditId(null);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">🧑‍⚕️ Admin: Manage Products</h1>

      <div className="mb-4 flex gap-4">
        <button
          className={`px-4 py-2 rounded ${mode === "add" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          onClick={() => {
            setMode("add");
            resetForm();
          }}
        >
          ➕ Add Product
        </button>
        <button
          className={`px-4 py-2 rounded ${mode === "list" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          onClick={() => {
            setMode("list");
            resetForm();
          }}
        >
          📃 Product List
        </button>
      </div>

      {(mode === "add" || mode === "edit") && (
        <div className="bg-white p-6 mb-6 rounded-xl shadow space-y-4">
          <h2 className="text-xl font-semibold mb-4">
            {mode === "edit" ? "✏️ Edit Product" : "➕ Add Product"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Product Name"
              className="border p-2 rounded"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
           
            <input
              type="text"
              placeholder="Category"
              className="border p-2 rounded"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            />
          </div>

          <div className="sm:col-span-2 flex gap-4 items-start">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
              <input
                type="file"
                accept="image/*"
                className="border p-2 rounded w-full"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setForm({ ...form, image: reader.result });
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </div>

            {/* {form.image && (
              <img
                src={form.image}
                alt="Preview"
                className="w-32 h-32 object-cover rounded border"
              />
            )} */}
          </div>

          <textarea
            placeholder="Description"
            className="border w-full p-2 rounded"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />

          <div className="flex gap-4">
            {mode === "edit" ? (
              <button
                onClick={handleUpdate}
                className="px-6 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
              >
                ✅ Update Product
              </button>
            ) : (
              <button
                onClick={handleAdd}
                className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Save Product
              </button>
            )}
            <button
              onClick={() => setMode("list")}
              className="px-6 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {mode === "list" && (
        <>
          {products.length === 0 ? (
            <div className="bg-white p-6 rounded-xl shadow text-center text-gray-600">
              No products found. Add some products to get started.
            </div>
          ) : (
            <div className="overflow-x-auto bg-white rounded-xl shadow">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100 text-gray-700 text-sm">
                  <tr>
                    <th className="px-6 py-3 text-left">Name</th>
                    {/* <th className="px-6 py-3 text-left">Price</th> */}
                    <th className="px-6 py-3 text-left">Category</th>
                    <th className="px-6 py-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {products.map((product) => (
                    <tr key={product._id}>
                      <td className="px-6 py-4 text-sm">{product.name}</td>
                      {/* <td className="px-6 py-4 text-sm">₹{product.price}</td> */}
                      <td className="px-6 py-4 text-sm">{product.category}</td>
                      <td className="px-6 py-4 text-sm space-x-3">
                        <button
                          className="px-3 py-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-200"
                          onClick={() => handleEditClick(product)}
                        >
                          Edit
                        </button>
                        <button
                          className="px-3 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200"
                          onClick={() => handleDelete(product._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AdminProducts;
