export type PublicationType = 'journal' | 'conference' | 'working-paper';

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: PublicationType;
  doi?: string;
  href?: string;
  note?: string;
}

export const publications: Publication[] = [
  {
    title:
      'Self-Supervised Image Anomaly Detection Through Diverse Pseudo Anomaly Insertion',
    authors: 'R. A. Shah, O. Urmonov, H. W. Kim',
    venue: 'IEEE Access',
    year: 2025,
    type: 'journal',
    doi: '10.1109/ACCESS.2025.3523456',
    href: 'https://doi.org/10.1109/ACCESS.2025.3523456',
  },
  {
    title:
      'Patch-Shuffled Superpixel Synthetic Anomaly Insertion in Autoencoder Foreground Extracted Regions for Improved Visual Anomaly Detection',
    authors: 'R. A. Shah, Z. U. Arifeen, H. W. Kim, J.-W. Suh',
    venue: 'IEEE Access',
    year: 2025,
    type: 'journal',
    doi: '10.1109/ACCESS.2025.3603201',
    href: 'https://doi.org/10.1109/ACCESS.2025.3603201',
  },
  {
    title:
      'Two-Stage Coarse-to-Fine Image Anomaly Segmentation and Detection Model',
    authors: 'R. A. Shah, O. Urmonov, H. W. Kim',
    venue: 'Image and Vision Computing',
    year: 2023,
    type: 'journal',
    doi: '10.1016/j.imavis.2023.104817',
    href: 'https://doi.org/10.1016/j.imavis.2023.104817',
  },
  {
    title:
      'Real-Time CNN-Based Driver Distraction & Drowsiness Detection System',
    authors: 'R. A. Shah, H. W. Kim, et al.',
    venue: 'Intelligent Automation & Soft Computing',
    year: 2023,
    type: 'journal',
  },
  {
    title:
      'Advanced Color Pseudo Anomaly to Enhance Learning of Convolutional Neural Network Models',
    authors: 'R. A. Shah, H. W. Kim',
    venue: 'ICCE-Asia',
    year: 2023,
    type: 'conference',
    doi: '10.1109/ICCE-ASIA59966.2023.10326338',
    href: 'https://doi.org/10.1109/ICCE-ASIA59966.2023.10326338',
  },
  {
    title:
      'Enhancement of Anomaly Detection Using Two-Stage Autoencoder with Noise Filtering',
    authors: 'R. A. Shah, H. W. Kim',
    venue: 'ICNGC',
    year: 2022,
    type: 'conference',
  },
];

export const workingPapers: Publication[] = [
  // Append new working papers here as your research evolves.
];
