import React, { useState, useMemo } from 'react';
import { Search, Download, GraduationCap, Video, Compass, ChevronRight, Award, Radio } from 'lucide-react';
import { CREDITS_DATA, CreditItem, TRAINING_AND_TECHNIQUES } from '../data/portfolioData';

interface CreditsSectionProps {
  onOpenCv: () => void;
}

export const CreditsSection: React.FC<CreditsSectionProps> = ({ onOpenCv }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'theatre' | 'screen' | 'scene_study' | 'voiceover'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showTrainingDetails, setShowTrainingDetails] = useState<boolean>(true);

  const filteredCredits = useMemo(() => {
    return CREDITS_DATA.filter((item) => {
      const matchesTab = activeTab === 'all' || item.category === activeTab;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.role.toLowerCase().includes(q) ||
        item.directorOrCompany.toLowerCase().includes(q) ||
        item.notes.toLowerCase().includes(q) ||
        item.medium.toLowerCase().includes(q);
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const counts = {
    all: CREDITS_DATA.length,
    theatre: CREDITS_DATA.filter((c) => c.category === 'theatre').length,
    screen: CREDITS_DATA.filter((c) => c.category === 'screen').length,
    scene_study: CREDITS_DATA.filter((c) => c.category === 'scene_study').length,
    voiceover: CREDITS_DATA.filter((c) => c.category === 'voiceover').length,
  };

  return (
    <section id="credits" className="py-20 md:py-28 bg-[#08090b] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-zinc-800">
          <div>
            <div className="text-xs tracking-widest uppercase font-semibold text-amber-400 mb-2">
              Experience & Academic Record
            </div>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white tracking-tight">
              PERFORMANCE CREDITS & TRAINING
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm mt-1">
              Factual record of stage productions, screen projects, classical training scene studies, and voiceover engagements.
            </p>
          </div>

          <button
            onClick={onOpenCv}
            className="self-start md:self-end px-4 py-2.5 text-xs tracking-wider uppercase font-medium text-zinc-200 hover:text-white bg-[#14161f] hover:bg-[#1a1d28] border border-zinc-700/80 hover:border-zinc-500 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-md"
          >
            <Download className="w-4 h-4 text-amber-400" />
            <span>Download Formatted Acting CV (PDF)</span>
          </button>
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1 bg-[#10121a] border border-zinc-800 rounded-lg">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === 'all'
                  ? 'bg-zinc-800 text-amber-300 shadow-sm border border-zinc-700'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              All Work ({counts.all})
            </button>
            <button
              onClick={() => setActiveTab('theatre')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === 'theatre'
                  ? 'bg-zinc-800 text-amber-300 shadow-sm border border-zinc-700'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Stage & Theatre ({counts.theatre})
            </button>
            <button
              onClick={() => setActiveTab('screen')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === 'screen'
                  ? 'bg-zinc-800 text-amber-300 shadow-sm border border-zinc-700'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Screen & Filmmaking ({counts.screen})
            </button>
            <button
              onClick={() => setActiveTab('scene_study')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === 'scene_study'
                  ? 'bg-zinc-800 text-amber-300 shadow-sm border border-zinc-700'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Training Scene Studies ({counts.scene_study})
            </button>
            <button
              onClick={() => setActiveTab('voiceover')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === 'voiceover'
                  ? 'bg-zinc-800 text-amber-300 shadow-sm border border-zinc-700'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Voiceover ({counts.voiceover})
            </button>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search title, character, scene..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#10121a] border border-zinc-800 rounded-lg pl-9 pr-4 py-2 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-amber-500/60 transition-colors"
            />
          </div>

        </div>

        {/* Credits Table / List */}
        <div className="bg-[#0f1118] border border-zinc-800/80 rounded-2xl overflow-hidden shadow-2xl shadow-black/80 mb-12">
          
          {/* Desktop Table Header */}
          <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-3.5 bg-[#141620] border-b border-zinc-800 text-[11px] uppercase tracking-wider font-semibold text-zinc-400">
            <div className="col-span-1">Year</div>
            <div className="col-span-4">Production & Role</div>
            <div className="col-span-3">Medium / Category</div>
            <div className="col-span-4">Company & Production Context</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-zinc-800/60">
            {filteredCredits.length === 0 ? (
              <div className="p-12 text-center text-sm text-zinc-500">
                No credits found matching "{searchQuery}".
              </div>
            ) : (
              filteredCredits.map((credit) => (
                <div
                  key={credit.id}
                  className="p-5 lg:px-6 lg:py-4 transition-colors hover:bg-zinc-900/40 grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4 items-start lg:items-center"
                >
                  {/* Year */}
                  <div className="lg:col-span-1 font-mono text-xs font-semibold text-amber-400/90 tabular-nums">
                    {credit.year}
                  </div>

                  {/* Title & Role */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm text-white group-hover:text-amber-300">
                        {credit.title}
                      </span>
                      {credit.status && (
                        <span className="text-[10px] text-purple-300 border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.2 rounded font-mono">
                          {credit.status}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-amber-300/90 font-medium mt-0.5">
                      Role: {credit.role}
                    </div>
                    <div className="text-[11px] text-zinc-500 font-mono mt-0.5 lg:hidden">
                      {credit.medium}
                    </div>
                  </div>

                  {/* Medium / Venue */}
                  <div className="lg:col-span-3 text-xs text-zinc-300">
                    <span className="text-zinc-500 lg:hidden mr-1">Medium:</span>
                    {credit.medium}
                  </div>

                  {/* Company & Context Notes */}
                  <div className="lg:col-span-4 flex flex-col gap-1 text-xs">
                    <div className="text-zinc-200 font-medium">
                      {credit.directorOrCompany}
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      {credit.notes}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Training, Acting Techniques & Practical Filmmaking Breakdown */}
        <div className="bg-[#10121a] border border-zinc-800 rounded-2xl overflow-hidden shadow-xl">
          <button
            onClick={() => setShowTrainingDetails(!showTrainingDetails)}
            className="w-full px-6 py-4.5 flex items-center justify-between text-left hover:bg-zinc-800/40 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-amber-400" />
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wide">
                  Formal Acting Training & Technical Disciplines
                </h3>
                <p className="text-xs text-zinc-400">
                  {TRAINING_AND_TECHNIQUES.institution} · {TRAINING_AND_TECHNIQUES.degree}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
              <span>{showTrainingDetails ? 'Hide Syllabus' : 'View Syllabus & Skills'}</span>
              <ChevronRight
                className={`w-4 h-4 transition-transform duration-200 ${
                  showTrainingDetails ? 'rotate-90' : ''
                }`}
              />
            </div>
          </button>

          {showTrainingDetails && (
            <div className="px-6 py-6 border-t border-zinc-800/80 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs animate-in fade-in duration-200">
              
              {/* Core Acting Disciplines */}
              <div>
                <div className="text-zinc-400 uppercase tracking-widest font-semibold mb-3 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-amber-400" />
                  <span>Acting Techniques</span>
                </div>
                <div className="space-y-2 text-zinc-300">
                  {TRAINING_AND_TECHNIQUES.disciplines.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Filmmaking & Camera Rig */}
              <div>
                <div className="text-zinc-400 uppercase tracking-widest font-semibold mb-3 flex items-center gap-1.5">
                  <Video className="w-3.5 h-3.5 text-amber-400" />
                  <span>Filmmaking & Production</span>
                </div>
                <div className="space-y-2 text-zinc-300">
                  {TRAINING_AND_TECHNIQUES.filmmakingSkills.map((skill, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                  <div className="pt-2 mt-2 border-t border-zinc-800 text-[11px] text-zinc-400 italic">
                    Camera Rig: Panasonic Lumix S5 II with professional prime glass, wireless audio & studio lighting.
                  </div>
                </div>
              </div>

              {/* Vocal & Media Creation Background */}
              <div>
                <div className="text-zinc-400 uppercase tracking-widest font-semibold mb-3 flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5 text-amber-400" />
                  <span>Vocal Distinction & Media</span>
                </div>
                
                <div className="p-3.5 rounded-lg bg-zinc-900/80 border border-zinc-800 mb-4">
                  <div className="text-amber-400 font-semibold mb-1 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    <span>Voice Assessment Mark: 75</span>
                  </div>
                  <p className="text-[11px] text-zinc-300 leading-relaxed">
                    Achieved distinction-level mark of 75 in his first-year university voice examination, reflecting exceptional vocal projection, characterisation, and control.
                  </p>
                </div>

                <div className="text-[11px] text-zinc-400 leading-relaxed">
                  <strong className="text-zinc-200 block mb-1">Online Media Experience:</strong>
                  Active content creator and livestreamer since June 2020 (JollyLegend & JollySFX), providing years of spontaneous camera presence and unscripted audience rapport.
                </div>
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
};
