import React from 'react';
import { 
  Brain, 
  LineChart, 
  Cpu, 
  Rocket, 
  GraduationCap, 
  Sparkles, 
  Code2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const iconMap = {
    Brain: <Brain className="w-6 h-6 text-indigo-400" />,
    LineChart: <LineChart className="w-6 h-6 text-cyan-400" />,
    Cpu: <Cpu className="w-6 h-6 text-purple-400" />,
    Rocket: <Rocket className="w-6 h-6 text-emerald-400" />,
    Code2: <Code2 className="w-6 h-6 text-cyan-400" />
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            About <span className="gradient-text-accent">Vikram</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            {portfolioData.about.headline}
          </p>
        </div>

        {/* Top Split: Detailed Bio & Interactive Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Bio Story (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4 border border-white/5">
              <h3 className="text-xl font-heading font-semibold text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
                <span>My Journey in Artificial Intelligence & ML</span>
              </h3>
              
              {portfolioData.about.paragraphs.map((p, idx) => (
                <p key={idx} className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  {p}
                </p>
              ))}

              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-indigo-300 bg-indigo-950/40 px-3 py-1.5 rounded-lg border border-indigo-500/20">
                  <GraduationCap className="w-4 h-4 text-indigo-400" />
                  <span>3rd Year AIML @ EWIT Bengaluru</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 bg-cyan-950/40 px-3 py-1.5 rounded-lg border border-cyan-500/20">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span>Python & C Foundation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Facts Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-2xl p-6 border border-white/5 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Academic Snapshot
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  3rd Year AIML
                </span>
              </div>

              <div className="space-y-3.5 text-left">
                {portfolioData.about.highlights.map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-sm border-b border-slate-800/60 pb-2.5 last:border-0">
                    <span className="text-slate-400 text-xs font-mono">{item.key}</span>
                    <span className="text-slate-200 font-medium text-xs sm:text-sm text-right">
                      {item.val}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-gradient-to-r from-indigo-950/30 to-purple-950/30 border border-indigo-500/20 text-left">
                <div className="text-xs font-mono text-indigo-300 font-medium mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Career Objective</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  To secure an impactful machine learning engineering or data science internship where I can apply rigorous modeling, clean coding, and creative problem solving.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Four Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {portfolioData.about.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 border border-white/5 hover:border-indigo-500/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {iconMap[pillar.icon] || <Brain className="w-6 h-6 text-indigo-400" />}
              </div>
              <h4 className="text-base font-heading font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                {pillar.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
