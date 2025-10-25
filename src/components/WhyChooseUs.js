import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    'Proven track record of successful wireless infrastructure projects',
    'Comprehensive market analysis and strategic positioning',
    'Expert negotiation services for optimal lease terms',
    'Ongoing support and lease management services',
    '24/7 customer support and technical assistance',
    'Industry-leading expertise and regulatory compliance',
    'Transparent communication throughout the entire process',
    'Long-term partnership approach focused on your success'
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Video Testimonials
            </h2>
            <h3 className="text-2xl font-semibold text-primary-600 mb-6">
              WHY WORK WITH US?
            </h3>
            <p className="text-xl text-gray-600">
              Discover the advantages of partnering with APWireless for your wireless infrastructure needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Are you interested in working with us?
            </p>
            <button className="btn-primary text-lg px-8 py-4">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;