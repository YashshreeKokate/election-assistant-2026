import React from 'react';
import { UserPlus, Globe, GraduationCap, HeartHandshake, Accessibility, Building2, ArrowRight } from 'lucide-react';

const profileMeta = {
  'first-time': { icon: UserPlus, color: 'from-india-saffron to-orange-400', accentBg: 'bg-orange-50', accentText: 'text-orange-600' },
  nri:          { icon: Globe,     color: 'from-india-blue to-blue-600',     accentBg: 'bg-blue-50',   accentText: 'text-blue-600' },
  student:      { icon: GraduationCap, color: 'from-india-green to-emerald-500', accentBg: 'bg-emerald-50', accentText: 'text-emerald-600' },
  senior:       { icon: HeartHandshake, color: 'from-purple-500 to-fuchsia-600', accentBg: 'bg-purple-50', accentText: 'text-purple-600' },
  disability:   { icon: Accessibility,  color: 'from-pink-500 to-rose-600',     accentBg: 'bg-pink-50',   accentText: 'text-pink-600' },
  municipal:    { icon: Building2,      color: 'from-teal-500 to-emerald-600',  accentBg: 'bg-teal-50',   accentText: 'text-teal-600' },
};

const profileOrder = ['first-time', 'nri', 'student', 'senior', 'disability', 'municipal'];

export default function ProfileSelector({ onSelect, language, t }) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10">
      {/* Hero */}
      <div className="text-center mb-14">
        <p className="text-sm font-bold uppercase tracking-widest text-india-saffron mb-3">
          India General Elections 2026
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-5 tracking-tight leading-tight">
          {t.home.heading}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-india-saffron via-india-blue to-india-green">
            {t.home.subheading}
          </span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          {t.home.description}
        </p>
      </div>

      {/* Profile Grid */}
      <div
        role="list"
        aria-label="Voter profile options"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {profileOrder.map((id) => {
          const meta = profileMeta[id];
          const profile = t.profiles[id];
          const Icon = meta.icon;

          return (
            <button
              key={id}
              role="listitem"
              onClick={() => onSelect(id)}
              aria-label={`Select ${profile.title} — ${profile.description}`}
              className="group relative bg-white rounded-3xl p-7 text-left transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 overflow-hidden focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-india-saffron"
            >
              {/* Top accent bar */}
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${meta.color}`} />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-br ${meta.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={28} aria-hidden="true" />
              </div>

              {/* Text */}
              <h2 className="text-xl font-extrabold text-gray-900 mb-1">{profile.title}</h2>
              <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">{profile.subtitle}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{profile.description}</p>

              {/* CTA */}
              <div className={`mt-6 flex items-center gap-1.5 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${meta.accentText}`}>
                {t.home.getStarted}
                <ArrowRight size={16} aria-hidden="true" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
