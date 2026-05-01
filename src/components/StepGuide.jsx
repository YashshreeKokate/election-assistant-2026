import React, { useState } from 'react';
import { CheckCircle2, ChevronDown, ChevronUp, Circle, CheckSquare, Square, RotateCcw } from 'lucide-react';

export default function StepGuide({ vertical, completedSteps, setCompletedSteps }) {
  const [expandedStep, setExpandedStep] = useState(0);

  if (!vertical) return null;

  const totalSteps = vertical.steps.length;
  const completedCount = completedSteps.length;
  const progressPercentage = Math.round((completedCount / totalSteps) * 100) || 0;

  const toggleChecklistItem = (stepIndex, itemIndex) => {
    // In a more complex app, we might track individual checklist items.
    // For now, if they click any checklist item, we toggle it locally,
    // and if all are checked, we mark the step as complete.
    // To keep it simple and robust, let's just let them toggle the whole step 
    // when they finish reading, OR we track checklist state in a local component state.
  };

  const toggleStepComplete = (stepIndex, e) => {
    e.stopPropagation(); // Prevent accordion toggle
    if (completedSteps.includes(stepIndex)) {
      setCompletedSteps(completedSteps.filter(id => id !== stepIndex));
    } else {
      setCompletedSteps([...completedSteps, stepIndex]);
      // Auto-expand next incomplete step
      const nextIncomplete = vertical.steps.findIndex((_, idx) => idx > stepIndex && !completedSteps.includes(idx));
      if (nextIncomplete !== -1) {
        setExpandedStep(nextIncomplete);
      }
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 h-full">
      {/* Header and Progress */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
          <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
            📝
          </span>
          Step-by-Step Guide
        </h2>
        
        <div className="flex flex-col items-end">
          <span className="text-sm font-bold text-blue-600 mb-1">
            {completedCount} / {totalSteps} Steps Complete
          </span>
          <div className="w-full sm:w-48 h-2.5 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Accordion Steps */}
      <div className="space-y-4">
        {vertical.steps.map((step, index) => {
          const isExpanded = expandedStep === index;
          const isCompleted = completedSteps.includes(index);

          return (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                isExpanded ? 'border-blue-200 shadow-md bg-blue-50/30' : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {/* Accordion Header */}
              <button
                onClick={() => setExpandedStep(isExpanded ? null : index)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                      isCompleted 
                        ? 'bg-green-100 text-green-600' 
                        : isExpanded 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {isCompleted ? <CheckCircle2 size={20} /> : index + 1}
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold ${isCompleted ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                      {step.title}
                    </h3>
                  </div>
                </div>
                <div className="text-gray-400">
                  {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </button>

              {/* Accordion Body */}
              <div 
                className={`transition-all duration-500 ease-in-out ${
                  isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 sm:pl-[76px] border-t border-gray-100">
                  <p className="text-gray-600 mb-5 text-base">
                    {step.details}
                  </p>

                  {/* Checklist */}
                  <div className="bg-white rounded-xl border border-gray-200 p-4 mb-5 space-y-3 shadow-sm">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Checklist for this step</h4>
                    {step.checklist.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-gray-700">
                        <div className="mt-0.5 text-blue-500">
                          {isCompleted ? <CheckSquare size={18} /> : <Square size={18} />}
                        </div>
                        <span className={isCompleted ? 'text-gray-400' : ''}>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Complete Button */}
                  <button
                    onClick={(e) => toggleStepComplete(index, e)}
                    className={`w-full py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                      isCompleted
                        ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                    }`}
                  >
                    {isCompleted ? 'Mark as Incomplete' : 'Mark Step as Complete'}
                    {isCompleted ? <RotateCcw size={18} /> : <CheckCircle2 size={18} />}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
