import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FolderGit2, ExternalLink, Sparkles, Edit3, Info, Check, Copy } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyPath = () => {
    navigator.clipboard.writeText('src/data/portfolioData.ts');
    setCopiedId('path');
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient pastel accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-pastel-lavender/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pastel-mint/30 border border-pastel-mint/60 text-pastel-plum text-xs sm:text-sm font-bold tracking-wide uppercase mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-pastel-plum" />
            <span>Showcase & Workspaces</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-pastel-plum tracking-tight mb-4">
            My Projects
          </h2>
          <p className="text-base sm:text-lg text-pastel-plumMuted">
            Curated project templates prepared for upcoming software development projects, academic coursework, and practical code implementations.
          </p>
        </div>

        {/* Notice Banner: Transparent disclosure about editable project placeholders */}
        <div className="mb-12 max-w-4xl mx-auto bg-gradient-to-r from-pastel-lavender/25 via-pastel-pink/20 to-pastel-mint/25 border border-pastel-lavender/40 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-soft-sm">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/80 flex items-center justify-center flex-shrink-0 border border-pastel-lavender/40">
              <Info className="w-5 h-5 text-pastel-plum" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-pastel-plum flex items-center gap-2">
                Editable Project Placeholders Ready
                <span className="text-[10px] bg-white/90 text-pastel-plum px-2 py-0.5 rounded-full border border-pastel-lavender/40 font-semibold">
                  3 Slots
                </span>
              </h4>
              <p className="text-xs text-pastel-plumLight mt-0.5">
                These cards are pre-structured templates ready to be populated with your actual project screenshots, GitHub repositories, and live URLs.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCopyPath}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-pastel-plum bg-white/90 hover:bg-white border border-pastel-lavender/50 shadow-xs hover:scale-105 active:scale-95 transition-all flex-shrink-0"
            title="Click to copy file path"
          >
            {copiedId === 'path' ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-600" />
                <span>Copied data path!</span>
              </>
            ) : (
              <>
                <Edit3 className="w-3.5 h-3.5 text-pastel-lavender" />
                <span>Edit in portfolioData.ts</span>
                <Copy className="w-3 h-3 text-pastel-plumMuted ml-1" />
              </>
            )}
          </button>
        </div>

        {/* 3 Modern Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between border border-white/90 shadow-soft-md group relative"
            >
              {/* Top Accent Gradient Border */}
              <div className={`h-2 w-full bg-gradient-to-r ${project.gradient}`} />

              <div>
                {/* Project Screenshot Placeholder Container */}
                <div className="relative aspect-video w-full bg-gradient-to-br from-pastel-bgBase to-white flex flex-col items-center justify-center p-6 border-b border-pastel-lavender/20 overflow-hidden">
                  
                  {/* Subtle decorative mesh background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-40 group-hover:opacity-70 transition-opacity duration-300`}
                  />

                  {/* Aesthetic Placeholder Mockup Art */}
                  <div className="relative z-10 w-full max-w-[240px] rounded-xl bg-white/90 border border-pastel-lavender/40 shadow-soft-sm p-3 transform group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300">
                    {/* Fake window buttons */}
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-pastel-pink" />
                      <span className="w-2.5 h-2.5 rounded-full bg-pastel-cream border border-[#e4d4a8]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-pastel-mint" />
                      <span className="ml-auto text-[9px] font-mono text-pastel-plumMuted">
                        Slot #{index + 1}
                      </span>
                    </div>

                    {/* Wireframe skeleton lines */}
                    <div className="space-y-1.5">
                      <div className="h-2 w-3/4 bg-pastel-lavender/30 rounded" />
                      <div className="h-2 w-full bg-pastel-lavender/20 rounded" />
                      <div className="h-2 w-1/2 bg-pastel-lavender/25 rounded" />
                    </div>

                    <div className="mt-3 pt-2 border-t border-pastel-lavender/20 flex items-center justify-between text-[10px] text-pastel-plumMuted font-medium">
                      <span>Screenshot Placeholder</span>
                      <Sparkles className="w-3 h-3 text-pastel-lavender" />
                    </div>
                  </div>

                  {/* Placeholder Badge Indicator */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/90 text-pastel-plum border border-pastel-lavender/40 shadow-xs">
                      <Edit3 className="w-3 h-3 text-pastel-lavender" />
                      Editable
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  {/* Subtitle / Template slot */}
                  <span className="text-[11px] font-bold text-pastel-lavender uppercase tracking-wider block mb-1">
                    {project.subtitle}
                  </span>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-pastel-plum mb-2.5 group-hover:text-pastel-plumLight transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-pastel-plumLight leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-pastel-lavender/15 text-pastel-plum border border-pastel-lavender/25"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: GitHub & Live Demo */}
              <div className="p-6 pt-0 border-t border-pastel-lavender/15 mt-2">
                <div className="flex items-center gap-3 pt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold text-pastel-plum bg-white/80 hover:bg-white border border-pastel-lavender/40 shadow-xs hover:shadow-soft-sm hover:scale-105 active:scale-95 transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-pastel-plum" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold text-pastel-plum bg-gradient-to-r from-pastel-lavender/40 via-pastel-pink/30 to-pastel-mint/40 hover:from-pastel-lavender/60 hover:to-pastel-mint/60 border border-pastel-lavender/50 shadow-xs hover:shadow-soft-sm hover:scale-105 active:scale-95 transition-all"
                  >
                    <span>Demo</span>
                    <ExternalLink className="w-3.5 h-3.5 text-pastel-plum" />
                  </a>
                </div>
                
                <p className="text-[10px] text-center text-pastel-plumMuted mt-2.5 italic">
                  Links point to placeholder destinations
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
