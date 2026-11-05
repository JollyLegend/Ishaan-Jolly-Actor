import React, { useState } from 'react';
import { Play, Sparkles, Clock, Film, ExternalLink, Video } from 'lucide-react';
import { SHOWREELS, ShowreelItem } from '../data/portfolioData';

export const ShowreelSection: React.FC = () => {
  const [activeReelId, setActiveReelId] = useState<string>(SHOWREELS[0].id);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTimestampSeconds, setCurrentTimestampSeconds] = useState<number>(0);
  const [cinemaMode, setCinemaMode] = useState<boolean>(false);

  const activeReel: ShowreelItem = SHOWREELS.find((r) => r.id === activeReelId) || SHOWREELS[0];

  const handleSelectReel = (reelId: string) => {
    setActiveReelId(reelId);
    setIsPlaying(false);
    setCurrentTimestampSeconds(0);
  };

  const handleJumpToScene = (seconds: number) => {
    setCurrentTimestampSeconds(seconds);
    setIsPlaying(true);
  };

  // Embed URL with autoplay and start parameter
  const embedUrl = `https://www.youtube-nocookie.com/embed/${activeReel.youtubeId}?autoplay=${isPlaying ? 1 : 0}&start=${currentTimestampSeconds}&rel=0&modestbranding=1&color=white`;

  return (
    <section
      id="showreel"
      className={`py-20 md:py-28 relative transition-colors duration-500 ${
        cinemaMode ? 'bg-[#030304]' : 'bg-[#08090b]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-zinc-800/80">
          <div>
            <div className="text-xs tracking-widest uppercase font-semibold text-amber-400 mb-2 flex items-center gap-2">
              <Film className="w-3.5 h-3.5" />
              <span>Screen Acting & Filmmaking</span>
            </div>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white tracking-tight">
              SCREEN WORK & SCENE REELS
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm mt-1">
              Official showreel in preparation alongside university graduation (2027) & independent film projects.
            </p>
          </div>

          {/* Reel Category Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1 bg-[#111319] border border-zinc-800 rounded-lg">
            {SHOWREELS.map((reel) => {
              const isSelected = reel.id === activeReelId;
              return (
                <button
                  key={reel.id}
                  onClick={() => handleSelectReel(reel.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-2 ${
                    isSelected
                      ? 'bg-zinc-800 text-amber-300 shadow-sm border border-zinc-700'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <span>{reel.category}</span>
                  <span className="text-[10px] text-amber-400/80 bg-black/40 px-1.5 py-0.2 rounded font-mono">
                    {reel.statusTag}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Showreel Container with Cinema Framing */}
        <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-[#0d0e14] shadow-2xl shadow-black/90">
          
          {/* Top Player Utility Strip */}
          <div className="px-5 py-3 bg-[#111218] border-b border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="font-semibold text-zinc-200">{activeReel.title}</span>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <span className="font-mono tabular-nums text-zinc-400">{activeReel.duration}</span>
              <span aria-hidden="true" className="hidden sm:inline text-zinc-700">·</span>
              <span className="hidden sm:inline text-zinc-500">1080p / 4K Preview · 16:9</span>
            </div>

            <div className="flex items-center gap-2">
              {/* Cinema Lights Toggle */}
              <button
                onClick={() => setCinemaMode(!cinemaMode)}
                className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                  cinemaMode
                    ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                }`}
                title="Toggle Cinema Dimmer Mode"
              >
                <Sparkles className="w-3 h-3" />
                <span className="hidden sm:inline">{cinemaMode ? 'Lights On' : 'Cinema Dimmer'}</span>
              </button>

              <a
                href={`https://www.youtube.com/watch?v=${activeReel.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-200 p-1 hover:bg-zinc-800 rounded transition-colors"
                title="Open Video in New Tab"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Embedded Player Container */}
          <div className="relative aspect-video w-full bg-black">
            {isPlaying ? (
              <iframe
                src={embedUrl}
                title={activeReel.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="relative w-full h-full group">
                {/* Poster Cover using production / filmmaking still */}
                <img
                  src="/src/assets/images/actor_production_still_1_1793904291572.jpg"
                  alt="Ishaan Jolly Screen Work & Scene Studies Preview"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-300"
                  referrerPolicy="no-referrer"
                />

                {/* Dark gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/30" />

                {/* Central Play / Preview Button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-2xl shadow-amber-400/30 group-hover:scale-110 group-hover:bg-amber-300 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300/50"
                    aria-label={`Play ${activeReel.title}`}
                  >
                    <Play className="w-8 h-8 md:w-10 md:h-10 fill-current ml-1" />
                  </button>

                  <div className="mt-5 max-w-lg mx-auto">
                    <span className="text-[11px] font-mono tracking-wider uppercase text-amber-400 bg-black/60 px-2 py-0.5 rounded border border-amber-400/30">
                      {activeReel.statusTag}
                    </span>
                    <h3 className="font-cinzel text-xl md:text-2xl font-bold text-white tracking-wide mt-2">
                      {activeReel.title}
                    </h3>
                    <p className="text-zinc-300 text-xs md:text-sm mt-1 leading-relaxed">
                      {activeReel.description}
                    </p>
                  </div>
                </div>

                {/* Corner Note */}
                <div className="absolute bottom-4 left-6 flex items-center gap-2 text-xs text-zinc-300">
                  <Video className="w-4 h-4 text-amber-400" />
                  <span>Click to preview demo material and scene breakdowns</span>
                </div>
              </div>
            )}
          </div>

          {/* Scene Breakdown Bar below video */}
          <div className="p-5 md:p-6 bg-[#101117] border-t border-zinc-800">
            <div className="text-[11px] tracking-widest uppercase font-semibold text-zinc-400 mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Scene & Character Study Breakdown</span>
              </div>
              <span className="text-zinc-500 font-mono text-[11px]">Click timecode to jump</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {activeReel.scenes.map((scene, idx) => (
                <button
                  key={idx}
                  onClick={() => handleJumpToScene(scene.seconds)}
                  className="text-left p-3 rounded-lg bg-[#151722] hover:bg-[#1c1f2e] border border-zinc-800/80 hover:border-amber-500/40 transition-all duration-200 group cursor-pointer"
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-mono text-amber-400 font-semibold">{scene.time}</span>
                    <Play className="w-3 h-3 text-zinc-400 group-hover:text-amber-400 transition-colors" />
                  </div>
                  <div className="text-xs font-semibold text-zinc-100 group-hover:text-amber-200 transition-colors truncate">
                    {scene.title}
                  </div>
                  <div className="text-[11px] text-zinc-400 truncate mt-0.5">
                    {scene.project}
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
