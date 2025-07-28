import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0B1222] border-t border-gray-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] rounded-lg flex items-center justify-center">
                <span className="text-[#0B1222] font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] bg-clip-text text-transparent">
                SupplyAI
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Find the perfect suppliers with AI-powered intelligence. Streamline your procurement process with smart recommendations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#00E3FF] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00E3FF] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00E3FF] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00E3FF] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-[#00E3FF] transition-colors text-sm">Home</Link></li>
              <li><Link to="/how-it-works" className="text-gray-400 hover:text-[#00E3FF] transition-colors text-sm">How It Works</Link></li>
              <li><Link to="/ai-engine" className="text-gray-400 hover:text-[#00E3FF] transition-colors text-sm">AI Engine</Link></li>
              <li><Link to="/insights" className="text-gray-400 hover:text-[#00E3FF] transition-colors text-sm">Insights</Link></li>
              <li><Link to="/catalog" className="text-gray-400 hover:text-[#00E3FF] transition-colors text-sm">Catalog</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4" />
                <span>hello@supplyai.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#00E3FF] transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00E3FF] transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00E3FF] transition-colors text-sm">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00E3FF] transition-colors text-sm">GDPR</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 SupplyAI. All rights reserved. Powered by artificial intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;