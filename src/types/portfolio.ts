export type LanguageScript = 'en' | 'hi';

export interface ProjectMetric {
  label: string;
  value: string;
  verified: boolean;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: 'Computer Vision & AI' | 'Application Engineering';
  featured: boolean;
  tagline: string;
  summary: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  metrics?: ProjectMetric[];
  caseStudy?: {
    context: string;
    architectureOverview: string;
    technicalPipeline: {
      step: string;
      description: string;
    }[];
    mathematicalFoundations: {
      formulaName: string;
      formulaText: string;
      explanation: string;
    }[];
    limitations: string[];
    futureRoadmap: string[];
  };
}

export interface Poem {
  id: string;
  title: string;
  slug: string;
  language: LanguageScript;
  script: 'latin' | 'devanagari';
  themes: string[];
  status: 'Candidate Title' | 'Published';
  externalUrl?: string;
  previewNote?: string;
}

export interface LiteraryInfluence {
  id: string;
  author: string;
  era: string;
  philosophicalFocus: string;
  connectingThemes: string;
  reflection: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  verifiedFocus: string[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  score: {
    label: string;
    value: string;
    verified: boolean;
  };
  details: string;
}

export interface CodingProfile {
  platform: string;
  username: string;
  url: string;
  verifiedStat: string;
}
