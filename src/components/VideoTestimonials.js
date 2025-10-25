import React from 'react';
import { Play } from 'lucide-react';

const VideoTestimonials = () => {
  return (
    <section className="section-padding bg-navy-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            VIDEO TESTIMONIALS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear directly from our satisfied clients about their experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <Play className="w-6 h-6 text-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-semibold">Client Success Story</h3>
              <p className="text-sm text-gray-300">Property Owner Experience</p>
            </div>
          </div>
          
          <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <Play className="w-6 h-6 text-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-semibold">Partnership Benefits</h3>
              <p className="text-sm text-gray-300">Long-term Value Creation</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-secondary border-white text-white hover:bg-white hover:text-navy-900">
            See More Video Testimonials
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;