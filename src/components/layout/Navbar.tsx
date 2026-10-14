import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface NavbarProps {
  activeView: 'home' | 'writing' | 'neurodrive';
  setActiveView: (view: 'home' | 'writing' | 'neurodrive') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeView, setActiveView }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateTo = (view: 'home' | 'writing' | 'neurodrive', hash?: string) => {
    setActiveView(view);
    setMobileMenuOpen(false);
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-ivory-accent focus:text-white focus:rounded focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      <header className="fixed top-0 left-0 right-0 z-40 bg-ivory-base/85 backdrop-blur-md border-b border-ivory-border transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Brand Identity */}
          <button
            onClick={() => navigateTo('home')}
            className="flex items-center gap-2 group text-left focus:outline-none"
            aria-label="Tejasvi Dev - Return to homepage"
          >
            <span className="font-serif text-xl tracking-tight text-ivory-text-primary font-bold group-hover:text-ivory-accent transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-ivory-accent" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            <button
              onClick={() => navigateTo('home', '#projects')}
              className="text-sm font-medium text-ivory-text-secondary hover:text-ivory-text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => navigateTo('home', '#philosophy')}
              className="text-sm font-medium text-ivory-text-secondary hover:text-ivory-text-primary transition-colors"
            >
              Philosophy
            </button>
            <button
              onClick={() => navigateTo('home', '#experience')}
              className="text-sm font-medium text-ivory-text-secondary hover:text-ivory-text-primary transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => navigateTo('writing')}
              className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                activeView === 'writing'
                  ? 'text-parchment-accent font-semibold'
                  : 'text-ivory-text-secondary hover:text-ivory-text-primary'
              }`}
            >
              Writer's Room
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-parchment-surface text-parchment-accent border border-parchment-border">
                Literary
              </span>
            </button>
            <button
              onClick={() => navigateTo('home', '#contact')}
              className="text-sm font-medium text-ivory-text-secondary hover:text-ivory-text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Recruiter Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('home', '#contact');
              }}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium tracking-wide uppercase px-3.5 py-2 rounded border border-ivory-border bg-ivory-surface text-ivory-text-primary hover:border-ivory-accent hover:text-ivory-accent transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume / Inquire
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-ivory-text-primary focus:outline-none focus:ring-2 focus:ring-ivory-accent rounded"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-ivory-base border-b border-ivory-border px-6 py-6 space-y-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => navigateTo('home', '#projects')}
                className="text-left py-2 text-base font-medium text-ivory-text-primary hover:text-ivory-accent"
              >
                Selected Projects
              </button>
              <button
                onClick={() => navigateTo('home', '#philosophy')}
                className="text-left py-2 text-base font-medium text-ivory-text-primary hover:text-ivory-accent"
              >
                Philosophy
              </button>
              <button
                onClick={() => navigateTo('home', '#experience')}
                className="text-left py-2 text-base font-medium text-ivory-text-primary hover:text-ivory-accent"
              >
                Experience & Education
              </button>
              <button
                onClick={() => navigateTo('writing')}
                className="text-left py-2 text-base font-medium text-parchment-accent flex items-center justify-between"
              >
                <span>The Writer's Room</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigateTo('home', '#contact')}
                className="text-left py-2 text-base font-medium text-ivory-text-primary hover:text-ivory-accent"
              >
                Contact & Profiles
              </button>
            </div>
            <div className="pt-4 border-t border-ivory-border">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('home', '#contact');
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded bg-ivory-accent text-white font-medium text-sm"
              >
                <FileText className="w-4 h-4" />
                Resume / Contact
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
