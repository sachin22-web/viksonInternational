import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Total Products", value: 124 },
    { label: "Pending Orders", value: 18 },
    { label: "Approved Dealers", value: 45 },
    { label: "Low Stock Items", value: 6 },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>

      {/* Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => navigate("/admin/products?mode=add")}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          ➕ Add Product
        </button>
        <button
          onClick={() => navigate("/admin/products")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          📃 View Products
        </button>
      </div>







      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-4">
            <div className="text-sm text-gray-500">{stat.label}</div>
            <div className="text-2xl font-semibold text-blue-700">{stat.value}</div>
          </div>
        ))}
      </div> 






      {/* Overview */}
      <div className="mt-10 bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Quick Overview</h2>
        <p className="text-gray-600 leading-relaxed">
          This is the pharmaceutical admin panel dashboard. You can manage products, check analytics,
          and monitor critical inventory indicators from here.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
