import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("❌ Failed to send. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("❌ Error. Please contact manually.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />

    {/* Hero Section */}
 <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
  <div
    className="absolute inset-0 bg-cover bg-center opacity-30"
    style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
    }}
  />
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-2xl sm:max-w-xl mx-auto text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
        Get in Touch with Vikson International Medisys
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-blue-100">
        We're here to help you go!
      </p>
    </div>
  </div>
</section>


      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Send us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you within
                      24 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <div className="text-green-600 text-4xl mb-4">✓</div>
                        <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                        <p className="text-gray-600">
                          Your message has been sent. We'll contact you soon.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <Input
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                        />
                        <Input
                          name="email"
                          type="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                        />
                        <Input
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                        />
                        <Textarea
                          name="message"
                          placeholder="Your Message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                        />
                        <Button
                          type="submit"
                          className="w-full bg-orange-500 hover:bg-orange-600"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info Sidebar */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-gray-600">+91-99926 65666</p>
                        <p className="text-gray-600">+91-94106 41957</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-gray-600">info@viksoninternationalmedisys.com</p>
                        <p className="text-gray-600">support@viksoninternationalmedisys.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h3 className="font-semibold">Office Address</h3>
                        <p className="text-gray-600">Drug Plant (Tablet/Cap): Uttarakhand & Himachal Pradesh</p>
                        <p className="text-gray-600">Injectable Plant: Himachal Pradesh</p>
                        <p className="text-gray-600">Softgel Plant: Baddi, Himachal Pradesh</p>
                        <p className="text-gray-600">Neutra Ranges: Varhi</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h3 className="font-semibold">Business Hours</h3>
                        <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

               {/* <Card>
  <CardHeader>
    <CardTitle className="text-xl">Find Us</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="w-full h-64 rounded-lg overflow-hidden border">
      <iframe
        title="Vikson Location"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3482.8211592625926!2d76.5663305!3d28.8955736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d8517cb1dc2d7%3A0x74f5ad768fba79ae!2sRohtak%2C%20Haryana!5e0!3m2!1sen!2sin!4v1688737789789!5m2!1sen!2sin"
      ></iframe>
    </div>
  </CardContent>
</Card> */}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need Immediate Assistance?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team is ready to help you with your pharmaceutical needs
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+919992665666">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
              <a href="https://wa.me/919992665666" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  WhatsApp
                </Button>
              </a>
              <a href="">
                <Button size="lg" variant="outline">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
