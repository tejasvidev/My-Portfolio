import React from 'react';
import { BookOpen, ArrowUpRight, Feather, Sparkles } from 'lucide-react';
import { FEATURED_BOOK, POEMS, LITERARY_INFLUENCES, PERSONAL_INFO } from '../../data/portfolioData';

interface WritingPreviewSectionProps {
  onOpenWriting: () => void;
}

export const WritingPreviewSection: React.FC<WritingPreviewSectionProps> = ({ onOpenWriting }) => {
  return (
    <div id="writing-preview" className="bg-parchment-base text-parchment-text-primary border-b border-parchment-border">
      
      {/* 05 / The Writer's Room & Book Preview */}
      <section className="py-24 md:py-32 border-b border-parchment-border">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="border-b border-parchment-border pb-8 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-parchment-accent font-semibold flex items-center gap-2">
                <Feather className="w-3.5 h-3.5" />
                <span>04 / The Writer's Room Preview</span>
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-normal text-parchment-text-primary">
                Literature gives ideas meaning.
              </h2>
            </div>
            
            <button
              onClick={onOpenWriting}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-parchment-accent bg-parchment-accent text-white text-xs font-mono uppercase tracking-wider hover:bg-parchment-accent-hover transition-all self-start md:self-auto shadow-sm"
            >
              <span>Enter The Full Writer's Room</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Featured Publication: Falling For You (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border border-parchment-border rounded-xl p-8 bg-parchment-card shadow-[0_10px_30px_rgba(0,0,0,0.02)] space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-parchment-accent font-semibold flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" />
                    <span>Featured Publication</span>
                  </span>
                  <span className="text-xs font-mono text-parchment-text-muted">Poetry & Prose</span>
                </div>

                <div className="space-y-2 pt-2">
                  <h3 className="font-serif text-3xl text-parchment-text-primary italic">
                    "{FEATURED_BOOK.title}"
                  </h3>
                  <p className="text-xs font-mono text-parchment-text-secondary">
                    By Tejasvi Dev
                  </p>
                </div>

                <p className="text-sm font-sans text-parchment-text-secondary leading-relaxed">
                  {FEATURED_BOOK.description}
                </p>

                <div className="pt-4 border-t border-parchment-border flex items-center justify-between">
                  <a
                    href={FEATURED_BOOK.allPoetryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-parchment-accent hover:underline font-medium"
                  >
                    <span>View on AllPoetry Platform</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-[11px] font-mono text-parchment-text-muted">Verified</span>
                </div>
              </div>

              {/* Literary Platform Link Callout */}
              <div className="p-5 rounded-lg border border-parchment-border bg-parchment-surface/60 flex items-center justify-between text-xs font-mono">
                <span className="text-parchment-text-secondary">AllPoetry Author Profile:</span>
                <a
                  href={PERSONAL_INFO.allPoetry}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-parchment-accent hover:underline inline-flex items-center gap-1"
                >
                  <span>allpoetry.com/Tejasvi_Dev</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Right Column: Selected Poetry Titles & Stanza Previews (7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between pb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-parchment-text-muted">
                  Candidate Stanza Archives (Bilingual)
                </span>
                <span className="text-[11px] font-mono text-parchment-accent">
                  Preserving Original Cadence
                </span>
              </div>

              <div className="space-y-3">
                {POEMS.map((poem) => (
                  <div
                    key={poem.id}
                    onClick={onOpenWriting}
                    className="p-5 rounded-lg border border-parchment-border bg-parchment-card/80 hover:bg-parchment-card hover:border-parchment-accent/40 transition-all cursor-pointer group flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-base md:text-lg font-serif group-hover:text-parchment-accent transition-colors ${
                          poem.script === 'devanagari' ? 'lang-hi font-medium' : ''
                        }`}>
                          {poem.title}
                        </span>
                        <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border border-parchment-border text-parchment-text-muted">
                          {poem.language === 'hi' ? 'Hindi' : 'English'}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 text-[11px] font-mono text-parchment-text-muted">
                        {poem.themes.map((th) => (
                          <span key={th}>#{th}</span>
                        ))}
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-parchment-text-muted group-hover:text-parchment-accent">
                      <span>Read in Sanctuary</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[11px] font-mono text-parchment-text-muted pt-2 text-right">
                * Candidate titles from author's verified archive. Stanza lines render in dedicated sanctuary.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 06 / Literary Influences & Ancestry */}
      <section id="influences" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="border-b border-parchment-border pb-8 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-parchment-accent font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>05 / Literary Lineage</span>
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-normal text-parchment-text-primary">
                Ideas & influences.
              </h2>
            </div>
            <p className="text-sm font-sans text-parchment-text-secondary max-w-md">
              Connecting themes across Western realism, Romanticism, Hindi Chhayavad, and Urdu progressive ghazals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LITERARY_INFLUENCES.map((inf) => (
              <div
                key={inf.id}
                className="border border-parchment-border rounded-xl p-6 bg-parchment-card space-y-4 hover:border-parchment-accent/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-parchment-text-muted">
                    <span className="text-parchment-accent font-semibold">{inf.era}</span>
                  </div>
                  <h3 className="font-serif text-xl text-parchment-text-primary font-medium">{inf.author}</h3>
                  <p className="text-xs font-mono text-parchment-accent/90">{inf.philosophicalFocus}</p>
                  <p className="text-xs font-sans text-parchment-text-secondary leading-relaxed pt-2">
                    {inf.reflection}
                  </p>
                </div>

                <div className="pt-3 border-t border-parchment-border text-[11px] font-mono text-parchment-text-muted">
                  Themes: {inf.connectingThemes}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
