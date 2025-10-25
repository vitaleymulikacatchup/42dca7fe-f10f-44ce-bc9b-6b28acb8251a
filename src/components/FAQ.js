import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: 'What is a cell site lease and how does it work?',
      answer: 'A cell site lease is an agreement between a property owner and a wireless carrier or tower company to place wireless equipment on your property. This generates consistent monthly rental income while providing essential wireless coverage to the community.'
    },
    {
      question: 'How much can I earn from a cell tower lease?',
      answer: 'Lease payments vary based on location, coverage needs, and market conditions. Our experts evaluate each property individually to ensure you receive fair market value for your lease agreement.'
    },
    {
      question: 'What is the typical lease term and renewal process?',
      answer: 'Initial lease terms typically range from 5-25 years with multiple renewal options. We help negotiate favorable terms that protect your interests while providing long-term value.'
    },
    {
      question: 'Will a cell tower affect my property value?',
      answer: 'Studies show that cell towers generally have minimal impact on property values, while the lease income often provides significant financial benefits that outweigh any concerns.'
    }
  ];

  return (
    <section className="section-padding bg-navy-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            FAQs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Common questions about wireless infrastructure and cell site leases
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white/10 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <span className="font-semibold text-white">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-white transition-transform ${
                  openFAQ === index ? 'rotate-180' : ''
                }`} />
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-primary">
            View More FAQs
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;