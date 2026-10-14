import React, { useState } from 'react';
import { ArrowLeft, BookOpen, ArrowUpRight, Feather, Sparkles, ExternalLink } from 'lucide-react';
import { POEMS, FEATURED_BOOK, LITERARY_INFLUENCES, PERSONAL_INFO } from '../../data/portfolioData';

interface WritersRoomPageProps {
  onBackToHome: () => void;
}

export const WritersRoomPage: React.FC<WritersRoomPageProps> = ({ onBackToHome }) => {
  const [filter, setFilter] = useState<'all' | 'en' | 'hi'>('all');
  const [selectedPoemId, setSelectedPoemId] = useState<string | null>(null);

  const filteredPoems = POEMS.filter((p) => {
    if (filter === 'all') return true;
    return p.language === filter;
  });

  const activePoem = POEMS.find((p) => p.id === selectedPoemId);

  return (
    <main className="min-h-screen bg-parchment-base text-parchment-text-primary pt-24 pb-32">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Navigation Breadcrumb / Return */}
        <div className="pb-12 flex items-center justify-between border-b border-parchment-border">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-parchment-accent hover:underline font-semibold focus:outline-none"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-parchment-text-muted">
            <span>The Writer's Room</span>
            <span>·</span>
            <span>Sanctuary Mode</span>
          </div>
        </div>

        {/* Hero Banner for The Writer's Room */}
        <div className="py-16 space-y-4 max-w-2xl border-b border-parchment-border">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-parchment-accent">
            <Feather className="w-3.5 h-3.5" />
            <span>Literary Archive & Reading Room</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-parchment-text-primary tracking-tight">
            The cadence of thought.
          </h1>
          <p className="text-base md:text-lg font-serif italic text-parchment-text-secondary leading-relaxed">
            "Engineering gives ideas structure; literature gives them meaning."
          </p>
          <p className="text-sm font-sans text-parchment-text-secondary leading-relaxed">
            A quiet, book-like sanctuary dedicated to poetry and prose in English and Hindi. Here, lines are given breathing room, stanzas follow their authentic lineation, and thought is freed from algorithmic velocity.
          </p>

          <div className="pt-2 flex items-center gap-4 text-xs font-mono">
            <a
              href={PERSONAL_INFO.allPoetry}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-parchment-accent hover:underline font-medium"
            >
              <span>Verified Archive on AllPoetry</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Featured Publication Spotlight */}
        <div className="py-12 border-b border-parchment-border">
          <div className="border border-parchment-border rounded-2xl p-8 md:p-10 bg-parchment-card shadow-[0_10px_30px_rgba(0,0,0,0.02)] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-parchment-accent font-semibold flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Featured Publication</span>
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-parchment-text-primary italic">
                "{FEATURED_BOOK.title}"
              </h2>
              <p className="text-xs font-mono text-parchment-text-muted">By Tejasvi Dev</p>
              <p className="text-sm font-sans text-parchment-text-secondary leading-relaxed pt-1">
                {FEATURED_BOOK.description}
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <a
                href={FEATURED_BOOK.allPoetryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded border border-parchment-accent bg-parchment-accent text-white text-xs font-mono uppercase tracking-wider hover:bg-parchment-accent-hover transition-all shadow-sm"
              >
                <span>Read on AllPoetry</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Poetry Reading Section & Filter Tabs */}
        <div className="py-12 border-b border-parchment-border space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-parchment-text-primary">
                Poetry Archive & Stanza Index
              </h2>
              <p className="text-xs font-mono text-parchment-text-muted mt-1">
                Candidate titles from author's archive. Select a piece to view reader details.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 p-1 rounded-lg bg-parchment-surface border border-parchment-border self-start">
              <button
                onClick={() => setFilter('all')}
                className={`text-xs font-mono px-3 py-1.5 rounded transition-all ${
                  filter === 'all'
                    ? 'bg-parchment-card text-parchment-accent shadow-sm font-semibold'
                    : 'text-parchment-text-secondary hover:text-parchment-text-primary'
                }`}
              >
                All Works
              </button>
              <button
                onClick={() => setFilter('en')}
                className={`text-xs font-mono px-3 py-1.5 rounded transition-all ${
                  filter === 'en'
                    ? 'bg-parchment-card text-parchment-accent shadow-sm font-semibold'
                    : 'text-parchment-text-secondary hover:text-parchment-text-primary'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setFilter('hi')}
                className={`text-xs font-mono px-3 py-1.5 rounded transition-all ${
                  filter === 'hi'
                    ? 'bg-parchment-card text-parchment-accent shadow-sm font-semibold'
                    : 'text-parchment-text-secondary hover:text-parchment-text-primary'
                }`}
              >
                हिंदी (Devanagari)
              </button>
            </div>
          </div>

          {/* Grid of Candidate Poems */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredPoems.map((poem) => (
              <div
                key={poem.id}
                onClick={() => setSelectedPoemId(poem.id === selectedPoemId ? null : poem.id)}
                className={`p-6 rounded-xl border transition-all cursor-pointer text-left space-y-3 ${
                  selectedPoemId === poem.id
                    ? 'border-parchment-accent bg-parchment-card shadow-md'
                    : 'border-parchment-border bg-parchment-card/70 hover:bg-parchment-card hover:border-parchment-accent/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-parchment-surface border border-parchment-border text-parchment-accent">
                    {poem.language === 'hi' ? 'हिंदी कविता' : 'English Verse'}
                  </span>
                  <span className="text-xs font-mono text-parchment-text-muted">
                    {poem.status}
                  </span>
                </div>

                <h3 className={`text-xl font-serif text-parchment-text-primary ${
                  poem.script === 'devanagari' ? 'lang-hi font-medium' : ''
                }`}>
                  {poem.title}
                </h3>

                <p className="text-xs text-parchment-text-secondary font-sans">
                  {poem.previewNote}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {poem.themes.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-parchment-surface text-parchment-text-muted">
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="pt-2 border-t border-parchment-border flex items-center justify-between text-xs font-mono">
                  <span className="text-parchment-accent underline">
                    {selectedPoemId === poem.id ? 'Close Reader' : 'Open Reading Card'}
                  </span>
                  {poem.externalUrl && (
                    <a
                      href={poem.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-parchment-text-muted hover:text-parchment-accent inline-flex items-center gap-1"
                    >
                      <span>AllPoetry</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Dedicated Reading Card View (Max Width 640px) */}
          {activePoem && (
            <div className="mt-8 p-8 md:p-12 border-2 border-parchment-accent/30 rounded-2xl bg-parchment-card max-w-reading mx-auto shadow-lg space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-parchment-border pb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-parchment-accent font-semibold">
                  Distraction-Free Sanctuary
                </span>
                <button
                  onClick={() => setSelectedPoemId(null)}
                  className="text-xs font-mono text-parchment-text-muted hover:text-parchment-accent"
                >
                  ✕ Close Reader
                </button>
              </div>

              <div className="space-y-3 text-center">
                <h3 className={`font-serif text-3xl md:text-4xl text-parchment-text-primary ${
                  activePoem.script === 'devanagari' ? 'lang-hi font-medium' : ''
                }`}>
                  {activePoem.title}
                </h3>
                <p className="text-xs font-mono text-parchment-text-muted">By Tejasvi Dev</p>
              </div>

              <div className="py-6 border-y border-parchment-border space-y-4">
                <p className="text-sm font-sans text-parchment-text-secondary italic text-center">
                  "Candidate title from Tejasvi Dev's confirmed poetry archive."
                </p>
                <div className="p-4 rounded-lg bg-parchment-surface border border-parchment-border text-xs text-parchment-text-secondary leading-relaxed">
                  <p className="font-semibold font-mono text-parchment-text-primary mb-1">Authentic Stanza Policy:</p>
                  To respect authorial integrity and the project directive, poem stanzas are not simulated or generated. The complete, verified verse with authentic punctuation and lineation is hosted on the author's official AllPoetry portal.
                </div>
              </div>

              <div className="flex justify-center pt-2">
                <a
                  href={activePoem.externalUrl || PERSONAL_INFO.allPoetry}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded bg-parchment-accent text-white font-mono text-xs uppercase tracking-wider hover:bg-parchment-accent-hover transition-all shadow"
                >
                  <span>Read Full Authentic Verse on AllPoetry</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Ideas & Influences Full Section */}
        <div className="py-16 space-y-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-parchment-accent font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Literary Heritage & Dialogue</span>
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-parchment-text-primary">
              Ideas and influences.
            </h2>
            <p className="text-sm font-sans text-parchment-text-secondary leading-relaxed">
              Reflections on eight formative literary voices across Western realism, Romanticism, Hindi poetry, and Urdu ghazals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LITERARY_INFLUENCES.map((inf) => (
              <div
                key={inf.id}
                className="border border-parchment-border rounded-xl p-8 bg-parchment-card space-y-4"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-parchment-accent font-semibold">{inf.author}</span>
                  <span className="text-parchment-text-muted">{inf.era}</span>
                </div>

                <div className="space-y-1">
                  <p className="text-xs font-mono text-parchment-text-secondary">
                    <strong className="text-parchment-text-primary">Core Inquiry:</strong> {inf.philosophicalFocus}
                  </p>
                  <p className="text-xs font-mono text-parchment-accent">
                    <strong className="text-parchment-text-primary">Connecting Themes:</strong> {inf.connectingThemes}
                  </p>
                </div>

                <p className="text-sm font-sans text-parchment-text-secondary leading-relaxed pt-2 border-t border-parchment-border">
                  "{inf.reflection}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Colophon & Return */}
        <div className="pt-12 border-t border-parchment-border flex items-center justify-between text-xs font-mono text-parchment-text-muted">
          <span>The Writer's Room · Tejasvi Dev</span>
          <button
            onClick={onBackToHome}
            className="text-parchment-accent hover:underline font-semibold"
          >
            ↑ Back to Top of Page
          </button>
        </div>

      </div>
    </main>
  );
};
