import React from 'react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { businessInfo } from '../mockData';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center" style={{ backgroundColor: '#F9FCFF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full" style={{ backgroundColor: '#E3E3E3' }}>
              <span className="text-sm font-semibold" style={{ color: '#2C425C' }}>
                ✨ Premium Tent Solutions in Across Jharkhand
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight" style={{ color: '#2C425C' }}>
              Because Great Events
              <span className="block" style={{ color: '#FB9824' }}>
                Deserve Better Tents
              </span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              From grand weddings to intimate gatherings, we provide exceptional tent services for all your events. 
              Serving all over Jharkhand with quality, reliability, and dedication.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  backgroundColor: '#FB9824',
                  color: 'white'
                }}
              >
                Get Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <a href={`https://wa.me/91${businessInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
                  style={{
                    borderColor: '#2C425C',
                    color: '#2C425C'
                  }}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full" style={{ backgroundColor: '#E3E3E3' }}>
                  <Phone className="w-5 h-5" style={{ color: '#FB9824' }} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call Us</p>
                  <a href={`tel:${businessInfo.phone.primary}`} className="font-semibold hover:text-[#FB9824] transition-colors" style={{ color: '#2C425C' }}>
                    {businessInfo.phone.primary}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80"
                alt="Wedding Tent Setup"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Professional Tent Services</h3>
                <p className="text-white/90">Making every event extraordinary</p>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 left-8 right-8 grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                <p className="text-3xl font-bold" style={{ color: '#FB9824' }}>720+</p>
                <p className="text-sm text-gray-600">Events</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                <p className="text-3xl font-bold" style={{ color: '#FB9824' }}>8+</p>
                <p className="text-sm text-gray-600">Years</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                <p className="text-3xl font-bold" style={{ color: '#FB9824' }}>100%</p>
                <p className="text-sm text-gray-600">Satisfied</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
