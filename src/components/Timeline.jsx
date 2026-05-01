import React from 'react';
import { Calendar, Check, Clock } from 'lucide-react';

export default function Timeline({ vertical, completedSteps = [], t }) {
  if (!vertical) return null;

  const guide = t?.guide || {};
  const totalSteps = vertical.steps.length;
  const completedCount = completedSteps.length;
  const progressRatio = totalSteps > 0 ? completedCount / totalSteps : 0;

  const timelineLength = vertical.timeline.length;
  const currentTimelineIndex = Math.min(
    Math.floor(progressRatio * timelineLength),
    timelineLength - 1
  );
  const allComplete = completedCount === totalSteps && totalSteps > 0;

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 w-full print:shadow-none">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3" id="timeline-heading">
        <span aria-hidden="true" className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
          <Calendar size={20} />
        </span>
        {guide.timelineTitle || 'Action Timeline'}
      </h2>

      <div className="relative">
        {/* Desktop: horizontal connecting line */}
        <div aria-hidden="true" className="hidden md:block absolute top-6 left-0 right-0 h-1 bg-gray-100 rounded-full" />
        <div
          aria-hidden="true"
          className="hidden md:block absolute top-6 left-0 h-1 bg-orange-500 rounded-full transition-all duration-700 ease-out z-0"
          style={{ width: allComplete ? '100%' : `${(currentTimelineIndex / Math.max(1, timelineLength - 1)) * 100}%` }}
        />
        {/* Mobile: vertical connecting line */}
        <div aria-hidden="true" className="md:hidden absolute top-0 bottom-0 left-[23px] w-1 bg-gray-100 rounded-full" />
        <div
          aria-hidden="true"
          className="md:hidden absolute top-0 left-[23px] w-1 bg-orange-500 rounded-full transition-all duration-700 ease-out z-0"
          style={{ height: allComplete ? '100%' : `${(currentTimelineIndex / Math.max(1, timelineLength - 1)) * 100}%` }}
        />

        <ol
          aria-labelledby="timeline-heading"
          className="flex flex-col md:flex-row justify-between gap-6 md:gap-4 relative z-10"
        >
          {vertical.timeline.map((item, index) => {
            const [month, action] = item.split(': ');
            const isCompleted = allComplete || index < currentTimelineIndex;
            const isCurrent = !allComplete && index === currentTimelineIndex;
            const isFuture = !allComplete && index > currentTimelineIndex;

            let statusLabel = 'Upcoming';
            if (isCompleted) statusLabel = 'Completed';
            else if (isCurrent) statusLabel = 'Current phase';

            return (
              <li
                key={index}
                className="flex md:flex-col items-start md:items-center relative group flex-1"
                aria-label={`${month}: ${action} — ${statusLabel}`}
              >
                {/* Dot */}
                <div
                  aria-hidden="true"
                  className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-md transition-all duration-300 ${
                    isCompleted
                      ? 'bg-orange-500 text-white'
                      : isCurrent
                        ? 'bg-white text-orange-600 border-orange-500 ring-4 ring-orange-100'
                        : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {isCompleted ? (
                    <Check size={20} />
                  ) : isCurrent ? (
                    <Clock size={20} className="animate-pulse" />
                  ) : (
                    <span className="font-bold">{index + 1}</span>
                  )}
                </div>

                {/* Content */}
                <div className="ml-6 md:ml-0 md:mt-5 md:text-center flex-1">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 uppercase tracking-wide ${
                    isCompleted
                      ? 'bg-orange-100 text-orange-700'
                      : isCurrent
                        ? 'bg-orange-500 text-white shadow-md'
                        : 'bg-gray-100 text-gray-500'
                  }`}>
                    {month}
                  </div>
                  <p className={`text-sm font-bold ${isCompleted ? 'text-gray-800' : isCurrent ? 'text-orange-600' : 'text-gray-400'}`}>
                    {action}
                  </p>
                  {isCurrent && (
                    <span className="sr-only">Current phase</span>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
