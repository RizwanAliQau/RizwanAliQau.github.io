export interface SkillCategory {
  title: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Deep Learning Frameworks',
    items: ['PyTorch', 'TensorFlow', 'Keras'],
  },
  {
    title: 'Development Tools',
    items: ['Python', 'OpenCV', 'MATLAB', 'LaTeX', 'Git', 'Linux'],
  },
  {
    title: 'Research Specialties',
    items: [
      'Computer Vision',
      'Self-Supervised Learning',
      'Industrial Anomaly Detection',
      'Pseudo-Anomaly Insertion',
      'Visual Inspection Systems',
      'Deep Learning Architecture Design',
    ],
  },
];
