import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { testimonials } from '../mockData';

const Testimonials = () => {
  const renderStars = (rating) => {
    return Array(rating)
      .fill(0)
      .map((_, index) => (
        <Star key={index} className="w-5 h-5 fill-current" style={{ color: '#FB9824' }} />
      ));
  };

  return (
    <section id="testimonials" className="py-20" style={{ backgroundColor: '#F9FCFF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#2C425C' }}>
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers who trusted us with their special events.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{
                borderColor: '#E3E3E3',
                animationDelay: `${index * 100}ms`
              }}
            >
              <CardContent className="pt-6">
                {/* Stars */}
                <div className="flex gap-1 mb-4">{renderStars(testimonial.rating)}</div>

                {/* Comment */}
                <p className="text-gray-600 mb-6 italic">"{testimonial.comment}"</p>

                {/* Client Info */}
                <div className="border-t pt-4" style={{ borderColor: '#E3E3E3' }}>
                  <h4 className="font-semibold" style={{ color: '#2C425C' }}>
                    {testimonial.name}
                  </h4>
                  <p className="text-sm" style={{ color: '#FB9824' }}>
                    {testimonial.event}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{testimonial.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center p-8 rounded-2xl" style={{ backgroundColor: '#E3E3E3' }}>
          <h3 className="text-2xl font-bold mb-4" style={{ color: '#2C425C' }}>
            Ready to Make Your Event Special?
          </h3>
          <p className="text-gray-600 mb-6">
            Join hundreds of satisfied customers who chose Laxmi Tent House for their events.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: '#FB9824',
              color: 'white'
            }}
          >
            Get Your Free Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
