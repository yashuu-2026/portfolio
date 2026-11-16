import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { User, Sparkles, BookOpen, Target, Compass, Heart, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative ambient background blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-pastel-pink/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-pastel-mint/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pastel-lavender/20 border border-pastel-lavender/40 text-pastel-plum text-xs sm:text-sm font-bold tracking-wide uppercase mb-3">
            <User className="w-3.5 h-3.5 text-pastel-plum" />
            <span>Discover My Journey</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-pastel-plum tracking-tight mb-4">
            A Little About Me
          </h2>
          <p className="text-base sm:text-lg text-pastel-plumMuted">
            Get to know my background, what drives my curiosity in computer science, and where I'm headed next.
          </p>
        </div>

        {/* Clean Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Column 1: Profile & Quick Facts Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="glass-card rounded-3xl p-6 sm:p-8 flex-1 flex flex-col justify-between border border-white/80 shadow-soft-lg relative overflow-hidden group">
              
              {/* Decorative top ribbon */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-pastel-lavender via-pastel-pink to-pastel-mint" />

              <div>
                {/* Visual Avatar Placeholder with Aesthetic Framing */}
                <div className="relative mx-auto w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-gradient-to-tr from-pastel-lavender via-pastel-pink to-pastel-mint p-1 shadow-soft-md mb-6 group-hover:scale-105 transition-transform duration-500">
                  <div className="w-full h-full bg-pastel-plum rounded-[22px] flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
                    {/* Background subtle pattern */}
                    <div className="absolute inset-0 bg-radial-gradient opacity-10" />
                    
                    <span className="font-display font-black text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-pastel-lavender via-pastel-pink to-pastel-cream tracking-tight mb-1">
                      {PORTFOLIO_DATA.personal.initials}
                    </span>
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-pastel-mint/90">
                      Profile Photo
                    </span>
                    <span className="text-[9px] text-white/50 mt-0.5">
                      Ready to customize
                    </span>
                  </div>

                  {/* Little corner badge */}
                  <div className="absolute -bottom-2 -right-2 bg-white rounded-xl p-1.5 shadow-md border border-pastel-lavender/40">
                    <Sparkles className="w-5 h-5 text-pastel-lavender" />
                  </div>
                </div>

                {/* Profile Identity */}
                <div className="text-center mb-6">
                  <h3 className="font-display text-2xl font-extrabold text-pastel-plum mb-1">
                    {PORTFOLIO_DATA.personal.name}
                  </h3>
                  <p className="text-sm font-semibold text-pastel-plumLight">
                    {PORTFOLIO_DATA.personal.role}
                  </p>
                  <div className="inline-flex items-center gap-1.5 mt-2 text-xs text-pastel-plumMuted bg-pastel-lavender/15 px-3 py-1 rounded-full border border-pastel-lavender/25">
                    <MapPin className="w-3.5 h-3.5 text-pastel-lavender" />
                    <span>{PORTFOLIO_DATA.personal.location}</span>
                  </div>
                </div>

                {/* Quick Profile Snapshot Pills */}
                <div className="space-y-2.5 pt-4 border-t border-pastel-lavender/20">
                  <div className="flex items-center justify-between text-xs sm:text-sm py-1.5 px-3 rounded-xl bg-white/60">
                    <span className="text-pastel-plumMuted font-medium">Experience Level:</span>
                    <span className="font-bold text-pastel-plum bg-pastel-mint/30 px-2 py-0.5 rounded-md text-xs">
                      {PORTFOLIO_DATA.personal.experienceLevel}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm py-1.5 px-3 rounded-xl bg-white/60">
                    <span className="text-pastel-plumMuted font-medium">Core Stack:</span>
                    <span className="font-bold text-pastel-plum">
                      Python, C, C++, Java
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm py-1.5 px-3 rounded-xl bg-white/60">
                    <span className="text-pastel-plumMuted font-medium">Focus:</span>
                    <span className="font-bold text-pastel-plum">
                      Software Engineering
                    </span>
                  </div>
                </div>
              </div>

              {/* Status footer inside card */}
              <div className="mt-6 pt-4 border-t border-pastel-lavender/20 text-center">
                <p className="text-xs text-pastel-plum font-semibold flex items-center justify-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-pastel-mint animate-pulse" />
                  {PORTFOLIO_DATA.personal.statusText}
                </p>
              </div>

            </div>
          </div>

          {/* Column 2: Personal Narrative & 4 Highlight Cards (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Main Narrative Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/80 shadow-soft-md">
              <h3 className="font-display text-xl font-bold text-pastel-plum mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-pastel-pink fill-pastel-pink/20" />
                <span>My Story & Aspirations</span>
              </h3>
              
              <div className="space-y-3.5 text-pastel-plumLight leading-relaxed text-sm sm:text-base">
                {PORTFOLIO_DATA.personal.longBio.map((paragraph, idx) => (
                  <p key={idx} className={idx === 0 ? "font-semibold text-pastel-plum" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* 4 Small Information Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PORTFOLIO_DATA.aboutHighlights.map((item, index) => {
                const icons = [Compass, BookOpen, Target, Sparkles];
                const IconComponent = icons[index % icons.length];

                return (
                  <div
                    key={item.title}
                    className="glass-card glass-card-hover rounded-2xl p-4 sm:p-5 border border-white/80 transition-all duration-300 flex flex-col justify-between"
                    style={{ borderTop: `3px solid ${item.accent}` }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center shadow-xs"
                        style={{ backgroundColor: `${item.accent}33` }}
                      >
                        <IconComponent className="w-4 h-4 text-pastel-plum" />
                      </div>
                      <h4 className="font-display font-bold text-base text-pastel-plum">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-pastel-plumMuted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
