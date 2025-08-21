import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Send,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Logo & Tagline */}
         <div className="md:col-span-1">
  <h2 className="text-2xl font-bold text-orange-400 mb-2">
    Vikson International Medisys
    <span className="block text-sm font-medium text-gray-300">
      (A Group Company Of Vikson International)
    </span>
  </h2>
  <p className="text-sm text-gray-400">
    Pharmaceutical Excellence with upgraded Technology
  </p>
  <p className="mt-2 text-gray-500 text-xs">
    Trusted name in healthcare, delivering quality across India.
  </p>
</div>

          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="/partners"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#quality"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Quality Assurance
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps?q=vikson+international+medisys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Find us on Map
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-orange-400" />
                <span className="text-gray-400">+91-99926 65666</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-orange-400" />
                <span className="text-gray-400">info@viksoninternationalmedisys.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span className="text-gray-400">Rohtak, Haryana, India</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61578559288722" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a> */}
              {/* <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a> */}
              <a href="https://www.instagram.com/viks.onmedisys?igsh=cHExNXU2dGo3YmRi" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Vikson International Medisys. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
