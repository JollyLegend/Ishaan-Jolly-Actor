import React from 'react';
import { ArrowUp, Film } from 'lucide-react';
import { CONTACT_DETAILS } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] border-t border-zinc-800/80 py-12 text-zinc-500 text-xs">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Status */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 text-zinc-300 font-cinzel font-semibold tracking-wider">
            <Film className="w-4 h-4 text-amber-400" />
            <span>ISHAAN JOLLY</span>
          </div>
          <span aria-hidden="true" className="hidden sm:inline text-zinc-700">·</span>
          <span>British Actor & Voice Actor</span>
          <span aria-hidden="true" className="hidden sm:inline text-zinc-700">·</span>
          <span>University of Winchester (BA Acting 2027)</span>
        </div>

        {/* Quick Nav Links */}
        <div className="flex items-center gap-6">
          <a href="#showreel" className="hover:text-zinc-300 transition-colors">Showreel</a>
          <a href="#voiceover" className="hover:text-zinc-300 transition-colors">Voiceover</a>
          <a href="#credits" className="hover:text-zinc-300 transition-colors">Credits & Training</a>
          <a href="#gallery" className="hover:text-zinc-300 transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-zinc-300 transition-colors">Contact</a>
        </div>

        {/* Back to top & copyright */}
        <div className="flex items-center gap-4">
          <span>© {new Date().getFullYear()} Ishaan Jolly.</span>
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
