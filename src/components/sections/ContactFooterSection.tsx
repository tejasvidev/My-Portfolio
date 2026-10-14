import React, { useState } from 'react';
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GitHubIcon, LinkedInIcon } from '../ui/Icons';

export const ContactFooterSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="bg-ivory-base text-ivory-text-primary pt-24 pb-16 border-t border-ivory-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-ivory-border items-start">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-ivory-accent font-semibold block">
              06 / Direct Inquiries & Collaboration
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-ivory-text-primary tracking-tight">
              Let's build systems with structure & meaning.
            </h2>
            <p className="text-sm font-sans text-ivory-text-secondary leading-relaxed max-w-lg">
              Available for application engineering roles, computer vision collaborations, and literary discussions. For recruiters seeking immediate verification of technical credentials, the profiles and direct email are provided below.
            </p>

            {/* Email Action Card */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-ivory-accent text-white text-sm font-medium hover:bg-ivory-accent-hover transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-ivory-accent"
              >
                <Mail className="w-4 h-4" />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded border border-ivory-border bg-ivory-surface text-ivory-text-primary text-xs font-mono hover:border-ivory-accent transition-colors"
                aria-label="Copy email address"
              >
                {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-ivory-text-muted" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Verified Professional & Literary Gateways (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-wider text-ivory-text-muted block">
              Verified Platform Gateways
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg border border-ivory-border bg-ivory-surface hover:border-ivory-accent hover:bg-ivory-card transition-all group flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <GitHubIcon className="w-5 h-5 text-ivory-text-secondary group-hover:text-ivory-accent" />
                  <div>
                    <span className="text-sm font-medium text-ivory-text-primary block font-serif">GitHub</span>
                    <span className="text-xs font-mono text-ivory-text-muted">@tejasvidev</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-ivory-text-muted group-hover:text-ivory-accent" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg border border-ivory-border bg-ivory-surface hover:border-ivory-accent hover:bg-ivory-card transition-all group flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <LinkedInIcon className="w-5 h-5 text-ivory-text-secondary group-hover:text-ivory-accent" />
                  <div>
                    <span className="text-sm font-medium text-ivory-text-primary block font-serif">LinkedIn</span>
                    <span className="text-xs font-mono text-ivory-text-muted">/in/tejasvi-dev</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-ivory-text-muted group-hover:text-ivory-accent" />
              </a>

              <a
                href={PERSONAL_INFO.leetCode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg border border-ivory-border bg-ivory-surface hover:border-ivory-accent hover:bg-ivory-card transition-all group flex items-center justify-between"
              >
                <div>
                  <span className="text-sm font-medium text-ivory-text-primary block font-serif">LeetCode</span>
                  <span className="text-xs font-mono text-ivory-text-muted">@tejasvidev · 900+</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-ivory-text-muted group-hover:text-ivory-accent" />
              </a>

              <a
                href={PERSONAL_INFO.codeChef}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg border border-ivory-border bg-ivory-surface hover:border-ivory-accent hover:bg-ivory-card transition-all group flex items-center justify-between"
              >
                <div>
                  <span className="text-sm font-medium text-ivory-text-primary block font-serif">CodeChef</span>
                  <span className="text-xs font-mono text-ivory-text-muted">@tejasvi_2108</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-ivory-text-muted group-hover:text-ivory-accent" />
              </a>

              <a
                href={PERSONAL_INFO.allPoetry}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:col-span-2 p-4 rounded-lg border border-parchment-border bg-parchment-surface/50 hover:bg-parchment-surface transition-all group flex items-center justify-between"
              >
                <div>
                  <span className="text-sm font-medium text-parchment-text-primary block font-serif">AllPoetry Literary Archive</span>
                  <span className="text-xs font-mono text-parchment-text-muted">allpoetry.com/Tejasvi_Dev · Published Verse & Falling For You</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-parchment-accent" />
              </a>
            </div>
          </div>

        </div>

        {/* Colophon & Architectural Metadata */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-ivory-text-muted">
          <div>
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}</span>
            <span className="mx-2">·</span>
            <span>The Architecture of Thought</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px]">
            <span>Playfair Display & Inter</span>
            <span>·</span>
            <span>Noto Serif Devanagari</span>
            <span>·</span>
            <span>React & Three.js</span>
            <span>·</span>
            <span>Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
