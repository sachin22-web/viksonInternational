import {
  Shield,
  Users,
  Globe,
  Award,
  Heart,
  Lightbulb,
  Target,
  CheckCircle,
  TrendingUp,
  Briefcase,
  Calendar,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function About() {
  const companyValues = [
    {
      title: "Anti Cancer Oncology",
      description:
        "We offer highly specialized oncology products that undergo strict testing to meet global safety and efficacy standards.",
      color: "text-blue-600",
    },
    {
      title: "Pharmaceuticals",
      description:
        "We manufacture a wide range of quality medicines for chronic and acute conditions using modern equipment and strict protocols.",
      color: "text-red-500",
    },
    {
      title: "Nutraceuticals",
      description:
        "Our nutraceutical line is developed with cutting-edge R&D to enhance health and immunity through natural, scientifically-backed formulations.",
      color: "text-yellow-500",
    },
    {
      title: "Team Excellence",
      description:
        "Our experienced team of professionals ensures consistent innovation, quality assurance, and customer satisfaction in every step.",
      color: "text-green-600",
    },
  ];

  const milestones = [
    {
      year: "2000",
      title: "Company Founded",
      description:
        "Vikson International Medisys was established with a vision to provide quality pharmaceutical solutions.",
    },
    {
      year: "2005",
      title: "First Manufacturing Unit",
      description:
        "Opened our first state-of-the-art manufacturing facility in Uttrakhand.",
    },
    {
      year: "2010",
      title: "GMP Certification",
      description:
        "Achieved Good Manufacturing Practices certification, ensuring international quality standards.",
    },
    {
      year: "2015",
      title: "Multi-State Operations",
      description:
        "Expanded operations across Himachal Pradesh and Haryana with additional manufacturing units.",
    },
    {
      year: "2020",
      title: "International Partnerships",
      description:
        "Formed strategic partnerships with global pharmaceutical companies for enhanced reach.",
    },
    {
      year: "2024",
      title: "Digital Transformation",
      description:
        "Implemented advanced digital systems for enhanced quality control and production efficiency.",
    },
  ];

  const leadership = [
    {
      name: "Dr. Rajesh Sharma",
      position: "Chief Executive Officer",
      experience: "10+ years",
      specialty: "Pharmaceutical Strategy & Operations",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "Leading the company's strategic vision with extensive experience in pharmaceutical operations and business development.",
    },
    {
      name: "Mrs. Priya Mehta",
      position: "Chief Technology Officer",
      experience: "20+ years",
      specialty: "Manufacturing Technology & Innovation",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "Overseeing technological advancement and manufacturing excellence across all our facilities.",
    },
    {
      name: "Dr. Amit Kumar",
      position: "Head of Quality Assurance",
      experience: "18+ years",
      specialty: "Quality Control & Regulatory Affairs",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "Ensuring compliance with international quality standards and regulatory requirements.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />

  
      {/* Hero Section with Slider */}
<section className="relative -mt-[20px] h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-white ">
  {/* Background Image Slider */}
  <div className="absolute inset-0 z-0">
    <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="w-full h-full"
    > 
      {["unw.png", "about.jpg", "about1.jpg"].map(
        (img, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-no-repeat bg-center"
              style={{
                backgroundImage: `url('/slider/${img}')`,
                backgroundSize: "contain",
              }}
            ></div>
          </SwiperSlide>
        )
      )}
    </Swiper>
  </div>
</section>




      {/* Specialisation Section */}
      {/* Specialisation Section */}
 {/* Our Specialisation Section */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Specialisation</h2>

      {/* ✔ Bullet Points */}
      <div className="space-y-6 text-lg text-gray-700 text-left">
  <div className="flex items-start space-x-3">
    <span className="text-blue-600 mt-1">✔</span>
    <p>
      We work as a contract agreement for a year of supply for the complete formulation of any distributor agency, hospital, or trust.
    </p>
  </div>
  <div className="flex items-start space-x-3">
    <span className="text-blue-600 mt-1">✔</span>
    <p>We work for Government Hospital Tenders (ESI / Private).</p>
  </div>
  <div className="flex items-start space-x-3">
    <span className="text-blue-600 mt-1">✔</span>
    <p>
      We can manufacture or develop products as per customer requirements and deliver them on an urgent basis to fulfill the client's emergency needs.
    </p>
  </div>
</div>

    </div>

    {/* Specialisation Cards */}
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {companyValues.map((value, index) => (
          <Card
            key={index}
            className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white rounded-xl"
          >
            <CardHeader className="mb-2">
              <CardTitle className="text-xl font-semibold text-gray-800">
                {value.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
</section>

{/* Our Strengths Section (moved closer with less padding) */}
<section className="pt-8 pb-16 bg-white">


    <div className="w-full max-w-6xl mx-auto rounded-lg overflow-hidden">
      <img
        src="/images/img.png" // 🟡 Replace if needed
        alt="Our Strengths"
        className="w-full h-auto object-contain"
      />
    </div>

</section>







      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">
                  Our Story
                </h2>
                <div className="space-y-6 text-lg text-gray-600">
                  <p>
                 Vikson International Medisys began as a
                    vision to democratize access to high-quality pharmaceutical
                    products. What started as a small manufacturing unit in
                    Uttrakhand has grown into a multi-state operation serving
                    clients across India and internationally.
                  </p>
                  <p>
                    Our journey has been defined by an unwavering commitment to
                    quality, innovation, and patient safety. We've built our
                    reputation by consistently delivering pharmaceutical
                    products that meet the highest international standards while
                    remaining accessible and affordable.
                  </p>
                  <p>
                    Today, we stand as a trusted partner to over 50
                    pharmaceutical companies, manufacturing a diverse range of
                    products from basic formulations to complex therapeutic
                    solutions. Our three state-of-the-art facilities employ
                    cutting-edge technology and are operated by a team of
                    dedicated professionals.
                  </p>
                </div>
                <Link to="/manufacturing">
                  <Button className="mt-8 bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                    Explore Our Facilities
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <img
                  src="/images/ourstory.jpg"
                  alt="Our Manufacturing Excellence"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      ISO
                    </div>
                    <div className="text-sm text-gray-600">Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8">
                  Why Choose Vikson International Medisys?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Proven Track Record
                      </h3>
                      <p className="text-gray-600">
                        Over 10+ years of consistent quality and reliability in
                        pharmaceutical manufacturing.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Advanced Technology
                      </h3>
                      <p className="text-gray-600">
                        State-of-the-art manufacturing equipment and automated
                        quality control systems.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Regulatory Compliance
                      </h3>
                      <p className="text-gray-600">
                        Full compliance with GMP, ISO, WHO, and other
                        international standards.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Flexible Manufacturing
                      </h3>
                      <p className="text-gray-600">
                        Capability to handle both large volume orders and small
                        batch productions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/Research.webp"
                  alt="Quality Assurance Lab"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute top-6 left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Award className="w-6 h-6 text-yellow-500" />
                    <span className="font-semibold"> WHO GMP Certified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>







{/* Business Growth Section (Image Reference) */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-6xl ">
        {/* <span className="inline-block w-4 h-4 rounded-full bg-black mr-2 align-middle"></span> */}
        Dedicated team targeted <br /> towards business growth
      </h2>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="rounded-lg overflow-hidden shadow-md">
        <img
          src="/images/tech-expertise.webp"
          alt="Lab Team"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="rounded-lg overflow-hidden shadow-md">
        <img
          src="/images/businessanalyst.webp"
          alt="Business Analytics"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="rounded-lg overflow-hidden shadow-md">
        <img
          src="/images/m.jpg"
          alt="Foregen Team Bag"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section>













      {/* Contact CTA */}
     <section
  className="py-20 text-white relative"
  style={{
    backgroundImage:
      "url(https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-300 opacity-60 z-0"></div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">Ready to Partner with Us?</h2>
      <p className="text-xl mb-8 text-blue-100">
        Join our network of satisfied clients and experience the Vikson
        difference
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <Link to="/contact-us">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg"
          >
            <Phone className="w-5 h-5 mr-2" />
            Get in Touch
          </Button>
        </Link>
        <Link to="/our-products">
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg"
          >
            Explore Products
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
