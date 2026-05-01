import React, { useState, useEffect } from 'react';
import ProfileSelector from './components/ProfileSelector';
import StepGuide from './components/StepGuide';
import Timeline from './components/Timeline';
import PollingStationMap from './components/PollingStationMap';
import { verticals } from './config/verticals';
import { ArrowLeft, RotateCcw } from 'lucide-react';

function App() {
  // Initialize state from localStorage
  const [selectedVerticalId, setSelectedVerticalId] = useState(() => {
    const saved = localStorage.getItem('electionAssistantContext');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.selectedVerticalId || null;
      } catch (e) {
        return null;
      }
    }
    return null;
  });

  const [completedSteps, setCompletedSteps] = useState(() => {
    const saved = localStorage.getItem('electionAssistantContext');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.completedSteps || [];
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('electionAssistantContext', JSON.stringify({
      selectedVerticalId,
      completedSteps
    }));
  }, [selectedVerticalId, completedSteps]);

  const handleSelect = (id) => {
    setSelectedVerticalId(id);
    setCompletedSteps([]); // Reset progress when changing verticals
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetProgress = () => {
    if (window.confirm("Are you sure you want to reset your progress?")) {
      setCompletedSteps([]);
    }
  };

  const selectedVertical = selectedVerticalId ? verticals[selectedVerticalId] : null;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-india-saffron selection:text-white pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-india-saffron via-white to-india-green shadow-md border border-gray-100 flex items-center justify-center">
              <div className="w-3 h-3 bg-india-blue rounded-full"></div>
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-800 hidden sm:inline">
              Election Assistant <span className="text-india-saffron">2026</span>
            </span>
            <span className="font-bold text-xl tracking-tight text-gray-800 sm:hidden">
              EA <span className="text-india-saffron">2026</span>
            </span>
          </div>
          
          {selectedVertical && (
            <div className="flex items-center gap-2">
              <button
                onClick={resetProgress}
                className="flex items-center gap-2 text-sm font-semibold text-orange-600 hover:bg-orange-50 px-3 py-2 rounded-full transition-colors"
                title="Reset Progress"
              >
                <RotateCcw size={16} />
                <span className="hidden md:inline">Reset</span>
              </button>
              <button
                onClick={() => setSelectedVerticalId(null)}
                className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-india-blue transition-colors bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full"
              >
                <ArrowLeft size={16} />
                <span className="hidden sm:inline">Change Voter Type</span>
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-8">
        {!selectedVertical ? (
          <ProfileSelector onSelect={handleSelect} />
        ) : (
          <div className="max-w-7xl mx-auto px-4 animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="mb-8">
              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                {selectedVertical.name} Guide
              </h1>
              <p className="text-xl text-gray-600">
                Follow these steps to ensure your voice is heard in the upcoming elections.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {/* Timeline goes full width at the top now */}
              <div className="w-full">
                <Timeline 
                  vertical={selectedVertical} 
                  completedSteps={completedSteps} 
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <StepGuide 
                    vertical={selectedVertical} 
                    completedSteps={completedSteps}
                    setCompletedSteps={setCompletedSteps}
                  />
                </div>
                <div className="lg:col-span-1">
                  <PollingStationMap vertical={selectedVertical} />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Sticky Mobile Navigation */}
      {selectedVertical && (
        <div className="fixed bottom-6 left-0 right-0 sm:hidden flex justify-center z-50 pointer-events-none gap-2 px-4">
          <button
            onClick={resetProgress}
            className="pointer-events-auto flex items-center justify-center w-12 h-12 bg-white text-orange-600 rounded-full shadow-2xl border border-gray-100 hover:bg-orange-50 transition-colors"
          >
            <RotateCcw size={18} />
          </button>
          <button
            onClick={() => setSelectedVerticalId(null)}
            className="pointer-events-auto flex-1 max-w-xs flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-bold shadow-2xl hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Profiles
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
