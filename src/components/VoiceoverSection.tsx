import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Mic, Radio, ChevronDown, ChevronUp, FileText, CheckCircle2, Award } from 'lucide-react';
import { VOICE_SAMPLES, VoiceSample } from '../data/portfolioData';
import { audioSynthesizer } from '../utils/audioPlayer';

export const VoiceoverSection: React.FC = () => {
  const [activeTrackId, setActiveTrackId] = useState<string>(VOICE_SAMPLES[0].id);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progressSeconds, setProgressSeconds] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.8);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [expandedScriptId, setExpandedScriptId] = useState<string | null>(VOICE_SAMPLES[0].id);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const activeTrack: VoiceSample = VOICE_SAMPLES.find((s) => s.id === activeTrackId) || VOICE_SAMPLES[0];
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Playback timer loop
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setProgressSeconds((prev) => {
          if (prev >= activeTrack.durationSeconds) {
            handlePause();
            return 0;
          }
          return prev + 1;
        });
      }, 1000 / playbackSpeed);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, activeTrack, playbackSpeed]);

  const handlePlay = (track: VoiceSample) => {
    if (activeTrackId !== track.id) {
      setActiveTrackId(track.id);
      setProgressSeconds(0);
    }
    setIsPlaying(true);
    audioSynthesizer.setVolume(isMuted ? 0 : volume);
    audioSynthesizer.setPlaybackRate(playbackSpeed);
    audioSynthesizer.startPreview(track.category);
  };

  const handlePause = () => {
    setIsPlaying(false);
    audioSynthesizer.stop();
  };

  const togglePlayTrack = (track: VoiceSample) => {
    if (isPlaying && activeTrackId === track.id) {
      handlePause();
    } else {
      handlePlay(track);
    }
  };

  const handleScrub = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setProgressSeconds(val);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setVolume(val);
    setIsMuted(val === 0);
    audioSynthesizer.setVolume(val);
  };

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      audioSynthesizer.setVolume(volume || 0.8);
    } else {
      setIsMuted(true);
      audioSynthesizer.setVolume(0);
    }
  };

  const cycleSpeed = () => {
    const speeds = [0.75, 1.0, 1.25, 1.5];
    const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
    const nextSpeed = speeds[nextIdx];
    setPlaybackSpeed(nextSpeed);
    audioSynthesizer.setPlaybackRate(nextSpeed);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const filteredSamples = filterCategory === 'all'
    ? VOICE_SAMPLES
    : VOICE_SAMPLES.filter((s) => s.category === filterCategory);

  return (
    <section id="voiceover" className="py-20 md:py-28 bg-[#0a0b10] border-t border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs tracking-widest uppercase font-semibold text-amber-400 mb-2 flex items-center gap-2">
              <Mic className="w-3.5 h-3.5" />
              <span>Voice Acting & Narration</span>
            </div>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white tracking-tight">
              VOICEOVER & VOCAL SAMPLES
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm mt-1">
              Naturally deep British voice with strong resonance, clarity, and authority. Features paid documentary credit and character studies.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 p-1 bg-[#12141c] border border-zinc-800 rounded-lg">
            {[
              { id: 'all', label: 'All Samples' },
              { id: 'documentary', label: 'Documentary & Heritage' },
              { id: 'narration', label: 'Dramatic Narration' },
              { id: 'character', label: 'Character & Gaming' },
              { id: 'commercial', label: 'Commercial' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  filterCategory === cat.id
                    ? 'bg-zinc-800 text-amber-300 shadow-sm border border-zinc-700'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Master Active Audio Player Deck */}
        <div className="mb-12 bg-gradient-to-r from-[#12141f] via-[#151824] to-[#12141f] border border-zinc-700/80 rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/80">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-zinc-800">
            
            {/* Now Playing Info */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => togglePlayTrack(activeTrack)}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-amber-400 hover:bg-amber-300 text-black flex items-center justify-center shrink-0 shadow-lg shadow-amber-400/20 transition-all duration-200 cursor-pointer"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 fill-current" />
                ) : (
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                )}
              </button>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs uppercase tracking-wider text-amber-400/90 font-medium">
                    {isPlaying ? 'Auditioning Now' : 'Ready to Play'} · {activeTrack.tone}
                  </span>
                  {activeTrack.isPaidCredit && (
                    <span className="text-[10px] uppercase font-mono tracking-wider font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded">
                      Paid Engagement
                    </span>
                  )}
                </div>
                <h3 className="font-cinzel text-xl md:text-2xl font-bold text-white mt-0.5">
                  {activeTrack.title}
                </h3>
                <div className="text-xs text-zinc-400 flex items-center gap-2 mt-1">
                  <span>{activeTrack.clientExample}</span>
                  <span aria-hidden="true" className="text-zinc-700">·</span>
                  <span>{activeTrack.accent}</span>
                </div>
              </div>
            </div>

            {/* Utility Controls (Speed & Volume) */}
            <div className="flex items-center gap-4 shrink-0 self-end lg:self-center">
              {/* Speed Button */}
              <button
                onClick={cycleSpeed}
                className="px-2.5 py-1 text-xs font-mono font-medium text-zinc-300 hover:text-amber-300 bg-zinc-800/80 hover:bg-zinc-800 border border-zinc-700 rounded transition-colors"
                title="Playback Speed"
              >
                {playbackSpeed}x
              </button>

              {/* Volume Slider */}
              <div className="flex items-center gap-2 bg-zinc-800/60 border border-zinc-700/60 px-3 py-1.5 rounded-lg">
                <button
                  onClick={toggleMute}
                  className="text-zinc-400 hover:text-zinc-200 transition-colors"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-4 h-4 text-red-400" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-amber-400" />
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-20 sm:w-24 h-1.5 accent-amber-400 bg-zinc-700 rounded-lg cursor-pointer"
                  aria-label="Volume Control"
                />
              </div>
            </div>

          </div>

          {/* Interactive Scrub Bar & Animated Waveform */}
          <div className="pt-6">
            {/* Visualizer Waveform Bar */}
            <div className="h-12 flex items-center justify-between gap-1 mb-3 px-1">
              {Array.from({ length: 48 }).map((_, i) => {
                const progressRatio = progressSeconds / activeTrack.durationSeconds;
                const isPassed = i / 48 <= progressRatio;
                const baseHeight = 18 + Math.sin(i * 0.35) * 16 + Math.cos(i * 0.8) * 10;
                const animatedHeight = isPlaying
                  ? Math.max(12, Math.min(48, baseHeight + (Math.sin(Date.now() * 0.005 + i) * 8)))
                  : baseHeight;

                return (
                  <div
                    key={i}
                    onClick={() => {
                      const newTime = Math.round((i / 48) * activeTrack.durationSeconds);
                      setProgressSeconds(newTime);
                    }}
                    className={`w-full rounded-full transition-all duration-150 cursor-pointer ${
                      isPassed
                        ? 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.3)]'
                        : 'bg-zinc-700/60 hover:bg-zinc-600'
                    }`}
                    style={{ height: `${animatedHeight}px` }}
                  />
                );
              })}
            </div>

            {/* Timecode and Slider */}
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-amber-400 font-semibold tabular-nums min-w-[36px]">
                {formatTime(progressSeconds)}
              </span>

              <input
                type="range"
                min="0"
                max={activeTrack.durationSeconds}
                value={progressSeconds}
                onChange={handleScrub}
                className="w-full h-1.5 accent-amber-400 bg-zinc-800 rounded-lg cursor-pointer"
                aria-label="Audio Timeline Scrubber"
              />

              <span className="font-mono text-xs text-zinc-500 tabular-nums min-w-[36px]">
                {activeTrack.duration}
              </span>
            </div>
          </div>
        </div>

        {/* Voiceover Samples List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {filteredSamples.map((sample) => {
            const isThisActive = activeTrackId === sample.id;
            const isThisPlaying = isThisActive && isPlaying;
            const isScriptOpen = expandedScriptId === sample.id;

            return (
              <div
                key={sample.id}
                className={`p-5 rounded-xl border transition-all duration-200 ${
                  isThisActive
                    ? 'bg-[#151722] border-amber-500/50 shadow-lg shadow-black/40'
                    : 'bg-[#101218] border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <button
                      onClick={() => togglePlayTrack(sample)}
                      className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 cursor-pointer ${
                        isThisPlaying
                          ? 'bg-amber-400 text-black shadow-md shadow-amber-400/30'
                          : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200'
                      }`}
                      aria-label={isThisPlaying ? `Pause ${sample.title}` : `Play ${sample.title}`}
                    >
                      {isThisPlaying ? (
                        <Pause className="w-5 h-5 fill-current" />
                      ) : (
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      )}
                    </button>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-medium text-amber-400/90 uppercase tracking-wider">
                          {sample.clientExample}
                        </span>
                        {sample.isPaidCredit && (
                          <span className="text-[9px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-1.5 py-0.2 rounded font-mono font-semibold">
                            Paid Credit
                          </span>
                        )}
                      </div>
                      <h4 className="font-semibold text-zinc-100 text-sm md:text-base mt-0.5">
                        {sample.title}
                      </h4>
                      <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                        {sample.description}
                      </p>
                    </div>
                  </div>

                  <span className="font-mono text-xs text-zinc-500 tabular-nums shrink-0">
                    {sample.duration}
                  </span>
                </div>

                {/* Metadata & Script Excerpt Toggle */}
                <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-300">{sample.accent}</span>
                    <span aria-hidden="true" className="text-zinc-700">·</span>
                    <span className="text-zinc-500">{sample.tone.split(',')[0]}</span>
                  </div>

                  <button
                    onClick={() => setExpandedScriptId(isScriptOpen ? null : sample.id)}
                    className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>{isScriptOpen ? 'Hide Script' : 'View Script'}</span>
                    {isScriptOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  </button>
                </div>

                {/* Script Excerpt Drawer */}
                {isScriptOpen && (
                  <div className="mt-3 p-3.5 rounded-lg bg-[#0a0b0f] border border-zinc-800 text-xs text-zinc-300 italic leading-relaxed animate-in fade-in duration-200">
                    <div className="text-[10px] uppercase font-semibold text-zinc-500 not-italic mb-1">
                      Script Excerpt
                    </div>
                    "{sample.scriptExcerpt}"
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Vocal Credentials & Microphone Setup Banner */}
        <div className="bg-[#10121a] border border-zinc-800 rounded-2xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Studio Image */}
          <div className="lg:col-span-5 rounded-xl overflow-hidden border border-zinc-700/80 aspect-video relative group">
            <img
              src="/src/assets/images/actor_voiceover_studio_1793904289908.jpg"
              alt="Ishaan Jolly Voiceover Setup with Sennheiser MKH 416"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 text-xs font-medium text-zinc-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Independent Audio Production & VO Setup</span>
            </div>
          </div>

          {/* Voice Credentials Content */}
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-1 flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5" />
              <span>Vocal Training & Audio Production</span>
            </div>
            <h3 className="font-cinzel text-xl md:text-2xl font-bold text-white mb-2">
              DEEP BRITISH VOCAL DEPTH & CAPABILITY
            </h3>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6">
              Experienced in delivering high-impact voiceovers with exceptional clarity, presence, and vocal characterisation. Voice work has been a highlighted strength throughout university training, achieving a <strong className="text-white">mark of 75</strong> in first-year vocal assessments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-200 font-medium">Recording Equipment:</span>
                  <div className="text-zinc-400">Sennheiser MKH 416 & Pro Workstation</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-200 font-medium">University Voice Distinction:</span>
                  <div className="text-zinc-400">Mark of 75 in Voice Assessment</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-200 font-medium">Audio Experience:</span>
                  <div className="text-zinc-400">DAW Audio Editing, Foley & Sound Design</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-200 font-medium">Paid Engagement:</span>
                  <div className="text-zinc-400">'Southampton, A City Built on Exchange' (2025)</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-zinc-400">
                Vocal Range: <span className="text-zinc-200 font-medium">Deep Baritone / Bass Resonant</span>
              </div>
              <a
                href="#contact"
                className="text-xs font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-4"
              >
                Inquire for Voiceover Roles →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
