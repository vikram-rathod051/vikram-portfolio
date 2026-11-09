import React, { useState } from 'react';
import { 
  Sparkles, 
  ChevronRight,
  Clock,
  Code2,
  Rocket
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'Python', 'Deep Learning', 'Generative AI'];

  const filteredProjects = (portfolioData.projects || []).filter((p) => {
    if (selectedFilter === 'All') return true;
    return p.category === selectedFilter;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            Featured <span className="gradient-text-accent">Projects</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Practical implementations and software projects built with Python, C, Deep Learning, and Generative AI.
          </p>
        </div>

        {/* Display when projects array is empty */}
        {filteredProjects.length === 0 ? (
          <div className="max-w-2xl mx-auto glass-card rounded-2xl p-8 sm:p-12 border border-white/10 text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Rocket className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-mono">
                <Clock className="w-3.5 h-3.5" />
                <span>Under Active Development</span>
              </div>
              <h3 className="text-2xl font-bold font-heading text-white">
                Projects Coming Soon
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                I am currently building my core fundamentals in Python, C, Deep Learning, and Generative AI. Practical projects will be published here soon as they are completed and documented.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Follow on GitHub</span>
              </a>
              <a
                href="#skills"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 text-xs font-medium border border-indigo-500/30 transition-colors"
              >
                <Code2 className="w-4 h-4 text-indigo-400" />
                <span>Explore Technical Skills</span>
              </a>
            </div>
          </div>
        ) : (
          <div>
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {filters.map((filter) => {
                const isActive = selectedFilter === filter;
                return (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-600/25 border border-indigo-400/40'
                        : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800'
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="glass-card rounded-2xl p-6 border border-white/5 flex flex-col justify-between group hover:border-indigo-500/40 transition-all duration-300 relative"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                        {project.badge}
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {project.status}
                      </span>
                    </div>

                    <h3 className="text-lg font-heading font-bold text-white group-hover:text-indigo-300 transition-colors mb-2.5 line-clamp-2">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-900 text-slate-300 border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-300 hover:text-indigo-200 transition-colors focus:outline-none"
                    >
                      <span>Details & Specs</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal display when a project is clicked */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
