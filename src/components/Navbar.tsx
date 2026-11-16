import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Menu, X, Sparkles, Send } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/80 backdrop-blur-xl shadow-soft-sm border-b border-pastel-lavender/30'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with YV monogram */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex items-center gap-3 select-none"
            aria-label="Yashaswini V N - Home"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-pastel-lavender via-pastel-pink to-pastel-mint p-[2px] shadow-sm group-hover:shadow-glow-lavender transition-all duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-pastel-plum rounded-[14px] flex items-center justify-center">
                <span className="font-display font-extrabold text-lg text-transparent bg-clip-text bg-gradient-to-tr from-pastel-lavender to-pastel-pink tracking-tight">
                  YV
                </span>
              </div>
              {/* Subtle status dot */}
              <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-pastel-mint rounded-full border-2 border-white animate-pulse" />
            </div>

            <div className="flex flex-col">
              <span className="font-display font-bold text-lg text-pastel-plum tracking-tight group-hover:text-pastel-lavender transition-colors">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span className="text-xs font-medium text-pastel-plumMuted flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-pastel-pink" />
                Aspiring Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-pastel-lavender/25 shadow-soft-sm">
            {PORTFOLIO_DATA.navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-pastel-plum font-semibold bg-gradient-to-r from-pastel-lavender/30 via-pastel-pink/20 to-pastel-mint/30 shadow-xs'
                      : 'text-pastel-plumLight hover:text-pastel-plum hover:bg-white/80'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-pastel-lavender rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Direct CTA Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-pastel-plum bg-gradient-to-r from-pastel-lavender/40 via-pastel-pink/40 to-pastel-mint/40 hover:from-pastel-lavender hover:via-pastel-pink hover:to-pastel-mint border border-pastel-lavender/50 shadow-soft-sm hover:shadow-soft-md hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Send className="w-3.5 h-3.5 text-pastel-plum" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-2xl bg-white/80 border border-pastel-lavender/40 text-pastel-plum shadow-soft-sm hover:bg-white transition-all focus:outline-none focus:ring-2 focus:ring-pastel-lavender"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-pastel-plum" /> : <Menu className="w-5 h-5 text-pastel-plum" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-white/95 backdrop-blur-2xl border-b border-pastel-lavender/30 shadow-soft-lg animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-1.5 pt-2">
            {PORTFOLIO_DATA.navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-gradient-to-r from-pastel-lavender/30 to-pastel-pink/20 text-pastel-plum font-semibold border border-pastel-lavender/40'
                      : 'text-pastel-plumLight hover:text-pastel-plum hover:bg-pastel-bgBase'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-pastel-lavender" />}
                </a>
              );
            })}
            <div className="pt-3 border-t border-pastel-lavender/20 mt-2">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-pastel-plum bg-gradient-to-r from-pastel-lavender/50 via-pastel-pink/40 to-pastel-mint/50 shadow-soft-sm"
              >
                <Send className="w-4 h-4" />
                <span>Contact Yashaswini</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
