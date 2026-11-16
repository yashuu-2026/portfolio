import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FBF9FE] text-pastel-plum flex flex-col relative selection:bg-pastel-lavender/30 selection:text-pastel-plum">
      
      {/* Global subtle ambient mesh lighting background */}
      <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-pastel-lavender/15 blur-[120px]" />
        <div className="absolute top-[30%] -right-[10%] w-[45vw] h-[45vw] rounded-full bg-pastel-pink/15 blur-[120px]" />
        <div className="absolute top-[65%] -left-[10%] w-[45vw] h-[45vw] rounded-full bg-pastel-mint/15 blur-[120px]" />
        <div className="absolute -bottom-[10%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-pastel-cream/25 blur-[120px]" />
      </div>

      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
      
    </div>
  );
};

export default App;
