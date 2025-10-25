import React from 'react';
import { Phone } from 'lucide-react';

const CTA = () => {
  return (
    <section className="section-padding bg-navy-900">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact us today for a
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-primary-400 mb-8">
            FREE LEASE EVALUATION
          </h3>
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Phone className="w-8 h-8 text-white" />
            <span className="text-3xl lg:text-4xl font-bold text-white">
              888 232 2740
            </span>
          </div>
          <button className="btn-primary text-lg px-8 py-4">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;