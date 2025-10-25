import React from 'react';

const Locations = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            OUR LOCATIONS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Global presence with local expertise across multiple continents
          </p>
        </div>
        
        <div className="relative">
          <div className="world-map h-96 lg:h-[500px] bg-navy-900 rounded-lg relative overflow-hidden">
            {/* World map background will be handled by CSS */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 to-navy-800/80"></div>
            
            {/* Location markers */}
            <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
            <div className="absolute top-2/5 right-1/3 w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
            <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;