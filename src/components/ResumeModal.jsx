import React, { useEffect } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  GraduationCap, 
  Briefcase, 
  Code,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose, onShowToast }) {
  const [copiedResume, setCopiedResume] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
VIKRAM
Artificial Intelligence and Machine Learning Student
East West Institute of Technology (EWIT), Bengaluru
Email: ${portfolioData.personal.email}
GitHub: ${portfolioData.personal.github}
LinkedIn: ${portfolioData.personal.linkedin}

ACADEMIC BACKGROUND:
Bachelor of Engineering (B.E.) in Artificial Intelligence & Machine Learning
East West Institute of Technology, Bengaluru (VTU) | 2023 - Present (3rd Year)

TECHNICAL SKILLS:
- Core Languages: Python, C
- Frameworks & Technologies: Python, Deep Learning, Generative AI, Git, GitHub
- Interests: Generative AI, OpenAI

PROJECTS:
- Practical projects currently under development and coming soon.
    `.trim();

    navigator.clipboard.writeText(text);
    setCopiedResume(true);
    onShowToast('Resume summary copied to clipboard!', 'success');
    setTimeout(() => setCopiedResume(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose}></div>

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#0b0f19] border border-indigo-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 text-left my-8 max-h-[88vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 shrink-0">
          <div>
            <h3 className="text-xl font-heading font-bold text-white flex items-center gap-2">
              <span>Student Profile Preview</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                EWIT AIML
              </span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Artificial Intelligence and Machine Learning Student • 3rd Year B.E.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 transition-colors"
              title="Copy plain text"
            >
              {copiedResume ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copiedResume ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs text-white transition-colors"
              title="Print or Save PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Content */}
        <div className="overflow-y-auto py-6 pr-2 space-y-6 text-sm text-slate-300">
          
          {/* Candidate Name & Contact Banner */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-heading font-bold text-white">
                Vikram
              </h2>
              <p className="text-xs font-mono text-indigo-300 mt-0.5">
                Artificial Intelligence and Machine Learning Student • 3rd Year B.E.
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                East West Institute of Technology (EWIT), Bengaluru
              </p>
            </div>
            <div className="text-xs font-mono space-y-1 text-slate-300 sm:text-right">
              <div>{portfolioData.personal.email}</div>
              <div>Bengaluru, Karnataka, India</div>
              <div className="text-cyan-400">Available for Internships</div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold border-b border-slate-800 pb-1 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h4>
            <div className="text-left space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <span className="text-white font-semibold">
                  Bachelor of Engineering (B.E.) in Artificial Intelligence & Machine Learning
                </span>
                <span className="text-xs font-mono text-slate-400">2023 - Present (3rd Year)</span>
              </div>
              <p className="text-xs text-slate-300">
                East West Institute of Technology (EWIT), Bengaluru (Affiliated to VTU Belagavi)
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold border-b border-slate-800 pb-1 flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>Technical Skills & Focus</span>
            </h4>
            <div className="space-y-1.5 text-xs">
              <div>
                <strong className="text-white font-mono">Core Languages: </strong>
                Python, C, Generative AI and git and git hub
              </div>
              <div>
                <strong className="text-white font-mono">Frameworks & Technologies: </strong>
                Python, Deep Learning, Generative AI and git and git hub
              </div>
              <div>
                <strong className="text-white font-mono">Interests: </strong>
                Generative AI, OpenAI
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold border-b border-slate-800 pb-1 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Projects</span>
            </h4>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>Currently building hands-on projects in Python, C, Deep Learning, and Generative AI. Projects will be uploaded here soon.</span>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="border-t border-slate-800 pt-3 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <span>East West Institute of Technology • Bengaluru</span>
          <button
            onClick={onClose}
            className="text-indigo-400 hover:text-indigo-300 transition-colors font-mono"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
}
