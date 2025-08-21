import React from "react";
import { Link } from "react-router-dom";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4 space-y-4">
        <h2 className="text-xl font-bold">Admin Panel</h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link to="/admin" className="block hover:text-blue-400">Dashboard</Link>
            </li>
            <li>
              <Link to="/admin/products" className="block hover:text-blue-400">Products</Link>
            </li>
            <li>
              <Link to="/admin/contacts" className="block hover:text-blue-400">Contacts</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">{children}</main>
    </div>
  );
};

export default AdminLayout;
