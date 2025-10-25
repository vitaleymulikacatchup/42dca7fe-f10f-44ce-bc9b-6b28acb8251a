import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-bg min-h-screen flex items-center">
      <div className="container-custom">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Elevating global wireless connectivity through innovative infrastructure solutions
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            We provide comprehensive wireless infrastructure services that connect communities, 
            enable businesses, and drive technological advancement worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary flex items-center justify-center group">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;