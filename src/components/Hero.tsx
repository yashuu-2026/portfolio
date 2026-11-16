import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ThreeHeroCanvas } from './ThreeHeroCanvas';
import { ArrowDown, Send, Sparkles, Terminal, Code2, Cpu } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Soft Ambient Pastel Glows in Background */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-pastel-lavender/25 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-pastel-pink/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-pastel-mint/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pastel-cream/35 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Details (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Status / Welcome Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-pastel-lavender/40 shadow-soft-sm mb-6 backdrop-blur-md">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pastel-mint opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pastel-lavender"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-pastel-plum tracking-wide">
                Fresher • Open to Software Engineering Opportunities
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-pastel-plum leading-[1.12] mb-4">
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-pastel-plum via-[#694da8] to-[#924b81]">
                  {PORTFOLIO_DATA.personal.name}!
                </span>
                <span className="absolute bottom-1.5 left-0 w-full h-3 bg-gradient-to-r from-pastel-lavender/50 via-pastel-pink/40 to-pastel-mint/50 -rotate-1 rounded-sm -z-0" />
              </span>
            </h1>

            {/* Subtitle */}
            <div className="inline-flex items-center gap-2.5 mb-5 px-3 py-1 rounded-xl bg-pastel-lavender/15 border border-pastel-lavender/30">
              <Sparkles className="w-4 h-4 text-pastel-plum" />
              <p className="text-lg sm:text-xl font-bold text-pastel-plum tracking-tight">
                {PORTFOLIO_DATA.personal.role}
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-pastel-plumMuted leading-relaxed max-w-2xl mb-8 font-normal">
              {PORTFOLIO_DATA.personal.tagline}
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl font-bold text-base text-pastel-plum bg-gradient-to-r from-pastel-lavender via-pastel-pink to-pastel-mint shadow-soft-md hover:shadow-soft-lg hover:scale-105 active:scale-95 transition-all duration-300 border border-white/60"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 text-pastel-plum group-hover:translate-y-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl font-bold text-base text-pastel-plum bg-white/80 hover:bg-white border border-pastel-lavender/40 shadow-soft-sm hover:shadow-soft-md hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-md"
              >
                <Send className="w-4 h-4 text-pastel-plumLight" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Quick Programming Language Badges */}
            <div className="pt-4 border-t border-pastel-lavender/20 w-full">
              <p className="text-xs font-semibold uppercase tracking-wider text-pastel-plumMuted mb-3 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-pastel-lavender" />
                Core Programming Languages
              </p>
              <div className="flex flex-wrap gap-2.5">
                {PORTFOLIO_DATA.skills.map((s) => (
                  <span
                    key={s.id}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-white/70 border border-pastel-lavender/30 shadow-xs hover:scale-105 transition-transform"
                    style={{ borderLeftColor: s.accentColor, borderLeftWidth: '3px' }}
                  >
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: s.accentColor }} />
                    {s.name}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: 3D Interactive Canvas & Profile Badge (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Visual Glass Frame for 3D Elements */}
            <div className="relative w-full aspect-square max-w-[440px] rounded-3xl glass-card p-4 sm:p-6 shadow-soft-xl border border-white/80 flex flex-col items-center justify-center overflow-hidden">
              
              {/* Three.js Interactive 3D Canvas */}
              <div className="w-full h-full relative z-10">
                <ThreeHeroCanvas />
              </div>

              {/* Profile Card Overlay at bottom */}
              <div className="absolute bottom-4 left-4 right-4 z-20 bg-white/85 backdrop-blur-md rounded-2xl p-3 border border-pastel-lavender/35 shadow-soft-md flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Stylized Profile Avatar Placeholder with Initials */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-pastel-lavender via-pastel-pink to-pastel-mint p-0.5 shadow-sm">
                    <div className="w-full h-full bg-pastel-plum rounded-[10px] flex items-center justify-center">
                      <span className="font-display font-extrabold text-base text-pastel-cream">
                        YV
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-pastel-plum leading-tight">
                      Yashaswini V N
                    </h3>
                    <p className="text-xs text-pastel-plumMuted">
                      Computer Science Student
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex flex-col items-end">
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-pastel-mint/30 text-pastel-plum border border-pastel-mint">
                    Interactive 3D
                  </span>
                  <span className="text-[10px] text-pastel-plumMuted mt-0.5">
                    Move cursor to tilt
                  </span>
                </div>
              </div>

              {/* Small floating decorative badges */}
              <div className="absolute -top-3 -right-3 z-20 px-3 py-1.5 rounded-full bg-white/95 border border-pastel-pink/40 shadow-soft-sm flex items-center gap-1.5 text-xs font-bold text-pastel-plum animate-float-slow">
                <Cpu className="w-3.5 h-3.5 text-pastel-pink" />
                <span>Problem Solver</span>
              </div>

              <div className="absolute -bottom-2 -left-2 z-20 px-3 py-1.5 rounded-full bg-white/95 border border-pastel-mint/50 shadow-soft-sm flex items-center gap-1.5 text-xs font-bold text-pastel-plum animate-float-reverse">
                <Terminal className="w-3.5 h-3.5 text-pastel-mint" />
                <span>Clean Code</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
