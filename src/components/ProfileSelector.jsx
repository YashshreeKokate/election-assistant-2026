import React from 'react';
import { UserPlus, Globe, GraduationCap, HeartHandshake, Accessibility, Building2 } from 'lucide-react';

const profiles = [
  {
    id: 'first-time',
    title: 'First-time Voter',
    subtitle: 'Voting in India',
    icon: UserPlus,
    color: 'from-india-saffron to-orange-400',
    description: 'Just turned 18? Discover how to register and cast your very first vote.',
  },
  {
    id: 'nri',
    title: 'NRI Voter',
    subtitle: 'Overseas Citizen',
    icon: Globe,
    color: 'from-india-blue to-blue-600',
    description: 'Living abroad? Find out how to participate in the democratic process.',
  },
  {
    id: 'student',
    title: 'Student Voter',
    subtitle: 'College / University',
    icon: GraduationCap,
    color: 'from-india-green to-emerald-500',
    description: 'Studying away from home? Learn how to vote from your current residence.',
  },
  {
    id: 'senior',
    title: 'Senior Citizen',
    subtitle: '85+ or Elderly Voters',
    icon: HeartHandshake,
    color: 'from-purple-500 to-fuchsia-600',
    description: 'Special provisions and home voting options for our senior citizens.',
  },
  {
    id: 'disability',
    title: 'Voter with Disability',
    subtitle: 'PwD Category',
    icon: Accessibility,
    color: 'from-pink-500 to-rose-600',
    description: 'Accessible voting options, transport facilities, and special assistance.',
  },
  {
    id: 'municipal',
    title: 'Local-Body Voter',
    subtitle: 'Municipal / Panchayat',
    icon: Building2,
    color: 'from-teal-500 to-emerald-600',
    description: 'Information for local ward elections and municipal corporation voting.',
  }
];

export default function ProfileSelector({ onSelect }) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Welcome to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-india-saffron via-india-blue to-india-green">Election Assistant</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your personalized guide to the democratic process. Select your voter profile below to get started.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {profiles.map((profile) => (
          <button
            key={profile.id}
            onClick={() => onSelect(profile.id)}
            className="group relative bg-white rounded-3xl p-8 text-left transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 overflow-hidden"
          >
            <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${profile.color}`} />
            
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${profile.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <profile.icon size={32} />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{profile.title}</h3>
            <div className="text-sm font-semibold tracking-wider uppercase mb-4 text-gray-500">{profile.subtitle}</div>
            <p className="text-gray-600 leading-relaxed">
              {profile.description}
            </p>
            
            <div className="mt-8 flex items-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: 'inherit' }}>
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${profile.color}`}>
                Get Started &rarr;
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
