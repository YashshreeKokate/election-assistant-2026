import React from 'react';
import { Calendar, Check, Clock } from 'lucide-react';

export default function Timeline({ vertical, completedSteps = [] }) {
  if (!vertical) return null;

  const totalSteps = vertical.steps.length;
  const completedCount = completedSteps.length;
  const progressRatio = totalSteps > 0 ? completedCount / totalSteps : 0;
  
  // Estimate which timeline items are complete based on overall step progress
  const timelineLength = vertical.timeline.length;
  const currentTimelineIndex = Math.min(
    Math.floor(progressRatio * timelineLength), 
    timelineLength - 1
  );
  
  // If all steps are complete, mark all timeline items as complete
  const allComplete = completedCount === totalSteps;

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 h-full w-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
        <span className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
          <Calendar size={20} />
        </span>
        Action Timeline
      </h2>
      
      <div className="relative">
        {/* Horizontal line for desktop, hidden on mobile */}
        <div className="hidden md:block absolute top-6 left-0 right-0 h-1 bg-gray-100 rounded-full" />
        {/* Progress line for desktop */}
        <div 
          className="hidden md:block absolute top-6 left-0 h-1 bg-orange-500 rounded-full transition-all duration-700 ease-out z-0" 
          style={{ width: allComplete ? '100%' : `${(currentTimelineIndex / Math.max(1, timelineLength - 1)) * 100}%` }}
        />

        {/* Vertical line for mobile */}
        <div className="md:hidden absolute top-0 bottom-0 left-[23px] w-1 bg-gray-100 rounded-full" />
        {/* Vertical progress line for mobile */}
        <div 
          className="md:hidden absolute top-0 left-[23px] w-1 bg-orange-500 rounded-full transition-all duration-700 ease-out z-0"
          style={{ height: allComplete ? '100%' : `${(currentTimelineIndex / Math.max(1, timelineLength - 1)) * 100}%` }}
        />

        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-4 relative z-10">
          {vertical.timeline.map((item, index) => {
            const [month, action] = item.split(': ');
            
            const isCompleted = allComplete || index < currentTimelineIndex;
            const isCurrent = !allComplete && index === currentTimelineIndex;
            const isFuture = !allComplete && index > currentTimelineIndex;

            return (
              <div key={index} className="flex md:flex-col items-start md:items-center relative group flex-1">
                
                {/* Timeline Dot */}
                <div 
                  className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-md transition-all duration-300 ${
                    isCompleted 
                      ? 'bg-orange-500 text-white' 
                      : isCurrent
                        ? 'bg-white text-orange-600 border-orange-500 ring-4 ring-orange-100'
                        : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {isCompleted ? (
                    <Check size={20} className="animate-in zoom-in" />
                  ) : isCurrent ? (
                    <Clock size={20} className="animate-pulse" />
                  ) : (
                    <span className="font-bold">{index + 1}</span>
                  )}
                </div>

                {/* Content */}
                <div className="ml-6 md:ml-0 md:mt-6 md:text-center flex-1">
                  <div 
                    className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 uppercase tracking-wide ${
                      isCompleted 
                        ? 'bg-orange-100 text-orange-700' 
                        : isCurrent
                          ? 'bg-orange-500 text-white shadow-md'
                          : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {month}
                  </div>
                  <h3 className={`font-bold transition-colors ${isCompleted ? 'text-gray-900' : isCurrent ? 'text-orange-600' : 'text-gray-500'}`}>
                    {action}
                  </h3>
                  
                  {isCurrent && (
                    <div className="md:hidden mt-2 text-xs font-semibold text-orange-500 bg-orange-50 inline-block px-2 py-1 rounded">
                      Current Phase
                    </div>
                  )}
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
