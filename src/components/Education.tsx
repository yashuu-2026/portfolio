import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle, Sparkles } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-white/40">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-pastel-cream/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-pastel-lavender/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pastel-cream/60 border border-[#e4d4a8] text-pastel-plum text-xs sm:text-sm font-bold tracking-wide uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-pastel-plum" />
            <span>Academic Milestones</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-pastel-plum tracking-tight mb-4">
            My Education
          </h2>
          <p className="text-base sm:text-lg text-pastel-plumMuted">
            Chronological overview of my formal education, specialized coursework, and learning achievements.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Center Spine Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-gradient-to-b from-pastel-lavender via-pastel-pink to-pastel-mint rounded-full" />

          <div className="space-y-12">
            {PORTFOLIO_DATA.education.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-6 md:gap-12`}
                >
                  {/* Timeline Center Node with Icon */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-2xl bg-white border-2 border-pastel-lavender shadow-soft-md z-10 hover:scale-110 transition-transform">
                    {item.isCurrent ? (
                      <GraduationCap className="w-6 h-6 text-pastel-lavender" />
                    ) : index === 1 ? (
                      <BookOpen className="w-5 h-5 text-pastel-pink" />
                    ) : (
                      <Award className="w-5 h-5 text-pastel-mint" />
                    )}
                  </div>

                  {/* Empty Spacer Column for Desktop Alternate Layout */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Timeline Card Content (Takes 1/2 on desktop, full width on mobile with left padding) */}
                  <div className="w-full md:w-1/2 pl-14 md:pl-0">
                    <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 border border-white/90 shadow-soft-md relative">
                      
                      {/* Current Status Pill */}
                      {item.isCurrent && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pastel-mint/30 border border-pastel-mint text-pastel-plum text-xs font-bold mb-3">
                          <span className="w-2 h-2 rounded-full bg-pastel-mint animate-pulse" />
                          <span>Currently Pursuing</span>
                        </div>
                      )}

                      {/* Header: Degree & Course */}
                      <h3 className="font-display text-xl sm:text-2xl font-extrabold text-pastel-plum leading-snug mb-1">
                        {item.degree}
                      </h3>
                      
                      <p className="text-sm sm:text-base font-semibold text-pastel-lavender mb-3">
                        {item.field}
                      </p>

                      {/* Institution & Metadata */}
                      <div className="space-y-1.5 mb-5 text-xs sm:text-sm text-pastel-plumLight">
                        <div className="flex items-center gap-2 font-medium">
                          <GraduationCap className="w-4 h-4 text-pastel-plumMuted flex-shrink-0" />
                          <span className="font-semibold text-pastel-plum">
                            {item.institution}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-pastel-plumMuted">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {item.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5" />
                            {item.location}
                          </span>
                        </div>

                        {item.gradeOrScore && (
                          <div className="inline-block mt-1 text-xs font-semibold px-2.5 py-1 rounded-lg bg-pastel-cream/40 border border-[#e8dcb8] text-pastel-plum">
                            Grade / Score: {item.gradeOrScore}
                          </div>
                        )}
                      </div>

                      {/* Highlights & Coursework */}
                      <div className="pt-4 border-t border-pastel-lavender/20">
                        <span className="text-xs font-bold uppercase tracking-wider text-pastel-plumMuted flex items-center gap-1.5 mb-2.5">
                          <Sparkles className="w-3 h-3 text-pastel-pink" />
                          Key Highlights & Academic Milestones
                        </span>
                        
                        <ul className="space-y-2">
                          {item.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-pastel-plumLight">
                              <CheckCircle className="w-4 h-4 text-pastel-lavender flex-shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Education Timeline Footer Note */}
        <div className="mt-14 text-center">
          <p className="text-xs text-pastel-plumMuted italic">
            * All university names, grades, and specific milestones are customizable in <code className="bg-white/80 px-2 py-0.5 rounded border border-pastel-lavender/30 font-mono text-[11px] text-pastel-plum">src/data/portfolioData.ts</code>
          </p>
        </div>

      </div>
    </section>
  );
};
