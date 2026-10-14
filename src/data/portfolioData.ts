import type { Project, Poem, LiteraryInfluence, ExperienceItem, EducationItem, CodingProfile } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Tejasvi Dev',
  title: 'Application Developer · Creative Writer',
  concept: 'The Architecture of Thought',
  heroLine: 'Between logic and language.',
  heroSubtext: 'Engineering gives ideas structure; literature gives them meaning.',
  bio: 'Application developer at Caelius Consulting and Computer Science undergraduate at ABES Engineering College. I build disciplined algorithmic software that solves real-world computer vision problems, while writing poetry and prose that explores human vulnerability, memory, and conscience.',
  email: 'tejasvi2324@gmail.com',
  github: 'https://github.com/tejasvidev',
  linkedin: 'https://www.linkedin.com/in/tejasvi-dev/',
  allPoetry: 'https://allpoetry.com/Tejasvi_Dev',
  codeChef: 'https://www.codechef.com/users/tejasvi_2108',
  leetCode: 'https://leetcode.com/u/tejasvidev/',
  resumeUrl: '#contact', // Direct jump / resume trigger
};

export const PROJECTS: Project[] = [
  {
    id: 'neurodrive',
    title: 'NeuroDrive',
    slug: 'neurodrive',
    category: 'Computer Vision & AI',
    featured: true,
    tagline: 'Real-time driver fatigue and drowsiness detection powered by facial geometry and offline computer vision.',
    summary: 'An academic research engineering project engineered to mitigate driver fatigue and micro-sleep events in real time. Built entirely with offline, CPU-efficient algorithms to eliminate dependency on specialized hardware or cloud connectivity.',
    technologies: ['Python', 'OpenCV', 'MediaPipe Face Landmarker', 'NumPy'],
    githubUrl: 'https://github.com/tejasvidev/NeuroDrive',
    metrics: [
      { label: 'Inference Target', value: 'Real-Time (30 FPS)', verified: true },
      { label: 'Execution Environment', value: 'Offline CPU', verified: true },
      { label: 'Facial Landmarks Analyzed', value: '478 3D Points', verified: true },
      { label: 'Subsystems Evaluated', value: 'Ocular, Oral & Pose', verified: true },
    ],
    caseStudy: {
      context: 'Vehicular accidents caused by driver drowsiness and micro-sleep are a major cause of preventable casualties worldwide. NeuroDrive was engineered as an academic computer vision pipeline that monitors driver physiological states via standard consumer webcams without latency or cloud dependencies.',
      architectureOverview: 'The system ingests raw camera frames via OpenCV, processes facial landmark geometry via Google MediaPipe Face Landmarker, and runs real-time mathematical evaluations across three distinct subsystems: Eye Aspect Ratio (EAR), Mouth Aspect Ratio (MAR), and Head-Pose Estimation using Perspective-n-Point (PnP) geometry.',
      technicalPipeline: [
        {
          step: '01 / Video Stream Ingestion',
          description: 'Captures 30 FPS video frames locally via OpenCV and feeds preprocessed matrices directly to landmark inference.',
        },
        {
          step: '02 / Facial Landmark Localization',
          description: 'Extracts 478 3D facial coordinates using MediaPipe Face Landmarker without offloading data to external servers.',
        },
        {
          step: '03 / Geometric Ocular & Oral Ratios',
          description: 'Computes Euclidean distance ratios across eyelid contours (EAR) and lip boundaries (MAR) to detect prolonged eye closure and yawning.',
        },
        {
          step: '04 / Head-Pose Vector Alignment',
          description: 'Solves perspective vectors (pitch, yaw, roll) to detect head nodding and prolonged disorientation.',
        },
        {
          step: '05 / Temporal Filtering & Safety Scoring',
          description: 'Aggregates multi-metric states over a sliding frame buffer to prevent false alarms from natural single-frame blinks, outputting an instantaneous driver safety score.',
        },
      ],
      mathematicalFoundations: [
        {
          formulaName: 'Eye Aspect Ratio (EAR)',
          formulaText: 'EAR = (||p2 - p6|| + ||p3 - p5||) / (2 * ||p1 - p4||)',
          explanation: 'Evaluates Euclidean distance between vertical eyelid points normalized by horizontal eye width. When eye closure persists beneath a calibrated threshold across consecutive frames, micro-sleep is flagged.',
        },
        {
          formulaName: 'Mouth Aspect Ratio (MAR)',
          formulaText: 'MAR = ||p_top - p_bottom|| / ||p_left - p_right||',
          explanation: 'Quantifies vertical mouth expansion relative to oral width to distinguish yawning frequency from natural speech articulation.',
        },
        {
          formulaName: 'Head-Pose Estimation',
          formulaText: 'PnP (Perspective-n-Point) Vector Solve',
          explanation: 'Projects 2D image coordinates against canonical 3D facial models to compute rotational angles and detect drowsiness-induced head drooping.',
        },
      ],
      limitations: [
        'Lighting Variability: Low ambient lighting or nighttime driving conditions degrade contrast on standard non-infrared webcams.',
        'Facial Occlusion: Polarized sunglasses, heavy tinted eyewear, or masks obstruct landmark tracking.',
        'Academic Scope: Designed for academic research and testing; not certified as an automotive-grade safety system.',
      ],
      futureRoadmap: [
        'Near-Infrared (NIR) Camera Optimization: Integrating illumination models to ensure 24/7 night-driving robustness.',
        'Driver-State Deep Learning Classification: Deploying lightweight Temporal Convolutional Networks (TCN) to classify progressive cognitive fatigue beyond instantaneous geometric blinks.',
      ],
    },
  },
  {
    id: 'fishin',
    title: "Fishin'",
    slug: 'fishin',
    category: 'Application Engineering',
    featured: true,
    tagline: 'Engineering application project exploring interactive software systems and user workflows.',
    summary: 'Secondary application development project exploring responsive interface design, structured state workflows, and modern web application architecture.',
    technologies: ['React', 'TypeScript', 'Web APIs', 'Tailwind CSS'],
    githubUrl: 'https://github.com/tejasvidev',
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'caelius',
    company: 'Caelius Consulting',
    role: 'Application Developer',
    period: 'Present',
    location: 'India',
    description: 'Working as an Application Developer building modern, maintainable software systems and contributing to enterprise engineering solutions.',
    verifiedFocus: [
      'Application architecture, user interfaces, and modular component development',
      'Collaborating across engineering workflows with an emphasis on code quality and precision',
    ],
    technologies: ['React', 'TypeScript', 'Modern JavaScript', 'Web Engineering'],
  },
];

export const EDUCATION: EducationItem = {
  institution: 'ABES Engineering College',
  degree: 'B.Tech in Computer Science and Engineering',
  period: '2023 – 2027',
  score: {
    label: 'Academic Performance',
    value: 'CGPA 8.94',
    verified: true,
  },
  details: 'Focused on algorithms, data structures, computer vision, operating systems, and discrete mathematics.',
};

export const CODING_STATS: CodingProfile[] = [
  {
    platform: 'LeetCode & CodeChef',
    username: 'tejasvidev / tejasvi_2108',
    url: 'https://leetcode.com/u/tejasvidev/',
    verifiedStat: '900+ Combined Problems Solved',
  },
  {
    platform: 'LeetCode',
    username: 'tejasvidev',
    url: 'https://leetcode.com/u/tejasvidev/',
    verifiedStat: 'Data Structures & Algorithms',
  },
  {
    platform: 'CodeChef',
    username: 'tejasvi_2108',
    url: 'https://www.codechef.com/users/tejasvi_2108',
    verifiedStat: 'Competitive Programming',
  },
];

export const FEATURED_BOOK = {
  title: 'Falling For You',
  type: 'Featured Literary Publication',
  description: 'A reflective literary work exploring emotional vulnerability, the weight of longing, human connection, and quiet introspection.',
  allPoetryUrl: 'https://allpoetry.com/Tejasvi_Dev',
};

export const POEMS: Poem[] = [
  {
    id: '1',
    title: 'Roses are red but even the thorns!',
    slug: 'roses-are-red-but-even-the-thorns',
    language: 'en',
    script: 'latin',
    themes: ['Vulnerability', 'Contrasts', 'Beauty & Pain'],
    status: 'Candidate Title',
    externalUrl: 'https://allpoetry.com/Tejasvi_Dev',
    previewNote: 'Candidate poem title from the author\'s archive. Authentic stanza text preserved on AllPoetry.',
  },
  {
    id: '2',
    title: 'The Dagger of Love',
    slug: 'the-dagger-of-love',
    language: 'en',
    script: 'latin',
    themes: ['Longing', 'Betrayal', 'Emotional Resonance'],
    status: 'Candidate Title',
    externalUrl: 'https://allpoetry.com/Tejasvi_Dev',
    previewNote: 'Candidate poem title from the author\'s archive.',
  },
  {
    id: '3',
    title: 'The Moon And You',
    slug: 'the-moon-and-you',
    language: 'en',
    script: 'latin',
    themes: ['Solitude', 'Memory', 'Quiet Night'],
    status: 'Candidate Title',
    externalUrl: 'https://allpoetry.com/Tejasvi_Dev',
    previewNote: 'Candidate poem title from the author\'s archive.',
  },
  {
    id: '4',
    title: 'The Way You Love',
    slug: 'the-way-you-love',
    language: 'en',
    script: 'latin',
    themes: ['Devotion', 'Introspection', 'Tenderness'],
    status: 'Candidate Title',
    externalUrl: 'https://allpoetry.com/Tejasvi_Dev',
    previewNote: 'Candidate poem title from the author\'s archive.',
  },
  {
    id: '5',
    title: 'तलाश',
    slug: 'talash',
    language: 'hi',
    script: 'devanagari',
    themes: ['आत्म-खोज', 'यात्रा', 'स्मृति'],
    status: 'Candidate Title',
    externalUrl: 'https://allpoetry.com/Tejasvi_Dev',
    previewNote: 'हिंदी कविता — आत्म-अवलोकन और खोज की यात्रा।',
  },
  {
    id: '6',
    title: 'इश्क़ वालों को फुरसत कहाँ जो गम लिखेंगे',
    slug: 'ishq-walon-ko-fursat-kahan',
    language: 'hi',
    script: 'devanagari',
    themes: ['इश्क़', 'समय', 'वेदना और अनुभूति'],
    status: 'Candidate Title',
    externalUrl: 'https://allpoetry.com/Tejasvi_Dev',
    previewNote: 'ग़ज़लनुमा नज़्म — प्रेम और वेदना की काव्यात्मक अभिव्यक्ति।',
  },
  {
    id: '7',
    title: 'हम कुछ ऐसे गणतंत्र कहलायेंगे',
    slug: 'hum-kuch-aise-ganatantra-kehlayenge',
    language: 'hi',
    script: 'devanagari',
    themes: ['सामाजिक चेतना', 'स्वाभिमान', 'नागरिक बोध'],
    status: 'Candidate Title',
    externalUrl: 'https://allpoetry.com/Tejasvi_Dev',
    previewNote: 'समसामयिक एवं सामाजिक चेतना पर आधारित हिंदी कविता।',
  },
];

export const LITERARY_INFLUENCES: LiteraryInfluence[] = [
  {
    id: 'kafka',
    author: 'Franz Kafka',
    era: 'Early 20th Century (Prague)',
    philosophicalFocus: 'Existential questions, alienation, inner conflict, and systemic absurdity',
    connectingThemes: 'Reason and emotion · Despair and hope',
    reflection: 'Kafka exposes the psychological weight of rational systems that turn indifferent to the human spirit. In engineering, algorithmic logic is comforting in its determinism; Kafka reminds me that when human life is subjected to rigid machinery without empathy, absurdity ensues.',
  },
  {
    id: 'wordsworth',
    author: 'William Wordsworth',
    era: 'Romantic Era (England)',
    philosophicalFocus: 'Nature, memory, solitude, and emotion recollected in tranquility',
    connectingThemes: 'Solitude and belonging · Memory and craft',
    reflection: 'Wordsworth taught me the quiet discipline of observation. In a digital landscape defined by velocity and sensory overload, his verse insists on stillness—reminding me that both good poetry and elegant code require patient reflection.',
  },
  {
    id: 'dickens',
    author: 'Charles Dickens',
    era: 'Victorian Era (England)',
    philosophicalFocus: 'Social realities, institutional critique, and human vulnerability',
    connectingThemes: 'Identity and society · Human stakes in technical systems',
    reflection: 'Dickens demonstrates that beneath every institutional structure lie vulnerable individual lives. When building software or writing prose, his work keeps me attuned to human stakes and ethical consequence.',
  },
  {
    id: 'austen',
    author: 'Jane Austen',
    era: 'Regency Era (England)',
    philosophicalFocus: 'Psychology, relationships, moral irony, and social etiquette',
    connectingThemes: 'Reason and emotion · Keen social observation',
    reflection: 'Austen is a master of micro-architecture: the subtle social rules and psychological undercurrents governing conversation. Her razor-sharp irony demonstrates how immense narrative power can be achieved through disciplined precision.',
  },
  {
    id: 'hosseini',
    author: 'Khaled Hosseini',
    era: 'Contemporary (Afghanistan / Diaspora)',
    philosophicalFocus: 'Love, loss, guilt, friendship, sacrifice, and redemption',
    connectingThemes: 'Love and loss · Guilt and redemption',
    reflection: 'Hosseini writes with an emotional openness that is devastating and cathartic. His narratives remind me of the enduring cost of loyalty and the redemptive capacity of forgiveness across fractured histories.',
  },
  {
    id: 'dinkar',
    author: 'Ramdhari Singh Dinkar',
    era: 'Modern Hindi (Rashtrakavi)',
    philosophicalFocus: 'Courage, resistance, moral dignity, and righteous conviction',
    connectingThemes: 'Identity and society · Courage and moral duty',
    reflection: 'Dinkar’s high-register verse resonates with profound moral conviction. His poetry possesses an architectural force that awakens civic conscience, showing how language can stand as an unyielding fortress of dignity.',
  },
  {
    id: 'prasad',
    author: 'Jaishankar Prasad',
    era: 'Chhayavad Era (Hindi Literature)',
    philosophicalFocus: 'Philosophical reflection, romanticism, consciousness, and the sublime',
    connectingThemes: 'Reason and emotion · Metaphysical reflection',
    reflection: 'Prasad’s metaphysical depth in the Chhayavadi tradition explores human consciousness and spiritual longing. His work shows that poetic language can articulate the transcendental depths that empirical logic cannot measure.',
  },
  {
    id: 'faraz-faiz',
    author: 'Ahmad Faraz & Faiz Ahmed Faiz',
    era: 'Modern Urdu Ghazal & Progressive Writers Movement',
    philosophicalFocus: 'Longing, separation, lyrical beauty, and collective political struggle',
    connectingThemes: 'Love and loss · Collective struggle and hope',
    reflection: 'Faiz and Faraz achieved a rare synthesis: marrying the tender intimacy of the ghazal with the collective struggle for justice and freedom. They teach that profound personal vulnerability can speak directly to universal resistance.',
  },
];
