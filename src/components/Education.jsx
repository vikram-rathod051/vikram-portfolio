import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const edu = (portfolioData.education && portfolioData.education[0]) || null;
  const certs = portfolioData.certifications || [];

  if (!edu && certs.length === 0) {
    return null;
  }

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            Academic <span className="gradient-text-accent">Education</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Formal engineering studies in Artificial Intelligence and Machine Learning at East West Institute of Technology.
          </p>
        </div>

        {/* Education Display */}
        <div className="max-w-3xl mx-auto text-left">
          {edu && (
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/5 space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-800 pb-5">
                <div>
                  <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono mb-1">
                    <GraduationCap className="w-4 h-4" />
                    <span>UNDERGRADUATE DEGREE</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-indigo-300 font-medium text-sm sm:text-base mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {edu.affiliation}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end gap-1 shrink-0">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                    {edu.period}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1 sm:justify-end mt-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    {edu.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed">
                {edu.description}
              </p>

              {/* Status & Focus */}
              <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="text-slate-300">Status: {edu.currentStatus}</span>
                </div>
                <div className="text-indigo-300">
                  Department of Artificial Intelligence & Machine Learning
                </div>
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
}
