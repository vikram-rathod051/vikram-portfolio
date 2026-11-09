import React, { useState, useMemo } from 'react';
import { 
  Code, 
  Cpu, 
  Search, 
  Sparkles, 
  Layers, 
  GitBranch,
  Brain
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Skills', icon: Layers },
    { id: 'programming', name: 'Python & C', icon: Code },
    { id: 'ai', name: 'Generative AI', icon: Brain },
    { id: 'tools', name: 'Git & GitHub', icon: GitBranch },
  ];

  // Flattened or filtered skills
  const filteredSkills = useMemo(() => {
    let list = [];
    portfolioData.skills.categories.forEach((cat) => {
      if (selectedCategory === 'all' || selectedCategory === cat.id) {
        cat.skills.forEach((skill) => {
          list.push({ ...skill, categoryName: cat.name, categoryId: cat.id });
        });
      }
    });

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.tag.toLowerCase().includes(q) ||
          s.categoryName.toLowerCase().includes(q)
      );
    }

    return list;
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            Skills & <span className="gradient-text-accent">Technologies</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Focused technical foundation in Python, C programming, Deep Learning, Generative AI, and Git/GitHub version control workflows.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/40'
                      : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skills (e.g. Python, C)..."
              className="w-full bg-slate-900/90 border border-slate-800 focus:border-indigo-500 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 text-left">
          {filteredSkills.map((skill, idx) => (
            <div
              key={`${skill.name}-${idx}`}
              className="glass-card rounded-xl p-5 border border-white/5 hover:border-indigo-500/30 transition-all duration-200 group relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="text-base font-semibold text-white group-hover:text-indigo-300 transition-colors">
                    {skill.name}
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/90 text-indigo-300 border border-slate-700/80 shrink-0">
                    {skill.tag}
                  </span>
                </div>
              </div>

              <div className="space-y-1.5 pt-4">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Proficiency</span>
                  <span className="text-indigo-300 font-semibold">{skill.level}%</span>
                </div>
                {/* Level Bar */}
                <div className="w-full bg-slate-800/80 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 glass-card rounded-2xl border border-dashed border-slate-800">
            <p className="text-slate-400 text-sm">
              No matching skills found for "<span className="text-white font-mono">{searchQuery}</span>".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 px-4 py-1.5 rounded-lg bg-indigo-600/30 text-indigo-300 text-xs font-mono hover:bg-indigo-600/50"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Technical Highlights Bar */}
        <div className="mt-12 glass-card rounded-2xl p-6 border border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-300 mb-1">
                  Core Programming
                </h4>
                <p className="text-xs text-slate-300">
                  Building strong foundations in Python and procedural C programming, focusing on clean syntax and algorithms.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 mb-1">
                  AI & Deep Learning
                </h4>
                <p className="text-xs text-slate-300">
                  Learning neural network principles, deep learning workflows, Generative AI concepts, and OpenAI ecosystem tools.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                <GitBranch className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 mb-1">
                  Version Control & Collaboration
                </h4>
                <p className="text-xs text-slate-300">
                  Practicing standard Git version control, repository setup, branching, and team collaboration on GitHub.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
