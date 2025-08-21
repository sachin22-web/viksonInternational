import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from 'lucide-react';

import {useEffect } from "react";
const API_URL = import.meta.env.VITE_API_URL;









<ChevronLeft size={20} />



const pharma = [
  {
    name: "Anti Infection Segment",
    image: "/products/products/Anti Infection.jpeg",
    pdf: "/products/pdfs/ayur-syrup.pdf",
    description: "Used to treat bacterial infections.",
    category: "Pharmaceuticals",
  },
  {
    name: "Cardiology Segment",
    image: "/products/products/cardiology.jpeg",
    pdf: "/products/pdfs/capsule.pdf",
    description: "Supports heart and vascular health.",
    category: "Pharmaceuticals",
  },
  {
    name: "Dermetology Segment",
    image: "/products/products/dermetology.jpeg",
    pdf: "/products/pdfs/churna.pdf",
    description: "Topical and systemic dermatological treatments.",
    category: "Pharmaceuticals",
  },
  {
    name: "Disbetology Segment",
    image: "/products/products/Disbetology.jpg",
    pdf: "/products/pdfs/cream.pdf",
    description: "Used to treat bacterial infections.",
    category: "Pharmaceuticals",
  },
  {
    name: "Gastroenterology Segment",
    image: "/products/products/Gastroenterology.jpg",
    pdf: "/products/pdfs/effervescent.pdf",
    description: "Used to treat bacterial infections.",
    category: "Pharmaceuticals",
  },
  {
    name: "Gynaceology Segment",
    image: "/products/products/Gynaceology.jpg",
    pdf: "/products/pdfs/herbal-oil.pdf",
    description: "Used to treat bacterial infections.",
    category: "Pharmaceuticals",
  },
  {
    name: "Neuro/Pshychistry Segment",
    image: "/products/products/Neuro.jpg",
    pdf: "/products/pdfs/injection.pdf",
    description: "Used to treat bacterial infections.",
    category: "Pharmaceuticals",
  },
  {
    name: "Ortho Segment",
    image: "/products/products/Ortho.png",
    pdf: "/products/pdfs/moisturiser.pdf",
    description: "Used to treat bacterial infections.",
    category: "Pharmaceuticals",
  },
  {
    name: "Pain Management",
    image: "/products/products/Pain Management.jpg",
    pdf: "/products/pdfs/protein.pdf",
    description: "Used to treat bacterial infections.",
    category: "Pharmaceuticals",
  },
  {
    name: "Pulmonology Segment",
    image: "/products/products/Pulmonology.jpeg",
    pdf: "/products/pdfs/shampoo.pdf",
    description: "Used to treat bacterial infections.",
    category: "Pharmaceuticals",
  },
  {
    name: "Urology Segment",
    image: "/products/products/Urology.jpeg",
    pdf: "/products/pdfs/spray.pdf",
    description: "Used to treat bacterial infections.",
    category: "Pharmaceuticals",
  },
  {
    name: "Oncology Segment",
    image: "/products/products/Oncology.jpeg",
    pdf: "/products/pdfs/syrup.pdf",
    description: "Used to treat bacterial infections.",
    category: "Pharmaceuticals",
  },
];

const nutra = [
  {
    name: "Tablets",
    image: "/products/products/Tablets.jpg",
    pdf: "/products/pdfs/ayur-syrup.pdf",
    description: "Nutra tablets with essential vitamins.",
    category: "Nutraceuticals",
  },
  {
    name: "Capsule",
    image: "/products/products/Capsule.avif",
    pdf: "/products/pdfs/capsule.pdf",
    description: "Herbal and protein-rich capsules.",
    category: "Nutraceuticals",
  },
  {
    name: "Syrups",
    image: "/products/products/Syrups.jpeg",
    pdf: "/products/pdfs/ayur-syrup.pdf",
    description: "Herbal and protein-rich capsules.",
    category: "Nutraceuticals",
  },
  {
    name: "Injections/Prefield",
    image: "/products/products/Injections.webp",
    pdf: "/products/pdfs/injection.pdf",
    description: "Herbal and protein-rich capsules.",
    category: "Nutraceuticals",
  },
  {
    name: "Liquids",
    image: "/products/products/Liquids.jpg",
    pdf: "/pdfs/protein.pdf",
    description: "Herbal and protein-rich capsules.",
    category: "Nutraceuticals",
  },
  {
    name: "Lotion/Cream",
    image: "/products/products/Lotion.webp",
    pdf: "/pdfs/protein.pdf",
    description: "Herbal and protein-rich capsules.",
    category: "Nutraceuticals",
  },
  {
    name: "Softgel",
    image: "/products/products/Softgel.webp",
    pdf: "/pdfs/protein.pdf",
    description: "Herbal and protein-rich capsules.",
    category: "Nutraceuticals",
  },
  {
    name: "Protein Powder",
    image: "/products/products/OIP6.jpeg",
    pdf: "/pdfs/protein.pdf",
    description: "Herbal and protein-rich capsules.",
    category: "Nutraceuticals",
  },
];

const ayur = [
  {
    name: "Ashwagandha Capsules",
    image: "/products/products/AshwagandhaCapsules.webp",
    pdf: "/pdfs/ashwagandha.pdf",
    description: "Boosts stamina, reduces stress, and supports immune health.",
    category: "Ayurvedic/Herbal",
  },
  {
    name: "Triphala Tablets",
    image: "/products/products/Triphala Tablets.jpeg",
    pdf: "/pdfs/triphala.pdf",
    description: "Supports digestion and detoxification naturally.",
    category: "Ayurvedic/Herbal",
  },
  {
    name: "Neem Syrup",
    image: "/products/products/Neem Syrup.jpg",
    pdf: "/pdfs/neem.pdf",
    description: "Purifies blood and promotes skin health.",
    category: "Ayurvedic/Herbal",
  },
  {
    name: "Amla Juice",
    image: "/products/products/Amla Juice.webp",
    pdf: "/pdfs/amla.pdf",
    description: "Rich in Vitamin C and antioxidants for rejuvenation.",
    category: "Ayurvedic/Herbal",
  },
  {
    name: "Tulsi Drops",
    image: "/products/products/Tulsi Drops.webp",
    pdf: "/pdfs/tulsi.pdf",
    description: "Improves respiratory health and boosts immunity.",
    category: "Ayurvedic/Herbal",
  },
  {
    name: "Giloy Tablets",
    image: "/products/products/Giloy Tablets.webp",
    pdf: "/pdfs/giloy.pdf",
    description: "Effective in treating fever and increasing vitality.",
    category: "Ayurvedic/Herbal",
  },
  {
    name: "Shatavari Syrup",
    image: "/products/products/Shatavari Syrup.jpeg",
    pdf: "/pdfs/shatavari.pdf",
    description: "Supports female health and hormonal balance.",
    category: "Ayurvedic/Herbal",
  },
  {
    name: "Karela Juice",
    image: "/products/products/Karela Juice.webp",
    pdf: "/pdfs/karela.pdf",
    description: "Helps regulate blood sugar levels naturally.",
    category: "Ayurvedic/Herbal",
  },
  {
    name: "Brahmi Capsules",
    image: "/products/products/Brahmi Capsules.webp",
    pdf: "/pdfs/brahmi.pdf",
    description: "Improves memory, reduces anxiety and promotes clarity.",
    category: "Ayurvedic/Herbal",
  },
  {
    name: "Livcare Tonic",
    image: "/products/products/Livcare Tonic.webp",
    pdf: "/pdfs/livcare.pdf",
    description: "Promotes liver health and aids digestion.",
    category: "Ayurvedic/Herbal",
  },
];

const cosmetic = [
  {
    name: "Face Cream",
    image: "/products/products/Face Cream.jpg",
    pdf: "/pdfs/cream.pdf",
    description: "Nourishing cream for facial skin care.",
    category: "Cosmetic",
  },
  {
    name: "Serum",
    image: "/products/products/Serum.webp",
    pdf: "/pdfs/cream.pdf",
    description: "Nourishing cream for facial skin care.",
    category: "Cosmetic",
  },
  {
    name: "Shampoo",
    image: "/products/products/shampoo11.jpg",
    pdf: "/products/pdfs/shampoo.pdf",
    description: "Nourishing cream for facial skin care.",
    category: "Cosmetic",
  },
  {
    name: "Body wash",
    image: "/products/products/Body wash.jpeg",
    pdf: "/pdfs/cream.pdf",
    description: "Nourishing cream for facial skin care.",
    category: "Cosmetic",
  },
  {
    name: "Lotion",
    image: "/products/products/Lotion.jpeg",
    pdf: "/pdfs/cream.pdf",
    description: "Nourishing cream for facial skin care.",
    category: "Cosmetic",
  },
  {
    name: "Mosturiser",
    image: "/products/products/moisturiser.jpg",
    pdf: "/products/pdfs/moisturiser.pdf",
    description: "Nourishing cream for facial skin care.",
    category: "Cosmetic",
  },
  {
    name: "Spray",
    image: "/products/products/spray.jpg",
    pdf: "/products/pdfs/spray.pdf",
    description: "Nourishing cream for facial skin care.",
    category: "Cosmetic",
  },
  {
    name: "Oil",
    image: "/products/products/Oil.jpeg",
    pdf: "/products/pdfs/herbal-oil.pdf",
    description: "Nourishing cream for facial skin care.",
    category: "Cosmetic",
  },
];

const categories = {
  "Product Approvals/Segments": pharma,
  "Pharmaceuticals/Nutraceuticals": nutra,
  "Ayurvedic/Herbal": ayur,
  Cosmetic: cosmetic,
};


const masterProducts = [
  {
    name: "Product 1",
    image: "/images/capsule.jpeg",
  },
  {
    name: "Product 2",
    image: "/images/capsule.jpeg",
  },
  {
    name: "Product 3",
    image: "/images/capsule.jpeg",
  },
    {
    name: "Product 4",
    image: "/images/capsule.jpeg",
  },
    {
    name: "Product 5",
    image: "/images/capsule.jpeg",
  },
    {
    name: "Product 6",
    image: "/images/capsule.jpeg",
  },
    {
    name: "Product 7",
    image: "/images/capsule.jpeg",
  },  {
    name: "Product 8",
    image: "/images/capsule.jpeg",
  },
    {
    name: "Product 9",
    image: "/images/capsule.jpeg",
  },
    {
    name: "Product 10",
    image: "/images/capsule.jpeg",
  },
    {
    name: "Product 11",
    image: "/images/capsule.jpeg",
  }
];



export default function Index() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Pharmaceuticals");

  const [showAll, setShowAll] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);


    useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data || []))
      .catch((err) => console.error("❌ Failed to fetch products:", err));
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />
  <section className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
  {/* Swiper Slider with Color Overlay */}
  <div className="absolute inset-0 z-0">
    <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      className="w-full h-full"
    >
      {["slider8.webp", "u.jpg", "manufacturing-plant.webp", "home.jpeg"].map(
        (img, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/slider/${img}')`,
              }}
            ></div>
          </SwiperSlide>
        )
      )}
    </Swiper>

    {/* Transparent Blue Overlay */}
    {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-400 opacity-40 z-10"></div> */}
  </div>
</section>

    




      {/* 🔷 Master Product Slider Section */}
      {/* <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
            Master Product
          </h2>

          <div className="overflow-hidden">
            <div className="flex w-max animate-scroll-infinite space-x-4">
              {[
                ...pharma,
                ...nutra,
                ...ayur,
                ...cosmetic,
                ...pharma,
                ...nutra,
                ...ayur,
                ...cosmetic,
              ].map((item, index) => (
                <div
                  key={index}
                  className="min-w-[140px] sm:min-w-[160px] md:min-w-[180px] max-w-[140px] sm:max-w-[160px] md:max-w-[180px] flex-shrink-0 border rounded-md shadow-sm p-2 sm:p-3 bg-white hover:shadow-md transition"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-20 sm:h-24 md:h-28 object-cover mb-2 rounded"
                  />
                  <h3 className="text-xs sm:text-sm font-semibold text-blue-700 text-center">
                    {item.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}




{/* <section className="py-10 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
      Master Product
    </h2>

    <div className="overflow-hidden">
      <div className="flex w-max animate-scroll-infinite space-x-4">
        {masterProducts.map((item, index) => (
          <div
            key={index}
            className="min-w-[140px] sm:min-w-[160px] md:min-w-[180px] max-w-[140px] sm:max-w-[160px] md:max-w-[180px] flex-shrink-0 border rounded-md shadow-sm p-2 sm:p-3 bg-white hover:shadow-md transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-20 sm:h-24 md:h-28 object-cover mb-2 rounded"
            />
            <h3 className="text-xs sm:text-sm font-semibold text-blue-700 text-center">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  </div>
</section> */}



{/* 🔷 Master Product Scrollable Section (Manual Scroll) */}
<section className="py-10 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
      Master Product
    </h2>

    {products.length === 0 ? (
      <p className="text-center text-gray-500">Loading master products...</p>
    ) : (
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-scroll-infinite space-x-4">
          {[...products.slice(0, 10), ...products.slice(0, 10)].map((item, index) => (
            <div
              key={index}
              className="min-w-[140px] sm:min-w-[160px] md:min-w-[180px] flex-shrink-0 border rounded-md shadow-sm p-2 sm:p-3 bg-white hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.name}
                  loading="lazy"
                className="w-full h-24 sm:h-28 object-cover mb-2 rounded"
              />
              <h3 className="text-xs sm:text-sm font-semibold text-blue-700 text-center">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
</section>










      {/* Quick Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Building2 className="w-16 h-16 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-2">10+ Years</h3>
                <p className="text-gray-600">
                  Experience in pharmaceutical manufacturing
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Award className="w-16 h-16 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold mb-2"> WHO GMP Certified</h3>
                <p className="text-gray-600">
                  International quality standards compliance
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-16 h-16 text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Expert Team</h3>
                <p className="text-gray-600">
                  Dedicated professionals ensuring excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Explore Our Company</h2>
            <p className="text-xl text-gray-600 mb-12">
              Discover what makes us a trusted pharmaceutical partner
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                to="/about-us"
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow text-center group"
              >
                <Building2 className="w-12 h-12 mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">About Us</h3>
                <p className="text-gray-600 text-sm">
                  Learn our story and values
                </p>
              </Link>

              <Link
                to="/our-products"
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow text-center group"
              >
                <Award className="w-12 h-12 mx-auto mb-4 text-green-600 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">Our Products</h3>
                <p className="text-gray-600 text-sm">
                  Browse our product range
                </p>
              </Link>

              <Link
                to="/manufacturing"
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow text-center group"
              >
                <Users className="w-12 h-12 mx-auto mb-4 text-purple-600 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">Manufacturing</h3>
                <p className="text-gray-600 text-sm">See our facilities</p>
              </Link>

              <Link
                to="/contact-us"
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow text-center group"
              >
                <ArrowRight className="w-12 h-12 mx-auto mb-4 text-orange-500 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
                <p className="text-gray-600 text-sm">Get in touch today</p>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Vikson Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-blue-800">
              Why Choose Vikson International Medisys?
            </h2>
            <p className="text-lg text-gray-700 mb-12">
              Trusted by partners across India and abroad for unmatched quality,
              ethical manufacturing, and timely delivery.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  Trusted by 100+ Pharma Brands
                </h3>
                <p className="text-gray-600">
                  We’re a preferred third-party manufacturer for leading pharma
                  houses.
                </p>
              </div>
              <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  WHO-GMP Certified Facilities
                </h3>
                <p className="text-gray-600">
                  Our plants are certified and meet the most stringent global
                  standards.
                </p>
              </div>
              <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  End-to-End Manufacturing Solutions
                </h3>
                <p className="text-gray-600">
                  From formulation to packaging — we deliver complete solutions
                  under one roof.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
  

  <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-800 mb-12 text-center">
          Explore Products by Category
        </h2>

        {/* 🔹 Loop Through Each Category Block */}
        {Object.keys(categories).map((cat, i) => (
          <div key={i} className="mb-16 relative">
            {/* 🔸 Category Heading */}
           <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-700 mb-6">

              {cat}
            </h3>

            {/* 🔸 Scroll Buttons */}
          {/* Left Scroll Button */}
<button
  onClick={() => {
    const container = document.getElementById(`scroll-container-${i}`);
    if (container) container.scrollLeft -= 300;
  }}
  className="absolute left-0 top-[55%] transform -translate-y-1/2 z-10 bg-white text-blue-700 border border-blue-600 w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
>
  &lt;
</button>


            <div
              id={`scroll-container-${i}`}
              className="category-scroll mx-10 flex overflow-x-auto gap-4 scroll-smooth pb-2"
              style={{ scrollbarWidth: "none" }}
            >
              {categories[cat].map((item, index) => (
                <div
                  key={index}
                  className="min-w-[260px] max-w-[260px] border rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-44 object-cover mb-3 rounded"
                  />
                  <h4 className="text-base font-semibold text-blue-700 text-center mb-2">
                    {item.name}
                  </h4>
                  {/* Optional View Details Button */}
                  {/* <button
                    onClick={() => setSelectedProduct(item)}
                    className="w-full text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
                  >
                    View Details
                  </button> */}
                </div>
              ))}
            </div>
{/* Right Scroll Button */}
<button
  onClick={() => {
    const container = document.getElementById(`scroll-container-${i}`);
    if (container) container.scrollLeft += 300;
  }}
  className="absolute right-0 top-[55%] transform -translate-y-1/2 z-10 bg-white text-blue-700 border border-blue-600 w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
>
  &gt;
</button>
          </div>
        ))}

        {/* 🔹 Product Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm px-4">
            <div className="bg-white rounded-2xl shadow-lg max-w-3xl w-full p-6 relative animate-fadeIn">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-xl font-bold"
              >
                ✕
              </button>
              <div className="flex flex-col md:flex-row items-start gap-6">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full md:w-60 h-60 object-cover rounded"
                />
                <div className="flex-1 text-left">
                  <h2 className="text-2xl font-bold text-blue-800 mb-3">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-gray-700 mb-4">
                    {selectedProduct.description || "No description available."}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    <strong>Category:</strong>{" "}
                    {selectedProduct.category || "N/A"}
                  </p>
                  {selectedProduct.pdf && (
                    <a
                      href={selectedProduct.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
                    >
                      View Product PDF
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>




      {/* Our Core Divisions */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">
              Upgraded Lounch/Range
            </h2>
            <p className="text-gray-600 text-lg">
              We operate across a wide spectrum of pharmaceutical categories
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                Anti Cancer Oncology
              </h3>
              <p className="text-gray-700 mb-2">Tablets, Injection</p>
              <p className="text-gray-600 text-sm">
                Specialized formulations for oncology treatment, including
                cytotoxic and targeted therapies like Paclitaxel and
                Capecitabine.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                Pharmaceuticals
              </h3>
              <p className="text-gray-600">
                Tablets, capsules, syrups and OTC products for broad medical
                needs.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                Injectables
              </h3>
              <p className="text-gray-600">
                Dry powder Injection,Liquid Injection,Prefilled Injection.
              </p>
            </div>
          </div>
        </div>
      </section> */}

<section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto text-center mb-12">
      <h2 className="text-4xl font-bold text-blue-800 mb-4">
        Upgraded Launch/Range
      </h2>
      <p className="text-gray-600 text-lg">
        We operate across a wide spectrum of pharmaceutical categories
      </p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          Anti Cancer Oncology
        </h3>
        <p className="text-gray-700 mb-2">Tablets, Injection</p>
        <p className="text-gray-600 text-sm">
          Specialized anti-cancer formulations including Paclitaxel,
          Capecitabine and other cytotoxic & targeted therapies.
        </p>
      </div>

      <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          Prefilled Injection
        </h3>
        <p className="text-gray-700 mb-2">Sterile Ready-to-use</p>
        <p className="text-gray-600 text-sm">
          Advanced prefilled syringe solutions ensuring accuracy, safety, and
          ease of administration.
        </p>
      </div>

      <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          Effervescent Tablets
        </h3>
        <p className="text-gray-700 mb-2">Soluble Formulations</p>
        <p className="text-gray-600 text-sm">
          Quick-dissolving tablets ideal for faster absorption and patient
          compliance in vitamins & supplements.
        </p>
      </div>

      <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">
          DCGI Approved Products
        </h3>
        <p className="text-gray-700 mb-2">Certified Formulations</p>
        <p className="text-gray-600 text-sm">
          Products approved by Drug Controller General of India ensuring
          top-notch quality, safety, and efficacy.
        </p>
      </div>
    </div>
  </div>
</section>








      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg">
              Real stories from partners who trust us.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 border rounded-lg shadow">
              <p className="text-gray-700 italic mb-4">
                "Vikson's consistency and professionalism make them an ideal
                third-party manufacturer. Timely delivery and great product
                quality!"
              </p>
              <h4 className="font-semibold text-blue-600">
                — Dr. Mehta, Delhi
              </h4>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow">
              <p className="text-gray-700 italic mb-4">
                "We've scaled our nutraceutical business smoothly with their
                expert guidance and top-class facility support."
              </p>
              <h4 className="font-semibold text-blue-600">
                — PharmaMax Pvt Ltd
              </h4>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
