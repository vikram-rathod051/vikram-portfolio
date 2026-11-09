import React, { useState } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Mail, 
  MapPin, 
  Cpu, 
  Sparkles,
  CheckCircle2,
  Download,
  Copy,
  Check,
  User,
  GitBranch,
  Code2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import profilePhoto from '../vikram.jpg';

export default function Hero({ onOpenResume, onCopyEmail, copied }) {
  const [activeTab, setActiveTab] = useState('training');

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status / Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/30 backdrop-blur-md shadow-sm shadow-indigo-500/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300">
                <span className="text-emerald-400 font-semibold">Available for Internships</span> • 3rd Year AIML @ EWIT
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-[1.15]">
                <span className="text-white">Hi, I'm </span>
                <span className="gradient-text-accent">Vikram</span>
                <br />
                <span className="block mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-slate-100 via-indigo-200 to-cyan-300 bg-clip-text text-transparent">
                  Artificial Intelligence and Machine Learning Student
                </span>
              </h1>
            </div>

            {/* Subtitle / Bio summary */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              I am an Artificial Intelligence and Machine Learning student, learning programming and exploring the world of AI and ML. I am building my fundamentals in Python, C, Deep Learning, and Generative AI while continuously improving my technical knowledge.
            </p>

            {/* Key tags row */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 text-xs font-mono border border-indigo-500/20">
                <Code2 className="w-3.5 h-3.5 text-indigo-400" /> Python & C
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 text-xs font-mono border border-cyan-500/20">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" /> Deep Learning
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 text-xs font-mono border border-purple-500/20">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Generative AI & OpenAI
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-300 text-xs font-mono border border-emerald-500/20">
                <GitBranch className="w-3.5 h-3.5 text-emerald-400" /> Git & GitHub
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#skills"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold text-sm tracking-wide shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore Skills</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700 hover:border-slate-600 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Get in Touch</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-indigo-950/40 hover:bg-indigo-900/50 text-indigo-200 text-sm font-medium border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-200"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Resume Preview</span>
              </button>
            </div>

            {/* Social Links & Location Quick Bar */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-800/80 text-sm text-slate-400">
              <div className="flex items-center gap-1.5 text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Bengaluru, Karnataka</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900/70 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-950/30 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900/70 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-950/30 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <button
                  onClick={onCopyEmail}
                  className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/50 transition-all text-xs font-mono"
                  title="Click to copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-400" />
                      <span>{portfolioData.personal.email}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Original Photo with Professional Glow & AI Terminal (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Professional Photo Card */}
            <div className="relative group mx-auto w-full max-w-md">
              {/* Subtle Ambient Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500/35 via-purple-500/25 to-cyan-400/35 rounded-3xl blur-md group-hover:blur-lg transition-all duration-500"></div>

              {/* Photo Container with Rounded Corners */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0d121f] shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Vikram - AIML Student"
                  className="w-full h-72 sm:h-80 object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = document.getElementById('photo-fallback');
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />

                {/* Fallback Notice if photo has not loaded */}
                <div
                  id="photo-fallback"
                  className="hidden w-full h-72 sm:h-80 flex-col items-center justify-center p-6 text-center bg-slate-900/90 text-slate-400"
                >
                  <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-3">
                    <User className="w-8 h-8 text-indigo-400" />
                  </div>
                  <p className="text-sm font-semibold text-white">Vikram</p>
                  <p className="text-xs text-slate-400 mt-1 max-w-xs">
                    AIML Student • East West Institute of Technology
                  </p>
                </div>

                {/* Subtle Gradient & Badge Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07090e]/95 via-[#07090e]/50 to-transparent p-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-heading font-bold text-base sm:text-lg">
                      Vikram
                    </h3>
                    <p className="text-xs text-indigo-300 font-mono">
                      AIML Engineering Student
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-slate-900/90 border border-indigo-500/30 text-indigo-300 text-[11px] font-mono backdrop-blur-md">
                    EWIT Bengaluru
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive AI Terminal & Student Inspector */}
            <div className="glass-card rounded-2xl overflow-hidden border border-indigo-500/20 shadow-2xl shadow-indigo-950/40 relative">
              
              {/* Terminal Window Header */}
              <div className="bg-[#0b0f19] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    student_environment.py
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    ACTIVE
                  </span>
                </div>
              </div>

              {/* Terminal Content Tabs */}
              <div className="flex border-b border-slate-800/80 bg-slate-950/60 text-xs font-mono">
                <button
                  onClick={() => setActiveTab('training')}
                  className={`flex-1 py-2 px-3 text-center transition-colors ${
                    activeTab === 'training'
                      ? 'text-indigo-300 border-b-2 border-indigo-500 bg-indigo-500/5'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Learning Monitor
                </button>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`flex-1 py-2 px-3 text-center transition-colors ${
                    activeTab === 'profile'
                      ? 'text-indigo-300 border-b-2 border-indigo-500 bg-indigo-500/5'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Student Profile
                </button>
              </div>

              {/* Tab 1: Live Learning Monitor Output */}
              {activeTab === 'training' && (
                <div className="p-5 font-mono text-xs text-left space-y-3 bg-[#080b13]/95 min-h-[290px]">
                  <div className="text-slate-400">
                    <span className="text-emerald-400">❯</span> python -m ai_learning --status
                  </div>
                  <div className="text-slate-500 text-[11px]">
                    [info] Student: Vikram | 3rd Year AIML @ EWIT
                  </div>
                  <div className="text-slate-500 text-[11px]">
                    [info] Domain: Artificial Intelligence & Machine Learning
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-slate-300">
                      <span>Curriculum & Skill Focus</span>
                      <span className="text-indigo-300">In Progress</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-2 rounded-full w-4/5"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                      <div>
                        <span className="text-slate-400">Languages:</span>{' '}
                        <span className="text-cyan-300 font-semibold">Python, C</span>
                      </div>
                      <div>
                        <span className="text-slate-400">Version Control:</span>{' '}
                        <span className="text-emerald-400 font-semibold">Git, GitHub</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1 text-slate-300 pt-1 text-[11px]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Deep Learning & Neural Network Fundamentals</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Generative AI & OpenAI Exploration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Algorithms & Programming Practice</span>
                    </div>
                  </div>

                  <div className="pt-2 text-slate-400 flex items-center gap-2 text-[11px] border-t border-slate-800/80">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                    <span className="text-cyan-300">Status: Continuously Improving Technical Knowledge</span>
                  </div>
                </div>
              )}

              {/* Tab 2: Student Profile Card */}
              {activeTab === 'profile' && (
                <div className="p-5 font-mono text-xs text-left space-y-3 bg-[#080b13]/95 min-h-[290px]">
                  <div className="space-y-2">
                    <div className="text-indigo-400 font-semibold">// STUDENT OVERVIEW</div>
                    <div className="text-slate-300">
                      <span className="text-slate-500">Name:</span> Vikram
                    </div>
                    <div className="text-slate-300">
                      <span className="text-slate-500">Degree:</span> B.E. Artificial Intelligence & ML
                    </div>
                    <div className="text-slate-300">
                      <span className="text-slate-500">College:</span> East West Institute of Technology (EWIT)
                    </div>
                    <div className="text-slate-300">
                      <span className="text-slate-500">Year:</span> 3rd Year B.E. (AIML)
                    </div>
                    <div className="text-slate-300">
                      <span className="text-slate-500">Core Skills:</span> Python, C, Generative AI, Git, GitHub
                    </div>
                    <div className="text-slate-300">
                      <span className="text-slate-500">Interests:</span> Generative AI, OpenAI
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800">
                    <div className="text-slate-400 text-[11px] mb-2">// STUDENT INTRODUCTION</div>
                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      "I am an Artificial Intelligence and Machine Learning student, learning programming and exploring the world of AI and ML. I am building my fundamentals in Python, C, Deep Learning, and Generative AI while continuously improving my technical knowledge."
                    </p>
                  </div>
                </div>
              )}

              {/* Quick interactive footer note */}
              <div className="bg-[#0b0f19] px-4 py-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span>EWIT AIML Dept</span>
                <span className="text-indigo-400 font-mono">vikram.aiml</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Hero Stats Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {portfolioData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-xl p-4 sm:p-5 text-left border border-white/5 hover:border-indigo-500/30 transition-all group"
            >
              <div className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-indigo-300 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5 font-mono">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
