import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Activity,
  Zap,
  GitBranch
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose}></div>

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl glass-card rounded-2xl border border-indigo-500/30 bg-[#0d121f] p-6 sm:p-8 shadow-2xl shadow-indigo-950/60 z-10 text-left my-8">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                {project.badge}
              </span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                {project.category}
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                Status: {project.status}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors focus:outline-none shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="py-6 space-y-6 max-h-[70vh] overflow-y-auto pr-1">
          
          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-300 mb-2 flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-indigo-400" />
              <span>Project Overview & Problem Statement</span>
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-3 gap-3">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                <div className="text-base sm:text-lg font-bold font-heading text-white text-indigo-300">
                  {m.value}
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Architecture Pipeline */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
              <GitBranch className="w-4 h-4 text-cyan-400" />
              <span>End-to-End System Pipeline</span>
            </h4>
            <p className="text-xs font-mono text-slate-300 bg-slate-900 p-3 rounded-lg border border-slate-800/60 leading-relaxed overflow-x-auto">
              {project.architecture}
            </p>
          </div>

          {/* Technical Highlights */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Engineering Highlights & Implementation Details</span>
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {project.highlights.map((h, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/25"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-400 font-mono">
            AIML Student Project • EWIT Bengaluru
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Source Code</span>
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium shadow-lg shadow-indigo-600/30 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch Live Demo</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
