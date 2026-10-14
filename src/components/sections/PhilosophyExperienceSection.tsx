import React from 'react';
import { Award, Briefcase, GraduationCap, Code2, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE, EDUCATION, CODING_STATS } from '../../data/portfolioData';

export const PhilosophyExperienceSection: React.FC = () => {
  return (
    <div className="bg-ivory-base text-ivory-text-primary">
      
      {/* 03 / Personal Introduction & Philosophy */}
      <section id="philosophy" className="py-24 md:py-32 border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-baseline">
            
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-ivory-accent font-semibold block">
                02 / Core Philosophy
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-ivory-text-primary leading-tight">
                The Architecture of Thought.
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <blockquote className="font-serif text-2xl md:text-3xl text-ivory-text-primary/95 italic border-l-2 border-ivory-accent pl-6 py-2 leading-relaxed">
                "{PERSONAL_INFO.heroSubtext}"
              </blockquote>
              
              <div className="space-y-4 text-base text-ivory-text-secondary font-sans leading-relaxed pt-2">
                <p>
                  To write code is to construct order out of chaos—defining boundaries, enforcing invariants, and orchestrating logic that scales without fail. Yet engineering alone answers <em>how</em> a system behaves, rarely asking <em>why</em> it matters to the person in front of the screen.
                </p>
                <p>
                  Literature is the complementary half of the discipline. It records the irreducible nuances of memory, moral conflict, and human longing. By practicing both computer science and creative writing, I aim to build digital systems with architectural discipline and profound empathy.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 04 / Experience, Education & Rigor */}
      <section id="experience" className="py-24 md:py-32 border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="border-b border-ivory-border pb-8 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-ivory-accent font-semibold">
                03 / Technical Mastery & Experience
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-normal text-ivory-text-primary">
                Experience, education & rigor.
              </h2>
            </div>
            <p className="text-sm font-sans text-ivory-text-secondary max-w-sm">
              Verified academic achievements, industry engineering experience, and competitive algorithmic metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Professional Experience (7 Cols) */}
            <div className="lg:col-span-7 space-y-10">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-ivory-text-muted">
                <Briefcase className="w-4 h-4 text-ivory-accent" />
                <span>Professional Role</span>
              </div>

              {EXPERIENCE.map((exp) => (
                <div key={exp.id} className="border border-ivory-border rounded-xl p-8 bg-ivory-surface space-y-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="font-serif text-2xl text-ivory-text-primary font-medium">{exp.role}</h3>
                      <p className="text-sm font-sans font-medium text-ivory-accent">{exp.company}</p>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-ivory-card border border-ivory-border text-ivory-text-secondary">
                      {exp.period} · {exp.location}
                    </span>
                  </div>

                  <p className="text-sm text-ivory-text-secondary font-sans leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-mono uppercase text-ivory-text-muted block">Verified Scope:</span>
                    <ul className="space-y-1.5 text-xs text-ivory-text-secondary">
                      {exp.verifiedFocus.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-ivory-accent shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-ivory-border">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="text-xs font-mono px-2 py-0.5 rounded bg-ivory-card border border-ivory-border text-ivory-text-secondary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {/* Education Block */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-ivory-text-muted">
                  <GraduationCap className="w-4 h-4 text-ivory-accent" />
                  <span>Academic Scaffolding</span>
                </div>

                <div className="border border-ivory-border rounded-xl p-8 bg-ivory-surface space-y-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="font-serif text-xl text-ivory-text-primary font-medium">{EDUCATION.degree}</h3>
                      <p className="text-sm font-sans text-ivory-text-secondary">{EDUCATION.institution}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-ivory-accent/10 border border-ivory-accent/25 text-ivory-accent font-semibold block">
                        {EDUCATION.score.value}
                      </span>
                      <span className="text-[11px] font-mono text-ivory-text-muted mt-1 block">{EDUCATION.period}</span>
                    </div>
                  </div>
                  <p className="text-xs text-ivory-text-secondary font-sans leading-relaxed">
                    {EDUCATION.details}
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Problem-Solving Rigor & Verified Platforms (5 Cols) */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-ivory-text-muted">
                <Award className="w-4 h-4 text-ivory-accent" />
                <span>Algorithmic Rigor</span>
              </div>

              {/* 900+ Problems Hero Metric Card */}
              <div className="border border-ivory-border rounded-xl p-8 bg-gradient-to-br from-ivory-surface to-ivory-card space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-ivory-text-muted block">
                  Problem-Solving Benchmark
                </span>
                <div className="space-y-1">
                  <span className="font-serif text-5xl font-normal text-ivory-text-primary">900+</span>
                  <p className="text-sm font-sans font-medium text-ivory-accent">Combined Problems Solved</p>
                </div>
                <p className="text-xs text-ivory-text-secondary font-sans leading-relaxed">
                  Demonstrated analytical consistency and algorithmic resilience across competitive platforms (LeetCode & CodeChef).
                </p>

                {/* Platform Links */}
                <div className="pt-4 border-t border-ivory-border space-y-2.5">
                  {CODING_STATS.map((stat, i) => (
                    <a
                      key={i}
                      href={stat.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg border border-ivory-border bg-ivory-base hover:border-ivory-accent hover:bg-ivory-surface transition-all text-xs font-mono group"
                    >
                      <div className="space-y-0.5">
                        <span className="font-semibold text-ivory-text-primary group-hover:text-ivory-accent transition-colors block">
                          {stat.platform}
                        </span>
                        <span className="text-ivory-text-muted text-[11px]">@{stat.username}</span>
                      </div>
                      <div className="flex items-center gap-1 text-ivory-text-secondary group-hover:text-ivory-accent">
                        <span className="text-[11px] font-medium">{stat.verifiedStat}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Technical Competencies Matrix */}
              <div className="border border-ivory-border rounded-xl p-6 bg-ivory-surface space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-ivory-text-muted">
                  <Code2 className="w-4 h-4 text-ivory-accent" />
                  <span>Technical Stack</span>
                </div>
                
                <div className="space-y-3 text-xs pt-1">
                  <div>
                    <span className="font-mono text-ivory-text-muted block mb-1">Languages:</span>
                    <div className="flex flex-wrap gap-1.5 font-mono">
                      {['Python', 'C++', 'TypeScript', 'JavaScript', 'SQL'].map((s) => (
                        <span key={s} className="px-2 py-0.5 rounded bg-ivory-card border border-ivory-border text-ivory-text-primary">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="font-mono text-ivory-text-muted block mb-1">Computer Vision & AI:</span>
                    <div className="flex flex-wrap gap-1.5 font-mono">
                      {['OpenCV', 'MediaPipe Face Landmarker', 'NumPy'].map((s) => (
                        <span key={s} className="px-2 py-0.5 rounded bg-ivory-card border border-ivory-border text-ivory-text-primary">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="font-mono text-ivory-text-muted block mb-1">Web & Systems Architecture:</span>
                    <div className="flex flex-wrap gap-1.5 font-mono">
                      {['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Git / GitHub'].map((s) => (
                        <span key={s} className="px-2 py-0.5 rounded bg-ivory-card border border-ivory-border text-ivory-text-primary">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
