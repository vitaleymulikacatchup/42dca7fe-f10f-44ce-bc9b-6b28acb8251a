import React from 'react';

const Stats = () => {
  const stats = [
    { number: '0', label: 'Countries Served', suffix: '' },
    { number: '0', label: 'Active Projects', suffix: '' },
    { number: '0', label: 'Years Experience', suffix: '+' },
    { number: '0', label: 'Satisfied Clients', suffix: '+' }
  ];

  return (
    <section className="section-padding bg-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="stats-counter mb-2">
                {stat.number}{stat.suffix}
              </div>
              <p className="text-gray-600 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;