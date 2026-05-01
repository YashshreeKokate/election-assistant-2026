import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

export default function PollingStationMap({ vertical }) {
  if (!vertical) return null;

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full flex flex-col">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <span className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
          <MapPin size={20} />
        </span>
        Location Guide
      </h2>
      
      <div className="flex-1 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-8 text-center min-h-[300px] relative overflow-hidden group">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-inner">
          <MapPin className="text-green-600 w-10 h-10" />
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-2">{vertical.mapLabel}</h3>
        <p className="text-gray-500 mb-6 max-w-sm">
          Interactive maps will be available closer to the election date to help you navigate to your designated location.
        </p>
        
        <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 hover:text-green-600 transition-colors shadow-sm">
          <Navigation size={18} />
          View Nearest Locations
        </button>
      </div>
    </div>
  );
}
