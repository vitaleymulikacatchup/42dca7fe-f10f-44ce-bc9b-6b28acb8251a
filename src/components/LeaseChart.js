import React from 'react';

const LeaseChart = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            GAIN CONTROL WITH A LEASE BUYOUT
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the financial benefits of cell site lease optimization
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Lease Value Comparison
              </h3>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-primary-600 rounded"></div>
                  <span className="text-sm text-gray-600">Current Lease Value</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-sm text-gray-600">Optimized Value</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                  <span className="text-sm text-gray-600">Market Average</span>
                </div>
              </div>
            </div>
            
            {/* Chart visualization */}
            <div className="relative h-64 bg-gray-100 rounded-lg p-4">
              <div className="flex items-end justify-between h-full">
                {/* Sample chart bars */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-20 bg-primary-600 rounded-t"></div>
                  <span className="text-xs text-gray-600">Year 1</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-32 bg-green-500 rounded-t"></div>
                  <span className="text-xs text-gray-600">Year 5</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-24 bg-yellow-500 rounded-t"></div>
                  <span className="text-xs text-gray-600">Year 10</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-40 bg-primary-600 rounded-t"></div>
                  <span className="text-xs text-gray-600">Year 15</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-36 bg-green-500 rounded-t"></div>
                  <span className="text-xs text-gray-600">Year 20</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button className="btn-primary">
                Get Your Lease Evaluation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaseChart;