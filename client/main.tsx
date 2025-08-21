import "./global.css";


import AdminLogin from "./pages/Admin/Login"; 
 import AdminProducts from "./pages/Admin/AdminProducts";

import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductCategory from "./pages/ProductCategory";
import Partners from "./pages/Partners";
import Manufacturing from "./pages/Manufacturing";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";

import AdminDashboard from "./pages/Admin/Dashboard";
import Dashboard from "./pages/Admin/Dashboard";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-products" element={<Products />} />
        <Route path="/our-products/:category" element={<ProductCategory />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/contact-us" element={<Contact />} />

  <Route path="/admin/login" element={<AdminLogin />} />
  {/* <Route path="/admin" element={<AdminDashboard />} /> */}
<Route path="/admin/products" element={<AdminProducts />} />
 <Route path="/admin/dashboard" element={<Dashboard/>}/>

<Route path="/product/:id" element={<ProductDetails />} />



        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />


        {/* <Route path="/admin" element={<AdminDashboard />} /> */}

      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
