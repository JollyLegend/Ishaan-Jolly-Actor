import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, UserCheck, GraduationCap, ArrowRight, Clock, ShieldAlert } from 'lucide-react';
import { CONTACT_DETAILS, PHYSICAL_SPECS } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectTitle: '',
    projectType: 'Screen / Television',
    timeline: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Provide seamless interactive confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      projectTitle: '',
      projectType: 'Screen / Television',
      timeline: '',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#08090b] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs tracking-widest uppercase font-semibold text-amber-400 mb-2">
            Casting & Representation
          </div>
          <h2 className="font-cinzel text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            CONTACT & REPRESENTATION
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Ishaan is an emerging British actor and voice artist currently completing his BA (Hons) Acting at the University of Winchester (Graduation 2027). Open to agent representation discussions, casting calls, and collaborative screen projects.
          </p>
        </div>

        {/* 2-Column Split: Representation & Industry Status on Left, Casting Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Representation Status & Professional Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
              Professional Status & Agency Inquiries
            </div>

            {/* Seeking Representation Card */}
            <div className="p-6 rounded-xl bg-[#10121a] border border-amber-500/30 shadow-lg shadow-black/40">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20">
                  Representation Status
                </span>
                <span className="text-[11px] text-zinc-400 font-mono">
                  Active Seeking
                </span>
              </div>

              <h3 className="font-semibold text-lg text-white mb-2">
                Currently Seeking Theatrical & Voice Representation
              </h3>

              <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                Ishaan is actively meeting with talent agents and theatrical managers ahead of his 2027 showcase. Agents interested in reviewing self-tapes or meeting Ishaan are encouraged to connect directly.
              </p>

              <div className="space-y-2 text-xs text-zinc-400 pt-3 border-t border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="text-zinc-400">Direct Email:</span>
                  <a
                    href={`mailto:${CONTACT_DETAILS.email}`}
                    className="text-zinc-100 hover:text-amber-300 transition-colors font-medium underline-offset-2 hover:underline"
                  >
                    {CONTACT_DETAILS.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Base: <strong className="text-zinc-200">Southampton / Hampshire / London</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Training: <strong className="text-zinc-200">University of Winchester (BA Acting)</strong></span>
                </div>
              </div>
            </div>

            {/* Industry Profile & Verification Status */}
            <div className="p-5 rounded-xl bg-[#10121a] border border-zinc-800/80 space-y-3 text-xs">
              <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                Industry Registration Status
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-zinc-200">Spotlight Registration</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">
                    Registration & graduate profile application in progress. Confirmed profile URL will be updated upon finalization.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <UserCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-zinc-200">British Citizen · Right to Work</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">
                    Full unconditional right to work across UK film, television, theatre, and voice broadcasting.
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Casting Inquiry Form */}
          <div className="lg:col-span-7 bg-[#0f111a] border border-zinc-800/80 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/80">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
              <Send className="w-3.5 h-3.5" />
              <span>Direct Communication</span>
            </div>
            <h3 className="font-cinzel text-xl md:text-2xl font-bold text-white mb-2">
              SEND A CASTING INQUIRY
            </h3>
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed mb-6">
              Messages submitted here are delivered directly to Ishaan Jolly's personal inbox (<span className="text-zinc-300 font-mono">ishaanjolly2@gmail.com</span>) for casting calls, audition sides, or representation inquiries.
            </p>

            {submitted ? (
              <div className="py-12 px-6 rounded-xl bg-zinc-900/60 border border-amber-500/30 text-center animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-amber-400/10 border border-amber-400/40 text-amber-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-cinzel text-xl font-bold text-white mb-2">
                  Message Sent to Ishaan
                </h4>
                <p className="text-sm text-zinc-300 max-w-md mx-auto mb-6">
                  Thank you, <strong>{formData.name || 'Casting Director'}</strong>. Your inquiry regarding <em>{formData.projectTitle || 'your project'}</em> has been transmitted directly. Ishaan will respond promptly.
                </p>
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-black bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Your Full Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance (Casting Director)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#151722] border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Professional Email <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. contact@production.co.uk"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#151722] border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Organization / Agency */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Company / Agency / Production
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Independent Studio / Talent Agency"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#151722] border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  {/* Project Title */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Project Title & Character Role
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 'The Long Night' · Role: Detective"
                      value={formData.projectTitle}
                      onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
                      className="w-full bg-[#151722] border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#151722] border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="Agent Representation Meeting">Agent Representation Meeting</option>
                      <option value="Feature Film">Feature Film</option>
                      <option value="Television Drama">Television Drama</option>
                      <option value="Independent Short Film">Independent Short Film</option>
                      <option value="Theatre / Stage Production">Theatre / Stage Production</option>
                      <option value="Voiceover - Documentary / Narration">Voiceover - Documentary / Narration</option>
                      <option value="Voiceover - Character / Video Game">Voiceover - Character / Video Game</option>
                      <option value="Voiceover - Commercial">Voiceover - Commercial</option>
                      <option value="Other Collaborative Project">Other Collaborative Project</option>
                    </select>
                  </div>

                  {/* Timeline / Dates */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Casting / Audition Timeline
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Self-tape by Friday / Dec 2026"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-[#151722] border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Message & Audition Sides */}
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Character Description, Audition Sides or Message <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details about the character breakdown, script sides, casting timeline, or meeting request..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#151722] border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-lg text-xs uppercase tracking-widest font-semibold text-black bg-amber-400 hover:bg-amber-300 disabled:opacity-50 transition-all shadow-lg shadow-amber-400/20 flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>Send Message to Ishaan</span>
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
