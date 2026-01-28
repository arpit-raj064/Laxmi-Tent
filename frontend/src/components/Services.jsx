import React from 'react';
import { Heart, PartyPopper, Briefcase, Flame, Home, Trees } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { services } from '../mockData';

const iconMap = {
  Heart,
  PartyPopper,
  Briefcase,
  Flame,
  Home,
  Trees
};

const Services = () => {
  return (
    <section id="services" className="py-20" style={{ backgroundColor: '#F9FCFF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#2C425C' }}>
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive tent solutions for every occasion, ensuring your event is memorable and hassle-free.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <Card
                key={service.id}
                className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                style={{
                  borderColor: '#E3E3E3',
                  animationDelay: `${index * 100}ms`
                }}
              >
                <CardHeader>
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: '#FB9824' }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl" style={{ color: '#2C425C' }}>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <div className="mt-20 p-8 rounded-2xl" style={{ backgroundColor: '#E3E3E3' }}>
          <h3 className="text-3xl font-bold text-center mb-8" style={{ color: '#2C425C' }}>
            Why Choose Laxmi Tent House?
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: '#FB9824' }}>✓</div>
              <h4 className="font-semibold mb-2" style={{ color: '#2C425C' }}>Quality Equipment</h4>
              <p className="text-sm text-gray-600">Premium tents and accessories</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: '#FB9824' }}>✓</div>
              <h4 className="font-semibold mb-2" style={{ color: '#2C425C' }}>Timely Setup</h4>
              <p className="text-sm text-gray-600">On-time delivery and installation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: '#FB9824' }}>✓</div>
              <h4 className="font-semibold mb-2" style={{ color: '#2C425C' }}>Affordable Pricing</h4>
              <p className="text-sm text-gray-600">Competitive rates for all budgets</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: '#FB9824' }}>✓</div>
              <h4 className="font-semibold mb-2" style={{ color: '#2C425C' }}>Expert Team</h4>
              <p className="text-sm text-gray-600">Experienced professionals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
