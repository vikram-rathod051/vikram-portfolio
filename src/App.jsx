import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import Toast from './components/Toast';
import { portfolioData } from './data/portfolioData';
import './App.css';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [copied, setCopied] = useState(false);

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    showToast('Email address copied to clipboard: ' + portfolioData.personal.email, 'success');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {/* Ambient Radial Glowing Orbs */}
      <div className="glow-orb-1"></div>
      <div className="glow-orb-2"></div>
      <div className="glow-orb-3"></div>

      {/* Subtle Background Grid Pattern */}
      <div className="fixed inset-0 bg-ambient-grid pointer-events-none z-0"></div>

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navigation Bar */}
        <Navbar onOpenResume={() => setResumeOpen(true)} />

        {/* Main Section Content */}
        <main className="flex-grow">
          {/* Hero Section */}
          <Hero
            onOpenResume={() => setResumeOpen(true)}
            onCopyEmail={handleCopyEmail}
            copied={copied}
          />

          {/* About Me Section */}
          <About />

          {/* Skills Section */}
          <Skills />

          {/* Projects Section */}
          <Projects />

          {/* Education & Certifications Section */}
          <Education />

          {/* Contact Section */}
          <Contact
            onShowToast={showToast}
            onCopyEmail={handleCopyEmail}
            copied={copied}
          />
        </main>

        {/* Footer */}
        <Footer />

      </div>

      {/* Recruiter Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        onShowToast={showToast}
      />

      {/* Toast Notification Container */}
      <Toast toast={toast} onClose={() => setToast(null)} />

    </div>
  );
}
