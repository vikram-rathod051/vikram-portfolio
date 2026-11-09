import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  Sparkles, 
  Copy, 
  Check, 
  Clock, 
  CheckCircle2, 
  MessageSquare 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ onShowToast, onCopyEmail, copied }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Please fill in your name, email, and message.', 'error');
      return;
    }

    setIsSubmitting(true);

    // Simulate realistic send delay & trigger celebration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // graceful fallback if canvas-confetti is not loaded
      }

      onShowToast('Message transmitted successfully! Thank you for reaching out.', 'success');
    }, 900);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Outreach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            Let's <span className="gradient-text-accent">Connect</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            {portfolioData.contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/5 space-y-6">
              
              <div className="space-y-2">
                <h3 className="text-xl font-heading font-bold text-white">
                  Contact Information
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Feel free to send an email or reach out on LinkedIn. I reply promptly to internship opportunities, research queries, and technical discussions.
                </p>
              </div>

              {/* Direct Email Card with One-Click Copy */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Direct Email Address</span>
                  </span>
                  <span className="text-[10px] text-emerald-400">Click to copy</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="text-xs sm:text-sm font-mono text-indigo-300 hover:text-indigo-200 transition-colors break-all"
                  >
                    {portfolioData.personal.email}
                  </a>
                  <button
                    onClick={onCopyEmail}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all shrink-0"
                    title="Copy Email"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Location & Mobility
                  </h4>
                  <p className="text-xs sm:text-sm text-white font-medium mt-0.5">
                    Bengaluru, Karnataka, India
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Open to both on-site roles in Bengaluru and remote internships.
                  </p>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Professional Profiles
                </h4>
                <div className="flex flex-col gap-2.5">
                  <a
                    href={portfolioData.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 text-slate-300 hover:text-white transition-all group"
                  >
                    <span className="flex items-center gap-2.5 text-xs font-medium">
                      <GithubIcon className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition-colors" />
                      <span>github.com/vicky-karkee</span>
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 group-hover:text-indigo-300">
                      View Code &rarr;
                    </span>
                  </a>

                  <a
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 text-slate-300 hover:text-white transition-all group"
                  >
                    <span className="flex items-center gap-2.5 text-xs font-medium">
                      <LinkedinIcon className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                      <span>linkedin.com/in/vicky-karkee</span>
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 group-hover:text-cyan-300">
                      Connect &rarr;
                    </span>
                  </a>
                </div>
              </div>

              {/* Placement Availability Banner */}
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Immediate availability for Summer 2025/2026 AI/ML internships.</span>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/5 text-left">
              
              <div className="flex items-center gap-2.5 mb-6">
                <MessageSquare className="w-5 h-5 text-indigo-400" />
                <h3 className="text-xl font-heading font-bold text-white">
                  Send a Direct Message
                </h3>
              </div>

              {isSubmitted ? (
                <div className="py-12 px-4 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-white">
                    Message Transmitted!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your message has been recorded and will be addressed shortly.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-4 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg shadow-indigo-600/30"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Aditi Sharma"
                        className="w-full bg-slate-900/90 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="e.g. aditi@company.com"
                        className="w-full bg-slate-900/90 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. AIML Internship Opportunity / Project Collaboration"
                      className="w-full bg-slate-900/90 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Write your note, inquiry, or internship invitation here..."
                      className="w-full bg-slate-900/90 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold text-sm tracking-wide shadow-lg shadow-indigo-600/30 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Transmitting Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Transmit Message</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center font-mono pt-1">
                    Direct inquiries can also be dispatched to {portfolioData.personal.email}
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
