import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";
const API_URL = import.meta.env.VITE_API_URL;
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ProductCategory() {
  const { category } = useParams();
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/products`)
      .then((res) => {
        setAllProducts(res.data || []);
      })
      .catch((err) => {
        console.error("Failed to fetch products", err);
      });
  }, []);

  useEffect(() => {
    const filtered = allProducts.filter(
      (product) => product.category?.toLowerCase() === category?.toLowerCase()
    );
    setFilteredProducts(filtered);
  }, [category, allProducts]);

  if (!filteredProducts.length) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">No Products Found</h1>
          <Link to="/our-products">
            <Button>Back to Products</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const bannerImage = filteredProducts[0]?.image;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('${bannerImage}')` }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/our-products">
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white/10 mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 capitalize">
              {category}
            </h1>
            <p className="text-xl text-blue-100">
              All available products under <strong>{category}</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <Card
                  key={product._id || index}
                  className="hover:shadow-lg transition-shadow h-full"
                >
                  <CardHeader>
                    <div
                      className="w-full h-48 bg-gray-100 rounded-lg mb-4 bg-cover bg-center"
                      style={{ backgroundImage: `url('${product.image}')` }}
                    />
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="flex-1">
                      {product.uses && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-sm mb-2">Uses:</h4>
                          <p className="text-sm text-gray-600">{product.uses}</p>
                        </div>
                      )}
                      {product.dosage && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-sm mb-2">
                            Dosage:
                          </h4>
                          <p className="text-sm text-gray-600">
                            {product.dosage}
                          </p>
                        </div>
                      )}
                      {product.benefits?.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-sm mb-2">
                            Key Benefits:
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {product.benefits.map((benefit: string, idx: number) => (
                              <Badge key={idx} variant="secondary">
                                {benefit}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need help choosing the right product?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact our experts for personalized recommendations
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+919992665666">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +91-99926 65666
                </Button>
              </a>
              <Link to="/contact-us">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white/10"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
