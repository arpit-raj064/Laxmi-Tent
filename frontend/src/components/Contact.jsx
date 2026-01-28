import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { businessInfo } from '../mockData';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    customEventType: '',
    eventDate: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock submission - will be replaced with actual API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast.success('Thank you! We will contact you soon.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        eventType: '',
        customEventType: '',
        eventDate: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: '#E3E3E3' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#2C425C' }}>
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to book? Contact us today and let's make your event extraordinary!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#2C425C' }}>
                Contact Information
              </h3>
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: '#FB9824' }}
                  >
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#2C425C' }}>
                      Phone Numbers
                    </h4>
                    <a
                      href={`tel:${businessInfo.phone.primary}`}
                      className="text-gray-600 hover:text-[#FB9824] transition-colors block"
                    >
                      {businessInfo.phone.primary} (Primary)
                    </a>
                    <a
                      href={`tel:${businessInfo.phone.secondary}`}
                      className="text-gray-600 hover:text-[#FB9824] transition-colors block"
                    >
                      {businessInfo.phone.secondary} (Secondary)
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: '#FB9824' }}
                  >
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#2C425C' }}>
                      Email
                    </h4>
                    <a
                      href={`mailto:${businessInfo.email}`}
                      className="text-gray-600 hover:text-[#FB9824] transition-colors"
                    >
                      {businessInfo.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: '#FB9824' }}
                  >
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#2C425C' }}>
                      Address
                    </h4>
                    <p className="text-gray-600">{businessInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div
              className="p-6 rounded-xl"
              style={{ backgroundColor: '#F9FCFF' }}
            >
              <h4 className="font-semibold mb-2" style={{ color: '#2C425C' }}>
                Quick Connect on WhatsApp
              </h4>
              <p className="text-gray-600 mb-4 text-sm">
                Get instant response to your queries!
              </p>
              <a
                href={`https://wa.me/91${businessInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="w-full transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: '#25D366',
                    color: 'white'
                  }}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#2C425C' }}>
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="eventType">Event Type *</Label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FB9824]"
                >
                  <option value="">Select event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="party">Party & Events</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="puja">Puja & Religious Event</option>
                  <option value="pandal">Pandal Service</option>
                  <option value="picnic">Picnic & Outdoor Event</option>
                  <option value="other">Other</option>
                </select>
              </div>
                 {formData.eventType === 'other' && (
  <div>
    <label htmlFor="customEventType">
      Please specify event type *
    </label>
    <input
      id="customEventType"
      name="customEventType"
      value={formData.customEventType}
      onChange={handleChange}
      required
      placeholder="Enter your event type"
      className="mt-2"
    />
  </div>
)}
              <div>
                <Label htmlFor="eventDate">Event Date</Label>
                <Input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your event requirements..."
                  rows={4}
                  className="mt-2"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  backgroundColor: '#FB9824',
                  color: 'white'
                }}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
