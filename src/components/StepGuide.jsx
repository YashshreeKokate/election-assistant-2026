import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function StepGuide({ vertical }) {
  if (!vertical) return null;

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
          📝
        </span>
        Step-by-Step Guide
      </h2>
      <div className="space-y-6">
        {vertical.steps.map((step, index) => (
          <div key={index} className="flex items-start group">
            <div className="flex flex-col items-center mr-4">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {index + 1}
              </div>
              {index < vertical.steps.length - 1 && (
                <div className="w-0.5 h-10 bg-gray-200 mt-2 group-hover:bg-blue-200 transition-colors duration-300"></div>
              )}
            </div>
            <div className="pt-1 flex-1">
              <p className="text-lg text-gray-800 font-medium group-hover:text-blue-600 transition-colors duration-300">
                {step}
              </p>
            </div>
            <div className="pt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <CheckCircle2 className="text-green-500 w-5 h-5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
