# Rizwan Ali Shah — Academic Portfolio

Personal academic portfolio built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployed to GitHub Pages at **https://rizwanaliqau.github.io**.

## Features

- Minimalist academic design with dark mode
- Modular content in `src/data/` for easy updates
- Responsive layout for mobile and desktop
- GitHub Actions deployment to GitHub Pages

## Project Structure

```
src/
├── components/
│   ├── Hero.astro           # About / bio section
│   ├── Experience.astro     # Professional timeline
│   ├── Publications.astro   # Publication grid
│   ├── PublicationCard.astro
│   ├── Skills.astro
│   └── Contact.astro
├── data/
│   ├── site.ts              # Bio, email, CV path, footer
│   ├── experience.ts        # Roles & funded projects
│   ├── publications.ts      # Journals, conferences, working papers
│   └── skills.ts
├── layouts/
│   └── BaseLayout.astro
└── pages/
    └── index.astro
```

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
| Bio, email, CV link | `src/data/site.ts` |
| Experience & projects | `src/data/experience.ts` |
| Publications | `src/data/publications.ts` |
| Skills | `src/data/skills.ts` |
| Working papers | Append to `workingPapers` in `publications.ts` |

## CV File

Copy your CV to:

```
public/rizwan_Ali_shah_CV_final_2026.pdf
```

## Deployment

1. Enable **GitHub Pages** → Source: **GitHub Actions**
2. Push to `main` — the workflow in `.github/workflows/deploy.yml` builds and deploys automatically

## License

Personal portfolio — all rights reserved.
