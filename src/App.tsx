import { useState, useEffect, lazy, Suspense } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { PhilosophyExperienceSection } from './components/sections/PhilosophyExperienceSection';
import { WritingPreviewSection } from './components/sections/WritingPreviewSection';
import { ContactFooterSection } from './components/sections/ContactFooterSection';

const WritersRoomPage = lazy(() =>
  import('./components/writing/WritersRoomPage').then((m) => ({ default: m.WritersRoomPage }))
);

export function App() {
  const [activeView, setActiveView] = useState<'home' | 'writing' | 'neurodrive'>('home');

  useEffect(() => {
    // Handle URL hash routing if present on load or hashchange
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#writing') {
        setActiveView('writing');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleOpenWriting = () => {
    setActiveView('writing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setActiveView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreProjects = () => {
    if (activeView !== 'home') {
      setActiveView('home');
      setTimeout(() => {
        const el = document.getElementById('projects');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-ivory-base text-ivory-text-primary selection:bg-ivory-accent/15 selection:text-ivory-text-primary">
      {/* Fixed Accessible Navbar */}
      <Navbar activeView={activeView} setActiveView={setActiveView} />

      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
        {activeView === 'home' && (
          <>
            {/* 01. Typographic Hero & Subordinate 3D Stage */}
            <HeroSection
              onExploreProjects={handleExploreProjects}
              onOpenWriting={handleOpenWriting}
            />

            {/* 02. Selected Engineering Systems (Graphite Inset) */}
            <ProjectsSection
              onOpenNeuroDriveCaseStudy={() => {
                const el = document.getElementById('projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* 03 & 04. Philosophy, Experience, Education & Rigor */}
            <PhilosophyExperienceSection />

            {/* 05 & 06. The Writer's Room Preview & Influences */}
            <WritingPreviewSection onOpenWriting={handleOpenWriting} />
          </>
        )}

        {activeView === 'writing' && (
          <Suspense
            fallback={
              <div className="min-h-screen bg-parchment-base flex items-center justify-center p-12">
                <div className="text-center space-y-3">
                  <span className="w-6 h-6 border-2 border-parchment-accent border-t-transparent rounded-full animate-spin inline-block" />
                  <p className="text-xs font-mono uppercase tracking-widest text-parchment-accent">
                    Entering The Writer's Room...
                  </p>
                </div>
              </div>
            }
          >
            <WritersRoomPage onBackToHome={handleBackToHome} />
          </Suspense>
        )}
      </main>

      {/* 07. Contact & Colophon */}
      <ContactFooterSection />
    </div>
  );
}

export default App;
