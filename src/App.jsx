import React, { useState, useEffect, lazy, Suspense } from 'react';
import ProfileSelector from './components/ProfileSelector';
import StepGuide from './components/StepGuide';
import Timeline from './components/Timeline';
import { fetchVerticals } from './services/verticalService';
import { verticals } from './config/verticals';
import { translations } from './i18n/translations';
import { ArrowLeft, RotateCcw, Languages, Printer, Share2, MapPin } from 'lucide-react';

// Lazy-load the map component for better performance
const PollingStationMap = lazy(() => import('./components/PollingStationMap'));

function App() {
  // --- State ---
  const [selectedVerticalId, setSelectedVerticalId] = useState(() => {
    try { return JSON.parse(localStorage.getItem('electionAssistantContext'))?.selectedVerticalId || null; }
    catch { return null; }
  });

  const [completedSteps, setCompletedSteps] = useState(() => {
    try { return JSON.parse(localStorage.getItem('electionAssistantContext'))?.completedSteps || []; }
    catch { return []; }
  });

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('electionAssistantLang') || 'en';
  });

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [shareToast, setShareToast] = useState(false);
  const [verticalsList, setVerticalsList] = useState(verticals);
  const [isDataLoading, setIsDataLoading] = useState(false); // No longer show loading screen by default

  const t = translations[language];

  // --- Data Fetching ---
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchVerticals();
        setVerticalsList(data);
      } catch (err) {
        console.error("Failed to load verticals from Firestore:", err);
      } finally {
        setIsDataLoading(false);
      }
    };
    loadData();
  }, []);

  const rawVertical = selectedVerticalId ? verticalsList[selectedVerticalId] : null;
  
  // Merge raw vertical structure with localized content
  const selectedVertical = rawVertical ? {
    ...rawVertical,
    ...(t.profiles[selectedVerticalId] || {})
  } : null;

  // --- Persistence ---
  useEffect(() => {
    localStorage.setItem('electionAssistantContext', JSON.stringify({ selectedVerticalId, completedSteps }));
  }, [selectedVerticalId, completedSteps]);

  useEffect(() => {
    localStorage.setItem('electionAssistantLang', language);
    document.documentElement.lang = language === 'hi' ? 'hi' : 'en';
  }, [language]);

  // --- Handlers ---
  const handleSelect = (id) => {
    setSelectedVerticalId(id);
    setCompletedSteps([]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedVerticalId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetProgress = () => {
    if (window.confirm("Are you sure you want to reset your progress?")) {
      setCompletedSteps([]);
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    const url = window.location.href;
    const text = selectedVertical
      ? `Check out my Election Guide for "${selectedVertical.name}" on Election Assistant 2026!`
      : "Check out the Election Assistant 2026 — your guide to the voting process in India!";

    if (navigator.share) {
      try {
        await navigator.share({ title: t.appTitle, text, url });
      } catch (e) {
        // User cancelled
      }
    } else {
      await navigator.clipboard.writeText(url);
      setShareToast(true);
      setTimeout(() => setShareToast(false), 3000);
    }
  };

  const totalSteps = selectedVertical?.steps?.length || 0;
  const completedCount = completedSteps.length;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pb-24">

      {/* Skip to content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-india-blue text-white px-4 py-2 rounded-lg z-[100] font-semibold"
      >
        Skip to content
      </a>

      {/* ===== STICKY HEADER ===== */}
      <header
        role="banner"
        className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm print:hidden"
      >
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between gap-2">
          {/* Logo + Title */}
          <div className="flex items-center gap-2 min-w-0">
            <div
              aria-hidden="true"
              className="flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-india-saffron via-white to-india-green shadow-md border border-gray-100 flex items-center justify-center"
            >
              <div className="w-2.5 h-2.5 bg-india-blue rounded-full" />
            </div>
            <span className="font-bold text-lg tracking-tight text-gray-800 truncate">
              {t.appTitle} <span className="text-india-saffron">{t.appYear}</span>
            </span>
            {/* Vertical breadcrumb */}
            {selectedVertical && (
              <span className="hidden md:flex items-center gap-1 text-sm text-gray-500 min-w-0 ml-1">
                <span aria-hidden="true">•</span>
                <span className="truncate font-medium">{selectedVertical.name}</span>
              </span>
            )}
          </div>

          {/* Header Actions */}
          <div className="flex items-center gap-1 flex-shrink-0">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              aria-label={`Switch language to ${language === 'en' ? 'Hindi' : 'English'}`}
              className="flex items-center gap-1 text-xs font-bold text-gray-600 hover:text-india-blue bg-gray-100 hover:bg-blue-50 px-2 py-1.5 rounded-full transition-colors"
            >
              <Languages size={14} />
              <span className="hidden sm:inline">{t.language}</span>
            </button>

            {selectedVertical && (
              <>
                {/* Print */}
                <button
                  onClick={handlePrint}
                  aria-label={t.print}
                  title={t.print}
                  className="flex items-center gap-1 text-xs font-bold text-gray-600 hover:text-india-blue bg-gray-100 hover:bg-blue-50 px-2 py-1.5 rounded-full transition-colors"
                >
                  <Printer size={14} />
                  <span className="hidden lg:inline">{t.print}</span>
                </button>

                {/* Share */}
                <button
                  onClick={handleShare}
                  aria-label={t.share}
                  title={t.share}
                  className="flex items-center gap-1 text-xs font-bold text-gray-600 hover:text-india-blue bg-gray-100 hover:bg-blue-50 px-2 py-1.5 rounded-full transition-colors"
                >
                  <Share2 size={14} />
                  <span className="hidden lg:inline">{t.share}</span>
                </button>

                {/* Reset */}
                <button
                  onClick={resetProgress}
                  aria-label={t.reset}
                  title={t.reset}
                  className="flex items-center gap-1 text-xs font-bold text-orange-600 hover:bg-orange-50 px-2 py-1.5 rounded-full transition-colors"
                >
                  <RotateCcw size={14} />
                  <span className="hidden lg:inline">{t.reset}</span>
                </button>

                {/* Change voter type */}
                <button
                  onClick={handleBack}
                  aria-label={t.changeVoterType}
                  className="flex items-center gap-1.5 text-xs font-bold text-gray-600 hover:text-india-blue bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full transition-colors"
                >
                  <ArrowLeft size={14} />
                  <span className="hidden sm:inline">{t.changeVoterType}</span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Progress bar under header when a vertical is selected */}
        {selectedVertical && totalSteps > 0 && (
          <div
            role="progressbar"
            aria-valuenow={completedCount}
            aria-valuemin={0}
            aria-valuemax={totalSteps}
            aria-label={`${completedCount} of ${totalSteps} ${t.guide.complete}`}
            className="h-1 bg-gray-100"
          >
            <div
              className="h-full bg-gradient-to-r from-india-saffron to-india-green transition-all duration-700 ease-out"
              style={{ width: `${(completedCount / totalSteps) * 100}%` }}
            />
          </div>
        )}
      </header>

      {/* ===== SHARE TOAST ===== */}
      {shareToast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] bg-gray-900 text-white text-sm font-semibold px-5 py-3 rounded-full shadow-2xl animate-in slide-in-from-top-4"
        >
          🔗 Link copied to clipboard!
        </div>
      )}

      {/* ===== MAIN CONTENT ===== */}
      <main
        id="main-content"
        className={`pt-8 transition-opacity duration-200 ${isTransitioning || isDataLoading ? 'opacity-0' : 'opacity-100'}`}
      >
        {isDataLoading ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
            <div className="w-12 h-12 border-4 border-india-blue border-t-transparent rounded-full animate-spin" />
            <p className="text-gray-500 font-bold animate-pulse">Initializing Election Assistant...</p>
          </div>
        ) : !selectedVertical ? (
          <ProfileSelector onSelect={handleSelect} language={language} t={t} />
        ) : (
          <div className="max-w-7xl mx-auto px-4">
            {/* Screen-reader announcement */}
            <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
              {`Now viewing ${selectedVertical.name} guide. ${completedCount} of ${totalSteps} steps completed.`}
            </div>

            <div className="mb-8">
              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-3">
                {selectedVertical.name} Guide
              </h1>
              <p className="text-lg text-gray-600">{t.guide.subtitle}</p>
            </div>

            <div className="flex flex-col gap-8">
              {/* Timeline — full width */}
              <section aria-label={t.guide.timelineTitle}>
                <Timeline
                  vertical={selectedVertical}
                  completedSteps={completedSteps}
                  t={t}
                />
              </section>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <section aria-label={t.guide.stepsTitle} className="lg:col-span-2">
                  <StepGuide
                    vertical={selectedVertical}
                    completedSteps={completedSteps}
                    setCompletedSteps={setCompletedSteps}
                    t={t}
                  />
                </section>

                {/* Lazy-loaded map */}
                <section aria-label={t.guide.locationTitle} className="lg:col-span-1">
                  <Suspense
                    fallback={
                      <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full flex flex-col items-center justify-center min-h-[400px] gap-4">
                        <MapPin className="text-green-400 animate-bounce" size={36} />
                        <p className="text-gray-500 font-medium">Loading map…</p>
                      </div>
                    }
                  >
                    <PollingStationMap vertical={selectedVertical} t={t} language={language} />
                  </Suspense>
                </section>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ===== MOBILE STICKY BOTTOM NAV ===== */}
      {selectedVertical && (
        <nav
          aria-label="Quick actions"
          className="fixed bottom-0 left-0 right-0 sm:hidden bg-white border-t border-gray-200 shadow-2xl z-40 flex items-center gap-2 px-4 py-3 print:hidden"
        >
          <button
            onClick={resetProgress}
            aria-label={t.reset}
            className="flex items-center justify-center w-11 h-11 bg-gray-100 text-orange-600 rounded-full transition-colors hover:bg-orange-50"
          >
            <RotateCcw size={18} />
          </button>
          <button
            onClick={handleShare}
            aria-label={t.share}
            className="flex items-center justify-center w-11 h-11 bg-gray-100 text-blue-600 rounded-full transition-colors hover:bg-blue-50"
          >
            <Share2 size={18} />
          </button>
          <button
            onClick={handlePrint}
            aria-label={t.print}
            className="flex items-center justify-center w-11 h-11 bg-gray-100 text-gray-600 rounded-full transition-colors hover:bg-gray-200"
          >
            <Printer size={18} />
          </button>
          <button
            onClick={handleBack}
            aria-label={t.changeVoterType}
            className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white h-11 rounded-full font-bold text-sm transition-colors hover:bg-gray-800"
          >
            <ArrowLeft size={16} />
            {t.changeVoterType}
          </button>
        </nav>
      )}

      {/* ===== PRINT STYLES ===== */}
      <style>{`
        @media print {
          body { background: white !important; }
          .print\\:hidden { display: none !important; }
        }
      `}</style>
    </div>
  );
}

export default App;
