import React, { useState } from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="section-padding bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            THE VALUE OF CELL SITE LEASES: A DEEP DIVE
          </h2>
          <h3 className="text-xl text-gray-300">
            WITH APWIRELESS
          </h3>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
            {!isPlaying ? (
              <div className="absolute inset-0 video-overlay flex items-center justify-center cursor-pointer"
                   onClick={() => setIsPlaying(true)}>
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="APWireless Video"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;