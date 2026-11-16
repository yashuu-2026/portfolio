import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative bg-white/70 border-t border-pastel-lavender/30 pt-16 pb-12 overflow-hidden">
      {/* Ambient background soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-r from-pastel-lavender/20 via-pastel-pink/20 to-pastel-mint/20 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-pastel-lavender/20">
          
          {/* Logo & Identity */}
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pastel-lavender via-pastel-pink to-pastel-mint p-[2px] shadow-soft-sm">
              <div className="w-full h-full bg-pastel-plum rounded-[14px] flex items-center justify-center">
                <span className="font-display font-black text-lg text-pastel-cream tracking-tight">
                  {PORTFOLIO_DATA.personal.initials}
                </span>
              </div>
            </div>

            <div>
              <h3 className="font-display font-extrabold text-xl text-pastel-plum tracking-tight">
                {PORTFOLIO_DATA.personal.name}
              </h3>
              <p className="text-xs text-pastel-plumMuted font-medium flex items-center gap-1">
                <span>{PORTFOLIO_DATA.personal.role}</span>
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap justify-center items-center gap-6">
            {PORTFOLIO_DATA.navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs sm:text-sm font-semibold text-pastel-plumLight hover:text-pastel-plum hover:underline underline-offset-4 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-xl bg-white border border-pastel-lavender/40 shadow-xs flex items-center justify-center text-pastel-plum hover:bg-pastel-lavender/20 hover:scale-110 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-xl bg-white border border-pastel-lavender/40 shadow-xs flex items-center justify-center text-pastel-plum hover:bg-pastel-pink/20 hover:scale-110 transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              aria-label="Direct Email"
              className="w-10 h-10 rounded-xl bg-white border border-pastel-lavender/40 shadow-xs flex items-center justify-center text-pastel-plum hover:bg-pastel-mint/30 hover:scale-110 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="group ml-2 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-pastel-lavender/40 to-pastel-pink/40 hover:from-pastel-lavender/70 hover:to-pastel-pink/70 border border-pastel-lavender/50 text-pastel-plum text-xs font-bold shadow-soft-sm hover:scale-105 active:scale-95 transition-all"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-pastel-plumMuted gap-4">
          <p>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 font-medium">
            <span>Designed & Built with</span>
            <Heart className="w-3.5 h-3.5 text-pastel-pink fill-pastel-pink" />
            <span>and pastel aesthetic</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
