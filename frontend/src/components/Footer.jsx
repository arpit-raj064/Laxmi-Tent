import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Heart } from 'lucide-react';
import { businessInfo } from '../mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{ backgroundColor: '#2C425C', color: 'white' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">{businessInfo.name}</h3>
            <p className="text-white/80 mb-4">
              {businessInfo.tagline}
            </p>
            <p className="text-white/80 text-sm">
              Providing premium tent services for all occasions across Jharkhand. 
              Your satisfaction is our commitment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-white/80 hover:text-[#FB9824] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white/80 hover:text-[#FB9824] transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-white/80 hover:text-[#FB9824] transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-white/80 hover:text-[#FB9824] transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white/80 hover:text-[#FB9824] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#FB9824' }} />
                <div>
                  <a href={`tel:${businessInfo.phone.primary}`} className="text-white/80 hover:text-[#FB9824] transition-colors block">
                    {businessInfo.phone.primary}
                  </a>
                  <a href={`tel:${businessInfo.phone.secondary}`} className="text-white/80 hover:text-[#FB9824] transition-colors block text-sm">
                    {businessInfo.phone.secondary}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#FB9824' }} />
                <a href={`mailto:${businessInfo.email}`} className="text-white/80 hover:text-[#FB9824] transition-colors">
                  {businessInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#FB9824' }} />
                <p className="text-white/80 text-sm">{businessInfo.address}</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {currentYear} {businessInfo.name}. All rights reserved.
          </p>
          <p className="text-white/60 text-sm mt-2 md:mt-0 flex items-center gap-1">
            Made with <Heart className="w-4 h-4" style={{ color: '#FB9824' }} /> for memorable events
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
