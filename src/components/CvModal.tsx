import React, { useEffect } from 'react';
import { X, Printer, Download, Film, Award, MapPin, Mail, Phone, GraduationCap } from 'lucide-react';
import { PHYSICAL_SPECS, CREDITS_DATA, TRAINING_AND_TECHNIQUES, CONTACT_DETAILS } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const cvText = `
ISHAAN JOLLY · ACTOR, VOICE ACTOR & FILMMAKER
Nationality: British · Based: Southampton, Hampshire, UK
Contact Email: ${CONTACT_DETAILS.email}
Spotlight: Application in Progress · Seeking Theatrical & Voiceover Representation

PHYSICAL SPECIFICATIONS:
Height: ${PHYSICAL_SPECS.height} (${PHYSICAL_SPECS.heightMetric})
Playing Age: ${PHYSICAL_SPECS.playingAge}
Build: ${PHYSICAL_SPECS.build}
Hair: ${PHYSICAL_SPECS.hairColor}
Eyes: ${PHYSICAL_SPECS.eyeColor}
Voice: ${PHYSICAL_SPECS.vocalRange} (${PHYSICAL_SPECS.vocalQuality})
Languages: English (Native British)

ACTING TRAINING:
BA (Hons) Acting — University of Winchester (2024–2027 Expected)
First-Year Voice Assessment: Mark of 75 (Distinction Level)

SELECTED STAGE & LIVE PRODUCTIONS:
2026 · Diwali Mela · Adult Krishna · Community Live Production
2026 · A Midsummer Night's Dream · Theseus & Oberon · University of Winchester
2026 · Trinity: Humanity v Divinity · Divinity · Devised Theatre (In Dev, Nov 2026)
2025 · Aum Namah Shivaay · Lord Shiva · Community Stage Production

SCREEN & FILMMAKING CREDITS:
2026 · Dan · Dan · Student Short Film
2026 (Dec) · Lakers Lodge · Leon (Writer, Lead Actor & Filmmaker) · Psychological Horror (Pre-production)

PAID VOICEOVER CREDIT:
2025 · Southampton, A City Built on Exchange · Narrator · Professional Paid Engagement

CLASSICAL & TRAINING SCENE STUDIES:
• Hamlet (Hamlet & The Ghost) — Classical verse & heightened language
• Julie: After Strindberg (Jean) — Psychological realism & class dynamics
• A Doll's House (Torvald) — Naturalistic character study
• Kramer vs. Kramer (Ted Kramer) — Screen dialogue & emotional stakes
• Titus Andronicus — Classical tragic resonance
• A Midsummer Night's Dream (Lysander & Demetrius) — Shakespearean comedy

PRACTICAL SKILLS & DISCIPLINES:
Acting Techniques: Stanislavski, Meisner technique, Classical verse speaking, Screen acting & self-tape, Physical theatre & movement, Devised theatre, Improvisation.
Filmmaking: Panasonic Lumix S5 II, Digital Cinematography, Studio Lighting, Sound Design, Audio Recording (Sennheiser MKH 416), Video Editing, Colour Grading.
Online Media: Livestreaming & digital content creation since June 2020 (JollyLegend & JollySFX).
    `.trim();

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Ishaan_Jolly_Acting_CV.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  const stageCredits = CREDITS_DATA.filter((c) => c.category === 'theatre');
  const screenCredits = CREDITS_DATA.filter((c) => c.category === 'screen');
  const sceneStudyCredits = CREDITS_DATA.filter((c) => c.category === 'scene_study');
  const voCredits = CREDITS_DATA.filter((c) => c.category === 'voiceover');

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#0c0d13] border border-zinc-700/80 rounded-2xl shadow-2xl text-zinc-100 overflow-hidden my-6">
        
        {/* Sticky Action Toolbar */}
        <div className="sticky top-0 z-30 bg-[#12141e] border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-cinzel font-bold text-sm text-white">Ishaan Jolly — Professional Acting CV</span>
            <span className="text-[11px] text-zinc-400 hidden sm:inline">· Updated November 2026</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 rounded transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Print CV"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-3 py-1.5 text-xs font-medium text-black bg-amber-400 hover:bg-amber-300 rounded transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Download CV Document"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download (.txt)</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded transition-colors ml-2 cursor-pointer"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Content Area */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto text-xs sm:text-sm">
          
          {/* Actor Header */}
          <div className="text-center pb-8 border-b border-zinc-800">
            <h1 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-tight text-white mb-1">
              ISHAAN JOLLY
            </h1>
            <p className="text-amber-400 text-xs sm:text-sm tracking-widest uppercase font-medium mb-3">
              Actor · Voice Actor · Performer & Filmmaker
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-zinc-400">
              <span>British National</span>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <span>Based in Southampton, Hampshire, UK</span>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <span>Spotlight Application in Progress</span>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <span className="text-amber-300">Seeking Representation</span>
            </div>
            <div className="text-xs text-zinc-300 mt-2 font-mono">
              Direct Contact: <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-amber-400 hover:underline">{CONTACT_DETAILS.email}</a>
            </div>
          </div>

          {/* Physical Attributes Bar */}
          <div className="py-5 border-b border-zinc-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <span className="text-[11px] uppercase text-zinc-500 block">Height</span>
              <strong className="text-zinc-100 font-mono text-sm">{PHYSICAL_SPECS.height} ({PHYSICAL_SPECS.heightMetric})</strong>
            </div>
            <div>
              <span className="text-[11px] uppercase text-zinc-500 block">Playing Age</span>
              <strong className="text-zinc-200">{PHYSICAL_SPECS.playingAge}</strong>
            </div>
            <div>
              <span className="text-[11px] uppercase text-zinc-500 block">Build</span>
              <strong className="text-zinc-200">{PHYSICAL_SPECS.build}</strong>
            </div>
            <div>
              <span className="text-[11px] uppercase text-zinc-500 block">Voice</span>
              <strong className="text-zinc-200">Deep Resonant Baritone / Bass</strong>
            </div>
          </div>

          {/* Education Header */}
          <div className="py-5 border-b border-zinc-800 bg-[#0f1118] px-4 rounded-xl my-4">
            <div className="flex items-start gap-3">
              <GraduationCap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white text-sm">
                  BA (Hons) Acting — University of Winchester (2024–2027 Expected)
                </div>
                <div className="text-zinc-400 text-xs mt-0.5">
                  Distinction in First-Year Voice Examination (Mark: 75/100). Focus on Stanislavski, Meisner technique, Shakespearean text, screen acting, physical theatre & devised performance.
                </div>
              </div>
            </div>
          </div>

          {/* Section: Stage & Theatre */}
          <div className="py-5 border-b border-zinc-800">
            <h3 className="font-cinzel text-sm uppercase tracking-wider font-bold text-amber-400 mb-4">
              Stage & Theatre Productions
            </h3>
            <div className="space-y-3">
              {stageCredits.map((item) => (
                <div key={item.id} className="grid grid-cols-12 gap-2 text-xs">
                  <div className="col-span-1 font-mono text-amber-400 font-semibold">{item.year}</div>
                  <div className="col-span-4 font-semibold text-white">{item.title}</div>
                  <div className="col-span-3 text-zinc-300">{item.role}</div>
                  <div className="col-span-4 text-zinc-400 text-right">
                    {item.directorOrCompany}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Screen & Filmmaking */}
          <div className="py-5 border-b border-zinc-800">
            <h3 className="font-cinzel text-sm uppercase tracking-wider font-bold text-amber-400 mb-4">
              Screen & Filmmaking Projects
            </h3>
            <div className="space-y-3">
              {screenCredits.map((item) => (
                <div key={item.id} className="grid grid-cols-12 gap-2 text-xs">
                  <div className="col-span-1 font-mono text-amber-400 font-semibold">{item.year}</div>
                  <div className="col-span-4 font-semibold text-white">
                    {item.title} {item.status && <span className="text-[10px] text-purple-400">({item.status})</span>}
                  </div>
                  <div className="col-span-3 text-zinc-300">{item.role}</div>
                  <div className="col-span-4 text-zinc-400 text-right">
                    {item.directorOrCompany}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Paid Voiceover */}
          <div className="py-5 border-b border-zinc-800">
            <h3 className="font-cinzel text-sm uppercase tracking-wider font-bold text-amber-400 mb-4">
              Professional Voiceover
            </h3>
            <div className="space-y-3">
              {voCredits.map((item) => (
                <div key={item.id} className="grid grid-cols-12 gap-2 text-xs">
                  <div className="col-span-1 font-mono text-amber-400 font-semibold">{item.year}</div>
                  <div className="col-span-5 font-semibold text-white">{item.title}</div>
                  <div className="col-span-3 text-zinc-300">{item.role}</div>
                  <div className="col-span-3 text-zinc-400 text-right">{item.directorOrCompany}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Training Scene Studies */}
          <div className="py-5 border-b border-zinc-800">
            <h3 className="font-cinzel text-sm uppercase tracking-wider font-bold text-amber-400 mb-4">
              Training & Classical Scene Studies (University of Winchester)
            </h3>
            <div className="space-y-2.5">
              {sceneStudyCredits.map((item) => (
                <div key={item.id} className="grid grid-cols-12 gap-2 text-xs">
                  <div className="col-span-2 font-mono text-zinc-500">{item.year}</div>
                  <div className="col-span-4 font-semibold text-zinc-200">{item.title}</div>
                  <div className="col-span-3 text-zinc-300">Role: {item.role}</div>
                  <div className="col-span-3 text-zinc-400 text-right">{item.medium}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Practical Skills & Filmmaking */}
          <div className="py-5 border-b border-zinc-800 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-cinzel text-sm uppercase tracking-wider font-bold text-amber-400 mb-2">
                Acting & Performance Skills
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Stanislavski technique, Meisner responsiveness, Shakespearean verse, naturalistic screen performance, physical theatre, expressive movement, character improvisation, comedic timing.
              </p>
              <div className="mt-2 text-xs text-zinc-400">
                <strong>Vocal:</strong> Deep resonant British voice · University Voice Mark: 75.
              </div>
            </div>

            <div>
              <h3 className="font-cinzel text-sm uppercase tracking-wider font-bold text-amber-400 mb-2">
                Filmmaking & Media Production
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Panasonic Lumix S5 II camera operation, cinematography, lighting design, sound recording (Sennheiser MKH 416), audio editing, video editing, colour grading, screenwriting.
              </p>
              <div className="mt-2 text-xs text-zinc-400">
                <strong>Online Creator:</strong> Livestreamer & video creator since June 2020.
              </div>
            </div>
          </div>

          {/* Footer Status */}
          <div className="pt-5 text-center text-xs text-zinc-400">
            <div>Ishaan Jolly · British Actor & Performer · Southampton, UK</div>
            <div className="mt-1 text-zinc-300">
              For representation meetings or casting inquiries: <strong className="text-amber-400">{CONTACT_DETAILS.email}</strong>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
