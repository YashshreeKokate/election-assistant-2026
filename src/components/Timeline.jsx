import React from 'react';
import { Calendar } from 'lucide-react';

export default function Timeline({ vertical }) {
  if (!vertical) return null;

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <span className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
          <Calendar size={20} />
        </span>
        Action Timeline
      </h2>
      <div className="relative border-l-2 border-orange-200 ml-4 mt-6">
        {vertical.timeline.map((item, index) => {
          const [month, action] = item.split(': ');
          return (
            <div key={index} className="mb-8 ml-6 relative group">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-orange-100 rounded-full -left-9 ring-4 ring-white group-hover:bg-orange-500 transition-colors duration-300">
                <div className="w-2 h-2 rounded-full bg-orange-500 group-hover:bg-white transition-colors duration-300"></div>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-bold text-gray-900">
                {month}
              </h3>
              <p className="text-base font-normal text-gray-600">
                {action}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
