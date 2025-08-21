import {
  Factory,
  ShieldCheck,
  Microscope,
  Users,
  Award,
  CheckCircle,
  Beaker,
  Settings,
   PackageCheck, FlaskConical 
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";





export default function Manufacturing() {
  const qualityFeatures = [
    {
      icon: ShieldCheck,
      title: " WHO GMP Certified",
      description: "Good Manufacturing Practices compliance",
    },
    {
      icon: Award,
      title: "ISO Standards",
      description: "International quality management systems",
    },
    {
      icon: Microscope,
      title: "In-house Laboratory",
      description: "Advanced testing and quality control",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals and technicians",
    }
    ,
  {
    icon: FlaskConical,
    title: "Research & Development (R&D)",
    description: "Continuous innovation and product enhancement",
  },
  {
    icon: PackageCheck,
    title: "In-house Packaging",
    description: "Secure, hygienic, and custom product packaging",
  },
  ];

  const processes = [
    {
      title: "Raw Material Testing",
      description:
        "Comprehensive testing of all incoming raw materials for quality and purity",
      image:
        "/products/products/manufacturing-lab.webp",
    },
    {
      title: "Production Monitoring",
      description:
        "Real-time monitoring of manufacturing processes with automated controls",
      image:
        "/products/productmonitaring.webp",
    },
    {
      title: "Quality Control",
      description:
        "Multi-stage quality testing throughout the production cycle",
      image:
        "/products/Quality.webp",
    },
    {
      title: "Packaging & Labeling",
      description: "Automated packaging systems with tamper-evident sealing",
      image:
        "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const certifications = [
    "Good Manufacturing Practices (GMP)",
    "ISO 9001:2015 Quality Management",
    "ISO 14001:2015 Environmental Management",
    "WHO Guidelines Compliance",
    "FDA Standards Adherence",
    "CDSCO Approvals",
  ];



  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
<section className="relative  text-white overflow-hidden h-[450px]">
  {/* 🔹 Local Video Background from public/video/manufacturing.mp4 */}
  <div className="absolute inset-0 z-0">
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      src="/video/Video2.mp4"
      autoPlay
      muted
      loop
      playsInline
    />
    <div className="absolute inset-0  opacity-50"></div>
  </div>

  {/* 🔹 Foreground Content (optional) */}
  <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
    {/* <div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Manufacturing Excellence</h1>
      <p className="text-lg md:text-xl">
        State-of-the-art facilities with world-class quality standards
      </p>
    </div> */}
  </div>
</section>







      {/* Manufacturing Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Advanced Manufacturing Facilities
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our state-of-the-art manufacturing facilities are equipped
                  with the latest technology and operated by highly skilled
                  professionals. We maintain the highest standards of hygiene,
                  quality, and safety throughout our production processes.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  With multiple manufacturing plants across Uttrakhand, Himachal
                  Pradesh, and Haryana, we have the capacity to handle large
                  volume orders while maintaining consistent quality standards.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-gray-700">24/7 Operations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-gray-700">Automated Systems</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-gray-700">Clean Room Technology</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-gray-700">Zero Defect Policy</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/manuf.webp"
                  alt="Manufacturing Facility"
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-blue-600 opacity-10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>





{/* Video + Text Section */} 
<section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      {/* 📝 Text Side */}
      <div>
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          Modern Medicine Manufacturing & Marketing
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          Our pharmaceutical units operate with highly advanced machinery ensuring formulation, filling, and packaging is done with utmost precision and hygiene.
        </p>
        <p className="text-lg text-gray-600">
          This video gives you a behind-the-scenes view into how we deliver safe, reliable, and certified solutions with modern automation and marketing expertise.
        </p>
      </div>

      {/* 📹 Local Video Side */}
      <div className="rounded-lg overflow-hidden shadow-lg h-[300px]">
        <video
          className="w-full h-full object-cover"
          src="/video/Video1.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls // 👈 optional: remove if you don't want controls
        />
      </div>
    </div>
  </div>
</section>







      {/* Quality Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Quality Assurance</h2>
              <p className="text-xl text-gray-600">
                Rigorous quality control measures ensure the highest standards
                of safety and efficacy
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {qualityFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <feature.icon className="w-16 h-16 mx-auto text-blue-600 mb-4" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>






<video
  className="w-full h-[400px] object-cover rounded-lg shadow-lg"
  src="/video/Video2.mp4"
  autoPlay
  muted
  loop
  playsInline
/>







      {/* Manufacturing Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Process</h2>
              <p className="text-xl text-gray-600">
                From raw materials to finished products, every step is carefully
                monitored
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {processes.map((process, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url('${process.image}')` }}
                  />
                  <CardHeader>
                    <CardTitle className="text-xl">{process.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{process.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>









      {/* R&D Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="/images/Research.webp"
                  alt="R&D Laboratory"
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-blue-600 opacity-10 rounded-lg"></div>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Research & Development
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our dedicated R&D team works continuously to develop
                  innovative pharmaceutical formulations and improve existing
                  products. We invest heavily in research to stay ahead of
                  industry trends and regulatory requirements.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Beaker className="w-6 h-6 text-blue-600" />
                    <span className="text-gray-700">
                      Advanced analytical testing equipment
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Microscope className="w-6 h-6 text-blue-600" />
                    <span className="text-gray-700">
                      Microbiological testing laboratory
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Settings className="w-6 h-6 text-blue-600" />
                    <span className="text-gray-700">
                      Stability testing chambers
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-blue-600" />
                    <span className="text-gray-700">
                      Expert research scientists
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>






      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Certifications & Compliance
              </h2>
              <p className="text-xl text-gray-600">
                We maintain the highest standards of regulatory compliance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4"
                >
                  <Badge
                    variant="outline"
                    className="text-center py-2 px-4 text-sm"
                  >
                    <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                    {cert}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Partner with Our Manufacturing Excellence
            </h2>
            <p className="text-xl mb-8">
              Experience the difference of working with a trusted pharmaceutical
              manufacturing partner
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact">
                <button className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold text-lg transition-colors">
                  Get Manufacturing Quote
                </button>
              </a>
              <a href="tel:+919992665666">
                <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-6 py-3 rounded-md font-semibold text-lg transition-colors">
                  Call +91-99926 65666
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
