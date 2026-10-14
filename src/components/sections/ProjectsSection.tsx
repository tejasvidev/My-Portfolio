import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp, Eye, Cpu, AlertTriangle, ShieldCheck } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import { GitHubIcon } from '../ui/Icons';

interface ProjectsSectionProps {
  onOpenNeuroDriveCaseStudy?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
  const [neuroDriveExpanded, setNeuroDriveExpanded] = useState(false);
  const neurodrive = PROJECTS.find((p) => p.id === 'neurodrive');
  const fishin = PROJECTS.find((p) => p.id === 'fishin');

  return (
    <section id="projects" className="py-24 md:py-32 bg-graphite-base text-graphite-text-primary border-b border-graphite-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Editorial Section Header */}
        <div className="border-b border-graphite-border pb-8 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-graphite-accent font-semibold">
              01 / Selected Engineering Systems
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal tracking-tight text-graphite-text-primary">
              Disciplined logic & computer vision.
            </h2>
          </div>
          <p className="text-sm font-sans text-graphite-text-secondary max-w-md">
            Academic computer vision prototypes, offline algorithmic pipelines, and responsive application engineering.
          </p>
        </div>

        {/* Project 01: NeuroDrive (Heroic Editorial Spotlight) */}
        {neurodrive && (
          <article className="border border-graphite-border rounded-2xl bg-graphite-surface/90 overflow-hidden mb-12 transition-all">
            <div className="p-8 md:p-12">
              
              {/* Meta Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-graphite-border">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-mono text-graphite-accent font-light">01</span>
                  <span className="text-xs font-mono uppercase px-2.5 py-1 rounded bg-graphite-accent/15 text-graphite-accent border border-graphite-accent/25">
                    Featured Computer Vision Case Study
                  </span>
                  <span className="text-xs font-mono uppercase px-2.5 py-1 rounded bg-white/5 text-graphite-text-secondary border border-graphite-border">
                    Academic Research Prototype
                  </span>
                </div>
                
                {neurodrive.githubUrl && (
                  <a
                    href={neurodrive.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-graphite-accent hover:text-graphite-accent-hover transition-colors"
                  >
                    <GitHubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Title & Core Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="font-serif text-3xl md:text-4xl text-graphite-text-primary tracking-tight">
                    NeuroDrive: Real-Time Driver Fatigue & Drowsiness Detection
                  </h3>
                  <p className="text-base text-graphite-text-secondary leading-relaxed font-sans">
                    {neurodrive.summary}
                  </p>
                  
                  {/* Verified Tech Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {neurodrive.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3 py-1.5 rounded-md bg-graphite-card border border-graphite-border text-graphite-text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* System Specs Column */}
                <div className="lg:col-span-5 bg-graphite-card/80 border border-graphite-border rounded-xl p-6 space-y-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-graphite-text-muted block">
                    Verified Execution Metrics
                  </span>
                  <div className="grid grid-cols-2 gap-4">
                    {neurodrive.metrics?.map((m) => (
                      <div key={m.label} className="space-y-1">
                        <span className="text-xs text-graphite-text-muted block font-sans">{m.label}</span>
                        <span className="text-sm font-mono text-graphite-text-primary font-medium">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Architecture Toggle Action */}
                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => setNeuroDriveExpanded(!neuroDriveExpanded)}
                      className="inline-flex items-center gap-2 text-xs font-mono text-graphite-accent hover:underline py-1"
                    >
                      <span>{neuroDriveExpanded ? 'Hide Architecture Breakdown' : 'Expand Mathematical Pipeline & Limitations'}</span>
                      {neuroDriveExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Expandable Technical Pipeline & Limitations */}
              {neuroDriveExpanded && neurodrive.caseStudy && (
                <div className="mt-6 pt-8 border-t border-graphite-border space-y-8 animate-fadeIn">
                  
                  {/* Architecture Diagram Steps */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-graphite-accent flex items-center gap-2">
                      <Cpu className="w-4 h-4" />
                      <span>End-to-End Pipeline Architecture</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                      {neurodrive.caseStudy.technicalPipeline.map((p) => (
                        <div
                          key={p.step}
                          className="p-4 rounded-lg bg-graphite-card border border-graphite-border text-xs space-y-2 relative"
                        >
                          <span className="font-mono text-graphite-accent font-semibold block">{p.step}</span>
                          <p className="text-graphite-text-secondary leading-normal">{p.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mathematical Foundations */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-graphite-accent flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>Mathematical Foundations</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {neurodrive.caseStudy.mathematicalFoundations.map((math) => (
                        <div key={math.formulaName} className="p-4 rounded-lg bg-graphite-card border border-graphite-border space-y-2">
                          <span className="text-xs font-mono text-graphite-text-primary font-medium block">
                            {math.formulaName}
                          </span>
                          <code className="text-[11px] font-mono text-graphite-accent bg-black/40 px-2 py-1 rounded block overflow-x-auto">
                            {math.formulaText}
                          </code>
                          <p className="text-xs text-graphite-text-secondary leading-relaxed">{math.explanation}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Engineering Honesty: Limitations & Roadmap */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    
                    {/* Known Limitations */}
                    <div className="p-5 rounded-lg bg-red-950/20 border border-red-500/20 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-300">
                        <AlertTriangle className="w-4 h-4 text-red-400" />
                        <span>Known Technical Limitations (Scope)</span>
                      </div>
                      <ul className="space-y-2 text-xs text-graphite-text-secondary list-disc list-inside">
                        {neurodrive.caseStudy.limitations.map((lim, i) => (
                          <li key={i} className="leading-relaxed">{lim}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Future Improvements */}
                    <div className="p-5 rounded-lg bg-graphite-card border border-graphite-border space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-graphite-accent">
                        <ShieldCheck className="w-4 h-4 text-graphite-accent" />
                        <span>Proposed Future Improvements</span>
                      </div>
                      <ul className="space-y-2 text-xs text-graphite-text-secondary list-disc list-inside">
                        {neurodrive.caseStudy.futureRoadmap.map((road, i) => (
                          <li key={i} className="leading-relaxed">{road}</li>
                        ))}
                      </ul>
                    </div>

                  </div>

                </div>
              )}

            </div>
          </article>
        )}

        {/* Project 02: Fishin' */}
        {fishin && (
          <article className="border border-graphite-border rounded-xl bg-graphite-surface/60 p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-graphite-border-active transition-all">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="text-xl font-mono text-graphite-text-muted">02</span>
                <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-graphite-text-secondary border border-graphite-border">
                  Application Engineering
                </span>
              </div>
              <h3 className="font-serif text-2xl text-graphite-text-primary">{fishin.title}</h3>
              <p className="text-sm text-graphite-text-secondary font-sans leading-relaxed">
                {fishin.summary}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {fishin.technologies.map((t) => (
                  <span key={t} className="text-xs font-mono px-2.5 py-1 rounded bg-graphite-card text-graphite-text-secondary border border-graphite-border">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={fishin.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono px-4 py-2.5 rounded bg-graphite-card border border-graphite-border text-graphite-text-primary hover:border-graphite-accent hover:text-graphite-accent transition-all"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </article>
        )}

      </div>
    </section>
  );
};
