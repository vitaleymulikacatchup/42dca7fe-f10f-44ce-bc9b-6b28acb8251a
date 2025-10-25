import React from 'react';
import { Zap, Globe, Target } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Fast and efficient wireless infrastructure deployment with minimal disruption to your operations and maximum speed to market.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Comprehensive coverage across multiple continents with local expertise and international standards for seamless connectivity.'
    },
    {
      icon: Target,
      title: 'Precision Solutions',
      description: 'Tailored wireless solutions designed to meet your specific requirements with cutting-edge technology and proven methodologies.'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose APWireless
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver exceptional wireless infrastructure solutions that drive connectivity, 
            innovation, and growth for businesses worldwide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6 group-hover:bg-primary-200 transition-colors">
                  <Icon className="feature-icon" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;