# Launch Ready — Tech Job Guide

A personalized Next.js study guide and planning tool to get hired at a tech company.
Built for Abigail Lehr.

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm run start
```

## Deploying to Vercel

The easiest way to deploy this is via [Vercel](https://vercel.com):

```bash
npx vercel
```

Or connect your GitHub repo at vercel.com for automatic deploys.

---

## Project Structure

```
tech-job-guide/
├── app/
│   ├── layout.tsx        # Root layout with fonts & metadata
│   ├── page.tsx          # Main page (client shell, tab state)
│   └── globals.css       # Global styles + Tailwind
├── components/
│   ├── TabBar.tsx         # Navigation tabs
│   ├── ProgressBar.tsx    # Checklist progress tracker
│   ├── RoadmapPanel.tsx   # 12-week timeline
│   ├── SkillsPanel.tsx    # Animated skill bars
│   ├── ChecklistPanel.tsx # Interactive checklist (localStorage)
│   ├── ResourcesPanel.tsx # Curated resources
│   ├── TipsPanel.tsx      # Insider tips
│   └── Tag.tsx            # Reusable tag/badge
└── lib/
    ├── data.ts            # All content — edit here to customize
    └── useProgress.ts     # Checklist state + localStorage hook
```

## Customizing Content

All guide content lives in `lib/data.ts`. To update:

- **Roadmap items** → edit the `ROADMAP` array
- **Skills** → edit `SKILL_CATEGORIES`
- **Checklist tasks** → edit `CHECKLIST_CARDS`
- **Resources** → edit `RESOURCE_SECTIONS`
- **Tips** → edit `TIPS`

## Tech Stack

- [Next.js 14](https://nextjs.org) (App Router)
- [TypeScript](https://typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- Google Fonts (Syne + DM Mono)
