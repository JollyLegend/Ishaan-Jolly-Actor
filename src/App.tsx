/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ShowreelSection } from './components/ShowreelSection';
import { VoiceoverSection } from './components/VoiceoverSection';
import { CreditsSection } from './components/CreditsSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';

export default function App() {
  const [isCvOpen, setIsCvOpen] = useState<boolean>(false);

  const handleOpenReel = () => {
    const el = document.getElementById('showreel');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08090b] text-zinc-100 flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-300">
      {/* Navigation */}
      <Navbar onOpenCv={() => setIsCvOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero
          onOpenCv={() => setIsCvOpen(true)}
          onOpenReel={handleOpenReel}
        />

        {/* 2. Showreel */}
        <ShowreelSection />

        {/* 3. Voiceover Samples */}
        <VoiceoverSection />

        {/* 4. Credits / CV */}
        <CreditsSection onOpenCv={() => setIsCvOpen(true)} />

        {/* 5. Photo Gallery */}
        <GallerySection />

        {/* 6. Contact & Representation */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Printable / Downloadable Actor CV Modal */}
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </div>
  );
}
