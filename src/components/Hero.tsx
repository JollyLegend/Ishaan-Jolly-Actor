import React from 'react';
import { Play, Download, Mic, GraduationCap, Video, Compass, Sparkles, ArrowDown } from 'lucide-react';
import { PHYSICAL_SPECS, CASTING_ATTRIBUTES } from '../data/portfolioData';

interface HeroProps {
  onOpenCv: () => void;
  onOpenReel: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCv, onOpenReel }) => {
  return (
    <section className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#08090b] via-[#0d0f14] to-[#08090b]">
      {/* Background cinematic vignette and subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#08090b_90%)] opacity-85" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 w-full my-auto">
        {/* Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typographic Hierarchy & Actions */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Professional Industry Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs tracking-widest uppercase font-semibold text-amber-400 mb-4">
              <span>British Actor</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Voice Actor</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Independent Filmmaker</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-400">Southampton, UK</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-3">
              ISHAAN JOLLY
            </h1>

            {/* Subtitle / Professional Role */}
            <p className="text-lg md:text-xl text-zinc-300 font-light tracking-wide mb-6">
              BA (Hons) Acting <span className="text-amber-400/80">·</span> University of Winchester (2027)
            </p>

            {/* Bio Prose highlighting his specific casting appeal */}
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed max-w-xl mb-4">
              Emerging British actor with an imposing <strong className="text-white font-semibold">6'4" physical presence</strong>, a naturally deep, resonant voice, and an expressive, charismatic energy. Ishaan seamlessly bridges theatrical grandeur and grounded screen naturalism—balancing commanding authority with warmth, vulnerability, and playful comedic timing.
            </p>

            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed max-w-xl mb-7">
              Currently in final training at the University of Winchester. Experience includes portraying divine and classical figures on stage (Lord Krishna, Lord Shiva, Theseus/Oberon), screen acting, paid voiceover work, and self-directed psychological horror filmmaking.
            </p>

            {/* Quick Physical Specs Bar */}
            <div className="bg-[#111319] border border-zinc-800/80 rounded-xl p-4 sm:p-5 mb-8 shadow-lg shadow-black/40">
              <div className="text-[11px] tracking-widest uppercase font-semibold text-zinc-400 mb-3 flex items-center justify-between">
                <span>Casting Specifications</span>
                <span className="text-amber-400/90 font-mono text-[11px]">British Citizen · Full Right to Work</span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="border-r border-zinc-800/80 pr-2">
                  <div className="text-zinc-400 text-[11px] uppercase tracking-wider">Height</div>
                  <div className="font-semibold text-zinc-100 font-mono tabular-nums mt-0.5 text-sm text-amber-300">
                    {PHYSICAL_SPECS.height} <span className="text-zinc-400 text-xs font-normal">({PHYSICAL_SPECS.heightMetric})</span>
                  </div>
                </div>

                <div className="border-r border-zinc-800/80 pr-2">
                  <div className="text-zinc-400 text-[11px] uppercase tracking-wider">Playing Age</div>
                  <div className="font-semibold text-zinc-100 font-mono tabular-nums mt-0.5">
                    {PHYSICAL_SPECS.playingAge}
                  </div>
                </div>

                <div className="border-r border-zinc-800/80 pr-2">
                  <div className="text-zinc-400 text-[11px] uppercase tracking-wider">Build</div>
                  <div className="font-semibold text-zinc-100 mt-0.5">
                    Broad / Imposing
                  </div>
                </div>

                <div>
                  <div className="text-zinc-400 text-[11px] uppercase tracking-wider">Vocal Tone</div>
                  <div className="font-semibold text-zinc-100 mt-0.5">
                    Deep Resonant
                  </div>
                </div>
              </div>

              {/* Secondary Casting Note */}
              <div className="mt-3 pt-3 border-t border-zinc-800/60 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-400">
                <span className="text-amber-400/90 font-medium">Hair & Eyes:</span>
                <span>Dark Brown / Warm Black</span>
                <span aria-hidden="true" className="text-zinc-700">·</span>
                <span>Dark Brown Eyes</span>
                <span aria-hidden="true" className="text-zinc-700">·</span>
                <span className="text-zinc-300">Native British Accent</span>
              </div>
            </div>

            {/* Quick Actions / CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenReel}
                className="px-5 py-3 text-xs tracking-wider uppercase font-semibold text-black bg-amber-400 hover:bg-amber-300 rounded-lg transition-all duration-200 shadow-lg shadow-amber-400/15 flex items-center gap-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              >
                <div className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch Screen Reel</span>
              </button>

              <button
                onClick={onOpenCv}
                className="px-5 py-3 text-xs tracking-wider uppercase font-medium text-zinc-200 hover:text-white bg-[#14161f] hover:bg-[#1a1d28] border border-zinc-800 hover:border-zinc-700 rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
              >
                <Download className="w-4 h-4 text-zinc-400" />
                <span>Acting CV</span>
              </button>

              <a
                href="#voiceover"
                className="px-4 py-3 text-xs tracking-wider uppercase font-medium text-zinc-300 hover:text-amber-300 transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400"
              >
                <Mic className="w-4 h-4 text-amber-400" />
                <span>Voice Samples</span>
              </a>
            </div>
          </div>

          {/* Right Column: Primary Headshot Portrait Container using Ishaan's uploaded photograph */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Subtle magenta & amber back-glow highlighting his hair and presence */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-b from-purple-500/25 via-amber-500/15 to-transparent blur-md" />
              
              <div className="relative rounded-2xl overflow-hidden border border-zinc-700/80 bg-[#121319] shadow-2xl shadow-black/80 aspect-[4/5] group">
                <img
                  src="/assets/aistudio/IshaanJollyHeadshot-ezgif.com-jpg-to-webp-converter_d5dbbc5b.webp"
                  alt="Ishaan Jolly - Emerging British Actor, Performer and Filmmaker"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to public path if needed
                    const target = e.currentTarget;
                    if (!target.src.includes('public')) {
                      target.src = '/public/assets/aistudio/IshaanJollyHeadshot-ezgif.com-jpg-to-webp-converter_d5dbbc5b.webp';
                    }
                  }}
                />

                {/* Subtle gradient scrim at base for attribution */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/15 pointer-events-none" />

                {/* Photo credit and actor stamp */}
                <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-[11px] text-zinc-300">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="font-medium text-white">Ishaan Jolly</span>
                    <span className="text-zinc-400">· 6'4" (195 cm)</span>
                  </div>
                  <span className="text-zinc-400">Official Headshot</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width Highlights Strip below the hero split */}
        <div className="mt-16 pt-8 border-t border-zinc-800/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-zinc-400 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-400 shrink-0">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-zinc-100 font-semibold">BA (Hons) Acting</div>
              <div className="text-[11px] text-zinc-400">University of Winchester (2027)</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-400 shrink-0">
              <Mic className="w-4 h-4" />
            </div>
            <div>
              <div className="text-zinc-100 font-semibold">Distinction in Voice (75)</div>
              <div className="text-[11px] text-zinc-400">Deep Resonant British Vocal Depth</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-400 shrink-0">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <div className="text-zinc-100 font-semibold">Mythological & Classical</div>
              <div className="text-[11px] text-zinc-400">Krishna · Shiva · Theseus · Oberon</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-400 shrink-0">
              <Video className="w-4 h-4" />
            </div>
            <div>
              <div className="text-zinc-100 font-semibold">Filmmaker & Screen</div>
              <div className="text-[11px] text-zinc-400">Lakers Lodge · Lumix S5 II Cinema</div>
            </div>
          </div>
        </div>

      </div>

      {/* Down indicator */}
      <div className="max-w-7xl mx-auto px-6 w-full flex justify-center mt-6">
        <a
          href="#showreel"
          className="text-zinc-400 hover:text-zinc-300 transition-colors p-2 flex flex-col items-center gap-1 text-[11px] uppercase tracking-widest"
          aria-label="Scroll to Showreel"
        >
          <span>Explore Screen Work & Scene Studies</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-amber-400" />
        </a>
      </div>
    </section>
  );
};
