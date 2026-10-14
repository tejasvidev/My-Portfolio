import React, { lazy, Suspense } from 'react';
import { ArrowDown, ArrowRight, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

const SculptureCanvas = lazy(() =>
  import('../canvas/SculptureCanvas').then((m) => ({ default: m.SculptureCanvas }))
);

interface HeroSectionProps {
  onExploreProjects: () => void;
  onOpenWriting: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProjects,
  onOpenWriting,
}) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-ivory-base border-b border-ivory-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Primacy (7 Cols Desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8 z-10">
            
            {/* Identity Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-ivory-accent" />
              <p className="text-xs md:text-sm font-mono tracking-widest uppercase text-ivory-text-secondary font-medium">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Primary Focal Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-ivory-text-primary leading-[1.08]">
              Between logic <br />
              <span className="italic font-normal text-ivory-text-primary/90">and language.</span>
            </h1>

            {/* Core Architectural Thought */}
            <div className="space-y-3 max-w-xl">
              <p className="text-lg md:text-xl font-serif text-ivory-text-primary/90 leading-snug">
                {PERSONAL_INFO.heroSubtext}
              </p>
              <p className="text-sm md:text-base text-ivory-text-secondary font-sans leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Clear Primary Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {/* 1. View Projects Action */}
              <button
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-ivory-text-primary text-ivory-base text-sm font-medium hover:bg-ivory-accent transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-ivory-accent"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              {/* 2. Read Writing Action */}
              <button
                onClick={onOpenWriting}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded border border-parchment-border bg-parchment-base text-parchment-text-primary text-sm font-medium hover:border-parchment-accent hover:text-parchment-accent transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-parchment-accent"
              >
                <span>Read My Writing</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* 3. Resume Action */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs font-mono uppercase tracking-wider text-ivory-text-secondary hover:text-ivory-text-primary transition-colors focus:outline-none"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume / CV</span>
              </a>
            </div>

            {/* Verified Quick Meta */}
            <div className="pt-4 border-t border-ivory-border/70 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-ivory-text-muted">
              <span>ABES EC CSE '27 (CGPA 8.94)</span>
              <span>•</span>
              <span>Caelius Consulting</span>
              <span>•</span>
              <span>900+ Algorithm Problems</span>
            </div>
          </div>

          {/* Right Column: Signature 3D Sculpture Stage (5 Cols Desktop) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="w-full max-w-md aspect-square rounded-2xl bg-gradient-to-b from-ivory-surface/60 to-transparent border border-ivory-border/40 p-2 flex items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.03)]">
              <Suspense
                fallback={
                  <div className="w-full h-full flex flex-col items-center justify-center text-ivory-text-muted">
                    <svg
                      className="w-36 h-36 opacity-40 animate-pulse"
                      viewBox="0 0 100 100"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    >
                      <polygon points="50,15 80,32 80,68 50,85 20,68 20,32" strokeDasharray="3 3" />
                      <path d="M25,50 Q40,25 50,50 T75,50" stroke="#3B49DF" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                }
              >
                <SculptureCanvas className="w-full h-full" />
              </Suspense>
            </div>
            <div className="mt-3 text-center">
              <p className="text-[11px] font-mono uppercase tracking-widest text-ivory-text-muted">
                The Mobius of Logic & Lyric
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
