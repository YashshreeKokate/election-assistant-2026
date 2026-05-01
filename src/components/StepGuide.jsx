import React, { useState } from 'react';
import { CheckCircle2, ChevronDown, ChevronUp, CheckSquare, Square, RotateCcw } from 'lucide-react';

export default function StepGuide({ vertical, completedSteps, setCompletedSteps, t }) {
  const [expandedStep, setExpandedStep] = useState(0);

  if (!vertical) return null;

  const guide = t?.guide || {};
  const totalSteps = vertical.steps.length;
  const completedCount = completedSteps.length;
  const progressPercentage = Math.round((completedCount / totalSteps) * 100) || 0;

  const toggleStepComplete = (stepIndex, e) => {
    e.stopPropagation();
    if (completedSteps.includes(stepIndex)) {
      setCompletedSteps(completedSteps.filter(id => id !== stepIndex));
    } else {
      const next = vertical.steps.findIndex((_, idx) => idx > stepIndex && !completedSteps.includes(idx));
      setCompletedSteps([...completedSteps, stepIndex]);
      if (next !== -1) setExpandedStep(next);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setExpandedStep(expandedStep === index ? null : index);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 h-full print:shadow-none">

      {/* Header + Progress */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3" id="step-guide-heading">
          <span aria-hidden="true" className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-lg">📝</span>
          {guide.stepsTitle || 'Step-by-Step Guide'}
        </h2>

        <div className="flex flex-col items-end">
          <span
            aria-live="polite"
            className="text-sm font-bold text-blue-600 mb-1"
          >
            {completedCount} / {totalSteps} {guide.complete || 'Steps Complete'}
          </span>
          <div
            role="progressbar"
            aria-valuenow={completedCount}
            aria-valuemin={0}
            aria-valuemax={totalSteps}
            aria-label={`${completedCount} of ${totalSteps} steps completed`}
            className="w-48 h-2.5 bg-gray-100 rounded-full overflow-hidden"
          >
            <div
              className="h-full bg-blue-600 transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Accordion Steps */}
      <ol
        aria-labelledby="step-guide-heading"
        className="space-y-4"
      >
        {vertical.steps.map((step, index) => {
          const isExpanded = expandedStep === index;
          const isCompleted = completedSteps.includes(index);
          const stepId = `step-${index}`;
          const panelId = `step-panel-${index}`;

          return (
            <li
              key={index}
              className={`border rounded-2xl transition-all duration-300 print:overflow-visible overflow-hidden ${
                isExpanded ? 'border-blue-200 shadow-md bg-blue-50/30' : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {/* Accordion Header */}
              <button
                id={stepId}
                aria-expanded={isExpanded}
                aria-controls={panelId}
                onClick={() => setExpandedStep(isExpanded ? null : index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-white hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset rounded-2xl"
              >
                <div className="flex items-center gap-4">
                  <div
                    aria-hidden="true"
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
                  <h3 className={`text-lg font-bold ${isCompleted ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                    {step.title}
                    {isCompleted && <span className="sr-only"> (completed)</span>}
                  </h3>
                </div>
                <span aria-hidden="true" className="text-gray-400 print:hidden">
                  {isExpanded ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                </span>
              </button>

              {/* Accordion Body — always visible when printing */}
              <div
                id={panelId}
                role="region"
                aria-labelledby={stepId}
                aria-hidden={!isExpanded}
                className={`transition-all duration-300 ease-in-out print:!block ${isExpanded ? 'block' : 'hidden'}`}
              >
                <div className="p-5 pt-2 sm:pl-[76px] border-t border-gray-100">
                  <p className="text-gray-600 mb-5 text-base leading-relaxed">{step.details}</p>

                  {/* Checklist */}
                  <div className="bg-white rounded-xl border border-gray-200 p-4 mb-5 space-y-3 shadow-sm">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                      {guide.checklistLabel || 'Checklist for this step'}
                    </h4>
                    <ul aria-label={`Checklist for ${step.title}`}>
                      {step.checklist.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-700 mb-2">
                          <span aria-hidden="true" className={`mt-0.5 ${isCompleted ? 'text-green-500' : 'text-blue-400'}`}>
                            {isCompleted ? <CheckSquare size={18} /> : <Square size={18} />}
                          </span>
                          <span className={isCompleted ? 'text-gray-400' : ''}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Complete Button — hidden when printing */}
                  <button
                    onClick={(e) => toggleStepComplete(index, e)}
                    aria-label={isCompleted
                      ? `${guide.markIncomplete || 'Mark as Incomplete'}: ${step.title}`
                      : `${guide.markComplete || 'Mark Step as Complete'}: ${step.title}`
                    }
                    className={`w-full py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 print:hidden ${
                      isCompleted
                        ? 'bg-gray-100 text-gray-600 hover:bg-gray-200 focus-visible:ring-gray-400'
                        : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg focus-visible:ring-blue-500'
                    }`}
                  >
                    {isCompleted ? (
                      <><RotateCcw size={17} aria-hidden="true" /> {guide.markIncomplete || 'Mark as Incomplete'}</>
                    ) : (
                      <><CheckCircle2 size={17} aria-hidden="true" /> {guide.markComplete || 'Mark Step as Complete'}</>
                    )}
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
