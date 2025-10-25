import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Lisa Pearson',
      title: 'Property Owner',
      content: 'APWireless made the entire process seamless and transparent. Their expertise in lease negotiations helped me secure a fair deal that provides excellent long-term value for my property.',
      rating: 5
    },
    {
      name: 'Frank Rivera',
      title: 'Farm Owner',
      content: 'The team at APWireless understood our unique needs as agricultural property owners. They worked with us to find solutions that work for both our farming operations and wireless infrastructure needs.',
      rating: 5
    },
    {
      name: 'Ray Ponds',
      title: 'Commercial Developer',
      content: 'Working with APWireless has been a game-changer for our development projects. Their strategic approach to wireless infrastructure planning has added significant value to our properties.',
      rating: 5
    },
    {
      name: 'Rachel Reynolds',
      title: 'Property Manager',
      content: 'The professionalism and expertise of the APWireless team is unmatched. They handle all aspects of the lease process with attention to detail and clear communication throughout.',
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            TESTIMONIALS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What our clients say about working with APWireless
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="font-semibold text-gray-900">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {testimonial.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-primary">
            Read More Testimonials
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;