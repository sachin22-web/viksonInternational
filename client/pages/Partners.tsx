import {
  Building2,
  Handshake,
  Globe,
  Award,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Partners() {
  const partnershipTypes = [
    {
      icon: Building2,
      title: "Manufacturing Partners",
      description:
        "Collaborative production partnerships with leading pharmaceutical companies",
      count: "10+",
      color: "text-blue-600",
    },
    {
      icon: Globe,
      title: "International Partners",
      description:
        "Global partnerships spanning multiple countries and regions",
      count: "8+",
      color: "text-green-600",
    },
    {
      icon: Handshake,
      title: "Strategic Alliances",
      description: "Long-term strategic partnerships for growth and innovation",
      count: "12+",
      color: "text-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Growth Partners",
      description:
        "Partners focused on market expansion and business development",
      count: "20+",
      color: "text-orange-600",
    },
  ];

  const majorPartners = [
    {
      name: "Domestic Market",
      
      description:
        "Leading pharmaceutical manufacturing company specializing in generic medicines",
      specialization: "Oral Solids & Injectables",
      region: "Pan India",
    },
    {
      name: "International Market",
    
      description:
        "Global pharmaceutical company with focus on complex generics",
      specialization: "API Development",
      region: "International",
    },
    {
      name: "Hospital  ",
      description:
        "Healthcare distribution and pharmaceutical services provider",
      specialization: "Supply Chain",
      region: "North India",
    }
  ];

  const partnershipBenefits = [
    "Access to advanced manufacturing technologies",
    "Expanded market reach and distribution networks",
    "Shared research and development capabilities",
    "Cost-effective production solutions",
    "Quality assurance and compliance support",
    "Joint marketing and promotional activities",
    "Technical expertise and knowledge sharing",
    "Risk mitigation through diversification",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-400 to-blue-600 text-white py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Partners
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Building Strong Partnerships for Pharmaceutical Excellence
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Partnership Excellence
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Over One decades of building meaningful partnerships that drive
                innovation, quality, and growth in the pharmaceutical industry.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipTypes.map((type, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <type.icon
                      className={`w-16 h-16 mx-auto mb-4 ${type.color}`}
                    />
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                    <div className="text-3xl font-bold text-blue-600">
                      {type.count}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{type.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Major Partners */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Trusted Partners</h2>
              <p className="text-xl text-gray-600">
                Working with industry leaders to deliver excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {majorPartners.map((partner, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      {/* <Badge variant="outline">{partner.type}</Badge> */}
                      <span className="text-sm text-gray-500">
                        {/* Since {partner.since} */}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{partner.name}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {partner.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Specialization:</span>
                        <span className="text-gray-600">
                          {partner.specialization}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Region:</span>
                        <span className="text-gray-600">{partner.region}</span>
                      </div>
                    </div> */}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Partnership Benefits
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our strategic partnerships enable us to deliver enhanced
                  value, innovation, and quality to our clients while expanding
                  our capabilities and market reach.
                </p>
                <div className="space-y-3">
                  {partnershipBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/office-new.jpg"
                  alt="Partnership Collaboration"
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-blue-600 opacity-10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>





  {/* Banner Image above Explore Our Company */}
  {/* <section>
  <img
    src="/images/plant.webp"
    alt="Vikson Pharma Banner"
    className="w-full h-[400px] object-cover" 
  />
  <br></br>
</section> */}




      {/* Partnership Statistics */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <p className="text-blue-100 text-lg">Active Partners</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <p className="text-blue-100 text-lg">Countries Reached</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">10+</div>
                <p className="text-blue-100 text-lg">Years of Partnerships</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <p className="text-blue-100 text-lg">Partner Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Become a Partner CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Become Our Partner</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join our network of trusted partners and grow together in the
              pharmaceutical industry
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact-us">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  Partner With Us
                  <Handshake className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/about-us">
                <Button size="lg" variant="outline">
                  Learn More About Us
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
