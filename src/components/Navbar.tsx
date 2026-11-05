import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Film, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenCv: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCv }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Showreel', href: '#showreel' },
    { label: 'Voiceover', href: '#voiceover' },
    { label: 'Credits & Training', href: '#credits' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08090b]/95 backdrop-blur-md border-b border-zinc-800/80 py-3.5 shadow-2xl shadow-black/60'
          : 'bg-gradient-to-b from-[#08090b]/90 via-[#08090b]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark in display face */}
        <a
          href="#"
          className="group flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
        >
          <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-zinc-700 to-zinc-900 border border-zinc-700 flex items-center justify-center text-amber-400 group-hover:border-amber-500/60 transition-colors">
            <Film className="w-4 h-4" />
          </div>
          <span className="font-cinzel text-lg md:text-xl font-bold tracking-wider text-zinc-100 group-hover:text-amber-300 transition-colors">
            ISHAAN JOLLY
          </span>
        </a>

        {/* Zone 2: 4-5 single-line clean nav links */}
        <nav className="hidden md:flex items-center gap-7 text-xs tracking-widest uppercase font-medium text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 py-1 relative group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-200" />
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCv}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs tracking-wider uppercase font-medium text-zinc-300 hover:text-white border border-zinc-700/80 hover:border-zinc-500 rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Acting CV
          </button>
          <a
            href="#contact"
            className="px-4 py-2 text-xs tracking-wider uppercase font-semibold text-black bg-amber-400 hover:bg-amber-300 rounded transition-all duration-200 shadow-md shadow-amber-400/10 hover:shadow-amber-400/25 whitespace-nowrap shrink-0 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0d11] border-b border-zinc-800 px-6 py-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm tracking-wider uppercase font-medium text-zinc-300 hover:text-amber-400 py-2 border-b border-zinc-800/60"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCv();
                }}
                className="flex-1 py-2.5 text-center text-xs tracking-wider uppercase font-medium text-zinc-200 border border-zinc-700 rounded hover:border-zinc-500"
              >
                View Acting CV
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 py-2.5 text-center text-xs tracking-wider uppercase font-semibold text-black bg-amber-400 hover:bg-amber-300 rounded"
              >
                Contact Ishaan
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
