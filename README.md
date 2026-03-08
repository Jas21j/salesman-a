# Salesman Solutions — Website (Salesman A)

Production-grade website for Salesman Solutions, a platform venture architecture company.  
This repository contains **only the website** and its dependencies.

For a detailed map of routes, data, and components, see **[WEBSITE_STRUCTURE.md](./WEBSITE_STRUCTURE.md)**.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** with CSS variable brand tokens
- **Framer Motion** for scroll and entrance animations
- **Google Fonts** — Playfair Display + DM Sans

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── case-studies/
│   │   └── [slug]/
│   ├── contact/
│   ├── legal/
│   │   ├── privacy/
│   │   └── terms/
│   ├── projects/
│   │   └── property-operations/
│   ├── services/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Page-specific sections
│   └── ui/                 # Reusable components
├── data/                   # CMS-ready TypeScript content
├── lib/                    # Animation utilities
├── types/                  # TypeScript type definitions
public/
└── images/                 # Logo, hero image, assets
```

## Content Updates

All content lives in typed TypeScript files under `src/data/`:

- `case-studies.ts` — All 4 coded operations
- `projects.ts` — Active projects
- `services.ts` — Service groups
- `stats.ts` — Real operational metrics
- `timeline.ts` — Founder timeline
- `navigation.ts` — Nav items + company info

## Brand Tokens

Colors and typography defined in `tailwind.config.ts`:

- **Navy** `#1f2a44` — Primary dark
- **Sand** `#d6b48c` — Accent
- **Off-white** `#faf9f7` — Alternate backgrounds
- **Display font** — Playfair Display
- **Body font** — DM Sans

## Build & Deploy

```bash
npm run build    # Production build
npm start        # Start production server
```

## Contact

- Phone: 954-830-6310
- Email: JaheimSalesman@gmail.com
