import React from 'react';
import { CheckCircle, TrendingUp, Award, Users } from 'lucide-react';

const ValueProposition = () => {
  const values = [
    {
      icon: CheckCircle,
      title: 'Proven Track Record',
      description: 'Decades of experience delivering successful wireless infrastructure projects across diverse markets and challenging environments.'
    },
    {
      icon: TrendingUp,
      title: 'Market Leadership',
      description: 'Industry-leading expertise in wireless technology trends, regulatory compliance, and strategic market positioning.'
    },
    {
      icon: Award,
      title: 'Excellence in Service',
      description: 'Award-winning customer service and technical support with 24/7 availability and rapid response times.'
    },
    {
      icon: Users,
      title: 'Partnership Approach',
      description: 'Collaborative partnerships that align with your business objectives and deliver measurable value and long-term success.'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Delivering Value Through Innovation
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our comprehensive approach to wireless infrastructure combines cutting-edge 
              technology with deep industry expertise to deliver solutions that exceed expectations 
              and drive sustainable growth.
            </p>
            <div className="space-y-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/images/value-proposition.jpg" 
              alt="Wireless Infrastructure" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center">
              <Award className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;