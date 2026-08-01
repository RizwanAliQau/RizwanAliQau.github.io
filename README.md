# Rizwan Ali Shah — Academic Portfolio

Personal academic portfolio built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), live at **https://rizwanaliqau.github.io**.

## Features
- Brand-first hero with optical-grid atmosphere and motion
- Modular content in `src/data/` for easy updates
- Research highlights, timeline, publications, and skills
- Light-first theme with optional dark mode
- GitHub Actions deployment to GitHub Pages

## Local Development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Updating Content

| What to change | File |
|----------------|------|
| Bio, email, CV, research highlights | `src/data/site.ts` |
| Experience & projects | `src/data/experience.ts` |
| Publications | `src/data/publications.ts` |
| Skills | `src/data/skills.ts` |

## Deployment

1. Enable **GitHub Pages** → Source: **GitHub Actions**
2. Push to `main` — `.github/workflows/deploy.yml` builds and deploys automatically
