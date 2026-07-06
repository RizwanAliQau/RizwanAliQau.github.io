export interface ExperienceEntry {
  role: string;
  organization: string;
  period: string;
  location: string;
  summary: string;
  projects?: {
    title: string;
    funding: string;
    description: string;
  }[];
  highlights?: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Research & Development Engineer',
    organization: 'MSIS Lab, Chungbuk National University',
    period: 'Sep 2025 — Present',
    location: 'Cheongju, South Korea',
    summary:
      'Applying PhD expertise in deep learning-based anomaly detection to design robust, scalable vision systems for smart manufacturing and industrial inspection.',
    highlights: [
      'Self-supervised learning pipelines for defect detection and segmentation',
      'Synthetic anomaly generation for label-efficient model training',
      'Deployment-oriented research for real-time visual inspection systems',
    ],
  },
  {
    role: 'Research Assistant / AI Research Engineer',
    organization: 'Chungbuk National University',
    period: 'Mar 2021 — Aug 2025',
    location: 'Cheongju, South Korea',
    summary:
      'Conducted doctoral research on industrial visual anomaly detection, developing novel self-supervised frameworks, datasets, and publication-grade evaluation pipelines.',
    projects: [
      {
        title: 'Ministry of SMEs and Startups Project',
        funding: '66M KRW',
        description:
          'Contributed to government-funded R&D on intelligent visual inspection systems for small and medium manufacturing enterprises, focusing on practical anomaly detection deployment.',
      },
      {
        title: 'IITP National Project',
        funding: '1.3B+ KRW',
        description:
          'Participated in a large-scale national ICT R&D initiative developing AI-driven computer vision solutions, CNN accelerators, and smart-factory inspection technologies.',
      },
    ],
    highlights: [
      'Developed PAI-Lib: a pseudo-anomaly insertion library for diverse synthetic defect generation',
      'Proposed TASAD: a two-stage coarse-to-fine anomaly segmentation model (Image and Vision Computing, 2023)',
      'Built a connector anomaly dataset with 6,500+ samples across eight defect categories',
      'Explored multi-class anomaly detection (MCAD) with tailored augmentation and composite losses',
    ],
  },
  {
    role: 'Teaching Assistant',
    organization: 'Quaid-i-Azam University',
    period: 'Mar 2018 — Jan 2021',
    location: 'Islamabad, Pakistan',
    summary:
      'Supported undergraduate and graduate instruction in electronics and signal processing while developing foundations in machine learning and image analysis.',
  },
];
