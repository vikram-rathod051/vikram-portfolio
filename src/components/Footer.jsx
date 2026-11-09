import React from 'react';
import { 
  ArrowUp, 
  BrainCircuit, 
  Mail 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05070c] border-t border-slate-900 pt-16 pb-12 overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Mission (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-[#080a12] rounded-[10px] flex items-center justify-center">
                  <BrainCircuit className="w-4 h-4 text-indigo-400" />
                </div>
              </div>
              <span className="font-heading font-bold text-lg text-white">
                {portfolioData.personal.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              3rd Year Artificial Intelligence & Machine Learning student at <strong className="text-slate-300">East West Institute of Technology (EWIT)</strong>, Bengaluru. Building fundamentals in Python, C, Deep Learning, and Generative AI.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/40 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/40 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Site Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
              <a href="#hero" className="hover:text-indigo-300 transition-colors">Hero & Highlights</a>
              <a href="#about" className="hover:text-indigo-300 transition-colors">About & Journey</a>
              <a href="#skills" className="hover:text-indigo-300 transition-colors">Technical Skills</a>
              <a href="#projects" className="hover:text-indigo-300 transition-colors">AI/ML Projects</a>
              <a href="#education" className="hover:text-indigo-300 transition-colors">Education & VTU</a>
              <a href="#contact" className="hover:text-indigo-300 transition-colors">Contact & Placement</a>
            </div>
          </div>

          {/* Placement Notice & Back to Top (3 cols) */}
          <div className="md:col-span-3 space-y-4 flex flex-col justify-between">
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
              <div className="text-[11px] font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Active Internship Search</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Available for Summer 2025/2026 AI/ML Engineering & Data Science Internships.
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all text-xs font-medium self-start md:self-auto"
            >
              <ArrowUp className="w-3.5 h-3.5 text-indigo-400" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Tech Stack */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            &copy; {currentYear} {portfolioData.personal.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Built with React 19, Vite & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
