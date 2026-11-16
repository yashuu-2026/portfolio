import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { SkillItem } from '../data/portfolioData';
import { Code2, CheckCircle2, Layers, Sparkles } from 'lucide-react';

// Custom clean SVG icons for the 4 core languages
const TechIcon: React.FC<{ type: SkillItem['iconName']; accent: string }> = ({ type, accent }) => {
  switch (type) {
    case 'Python':
      return (
        <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
          <path
            d="M24 4C14 4 15 8.4 15 8.4V13h9.2v2.8H10.8C6.4 15.8 4 19.4 4 24c0 4.6 3.6 7.6 8 7.6h4.6V27c0-4 3.4-7.4 7.4-7.4H33V13s.8-9-9-9zm-4.6 4.4a1.8 1.8 0 110 3.6 1.8 1.8 0 010-3.6z"
            fill={accent}
          />
          <path
            d="M24 44c10 0 9-4.4 9-4.4V35h-9.2v-2.8h13.4c4.4 0 6.8-3.6 6.8-8.2 0-4.6-3.6-7.6-8-7.6h-4.6V21c0 4-3.4 7.4-7.4 7.4H15V35s-.8 9 9 9zm4.6-4.4a1.8 1.8 0 110-3.6 1.8 1.8 0 010 3.6z"
            fill="#29243A"
          />
        </svg>
      );
    case 'C':
      return (
        <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
          <circle cx="24" cy="24" r="20" stroke={accent} strokeWidth="3" strokeDasharray="95 30" />
          <text
            x="24"
            y="31"
            fontFamily="'Outfit', sans-serif"
            fontWeight="800"
            fontSize="22"
            fill="#29243A"
            textAnchor="middle"
          >
            C
          </text>
        </svg>
      );
    case 'Cpp':
      return (
        <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
          <circle cx="24" cy="24" r="20" stroke={accent} strokeWidth="3" />
          <text
            x="19"
            y="31"
            fontFamily="'Outfit', sans-serif"
            fontWeight="800"
            fontSize="20"
            fill="#29243A"
            textAnchor="middle"
          >
            C
          </text>
          <text
            x="34"
            y="26"
            fontFamily="'Outfit', sans-serif"
            fontWeight="800"
            fontSize="14"
            fill={accent}
            textAnchor="middle"
          >
            ++
          </text>
        </svg>
      );
    case 'Java':
      return (
        <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
          <path
            d="M18 36c6 3 14 3 20 0-4 1.5-12 1.5-20 0z"
            fill="#29243A"
          />
          <path
            d="M14 40c10 4 22 4 30 0-7 2-20 2-30 0z"
            fill={accent}
          />
          <path
            d="M26 10c-3 4-2 7 2 9-5-1-8-4-2-9z"
            fill={accent}
          />
          <path
            d="M21 16c-2 3-1 5 1 7-4-1-6-3-1-7z"
            fill="#29243A"
          />
          <path
            d="M16 26c4 1 8 1 12 0 1 3-3 5-8 5-4 0-5-2-4-5z"
            stroke="#29243A"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      );
    default:
      return <Code2 className="w-8 h-8 text-pastel-plum" />;
  }
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white/40">
      {/* Pastel background blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-pastel-lavender/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-pastel-mint/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pastel-pink/25 border border-pastel-pink/40 text-pastel-plum text-xs sm:text-sm font-bold tracking-wide uppercase mb-3">
            <Code2 className="w-3.5 h-3.5 text-pastel-plum" />
            <span>Core Competencies</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-pastel-plum tracking-tight mb-4">
            My Technical Skills
          </h2>
          <p className="text-base sm:text-lg text-pastel-plumMuted">
            A focused foundation in four versatile programming languages, built on rigorous problem-solving and software engineering principles.
          </p>
        </div>

        {/* 4 Attractive Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PORTFOLIO_DATA.skills.map((skill) => (
            <div
              key={skill.id}
              className="glass-card glass-card-hover rounded-3xl p-6 flex flex-col justify-between border border-white/90 relative overflow-hidden group"
              style={{
                boxShadow: `0 10px 30px -10px ${skill.accentColor}33`
              }}
            >
              {/* Card Top Accent Line */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 group-hover:h-2"
                style={{ backgroundColor: skill.accentColor }}
              />

              <div>
                {/* Icon & Language Header */}
                <div className="flex items-center justify-between mb-4 mt-2">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center p-2.5 transition-transform duration-300 group-hover:scale-110 shadow-soft-sm"
                    style={{ backgroundColor: skill.bgColor }}
                  >
                    <TechIcon type={skill.iconName} accent={skill.accentColor} />
                  </div>
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full border"
                    style={{
                      backgroundColor: `${skill.accentColor}25`,
                      borderColor: `${skill.accentColor}55`,
                      color: '#29243A'
                    }}
                  >
                    Core Language
                  </span>
                </div>

                {/* Language Name & Subtitle */}
                <h3 className="font-display text-2xl font-extrabold text-pastel-plum mb-1 group-hover:text-pastel-plumLight transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs font-semibold text-pastel-plumMuted mb-4">
                  {skill.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-pastel-plumLight leading-relaxed mb-5">
                  {skill.description}
                </p>
              </div>

              {/* Highlights & Strengths (No Fake Percentages) */}
              <div className="pt-4 border-t border-pastel-lavender/20 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-pastel-plumMuted block mb-2">
                  Key Strengths
                </span>
                {skill.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-2 text-xs font-medium text-pastel-plum">
                    <CheckCircle2
                      className="w-3.5 h-3.5 flex-shrink-0"
                      style={{ color: skill.accentColor }}
                    />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Foundational Competencies Banner */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-pastel-lavender/40 shadow-soft-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Layers className="w-5 h-5 text-pastel-lavender" />
                <h3 className="font-display text-lg sm:text-xl font-bold text-pastel-plum">
                  Foundational Software Competencies
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-pastel-plumMuted max-w-xl">
                Fundamental computer science concepts practiced throughout academic coursework and hands-on coding exercises.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 sm:max-w-md">
              {PORTFOLIO_DATA.additionalCompetencies.map((comp) => (
                <span
                  key={comp}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-pastel-plum bg-white/80 border border-pastel-lavender/30 shadow-xs hover:border-pastel-lavender hover:scale-105 transition-all"
                >
                  <Sparkles className="w-3 h-3 text-pastel-pink" />
                  {comp}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
